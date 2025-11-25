import { ProjectType } from "@/constants/projectData";
import Image from "next/image";

export default function ProjectDetailContent({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <div className="flex flex-col gap-y-8 text-stone-800 font-sans">
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 text-stone-900">
          {project.title}
        </h2>
        <p className="text-lg text-stone-600 leading-relaxed font-medium">
          {project.summary}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 p-6 bg-stone-50 rounded-2xl border border-stone-100 text-sm">
        <InfoItem label="기간" value={project.period} />
        {project.team && <InfoItem label="참여 인원" value={project.team} />}

        <div className="md:col-span-2">
          <span className="font-bold text-stone-500 block mb-1.5">
            기술 스택
          </span>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-green-100/40 text-green-900 font-semibold rounded-md text-xs border border-green-200/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="md:col-span-2 mt-1">
            <span className="font-bold text-stone-500 block mb-1.5">
              관련 링크
            </span>
            <div className="flex gap-x-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-700 hover:text-green-800 font-bold flex items-center gap-1 underline underline-offset-4 decoration-stone-300 hover:decoration-green-600 transition-all"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <hr className="border-stone-100" />

      <div className="space-y-10">
        {project.detailedContent.map((section, index) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-4 text-stone-900 flex items-center gap-x-2">
              {!section.title.match(/[\p{Emoji}]/gu) && (
                <span className="w-1.5 h-6 bg-green-700/80 rounded-full inline-block"></span>
              )}
              {section.title}
            </h3>
            <ul className="space-y-3 ml-1">
              {section.content.map((line, i) => (
                <li
                  key={i}
                  className="leading-relaxed text-stone-700 relative pl-5 text-[15px] md:text-base"
                >
                  <span className="absolute left-0 top-[0.6rem] w-1.5 h-1.5 bg-stone-300 rounded-full"></span>
                  {line.split("**").map((part, idx) =>
                    idx % 2 === 1 ? (
                      <strong
                        key={idx}
                        className="text-stone-900 font-bold bg-stone-100 px-1 rounded-sm"
                      >
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mt-4 space-y-8">
          <h3 className="text-xl font-bold text-stone-900 flex items-center gap-x-2">
            <span className="w-1.5 h-6 bg-green-700/80 rounded-full inline-block"></span>
            스크린샷
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {project.images.map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-full rounded-xl overflow-hidden border border-stone-100"
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-bold text-stone-500 block mb-1">{label}</span>
      <span className="font-medium text-stone-900">{value}</span>
    </div>
  );
}
