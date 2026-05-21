import NextAuth from "next-auth"
import { authConfig } from "./auth.config"

export const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const pathname = nextUrl.pathname
  const isProtectedRoute = 
    pathname === "/dashboard" || pathname.startsWith("/dashboard/") ||
    pathname === "/onboarding" || pathname.startsWith("/onboarding/") ||
    pathname === "/profile" || pathname.startsWith("/profile/") ||
    pathname === "/tools" || pathname.startsWith("/tools/")

  const isAuthRoute = 
    nextUrl.pathname === "/login" ||
    nextUrl.pathname === "/signup"

  if (isProtectedRoute && !isLoggedIn) {
    let callbackUrl = nextUrl.pathname
    if (nextUrl.search) {
      callbackUrl += nextUrl.search
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl)
    return Response.redirect(new URL(`/login?callbackUrl=${encodedCallbackUrl}`, nextUrl))
  }

  if (isAuthRoute && isLoggedIn) {
    return Response.redirect(new URL("/dashboard", nextUrl))
  }

  return
})

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes) except auth endpoints
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api(?!/auth)|_next/static|_next/image|favicon.ico).*)",
  ],
}
