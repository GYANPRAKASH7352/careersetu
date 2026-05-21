import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    // Try to query the database
    const userCount = await db.user.count()
    const getSecretInfo = (sec: string | undefined) => {
      if (!sec) return { exists: false }
      return {
        exists: true,
        length: sec.length,
        start: sec.substring(0, 4),
        end: sec.substring(sec.length - 4),
        charCodeStart: sec.charCodeAt(0),
        charCodeEnd: sec.charCodeAt(sec.length - 1)
      }
    }
    return NextResponse.json({
      status: "success",
      message: "Database connection successful",
      userCount,
      env: {
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        databaseUrlStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) : "none",
        authSecret: getSecretInfo(process.env.AUTH_SECRET),
        nextAuthSecret: getSecretInfo(process.env.NEXTAUTH_SECRET),
      }
    })
  } catch (error: any) {
    const getSecretInfo = (sec: string | undefined) => {
      if (!sec) return { exists: false }
      return {
        exists: true,
        length: sec.length,
        start: sec.substring(0, 4),
        end: sec.substring(sec.length - 4),
        charCodeStart: sec.charCodeAt(0),
        charCodeEnd: sec.charCodeAt(sec.length - 1)
      }
    }
    return NextResponse.json({
      status: "error",
      message: error.message || "Unknown error connecting to database",
      stack: error.stack,
      env: {
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        databaseUrlStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) : "none",
        authSecret: getSecretInfo(process.env.AUTH_SECRET),
        nextAuthSecret: getSecretInfo(process.env.NEXTAUTH_SECRET),
      }
    }, { status: 500 })
  }
}
