export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-white p-8 md:p-10 rounded-3xl border border-zinc-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.08)] hover:border-emerald-200 transition-all duration-300">
      {children}
    </div>
  );
}
