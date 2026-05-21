import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET() {
  try {
    // Try to query the database
    const userCount = await db.user.count()
    return NextResponse.json({
      status: "success",
      message: "Database connection successful",
      userCount,
      env: {
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        hasAuthSecret: !!process.env.AUTH_SECRET,
        hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
        databaseUrlStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) : "none"
      }
    })
  } catch (error: any) {
    return NextResponse.json({
      status: "error",
      message: error.message || "Unknown error connecting to database",
      stack: error.stack,
      env: {
        hasDatabaseUrl: !!process.env.DATABASE_URL,
        hasAuthSecret: !!process.env.AUTH_SECRET,
        hasNextAuthSecret: !!process.env.NEXTAUTH_SECRET,
        databaseUrlStart: process.env.DATABASE_URL ? process.env.DATABASE_URL.substring(0, 15) : "none"
      }
    }, { status: 500 })
  }
}
