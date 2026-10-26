import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  authRoutes,
  apiAuthPrefix,
  publicRoutes,
  Root,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);

  const isPublicRoute =
    publicRoutes.some((route) => nextUrl.pathname.startsWith(route)) ||
    nextUrl.pathname === Root;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      const callbackUrl =
        nextUrl.searchParams.get("callbackUrl") ??
        nextUrl.searchParams.get("callback");

      const safeCallbackUrl =
        callbackUrl &&
        callbackUrl.startsWith("/") &&
        !callbackUrl.startsWith("//") &&
        !callbackUrl.includes("\\")
          ? callbackUrl
          : DEFAULT_LOGIN_REDIRECT;

      return Response.redirect(new URL(safeCallbackUrl, nextUrl));
    }

    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    const callbackUrl = nextUrl.pathname + nextUrl.search;

    const loginUrl = new URL("/auth/login", nextUrl);
    loginUrl.searchParams.set("callbackUrl", callbackUrl);

    return Response.redirect(loginUrl);
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
