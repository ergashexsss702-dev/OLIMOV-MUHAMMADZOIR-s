export interface ServiceItem {
  id: string;
  title: Record<'uz' | 'ru' | 'en', string>;
  description: Record<'uz' | 'ru' | 'en', string>;
  icon: string;
  tag: Record<'uz' | 'ru' | 'en', string>;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'modern-websites',
    title: {
      uz: 'Zamonaviy Veb-saytlar',
      ru: 'Современные Веб-сайты',
      en: 'Modern Websites'
    },
    description: {
      uz: 'Har qanday qurilmaga mos, tezkor yuklanadigan va chiroyli dizaynga ega veb-sahifalar yaratish.',
      ru: 'Разработка адаптивных, быстрых и стильных веб-страниц под любые современные экраны.',
      en: 'Responsive, fast-loading, and visually refined websites tailored for seamless cross-device viewing.'
    },
    icon: 'Globe',
    tag: { uz: 'Web', ru: 'Веб', en: 'Web' }
  },
  {
    id: 'ai-powered-ideas',
    title: {
      uz: 'AI Imkoniyatlari & G‘oyalar',
      ru: 'AI-Решения и Идеи',
      en: 'AI-Powered Ideas'
    },
    description: {
      uz: 'Sun\'iy intellekt modellarini amaliy jarayonlarga tatbiq etish, qidiruv va yangi g‘oyalarni tekshirish.',
      ru: 'Применение возможностей нейросетей для ускорения задач, генерации и тестирования гипотез.',
      en: 'Integrating generative AI capabilities into practical workflows and ideation pipelines.'
    },
    icon: 'Sparkles',
    tag: { uz: 'AI', ru: 'AI', en: 'AI' }
  },
  {
    id: 'creative-prompts',
    title: {
      uz: 'Kreativ Promptlar',
      ru: 'Креативные Промпты',
      en: 'Creative Prompts'
    },
    description: {
      uz: 'Google AI Studio va generatorlar uchun aniq, tartibli va samarali so‘rovlar (promptlar) tizimi.',
      ru: 'Системные, структурированные промпты для генерации качественного контента и кода.',
      en: 'Structured, tested system prompts engineered for high-accuracy code and media generation.'
    },
    icon: 'Terminal',
    tag: { uz: 'Prompting', ru: 'Промптинг', en: 'Prompting' }
  },
  {
    id: 'landing-pages',
    title: {
      uz: 'Landing Page Loyihalari',
      ru: 'Лендинги и Промо-страницы',
      en: 'Landing Pages'
    },
    description: {
      uz: 'G‘oya, mahsulot yoki ta\'lim markazi haqida to‘liq tasavvur beruvchi zamonaviy promo-sahifalar.',
      ru: 'Привлекательные промо-страницы, презентующие идею, продукт или образовательный курс.',
      en: 'High-clarity landing pages that present products, academies, or ideas with crisp visual hierarchy.'
    },
    icon: 'Compass',
    tag: { uz: 'Landing', ru: 'Лендинг', en: 'Landing' }
  },
  {
    id: 'educational-interfaces',
    title: {
      uz: 'Ta\'limiy Interfeyslar',
      ru: 'Образовательные Интерфейсы',
      en: 'Educational Interfaces'
    },
    description: {
      uz: 'O‘quvchilar uchun tushunarli, qulay va bilim olish jarayonini osonlashtiruvchi raqamli vositalar.',
      ru: 'Удобные интерфейсы для обучения, карточек слов, тестов и интерактивных заданий.',
      en: 'Intuitive student-focused layouts for vocabulary drills, quizzes, and digital assignments.'
    },
    icon: 'GraduationCap',
    tag: { uz: 'EdTech', ru: 'EdTech', en: 'EdTech' }
  },
  {
    id: 'ui-concepts',
    title: {
      uz: 'UI/UX Konseptlari',
      ru: 'UI/UX Концепты',
      en: 'UI/UX Concepts'
    },
    description: {
      uz: 'O‘yinlar, avto-ilovalari va boshqaruv panellari uchun innovatsion interfeys g‘oyalari.',
      ru: 'Свежие концепты интерфейсов для игр, автомобильных приложений и панелей управления.',
      en: 'Creative interface mockups for automotive themes, game HUDs, and digital dashboards.'
    },
    icon: 'LayoutGrid',
    tag: { uz: 'Design', ru: 'Дизайн', en: 'Design' }
  },
  {
    id: 'interactive-web-exp',
    title: {
      uz: 'Interaktiv Tajribalar',
      ru: 'Интерактивный Опыт',
      en: 'Interactive Experiences'
    },
    description: {
      uz: 'Klaviaturadan boshqariladigan terminal, kalkulyatorlar va foydalanuvchi bilan muloqot qiluvchi elementlar.',
      ru: 'Интерактивные терминалы, калькуляторы и элементы, вовлекающие пользователя в действие.',
      en: 'Keyable CLI terminals, calculators, and responsive interactive widgets with real feedback.'
    },
    icon: 'Layers',
    tag: { uz: 'Interactive', ru: 'Интерактив', en: 'Interactive' }
  },
  {
    id: 'digital-experiments',
    title: {
      uz: 'Raqamli Eksperimentlar',
      ru: 'Цифровые Эксперименты',
      en: 'Digital Experiments'
    },
    description: {
      uz: 'Yangi texnologiyalar, animatsiyalar va zamonaviy kutubxonalarni amalda sinash laboratoriyasi.',
      ru: 'Практические пробы новых библиотек, анимаций и технологий в формате мини-лаборатории.',
      en: 'Playful mini-experiments testing emerging frontend libraries, animations, and APIs.'
    },
    icon: 'Cpu',
    tag: { uz: 'Lab', ru: 'Лаборатория', en: 'Lab' }
  }
];
