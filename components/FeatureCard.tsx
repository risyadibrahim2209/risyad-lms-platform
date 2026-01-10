// components/FeatureCard.tsx

// 1. Kita definisikan "Tipe Data" apa saja yang boleh masuk (Ini aturan TypeScript)
interface FeatureCardProps {
    title: string;       // Judul harus berupa text
    description: string; // Deskripsi harus berupa text
}

// 2. Kita buat function yang menerima "props" (parameter)
const FeatureCard = ({ title, description }: FeatureCardProps) => {
    return (
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 transition hover:shadow-md">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">
                {title}
            </h2>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;