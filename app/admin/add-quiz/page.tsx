"use client";

import { useState } from "react";

export default function AddQuizPage() {
    // State Array of Objects untuk menyimpan banyak soal
    const [questions, setQuestions] = useState([
        { id: 1, text: "", options: ["", "", "", ""], correctIndex: 0 }
    ]);

    // Fungsi menambah wadah soal baru
    const addQuestion = () => {
        setQuestions([
            ...questions,
            { id: questions.length + 1, text: "", options: ["", "", "", ""], correctIndex: 0 }
        ]);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Buat Kuis Baru</h1>
                <p className="text-gray-500 mb-8">Tambahkan pertanyaan untuk modul pembelajaran.</p>

                <div className="space-y-6">
                    {questions.map((q, qIndex) => (
                        <div key={q.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 relative">

                            <div className="absolute top-4 right-4 text-xs font-bold text-gray-400">
                                SOAL #{qIndex + 1}
                            </div>

                            {/* Input Soal */}
                            <div className="mb-4">
                                <label className="block text-sm font-bold text-gray-700 mb-1">Pertanyaan</label>
                                <input
                                    type="text"
                                    placeholder="Tulis pertanyaan di sini..."
                                    className="w-full p-2 border-b-2 border-gray-200 focus:border-blue-500 outline-none transition bg-transparent"
                                />
                            </div>

                            {/* Input Pilihan Ganda */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {q.options.map((opt, optIndex) => (
                                    <div key={optIndex} className="flex items-center gap-2">
                                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${optIndex === 0 ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-100 text-gray-500'}`}>
                                            {['A', 'B', 'C', 'D'][optIndex]}
                                        </div>
                                        <input
                                            type="text"
                                            placeholder={`Pilihan ${optIndex + 1}`}
                                            className="w-full p-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500 outline-none"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tombol Aksi Bawah */}
                <div className="mt-8 flex gap-4">
                    <button
                        onClick={addQuestion}
                        className="flex-1 py-3 border-2 border-dashed border-gray-300 text-gray-500 font-bold rounded-xl hover:border-blue-500 hover:text-blue-500 transition"
                    >
                        + Tambah Pertanyaan Lain
                    </button>
                    <button className="flex-1 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition shadow-lg">
                        Simpan Semua Kuis
                    </button>
                </div>

            </div>
        </div>
    );
}