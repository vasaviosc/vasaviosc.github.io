import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <p className="font-semibold mb-4">vosc</p>
            <p className="text-sm text-gray-600">open source @ vasavi</p>
          </div>
          <div>
            <p className="font-semibold text-sm mb-4">links</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-black transition"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  href="/announcements"
                  className="text-gray-600 hover:text-black transition"
                >
                  announcements
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-black transition"
                >
                  blog
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-600 hover:text-black transition"
                >
                  events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-sm mb-4">community</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/company/vasaviosc/"
                  className="text-gray-600 hover:text-black transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/vasavi-osc"
                  className="text-gray-600 hover:text-black transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-black transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  whatsapp
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-20 flex gap-16 items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/vce-logo.svg"
                alt="Vasavi College Logo"
                width={128}
                height={128}
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <Image
                src="/vosc-logo.png"
                alt="VOSC Logo"
                width={175}
                height={175}
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 flex justify-center items-center text-xs text-gray-600">
          <p>&copy; 2026 vosc. all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
