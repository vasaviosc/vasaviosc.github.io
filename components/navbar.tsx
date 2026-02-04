"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { label: "home", href: "/" },
    { label: "events", href: "/events" },
    { label: "announcements", href: "/announcements" },
    { label: "blog", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-black z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-28">
          <Link href="/" className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {" "}
              <Image
                src="/vosc-ascii-logo.png"
                alt="VOSC Logo"
                width={32}
                height={32}
                className="w-15 h-15"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-3xl font-bold tracking-tight block">
                vosc
              </span>
              <span className="text-xs text-gray-500">
                contribute. collaborate. innovate.
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base hover:opacity-60 transition-opacity duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
            <div className="w-5 h-0.5 bg-black"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-black py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm py-2 hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
