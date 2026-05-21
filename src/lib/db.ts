import { PrismaClient } from '@prisma/client'

// Clean environment variables (remove quotes if copied from .env literally on Railway)
if (process.env.DATABASE_URL) {
  process.env.DATABASE_URL = process.env.DATABASE_URL.replace(/^["']|["']$/g, "")
}

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
export const db = globalForPrisma.prisma || new PrismaClient()
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
