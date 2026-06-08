"use client";
import { useEffect, useRef } from "react";

// Camon 80450 — siège Vilbert Hydro
const CAMON_LAT = 49.867;
const CAMON_LNG = 2.342;
const RADIUS_KM = 100;

export default function ZoneMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Import dynamique pour éviter le SSR
    import("leaflet").then((L) => {
      // Icône personnalisée pour le marqueur
      const icon = L.divIcon({
        html: `<div style="
          background:#1b4f8c;
          width:40px;height:40px;
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          border:3px solid #f5b800;
          box-shadow:0 4px 12px rgba(0,0,0,0.3);
        "></div>`,
        className: "",
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -44],
      });

      const map = L.map(mapRef.current!, {
        center: [CAMON_LAT, CAMON_LNG],
        zoom: 8,
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      // Fond de carte OpenStreetMap (gratuit, open source)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      // Cercle zone d'intervention 100 km
      L.circle([CAMON_LAT, CAMON_LNG], {
        radius: RADIUS_KM * 1000,
        color: "#1b4f8c",
        fillColor: "#1b4f8c",
        fillOpacity: 0.12,
        weight: 2.5,
        dashArray: "8 4",
      }).addTo(map);

      // Marqueur siège
      const marker = L.marker([CAMON_LAT, CAMON_LNG], { icon }).addTo(map);

      marker.bindPopup(`
        <div style="font-family:sans-serif;padding:4px 2px;min-width:200px">
          <strong style="color:#1b4f8c;font-size:14px">Vilbert Hydro</strong><br>
          <span style="color:#888;font-size:12px">620 Rue Stéphane Hessel</span><br>
          <span style="color:#888;font-size:12px">80450 Camon</span><br>
          <hr style="margin:6px 0;border-color:#eee">
          <a href="tel:0322917201" style="color:#1b4f8c;font-weight:bold;font-size:13px">
            📞 03 22 91 72 01
          </a><br>
          <span style="color:#e53e3e;font-size:11px;font-weight:bold">🚨 Urgences 24h/24 · 7j/7</span>
        </div>
      `).openPopup();

      // Points des villes principales dans la zone
      const villes = [
        { nom: "Amiens", lat: 49.894, lng: 2.296 },
        { nom: "Abbeville", lat: 50.105, lng: 1.833 },
        { nom: "Arras", lat: 50.292, lng: 2.779 },
        { nom: "Compiègne", lat: 49.418, lng: 2.826 },
        { nom: "Saint-Quentin", lat: 49.847, lng: 3.288 },
        { nom: "Lens", lat: 50.433, lng: 2.831 },
      ];

      villes.forEach((v) => {
        const cityIcon = L.divIcon({
          html: `<div style="
            background:#f5b800;
            width:10px;height:10px;
            border-radius:50%;
            border:2px solid #1b4f8c;
            box-shadow:0 2px 6px rgba(0,0,0,0.3);
          "></div>`,
          className: "",
          iconSize: [10, 10],
          iconAnchor: [5, 5],
        });

        L.marker([v.lat, v.lng], { icon: cityIcon })
          .addTo(map)
          .bindTooltip(v.nom, {
            permanent: false,
            direction: "top",
            className: "leaflet-city-tooltip",
          });
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={mapRef}
        className="w-full rounded-2xl overflow-hidden shadow-lg"
        style={{ height: "420px", zIndex: 0 }}
      />
      {/* Légende */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-md text-sm z-[400]">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-3 h-3 rounded-full bg-[#1b4f8c] border-2 border-[#f5b800]" />
          <span className="font-black text-[#1b4f8c] text-xs">Vilbert Hydro — Camon (80)</span>
        </div>
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-8 h-px border-t-2 border-dashed border-[#1b4f8c]" />
          <span className="text-gray-600 text-xs">Zone d&apos;intervention : 100 km</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#f5b800] border-2 border-[#1b4f8c]" />
          <span className="text-gray-600 text-xs">Villes desservies</span>
        </div>
      </div>
    </div>
  );
}
