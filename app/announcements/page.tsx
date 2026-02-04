"use client";

import Link from "next/link";
import AnnouncementCard from "@/components/announcement-card";
import announcements from "@/data/announcements.json";

export default function AnnouncementsPage() {
  return (
    <main className="bg-white pt-20">
      <section className="py-24 px-4 border-b border-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-black mb-6 inline-block"
            >
              ← back
            </Link>
            <h1 className="text-5xl font-bold mb-4">announcements</h1>
            <p className="text-gray-600">
              Latest updates from the OSC community.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
