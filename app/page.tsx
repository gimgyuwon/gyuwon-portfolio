import Image from "next/image";
import { TOOL_LIST } from "@/constants/toolList";

import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";
import ContactCard from "@/components/ui/ContactCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center font-sans bg-zinc-50/50 text-zinc-800 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="fixed top-0 z-[999] w-full bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
        <nav className="max-w-7xl mx-auto flex justify-center items-center py-4">
          <div className="flex gap-x-8 text-[15px] font-medium text-zinc-500">
            {["Introduction", "Tool", "Career", "Project", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-emerald-700 hover:font-bold transition-all px-2 py-1"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </nav>
      </header>

      <main className="flex flex-col w-full max-w-4xl px-6 gap-y-40 pb-32 pt-32">
        {/* Introduction Section */}
        <section
          id="introduction"
          className="flex flex-col justify-center items-center min-h-[75vh] text-center gap-y-10 animate-fade-in-up"
        >
          <div className="space-y-6">
            <h1 className="font-extrabold text-5xl md:text-7xl leading-[1.1] tracking-tighter text-zinc-900">
              <div className="text-zinc-800">안녕하세요,</div>
              <div>소프트웨어 개발자</div>
              <span className="text-emerald-700 inline-block mt-2">김규원</span>
              <span className="text-zinc-800">입니다.</span>
            </h1>

            <p className="text-zinc-500 text-lg md:text-[20px] leading-relaxed max-w-2xl mx-auto tracking-tight font-medium">
              일상 속의 작은 불편함을 발견하고,
              <br />
              기술로 해결하며 세상을 조금씩 나아지게 만드는 것을 즐깁니다.
            </p>
          </div>

          <a
            className="group flex flex-row gap-x-2 items-center justify-center px-8 py-4 bg-zinc-800 hover:bg-emerald-700 rounded-full text-white text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1"
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
        <section id="tool" className="flex flex-col gap-y-12 items-center">
          <SectionTitle title="Skills & Tools" />

          <div className="flex flex-wrap justify-center gap-5 max-w-3xl">
            {TOOL_LIST.map((tool) => (
              <div
                key={tool.label}
                className="relative group flex flex-col items-center justify-center w-[85px] h-[85px] p-5 bg-white rounded-2xl shadow-sm border border-zinc-100 hover:border-emerald-500 hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={tool.src}
                    alt={tool.label}
                    fill
                    className="object-contain"
                  />
                </div>

                <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap z-10 tracking-tight">
                  {tool.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Career Section */}
        <section id="career" className="flex flex-col gap-y-12">
          <SectionTitle title="Work Experience" />

          <div className="flex flex-col gap-y-6">
            <Card>
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 tracking-tight">
                    NGL Transportation
                  </h3>
                  <p className="text-emerald-700 font-bold text-lg mt-1">
                    Software Engineer
                  </p>
                </div>
                <span className="text-sm text-zinc-500 font-medium mt-2 md:mt-0 bg-zinc-100 px-3 py-1 rounded-full">
                  2024.08 ~ 2025.08
                </span>
              </div>
              <p className="text-zinc-500 mb-6 font-medium border-b border-zinc-100 pb-4">
                IT 팀
              </p>
              <ul className="list-disc list-outside ml-4 space-y-3 text-zinc-700 leading-relaxed">
                <li>
                  <strong className="text-zinc-900 font-semibold">
                    TMS & YMS 개발:
                  </strong>{" "}
                  운송 관리 시스템(TMS) 및 야드 관리 시스템(YMS) 핵심 로직 개발
                  및 유지보수
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">
                    공식 웹사이트 운영:
                  </strong>{" "}
                  기업 홈페이지(ngltrans.com) 리뉴얼 개발 및 SEO 최적화
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">
                    데이터 분석 파이프라인:
                  </strong>{" "}
                  Driver App 사용자 로그 데이터 수집 및 시각화 대시보드 구축
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Project Section */}
        <section id="project" className="flex flex-col gap-y-12">
          <SectionTitle title="Projects" />

          <div className="grid grid-cols-1 gap-8">
            {/* Project 1 */}
            <Card>
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                  AG Grid 기반 물류/야드 관리 시스템
                </h3>
                <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
                  2024.08 ~ 2025.08
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-700 leading-relaxed">
                <li>
                  <strong className="text-zinc-900 font-semibold">
                    Excel Export 구현:
                  </strong>{" "}
                  AG-Grid 엔터프라이즈 기능을 활용하여 대용량 운송 데이터 엑셀
                  변환 기능 최적화
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">
                    EDI 문서 시스템:
                  </strong>{" "}
                  Drag & Drop 방식의 UI와 PDF 프리뷰어를 통합하여 업무 처리 속도
                  30% 개선
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">
                    모바일 반응형:
                  </strong>{" "}
                  현장 작업자(야드 매니저)를 위한 모바일 최적화 인터페이스 구축
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">
                    실시간 챗봇:
                  </strong>{" "}
                  Socket.io를 활용한 실시간 응답형 내부 챗봇 시스템 구현
                </li>
              </ul>
            </Card>

            {/* Project 2 */}
            <Card>
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                  회사 웹사이트 리뉴얼
                </h3>
                <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
                  2024.08 ~ 2025.08
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 space-y-2 text-zinc-700 leading-relaxed">
                <li>
                  레거시 HTML/CSS 코드를 모던 React 구조로 리팩토링하여
                  유지보수성 향상
                </li>
                <li>
                  <strong className="text-zinc-900 font-semibold">
                    Serverless Contact:
                  </strong>{" "}
                  EmailJS를 도입하여 별도 백엔드 구축 없이 이메일 전송 기능 구현
                </li>
                <li>
                  재사용 가능한 공통 UI 컴포넌트(Button, Input, Modal)
                  라이브러리 구축
                </li>
              </ul>
            </Card>

            {/* Project 3 */}
            <Card>
              <div className="flex justify-between items-start mb-5">
                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 tracking-tight">
                  dayjs-time-window
                </h3>
                <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-md">
                  2025.11
                </span>
              </div>
              <p className="text-zinc-600 mb-5 text-sm font-medium">
                시간 범위 계산 및 검증을 위한 NPM 유틸리티 패키지
              </p>
              <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-100">
                <ul className="space-y-3 text-sm text-zinc-700">
                  <li className="flex gap-x-3 items-center">
                    <span className="font-bold text-emerald-700 bg-emerald-100/50 px-2 py-1 rounded text-xs min-w-fit">
                      parseToday
                    </span>
                    <span className="text-zinc-600">
                      HH:mm:ss 포맷의 문자열을 오늘의 Dayjs 객체로 파싱
                    </span>
                  </li>
                  <li className="flex gap-x-3 items-center">
                    <span className="font-bold text-emerald-700 bg-emerald-100/50 px-2 py-1 rounded text-xs min-w-fit">
                      buildWindow
                    </span>
                    <span className="text-zinc-600">
                      오늘 날짜 기준의 시작(Start) / 종료(End) 시간 포인트 생성
                    </span>
                  </li>
                  <li className="flex gap-x-3 items-center">
                    <span className="font-bold text-emerald-700 bg-emerald-100/50 px-2 py-1 rounded text-xs min-w-fit">
                      inWindow
                    </span>
                    <span className="text-zinc-600">
                      특정 시간이 설정된 윈도우 범위 내에 존재하는지 검증
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col gap-y-12 pb-24 items-center"
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
    </div>
  );
}
