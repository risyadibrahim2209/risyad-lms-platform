"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QuizPage() {
    const router = useRouter();

    // --- DATA SOAL (Array of Objects) ---
    const questions = [
        {
            question: "Apa kepanjangan dari React?",
            options: ["Reactivity Action", "Relative Actor", "Library UI Facebook", "Database SQL"],
            correctAnswer: "Library UI Facebook",
        },
        {
            question: "File manakah yang berfungsi sebagai layout utama di Next.js?",
            options: ["index.html", "layout.tsx", "page.tsx", "server.js"],
            correctAnswer: "layout.tsx",
        },
        {
            question: "Hook apa yang digunakan untuk membuat variabel state?",
            options: ["useEffect", "useRouter", "useState", "useClient"],
            correctAnswer: "useState",
        },
    ];

    // --- STATE ---
    const [currentQuestion, setCurrentQuestion] = useState(0); // Mulai dari index 0
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    // --- TANTANGAN LOGIC DI SINI ---
    const handleAnswer = (selectedOption: string) => {
        // 1. Cek apakah jawaban benar?
        // Ambil jawaban benar dari soal saat ini
        const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;

        // Jika benar, tambahkan skor +10
        if (isCorrect) {
            // ??? Isi kode untuk tambah skor di sini ???
            setScore(score + 10);
        }

        // 2. Lanjut ke soal berikutnya
        const nextQuestion = currentQuestion + 1;

        // 3. Cek apakah soal sudah habis?
        if (nextQuestion < questions.length) {
            // Jika masih ada soal, pindah ke soal berikutnya
            setCurrentQuestion(nextQuestion);
        } else {
            // Jika soal habis, tampilkan hasil
            // ??? Isi kode untuk ubah state showResult jadi true ???
            setShowResult(true);
        }
    };

    // --- RENDER TAMPILAN ---
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full">

                {/* KONDISI 1: JIKA HASIL MUNCUL (GAME OVER) */}
                {showResult ? (
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Hasil Kuis</h2>
                        <p className="text-xl text-gray-600 mb-6">
                            Skor Kamu: <span className="text-blue-600 font-bold text-4xl block mt-2">{score} / {questions.length * 10}</span>
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => window.location.reload()} // Reset cara curang (refresh page)
                                className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg font-bold hover:bg-gray-300"
                            >
                                Ulangi
                            </button>
                            <Link href="/dashboard" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">
                                Kembali
                            </Link>
                        </div>
                    </div>
                ) : (
                    /* KONDISI 2: SEDANG MENGERJAKAN SOAL */
                    <div>
                        <div className="mb-6 flex justify-between items-center">
                            <span className="text-gray-500 font-medium">Soal {currentQuestion + 1} / {questions.length}</span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">Skor: {score}</span>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-8 h-16">
                            {questions[currentQuestion].question}
                        </h2>

                        <div className="space-y-3">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleAnswer(option)}
                                    className="w-full text-left p-4 rounded-xl border-2 border-gray-100 hover:border-blue-500 hover:bg-blue-50 transition duration-200 font-medium text-gray-700"
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}