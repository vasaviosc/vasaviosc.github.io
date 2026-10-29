import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import events from "@/data/events.json";

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const hasWinners =
    event.winners &&
    event.winners.length > 0 &&
    event.winners.some(
      (winner) =>
        winner.teamName !== "To Be Announced" ||
        winner.position !== "To Be Announced"
    );

  const statusStyles = {
    ongoing: "border-[#64ff9a]/40 bg-[#64ff9a]/10 text-[#64ff9a]",
    upcoming: "border-[#00e5c3]/40 bg-[#00e5c3]/10 text-[#00e5c3]",
    past: "border-[#8abca1]/30 bg-[#8abca1]/5 text-[#8abca1]",
  };

  const statusStyle =
    statusStyles[event.status as keyof typeof statusStyles] ??
    statusStyles.past;

  return (
    <main className="min-h-screen overflow-hidden bg-[#03111f] pt-20 text-[#eafbf2]">
      {/* EVENT HERO */}
      <section className="relative border-b border-[#64ff9a]/15 px-4 py-16 sm:py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,195,0.09),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(100,255,154,0.06),transparent_40%)]" />

        <div className="vosc-grid pointer-events-none absolute inset-0 opacity-20" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/events"
            className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-[#8abca1] transition-colors hover:text-[#64ff9a]"
          >
            <span aria-hidden="true">←</span>
            Back to events
          </Link>

          <div className="mb-6">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs ${statusStyle}`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              {event.status}
            </span>
          </div>

          <div className="max-w-4xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-[#64ff9a]">
              VOSC / Event Details
            </p>

            <h1 className="mb-6 break-words text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-7xl">
              {event.title}
            </h1>

            <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-3 font-mono text-sm text-[#8abca1]">
              <span className="flex items-center gap-2">
                <span className="text-[#64ff9a]" aria-hidden="true">
                  ◷
                </span>
                {event.date}
              </span>
            </div>

            <p className="max-w-3xl whitespace-pre-line text-base leading-8 text-[#a4c7b2] sm:text-lg">
              {event.description}
            </p>

            {event.registrationUrl && (
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vosc-button inline-flex items-center gap-2"
                >
                  Register Now
                  <span aria-hidden="true">↗</span>
                </a>

                {event.registrationDeadline && (
                  <p className="text-sm text-[#8abca1]">
                    Deadline:{" "}
                    <span className="font-medium text-[#eafbf2]">
                      {event.registrationDeadline}
                    </span>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EVENT INFORMATION */}
      {(event.venue || event.teamSize || event.registrationFee) && (
        <section className="border-b border-[#64ff9a]/15 px-4 py-10 sm:py-14">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.venue && (
              <div className="vosc-panel rounded-xl p-6 transition-colors hover:border-[#64ff9a]/35">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#8abca1]">
                  Venue
                </p>
                <p className="text-lg font-semibold leading-relaxed text-[#eafbf2]">
                  {event.venue}
                </p>
              </div>
            )}

            {event.teamSize && (
              <div className="vosc-panel rounded-xl p-6 transition-colors hover:border-[#64ff9a]/35">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#8abca1]">
                  Team Size
                </p>
                <p className="text-lg font-semibold text-[#eafbf2]">
                  {event.teamSize}
                </p>
              </div>
            )}

            {event.registrationFee && (
              <div className="vosc-panel rounded-xl p-6 transition-colors hover:border-[#64ff9a]/35">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-[#8abca1]">
                  Registration Fee
                </p>
                <p className="text-lg font-semibold text-[#64ff9a]">
                  {event.registrationFee}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* OFFICIAL EVENT POSTER */}
      {event.poster && (
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
                Official Event Poster
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                The Announcement<span className="text-[#64ff9a]">.</span>
              </h2>
            </div>

            <div className="vosc-panel overflow-hidden rounded-2xl p-3 sm:p-5">
              <div className="flex items-center justify-center rounded-xl bg-[#020b14] p-2 sm:p-4">
                <Image
                  src={event.poster}
                  alt={`${event.title} official poster`}
                  width={1200}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, 900px"
                  className="mx-auto block h-auto max-h-[900px] w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HACKATHON DOMAINS */}
      {event.domains && event.domains.length > 0 && (
        <section className="border-y border-[#64ff9a]/15 bg-[#061727]/60 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
              Explore Your Possibilities
            </p>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Hackathon Domains<span className="text-[#64ff9a]">.</span>
            </h2>

            <p className="mb-10 max-w-3xl leading-7 text-[#a4c7b2]">
              Choose a domain that interests your team, identify a real-world
              problem, and develop your own innovative solution.
            </p>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {event.domains.map((domain, index) => (
                <div
                  key={domain}
                  className="group relative overflow-hidden rounded-xl border border-[#64ff9a]/15 bg-[#03111f] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#64ff9a]/40 hover:shadow-[0_12px_35px_rgba(100,255,154,0.06)] sm:p-7"
                >
                  <div className="absolute left-0 top-0 h-full w-[2px] origin-top scale-y-0 bg-gradient-to-b from-[#64ff9a] to-[#00e5c3] transition-transform duration-300 group-hover:scale-y-100" />

                  <p className="mb-4 font-mono text-xs tracking-[0.18em] text-[#64ff9a]">
                    DOMAIN {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="text-lg font-semibold leading-relaxed text-[#eafbf2] transition-colors group-hover:text-[#64ff9a] sm:text-xl">
                    {domain}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PRIZE POOL */}
      {event.prizes && event.prizes.length > 0 && (
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
              Rewards & Recognition
            </p>

            <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
              Prize Pool<span className="text-[#64ff9a]">.</span>
            </h2>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {event.prizes.map((prize, index) => (
                <div
                  key={prize.position}
                  className="group relative overflow-hidden rounded-2xl border border-[#64ff9a]/20 bg-gradient-to-br from-[#09243a] to-[#03111f] p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#64ff9a]/50 sm:p-9"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#64ff9a]/60 to-transparent" />

                  <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[#8abca1]">
                    {prize.position}
                  </p>

                  <p className="break-words text-3xl font-extrabold tracking-tight text-[#64ff9a] sm:text-4xl">
                    {prize.amount}
                  </p>

                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-[#567e70]">
                    VOSC / Rewards {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EVENT GALLERY */}
      {event.gallery && event.gallery.length > 0 && (
        <section className="border-y border-[#64ff9a]/15 bg-[#061727]/60 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
                Moments & Memories
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Event Gallery<span className="text-[#64ff9a]">.</span>
              </h2>

              <p className="mt-4 text-[#a4c7b2]">
                A glimpse into our community experience.
              </p>
            </div>

            <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2">
              {event.gallery.map((photo, index) => (
                <a
                  key={photo}
                  href={photo}
                  target="_blank"
                  rel="noreferrer"
                  className="group overflow-hidden rounded-xl border border-[#64ff9a]/15 bg-[#03111f] transition-all duration-300 hover:border-[#64ff9a]/40"
                >
                  <div className="overflow-hidden bg-[#020b14]">
                    <Image
                      src={photo}
                      alt={`${event.title} event photograph ${index + 1}`}
                      width={1200}
                      height={800}
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72 md:h-80"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-3 px-4 py-4">
                    <span className="font-mono text-xs text-[#8abca1]">
                      Moment {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium text-[#64ff9a] transition-colors group-hover:text-[#00e5c3]">
                      View photo ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WINNERS AND ACHIEVEMENTS */}
      {hasWinners && (
        <section className="px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
              Celebrating Excellence
            </p>

            <h2 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl">
              Winners & Achievements<span className="text-[#64ff9a]">.</span>
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {event.winners?.map((winner, index) => (
                <div
                  key={`${winner.teamName}-${index}`}
                  className="rounded-xl border border-[#64ff9a]/15 bg-[#061b30] p-6 transition-colors hover:border-[#64ff9a]/35 sm:p-7"
                >
                  <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-[#64ff9a]">
                    {winner.position}
                  </p>

                  <h3 className="mb-5 break-words text-xl font-bold text-[#eafbf2]">
                    {winner.teamName}
                  </h3>

                  {winner.members.length > 0 && (
                    <div className="border-t border-[#64ff9a]/10 pt-5">
                      <p className="mb-3 text-sm font-semibold text-[#a4c7b2]">
                        Team Members
                      </p>

                      <ul className="space-y-2">
                        {winner.members.map((member) => (
                          <li
                            key={member}
                            className="flex items-start gap-2 text-sm text-[#8abca1]"
                          >
                            <span
                              className="mt-1 text-[#64ff9a]"
                              aria-hidden="true"
                            >
                              ↳
                            </span>
                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* INSTAGRAM */}
      {event.instagram && (
        <section className="border-t border-[#64ff9a]/15 px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl rounded-2xl border border-[#64ff9a]/20 bg-gradient-to-br from-[#082039] to-[#03111f] px-6 py-12 text-center sm:px-10 sm:py-16">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
              Relive the Experience
            </p>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl">
              More Moments. More Memories.
            </h2>

            <p className="mx-auto mb-8 max-w-xl leading-7 text-[#a4c7b2]">
              Explore the event highlights on our Instagram page.
            </p>

            <a
              href={event.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="vosc-button vosc-button-outline inline-flex items-center gap-2"
            >
              View Instagram Post
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      )}

      {/* REGISTRATION CTA */}
      {event.registrationUrl && (
        <section className="relative overflow-hidden border-y border-[#64ff9a]/20 bg-[#061727] px-4 py-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(100,255,154,0.09),transparent_65%)]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#64ff9a]">
              Be Part of the Experience
            </p>

            <h2 className="mb-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Ready to Join<span className="text-[#64ff9a]">?</span>
            </h2>

            <p className="mx-auto mb-8 max-w-xl leading-7 text-[#a4c7b2]">
              Register for {event.title} and bring your ideas to life.
            </p>

            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vosc-button inline-flex items-center gap-2 px-8 py-4 text-sm sm:px-10"
            >
              Register Now
              <span aria-hidden="true">↗</span>
            </a>

            {event.registrationDeadline && (
              <p className="mt-5 text-sm text-[#8abca1]">
                Registration closes on{" "}
                <span className="font-semibold text-[#eafbf2]">
                  {event.registrationDeadline}
                </span>
              </p>
            )}
          </div>
        </section>
      )}

      {/* BACK TO EVENTS */}
      <section className="px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#8abca1] transition-colors hover:text-[#64ff9a]"
          >
            <span aria-hidden="true">←</span>
            Explore more events
          </Link>
        </div>
      </section>
    </main>
  );
}