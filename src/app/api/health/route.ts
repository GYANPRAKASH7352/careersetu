export async function GET() {
  return Response.json({
    status: "ok",
    project: "CareerSetu.ai",
    timestamp: new Date().toISOString(),
    commit: process.env.RAILWAY_GIT_COMMIT_SHA || "local-dev"
  })
}
