"use client";

import PageWrapper from "@/components/PageWrapper";
import CourseCard from "@/components/CourseCard";
import { useState, useEffect } from "react"; // Tambah useEffect
import SkeletonCard from "@/components/SkeletonCard"; // Import Skeleton

export default function DashboardPage() {
    // Ganti array statis dengan State kosong
    const [courses, setCourses] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    // FETCH DATA DARI API SAAT HALAMAN DIBUKA
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const apiUrl = process.env.NEXT_PUBLIC_API_URL;
                const res = await fetch(`${apiUrl}/courses`); // Panggil API GET yang kita buat di langkah 4
                const data = await res.json();
                setCourses(data); // Simpan data dari database ke State
            } catch (error) {
                console.error("Gagal ambil data:", error);
            } finally {
                setIsLoading(false); // Matikan loading
            }
        };

        fetchCourses();
    }, []);

    // Logic Filter tetap sama
    const filteredCourses = courses.filter((course) => {
        return course.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <PageWrapper>
            <main className="p-10 max-w-7xl mx-auto">
                {/* ... (Header & Search Input tetap sama) ... */}

                <input
                // ... props input search tetap sama ...
                />

                {/* LOGIC TAMPILAN */}
                {isLoading ? (
                    // TAMPILKAN SKELETON JIKA LOADING
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, i) => <SkeletonCard key={i} />)}
                    </div>
                ) : filteredCourses.length === 0 ? (
                    <p className="text-center text-gray-500 mt-10">Materi tidak ditemukan.</p>
                ) : (
                    // TAMPILKAN DATA ASLI
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredCourses.map((course) => (
                            <CourseCard
                                key={course.id}
                                id={course.id}
                                title={course.title}
                                description={course.description} // Sesuaikan nama field database
                                level="General" // Karena di DB belum ada level, kita hardcode dulu
                            />
                        ))}
                    </div>
                )}
            </main>
        </PageWrapper>
    );
}