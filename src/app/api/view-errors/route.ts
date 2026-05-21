import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const logPath = path.join(process.cwd(), "nextauth-errors.log")
    if (fs.existsSync(logPath)) {
      const content = fs.readFileSync(logPath, "utf-8")
      return new NextResponse(content, {
        headers: { "Content-Type": "text/plain" }
      })
    }
    return new NextResponse("No errors logged yet.", {
      headers: { "Content-Type": "text/plain" }
    })
  } catch (error: any) {
    return NextResponse.json({ error: error.message })
  }
}
