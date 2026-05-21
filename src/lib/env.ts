// Clean environment variables (remove quotes if copied from .env literally on Railway)
if (process.env.DATABASE_URL) {
  process.env.DATABASE_URL = process.env.DATABASE_URL.replace(/^["']|["']$/g, "")
}
if (process.env.AUTH_SECRET) {
  process.env.AUTH_SECRET = process.env.AUTH_SECRET.replace(/^["']|["']$/g, "")
}
if (process.env.NEXTAUTH_SECRET) {
  process.env.NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET.replace(/^["']|["']$/g, "")
}
if (process.env.GOOGLE_CLIENT_ID) {
  process.env.GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID.replace(/^["']|["']$/g, "")
}
if (process.env.GOOGLE_CLIENT_SECRET) {
  process.env.GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET.replace(/^["']|["']$/g, "")
}
