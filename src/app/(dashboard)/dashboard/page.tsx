import { auth, signOut } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function DashboardPage() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  const user = session.user
  const displayName = user.name || "User"
  const displayEmail = user.email || ""
  const role = user.role || "student"

  const isStudent = role.toLowerCase() === "student"
  const roleLabel = isStudent ? "Student" : "Working Professional"
  const roleEmoji = isStudent ? "🎓" : "💼"

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d1a] px-4 py-12">
      <div className="w-full max-w-[480px] rounded-[16px] border border-[#1e1e3a] bg-[#0a0a15] p-8 shadow-2xl space-y-6">
        {/* User Info Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#1e1e3a] text-2xl border border-[#3a2f7e]">
            {roleEmoji}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">
              Namaste, <span className="bg-gradient-to-r from-[#c8b4ff] to-[#82aaff] bg-clip-text text-transparent">{displayName}</span>! 👋
            </h1>
            <p className="text-sm text-[#546e7a] mt-1">{displayEmail}</p>
          </div>

          {/* Role Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#1e1e3a] bg-[#0f0f23] px-3.5 py-1 text-xs font-medium text-gray-300">
            <span className={isStudent ? "text-[#c8b4ff]" : "text-[#82aaff]"}>
              {roleEmoji}
            </span>
            <span>{roleLabel}</span>
          </div>
        </div>

        {/* Message Card */}
        <div className="rounded-xl border border-[#1e1e3a] bg-[#0f0f23] p-5 text-center shadow-inner">
          <p className="text-sm text-gray-300 leading-relaxed">
            🚀 Tumhara CareerSetu dashboard yahan aayega. Abhi profile setup karo!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-2">
          <Link
            href="/onboarding"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#c8b4ff] px-4 py-2.5 text-sm font-semibold text-[#0d0d1a] transition-all hover:bg-[#b59eff] active:scale-[0.98] text-center"
          >
            Profile Setup Karo →
          </Link>

          <form
            action={async () => {
              "use server"
              await signOut({ redirectTo: "/login" })
            }}
          >
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#1e1e3a] bg-transparent hover:bg-[#1e1e3a]/30 px-4 py-2.5 text-xs font-medium text-gray-400 hover:text-white transition-all active:scale-[0.98]"
            >
              Sign Out / Logout
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
