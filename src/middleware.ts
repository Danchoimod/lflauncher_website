import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "vi", "es", "ru", "ar"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  if (!acceptLanguage) return defaultLocale;

  // Simple locale detection
  const detected = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].split("-")[0])
    .find((lang) => locales.includes(lang));

  return detected || defaultLocale;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, static, etc.)
    "/((?!api|_next/static|_next/image|screenshot|favicon.ico|icon.jpg|launcher_mockup.png|googlef6f7f1a7330174f7.html).*)",
  ],
};
