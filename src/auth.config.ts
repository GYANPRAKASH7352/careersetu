import type { NextAuthConfig } from "next-auth"

// Clean environment variables (remove quotes if copied from .env literally on Railway)
if (process.env.DATABASE_URL) process.env.DATABASE_URL = process.env.DATABASE_URL.replace(/^["']|["']$/g, "")
if (process.env.AUTH_SECRET) process.env.AUTH_SECRET = process.env.AUTH_SECRET.replace(/^["']|["']$/g, "")
if (process.env.NEXTAUTH_SECRET) process.env.NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET.replace(/^["']|["']$/g, "")
if (process.env.GOOGLE_CLIENT_ID) process.env.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID.replace(/^["']|["']$/g, "")
if (process.env.GOOGLE_CLIENT_SECRET) process.env.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET.replace(/^["']|["']$/g, "")

export const authConfig = {
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    newUser: "/onboarding",
  },
  providers: [], // Empty array as base, will be extended in src/lib/auth.ts
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.role = token.role as string
      }
      return session
    },
  },
} satisfies NextAuthConfig
