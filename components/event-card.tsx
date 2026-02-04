import { Event } from "@/lib/types";
import Link from "next/link";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const statusColors = (status: string) => {
    if (status === "upcoming") return "border-black bg-white";
    else return "border-gray-400 bg-white";
  };

  return (
    <div
      className={`border ${statusColors(event.status)} p-6 hover:shadow-md transition-shadow`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs text-gray-600 mb-2">{event.date}</p>
          <h3 className="text-lg font-bold">{event.title}</h3>
        </div>
        <span
          className={`text-xs font-semibold px-2 py-1 ${
            event.status === "ongoing"
              ? "bg-black text-white"
              : "border border-black"
          }`}
        >
          {event.status}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-6">{event.description}</p>
      <Link
        href={`/events/${event.slug}`}
        className="text-sm font-medium border-b border-black hover:opacity-60 transition-opacity"
      >
        learn more →
      </Link>
    </div>
  );
}
