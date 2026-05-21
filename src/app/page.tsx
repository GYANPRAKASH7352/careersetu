import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0d0d1a] text-[#e8e8f0]">
      {/* BACKGROUND GLOW EFFECT */}
      <div 
        className="absolute top-10 right-10 -z-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{
          backgroundColor: "#c8b4ff",
          opacity: 0.05,
        }}
      />
      <div 
        className="absolute bottom-10 left-10 -z-10 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
        style={{
          backgroundColor: "#5DCAA5",
          opacity: 0.05,
        }}
      />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* SECTION 1: HERO SECTION */}
        <section className="flex flex-col items-center justify-center pt-20 pb-16 text-center">
          {/* Small label above heading */}
          <div 
            className="mb-6 font-semibold tracking-[2px] uppercase select-none"
            style={{
              color: "#EF9F27",
              fontSize: "12px",
            }}
          >
            🇮🇳 AI-POWERED CAREER INTELLIGENCE
          </div>

          {/* Main Heading (H1) */}
          <h1 className="text-[32px] md:text-[52px] font-bold leading-tight tracking-tight select-none">
            <span className="block bg-gradient-to-r from-[#c8b4ff] to-[#82aaff] bg-clip-text text-transparent">
              Apna Perfect Career Path
            </span>
            <span className="block bg-gradient-to-r from-[#c8b4ff] to-[#82aaff] bg-clip-text text-transparent">
              AI se Discover Karo
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className="mt-6 text-base md:text-lg leading-relaxed text-center mx-auto"
            style={{
              color: "#8888aa",
              maxWidth: "600px",
              fontSize: "18px",
            }}
          >
            12th Pass se lekar Working Professional tak — Government aur Private sector ke sabhi options ek jagah. Poora India cover.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/discover"
              className="w-full sm:w-auto inline-flex items-center justify-center text-center transition-all duration-200 hover:scale-[1.02] shadow-lg shadow-[#c8b4ff]/10 hover:shadow-[#c8b4ff]/20"
              style={{
                backgroundColor: "#c8b4ff",
                color: "#0d0d1a",
                fontWeight: 600,
                padding: "14px 28px",
                borderRadius: "10px",
              }}
            >
              Apna Career Discover Karo →
            </Link>
            <Link
              href="/tools"
              className="w-full sm:w-auto inline-flex items-center justify-center text-center bg-transparent transition-all duration-200 hover:bg-white/5 hover:scale-[1.02]"
              style={{
                border: "1px solid #2a2a4a",
                color: "#e8e8f0",
                padding: "14px 28px",
                borderRadius: "10px",
              }}
            >
              Free Tools Dekho
            </Link>
          </div>

          {/* Trust bar below buttons */}
          <div 
            className="mt-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 select-none"
            style={{
              color: "#546e7a",
              fontSize: "13px",
            }}
          >
            <span>✓ 50,000+ Jobs</span>
            <span className="text-[#2a2a4a]">|</span>
            <span>✓ 15,000+ Colleges</span>
            <span className="text-[#2a2a4a]">|</span>
            <span>✓ All 28 States</span>
            <span className="text-[#2a2a4a]">|</span>
            <span>✓ 100% Free</span>
          </div>
        </section>

        {/* SECTION 2: STATS BAR */}
        <section className="py-8">
          <div 
            className="w-full rounded-2xl border"
            style={{
              backgroundColor: "#0a0a15",
              borderColor: "#2a2a4a",
            }}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-8 text-center divide-y divide-[#2a2a4a]/30 lg:divide-y-0 lg:divide-x divide-solid">
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-extrabold" style={{ color: "#c8b4ff" }}>
                  50,000+
                </span>
                <span className="mt-2 text-xs md:text-sm font-medium" style={{ color: "#546e7a" }}>
                  Active Job Listings
                </span>
              </div>
              <div className="flex flex-col items-center justify-center pt-6 lg:pt-0">
                <span className="text-3xl md:text-4xl font-extrabold" style={{ color: "#c8b4ff" }}>
                  15,000+
                </span>
                <span className="mt-2 text-xs md:text-sm font-medium" style={{ color: "#546e7a" }}>
                  Colleges Across India
                </span>
              </div>
              <div className="flex flex-col items-center justify-center pt-6 lg:pt-0">
                <span className="text-3xl md:text-4xl font-extrabold" style={{ color: "#c8b4ff" }}>
                  28
                </span>
                <span className="mt-2 text-xs md:text-sm font-medium" style={{ color: "#546e7a" }}>
                  States Covered
                </span>
              </div>
              <div className="flex flex-col items-center justify-center pt-6 lg:pt-0">
                <span className="text-3xl md:text-4xl font-extrabold" style={{ color: "#c8b4ff" }}>
                  100%
                </span>
                <span className="mt-2 text-xs md:text-sm font-medium" style={{ color: "#546e7a" }}>
                  Free to Use
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FEATURE CARDS */}
        <section className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Card 1: Govt Jobs */}
            <div 
              className="group border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#c8b4ff]"
              style={{
                backgroundColor: "#0a0a15",
                borderColor: "#1e1e3a",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div className="text-4xl mb-4 select-none">🏛️</div>
              <h3 className="text-xl font-bold mb-2 text-[#e8e8f0]">Government Jobs</h3>
              <p className="text-[#8888aa] text-sm leading-relaxed">
                UPSC, SSC, Banking, Railway, Defence, State PSC — latest notifications aur eligibility guide
              </p>
            </div>

            {/* Card 2: Private Sector */}
            <div 
              className="group border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#5DCAA5]"
              style={{
                backgroundColor: "#0a0a15",
                borderColor: "#1e1e3a",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div className="text-4xl mb-4 select-none">🏢</div>
              <h3 className="text-xl font-bold mb-2 text-[#e8e8f0]">Private Sector</h3>
              <p className="text-[#8888aa] text-sm leading-relaxed">
                IT, Finance, Healthcare, Manufacturing — top companies ke saath career start karo
              </p>
            </div>

            {/* Card 3: Higher Education */}
            <div 
              className="group border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#EF9F27]"
              style={{
                backgroundColor: "#0a0a15",
                borderColor: "#1e1e3a",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <div className="text-4xl mb-4 select-none">🎓</div>
              <h3 className="text-xl font-bold mb-2 text-[#e8e8f0]">Higher Education</h3>
              <p className="text-[#8888aa] text-sm leading-relaxed">
                IITs, NITs, State Universities, Private Colleges — admission process aur eligibility
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold mb-16" style={{ color: "#c8b4ff" }}>
            Kaise Kaam Karta Hai?
          </h2>

          <div className="relative">
            {/* Desktop Dotted Connection Line */}
            <div 
              className="hidden md:block absolute top-[44px] left-[15%] right-[15%] -z-10 border-t-2 border-dashed"
              style={{ borderColor: "#2a2a4a" }}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center border font-bold text-xl mb-6 bg-[#0a0a15] select-none"
                  style={{
                    borderColor: "#2a2a4a",
                    color: "#c8b4ff",
                  }}
                >
                  01
                </div>
                <h3 className="text-lg font-semibold mb-2">Apna Profile Banao</h3>
                <p className="text-sm max-w-[250px]" style={{ color: "#8888aa" }}>
                  Qualification, stream, aur goals batao
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center border font-bold text-xl mb-6 bg-[#0a0a15] select-none"
                  style={{
                    borderColor: "#2a2a4a",
                    color: "#c8b4ff",
                  }}
                >
                  02
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Analysis Karo</h3>
                <p className="text-sm max-w-[250px]" style={{ color: "#8888aa" }}>
                  Claude AI tumhara complete career map banata hai
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center border font-bold text-xl mb-6 bg-[#0a0a15] select-none"
                  style={{
                    borderColor: "#2a2a4a",
                    color: "#c8b4ff",
                  }}
                >
                  03
                </div>
                <h3 className="text-lg font-semibold mb-2">Opportunities Explore Karo</h3>
                <p className="text-sm max-w-[250px]" style={{ color: "#8888aa" }}>
                  Jobs, colleges, aur roadmap — sab ek jagah
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer 
        className="mt-20 border-t"
        style={{
          backgroundColor: "#0a0a15",
          borderColor: "#1e1e3a",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
              <span className="font-semibold text-lg" style={{ color: "#c8b4ff" }}>
                🚀 CareerSetu.ai
              </span>
              <span className="text-xs" style={{ color: "#546e7a" }}>
                India&apos;s AI Career Intelligence Platform
              </span>
            </div>

            {/* Made With Love */}
            <div className="text-sm font-medium" style={{ color: "#8888aa" }}>
              Made with ❤️ for Indian Students
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#1e1e3a]/50 text-center text-xs" style={{ color: "#546e7a" }}>
            © 2025 CareerSetu.ai — Free for all students
          </div>
        </div>
      </footer>
    </div>
  );
}
