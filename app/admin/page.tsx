export default function AdminPage() {
    // DATA DUMMY: Bayangkan ini diambil dari Database
    const users = [
        { id: 1, name: "Budi Santoso", email: "budi@corp.com", score: 80 },
        { id: 2, name: "Siti Aminah", email: "siti@corp.com", score: 40 }, // Tidak Lulus
        { id: 3, name: "Andi Wijaya", email: "andi@corp.com", score: 95 },
        { id: 4, name: "Dewi Lestari", email: "dewi@corp.com", score: 60 }, // Pas-pasan
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Monitoring</h1>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                    <table className="w-full text-left border-collapse">
                        {/* Table Header */}
                        <thead className="bg-gray-100 border-b border-gray-200">
                            <tr>
                                <th className="p-4 font-semibold text-gray-600">ID</th>
                                <th className="p-4 font-semibold text-gray-600">Nama Karyawan</th>
                                <th className="p-4 font-semibold text-gray-600">Email</th>
                                <th className="p-4 font-semibold text-gray-600">Skor Akhir</th>
                                <th className="p-4 font-semibold text-gray-600">Status</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">
                                    <td className="p-4 text-gray-500">#{user.id}</td>
                                    <td className="p-4 font-medium text-gray-900">{user.name}</td>
                                    <td className="p-4 text-gray-500">{user.email}</td>
                                    <td className="p-4 font-bold text-gray-700">{user.score}</td>
                                    <td className="p-4">

                                        {/* --- TANTANGAN LOGIC VISUAL --- */}
                                        {/* Aturan: 
                            - Jika skor >= 70: Tampilkan badge Hijau "LULUS"
                        - Jika skor < 70: Tampilkan badge Merah "GAGAL" 
                    */}

                                        {user.score >= 70 ? (
                                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                                                LULUS
                                            </span>
                                        ) : (
                                            <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                                                TIDAK LULUS
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