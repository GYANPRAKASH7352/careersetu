import { NextResponse } from "next/server"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, password, role } = body

    // Validate name required
    if (!name || typeof name !== "string" || name.trim() === "") {
      return NextResponse.json(
        { error: "Naam zaroori hai" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Valid email daalo" },
        { status: 400 }
      )
    }

    // Validate password min 8 characters
    if (!password || password.length < 8) {
      return NextResponse.json(
        { error: "Password kam se kam 8 characters ka hona chahiye" },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingUser = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    })

    if (existingUser) {
      return NextResponse.json(
        { error: "Ye email already registered hai. Login karo." },
        { status: 400 }
      )
    }

    // Hash password with bcrypt (cost factor 12)
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create user in database
    const user = await db.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        role: role || "student",
      },
    })

    return NextResponse.json(
      { message: "Account ban gaya! Ab login karo.", userId: user.id },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Registration error:", error)
    return NextResponse.json(
      { error: "Kuch galat hua. Kripya dobara prayas karein." },
      { status: 500 }
    )
  }
}
