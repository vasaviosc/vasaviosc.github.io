import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#64ff9a]/30 bg-[#03111f] px-5 py-16 text-[#eafbf2] sm:px-8 sm:py-20">
      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#64ff9a]/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-mono text-3xl font-black tracking-[0.15em] text-[#64ff9a]">
                VOSC
              </span>
            </Link>

            <p className="mt-3 text-sm text-[#8abca1]">
              Open source @ Vasavi
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[#668b78]">
              A community of builders, learners, and contributors creating
              together through open source.
            </p>

            <div className="mt-5 h-px w-20 bg-gradient-to-r from-[#64ff9a] to-transparent" />
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#64ff9a]">
              Navigation
            </p>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#a4c7b2] transition-colors duration-200 hover:text-[#64ff9a]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/announcements"
                  className="text-[#a4c7b2] transition-colors duration-200 hover:text-[#64ff9a]"
                >
                  Announcements
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="text-[#a4c7b2] transition-colors duration-200 hover:text-[#64ff9a]"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/events"
                  className="text-[#a4c7b2] transition-colors duration-200 hover:text-[#64ff9a]"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* COMMUNITY */}
          <div>
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#64ff9a]">
              Community
            </p>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/vasaviosc?exln=MW9zYThyYzFoMm5wcw=="
                  className="text-[#a4c7b2] transition-colors duration-200 hover:text-[#64ff9a]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram ↗
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/vasaviosc/"
                  className="text-[#a4c7b2] transition-colors duration-200 hover:text-[#64ff9a]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/vasavi-osc"
                  className="text-[#a4c7b2] transition-colors duration-200 hover:text-[#64ff9a]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
              </li>
            </ul>

            <p className="mt-5 text-xs leading-5 text-[#668b78]">
              Explore projects, contribute code, and grow with the community.
            </p>
          </div>

          {/* COLLEGE AND COMMUNITY LOGOS */}
          <div>
            <p className="mb-5 text-center font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#64ff9a]">
              Powered by Community
            </p>

            <div className="flex items-center justify-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[#64ff9a]/15 bg-[#061b30] p-3">
                <Image
                  src="/vce-logo.svg"
                  alt="Vasavi College of Engineering"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-[#64ff9a]/15 bg-[#061b30] p-2">
                <Image
                  src="/vosc-logo.png"
                  alt="VOSC Logo"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-4 text-center text-xs text-[#668b78]">
              Vasavi Open Source Community
            </p>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[#64ff9a]/15 pt-7 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-[#8abca1]">
            © 2026 VOSC. All rights reserved.
          </p>

          <Link
            href="/"
            className="font-mono text-xs text-[#668b78] transition-colors hover:text-[#64ff9a]"
          >
            Built with open source{" "}
            <span className="text-[#64ff9a]">♥</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}