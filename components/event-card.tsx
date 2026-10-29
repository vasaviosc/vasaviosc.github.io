import { Event } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const statusStyles = {
    ongoing: "border-[#64ff9a]/40 bg-[#64ff9a]/10 text-[#64ff9a]",
    upcoming: "border-[#00e5c3]/40 bg-[#00e5c3]/10 text-[#00e5c3]",
    past: "border-[#8abca1]/30 bg-[#8abca1]/5 text-[#8abca1]",
  };

  const badgeStyle =
    statusStyles[event.status as keyof typeof statusStyles] ??
    statusStyles.past;

  return (
    <article className="group relative flex flex-col self-start overflow-hidden rounded-2xl border border-[#64ff9a]/20 bg-[#061b30] transition-all duration-300 hover:-translate-y-1 hover:border-[#64ff9a]/50 hover:shadow-[0_12px_40px_rgba(100,255,154,0.08)]">
      {/* TOP ACCENT */}
      <div className="absolute left-0 right-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#64ff9a] to-[#00e5c3] transition-transform duration-500 group-hover:scale-x-100" />

      {/* FULL EVENT POSTER */}
      {event.poster && (
        <Link
          href={`/events/${event.slug}`}
          aria-label={`View ${event.title} details`}
          className="block border-b border-[#64ff9a]/15 bg-[#03111f] p-3 sm:p-4"
        >
          <div className="flex w-full items-center justify-center">
            <Image
              src={event.poster}
              alt={`${event.title} poster`}
              width={1200}
              height={1600}
              sizes="(max-width: 768px) 100vw, 560px"
              className="mx-auto block h-auto max-h-[560px] w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>
        </Link>
      )}

      {/* EVENT INFORMATION */}
      <div className="flex flex-col p-5 sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-3 font-mono text-xs leading-relaxed text-[#8abca1]">
              {event.date}
            </p>

            <h3 className="text-lg font-bold leading-snug text-[#eafbf2] transition-colors duration-300 group-hover:text-[#64ff9a] sm:text-xl">
              {event.title}
            </h3>
          </div>

          <span
            className={`shrink-0 rounded-md border px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider ${badgeStyle}`}
          >
            {event.status}
          </span>
        </div>

        {/* EVENT DETAILS LINK */}
        <div className="border-t border-[#64ff9a]/10 pt-4">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-2 font-mono text-sm font-medium text-[#64ff9a] transition-colors duration-300 hover:text-[#00e5c3]"
          >
            View event details
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
