"use client"; // 1. WAJIB: Mengubah ini jadi Client Component agar bisa pakai State

import PageWrapper from "@/components/PageWrapper";
import CourseCard from "@/components/CourseCard";
import { motion } from "framer-motion";
import { useState } from "react"; // Import hook untuk simpan data sementara

export default function DashboardPage() {
    // Data Master
    const courses = [
        { id: 1, title: "React Basics", desc: "Dasar component & props", level: "Beginner" },
        { id: 2, title: "Next.js Pro", desc: "Routing & SSR", level: "Intermediate" },
        { id: 3, title: "SQL Database", desc: "Manajemen data relasional", level: "Advanced" },
        { id: 4, title: "UI/UX Design", desc: "Prinsip desain modern", level: "Beginner" },
    ];

    // State untuk menyimpan apa yang diketik user
    const [search, setSearch] = useState("");

    // --- TANTANGAN ANDA DI SINI ---
    // Gunakan fungsi .filter() milik Array JavaScript.
    // Logikanya: Kembalikan true jika course.title mengandung kata kunci (search).
    // Tips: Gunakan .toLowerCase() agar pencarian tidak sensitif huruf besar/kecil.

    const filteredCourses = courses.filter((course) => {
        // Tulis return ... logic di sini
        return course.title.toLowerCase().includes(search.toLowerCase());
    });

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2 // Jeda 0.2 detik antar item
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };



    return (
        <PageWrapper>
            <main className="p-10 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Dashboard Siswa</h1>
                        <p className="mt-2 text-gray-600">Selamat datang kembali!</p>
                    </div>

                    {/* INPUT SEARCH */}
                    <input
                        type="text"
                        placeholder="Cari materi..."
                        className="border border-gray-300 p-2 rounded-lg w-64"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} // Update state saat mengetik
                    />
                </div>

                {/* Hasil Filter */}
                {filteredCourses.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10">Materi tidak ditemukan.</p>
                ) : (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {filteredCourses.map((course) => (
                            <motion.div key={course.id} variants={item}>
                                <CourseCard
                                    key={course.id}
                                    id={course.id}
                                    title={course.title}
                                    description={course.desc}
                                    level={course.level}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </main>
        </PageWrapper>

    );
}