export type SkillGroup = {
  title: string;
  items: string[];
};

export type Role = {
  title: string;
  period: string;
  intro?: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  link?: { href: string; label: string };
  intro?: string;
  roles: Role[];
  bullets?: string[];
};

export type Activity = {
  title: string;
  meta: string;
  link?: { href: string; label: string };
  bullets: string[];
};

export type Education = {
  school: string;
  degree: string;
  period: string;
};

export type Award = {
  period: string;
  title: string;
};

export const profile = {
  name: '최다인',
  title: '프론트엔드 개발자',
  headline:
    '대규모 OTT에서 PC·Mobile·Smart TV 공용 레이어를 만든 4년차 프론트엔드입니다. 지금은 데이터로 문제를 찾고 가설을 빠르게 구현합니다.',
  email: 'talown@naver.com',
  github: 'https://github.com/da-in',
  githubLabel: 'github.com/da-in',
};

export const skills: SkillGroup[] = [
  {
    title: '언어 · 프레임워크',
    items: ['TypeScript', 'Svelte', 'Vue3', 'React Native'],
  },
  {
    title: '플랫폼',
    items: ['PC', 'Mobile', 'Smart TV (webOS / Tizen)', 'IVI'],
  },
  {
    title: '빌드·모노레포',
    items: ['Vite', 'pnpm workspace', 'GitLab CI'],
  },
  {
    title: '분석',
    items: ['Amplitude', 'TanStack Query'],
  },
];

export const experience: Experience[] = [
  {
    company: '콘텐츠 웨이브 (Wavve)',
    title: '프론트엔드 개발자',
    period: '2023.03 – 현재',
    link: { href: 'https://www.wavve.com/', label: 'wavve.com' },
    roles: [
      {
        title: 'Product Engineering',
        period: '2026.07 – 현재',
        bullets: [
          '데이터로 문제를 찾고, AI로 가설·기획·화면 프로토타입을 거쳐 딜리버리까지 검증하는 사이클을 만들고 있습니다.',
        ],
      },
      {
        title: '웹개발팀',
        period: '2023.06 – 2026.07',
        bullets: [
          '외주 TV 앱을 웹으로 내재화했습니다. Vue3로 시작했다가 저사양 기기 성능 한계로 접고 Svelte로 재작성해 LG·삼성 Smart TV 상용 출시까지 닫았고, 같은 웹 베이스를 IVI(차량 인포테인먼트)로 확장했습니다.',
          'PC/Mobile Webpack 레거시를 Vite로 옮기고 Node를 올려, 로컬 기동 12.1초→1.9초, 빌드 시간 86%, 번들 크기 55%를 줄였습니다.',
          '저장소가 갈라져 있던 PC/Mobile 웹을 pnpm 모노레포로 합치고 TypeScript를 도입해, 요청·정규화 로직과 CI부터 공용화했습니다.',
          'Amplitude를 PC/Mobile 공용 패키지로 도입해, 두 플랫폼이 같은 이벤트·파라미터 정의로 트래킹하게 했습니다.',
        ],
      },
      {
        title: 'Tech Internship 2기',
        period: '2023.03 – 2023.05',
        bullets: [],
      },
    ],
  },
  {
    company: '더풀네트워크',
    title: '프론트엔드 개발자',
    period: '2022.06 – 2022.09',
    roles: [],
    bullets: [
      '창업팀에서 React Native로 iOS/Android MVP를 만들어 스토어에 출시했습니다.',
    ],
  },
];

export const education: Education[] = [
  {
    school: '숭실대학교',
    degree: '소프트웨어학부 학사',
    period: '2017.03 – 2023.02',
  },
  {
    school: '광주인공지능사관학교',
    degree: '1기 수료 (960h)',
    period: '2020.11.27',
  },
];

export const activities: Activity[] = [
  {
    title: 'Vibe Coding Club',
    meta: '설립·운영 · 2025.09 – 현재',
    link: { href: 'https://vibecodingclub.kr/', label: 'vibecodingclub.kr' },
    bullets: [
      '참여자 120명 이상의 커뮤니티를 만들고, 주간 스터디와 60–70명 규모 해커톤을 포함한 정기 프로그램을 운영합니다.',
    ],
  },
  {
    title: 'TEO Sprint',
    meta: '2023.02 – 2026.07',
    link: { href: 'https://github.com/da-in/vibe-sprint', label: 'github.com/da-in/vibe-sprint' },
    bullets: [
      '짧은 기간에 문제를 정의하고 결과물을 전달하는 협업 스프린트에서, 14기는 참가자이자 프로젝트 리더로, 이후 기수는 퍼실리테이터로 운영했습니다.',
      '17기까지는 FigJam으로 단계 가이드를 정리해 참가자가 스프린트를 따라가게 했고, 최근 기수에서는 단계별 의도를 문서로 고정한 템플릿을 공개해 에이전트와 함께 진행하는 형식을 시도했습니다.',
    ],
  },
];

export const awards: Award[] = [
  {
    period: '2024.11',
    title: '관광데이터 활용 공모전 우수상 · 한국관광공사·카카오',
  },
  {
    period: '2023.11',
    title: 'FURIOSA AI Hackathon 대상 · Furiosa AI',
  },
];
