// app/page.tsx
import FeatureCard from "@/components/FeatureCard"

// 1. Ini adalah COMPONENT. Dalam React, component adalah function JS yang mengembalikan HTML (JSX).
// Nama function harus Huruf Besar (PascalCase).
export default function Home() {

  // 2. RETURN: Di sini kita menulis UI kita.
  return (
    <div className="min-h-screen bg-gray-50">
      {/* --- HERO SECTION --- */}
      <main className="max-w-4xl mx-auto mt-20 text-center px-4">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Tingkatkan Skill Tim Anda <br />
          <span className="text-blue-600">Secara Efisien</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Platform pembelajaran terpadu untuk tracking progress,
          sertifikasi, dan pengembangan karir karyawan.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
            Mulai Belajar
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
            Lihat Katalog
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

          <FeatureCard
            title="Modules"
            description="Materi lengkap video & teks yang disusun sistematis."
          />

          <FeatureCard
            title="Quiz"
            description="Uji pemahaman karyawan dengan scoring otomatis."
          />

          <FeatureCard
            title="Certificate"
            description="Dapat sertifikat resmi setelah menyelesaikan alur belajar."
          />

        </div>

      </main>
    </div>
  );
}