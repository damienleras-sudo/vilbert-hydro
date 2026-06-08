import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, telephone, email, service, type_client, message } = body;

    if (!nom || !telephone || !message || !service) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      console.log("Contact form (no email configured):", body);
      return NextResponse.json({ ok: true });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: "Vilbert Hydro <noreply@groupe-vilbert.fr>",
      to: "hydro@groupe-vilbert.fr",
      subject: `[Vilbert Hydro] Nouvelle demande — ${service} — ${nom}`,
      html: `
        <h2>Nouvelle demande de contact — Vilbert Hydro</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Nom</td><td style="padding:8px">${nom}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Téléphone</td><td style="padding:8px"><a href="tel:${telephone}">${telephone}</a></td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Email</td><td style="padding:8px">${email || "Non renseigné"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Service</td><td style="padding:8px">${service}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Type client</td><td style="padding:8px">${type_client || "Non renseigné"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Message</td><td style="padding:8px">${message.replace(/\n/g, "<br>")}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
