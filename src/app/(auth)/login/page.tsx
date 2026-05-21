"use client"

import React, { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { signIn } from "next-auth/react"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const successParam = searchParams.get("success")
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    if (successParam) {
      setSuccessMessage(decodeURIComponent(successParam))
    }
  }, [successParam])

  const validate = () => {
    const tempErrors: Record<string, string> = {}
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      tempErrors.email = "Email zaroori hai"
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Valid email daalo"
    }

    // Password validation
    if (!formData.password) {
      tempErrors.password = "Password zaroori hai"
    }

    setErrors(tempErrors)
    return Object.keys(tempErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
    // Clear general form errors when user typing
    if (errors.form) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next.form
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    setSuccessMessage(null)
    
    try {
      // Step 1: Check if the user is registered in our database
      const checkUserRes = await fetch("/api/auth/check-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      })

      const checkData = await checkUserRes.json()

      if (checkUserRes.ok && checkData.exists === false) {
        setErrors({ form: "Ye email registered nahi hai. Pehle signup karo." })
        setIsLoading(false)
        return
      }

      // Step 2: Proceed with NextAuth Credentials Login
      const result = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (result?.error) {
        setErrors({ form: "Email ya password galat hai" })
        setIsLoading(false)
        return
      }

      // Simulate profile check via localStorage or direct callback redirection
      // A new user has no profile flag, they go to /onboarding. If completed, they go to /dashboard
      const isOnboarded = localStorage.getItem(`onboarded_${formData.email.toLowerCase()}`) === "true"
      
      const destination = callbackUrl !== "/dashboard" 
        ? callbackUrl 
        : (isOnboarded ? "/dashboard" : "/onboarding")

      router.push(destination)
      router.refresh()
    } catch (err) {
      console.error(err)
      setErrors({ form: "Server connecting me error. Kripya baad me try karein." })
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0d1a] px-4 py-12">
      <div className="w-full max-w-[420px] rounded-[16px] border border-[#1e1e3a] bg-[#0a0a15] p-10 shadow-2xl">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-xl font-bold text-white transition-opacity hover:opacity-90">
            <span>🚀</span>
            <span className="bg-gradient-to-r from-[#c8b4ff] to-[#82aaff] bg-clip-text text-transparent">CareerSetu.ai</span>
          </Link>
          <h2 className="mt-6 text-[22px] font-semibold text-[#c8b4ff]">Wapas Aao! 👋</h2>
          <p className="mt-1 text-sm text-[#546e7a]">Apne career journey ko continue karo</p>
        </div>

        {/* Success Toast / Alert */}
        {successMessage && (
          <div className="mt-4 rounded-lg bg-emerald-950/40 border border-emerald-500/30 p-3 text-center text-xs text-emerald-400 flex items-center justify-center gap-2">
            <span>✓</span>
            <span>{successMessage}</span>
          </div>
        )}

        {/* Form Error Banner */}
        {errors.form && (
          <div 
            className="mt-4 rounded-lg bg-red-950/40 border border-red-500/30 p-3 text-center text-xs font-medium" 
            style={{ color: "#F0997B" }}
          >
            {errors.form}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email Address */}
          <div>
            <label className="block text-xs font-medium text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="tumhara@email.com"
              className={`w-full rounded-lg border bg-[#0f0f23] px-3 py-2 text-sm text-white placeholder-[#546e7a] focus:outline-none focus:ring-1 ${
                errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#1e1e3a] focus:border-[#c8b4ff] focus:ring-[#c8b4ff]"
              }`}
            />
            {errors.email && <p className="mt-1 text-[11px] text-red-400">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-gray-400">Password</label>
              <Link href="/forgot-password" className="text-[11px] font-medium text-[#c8b4ff] hover:underline">
                Password bhool gaye?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Tumhara password"
                className={`w-full rounded-lg border bg-[#0f0f23] pl-3 pr-10 py-2 text-sm text-white placeholder-[#546e7a] focus:outline-none focus:ring-1 ${
                  errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-[#1e1e3a] focus:border-[#c8b4ff] focus:ring-[#c8b4ff]"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {errors.password && <p className="mt-1 text-[11px] text-red-400">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2a1f5e] border border-[#3a2f7e] px-4 py-2.5 text-sm font-semibold text-[#c8b4ff] transition-all hover:bg-[#3a2f7e] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 mt-2"
          >
            {isLoading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Logging in...</span>
              </>
            ) : (
              <span>Login Karo →</span>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#1e1e3a]" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-[#0a0a15] px-2 text-[#546e7a]">ya</span>
          </div>
        </div>

        {/* Google Login */}
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl })}
          className="w-full flex items-center justify-center gap-3 rounded-lg border border-[#1e1e3a] bg-transparent px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#1e1e3a]/30 active:scale-[0.98]"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="#FFFFFF"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#FFFFFF"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FFFFFF"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#FFFFFF"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Google se signup karo</span>
        </button>

        {/* Signup Link */}
        <p className="mt-8 text-center text-xs text-[#546e7a]">
          Naya user ho?{" "}
          <Link href="/signup" className="font-medium text-[#c8b4ff] hover:underline">
            Free mein join karo
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#0d0d1a] px-4 py-12">
        <div className="w-full max-w-[420px] rounded-[16px] border border-[#1e1e3a] bg-[#0a0a15] p-10 shadow-2xl flex flex-col items-center justify-center">
          <Loader2 className="animate-spin text-[#c8b4ff]" size={32} />
          <p className="mt-4 text-sm text-[#546e7a]">Loading...</p>
        </div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  )
}
