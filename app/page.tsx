"use client";

import { useState } from "react";
import Image from "next/image";
import { TOOL_LIST } from "@/constants/toolList";
import { PROJECT_DATA, ProjectType } from "@/constants/projectData";

import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import ContactCard from "@/components/ui/ContactCard";
import Modal from "@/components/ui/Modal";
import ProjectDetailContent from "@/components/project/ProjectDetailContent";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  return (
    <div className="flex flex-col min-h-screen items-center font-sans bg-stone-50 text-stone-800 selection:bg-green-100 selection:text-green-900">
      <header className="fixed top-0 z-[999] w-full bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex justify-center items-center py-4">
          <div className="flex gap-x-8 text-[15px] font-medium text-stone-500">
            {["Introduction", "Tool", "Career", "Project", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-green-800 hover:font-bold transition-all px-2 py-1"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </nav>
      </header>

      <main className="flex flex-col w-full max-w-4xl px-6 gap-y-40 pb-32 pt-32">
        {/* Introduction */}
        <section
          id="introduction"
          className="scroll-mt-32 flex flex-col justify-center items-center min-h-[75vh] text-center gap-y-10 animate-fade-in-up"
        >
          <div className="space-y-6">
            <h1 className="font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tighter text-stone-900">
              <div className="text-stone-800">안녕하세요,</div>
              <div>소프트웨어 개발자</div>
              <span className="text-green-800 inline-block mt-2">김규원</span>
              <span className="text-stone-800">입니다.</span>
            </h1>

            <p className="text-stone-500 text-lg md:text-[20px] leading-relaxed max-w-2xl mx-auto tracking-tight font-medium">
              일상 속의 작은 불편함을 발견하고,
              <br className="hidden md:block" />
              기술로 해결하며 세상을 조금씩 나아지게 만드는 것을 즐깁니다.
            </p>
          </div>

          <a
            className="group flex flex-row gap-x-2 items-center justify-center px-8 py-4 bg-stone-900 hover:bg-green-800 rounded-full text-white text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-green-900/20 hover:-translate-y-1"
            href="https://5wfk7fftkfmlcjl5.public.blob.vercel-storage.com/%EA%B9%80%EA%B7%9C%EC%9B%90_%EC%9D%B4%EB%A0%A5%EC%84%9C.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>이력서 다운로드</span>
            <span className="transition-transform duration-300">
              <Image
                src="/download.svg"
                width={20}
                height={20}
                alt="download"
              />
            </span>
          </a>
        </section>

        {/* Tool Section */}
        <section
          id="tool"
          className="scroll-mt-32 flex flex-col gap-y-12 items-center"
        >
          <SectionTitle title="Skills & Tools" />

          <div className="flex flex-wrap justify-center gap-5 max-w-3xl">
            {TOOL_LIST.map((tool) => (
              <div
                key={tool.label}
                className="relative group flex flex-col items-center justify-center w-[85px] h-[85px] p-5 bg-white rounded-2xl shadow-sm border border-stone-100 hover:border-green-600 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={tool.src}
                    alt={tool.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap z-10 tracking-tight">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="scroll-mt-32 flex flex-col gap-y-12">
          <SectionTitle title="Work Experience" />

          <div className="flex flex-col gap-y-6">
            <Card>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    NGL Transportation
                  </h3>
                  <p className="text-green-800 font-bold text-lg mt-1">
                    Software Engineer
                  </p>
                </div>
                <span className="text-sm text-stone-500 font-medium mt-2 md:mt-0 bg-stone-100 px-3 py-1 rounded-full">
                  2024.08 ~ 2025.08
                </span>
              </div>
              <p className="text-stone-500 mb-6 font-medium border-b border-stone-100 pb-4">
                US, AZ · 물류 회사 시스템개발/IT 팀
              </p>
              <ul className="list-disc list-outside ml-4 space-y-3 text-stone-700 leading-relaxed">
                <li>
                  <strong className="text-stone-900 font-semibold">
                    TMS & YMS 개발:
                  </strong>{" "}
                  운송 관리 시스템(TMS) 및 야드 관리 시스템(YMS) 핵심 로직 개발
                  및 유지보수
                </li>
                <li>
                  <strong className="text-stone-900 font-semibold">
                    공식 웹사이트 운영:
                  </strong>{" "}
                  기업 홈페이지(ngltrans.com) 리뉴얼 개발 및 메타 데이터 최적화
                </li>
                <li>
                  <strong className="text-stone-900 font-semibold">
                    DRIVER APP 데이터 분석:
                  </strong>{" "}
                  Driver App 사용자 로그 데이터 수집 및 전처리
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Project Section */}
        <section id="project" className="scroll-mt-32 flex flex-col gap-y-12">
          <SectionTitle title="Projects" />

          <div className="grid grid-cols-1 gap-8">
            {PROJECT_DATA.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer group outline-none"
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && setSelectedProject(project)
                }
              >
                <Card>
                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-stone-900 tracking-tight group-hover:text-green-800 transition-colors">
                        {project.title}
                      </h3>
                      {project.subTitle && (
                        <p className="text-green-700 font-bold text-sm mt-1">
                          {project.subTitle}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-md min-w-fit">
                      {project.period}
                    </span>
                  </div>

                  <p className="text-stone-600 text-sm md:text-[15px] mb-5 mt-2 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-semibold text-stone-600 bg-stone-100 px-2 py-1 rounded border border-stone-200 group-hover:border-green-200 group-hover:bg-green-50/50 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center text-xs font-bold text-green-700 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    상세 내용 보기 <span className="ml-1">→</span>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-mt-32 flex flex-col gap-y-12 pb-24 items-center"
        >
          <SectionTitle title="Contact Me" />
          <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
            <ContactCard
              label="Email"
              value="gimgyuwon2@gmail.com"
              href="mailto:gimgyuwon2@gmail.com"
            />
            <ContactCard
              label="GitHub"
              value="@gimgyuwon"
              href="https://github.com/gimgyuwon"
            />
          </div>
        </section>
      </main>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && <ProjectDetailContent project={selectedProject} />}
      </Modal>
    </div>
  );
}
