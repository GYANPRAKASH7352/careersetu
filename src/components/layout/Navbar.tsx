"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* RIGHT SIDE - Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile Auth Buttons */}
          <div className="flex flex-col space-y-4 pb-12">
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
          </div>
        </div>
      )}
    </nav>
  );
}
