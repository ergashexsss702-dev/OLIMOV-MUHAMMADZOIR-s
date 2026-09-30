export type SkillCategory = 'programming' | 'creative' | 'ai' | 'english' | 'computer';
export type SkillLevel = 'learning' | 'familiar' | 'exploring';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  description: Record<'uz' | 'ru' | 'en', string>;
  icon: string;
}

export const skillsData: SkillItem[] = [
  // Programming & Dev
  {
    id: 'html-css',
    name: 'HTML5 & CSS3',
    category: 'programming',
    level: 'familiar',
    description: {
      uz: 'Semantik belgilar, Flexbox, Grid, moslashuvchan media so‘rovlar va zamonaviy uslublar.',
      ru: 'Семантическая верстка, Flexbox, Grid, адаптивность и современные CSS-стили.',
      en: 'Semantic markup, Flexbox, Grid, fluid responsive design and modern styling.'
    },
    icon: 'Layout'
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'programming',
    level: 'familiar',
    description: {
      uz: 'O‘zgaruvchilar, funksiyalar, DOM manipulyatsiyasi, massivlar va mantiqiy algoritmlar.',
      ru: 'Переменные, функции, работа с DOM, массивы и алгоритмическая логика.',
      en: 'Variables, arrow functions, DOM manipulation, arrays, and algorithmic logic.'
    },
    icon: 'FileCode2'
  },
  {
    id: 'react-vite',
    name: 'React & Vite',
    category: 'programming',
    level: 'learning',
    description: {
      uz: 'Komponentlar, useState/useEffect hooklari, propelar va tezkor loyiha yig‘ish muhiti.',
      ru: 'Компоненты, хуки useState/useEffect, пропсы и быстрая сборка проектов.',
      en: 'Modular components, useState/useEffect hooks, props, and modern Vite dev tooling.'
    },
    icon: 'Atom'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'programming',
    level: 'learning',
    description: {
      uz: 'Tiplar, interfeyslar, xatoliklarni erta aniqlash va xavfsiz kod yozish madaniyati.',
      ru: 'Типизация, интерфейсы, предотвращение ошибок и надежность кода.',
      en: 'Type annotations, interfaces, compile-time error prevention, and clean coding.'
    },
    icon: 'ShieldCheck'
  },
  {
    id: 'scratch',
    name: 'Scratch',
    category: 'programming',
    level: 'familiar',
    description: {
      uz: 'Algoritmik tafakkur, blokli mantiq, sikllar, hodisalar va mini-o‘yinlar yaratish.',
      ru: 'Алгоритмическое мышление, визуальная логика блоков, циклы и мини-игры.',
      en: 'Computational thinking, visual block logic, game mechanics, and event loops.'
    },
    icon: 'Puzzle'
  },
  {
    id: 'arduino-mblock',
    name: 'Arduino IDE & mBlock',
    category: 'programming',
    level: 'exploring',
    description: {
      uz: 'Mikrokontrollerlar, datchiklar, robototexnika asoslari va elektronika bilan ishlash.',
      ru: 'Микроконтроллеры, датчики, основы робототехники и работа со схемотехникой.',
      en: 'Microcontroller logic, sensor interfacing, robotics basics, and hardware exploration.'
    },
    icon: 'Cpu'
  },
  {
    id: 'app-inventor',
    name: 'MIT App Inventor',
    category: 'programming',
    level: 'familiar',
    description: {
      uz: 'Android mobil ilovalari interfeysi, sensorlar va blokli mobil dasturlash.',
      ru: 'Создание Android-приложений с помощью визуальных блоков и работы с датчиками.',
      en: 'Android mobile app prototyping, mobile sensors, and block-based architecture.'
    },
    icon: 'Smartphone'
  },

  // Creative Tech
  {
    id: 'web-design',
    name: 'Responsive Web Design',
    category: 'creative',
    level: 'familiar',
    description: {
      uz: 'Har qanday o‘lchamdagi ekranlar (telefon, planshet, noutbuk) uchun mos dizayn.',
      ru: 'Адаптивный дизайн для любых экранов: смартфонов, планшетов и десктопов.',
      en: 'Mobile-first fluid layouts, clamp typography, and cross-device ergonomics.'
    },
    icon: 'MonitorSmartphone'
  },
  {
    id: 'ui-design',
    name: 'UI/UX Visual Hierarchy',
    category: 'creative',
    level: 'learning',
    description: {
      uz: 'To‘g‘ri masofalar (spacing), ranglar muvozanati, shriftlar va qulay interfeyslar.',
      ru: 'Грамотные отступы, цветовой баланс, типографика и удобство использования.',
      en: 'Spatial spacing math, color restraint (60-30-10), and typographic hierarchy.'
    },
    icon: 'Palette'
  },
  {
    id: 'motion-ui',
    name: 'CSS Motion & Transitions',
    category: 'creative',
    level: 'familiar',
    description: {
      uz: 'Silliq animatsiyalar, tugma mikromotionlari va interfeys jonlantirish usullari.',
      ru: 'Плавные переходы, микроанимации кнопок и эстетичная динамика интерфейса.',
      en: 'High-performance transitions, button hover glow, and elegant state morphing.'
    },
    icon: 'Sparkle'
  },

  // AI & Prompting
  {
    id: 'prompt-eng',
    name: 'Prompt Engineering',
    category: 'ai',
    level: 'familiar',
    description: {
      uz: 'Tizimli promptlar, bosqichma-bosqich yo‘riqnomalar va aniq natija olish formulalari.',
      ru: 'Системные инструкции, пошаговые запросы и техники точной генерации.',
      en: 'System prompt architecture, few-shot prompting, and clear output constraints.'
    },
    icon: 'Terminal'
  },
  {
    id: 'ai-studio',
    name: 'Google AI Studio',
    category: 'ai',
    level: 'learning',
    description: {
      uz: 'Gemini modellari bilan ishlash, prototiplash va parametrlar bilan eksperiment qilish.',
      ru: 'Работа с моделями Gemini, прототипирование и тестирование промптов.',
      en: 'Gemini model prototyping, multimodal testing, and parameter experimentation.'
    },
    icon: 'Bot'
  },
  {
    id: 'google-flow',
    name: 'Google Flow & AI Workflows',
    category: 'ai',
    level: 'exploring',
    description: {
      uz: 'Kreativ g‘oyalarni AI orqali avtomatlashtirish va media generatsiya jarayonlari.',
      ru: 'Автоматизация творческих идей с помощью AI и генерация контента.',
      en: 'Creative automation, concept mapping, and next-gen workflow structuring.'
    },
    icon: 'Workflow'
  },

  // English
  {
    id: 'cambridge-prep',
    name: 'Cambridge-style English',
    category: 'english',
    level: 'familiar',
    description: {
      uz: 'Strukturaviy grammatika, o‘qish va so‘zlarni to‘g‘ri qo‘llash amaliyoti.',
      ru: 'Структурная грамматика, чтение и практическое применение лексики.',
      en: 'Structured grammar exercises, active reading, and language fundamentals.'
    },
    icon: 'GraduationCap'
  },
  {
    id: 'it-english',
    name: 'Technical IT English',
    category: 'english',
    level: 'familiar',
    description: {
      uz: 'Dasturlash atamalari, GitHub xabarlari va texnik hujjatlarni tushunish.',
      ru: 'Термины программирования, чтение документации и описаний коммитов.',
      en: 'Developer nomenclature, API references, Git commit phrasing, and docs comprehension.'
    },
    icon: 'BookOpen'
  },
  {
    id: 'speaking-english',
    name: 'Conversational Practice',
    category: 'english',
    level: 'learning',
    description: {
      uz: 'Ilmhubda darslar davomida erkin muloqot va fikrlarni ifodalash mashqlari.',
      ru: 'Разговорная практика на занятиях в Ilmhub и формулирование мыслей на английском.',
      en: 'Daily spoken communication in classroom sessions and peer discussions.'
    },
    icon: 'MessageSquare'
  },

  // Computer Skills
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'computer',
    level: 'learning',
    description: {
      uz: 'Versiyalar nazorati, commitlar, repozitoriyalar ochish va ochiq kod boshqaruvi.',
      ru: 'Контроль версий, коммиты, создание репозиториев и работа с GitHub.',
      en: 'Version control basics, meaningful commit messages, branches, and pushing code.'
    },
    icon: 'GitBranch'
  },
  {
    id: 'terminal-cli',
    name: 'Terminal & CLI Basics',
    category: 'computer',
    level: 'familiar',
    description: {
      uz: 'Kataloglar aro harakatlanish, npm buyruqlari va paketlarni o‘rnatish.',
      ru: 'Навигация по папкам, запуск npm-скриптов и установка пакетов через терминал.',
      en: 'Shell navigation, running npm scripts, directory management, and dev commands.'
    },
    icon: 'TerminalSquare'
  },
  {
    id: 'comp-literacy',
    name: 'General Computer Literacy',
    category: 'computer',
    level: 'familiar',
    description: {
      uz: 'Operatsion tizimlar, tezkor klaviatura buyruqlari va raqamli xavfsizlik.',
      ru: 'Операционные системы, горячие клавиши и культура цифровой безопасности.',
      en: 'Operating system mastery, touch-typing agility, and digital safety standards.'
    },
    icon: 'Laptop'
  }
];

export interface TechStackItem {
  name: string;
  role: string;
  level: SkillLevel;
  icon: string;
}

export const techStackData: TechStackItem[] = [
  { name: 'HTML5', role: 'Markup & Semantics', level: 'familiar', icon: 'Code' },
  { name: 'CSS3', role: 'Styling & Animations', level: 'familiar', icon: 'Paintbrush' },
  { name: 'JavaScript', role: 'Core Logic & DOM', level: 'familiar', icon: 'FileCode2' },
  { name: 'React', role: 'Component UI', level: 'learning', icon: 'Atom' },
  { name: 'TypeScript', role: 'Static Typing', level: 'learning', icon: 'ShieldCheck' },
  { name: 'Tailwind CSS', role: 'Utility Styling', level: 'learning', icon: 'Layers' },
  { name: 'Vite', role: 'Build Tool & Dev', level: 'learning', icon: 'Zap' },
  { name: 'Git & GitHub', role: 'Version Control', level: 'learning', icon: 'GitBranch' },
  { name: 'Vercel', role: 'Cloud Deployment', level: 'learning', icon: 'Cloud' },
  { name: 'Google AI Studio', role: 'Gemini Prototyping', level: 'learning', icon: 'Bot' },
  { name: 'Prompt Engineering', role: 'AI Instructions', level: 'familiar', icon: 'Terminal' },
  { name: 'Scratch', role: 'Visual Algorithms', level: 'familiar', icon: 'Puzzle' },
  { name: 'Arduino IDE', role: 'Hardware & Sensors', level: 'exploring', icon: 'Cpu' },
  { name: 'mBlock', role: 'Robotics Logic', level: 'exploring', icon: 'Sliders' },
  { name: 'App Inventor', role: 'Android Prototyping', level: 'familiar', icon: 'Smartphone' },
];
