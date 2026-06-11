import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité — Vilbert Hydro",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://vilbert-hydro.fr/politique-confidentialite",
  },
};

export default function PolitiqueConfidentialite() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#1b4f8c] text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold">Politique de Confidentialité</h1>
        <p className="mt-2 text-blue-100 text-sm">Mise à jour : juin 2025</p>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">1. Responsable du traitement</h2>
          <p>
            <strong>Vilbert Hydro — Groupe Vilbert</strong><br />
            Camon, 80450 — Somme, France<br />
            SIRET : disponible sur demande<br />
            Contact DPD : <a href="mailto:hydro@groupe-vilbert.fr" className="text-[#1b4f8c] underline">hydro@groupe-vilbert.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">2. Données collectées</h2>
          <p>Nous collectons les données suivantes :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Via le formulaire de contact : nom, adresse e-mail, numéro de téléphone, message.</li>
            <li>Cookies analytiques (si applicable) : données de navigation anonymisées.</li>
            <li>Logs serveur : adresse IP, date et heure d&apos;accès, pages consultées.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">3. Finalités du traitement</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Répondre à vos demandes de contact ou de devis.</li>
            <li>Améliorer la qualité de nos services et de notre site web.</li>
            <li>Respecter nos obligations légales et réglementaires.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">4. Base légale</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Intérêt légitime</strong> (art. 6.1.f RGPD) : traitement des demandes de contact.</li>
            <li><strong>Consentement</strong> (art. 6.1.a RGPD) : dépôt de cookies analytiques optionnels.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">5. Durée de conservation</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Données issues du formulaire de contact : <strong>3 ans</strong> à compter du dernier contact.</li>
            <li>Cookies analytiques : <strong>13 mois</strong> maximum.</li>
            <li>Logs serveur : 12 mois conformément aux obligations légales.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">6. Vos droits</h2>
          <p>
            Conformément au RGPD (UE 2016/679) et à la loi Informatique et Libertés, vous disposez des droits suivants :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Droit d&apos;accès à vos données personnelles.</li>
            <li>Droit de rectification des données inexactes.</li>
            <li>Droit à l&apos;effacement (« droit à l&apos;oubli »).</li>
            <li>Droit à la portabilité de vos données.</li>
            <li>Droit d&apos;opposition au traitement.</li>
          </ul>
          <p className="mt-3">
            Pour exercer vos droits, contactez-nous à :{" "}
            <a href="mailto:hydro@groupe-vilbert.fr" className="text-[#1b4f8c] underline">
              hydro@groupe-vilbert.fr
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">7. Cookies</h2>
          <p>
            Notre site utilise uniquement des cookies techniques essentiels au fonctionnement du site
            et, avec votre consentement, des cookies analytiques optionnels permettant de mesurer
            l&apos;audience. Aucun cookie publicitaire n&apos;est déposé.
            Pour en savoir plus, consultez notre{" "}
            <a href="/politique-cookies" className="text-[#1b4f8c] underline">
              Politique de Cookies
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">8. Hébergement et transferts internationaux</h2>
          <p>
            Le site est hébergé par <strong>Vercel Inc.</strong> (USA). Ce transfert hors Union européenne est
            encadré par des clauses contractuelles types approuvées par la Commission européenne,
            conformément à l&apos;article 46 du RGPD.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">9. Réclamation auprès de la CNIL</h2>
          <p>
            Vous avez le droit d&apos;introduire une réclamation auprès de l&apos;autorité de contrôle compétente,
            la <strong>CNIL</strong> :{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1b4f8c] underline"
            >
              www.cnil.fr
            </a>
          </p>
        </section>

      </div>
    </main>
  );
}
