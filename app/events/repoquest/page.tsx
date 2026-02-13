"use client";

import { useState } from "react";
import Link from "next/link";

export default function RepoQuestPage() {
  const [showForm, setShowForm] = useState(false);
  return (
    <main className="bg-white min-h-screen pt-20">
      <section className="py-24 px-4 border-b border-black">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/events"
            className="text-sm text-black hover:opacity-60 mb-6 inline-block"
          >
            ← back to events
          </Link>

          <h1 className="text-6xl font-bold mb-6">RepoQuest</h1>
          <div className="flex flex-wrap gap-6 text-black text-lg">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>Feb 21, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>TBD</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>TBD</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-black-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">summary</h2>
          <div className="max-w-none">
            <p className="text-black leading-relaxed mb-6">
              RepoQuest is an intensive workshop where you&rsquo;ll learn to
              build, structure, and ship production-ready repositories. Whether
              you&apos;re starting a new project or refactoring an existing one,
              this hands-on session will give you the tools and best practices
              to create repositories that scale.
            </p>
            <p className="text-black leading-relaxed">
              join us for an afternoon of collaborative coding, guidance, and
              community-driven learning. by the end of this workshop,
              you&rsquo;ll have a solid foundation in modern repository
              management and the confidence to tackle complex codebases.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 border-t border-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">what to expect</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-bold mb-3">
                repository architecture
              </h3>
              <p className="text-black">
                learn how to structure your codebase for maintainability and
                scalability. We&apos;ll cover folder organization, separation of
                concerns, and module design patterns.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-bold mb-3">
                version control best practices
              </h3>
              <p className="text-black">
                master Git workflows, branching strategies, and commit
                conventions that keep your team aligned and your history clean.
              </p>
            </div>
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-xl font-bold mb-3">documentation & README</h3>
              <p className="text-black">
                create documentation that helps onboard new contributors and
                makes your project accessible. Learn markdown best practices and
                automation tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50 border-t border-black">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">interested?</h2>
            <p className="text-black leading-relaxed">
              let us know you&apos;re interested in attending RepoQuest.
              we&apos;ll send you updates about the event, including
              registration details and any changes to the schedule.
            </p>
          </div>

          <div className="flex justify-end mb-10">
            <button
              onClick={() => setShowForm((prev) => !prev)}
              className="py-4 px-8 font-bold uppercase tracking-wider transition-colors bg-white text-black border-2 border-black hover:bg-gray-100"
            >
              {showForm ? "hide form" : "interested"}
            </button>
          </div>

          {showForm && (
            <div className="border-2 border-black p-8 bg-white">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeS-9sU39FC3poTP6ZojUvzSeWyVWwiTsZcHAJ0cSOiYNVnOg/viewform?embedded=true"
                width="100%"
                height="800"
                className="w-full"
              >
                Loading...
              </iframe>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4 border-t border-black">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">feedback</h2>
            <p className="text-black leading-relaxed">
              Have questions, suggestions, or feedback about RepoQuest?
              We&apos;d love to hear from you. Your input helps us create better
              events for the community.
            </p>
          </div>
          <div className="border-2 border-black p-8 bg-gray-50">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdn1BxVwe6wxTweJLX0XqorXBHUlLHEoGExxNSWWY8LO6PnSA/viewform?embedded=true"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
