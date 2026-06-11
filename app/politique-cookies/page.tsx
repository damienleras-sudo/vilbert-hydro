import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Cookies — Vilbert Hydro",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://vilbert-hydro.fr/politique-cookies",
  },
};

export default function PolitiqueCookies() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <header className="bg-[#1b4f8c] text-white py-12 px-6 text-center">
        <h1 className="text-3xl font-bold">Politique de Cookies</h1>
        <p className="mt-2 text-blue-100 text-sm">Mise à jour : juin 2025</p>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">1. Qu&apos;est-ce qu&apos;un cookie&nbsp;?</h2>
          <p>
            Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone,
            tablette) lors de la visite d&apos;un site web. Il permet au site de mémoriser certaines
            informations relatives à votre navigation afin d&apos;améliorer votre expérience utilisateur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">2. Cookies utilisés sur ce site</h2>

          <div className="mt-4 space-y-6">
            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Cookies de session — Essentiels</h3>
              <p className="text-sm">
                Ces cookies sont strictement nécessaires au fonctionnement du site. Ils permettent
                la navigation et l&apos;utilisation des fonctionnalités de base. Ils ne collectent aucune
                information permettant de vous identifier personnellement et ne peuvent pas être
                désactivés sans affecter le fonctionnement du site.
              </p>
              <p className="text-sm mt-1 text-gray-500">Base légale : intérêt légitime — aucun consentement requis.</p>
            </div>

            <div className="border border-gray-200 rounded p-4">
              <h3 className="font-semibold text-gray-800 mb-1">Google Analytics — Optionnel</h3>
              <p className="text-sm">
                Avec votre consentement, nous utilisons Google Analytics pour mesurer l&apos;audience
                du site (pages visitées, durée des sessions, provenance des visiteurs). Ces données
                sont anonymisées et ne permettent pas de vous identifier directement.
              </p>
              <p className="text-sm mt-1 text-gray-500">
                Ce cookie est <strong>désactivable</strong> à tout moment via le bandeau de consentement
                ou les paramètres de votre navigateur.
              </p>
            </div>

            <div className="border border-gray-200 rounded p-4 bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-1">Cookies publicitaires</h3>
              <p className="text-sm">
                Aucun cookie publicitaire ou de ciblage n&apos;est déposé sur ce site.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">3. Durée de conservation</h2>
          <p>
            Les cookies déposés sur votre terminal sont conservés pour une durée maximale de{" "}
            <strong>13 mois</strong> à compter de leur dépôt, conformément aux recommandations de la CNIL.
            Au-delà de cette durée, votre consentement est à nouveau requis pour les cookies optionnels.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">4. Comment désactiver les cookies&nbsp;?</h2>
          <p>
            Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies.
            Voici comment procéder selon votre navigateur :
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
            <li>
              <strong>Google Chrome</strong> : Paramètres → Confidentialité et sécurité → Cookies et autres données des sites
            </li>
            <li>
              <strong>Mozilla Firefox</strong> : Paramètres → Vie privée et sécurité → Cookies et données de sites
            </li>
            <li>
              <strong>Safari</strong> : Préférences → Confidentialité → Gestion des données des sites web
            </li>
            <li>
              <strong>Microsoft Edge</strong> : Paramètres → Cookies et autorisations du site
            </li>
          </ul>
          <p className="mt-3 text-sm text-gray-500">
            Attention : la désactivation des cookies essentiels peut altérer le fonctionnement du site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">5. Bandeau de consentement</h2>
          <p>
            Lors de votre première visite, un bandeau de consentement non intrusif vous informe
            de l&apos;utilisation des cookies et vous permet d&apos;accepter ou de refuser les cookies
            analytiques optionnels. Votre choix est mémorisé pour vos visites suivantes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#1b4f8c] mb-3">6. Contact</h2>
          <p>
            Pour toute question relative à notre utilisation des cookies, contactez-nous à :{" "}
            <a href="mailto:hydro@groupe-vilbert.fr" className="text-[#1b4f8c] underline">
              hydro@groupe-vilbert.fr
            </a>
          </p>
          <p className="mt-2">
            Pour en savoir plus sur vos droits, consultez notre{" "}
            <a href="/politique-confidentialite" className="text-[#1b4f8c] underline">
              Politique de Confidentialité
            </a>.
          </p>
        </section>

      </div>
    </main>
  );
}
