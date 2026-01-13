"use client";

import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* 1. Sidebar di Kiri (Fixed / Sticky handled inside component) */}
            <AdminSidebar />

            {/* 2. Konten Utama di Kanan */}
            {/* flex-1 artinya memenuhi sisa ruang */}
            <div className="flex-1 flex flex-col max-w-full overflow-hidden">
                {/* Disini kita bisa pasang Topbar Admin khusus jika mau, atau langsung konten */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}