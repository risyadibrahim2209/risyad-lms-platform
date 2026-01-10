// components/PageWrapper.tsx
"use client";

import { motion } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Keadaan Awal: Transparan & agak ke bawah
            animate={{ opacity: 1, y: 0 }}  // Keadaan Akhir: Muncul & posisi normal
            exit={{ opacity: 0, y: 20 }}    // (Opsional) Saat keluar
            transition={{ duration: 0.5, ease: "easeInOut" }} // Durasi animasi
        >
            {children}
        </motion.div>
    );
}