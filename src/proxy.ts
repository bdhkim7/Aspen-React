import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const SKIP =
  /^\/(_next|api|assets|css)(\/|$)|\/favicon\.ico$|\.[a-zA-Z0-9]+$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (SKIP.test(pathname)) return NextResponse.next();

  const requestHeaders = new Headers(request.headers);
  const isSpanish = pathname === "/es" || pathname.startsWith("/es/");
  requestHeaders.set("x-locale", isSpanish ? "es" : "en");

  if (!isSpanish) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const url = request.nextUrl.clone();
  url.pathname = pathname === "/es" ? "/" : pathname.slice(3) || "/";
  return NextResponse.rewrite(url, { request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|assets/|css/).*)"],
};
