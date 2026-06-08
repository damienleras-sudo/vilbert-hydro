const stats = [
  { val: "+30 ans", label: "d'expérience" },
  { val: "+2 000", label: "clients servis" },
  { val: "24h/24", label: "disponibilité urgences" },
  { val: "6", label: "départements couverts" },
];

export default function TrustBanner() {
  return (
    <section className="py-10 bg-[#0f2942] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#f5b800]">{s.val}</div>
              <div className="text-blue-300 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
