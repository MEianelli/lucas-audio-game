import { supabase } from "@/lib/supabase";

export async function CheckIPAttempts(ip: string | undefined) {
  const { data, error } = await supabase.from("ips").select().eq("ip", ip).single();
  console.log("error :", error);
  console.log("data :", data);

  if (!data?.id) {
    await supabase.from("ips").insert({ ip, attempts: 1 });
    return true;
  }

  if (data?.attempts < 3) {
    await supabase
      .from("ips")
      .update({ ip, attempts: data.attempts + 1 })
      .eq("id", data.id);
    return true;
  } else {
    return false;
  }
}
