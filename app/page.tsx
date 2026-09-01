"use client";

import { useState } from "react";
import Image from "next/image";
import { PROJECT_DATA, ProjectType } from "@/constants/projectData";

import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import ContactCard from "@/components/ui/ContactCard";
import Modal from "@/components/ui/Modal";
import ProjectDetailContent from "@/components/project/ProjectDetailContent";

function LanguageIcon({ language }: { language: string }) {
  const assetMap: Record<string, string> = {
    JS: "/tool/js.png",
    TS: "/tool/ts.svg",
    Java: "/tool/java.png",
    Python: "/tool/python.png",
    Solidity: "/tool/solidity.png",
  };

  const src = assetMap[language] || "/tool/js.png";

  return (
    <div className="relative h-6 w-6">
      <Image
        src={src}
        alt={`${language} icon`}
        fill
        className="object-contain"
      />
    </div>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const LANGUAGE_LIST = [
    { name: "Java" },
    { name: "Python" },
    { name: "Solidity" },
    { name: "JS" },
    { name: "TS" },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center font-sans bg-stone-50 text-stone-800 selection:bg-green-100 selection:text-green-900">
      <header className="fixed top-0 z-[999] w-full bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex justify-center items-center py-4">
          <div className="flex gap-x-8 text-[15px] font-medium text-stone-500">
            {[
              "Introduction",
              "Language",
              "Career",
              "Project",
              "Contact",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-green-800 hover:font-bold transition-all px-2 py-1"
              >
                {item}
              </a>
            ))}
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
            href="https://5wfk7fftkfmlcjl5.public.blob.vercel-storage.com/%EA%B9%80%EA%B7%9C%EC%9B%90_%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4_260901"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>포트폴리오 다운로드</span>
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

        {/* Language Section */}
        <section
          id="language"
          className="scroll-mt-32 flex flex-col gap-y-12 items-center"
        >
          <SectionTitle title="Language" />

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
              {LANGUAGE_LIST.slice(0, 3).map((language) => (
                <div
                  key={language.name}
                  className="group flex items-center gap-2 justify-center min-w-[108px] px-3 py-2 rounded-xl border border-stone-200 bg-white text-sm font-semibold text-stone-700 transition-all duration-200 hover:border-green-200 hover:bg-green-50/50 hover:text-green-800"
                >
                  <LanguageIcon language={language.name} />
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
              {LANGUAGE_LIST.slice(3).map((language) => (
                <div
                  key={language.name}
                  className="group flex items-center gap-2 justify-center min-w-[108px] px-3 py-2 rounded-xl border border-stone-200 bg-white text-sm font-semibold text-stone-700 transition-all duration-200 hover:border-green-200 hover:bg-green-50/50 hover:text-green-800"
                >
                  <LanguageIcon language={language.name} />
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
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
                    PwC Consulting
                  </h3>
                  <p className="text-green-800 font-bold text-lg mt-1">
                    Research Assistant
                  </p>
                </div>
                <span className="text-sm text-stone-500 font-medium mt-2 md:mt-0 bg-stone-100 px-3 py-1 rounded-full">
                  2026.04 ~ 2026.06
                </span>
              </div>
              <p className="text-stone-500 mb-6 font-medium border-b border-stone-100 pb-4">
                서울 · 금융기관 B2B 마케팅 자동화 프로젝트 RA
              </p>
              <ul className="list-disc list-outside ml-4 space-y-3 text-stone-700 leading-relaxed">
                <li>
                  <strong className="text-stone-900 font-semibold">
                    마케팅 데이터 분석 및 SQL 작성:
                  </strong>{" "}
                  B2B 마케팅 자동화 타겟팅을 위한 데이터 분석 및 대용량 금융 고객 처리
                  ANSI SQL 작성
                </li>
                <li>
                  <strong className="text-stone-900 font-semibold">
                    마트 구축을 위한 ETL 로직 설계:
                  </strong>{" "}
                  CRM 데이터 마트 목적에 맞춘 윈도우 함수 기반 추출·변환 가공 로직 설계
                  및 파이프라인 최적화 지원
                </li>
                <li>
                  <strong className="text-stone-900 font-semibold">
                    쿼리 무결성 및 정합성 검증:
                  </strong>{" "}
                  추출 쿼리 무결성 검증 및 원천-마트 적재 데이터 간 정합성 비교 분석을
                  통한 정확도 확보
                </li>
              </ul>
            </Card>

            <Card>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    한영회계법인
                  </h3>
                  <p className="text-green-800 font-bold text-lg mt-1">
                    Data Analytics Engineer Intern
                  </p>
                </div>
                <span className="text-sm text-stone-500 font-medium mt-2 md:mt-0 bg-stone-100 px-3 py-1 rounded-full">
                  2026.01 ~ 2026.03
                </span>
              </div>
              <p className="text-stone-500 mb-6 font-medium border-b border-stone-100 pb-4">
                서울 · 회계법인 데이터 분석 및 감사 자동화 지원 팀
              </p>
              <ul className="list-disc list-outside ml-4 space-y-3 text-stone-700 leading-relaxed">
                <li>
                  <strong className="text-stone-900 font-semibold">
                    대용량 재무 데이터 구조화:
                  </strong>{" "}
                  50만 건 이상의 대규모 재무 데이터를 감사 목적에 맞게 구조화하고
                  효율적인 감사 절차 지원
                </li>
                <li>
                  <strong className="text-stone-900 font-semibold">
                    이상치 분석 및 데이터 정제:
                  </strong>{" "}
                  MS SQL을 활용해 주말·심야 입력, 승인자 불일치 등 비경상 패턴 추출 및
                  데이터 정제·가공
                </li>
                <li>
                  <strong className="text-stone-900 font-semibold">
                    공시 데이터 표준화 및 검증:
                  </strong>{" "}
                  Excel 기반 재무 정보 검증 및 정확한 태깅 작업을 통한 공시 데이터
                  표준화 지원
                </li>
              </ul>
            </Card>

            <Card>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    NGL Transportation
                  </h3>
                  <p className="text-green-800 font-bold text-lg mt-1">
                    Software Engineer Intern
                  </p>
                </div>
                <span className="text-sm text-stone-500 font-medium mt-2 md:mt-0 bg-stone-100 px-3 py-1 rounded-full">
                  2024.06 ~ 2025.08
                </span>
              </div>
              <p className="text-stone-500 mb-6 font-medium border-b border-stone-100 pb-4">
                US, AZ · 물류 회사 시스템개발/IT 팀
              </p>
              <ul className="list-disc list-outside ml-4 space-y-3 text-stone-700 leading-relaxed">
                <li>
                  <strong className="text-stone-900 font-semibold">
                    물류 · 야드 관리 시스템 개발:
                  </strong>{" "}
                  AG-Grid 기반 Excel Export, EDI 페이지 및 문서 드래그 & 드롭 업로드 기능
                  구현 등 프론트엔드 개발
                </li>
                <li>
                  <strong className="text-stone-900 font-semibold">
                    화물 기사용 앱 데이터 분석:
                  </strong>{" "}
                  PostgreSQL을 활용한 다각도 데이터 추출 및 인사이트 도출을 통해 4주간
                  활성 사용률 15.14% → 84.62% 향상
                </li>
                <li>
                  <strong className="text-stone-900 font-semibold">
                    회사 사이트 리팩토링:
                  </strong>{" "}
                  기존 HTML 코드 리팩토링, Contact 페이지 Email JS 도입 및 반응형 웹
                  디자인 구현
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
