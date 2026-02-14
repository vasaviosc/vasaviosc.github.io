import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getSortedPostsData();
  return (
    <main className="bg-white min-h-screen pt-20">
      <section className="py-24 px-4 border-b border-black">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="text-sm text-black hover:opacity-60 mb-6 inline-block"
          >
            ← back
          </Link>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-5xl font-bold">blog</h1>
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxI4ZlUPM9Zb7laaHZiRMpg281996T3pqVXm5giTMzCtXTNA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 font-bold uppercase tracking-wider transition-colors bg-white text-black border-2 border-black hover:bg-gray-100"
            >
              contribute!
            </Link>
          </div>
          <p className="text-gray-600 text-lg">vosc&apos;s blog section</p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-gray-500">no posts yet.</p>
          ) : (
            <div className="space-y-12">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="border-b border-gray-200 pb-12 last:border-b-0"
                >
                  <Link
                    href={`/blog/${post.id}`}
                    className="group block hover:opacity-80 transition-opacity"
                  >
                    <h2 className="text-2xl font-bold mb-3 group-hover:underline">
                      {post.title}
                    </h2>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <time>{post.date}</time>
                      <span>:</span>
                      <span>{post.author}</span>
                    </div>
                  </Link>
                </article>
              ))}
              <article className="border-b border-gray-200 pb-12 last:border-b-0">
                <Link
                  href={`https://bhushanwho.github.io/blog/gentlyrust`}
                  className="group block hover:opacity-80 transition-opacity"
                >
                  <h2 className="text-2xl font-bold mb-3 group-hover:underline">
                    [external]: informal introduction to rust
                  </h2>
                </Link>
              </article>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
