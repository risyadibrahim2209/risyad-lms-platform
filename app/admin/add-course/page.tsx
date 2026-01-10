"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddCoursePage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        thumbnail: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Data Tersimpan di Console! (Cek Inspect Element)");
        console.log("Data Course Baru:", formData);
        // Di sini nanti kita panggil API ke Backend
    };

    return (
        <div className="min-h-screen bg-gray-50 p-10 flex justify-center">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 p-8">

                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Tambah Materi Baru</h1>
                    <Link href="/admin" className="text-sm text-gray-500 hover:text-gray-900">Cancel</Link>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Input Title dengan Style Modern */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Judul Materi</label>
                        <input
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                            placeholder="Contoh: Pengenalan Next.js Routing"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    {/* Input Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi Singkat</label>
                        <textarea
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
                            placeholder="Jelaskan apa yang akan dipelajari..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    {/* Upload Mockup */}
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:bg-gray-50 transition cursor-pointer">
                        <span className="text-gray-500 text-sm">📁 Klik untuk upload thumbnail video (Dummy)</span>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition transform active:scale-95">
                        Simpan Materi
                    </button>
                </form>
            </div>
        </div>
    );
}