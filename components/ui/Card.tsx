export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-4px_rgba(60,80,60,0.08)] hover:border-green-800/20 transition-all duration-300">
      {children}
    </div>
  );
}
