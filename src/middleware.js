// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const referer = request.headers.get("referer");

  // Check if the user is trying to access /content
  if (url.pathname === "/content") {
    // If the referer is not the home page, redirect to home
    if (!referer || !referer.includes(process.env.NEXT_PUBLIC_APP_URL)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Continue with the request if no redirection is needed
  return NextResponse.next();
}

// Optional: Apply middleware only to the /content path
export const config = {
  matcher: "/content",
};
