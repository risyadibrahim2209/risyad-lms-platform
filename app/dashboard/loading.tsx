import SkeletonCard from "@/components/SkeletonCard";

export default function DashboardLoading() {
    return (
        <main className="p-10 max-w-7xl mx-auto">
            {/* Header Skeleton */}
            <div className="flex justify-between items-center mb-8 animate-pulse">
                <div className="space-y-3">
                    <div className="h-8 bg-gray-300 rounded w-64"></div>
                    <div className="h-4 bg-gray-300 rounded w-40"></div>
                </div>
                <div className="h-10 bg-gray-300 rounded w-64"></div>
            </div>

            {/* Grid Skeleton Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Kita tampilkan 8 skeleton biar terlihat penuh */}
                {[...Array(8)].map((_, i) => (
                    <SkeletonCard key={i} />
                ))}
            </div>
        </main>
    );
}