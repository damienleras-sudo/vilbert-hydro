import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — Devis gratuit débouchage & assainissement",
  description:
    "Contactez Vilbert Hydro pour un devis gratuit de débouchage, curage, vidange fosse septique ou inspection télévisée. Urgences 24h/24 au 03 22 91 72 01.",
  alternates: { canonical: "https://vilbert-hydro.vercel.app/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1b4f8c] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black mb-4">Contactez-nous</h1>
          <div className="w-16 h-1 bg-[#f5b800] mb-6" />
          <p className="text-blue-100 max-w-2xl text-lg">
            Devis gratuit, renseignements ou urgence — nous sommes disponibles 24h/24.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FORM */}
          <div>
            <h2 className="text-2xl font-black text-[#1b4f8c] mb-2">Demande de devis gratuit</h2>
            <div className="w-12 h-1 bg-[#f5b800] mb-6" />
            <ContactForm />
          </div>

          {/* INFOS */}
          <div className="space-y-6">
            <div className="bg-[#1b4f8c] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-black mb-4">Nos coordonnées</h3>
              <div className="w-12 h-1 bg-[#f5b800] mb-5" />
              <address className="not-italic space-y-3 text-blue-100 text-sm">
                <p className="text-2xl font-black text-white">
                  📞{" "}
                  <a href="tel:0322917201" className="hover:text-[#f5b800] transition-colors">
                    03 22 91 72 01
                  </a>
                </p>
                <p>
                  ✉️{" "}
                  <a href="mailto:hydro@groupe-vilbert.fr" className="hover:text-white transition-colors">
                    hydro@groupe-vilbert.fr
                  </a>
                </p>
                <div className="border-t border-blue-700 pt-4 mt-4">
                  <p className="text-[#f5b800] font-black text-lg">🚨 Urgences 24h/24 · 7j/7</p>
                  <p className="text-blue-200 text-sm mt-1">Même les week-ends et jours fériés</p>
                </div>
              </address>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Zone d&apos;intervention</h3>
              <p className="text-gray-600 text-sm mb-4">
                Toute la région Hauts-de-France : Somme, Pas-de-Calais, Oise, Aisne, Nord, Seine-Maritime.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Amiens", "Abbeville", "Arras", "Lens", "Saint-Quentin", "Compiègne", "Douai", "Valenciennes"].map((v) => (
                  <span key={v} className="bg-[#1b4f8c] text-white text-xs px-3 py-1 rounded-full">
                    {v}
                  </span>
                ))}
                <span className="text-xs text-gray-400 self-center">+ toute la région</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-3">Groupe Vilbert</h3>
              <p className="text-gray-600 text-sm mb-3">
                Vilbert Hydro est une filiale du Groupe Vilbert, acteur majeur des services
                environnementaux en Hauts-de-France depuis plus de 30 ans.
              </p>
              <a
                href="https://www.groupe-vilbert.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1b4f8c] font-bold text-sm hover:underline"
              >
                ↗ groupe-vilbert.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
