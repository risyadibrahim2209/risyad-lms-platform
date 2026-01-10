import Link from "next/link";

export default function AdminPage() {
    const users = [
        { id: 1, name: "Budi Santoso", email: "budi@corp.com", score: 80 },
        { id: 2, name: "Siti Aminah", email: "siti@corp.com", score: 40 },
        { id: 3, name: "Andi Wijaya", email: "andi@corp.com", score: 95 },
        { id: 4, name: "Dewi Lestari", email: "dewi@corp.com", score: 60 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">

                {/* HEADER & ACTIONS */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Admin Portal</h1>
                        <p className="text-gray-500 mt-1">Manage courses, quizzes, and student progress.</p>
                    </div>

                    <div className="flex gap-3">
                        {/* Tombol ke Add Quiz */}
                        <Link
                            href="/admin/add-quiz"
                            className="bg-white text-gray-700 border border-gray-300 px-5 py-2.5 rounded-lg font-bold hover:bg-gray-50 transition shadow-sm flex items-center gap-2"
                        >
                            <span>📝</span> Buat Kuis
                        </Link>

                        {/* Tombol ke Add Course */}
                        <Link
                            href="/admin/add-course"
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg flex items-center gap-2"
                        >
                            <span>+</span> Tambah Materi
                        </Link>
                    </div>
                </div>

                {/* STATS CARDS (Hiasan Dashboard) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-gray-500 text-sm font-bold uppercase">Total Siswa</div>
                        <div className="text-3xl font-bold text-gray-900 mt-2">1,240</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-gray-500 text-sm font-bold uppercase">Materi Aktif</div>
                        <div className="text-3xl font-bold text-blue-600 mt-2">42</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-gray-500 text-sm font-bold uppercase">Rata-rata Kelulusan</div>
                        <div className="text-3xl font-bold text-green-600 mt-2">88%</div>
                    </div>
                </div>

                {/* TABEL MONITORING */}
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-gray-800">Progress Siswa Terbaru</h3>
                        <button className="text-blue-600 text-sm font-bold hover:underline">Lihat Semua</button>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="p-4 font-semibold text-gray-600 text-sm uppercase">ID</th>
                                <th className="p-4 font-semibold text-gray-600 text-sm uppercase">Siswa</th>
                                <th className="p-4 font-semibold text-gray-600 text-sm uppercase">Email</th>
                                <th className="p-4 font-semibold text-gray-600 text-sm uppercase">Skor</th>
                                <th className="p-4 font-semibold text-gray-600 text-sm uppercase">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-gray-50 hover:bg-blue-50 transition duration-150">
                                    <td className="p-4 text-gray-500">#{user.id}</td>
                                    <td className="p-4 font-medium text-gray-900">{user.name}</td>
                                    <td className="p-4 text-gray-500">{user.email}</td>
                                    <td className="p-4 font-bold text-gray-700">{user.score}</td>
                                    <td className="p-4">
                                        {user.score >= 70 ? (
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1">
                                                ● LULUS
                                            </span>
                                        ) : (
                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1">
                                                ● TIDAK LULUS
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}