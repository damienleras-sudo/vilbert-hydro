import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Conseils assainissement, débouchage et entretien canalisations",
  description:
    "Conseils pratiques, réglementation et guides sur l'assainissement, le débouchage de canalisations, la vidange de fosses septiques et l'entretien des réseaux. Blog Vilbert Hydro.",
  alternates: { canonical: "https://vilbert-hydro.fr/blog" },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1b4f8c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Blog & Conseils</h1>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-blue-100 max-w-2xl text-lg">
            Guides pratiques, réglementation et conseils d&apos;experts pour prendre soin de vos
            canalisations et installations d&apos;assainissement.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 group"
              >
                <div className="bg-[#1b4f8c] h-2" />
                <div className="p-6">
                  <span className="text-xs text-[#1b4f8c] font-bold uppercase tracking-wide bg-blue-50 px-2 py-0.5 rounded">
                    {post.category}
                  </span>
                  <h2 className="text-gray-900 font-bold text-lg mt-3 mb-3 group-hover:text-[#1b4f8c] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-xs text-gray-400">{post.date}</p>
                    <span className="text-[#1b4f8c] text-sm font-bold group-hover:text-[#f5b800] transition-colors">
                      Lire →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b4f8c] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-black mb-3">Besoin d&apos;un professionnel ?</h2>
          <p className="text-blue-200 mb-6">
            Vilbert Hydro intervient 24h/24 en Hauts-de-France.
          </p>
          <a
            href="tel:0322917201"
            className="inline-block bg-[#f5b800] text-gray-900 font-bold px-8 py-3 rounded hover:bg-[#ffd44d] transition-colors"
          >
            📞 03 22 91 72 01
          </a>
        </div>
      </section>
    </>
  );
}
