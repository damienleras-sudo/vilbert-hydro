"use client";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

const services = [
  "Débouchage canalisations",
  "Curage / Hydrocurage",
  "Inspection télévisée",
  "Vidange fosse septique",
  "Entretien bac à graisses",
  "Assainissement industriel",
  "Autre",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Nom *</label>
          <input
            name="nom"
            required
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1b4f8c] focus:ring-1 focus:ring-[#1b4f8c]"
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Téléphone *</label>
          <input
            name="telephone"
            required
            type="tel"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1b4f8c] focus:ring-1 focus:ring-[#1b4f8c]"
            placeholder="06 XX XX XX XX"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
        <input
          name="email"
          type="email"
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1b4f8c] focus:ring-1 focus:ring-[#1b4f8c]"
          placeholder="votre@email.fr"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Service souhaité *</label>
        <select
          name="service"
          required
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1b4f8c] focus:ring-1 focus:ring-[#1b4f8c] bg-white"
        >
          <option value="">Sélectionnez un service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Type de client</label>
        <div className="flex gap-4">
          {["Particulier", "Professionnel"].map((t) => (
            <label key={t} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
              <input type="radio" name="type_client" value={t} className="accent-[#1b4f8c]" />
              {t}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1b4f8c] focus:ring-1 focus:ring-[#1b4f8c] resize-none"
          placeholder="Décrivez votre problème ou votre besoin (localisation, type de canalisation, urgence...)..."
        />
      </div>

      {status === "success" && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg px-4 py-3 text-sm">
          ✅ Votre demande a bien été envoyée ! Nous vous recontactons dans les plus brefs délais.
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg px-4 py-3 text-sm">
          ❌ Une erreur s&apos;est produite. Appelez-nous directement au 03 22 91 72 01.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-[#1b4f8c] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#0f2942] transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande →"}
      </button>
      <p className="text-xs text-gray-400 text-center">
        Devis gratuit et sans engagement — Réponse sous 24h
      </p>
    </form>
  );
}
