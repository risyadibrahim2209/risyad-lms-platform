"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function AdminSidebar() {
    const [isOpen, setIsOpen] = useState(true); // Default terbuka
    const pathname = usePathname();

    // Menu Items
    const menus = [
        { title: "Dashboard", href: "/admin", icon: "📊" },
        { title: "Tambah Materi", href: "/admin/add-course", icon: "📚" },
        { title: "Buat Kuis", href: "/admin/add-quiz", icon: "📝" },
        { title: "Kembali ke Web", href: "/", icon: "🏠" },
    ];

    return (
        <motion.div
            // Animasi Lebar Sidebar
            animate={{ width: isOpen ? "250px" : "80px" }}
            className="h-screen bg-gray-900 text-white flex flex-col shadow-xl sticky top-0 z-50"
        >
            {/* Header Sidebar (Logo & Toggle) */}
            <div className="p-4 flex items-center justify-between border-b border-gray-800 h-16">
                {/* Tampilkan Teks hanya jika Terbuka */}
                {isOpen && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-bold text-xl tracking-wider text-blue-400"
                    >
                        ADMIN
                    </motion.span>
                )}

                {/* Tombol Toggle (Buka/Tutup) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg hover:bg-gray-800 transition"
                >
                    {isOpen ? "◀" : "▶"}
                </button>
            </div>

            {/* Menu List */}
            <nav className="flex-1 p-4 space-y-2">
                {menus.map((menu) => {
                    const isActive = pathname === menu.href;

                    return (
                        <Link key={menu.href} href={menu.href}>
                            <div
                                className={`flex items-center gap-4 p-3 rounded-xl transition cursor-pointer overflow-hidden ${isActive
                                        ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                                        : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    }`}
                            >
                                <span className="text-xl min-w-[24px] text-center">{menu.icon}</span>

                                {/* Teks Menu (Hilang jika ditutup) */}
                                {isOpen && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="whitespace-nowrap font-medium"
                                    >
                                        {menu.title}
                                    </motion.span>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer User Profile */}
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold text-white shrink-0">
                        A
                    </div>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="overflow-hidden"
                        >
                            <p className="text-sm font-bold text-white">Admin Utama</p>
                            <p className="text-xs text-gray-500">Super User</p>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}