import { NextResponse } from "next/server"

export async function GET() {
  const getInfo = (val: string | undefined) => {
    if (!val) return { exists: false }
    return {
      exists: true,
      length: val.length,
      start: val.substring(0, 4),
      end: val.substring(val.length - 4),
      charCodeStart: val.charCodeAt(0),
      charCodeEnd: val.charCodeAt(val.length - 1)
    }
  }

  return NextResponse.json({
    DATABASE_URL: getInfo(process.env.DATABASE_URL),
    AUTH_SECRET: getInfo(process.env.AUTH_SECRET),
    NEXTAUTH_SECRET: getInfo(process.env.NEXTAUTH_SECRET),
    GOOGLE_CLIENT_ID: getInfo(process.env.GOOGLE_CLIENT_ID),
    GOOGLE_CLIENT_SECRET: getInfo(process.env.GOOGLE_CLIENT_SECRET),
    AUTH_URL: getInfo(process.env.AUTH_URL),
    NEXTAUTH_URL: getInfo(process.env.NEXTAUTH_URL),
    NODE_ENV: process.env.NODE_ENV
  })
}
