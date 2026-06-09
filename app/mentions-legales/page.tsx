import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales — Vilbert Hydro",
  description: "Mentions légales de Vilbert Hydro : éditeur, hébergeur, propriété intellectuelle, données personnelles.",
  alternates: { canonical: "https://vilbert-hydro.fr/mentions-legales" },
  robots: { index: false, follow: false },
};

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-gray-700">
      <h1 className="text-3xl font-black text-[#1b4f8c] mb-8">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Éditeur du site</h2>
        <p><strong>Vilbert Hydro</strong> — filiale du Groupe Vilbert</p>
        <p>620 Rue Stéphane Hessel, 80450 Camon (Somme)</p>
        <p>Téléphone : <a href="tel:0322917201" className="text-[#1b4f8c] hover:underline">03 22 91 72 01</a></p>
        <p>Email : <a href="mailto:hydro@groupe-vilbert.fr" className="text-[#1b4f8c] hover:underline">hydro@groupe-vilbert.fr</a></p>
        <p className="mt-2">Directeur de la publication : Groupe Vilbert</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Hébergement</h2>
        <p><strong>Vercel Inc.</strong></p>
        <p>340 Pine Street, Suite 701 — San Francisco, CA 94104 — États-Unis</p>
        <p><a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[#1b4f8c] hover:underline">vercel.com</a></p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Propriété intellectuelle</h2>
        <p>
          L'ensemble du contenu de ce site (textes, images, logos, vidéos) est la propriété exclusive de Vilbert Hydro / Groupe Vilbert, sauf mention contraire.
          Toute reproduction, totale ou partielle, est strictement interdite sans autorisation préalable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Données personnelles</h2>
        <p>
          Ce site ne collecte aucune donnée personnelle via des formulaires actifs. Les informations transmises par email ou téléphone sont utilisées uniquement pour répondre à vos demandes et ne sont pas transmises à des tiers.
          Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Contactez-nous à{" "}
          <a href="mailto:hydro@groupe-vilbert.fr" className="text-[#1b4f8c] hover:underline">hydro@groupe-vilbert.fr</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
        <p>Ce site n&apos;utilise pas de cookies de traçage ou publicitaires.</p>
      </section>

      <div className="mt-10">
        <Link href="/" className="text-[#1b4f8c] hover:underline text-sm">← Retour à l&apos;accueil</Link>
      </div>
    </main>
  );
}
