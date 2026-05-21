export async function GET() {
  return Response.json({
    status: "ok",
    project: "CareerSetu.ai",
    timestamp: new Date().toISOString()
  })
}
