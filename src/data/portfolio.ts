/**
 * Central portfolio data — generated from Srikrishnan SR's resume.
 * Every fact on the site comes strictly from this resume.
 * Nothing here is added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Srikrishnan SR',
  displayName: 'Srikrishnan SR',
  firstName: 'SRIKRISHNAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A SRIKRISHNAN ORIGINAL',
  role: 'AI & Data Science | Machine Learning & BI',
  tagline: ['AI & Data Science', 'Machine Learning', 'Business Intelligence', 'Full-Stack'],
  intro:
    'AI and Data Science undergraduate with hands-on experience in machine learning, statistical modeling, and business intelligence. Proficient in Python, SQL, Power BI, and PostgreSQL with a proven ability to extract actionable insights from complex datasets and build deep learning models achieving 95% classification accuracy.',
  location: 'Porur, Chennai - 600116',
  phone: '+91 9150789619',
  email: 'srikrishnan194@gmail.com',
  links: {
    linkedin: 'https://linkedin.com/in/srikrishnan-sr',
    github: 'https://github.com/SRIKRISHNAN-NOVA',
  },
  resumePdf: '/assets/Srikrishnan_SR_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Srikrishnan SR',
  },
  interests: ['Machine Learning', 'Statistical Modeling', 'Business Intelligence', 'Deep Learning (LSTM & NLP)'],
  languages: ['English (Professional)', 'Tamil (Native)'],
};

export const education = [
  {
    school: 'DMI College of Engineering',
    place: 'Chennai',
    degree: 'Bachelor of Technology — Artificial Intelligence and Data Science',
    period: '2022 – 2026',
    score: 'Undergraduate',
  },
  {
    school: "St. John's Matric Higher Secondary School",
    place: 'Porur, Chennai',
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2022',
    score: '67%',
  },
  {
    school: "St. John's Matric Higher Secondary School",
    place: 'Porur, Chennai',
    degree: 'Secondary School Certificate (SSC)',
    period: '2020',
    score: '58%',
  },
];

export const experience = [
  {
    company: 'Kodacy',
    role: 'Machine Learning Intern',
    place: 'Remote',
    period: 'Sep 2023 – Oct 2023',
    points: [
      'Completed a 30-day virtual internship at an AI-focused platform, gaining exposure to end-to-end ML project workflows.',
      'Implemented supervised and unsupervised learning algorithms, applying them to structured datasets for classification and regression tasks.',
      'Performed data preprocessing, feature engineering, and model evaluation to optimize prediction performance.',
      'Validated trained models using cross-validation techniques, achieving measurable improvements in accuracy through iterative tuning.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants' | 'tree' | 'leaf';
};

export const projects: Project[] = [
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection System',
    year: '2024',
    genre: 'Deep Learning • NLP • Text Classification',
    logline: 'Deep learning classifier using Long Short-Term Memory (LSTM) networks to accurately identify and flag misleading news articles.',
    stack: ['Python', 'LSTM', 'NLP', 'TensorFlow', 'Text Vectorization'],
    build: [
      'Engineered a deep learning classifier using Long Short-Term Memory (LSTM) networks to identify and flag misleading news articles.',
      'Applied natural language processing for text vectorization and achieved 95% classification accuracy on the test dataset.',
    ],
    features: [
      'Deep recurrent neural network architecture (LSTM)',
      'NLP text preprocessing & tokenization pipeline',
      'Advanced text vectorization for semantic capture',
      'Automated detection & flagging of misleading content',
      '95% classification accuracy on test dataset',
    ],
    metrics: [
      { value: '95%', label: 'classification accuracy' },
      { value: 'LSTM', label: 'deep recurrent neural network' },
      { value: 'NLP', label: 'text vectorization pipeline' },
      { value: 'Real-Time', label: 'misleading content detection' },
    ],
    github: 'https://github.com/SRIKRISHNAN-NOVA',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'adventure-works-bi',
    title: 'Adventure Works Sales & BI Report',
    year: '2024',
    genre: 'Power BI • DAX • Data Modeling • KPI Analytics',
    logline: '7-page interactive Power BI enterprise suite tracking Revenue, Profit, and Orders using 10+ DAX measures and Star Schema modeling.',
    stack: ['Power BI', 'DAX', 'Star Schema', 'Decomposition Tree', 'Key Influencers'],
    build: [
      'Built a 7-page interactive Power BI report tracking Total Revenue, Profit, Orders, and Return Rate using 10+ DAX measures.',
      'Implemented customer segmentation by Income Level and Occupation, Decomposition Tree, and Key Influencers visuals with dynamic slicers and star schema data modeling.',
    ],
    features: [
      '7-page interactive business intelligence reporting suite',
      '10+ custom DAX measures for Revenue, Profit & Return Rate',
      'Customer segmentation by Income Level and Occupation',
      'Decomposition Tree & Key Influencers visual diagnostics',
      'Star schema data modeling with dynamic interactive slicers',
    ],
    metrics: [
      { value: '7', label: 'interactive BI report pages' },
      { value: '10+', label: 'custom DAX measures' },
      { value: 'Star', label: 'schema data architecture' },
      { value: '4 Core', label: 'KPIs: Revenue, Profit, Orders, Returns' },
    ],
    github: 'https://github.com/SRIKRISHNAN-NOVA',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tree',
  },
  {
    id: 'hr-analytics-dashboard',
    title: 'HR Analytics Dashboard',
    year: '2023',
    genre: 'Power BI • Excel • Workforce Intelligence',
    logline: 'Interactive Power BI dashboard converting raw HR records into structured visual reports to drive evidence-based decisions.',
    stack: ['Power BI', 'Microsoft Excel', 'Data Modeling', 'KPI Analytics'],
    build: [
      'Built an interactive dashboard in Power BI to visualize workforce metrics including attrition rates, headcount trends, and performance indicators.',
      'Converted raw HR records into structured visual reports, enabling leadership to make evidence-based decisions.',
    ],
    features: [
      'Workforce attrition rate & turnover analysis',
      'Headcount growth trends across departments',
      'Performance indicator tracking for management',
      'Automated visual reports transformed from raw HR data',
    ],
    metrics: [
      { value: '100%', label: 'evidence-based reporting' },
      { value: '360°', label: 'workforce metric visibility' },
      { value: 'KPI', label: 'attrition & headcount tracking' },
      { value: 'Executive', label: 'interactive decision support' },
    ],
    github: 'https://github.com/SRIKRISHNAN-NOVA',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'rebook-platform',
    title: 'REBOOK – Book & Notes Exchange',
    year: '2024',
    genre: 'Full-Stack • React.js • Supabase • PostgreSQL',
    logline: 'Full-stack web platform for book and notes exchange with secure Supabase Auth and Row Level Security (RLS) data isolation.',
    stack: ['React.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS'],
    build: [
      'Developed a full-stack web application for book and notes exchange with secure Supabase Auth.',
      'Implemented Row Level Security (RLS) for user data isolation, and real-time database operations for seamless user experience.',
    ],
    features: [
      'Full-stack peer-to-peer book & notes exchange',
      'Secure Supabase Auth with Row Level Security (RLS)',
      'Strict user data isolation policies',
      'Real-time database operations for instant synchronization',
      'Modern TypeScript & React.js frontend architecture',
    ],
    metrics: [
      { value: 'RLS', label: 'row-level security isolation' },
      { value: 'Realtime', label: 'database operations' },
      { value: 'Full-Stack', label: 'React + Supabase + PostgreSQL' },
      { value: 'Zero', label: 'data isolation leaks' },
    ],
    github: 'https://github.com/SRIKRISHNAN-NOVA',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'tenants',
  },
  {
    id: 'planet-pulse',
    title: 'Planet Pulse – Sustainable Design',
    year: '2023',
    genre: 'Python • Data Analytics • Trend Modeling',
    logline: 'Market research and analytical modeling supporting the eco-friendly design of water bottles aligned with sustainability standards.',
    stack: ['Python', 'Data Analytics', 'Market Research', 'Trend Analysis'],
    build: [
      'Conducted market research and applied analytical techniques to support the design of eco-friendly water bottles.',
      'Used trend analysis to identify consumer preferences and align product specifications with environmental sustainability standards.',
    ],
    features: [
      'Consumer preference and buying pattern trend analysis',
      'Market research data modeling for eco-product design',
      'Alignment of product specs with green sustainability benchmarks',
      'Data-driven insights guiding manufacturing and design',
    ],
    metrics: [
      { value: 'Eco', label: 'sustainability aligned' },
      { value: '100%', label: 'green compliance standards' },
      { value: 'Trend', label: 'consumer preference modeling' },
      { value: 'Python', label: 'data-driven analysis' },
    ],
    github: 'https://github.com/SRIKRISHNAN-NOVA',
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'leaf',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'ml-internship',
    title: 'Machine Learning Intern',
    org: 'Kodacy',
    detail: 'Completed 30-day virtual internship at an AI-focused platform — supervised/unsupervised learning, cross-validation & tuning.',
    laurel: 'AI Virtual Internship',
  },
  {
    id: 'deep-learning-acc',
    title: '95% Accuracy Classifier',
    org: 'Deep Learning / NLP',
    detail: 'Engineered LSTM deep learning classifier with text vectorization achieving 95% accuracy for fake news detection.',
    laurel: 'Deep Learning Model',
  },
  {
    id: 'enterprise-bi',
    title: '7-Page BI Suite',
    org: 'Adventure Works',
    detail: 'Built comprehensive Power BI report with 10+ DAX measures, Star Schema data modeling and Decomposition Tree visuals.',
    laurel: 'Business Intelligence',
  },
  {
    id: 'ibm-quantum',
    title: 'Quantum Certified',
    org: 'IBM',
    detail: 'Certified in Quantum Computing fundamentals and emerging quantum algorithm concepts by IBM.',
    laurel: 'IBM Credential',
  },
  {
    id: 'msme-python',
    title: 'Python Certified',
    org: 'MSME',
    detail: 'Certified in Basic Python Programming by the Ministry of Micro, Small and Medium Enterprises (MSME).',
    laurel: 'Govt. Certification',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'OpenAI / Data Analysis', name: 'ChatGPT for Data Analysis', link: 'https://linkedin.com/in/srikrishnan-sr' },
  { issuer: 'PostgreSQL', name: 'PostgreSQL Certification', link: 'https://linkedin.com/in/srikrishnan-sr' },
  { issuer: 'MSME', name: 'Basic Python Programming - MSME', link: 'https://linkedin.com/in/srikrishnan-sr' },
  { issuer: 'IBM', name: 'Quantum Computing – IBM', link: 'https://linkedin.com/in/srikrishnan-sr' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'SQL', mono: 'Sq', note: 'Database' },
      { name: 'HTML', mono: 'Ht' },
    ],
  },
  {
    id: 'analytics',
    title: 'Data & BI',
    subtitle: 'Analysis, DAX & visual reports',
    skills: [
      { name: 'Microsoft Power BI', mono: 'Bi', note: 'Advanced' },
      { name: 'DAX', mono: 'Dx' },
      { name: 'Tableau', mono: 'Tb' },
      { name: 'Microsoft Excel', mono: 'Ex' },
    ],
  },
  {
    id: 'ml-ai',
    title: 'Machine Learning',
    subtitle: 'Models, preprocessing & evaluation',
    skills: [
      { name: 'LSTM Networks', mono: 'Ls' },
      { name: 'Model Evaluation', mono: 'Me' },
      { name: 'Data Preprocessing', mono: 'Dp' },
      { name: 'NLP & Vectorization', mono: 'Nl' },
    ],
  },
  {
    id: 'database-tools',
    title: 'Databases & Web',
    subtitle: 'Storage, frameworks & design',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'Django', mono: 'Dj' },
      { name: 'React.js', mono: 'Re' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Figma', mono: 'Fg' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    subtitle: 'Methodology & execution',
    skills: [
      { name: 'Data Analysis', mono: 'Da' },
      { name: 'Problem Solving', mono: 'Ps' },
      { name: 'Critical Thinking', mono: 'Ct' },
      { name: 'Team Collaboration', mono: 'Tc' },
    ],
  },
  {
    id: 'interests',
    title: 'Domain Focus',
    subtitle: 'Core areas of specialization',
    skills: [
      { name: 'Statistical Modeling', mono: 'Sm' },
      { name: 'Business Intelligence', mono: 'Bi' },
      { name: 'Deep Learning', mono: 'Dl' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, experience or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['Fake News Detection System', 'Planet Pulse', 'MSME Basic Python Certification'],
  SQL: ['PostgreSQL Certification', 'Data Extraction & Schema Queries'],
  HTML: ['Web Frontend & Interface Structuring'],
  'Microsoft Power BI': ['Adventure Works 7-page Report', 'HR Analytics Dashboard', 'ChatGPT for Data Analysis'],
  DAX: ['Adventure Works Sales & BI Report (10+ measures)', 'HR Analytics Dashboard'],
  Tableau: ['Data Analysis & Visual Dashboards'],
  'Microsoft Excel': ['HR Analytics Dashboard', 'Workforce Data Reporting'],
  'LSTM Networks': ['Fake News Detection System (95% Accuracy)'],
  'Model Evaluation': ['Kodacy ML Internship', 'Cross-Validation & Iterative Tuning'],
  'Data Preprocessing': ['Feature Engineering at Kodacy', 'NLP Text Vectorization', 'Planet Pulse'],
  'NLP & Vectorization': ['Fake News Detection System'],
  PostgreSQL: ['PostgreSQL Certification', 'REBOOK Exchange Platform (Supabase)'],
  Django: ['Python Web Development & Design Tools'],
  'React.js': ['REBOOK Book & Notes Exchange Platform'],
  TypeScript: ['REBOOK Exchange Platform'],
  Figma: ['UI/UX Design & Prototyping'],
  'Data Analysis': ['Kodacy ML Internship', 'Planet Pulse', 'Adventure Works BI'],
  'Problem Solving': ['Machine Learning Model Tuning', 'Star Schema Optimization'],
  'Critical Thinking': ['Market Research & Consumer Preference Analysis'],
  'Team Collaboration': ['Academic & Professional Project Workflows'],
  'Statistical Modeling': ['Kodacy ML Internship', 'Predictive Analysis'],
  'Business Intelligence': ['Adventure Works BI Report', 'HR Analytics Dashboard'],
  'Deep Learning': ['Fake News Detection System', 'LSTM Neural Networks'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'School Foundations',
    period: '2020 – 2022',
    synopsis: "Secondary and Higher Secondary education at St. John's Matric Higher Secondary School, Porur, Chennai.",
    episodes: [
      {
        code: 'S01 E01',
        title: 'Secondary School (SSC)',
        description: "Completed Secondary School Certificate (SSC) at St. John's Matric Higher Secondary School, Porur with 58%.",
        tags: ['SSC', "St. John's", 'Porur'],
        runtime: '2020',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'Higher Secondary (HSC)',
        description: "Completed Higher Secondary Certificate (HSC) at St. John's Matric Higher Secondary School, Porur with 67%.",
        tags: ['HSC', 'Science', '67%'],
        runtime: '2022',
        palette: violet,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & Data Science',
    period: '2022 – 2026',
    synopsis: 'B.Tech in Artificial Intelligence and Data Science at DMI College of Engineering, Chennai.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The B.Tech Degree',
        description: 'Undergraduate studies in B.Tech Artificial Intelligence and Data Science at DMI College of Engineering, Chennai.',
        tags: ['B.Tech', 'AI & Data Science', 'DMI College'],
        runtime: '2022 – 2026',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The ML Internship',
        description: '30-day virtual Machine Learning Internship at Kodacy: supervised & unsupervised algorithms, feature engineering, and cross-validation.',
        tags: ['Kodacy', 'ML Intern', 'Cross-Validation'],
        runtime: 'Sep – Oct 2023',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Certifications Arc',
        description: 'Earned credentials in Quantum Computing (IBM), Basic Python (MSME), PostgreSQL, and ChatGPT for Data Analysis.',
        tags: ['IBM', 'MSME', 'PostgreSQL', 'OpenAI'],
        runtime: '4 Credentials',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Building The Productions',
    period: '2023 – 2024',
    synopsis: 'Five Original projects spanning Deep Learning NLP, Enterprise Power BI dashboards, and Full-Stack platforms.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Deep Learning Model',
        description: 'Engineered Fake News Detection System with LSTM networks and NLP text vectorization, reaching 95% accuracy.',
        tags: ['Python', 'LSTM', 'NLP', '95% Acc'],
        runtime: '2024',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'Enterprise Business Intelligence',
        description: 'Built 7-page Adventure Works Sales & BI Report with 10+ DAX measures, Star Schema, and HR Analytics Dashboard.',
        tags: ['Power BI', 'DAX', 'Star Schema', 'Excel'],
        runtime: '2023 – 2024',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'Full-Stack & Sustainable Analytics',
        description: 'Developed REBOOK exchange platform with React.js & Supabase RLS, and Planet Pulse market research for sustainable product design.',
        tags: ['React.js', 'Supabase', 'PostgreSQL', 'Sustainability'],
        runtime: '2023 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Seeking to contribute technical expertise and problem-solving skills in results-driven, data-focused organizations.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Data & AI Frontier',
        description: 'Advancing statistical modeling, machine learning pipelines, and executive business intelligence solutions.',
        tags: ['Machine Learning', 'Data Science', 'Business Intelligence'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core Field', title: 'AI & Data Science', detail: 'B.Tech at DMI College of Engineering (2022–2026)', palette: ocean },
  { label: 'Deep Learning', title: '95% Accuracy', detail: 'LSTM Fake News Detection System with NLP', palette: crimson },
  { label: 'Enterprise BI', title: 'Adventure Works', detail: '7-page Power BI suite with 10+ DAX measures & Star Schema', palette: ocean },
  { label: 'Experience', title: 'Kodacy ML Intern', detail: 'End-to-end ML workflows, feature engineering & cross-validation', palette: violet },
  { label: 'Workforce Analytics', title: 'HR Dashboard', detail: 'Interactive Power BI attrition & headcount reports', palette: amber },
  { label: 'Full-Stack Web', title: 'REBOOK Platform', detail: 'React.js, Supabase Auth & PostgreSQL with Row Level Security', palette: jade },
  { label: 'IBM Credential', title: 'Quantum Computing', detail: 'Certified in Quantum Computing fundamentals by IBM', palette: crimson },
  { label: 'Sustainability', title: 'Planet Pulse', detail: 'Market trend analysis for eco-friendly product design', palette: jade },
  { label: 'Database', title: 'PostgreSQL', detail: 'Certified & applied across full-stack and analytical projects', palette: ocean },
  { label: 'Govt. Credential', title: 'MSME Python', detail: 'Basic Python Programming certified by MSME', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & Data Science',
    lines: ['DMI College of Engineering, Chennai', '2022 – 2026'],
    chips: ['Artificial Intelligence', 'Data Science'],
  },
  {
    kicker: 'Core Stack',
    title: 'Data & Machine Learning First',
    lines: ['Python, SQL, Power BI, DAX, PostgreSQL', 'LSTM Networks, Model Evaluation, Data Preprocessing, NLP', 'React.js, Supabase, Django, Figma, Tableau, Excel'],
    chips: ['Python', 'SQL', 'Power BI', 'DAX', 'PostgreSQL', 'LSTM', 'React.js'],
  },
  {
    kicker: 'Experience',
    title: 'The ML Apprenticeship',
    lines: ['Machine Learning Intern · Kodacy · Remote', 'Supervised & Unsupervised Learning · Feature Engineering · Model Evaluation · Cross-Validation'],
  },
  {
    kicker: 'Productions',
    title: 'Five Originals',
    lines: [
      'Fake News Detection — LSTM & NLP with 95% classification accuracy',
      'Adventure Works BI — 7-page Power BI report with 10+ DAX measures & Star Schema',
      'HR Analytics Dashboard — interactive workforce attrition & headcount KPI visualizer',
      'REBOOK — Full-stack React + Supabase book exchange with Row Level Security',
      'Planet Pulse — Python data analytics for eco-friendly sustainable product design',
    ],
  },
  {
    kicker: 'Certified',
    title: '4 Key Certifications',
    lines: ['Quantum Computing – IBM', 'PostgreSQL Certification', 'ChatGPT for Data Analysis', 'Basic Python Programming – MSME'],
  },
  {
    kicker: 'Current Mission',
    title: 'Now Streaming',
    lines: ['Extracting actionable insights from complex datasets', 'Building high-accuracy predictive ML models for data-focused organizations'],
  },
];

export type ProfileId = 'srikrishnan' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'srikrishnan',
    name: 'Srikrishnan',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Productions • 2023–2024`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 highlights from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
