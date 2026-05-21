"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: session } = useSession();
  const isLoggedIn = !!session;
  const userName = session?.user?.name || session?.user?.email || "User";
  const displayEmail = session?.user?.email || "";
  const firstLetter = userName.charAt(0).toUpperCase();

  const navLinks = [
    { name: "Jobs", href: "/jobs" },
    { name: "Colleges", href: "/colleges" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full backdrop-blur-md"
      style={{
        height: "64px",
        backgroundColor: "rgba(13, 13, 26, 0.95)",
        borderBottom: "1px solid #2a2a4a",
      }}
    >
      <div className="mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          {/* LEFT SIDE - Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 select-none"
              style={{
                color: "#c8b4ff",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              <span>🚀</span>
              <span>CareerSetu.ai</span>
            </Link>
          </div>

          {/* CENTER - Navigation Links (desktop only, hidden on mobile) */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="transition-colors duration-200 text-sm font-medium hover:text-[#c8b4ff]"
                style={{
                  color: "#8888aa",
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE - Auth Buttons / User Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2.5 rounded-lg px-3 py-1.5 transition-colors duration-200 hover:bg-white/5 focus:outline-none"
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full font-bold text-sm border"
                    style={{
                      backgroundColor: "#2a1f5e",
                      color: "#c8b4ff",
                      borderColor: "#3a2f7e",
                    }}
                  >
                    {firstLetter}
                  </div>
                  <span className="text-sm font-medium max-w-[150px] truncate" style={{ color: "#c8b4ff" }}>
                    {userName}
                  </span>
                  <svg
                    className={`h-4 w-4 text-[#8888aa] transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 py-1.5 shadow-2xl z-50 border"
                    style={{
                      backgroundColor: "#0a0a15",
                      borderColor: "#1e1e3a",
                      borderRadius: "8px",
                    }}
                  >
                    <Link
                      href="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1e1e3a]/50 hover:text-white transition-colors"
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      onClick={() => setIsDropdownOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-[#1e1e3a]/50 hover:text-white transition-colors"
                    >
                      My Profile
                    </Link>
                    <hr className="my-1 border-[#1e1e3a]" />
                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        signOut();
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-[#1e1e3a]/50 hover:text-red-300 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center font-medium transition-colors hover:bg-white/5"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #2a2a4a",
                    color: "#c8b4ff",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    fontSize: "14px",
                  }}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center font-medium transition-colors hover:bg-[#352778]"
                  style={{
                    backgroundColor: "#2a1f5e",
                    border: "1px solid #3a2f7e",
                    color: "#c8b4ff",
                    borderRadius: "8px",
                    padding: "8px 16px",
                    fontSize: "14px",
                  }}
                >
                  Sign Up Free
                </Link>
              </>
            )}
          </div>

          {/* MOBILE Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none"
              style={{ color: "#8888aa" }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE Dropdown Menu */}
      {isOpen && (
        <div
          className="fixed left-0 right-0 w-full z-40 md:hidden flex flex-col justify-between px-6 py-8 border-b border-[#2a2a4a] transition-all duration-300 ease-in-out"
          style={{
            top: "64px",
            height: "calc(100vh - 64px)",
            backgroundColor: "rgba(13, 13, 26, 0.98)",
          }}
        >
          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium transition-colors py-2 border-b border-white/5 hover:text-[#c8b4ff]"
                style={{ color: "#8888aa" }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Auth Buttons / User Section */}
          <div className="flex flex-col space-y-4 pb-12">
            {isLoggedIn ? (
              <div className="space-y-4">
                {/* User Info Card */}
                <div className="flex items-center gap-3 p-3 rounded-xl border border-[#1e1e3a] bg-[#0a0a15]">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-base border"
                    style={{
                      backgroundColor: "#2a1f5e",
                      color: "#c8b4ff",
                      borderColor: "#3a2f7e",
                    }}
                  >
                    {firstLetter}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold text-white truncate">
                      {userName}
                    </span>
                    {displayEmail && (
                      <span className="text-xs text-[#8888aa] truncate">
                        {displayEmail}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-2">
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center font-medium transition-colors bg-[#2a1f5e]/30 border border-[#3a2f7e]/30 text-[#c8b4ff] rounded-lg py-2.5 text-sm"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center font-medium transition-colors bg-transparent border border-[#2a2a4a] text-gray-300 rounded-lg py-2.5 text-sm hover:bg-white/5"
                  >
                    My Profile
                  </Link>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      signOut();
                    }}
                    className="w-full text-center font-medium transition-colors bg-transparent border border-red-950/30 text-red-400 rounded-lg py-2.5 text-sm hover:bg-red-950/20"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center font-medium transition-colors hover:bg-white/5"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #2a2a4a",
                    color: "#c8b4ff",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    fontSize: "14px",
                  }}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center font-medium transition-colors hover:bg-[#352778]"
                  style={{
                    backgroundColor: "#2a1f5e",
                    border: "1px solid #3a2f7e",
                    color: "#c8b4ff",
                    borderRadius: "8px",
                    padding: "12px 16px",
                    fontSize: "14px",
                  }}
                >
                  Sign Up Free
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
