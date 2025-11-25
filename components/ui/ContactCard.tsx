export default function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex flex-col items-center justify-center w-full md:w-72 p-8 bg-white border border-zinc-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50/20 transition-all duration-300 cursor-pointer group shadow-sm"
    >
      <span className="text-zinc-400 text-sm font-bold mb-2 group-hover:text-emerald-600 uppercase tracking-wider transition-colors">
        {label}
      </span>
      <span className="text-zinc-800 font-bold text-lg group-hover:text-zinc-900">
        {value}
      </span>
    </a>
  );
}
