// app/courses/[id]/quiz/page.tsx
"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function CourseQuizPage() {
    const router = useRouter();
    const params = useParams(); // Ambil ID Course

    // DATA DUMMY (Nanti ini bisa dinamis berdasarkan ID)
    const questions = [
        {
            question: "Apa fungsi utama useEffect?",
            options: ["Side Effects", "State Management", "Routing", "Styling"],
            correctAnswer: "Side Effects",
        },
        {
            question: "Di Next.js 13+, folder apa yang menyimpan routing?",
            options: ["pages", "src", "app", "public"],
            correctAnswer: "app",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (selectedOption: string) => {
        const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;
        if (isCorrect) setScore(score + 50); // Skor 50 per soal (karena cuma 2 soal)

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full">
                {showResult ? (
                    <div className="text-center animate-in fade-in zoom-in duration-300">
                        <h2 className="text-2xl font-bold mb-4">Kuis Materi #{params.id} Selesai!</h2>
                        <div className="text-6xl mb-4">🎉</div>
                        <p className="text-gray-600">Skor Kamu:</p>
                        <p className="text-4xl font-bold text-blue-600 mb-6">{score}</p>

                        <button
                            onClick={() => router.push(`/courses/${params.id}`)}
                            className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-black transition"
                        >
                            Kembali ke Materi
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="mb-4 text-sm text-gray-500 font-bold uppercase tracking-widest">
                            Quiz Modul {params.id}
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-6">
                            {questions[currentQuestion].question}
                        </h2>
                        <div className="space-y-3">
                            {questions[currentQuestion].options.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(option)}
                                    className="w-full text-left p-4 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition duration-200"
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