export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-extrabold text-stone-800 relative inline-block tracking-tight">
      {title}
      <span className="absolute -bottom-2 left-0 w-full h-3 bg-green-800/10 -skew-x-6 rounded-sm -z-10"></span>
    </h2>
  );
}
