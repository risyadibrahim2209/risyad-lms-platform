"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation"; // 1. IMPORT HOOK INI

// Kita tidak butuh interface props lagi untuk params
export default function CourseDetailPage() {
    // 2. AMBIL ID MENGGUNAKAN HOOK
    // useParams otomatis membaca URL browser
    const params = useParams();

    // State tombol
    const [isCompleted, setIsCompleted] = useState(false);

    const toggleComplete = () => {
        setIsCompleted(!isCompleted);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b p-4 flex items-center justify-between">
                <Link href="/dashboard" className="text-blue-600 font-bold hover:underline">
                    &larr; Kembali ke Dashboard
                </Link>
                {/* params.id sekarang aman digunakan */}
                <span className="font-semibold text-gray-700">Modul ID: {params.id}</span>
            </div>

            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* --- KONTEN UTAMA (KIRI) --- */}
                <div className="lg:col-span-2">
                    <div className="aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Course Video"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border">
                        <h1 className="text-2xl font-bold mb-2">Pengenalan Fundamental</h1>
                        <p className="text-gray-600">
                            Di video ini kita akan membahas konsep dasar yang sangat penting
                            untuk pondasi karir Anda.
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                            <Link
                                href={`/courses/${params.id}/quiz`} // Link ke halaman kuis nested
                                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition flex items-center gap-2"
                            >
                                ✍️ Kerjakan Kuis
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- SIDEBAR (KANAN) --- */}
                <div className="space-y-4">
                    <h3 className="font-bold text-gray-700">Daftar Materi</h3>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div key={item} className={`p-4 rounded-lg border cursor-pointer hover:bg-gray-50 ${item === 1 ? 'border-blue-500 bg-blue-50' : 'bg-white'}`}>
                            <div className="text-xs text-gray-500 mb-1">Modul {item}</div>
                            <div className="font-medium text-gray-900">Materi Pembelajaran {item}</div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}