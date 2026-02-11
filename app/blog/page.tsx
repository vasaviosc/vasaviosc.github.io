"use client";

import Link from "next/link";

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  readTime: string;
}

export default function BlogPage() {
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
            <h1 className="text-5xl font-bold mb-4">blog</h1>
            <p className="text-gray-600">coming soon.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
