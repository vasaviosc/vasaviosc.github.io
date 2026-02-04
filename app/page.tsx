"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EventCard from "@/components/event-card";
import AnnouncementCard from "@/components/announcement-card";
import announcements from "@/data/announcements.json";
import events from "@/data/events.json";

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero Section */}

      <section
        className="relative min-h-screen flex items-center justify-center pt-16 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./vosc-ascii-art.png')" }}
      >
        <div className="absolute inset-0 bg-white/88"></div>

        <div className="relative z-10 text-center">
          <h1
            className={`text-9xl md:text-[250px] font-black leading-none mb-6 transition-opacity duration-1000 ${
              heroVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{
              letterSpacing: "-0.02em",
              fontWeight: 900,
            }}
          >
            vosc
          </h1>

          <p
            className={`text-xl text-gray-500 tracking-wide transition-opacity duration-1000 delay-200 ${
              heroVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            vasavi open source community
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <Link
              href="/events"
              className="bg-black text-white px-6 py-3 text-sm font-medium transition-opacity border border-black"
            >
              explore
            </Link>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-1000 delay-[1500ms]"
          style={{ opacity: heroVisible ? 1 : 0 }}
        >
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-600 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-24 px-4 border-t border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">announcements</h2>
          <Link href="/announcements" className="text-sm text-gray-600 mb-12">
            view all
          </Link>
          <div className="mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements.slice(0, 3).map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 px-4 border-t border-black bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">events</h2>
          <Link href="/events" className="text-sm text-gray-600 mb-4">
            view all
          </Link>
          <div className="mb-12"></div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-xs">
              upcoming
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events
                .filter((e) => e.status === "upcoming")
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-xs">
              past
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events
                .slice(0, 4)
                .filter((e) => e.status === "past")
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                    href="#"
                    className="text-gray-600 hover:text-black transition"
                  >
                    whatsapp
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition"
                  >
                    github
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-black transition"
                  >
                    discord
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
    </main>
  );
}
