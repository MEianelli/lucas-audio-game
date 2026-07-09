import { deleteCookie } from "@/utils/cookie";

// Clears both auth mechanisms: legacy encrypted cookie (client-side)
// and Supabase session cookies (via the logout API route).
export async function logoutClient() {
  deleteCookie();
  try {
    await fetch("/api/auth/logout", { method: "POST" });
  } catch {
    // network failure: legacy cookie already cleared, session cookie expires server-side
  }
}
