export interface TimelineItem {
  id: string;
  year: string;
  badge: Record<'uz' | 'ru' | 'en', string>;
  title: Record<'uz' | 'ru' | 'en', string>;
  subtitle: Record<'uz' | 'ru' | 'en', string>;
  description: Record<'uz' | 'ru' | 'en', string>;
  highlights: Record<'uz' | 'ru' | 'en', string[]>;
  icon: string;
}

export const timelineData: TimelineItem[] = [
  {
    id: 'step-1',
    year: '2024 / 2025',
    badge: {
      uz: 'Boshlang‘ich qadamlar',
      ru: 'Первые шаги',
      en: 'Initial Spark'
    },
    title: {
      uz: 'Texnologiyaga qiziqish uyg‘onishi',
      ru: 'Зарождение интереса к технологиям',
      en: 'First Spark in Technology'
    },
    subtitle: {
      uz: 'Kompyuter olami va Scratch bilan dastlabki tanishuv',
      ru: 'Знакомство с компьютером и Scratch',
      en: 'Exploring computing logic and Scratch'
    },
    description: {
      uz: 'Dasturlash dunyosiga birinchi qadamlar. Blokli dasturlash, oddiy o‘yinlar yaratish va kompyuter savodxonligini puxta o‘zlashtirish davri.',
      ru: 'Первые шаги в мире программирования. Создание блочных мини-игр, логические циклы и освоение компьютерной грамотности.',
      en: 'Initial steps into computational thinking. Creating block-based mini games, mastering digital literacy and keyboard skills.'
    },
    highlights: {
      uz: ['Scratch platformasida dastlabki loyihalar', 'Algoritmlar va mantiqiy fikrlash'],
      ru: ['Первые проекты на Scratch', 'Алгоритмы и логическое мышление'],
      en: ['Early block projects in Scratch', 'Algorithmic fundamentals & logic']
    },
    icon: 'Sparkles'
  },
  {
    id: 'step-2',
    year: '2025',
    badge: {
      uz: 'O‘quv dargohi',
      ru: 'Учеба',
      en: 'Academy'
    },
    title: {
      uz: 'Ilmhub O‘quv Markazi',
      ru: 'Учебный Центр Ilmhub',
      en: 'Ilmhub Learning Center'
    },
    subtitle: {
      uz: 'English + IT yo‘nalishlarida tizimli ta\'lim',
      ru: 'Системное обучение: English + IT',
      en: 'Systematic study in English & IT'
    },
    description: {
      uz: 'Namangandagi Ilmhub o‘quv markazida muntazam darslar. Ingliz tili grammatikasi, so‘z boyligi va IT fanlari bo‘yicha chuqur bilim olishning boshlanishi.',
      ru: 'Регулярные занятия в центре Ilmhub в Намангане. Погружение в грамматику и лексику английского языка, а также IT-дисциплины.',
      en: 'Beginning structured study at Ilmhub in Namangan. Expanding English grammar, technical vocabulary, and foundational IT concepts.'
    },
    highlights: {
      uz: ['Ingliz tili darslari va so‘z boyligini oshirish', 'Amaliy topshiriqlar va jamoaviy darslar'],
      ru: ['Уроки английского и рост словарного запаса', 'Практические задания и командная атмосфера'],
      en: ['Active English classes & vocabulary growth', 'Hands-on homework assignments & peer learning']
    },
    icon: 'GraduationCap'
  },
  {
    id: 'step-3',
    year: '2025 / 2026',
    badge: {
      uz: 'Yangi ufqlari',
      ru: 'Новые горизонты',
      en: 'New Horizons'
    },
    title: {
      uz: 'Creative AI & Prompt Engineering',
      ru: 'Креативный AI и промпт-инжиниринг',
      en: 'Creative AI & Prompt Engineering'
    },
    subtitle: {
      uz: 'Google AI Studio va yangi avlod modellarini o‘rganish',
      ru: 'Знакомство с Google AI Studio и моделями Gemini',
      en: 'Exploring Google AI Studio and generative workflows'
    },
    description: {
      uz: 'Sun\'iy intellekt vositalarining imkoniyatlarini sinovdan o‘tkazish. Aniq promptlar tuzish, dasturlashda yordamchi vosita sifatida AI dan unumli foydalanish.',
      ru: 'Эксперименты с генеративными нейросетями. Составление системных промптов и использование AI как ассистента в учебе.',
      en: 'Testing generative AI capabilities. Formulating systematic prompts and leveraging AI as a powerful collaborative accelerator.'
    },
    highlights: {
      uz: ['Google AI Studio va Google Flow bilan tajribalar', 'Tizimli promptlar va shablonlar yaratish'],
      ru: ['Эксперименты с Google AI Studio и Google Flow', 'Разработка системных промптов и шаблонов'],
      en: ['Hands-on experiments in Google AI Studio', 'Designing reusable prompt templates']
    },
    icon: 'Bot'
  },
  {
    id: 'step-4',
    year: '2026',
    badge: {
      uz: 'Veb dasturlash',
      ru: 'Веб-разработка',
      en: 'Web Development'
    },
    title: {
      uz: 'Veb-interfeyslar va Frontend',
      ru: 'Веб-интерфейсы и Фронтенд',
      en: 'Web Interfaces & Frontend Craft'
    },
    subtitle: {
      uz: 'HTML, CSS, JavaScript va zamonaviy kutubxonalar',
      ru: 'HTML, CSS, JavaScript и современные библиотеки',
      en: 'HTML, CSS, JavaScript, and modern UI toolsets'
    },
    description: {
      uz: 'Statik sahifalardan interaktiv, ko‘p tilli va moslashuvchan veb-ilovalarga o‘tish. Family Budget App va Coder Boy Portfolio loyihalarini yaratish.',
      ru: 'Переход от простых страниц к динамическим интерактивным приложениям. Создание Family Budget App и портфолио Coder Boy.',
      en: 'Advancing from static layouts to responsive, multilingual web applications including Family Budget App and Coder Boy Portfolio.'
    },
    highlights: {
      uz: ['Interaktiv loyihalar va ko‘p tilli tizimlar', 'GitHub orqali versiyalarni boshqarish'],
      ru: ['Интерактивные проекты и мультиязычность', 'Контроль версий и ведение репозиториев на GitHub'],
      en: ['Interactive multilingual applications', 'Version control on GitHub & Vercel deployment']
    },
    icon: 'Code'
  },
  {
    id: 'step-5',
    year: 'Hozir / 2026+',
    badge: {
      uz: 'Davom etmoqda',
      ru: 'В процессе',
      en: 'Ongoing'
    },
    title: {
      uz: 'Doimiy o‘rganish va yangi loyihalar',
      ru: 'Непрерывное развитие и новые идеи',
      en: 'Continuous Learning & Building'
    },
    subtitle: {
      uz: 'Bilimlarni chuqurlashtirish va yangi cho‘qqilar sari',
      ru: 'Углубление навыков и новые вызовы',
      en: 'Deepening foundations and tackling new challenges'
    },
    description: {
      uz: 'Har kuni yangi bilim olish, ingliz tilini yanada takomillashtirish va zamonaviy web texnologiyalari bo‘yicha amaliy tajribani oshirish.',
      ru: 'Ежедневное развитие, совершенствование английского и практика в современных веб-технологиях.',
      en: 'Everyday practice, refining English fluency, and building purposeful digital prototypes with clean modern code.'
    },
    highlights: {
      uz: ['Murakkabroq React komponentlari', 'Ochiq manbali loyihalarda ishtirok etish intilishi'],
      ru: ['Более сложные React-компоненты', 'Стремление участвовать в открытых проектах'],
      en: ['Advanced interactive React components', 'Striving towards open-source contributions']
    },
    icon: 'Compass'
  }
];
