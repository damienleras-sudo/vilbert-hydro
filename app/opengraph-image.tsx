import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vilbert Hydro — Débouchage, Curage & Assainissement en Picardie (Somme, Oise, Aisne)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1b4f8c",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div style={{ color: "#f5b800", fontSize: 20, fontWeight: 900, letterSpacing: 4, marginBottom: 20, textTransform: "uppercase" }}>
          Groupe Vilbert
        </div>
        <div style={{ color: "white", fontSize: 64, fontWeight: 900, textAlign: "center", lineHeight: 1.1, marginBottom: 16 }}>
          Vilbert Hydro
        </div>
        <div style={{ background: "#f5b800", height: 6, width: 100, marginBottom: 24 }} />
        <div style={{ color: "#93c5fd", fontSize: 28, textAlign: "center", fontWeight: 600 }}>
          Débouchage · Curage · Assainissement
        </div>
        <div style={{ color: "#bfdbfe", fontSize: 20, marginTop: 12 }}>
          Picardie (80 · 60 · 02) — 📞 03 22 91 72 01
        </div>
        <div style={{ background: "#f5b800", color: "#1a1a1a", fontSize: 16, fontWeight: 900, padding: "8px 20px", borderRadius: 8, marginTop: 30 }}>
          🚨 URGENCES 24H/24 · 7J/7
        </div>
      </div>
    ),
    { ...size }
  );
}
