import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-gray-800 flex flex-col">
      {/* Hero */}
      <section className="bg-[#1b4f8c] text-white py-20 px-6 text-center">
        <p className="text-8xl font-extrabold tracking-tight mb-4">404</p>
        <h1 className="text-3xl font-bold mb-4">Page introuvable</h1>
        <p className="text-lg text-blue-100 max-w-xl mx-auto">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
      </section>

      {/* Liens rapides */}
      <section className="py-14 px-6 max-w-2xl mx-auto w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">
          Retrouvez votre chemin
        </h2>
        <ul className="flex flex-col gap-3">
          {[
            { label: "Accueil", href: "/" },
            { label: "Nos Services", href: "/services" },
            { label: "Débouchage canalisation", href: "/debouchage-canalisation" },
            { label: "Vidange fosse septique", href: "/vidange-fosse-septique" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block w-full rounded border border-[#1b4f8c] text-[#1b4f8c] px-5 py-3 text-center font-medium hover:bg-[#1b4f8c] hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA téléphone */}
      <section className="py-10 px-6 text-center border-t border-gray-100">
        <p className="text-gray-600 mb-3">
          Besoin d&apos;une intervention urgente&nbsp;?
        </p>
        <a
          href="tel:0322917201"
          className="inline-block bg-[#1b4f8c] text-white font-semibold px-8 py-3 rounded hover:bg-blue-900 transition-colors text-lg"
        >
          03 22 91 72 01
        </a>
      </section>
    </main>
  );
}
