import { supabase } from "@/lib/supabase";
import { Tables } from "@/types/types";
import { JSONParse } from "@/utils/json";
import { sanitizeSimpleHtml } from "@/utils/sanitizeSimpleHtml";
import { NextApiRequest, NextApiResponse } from "next";

type RequestBody = {
  id?: number;
  data?: Record<string, unknown>;
};

function sanitizeDataForTable(table: Tables, data?: Record<string, unknown>) {
  if (!data) return data;
  if (table !== "posts") return data;

  const html = data.html;
  if (typeof html !== "string") return data;

  return {
    ...data,
    html: sanitizeSimpleHtml(html),
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { table } = req.query as { table: Tables };
  const { limit, select } = req.query as { limit?: string; select?: string };

  if (!table) {
    return res.status(400).json({ error: "Table name is required" });
  }

  try {
    const body = JSONParse(req.body);
    switch (req.method) {
      case "GET":
        const query = supabase.from(table).select(select || "*");

        if (limit) {
          const limitNumber = parseInt(limit, 10);
          if (isNaN(limitNumber) || limitNumber <= 0) {
            return res
              .status(400)
              .json({ error: "Limit must be a positive number" });
          }
          query.limit(limitNumber);
        }

        const { data: getData, error: getError } = await query;

        if (getError) throw getError;
        return res.status(200).json(getData);

      case "POST":
        // Insert data into the table
        const postPayload = sanitizeDataForTable(table, body.data as Record<string, unknown>);
        const { data: postData, error: postError } = await supabase
          .from(table)
          .insert(postPayload)
          .select();

        if (postError) throw postError;
        return res.status(201).json(postData);

      case "PUT":
        const { id, data } = body as RequestBody;
        if (!id) {
          return res
            .status(400)
            .json({ error: "ID is required for updating a record" });
        }

        const putPayload = sanitizeDataForTable(table, data);
        const { data: putData, error: putError } = await supabase
          .from(table)
          .update(putPayload)
          .eq("id", id)
          .select();

        if (putError) throw putError;
        return res.status(200).json(putData);

      case "DELETE":
        // Delete data from the table
        const { id: deleteId } = body as RequestBody;
        if (!deleteId) {
          return res
            .status(400)
            .json({ error: "ID is required for deleting a record" });
        }

        const { data: deleteData, error: deleteError } = await supabase
          .from(table)
          .delete()
          .eq("id", deleteId);

        if (deleteError) throw deleteError;
        return res.status(200).json(deleteData);

      default:
        return res.status(405).json({ error: "Method not allowed" });
    }
  } catch (error: unknown) {
    return res
      .status(500)
      .json({ error: `${(error as { message: string })?.message}` });
  }
}
