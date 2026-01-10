"use client"; // 1. Wajib karena kita pakai hooks

import Link from "next/link";
import { usePathname } from "next/navigation"; // 2. Import hook untuk baca URL

export default function Navbar() {
    const pathname = usePathname(); // Ini akan berisi string url, misal: "/dashboard"

    // Logic sederhana: Kita anggap user login jika URL mengandung "/dashboard" atau "/courses"
    const isLoggedIn = pathname.startsWith("/dashboard") || pathname.startsWith("/courses");

    return (
        <nav className="flex justify-between items-center p-6 bg-white shadow-sm sticky top-0 z-50">
            <Link href="/" className="text-xl font-bold text-blue-700">
                CorpLMS
            </Link>

            {/* --- TANTANGAN LOGIKA TAMPILAN (TERNARY OPERATOR) --- */}
            {/* Syntax: { kondisi ? (Jika Benar) : (Jika Salah) } */}

            {isLoggedIn ? (
                <div className="flex gap-4 items-center">
                    <span className="text-sm text-gray-600">Halo, User!</span>
                    {/* Tombol Logout: Arahkan kembali ke home "/" */}
                    <Link
                        href="/"
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 text-sm"
                    >
                        Logout
                    </Link>
                </div>
            ) : (
                /* Tombol Login (Jika belum login) */
                <Link
                    href="/login"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    Login
                </Link>
            )}
        </nav>
    );
}