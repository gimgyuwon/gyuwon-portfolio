export interface ProjectDetailSection {
  title: string;
  content: string[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectType {
  id: string;
  title: string;
  subTitle?: string;
  period: string;
  techStack: string[];
  summary: string;
  team?: string;
  links?: ProjectLink[];
  detailedContent: ProjectDetailSection[];
  images?: string[];
}

export const PROJECT_DATA: ProjectType[] = [
  {
    id: "dayjs-package",
    title: "dayjs-time-window",
    subTitle: "K-PAAS 공모전 | 마감세일 샐러드 랜덤 판매 플랫폼",
    summary: "시간 범위 계산 및 검증을 위한 NPM 유틸리티 패키지",
    period: "2025.11",
    techStack: ["NPM", "Typescript", "Day.js"],
    team: "1명 (개인)",
    detailedContent: [
      {
        title: "제공 기능",
        content: [
          "**parseToday**: HH:mm:ss 포맷 문자열을 당일 Dayjs 객체로 변환",
          "**buildWindow**: 시작/종료 시간 포인트 생성 유틸리티",
          "**inWindow**: 특정 시간이 범위 내에 있는지 검증하는 로직",
        ],
      },
    ],
    links: [
      {
        label: "Deploy",
        url: "https://www.npmjs.com/package/dayjs-time-window",
      },
      {
        label: "Github",
        url: "https://github.com/gimgyuwon/dayjs-time-window",
      },
    ],
  },
  {
    id: "cheap-bob",
    title: "저렴한끼 (Cheap-Bob)",
    subTitle: "K-PAAS 공모전 | 마감세일 샐러드 랜덤 판매 플랫폼",
    summary:
      "재고를 활용해 소비자에게 저렴한 건강식을 제공하는 랜덤 판매 플랫폼",
    period: "2025.07 ~ 2025.10",
    techStack: ["React", "TypeScript", "WebSocket", "PortOne", "Naver Map"],
    team: "4명(기획•디자인 2명, FE 1명, BE 1명)",
    links: [
      { label: "Deploy(서비스 종료)", url: "https://www.cheap-bob.store" },
      { label: "Github", url: "https://github.com/2025-K-PaaS-Team/cheap-bob" },
    ],
    detailedContent: [
      {
        title: "⚙️ 주요 기능",
        content: [
          "**고객 모드**: 매장 검색, 랜덤팩 구매, 결제, 픽업 QR 인증",
          "**판매자 모드**: 가게 등록, 영업시간 설정, 주문 관리, 정산 조회",
          "**OAuth 로그인**: Naver / Google / Kakao 로그인 후 JWT 발급",
          "**결제 연동**: PortOne 기반 카드 결제 및 취소 처리",
          "**실시간 주문**: 예약 → 수락 → 완료/취소 상태 WebSocket 실시간 반영",
          "**자동화 UI**: 스케줄러에 따라 상태 변경 시 UI 자동 업데이트",
        ],
      },
      {
        title: "🛠️ 기술적 챌린지 및 해결",
        content: [
          "**ToastContext**: 전역 알림 상태 관리로 사용자 경험 개선",
          "**Axios Interceptor**: JWT 액세스 토큰 자동 첨부 및 만료 시 로그아웃 처리",
          "**WebSocket**: 네트워크 불안정 시 재연결 로직 구현",
        ],
      },
    ],
    images: [
      "/cheap-bob/rep.png",
      "/cheap-bob/customer-view.png",
      "/cheap-bob/seller-view.png",
      "/cheap-bob/skill.png",
      "/cheap-bob/arch.png",
      "/cheap-bob/cicd.png",
      "/cheap-bob/payment-request.png",
      "/cheap-bob/payment-fail.png",
      "/cheap-bob/payment-pickup.png",
    ],
  },
  {
    id: "me-vs-me",
    title: "남이 보는 나 (Me vs Me)",
    subTitle: "개인 프로젝트 | 투표를 통한 성격 테스트 플랫폼",
    summary:
      "친구들이 직접 투표하여 ‘타인이 보는 나의 이미지’를 확인할 수 있는 플랫폼",
    period: "2025.08",
    techStack: ["React", "TypeScript", "Django", "Vercel"],
    team: "1명 (개인)",
    links: [
      { label: "Deploy", url: "https://me-vs-me.vercel.app" },
      { label: "Github", url: "https://github.com/gimgyuwon/me-vs-me" },
    ],
    detailedContent: [
      {
        title: "주요 기능",
        content: [
          "**애니메이션 컴포넌트**: styled-components keyframes 활용 Wobble 버튼 구현",
          "**고유 링크 생성**: nanoid를 이용해 사용자별 투표/결과 링크 자동 생성",
          "**사용자 피드백**: 56명의 초기 사용자 피드백을 반영하여 UI/UX 개선",
        ],
      },
    ],
    images: ["/me-vs/rep.png"],
  },
  {
    id: "voter",
    title: "투표하자 (Voter)",
    subTitle: "2025 대선 대비 유권자 지원 플랫폼",
    summary:
      "25개 정책 응답을 바탕으로 정치 성향과 후보 매칭을 제공하는 플랫폼",
    period: "2025.05",
    techStack: ["React", "Django", "Kakao OAuth", "Zustand"],
    team: "1명 (개인)",
    links: [
      { label: "Deploy", url: "https://www.voter.kr/" },
      { label: "Github", url: "https://github.com/gimgyuwon/voter" },
    ],
    detailedContent: [
      {
        title: "주요 기능",
        content: [
          "**후보 매칭**: 정책 벡터와 사용자 응답 간 코사인 유사도 계산 알고리즘 적용",
          "**시각화**: html2canvas 활용 이미지 저장 및 공유 기능",
          "**테마 시스템**: Zustand 전역 상태 관리를 통한 테마 변경 기능",
        ],
      },
    ],
    images: ["/voter/rep1.png", "/voter/rep2.png"],
  },
  {
    id: "ag-grid-system",
    title: "AG Grid 기반 물류/야드 관리 시스템",
    summary: "대용량 운송 데이터를 효율적으로 관리하기 위한 어드민 시스템",
    period: "2024.08 ~ 2025.08",
    techStack: ["React", "AG Grid"],
    detailedContent: [
      {
        title: "개발 내용",
        content: [
          "**Excel Export**: AG-Grid 엔터프라이즈 기능 활용 대용량 데이터 엑셀 변환 최적화",
          "**EDI 문서 시스템**: Drag & Drop 업로드 및 PDF 프리뷰어 통합",
          "**실시간 챗봇**: 챗봇 UI 구현",
        ],
      },
    ],
  },
  {
    id: "ngl-website",
    title: "회사 웹사이트 리뉴얼",
    summary: "레거시 코드를 모던 React로 리팩토링 및 SEO 최적화",
    period: "2024.08 ~ 2025.08",
    techStack: ["React", "EmailJS", "Tailwind CSS"],
    detailedContent: [
      {
        title: "개발 내용",
        content: [
          "**리팩토링**: 유지보수가 어려운 HTML/CSS를 React 컴포넌트 단위로 재구축",
          "**Serverless Contact**: 백엔드 없이 EmailJS를 활용하여 문의 메일 전송 구현",
          "**UI 라이브러리**: 재사용 가능한 버튼, 모달, 인풋 컴포넌트 구축",
        ],
      },
    ],
    links: [
      {
        label: "Deploy",
        url: "https://ngltrans.com",
      },
    ],
  },
];
