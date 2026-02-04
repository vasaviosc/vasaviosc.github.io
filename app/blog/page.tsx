'use client'

import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  author: string
  date: string
  excerpt: string
  readTime: string
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Open Source',
    author: 'Priya Sharma',
    date: 'Nov 12, 2024',
    excerpt: 'A beginner\'s guide to contributing to open-source projects. Learn how to find issues, fork repos, and submit your first PR.',
    readTime: '8 min',
  },
  {
    id: '2',
    title: 'The Art of Writing Good Commit Messages',
    author: 'Rohit Singh',
    date: 'Nov 8, 2024',
    excerpt: 'Why commit messages matter and how to write them effectively. Clear history helps future developers understand your code.',
    readTime: '5 min',
  },
  {
    id: '3',
    title: 'Understanding Git Workflows',
    author: 'Alex Kumar',
    date: 'Nov 4, 2024',
    excerpt: 'A deep dive into popular git workflows like Git Flow and GitHub Flow. Choose the right one for your project.',
    readTime: '12 min',
  },
  {
    id: '4',
    title: 'Code Review Best Practices',
    author: 'Sarah Chen',
    date: 'Oct 31, 2024',
    excerpt: 'How to give and receive constructive feedback during code reviews. Building a collaborative engineering culture.',
    readTime: '10 min',
  },
  {
    id: '5',
    title: 'CI/CD Pipelines 101',
    author: 'Maya Patel',
    date: 'Oct 28, 2024',
    excerpt: 'Introduction to continuous integration and continuous deployment. Automate your testing and deployment workflows.',
    readTime: '15 min',
  },
  {
    id: '6',
    title: 'Testing Your Code Like a Pro',
    author: 'Alex Kumar',
    date: 'Oct 24, 2024',
    excerpt: 'Unit tests, integration tests, and e2e tests. A comprehensive guide to testing strategies in modern development.',
    readTime: '13 min',
  },
]

export default function BlogPage() {
  return (
    <main className="bg-white pt-20">
      <section className="py-24 px-4 border-b border-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link href="/" className="text-sm text-gray-600 hover:text-black mb-6 inline-block">
              ← back
            </Link>
            <h1 className="text-5xl font-bold mb-4">blog</h1>
            <p className="text-gray-600">Thoughts on open source, development, and community.</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="border border-black p-8 hover:shadow-md transition-shadow bg-white"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-gray-600 mb-2">{post.date}</p>
                    <h2 className="text-2xl font-bold">{post.title}</h2>
                  </div>
                  <span className="text-xs text-gray-600 whitespace-nowrap ml-4">{post.readTime} read</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-600">by {post.author}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-sm font-medium border-b border-black hover:opacity-60 transition-opacity"
                  >
                    read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
