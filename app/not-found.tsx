import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
            <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-600 mt-2 mb-8 max-w-md">
                Waduh! Sepertinya Anda tersesat di antah berantah. Materi yang Anda cari mungkin sudah dipindahkan atau dihapus.
            </p>

            <Link
                href="/dashboard"
                className="px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition shadow-lg"
            >
                Kembali ke Dashboard
            </Link>
        </div>
    );
}