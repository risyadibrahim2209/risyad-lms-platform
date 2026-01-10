"use client";

export default function CertificatePage() {

    // --- TANTANGAN LOGIC ---
    const handlePrint = () => {
        // Tugas: Panggil perintah bawaan browser untuk mencetak halaman.
        // Clue: Object 'window' punya method bernama 'print'.
        window.print();
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">

            {/* Tombol Back & Print (Akan disembunyikan saat diprint) */}
            <div className="mb-8 flex gap-4 print:hidden">
                <button
                    onClick={handlePrint}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:bg-blue-700 flex items-center gap-2"
                >
                    🖨️ Download PDF / Print
                </button>
            </div>

            {/* KERTAS SERTIFIKAT */}
            {/* Kita pakai border ganda agar terlihat klasik */}
            <div className="bg-white w-full max-w-4xl p-2 shadow-2xl text-center border-8 border-double border-gray-800 relative">
                <div className="border-4 border-gray-200 p-12 h-full flex flex-col items-center justify-center py-20">

                    {/* Header */}
                    <div className="mb-2">
                        <span className="text-gray-500 uppercase tracking-[0.3em] font-semibold">Certificate of Completion</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-serif text-gray-900 font-bold mb-4 italic">
                        Sertifikat Kompetensi
                    </h1>

                    <p className="text-gray-600 text-lg mt-4">
                        Diberikan dengan bangga kepada:
                    </p>

                    {/* Nama Peserta */}
                    <h2 className="text-4xl font-bold text-blue-800 mt-6 mb-2 underline decoration-gray-300 underline-offset-8">
                        User CorpLMS
                    </h2>

                    <p className="text-gray-600 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">
                        Telah berhasil menyelesaikan program pelatihan dan lulus ujian kompetensi dasar
                        pada platform <strong>CorpLMS Enterprise</strong>.
                    </p>

                    {/* Footer / Tanda Tangan */}
                    <div className="mt-16 grid grid-cols-2 w-full max-w-2xl gap-20">
                        <div className="text-center">
                            <div className="h-20 border-b-2 border-gray-400 flex items-end justify-center pb-2">
                                <span className="font-serif italic text-2xl text-gray-800">Gemini AI</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 font-bold uppercase">Head of AI Training</p>
                        </div>

                        <div className="text-center">
                            <div className="h-20 border-b-2 border-gray-400 flex items-end justify-center pb-2">
                                <span className="font-serif italic text-2xl text-gray-800">Next.js Expert</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500 font-bold uppercase">Lead Instructor</p>
                        </div>
                    </div>

                    {/* Badge / Stempel */}
                    <div className="mt-12 text-gray-300">
                        ★ CorpLMS Official Certification ★
                    </div>

                </div>
            </div>
        </div>
    );
}