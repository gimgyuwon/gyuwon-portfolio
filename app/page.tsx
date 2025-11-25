import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-linear-to-b from-white to-lime-600/15">
      {/* header */}
      <div className="fixed top-0 w-full grid grid-cols-5 py-5 text-center justify-center items-center border-b-1 border-lime-600/30">
        <a href="#introduction">Introduction</a>
        <a href="#tool">Tool</a>
        <a href="#career">Career</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
      </div>

      <main className="flex flex-col min-h-screen w-full max-w-7xl gap-y-20">
        {/* Introduction */}
        <section
          id="introduction"
          className="flex flex-col gap-y-8 text-center justify-center items-center h-[95vh]"
        >
          <h1 className="font-bold text-6xl leading-20">
            <div>안녕하세요,</div>
            <div>소프트웨어 개발자</div>
            <span className="text-lime-600">김규원</span>입니다.
          </h1>

          <div className="text-zinc-500 text-lg">
            일상 속에서 사람들이 겪는 작은 불편함을 발견하고, <br />
            그것을 해결하며 세상을 조금씩 나아지게 만드는 것을 즐깁니다.
          </div>

          <a
            className="flex flex-row gap-x-1 items-center justify-center px-7 py-3 w-fit bg-lime-600 rounded-lg text-white"
            href="https://5wfk7fftkfmlcjl5.public.blob.vercel-storage.com/%EA%B9%80%EA%B7%9C%EC%9B%90_%EC%9D%B4%EB%A0%A5%EC%84%9C.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            이력서 다운로드
            <Image src="/download.svg" width={18} height={18} alt="download" />
          </a>
        </section>

        {/* tool */}
        <section
          id="tool"
          className="flex flex-col gap-y-5 text-center items-center"
        >
          <div className="bg-zinc-100 text-zinc-950 p-5 rounded-lg">dfdf</div>
        </section>
      </main>
    </div>
  );
}
