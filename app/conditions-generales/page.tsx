import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente — Vilbert Hydro",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://vilbert-hydro.fr/conditions-generales",
  },
};

export default function ConditionsGenerales() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#1b4f8c] text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold">Conditions Générales de Vente</h1>
        <p className="mt-2 text-blue-100 text-sm">Mise à jour : juin 2025</p>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent l&apos;ensemble des prestations
            réalisées par <strong>Vilbert Hydro</strong> (Groupe Vilbert), notamment : débouchage de canalisations,
            curage, vidange de fosses septiques, inspection télévisée, nettoyage haute pression,
            dégazage de cuves à fioul, balayage de voirie et assainissement.
          </p>
          <p className="mt-2">
            Toute commande implique l&apos;acceptation pleine et entière des présentes CGV.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">2. Prestataire</h2>
          <p>
            <strong>Vilbert Hydro — Groupe Vilbert</strong><br />
            Camon, 80450 — Somme, France<br />
            Contact : <a href="mailto:hydro@groupe-vilbert.fr" className="text-[#1b4f8c] underline">hydro@groupe-vilbert.fr</a> — <a href="tel:0322917201" className="text-[#1b4f8c] underline">03 22 91 72 01</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">3. Devis et commande</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Tout devis est établi <strong>gratuitement</strong> et sans engagement.</li>
            <li>Le devis est valable <strong>30 jours</strong> à compter de sa date d&apos;émission.</li>
            <li>
              La commande est validée par la signature du devis ou la remise d&apos;un bon de commande
              écrit par le client.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">4. Prix</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Les prix sont exprimés <strong>hors taxes (HT)</strong> et soumis à la <strong>TVA au taux de 20 %</strong>.</li>
            <li>Les frais de déplacement sont inclus dans le devis, sauf mention contraire explicite.</li>
            <li>
              Toute prestation supplémentaire non prévue au devis initial fera l&apos;objet d&apos;un avenant
              ou d&apos;une facturation complémentaire acceptée par le client.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">5. Paiement</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Le règlement est exigible <strong>à réception de facture</strong>, délai maximum <strong>30 jours</strong>.</li>
            <li>
              En cas de retard de paiement, des pénalités seront appliquées au taux de{" "}
              <strong>trois fois le taux d&apos;intérêt légal</strong> en vigueur, conformément à la loi.
            </li>
            <li>
              Une indemnité forfaitaire de recouvrement de <strong>40 €</strong> sera également due
              de plein droit (art. L. 441-10 du Code de commerce).
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">6. Conditions d&apos;intervention</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Le client s&apos;engage à assurer un <strong>accès libre et sécurisé</strong> aux installations
              à la date et à l&apos;heure convenues.
            </li>
            <li>La présence d&apos;un adulte responsable est requise lors de l&apos;intervention.</li>
            <li>
              En cas d&apos;impossibilité d&apos;accès imputable au client, le déplacement pourra être facturé.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">7. Responsabilité</h2>
          <p>
            Vilbert Hydro est couvert par une assurance <strong>Responsabilité Civile Professionnelle</strong>.
            Sa responsabilité ne saurait être engagée en cas d&apos;accès impossible ou refusé, d&apos;installations
            non conformes aux normes en vigueur, ou de fausse déclaration du client sur l&apos;état des
            réseaux ou équipements.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">8. Garantie et réclamations</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Un <strong>rapport d&apos;intervention</strong> est remis au client à l&apos;issue de chaque prestation.
            </li>
            <li>
              Toute réclamation relative à la prestation doit être formulée par écrit dans les{" "}
              <strong>48 heures</strong> suivant l&apos;intervention, à l&apos;adresse{" "}
              <a href="mailto:hydro@groupe-vilbert.fr" className="text-[#1b4f8c] underline">
                hydro@groupe-vilbert.fr
              </a>.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">9. Données personnelles</h2>
          <p>
            Les données personnelles collectées dans le cadre de la relation commerciale sont traitées
            conformément à notre{" "}
            <a href="/politique-confidentialite" className="text-[#1b4f8c] underline">
              Politique de Confidentialité
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">10. Litiges</h2>
          <p>
            Les présentes CGV sont soumises au <strong>droit français</strong>. En cas de litige non
            résolu à l&apos;amiable, le <strong>tribunal compétent d&apos;Amiens</strong> sera seul compétent,
            sauf disposition légale contraire applicable aux consommateurs.
          </p>
        </section>

      </div>
    </main>
  );
}
