import Link from "next/link";

interface AnnouncementCardProps {
  announcement: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
  };
}

export default function AnnouncementCard({
  announcement,
}: AnnouncementCardProps) {
  return (
    <div className="border border-black p-6 hover:shadow-md transition-shadow bg-white">
      <p className="text-xs text-gray-600 mb-3">{announcement.date}</p>
      <h3 className="text-lg font-bold mb-3">{announcement.title}</h3>
      <p className="text-sm text-gray-600 mb-4">{announcement.excerpt}</p>
    </div>
  );
}
