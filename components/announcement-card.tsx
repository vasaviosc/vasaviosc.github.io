import Link from "next/link";

interface AnnouncementCardProps {
  announcement: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    eventUrl?: string;
  };
}

export default function AnnouncementCard({
  announcement,
}: AnnouncementCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#64ff9a]/15 bg-gradient-to-br from-[#082039] to-[#03111f] transition-all duration-300 hover:-translate-y-1 hover:border-[#64ff9a]/40 hover:shadow-[0_16px_45px_rgba(100,255,154,0.07)]">
      {/* TOP ACCENT */}
      <div className="absolute left-0 right-0 top-0 z-10 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-[#64ff9a] to-[#00e5c3] transition-transform duration-500 group-hover:scale-x-100" />

      {/* ANNOUNCEMENT CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {/* DATE */}
        <div className="mb-5 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#64ff9a]"
          />
          <p className="font-mono text-xs tracking-wide text-[#8abca1]">
            {announcement.date}
          </p>
        </div>

        {/* TITLE */}
        <h3 className="mb-3 text-lg font-bold leading-snug text-[#eafbf2] transition-colors duration-300 group-hover:text-[#64ff9a] sm:text-xl">
          {announcement.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mb-6 flex-1 text-sm leading-7 text-[#a4c7b2]">
          {announcement.excerpt}
        </p>

        {/* ACTION */}
        {announcement.eventUrl && (
          <div className="mt-auto border-t border-[#64ff9a]/10 pt-5">
            <Link
              href={announcement.eventUrl}
              className="vosc-button vosc-button-outline inline-flex items-center gap-2 font-mono text-xs transition-all duration-300"
            >
              Explore & Register
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}