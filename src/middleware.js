// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

// Middleware to check if user is authenticated
export async function middleware(req) {
  // Get the session token from the request
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If no token exists, redirect to the Google login page
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/api/auth/signin/google"; // Redirect to Google sign-in page
    return NextResponse.redirect(url);
  }

  // If the token exists (authenticated), allow the request to proceed
  return NextResponse.next();
}

// Protect specific routes (e.g., /dashboard or /profile)
export const config = {
  matcher: ["/dashboard", "/profile"], // Add routes you want to protect
};
