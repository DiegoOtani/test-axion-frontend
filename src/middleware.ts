import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "@/utils/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value;

  const isLoginPage = request.nextUrl.pathname === '/login';

  const payload = token ? await verifyToken(token) : null;

  if (!payload && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isLoginPage && payload) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/people/:path*",
    "/place/:path*",
    "/foods/:path*",
    "/login",
  ]
};
