"use client";

import Link from "next/link";
import AnnouncementCard from "@/components/announcement-card";
import announcements from "@/data/announcements.json";

export default function AnnouncementsPage() {
  const sortedAnnouncements = [...announcements].reverse();

  return (
    <main className="min-h-screen overflow-hidden bg-[#03111f] pt-20 text-[#eafbf2]">
      {/* HERO SECTION */}
      <section className="relative border-b border-[#64ff9a]/15 px-5 py-20 sm:px-8 sm:py-28">
        <div className="vosc-grid pointer-events-none absolute inset-0 opacity-60" />

        <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#00e5c3]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#64ff9a]/10 blur-[110px]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#64ff9a]/20 bg-[#061b30]/70 px-4 py-2 text-sm text-[#a4c7b2] transition-all duration-200 hover:border-[#64ff9a]/50 hover:text-[#64ff9a]"
          >
            <span aria-hidden="true">←</span>
            Back to home
          </Link>

          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-[#64ff9a]">
              <span className="h-px w-8 bg-[#64ff9a]" />
              VOSC Community
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl">
              Stay
              <span className="vosc-gradient-text"> Updated.</span>
              <br />
              Stay Connected.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#8abca1] sm:text-lg">
              The latest news, opportunities, event announcements, and updates
              from the Vasavi Open Source Community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#latest-announcements" className="vosc-button">
                Explore Updates <span aria-hidden="true">↘</span>
              </a>

              <Link
                href="/events"
                className="vosc-button vosc-button-outline"
              >
                Explore Events <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          {/* ANNOUNCEMENT COUNTER */}
          <div className="mt-16 max-w-xs">
            <div className="vosc-panel rounded-xl p-5 sm:p-6">
              <p className="font-mono text-3xl font-bold text-[#64ff9a] sm:text-4xl">
                {sortedAnnouncements.length.toString().padStart(2, "0")}
              </p>

              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#8abca1] sm:text-sm">
                Community Updates
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ANNOUNCEMENTS LIST */}
      <section
        id="latest-announcements"
        className="relative scroll-mt-28 px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-[#64ff9a]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#64ff9a]" />

                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#64ff9a]">
                  From the community
                </span>
              </div>

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Latest Announcements
              </h2>

              <p className="mt-2 text-sm text-[#8abca1]">
                Stay informed about what&apos;s happening at VOSC.
              </p>
            </div>

            <span className="rounded-full border border-[#64ff9a]/20 bg-[#061b30] px-4 py-2 font-mono text-xs text-[#64ff9a]">
              {sortedAnnouncements.length} updates
            </span>
          </div>

          {sortedAnnouncements.length > 0 ? (
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
              {sortedAnnouncements.map((announcement) => (
                <div key={announcement.id} className="self-start">
                  <AnnouncementCard announcement={announcement} />
                </div>
              ))}
            </div>
          ) : (
            <div className="vosc-panel rounded-2xl px-6 py-16 text-center">
              <p className="text-lg font-semibold text-[#eafbf2]">
                No announcements yet.
              </p>

              <p className="mt-2 text-sm text-[#8abca1]">
                Check back soon for the latest community updates!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#64ff9a]/20 bg-[#061b30] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#64ff9a]/10 blur-[90px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#64ff9a]">
                Be part of the movement
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Build something meaningful.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#8abca1] sm:text-base">
                Discover upcoming events, connect with developers, and
                contribute to open source with the VOSC community.
              </p>
            </div>

            <Link href="/events" className="vosc-button shrink-0">
              Explore Events <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}