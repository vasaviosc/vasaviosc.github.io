import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center pt-20">
      <section className="text-center px-4">
        <h1 className="text-9xl font-black mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">page not found</p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-80 transition-opacity border border-black"
        >
          go home
        </Link>
      </section>
    </main>
  );
}
