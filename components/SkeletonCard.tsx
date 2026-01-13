export default function SkeletonCard() {
    return (
        // animate-pulse adalah class Tailwind untuk efek kedip-kedip otomatis
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 animate-pulse">

            {/* Bagian Gambar (Kotak Abu-abu Besar) */}
            <div className="h-32 bg-gray-300 w-full"></div>

            <div className="p-5 space-y-3">
                {/* Bagian Badge Level */}
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>

                {/* Bagian Judul */}
                <div className="h-6 bg-gray-300 rounded w-3/4"></div>

                {/* Bagian Deskripsi (2 baris) */}
                <div className="space-y-2">
                    <div className="h-3 bg-gray-300 rounded w-full"></div>
                    <div className="h-3 bg-gray-300 rounded w-5/6"></div>
                </div>

                {/* Bagian Tombol */}
                <div className="h-10 bg-gray-800 rounded opacity-10 mt-4 w-full"></div>
            </div>
        </div>
    );
}