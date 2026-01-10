"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // ⚠️ Perhatikan import ini (khusus App Router)
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter(); // Ini "Hook" untuk memindah halaman via code

    // State untuk menyimpan input user
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State untuk pesan error (jika login gagal)
    const [error, setError] = useState("");

    // Function yang jalan saat tombol "Login" diklik
    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault(); // 1. Mencegah browser reload halaman (Default HTML behavior)

        // --- TANTANGAN LOGIKA DI SINI ---
        // Skenario:
        // Email yang benar: "user@lms.com"
        // Password yang benar: "123456"

        // Tugas Anda:
        // Buat logika IF / ELSE.
        // Jika email & password BENAR -> Jalankan: router.push("/dashboard");
        // Jika SALAH -> Jalankan: setError("Email atau password salah!");

        if (email === "risyad@gmail.com" && password === "123456") {
            // Redirect ke dashboard
            router.push("/dashboard")
        } else {
            // Tampilkan error
            setError("Email atau password salah!")
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Masuk ke CorpLMS
                </h2>

                {/* Form Login */}
                <form onSubmit={handleLogin} className="space-y-4">

                    {/* Tampilkan Alert Error jika ada */}
                    {error && (
                        <div className="bg-red-100 text-red-600 p-3 rounded text-sm text-center">
                            {error}
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="user@lms.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update state saat mengetik
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            required
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="123456"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-bold hover:bg-blue-700 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Belum punya akun?{" "}
                    <Link href="/" className="text-blue-600 hover:underline">
                        Daftar di sini
                    </Link>
                </p>
            </div>
        </div>
    );
}