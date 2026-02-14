import { getPostData, getAllPostSlugs } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <main className="bg-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 px-4 border-b border-black">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="text-sm text-black hover:opacity-60 mb-6 inline-block"
          >
            ← back to blogs
          </Link>

          <h1 className="text-3xl font-bold mb-6">{postData.title}</h1>

          <p className="text-gray-500 text-lg">{postData.date}</p>

          <p className="text-gray-500 text-lg">author: {postData.author}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="prose max-w-none">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
              {postData.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </main>
  );
}
