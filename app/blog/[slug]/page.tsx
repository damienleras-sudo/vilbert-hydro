import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    authors: [{ name: post.author }],
    alternates: { canonical: `https://vilbert-hydro.fr/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: ["https://vilbert-hydro.fr/a-propos"],
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-black text-[#1b4f8c] mt-8 mb-3">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-2">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-3xl font-black text-[#1b4f8c] mb-4">
          {line.slice(2)}
        </h1>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-1 my-4 text-gray-700 text-sm leading-relaxed">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold text-gray-900 my-2">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-gray-700 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
          }}
        />
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Vilbert Hydro",
      url: "https://vilbert-hydro.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Vilbert Hydro",
      logo: {
        "@type": "ImageObject",
        url: "https://vilbert-hydro.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://vilbert-hydro.fr/blog/${post.slug}`,
    },
    url: `https://vilbert-hydro.fr/blog/${post.slug}`,
    image: "https://vilbert-hydro.fr/opengraph-image",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://vilbert-hydro.fr",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://vilbert-hydro.fr/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://vilbert-hydro.fr/blog/${post.slug}`,
      },
    ],
  };

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[#1b4f8c] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Fil d'Ariane HTML */}
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">→</li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">→</li>
              <li>
                <Link
                  href={`/blog?categorie=${encodeURIComponent(post.category)}`}
                  className="hover:text-white transition-colors"
                >
                  {post.category}
                </Link>
              </li>
              <li aria-hidden="true" className="select-none">→</li>
              <li className="text-white font-medium truncate max-w-[200px]" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <span className="block text-xs text-[#f5b800] font-bold uppercase tracking-wide mb-2">
            {post.category}
          </span>
          <h1
            className="text-3xl md:text-4xl font-black mb-3"
            itemProp="name"
          >
            {post.title}
          </h1>
          <p className="text-blue-300 text-sm">
            <time itemProp="datePublished" dateTime={post.date}>
              {post.date}
            </time>
            {" — "}
            <span itemProp="author" itemScope itemType="https://schema.org/Organization">
              <span itemProp="name">Vilbert Hydro</span>
            </span>
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article
              className="lg:col-span-2 prose-sm max-w-none"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <meta itemProp="headline" content={post.title} />
              <meta itemProp="description" content={post.metaDescription} />
              <meta itemProp="datePublished" content={post.date} />
              <meta itemProp="dateModified" content={post.date} />
              <meta itemProp="url" content={`https://vilbert-hydro.fr/blog/${post.slug}`} />
              <div itemProp="author" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="Vilbert Hydro" />
                <meta itemProp="url" content="https://vilbert-hydro.fr" />
              </div>
              <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
                <meta itemProp="name" content="Vilbert Hydro" />
              </div>
              <div itemProp="articleBody">
                {renderMarkdown(post.content)}
              </div>
            </article>
            <aside className="space-y-6">
              <div className="bg-[#1b4f8c] rounded-xl p-6 text-white">
                <h3 className="font-black text-lg mb-2">Besoin d&apos;aide ?</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Nos techniciens sont disponibles 24h/24 pour répondre à votre urgence.
                </p>
                <a
                  href="tel:0322917201"
                  className="block text-center bg-[#f5b800] text-gray-900 font-bold px-4 py-3 rounded hover:bg-[#ffd44d] transition-colors text-sm"
                >
                  📞 03 22 91 72 01
                </a>
                <Link
                  href="/contact"
                  className="block text-center mt-2 border border-blue-400 text-white font-semibold px-4 py-2 rounded hover:bg-white/10 transition-colors text-sm"
                >
                  Devis gratuit →
                </Link>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-sm">Autres articles</h3>
                <ul className="space-y-3">
                  {otherPosts.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/blog/${p.slug}`}
                        className="text-sm text-[#1b4f8c] hover:underline font-medium leading-snug block"
                      >
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
