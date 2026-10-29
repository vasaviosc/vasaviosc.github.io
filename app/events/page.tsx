"use client";

import Link from "next/link";
import EventCard from "@/components/event-card";
import events from "@/data/events.json";

export default function EventsPage() {
  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming" || event.status === "ongoing"
  );

  const pastEvents = events
    .filter((event) => event.status === "past")
    .reverse();

  const featuredUpcomingEvents = upcomingEvents.filter(
    (event) => Boolean(event.poster)
  );

  const regularUpcomingEvents = upcomingEvents.filter(
    (event) => !event.poster
  );

  const featuredPastEvents = pastEvents.filter(
    (event) => Boolean(event.poster)
  );

  const regularPastEvents = pastEvents.filter(
    (event) => !event.poster
  );

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
              Build.
              <span className="vosc-gradient-text"> Learn.</span>
              <br />
              Connect.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#8abca1] sm:text-lg">
              Join our workshops, bootcamps, and community gatherings.
              Discover new ideas, build real-world skills, and grow with the
              open-source community.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#upcoming-events" className="vosc-button">
                Explore Events <span aria-hidden="true">↘</span>
              </a>

              <Link
                href="/announcements"
                className="vosc-button vosc-button-outline"
              >
                Announcements <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          {/* EVENT COUNTERS */}
          <div className="mt-16 grid max-w-xl grid-cols-2 gap-4 sm:gap-6">
            <div className="vosc-panel rounded-xl p-5 sm:p-6">
              <p className="font-mono text-3xl font-bold text-[#64ff9a] sm:text-4xl">
                {upcomingEvents.length.toString().padStart(2, "0")}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#8abca1] sm:text-sm">
                Upcoming &amp; Ongoing
              </p>
            </div>

            <div className="vosc-panel rounded-xl p-5 sm:p-6">
              <p className="font-mono text-3xl font-bold text-[#00e5c3] sm:text-4xl">
                {pastEvents.length.toString().padStart(2, "0")}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[#8abca1] sm:text-sm">
                Past Events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS CONTENT */}
      <section className="relative px-5 py-16 sm:px-8 sm:py-24">
        <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-[#64ff9a]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-6xl">
          {/* UPCOMING EVENTS */}
          <div id="upcoming-events" className="mb-24 scroll-mt-28">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#64ff9a]" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#64ff9a]">
                    What&apos;s happening
                  </span>
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Upcoming Events
                </h2>

                <p className="mt-2 text-sm text-[#8abca1]">
                  Find your next opportunity to learn and build.
                </p>
              </div>

              <span className="rounded-full border border-[#64ff9a]/20 bg-[#061b30] px-4 py-2 font-mono text-xs text-[#64ff9a]">
                {upcomingEvents.length} events
              </span>
            </div>

            {/* FEATURED EVENTS WITH POSTERS */}
            {featuredUpcomingEvents.length > 0 && (
              <div className="mb-12">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#eafbf2]">
                    Featured Events
                  </h3>
                  <p className="mt-1 text-sm text-[#8abca1]">
                    Explore our featured events and their posters.
                  </p>
                </div>

                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
                  {featuredUpcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {/* UPCOMING EVENTS WITHOUT POSTERS */}
            {regularUpcomingEvents.length > 0 && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#eafbf2]">
                    More Upcoming Events
                  </h3>
                  <p className="mt-1 text-sm text-[#8abca1]">
                    Discover more opportunities to participate.
                  </p>
                </div>

                <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
                  {regularUpcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {upcomingEvents.length === 0 && (
              <div className="vosc-panel rounded-2xl px-6 py-12 text-center">
                <p className="text-lg font-semibold text-[#eafbf2]">
                  No upcoming events just yet.
                </p>
                <p className="mt-2 text-sm text-[#8abca1]">
                  Stay tuned for new workshops and community activities!
                </p>
              </div>
            )}
          </div>

          {/* PAST EVENTS */}
          <div>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#00e5c3]">
                  <span className="mr-2">✳</span>
                  From our journey
                </div>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Past Events
                </h2>

                <p className="mt-2 text-sm text-[#8abca1]">
                  Take a look at the experiences we&apos;ve shared.
                </p>
              </div>

              <span className="rounded-full border border-[#00e5c3]/20 bg-[#061b30] px-4 py-2 font-mono text-xs text-[#00e5c3]">
                {pastEvents.length} events
              </span>
            </div>

            {/* PAST EVENTS WITH POSTERS */}
            {featuredPastEvents.length > 0 && (
              <div className="mb-12">
                <h3 className="mb-6 text-lg font-semibold text-[#eafbf2]">
                  Event Highlights
                </h3>

                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
                  {featuredPastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {/* PAST EVENTS WITHOUT POSTERS */}
            {regularPastEvents.length > 0 && (
              <div>
                {featuredPastEvents.length > 0 && (
                  <h3 className="mb-6 text-lg font-semibold text-[#eafbf2]">
                    More from Our Journey
                  </h3>
                )}

                <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2">
                  {regularPastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </div>
            )}

            {pastEvents.length === 0 && (
              <div className="vosc-panel rounded-2xl px-6 py-12 text-center">
                <p className="text-lg font-semibold text-[#eafbf2]">
                  Our journey starts here!
                </p>
                <p className="mt-2 text-sm text-[#8abca1]">
                  Completed events will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMMUNITY CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#64ff9a]/20 bg-[#061b30] px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#64ff9a]/10 blur-[90px]" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#64ff9a]">
                Be part of something bigger
              </p>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Your next idea starts here.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#8abca1] sm:text-base">
                Meet fellow developers, contribute to open source, and turn
                your ideas into projects with the VOSC community.
              </p>
            </div>

            <a
              href="https://github.com/vasaviosc"
              target="_blank"
              rel="noopener noreferrer"
              className="vosc-button shrink-0"
            >
              Join the Community <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}