export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800 relative inline-block tracking-tight">
      {title}
      <span className="absolute -bottom-2 left-0 w-full h-3 bg-emerald-200/40 -skew-x-6 rounded-sm -z-10"></span>
    </h2>
  );
}
