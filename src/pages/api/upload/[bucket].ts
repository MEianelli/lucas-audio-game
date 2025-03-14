import { supabase } from "@/lib/supabase";
import { TBuckets } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false, // Disable the default body parser to handle file uploads
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { bucket } = req.query as { bucket: TBuckets };

  if (!bucket) {
    return res.status(400).json({ error: "Bucket name is required" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    const chunks: Uint8Array[] = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // Parse the multipart form data
    const boundary = req.headers["content-type"]?.split("boundary=")[1];
    if (!boundary) {
      throw new Error("No boundary found in Content-Type header");
    }

    const files = parseMultipartFormData(buffer, boundary);

    const uploadResults: string[] = [];
    await Promise.all(
      files.map(async (file) => {
        const filePath = `${Date.now()}_${file.filename}`;
        const { data, error } = await supabase.storage
          .from(bucket) // Replace with your bucket name
          .upload(filePath, file.data, {
            contentType: file.contentType,
            upsert: true,
          });

        if (error) {
          throw error;
        }

        uploadResults.push(data.fullPath);
      })
    );

    return res
      .status(200)
      .json({ message: "Files uploaded successfully", data: uploadResults });
  } catch (error: unknown) {
    console.error("Error uploading files:", error);
    return res.status(500).json({
      message: "Error uploading files",
      error: `${(error as { message: string })?.message}`,
    });
  }
}

// Helper function to parse multipart form data
function parseMultipartFormData(buffer: Buffer, boundary: string) {
  const files: { filename: string; data: Buffer; contentType: string }[] = [];
  const parts = buffer.toString("binary").split(`--${boundary}`);

  parts.forEach((part) => {
    if (part.includes("Content-Disposition: form-data;")) {
      const filenameMatch = part.match(/filename="([^"]+)"/);
      const contentTypeMatch = part.match(/Content-Type: ([^\r\n]+)/);

      if (filenameMatch && contentTypeMatch) {
        const filename = filenameMatch[1];
        const contentType = contentTypeMatch[1];
        const data = Buffer.from(part.split("\r\n\r\n")[1], "binary");
        files.push({ filename, data, contentType });
      }
    }
  });

  return files;
}

//https://hiinnoepvfmkkdioyanc.supabase.co/storage/v1/object/public/audio/holyshitc.mp3
