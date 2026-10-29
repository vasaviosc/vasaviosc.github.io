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
    { label: "resources", href: "/blog" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#64ff9a]/40 bg-[#03111f]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex h-24 items-center justify-between">
          {/* VOSC LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="VOSC Home"
          >
            <Image
              src="/vosc-logo.png"
              alt="VOSC Logo"
              width={76}
              height={76}
              priority
              className="h-[68px] w-[68px] object-contain"
            />

            <div className="hidden sm:block">
              <span className="block text-3xl font-black tracking-[0.18em] text-[#64ff9a]">
                VOSC
              </span>
              <span className="font-mono text-[11px] tracking-wide text-[#8abca1]">
                Vasavi Open Source Community
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm capitalize text-[#d9f5e5] transition-colors duration-200 hover:text-[#64ff9a]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="flex flex-col gap-1.5 rounded-md border border-[#64ff9a]/30 p-3 text-[#64ff9a] transition-colors hover:bg-[#64ff9a]/10 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
            <span className="h-0.5 w-5 bg-current" />
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {isOpen && (
          <div className="space-y-1 border-t border-[#64ff9a]/20 py-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-3 font-mono text-sm capitalize text-[#d9f5e5] transition-colors hover:bg-[#64ff9a]/10 hover:text-[#64ff9a]"
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