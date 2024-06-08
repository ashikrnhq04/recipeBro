import { NextResponse } from "next/server";

export function middleware(request) {
  if (
    request.nextUrl.pathname.endsWith("/recipes") ||
    request.nextUrl.pathname.endsWith("/recipes/")
  ) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
}
