import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const user = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    })

    if (!user) {
      return NextResponse.json({ exists: false })
    }

    return NextResponse.json({ exists: true })
  } catch (error) {
    console.error("Check user error:", error)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
