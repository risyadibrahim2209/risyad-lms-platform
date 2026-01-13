"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AddCoursePage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // State untuk menyimpan input form
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        thumbnail: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Mengambil URL dari env local (http://127.0.0.1:8000)
            const apiUrl = process.env.NEXT_PUBLIC_API_URL;

            // --- TRIK GAMBAR OTOMATIS DI SINI ---
            // Kita gabungkan data form dengan link gambar dummy dari internet
            const dataToSubmit = {
                ...formData,
                // Ini placeholder image gratisan yang sering dipakai developer
                thumbnail: "https://placehold.co/600x400/png"
            };

            const response = await fetch(`${apiUrl}/courses`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Kirim data ke Python Backend
                body: JSON.stringify(dataToSubmit),
            });

            if (response.ok) {
                alert("Sukses! Materi berhasil disimpan.");
                router.push("/dashboard");
                router.refresh();
            } else {
                alert("Gagal menyimpan materi. Cek koneksi backend.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Terjadi kesalahan jaringan.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

                {/* Header Form */}
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Tambah Materi Baru</h1>
                    <Link href="/admin" className="text-sm text-gray-500 hover:text-gray-900 font-medium">
                        Batal
                    </Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Input Judul */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Judul Materi
                        </label>
                        <input
                            type="text"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="Contoh: Pengenalan Python & AI"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    {/* Input Deskripsi */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Deskripsi Singkat
                        </label>
                        <textarea
                            rows={4}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Jelaskan apa yang akan dipelajari di modul ini..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    {/* Area Upload Gambar (Dummy Visual) */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                            Thumbnail Video
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition cursor-pointer group">
                            <div className="text-4xl mb-2 group-hover:scale-110 transition transform">📁</div>
                            <span className="text-gray-500 text-sm font-medium">
                                Klik untuk upload thumbnail (Fitur segera hadir)
                            </span>
                        </div>
                    </div>

                    {/* Tombol Simpan */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`w-full py-3 rounded-lg font-bold text-white transition transform active:scale-[0.98] ${isLoading
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30"
                            }`}
                    >
                        {isLoading ? "Sedang Menyimpan..." : "Simpan Materi"}
                    </button>
                </form>
            </div>
        </div>
    );
}