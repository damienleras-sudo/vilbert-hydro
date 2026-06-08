"use client";
import dynamic from "next/dynamic";

const ZoneMap = dynamic(() => import("./ZoneMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-2xl bg-gray-100 animate-pulse" style={{ height: "320px" }}>
      <div className="flex items-center justify-center h-full text-gray-400 text-sm">
        Chargement de la carte…
      </div>
    </div>
  ),
});

export default function ZoneMapWrapper() {
  return <ZoneMap />;
}
