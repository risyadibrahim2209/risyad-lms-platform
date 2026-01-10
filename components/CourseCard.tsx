import Link from "next/link";
import { motion } from "framer-motion"; // 1. Import ini

interface CourseCardProps {
    id: number;
    title: string;
    description: string;
    level: string; // Misal: "Beginner", "Advanced"
}

const CourseCard = ({ id, title, description, level }: CourseCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }} // Naik 5 pixel saat hover
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
        >
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
                <div className="h-32 bg-blue-500 flex items-center justify-center">
                    {/* Placeholder gambar */}
                    <span className="text-white font-bold text-2xl">{title[0]}</span>
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                            {level}
                        </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{description}</p>
                    <Link href={`/courses/${id}`} className="w-full bg-gray-900 text-white py-2 rounded-md text-sm font-medium hover:bg-gray-800">
                        <motion.div
                            whileHover={{ scale: 1.05 }} // Membesar dikit
                            whileTap={{ scale: 0.95 }}   // Mengecil dikit saat diklik (efek tekan)
                            className="w-full bg-gray-900 text-center text-white py-2 rounded-md text-sm font-medium"
                        >Lanjut Belajar</motion.div>

                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;