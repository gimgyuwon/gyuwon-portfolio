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
    id: "sme-check",
    title: "SME-Check",
    subTitle: "소상공인 흑자도산 방지 AI 솔루션",
    summary: "소상공인 현금흐름 진단 및 정책자금 최적 매칭 솔루션",
    period: "2025.11 (1개월, 개인 프로젝트)",
    techStack: [
      "Streamlit",
      "Plotly",
      "Meta Prophet",
      "Gensim",
      "KoNLPy",
      "AWS EC2",
      "Docker",
    ],
    team: "1명 (개인)",
    detailedContent: [
      {
        title: "주요 기능",
        content: [
          "**AI 기반 현금흐름 예측**: Meta Prophet을 활용한 시계열 분석으로 일일 순현금흐름 집계 및 90% 신뢰 구간 산출, 누적 합계가 '0' 미만이 되는 시점을 찾아 위험 경고",
          "**지능형 정책자금 추천 시스템**: KoNLPy(Okt)로 공고 제목에서 명사 추출 후 Gensim LDA로 비지도 학습 분류 및 Query-to-Topic Matching 구현",
          "**경영 위험도 진단 벤치마킹**: 매출채권 회전율을 공공데이터(소상공인시장진흥공단) 업계 평균과 비교하여 Plotly Gauge Chart로 4단계 가시화",
        ],
      },
    ],
    images: [
      "/sme-check/sme-check-risk-overview.png",
      "/sme-check/sme-check-chart-analysis.png",
      "/sme-check/sme-check-policy-funding.png",
      "/sme-check/sme-check-cashflow-forecast.png"
    ],
  },
  {
    id: "mug-jjang-token",
    title: "몸짱토큰",
    subTitle: "M2E 기반 헬스 커뮤니티 플랫폼",
    summary:
      "EIP-7702를 활용한 가스비 대납 시스템으로 진입 장벽을 제거한 M2E 보상 생태계 구축",
    period: "2025.06 ~ 2026.06 (1년, 팀 프로젝트)",
    techStack: ["Solidity", "OpenZeppelin"],
    detailedContent: [
      {
        title: "주요 기능",
        content: [
          "**EIP-7702 기반 'Gasless M2E' 사용자 경험 설계**: 유저가 별도의 가스비 없이 운동 보상을 수령할 수 있는 환경 구현 및 BatchCallAndSponsor 컨트랙트로 복수 트랜잭션 동시 처리",
          "**EIP-712 서명 기반 보상 시스템**: 운동 데이터 검증 후 발행되는 EIP-712 표준 바우처를 통해 위변조 불가능한 ERC-20 보상 수령 로직 개발 및 OpenZeppelin 권한 관리 적용",
        ],
      },
    ],
    images: [
      "/mztk/poster1.png",
      "/mztk/poster2.png",
    ],
  },
  {
    id: "cookie-test",
    title: "두바이쫀득쿠키 테스트",
    subTitle: "AWS Rekognition 기반 안면인식 플랫폼",
    summary:
      "AWS Rekognition 기반 안면 인식 및 성분 분석 인터랙티브 웹 서비스 개발",
    period: "2026.02 (개인 프로젝트)",
    techStack: [
      "AWS Lambda",
      "AWS Rekognition",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    team: "1명 (개인)",
    detailedContent: [
      {
        title: "주요 기능",
        content: [
          "**안면 메타데이터 기반 성분 분석**: 표정, 각도 등의 메타데이터를 피스타치오, 카다이프 등 쿠키 성분 수치로 변환하는 커스텀 알고리즘 구현",
          "**클라이언트 이미지 최적화**: 모바일 고화질 이미지 업로드 시 OOM 방지를 위해 Canvas와 URL.createObjectURL을 활용한 클라이언트 사이드 압축 및 리사이징 구현",
          "**서버리스 아키텍처**: Next.js App Router와 AWS Lambda를 연동하여 인프라 비용 절감 및 트래픽 유동성 확보",
        ],
      },
    ],
    images: [
      "/dubai/dubai-main.png",
      "/dubai/dubai-result.png",
    ],
  },
  {
    id: "cheap-bob",
    title: "저렴한끼",
    subTitle: "2025 K-PaaS 공모전 | 마감세일 샐러드 랜덤 판매 플랫폼",
    summary:
      "신선 식품 마감세일 및 소비자 부담 완화를 위한 마감세일 샐러드 랜덤판매 플랫폼",
    period: "2025.07 ~ 2025.10 (3개월, 팀 프로젝트)",
    techStack: [
      "React",
      "TypeScript",
      "WebSocket",
      "PortOne",
      "Naver Map",
      "Kakao Postcode API",
    ],
    team: "4명 (기획•디자인 2명, FE 1명, BE 1명)",
    detailedContent: [
      {
        title: "주요 기능",
        content: [
          "**데이터 인터페이스 연계 및 실시간 처리**: 웹소켓 기반 실시간 재고 변동 및 주문 상태 동기화, 동적 QR 생성 및 갱신 시스템 구축",
          "**프로세스 진단 및 구조 개선**: 일정 지연 병목 구간 분석 후 '기획 코어타임'과 '개발 코어타임' 분리 및 순환형 협업 프로세스 정착을 통한 일정 정상화",
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
      "/cheap-bob/payment-pickup.png",
      "/cheap-bob/payment-fail.png",
    ],
  },
];
