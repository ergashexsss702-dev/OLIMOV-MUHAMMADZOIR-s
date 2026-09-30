export interface ProjectItem {
  id: string;
  title: Record<'uz' | 'ru' | 'en', string>;
  category: 'web' | 'ai' | 'education' | 'creative' | 'apps' | 'experiments';
  type: Record<'uz' | 'ru' | 'en', string>;
  description: Record<'uz' | 'ru' | 'en', string>;
  longDescription: Record<'uz' | 'ru' | 'en', string>;
  tags: string[];
  features: Record<'uz' | 'ru' | 'en', string[]>;
  learnings: Record<'uz' | 'ru' | 'en', string[]>;
  githubUrl?: string;
  demoUrl?: string;
  color: string;
  accentGradient: string;
  iconName: string;
  hasInteractiveDemo: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'family-budget',
    title: {
      uz: 'Family Budget App',
      ru: 'Семейный бюджет (Family Budget)',
      en: 'Family Budget App'
    },
    category: 'apps',
    type: {
      uz: 'Shaxsiy loyiha',
      ru: 'Личный проект',
      en: 'Personal Project'
    },
    description: {
      uz: 'Kundalik xarajatlarni hisoblash, toifalarga ajratish va oylik natijalarni ko‘rish uchun ko‘p tilli oilaviy byudjet interfeysi.',
      ru: 'Многоязычный интерфейс семейного бюджета для учета ежедневных расходов, категорий и месячной статистики.',
      en: 'A multilingual family budget interface where users can log daily expenses, categorize transactions, and see monthly totals.'
    },
    longDescription: {
      uz: 'Oilaviy xarajatlarni rejalashtirish va tahlil qilish uchun mo‘ljallangan zamonaviy dastur. O‘zbek, rus va ingliz tillarida ishlaydi, ma\'lumotlarni mahalliy saqlaydi va harajatlarni vizual diagrammalarda ifodalaydi.',
      ru: 'Современное приложение для планирования и учета семейных расходов. Поддерживает узбекский, русский и английский языки, локальное хранение данных и наглядную аналитику.',
      en: 'A modern application designed for household expense planning and tracking. Built with 3 language modes, local storage persistence, and clean category visualization.'
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage', 'i18n'],
    features: {
      uz: [
        'Har kungi xarajatlarni kiritish va o‘chirish',
        'Kategoriyalar bo‘yicha ajratish (oziq-ovqat, ta\'lim, transport va h.k.)',
        'Oylik jami xarajatlar va limit ko‘rsatkichi',
        'Yorug‘ va qorong‘i mavzu moslashuvi',
        '3 tilda (UZ, RU, EN) to‘liq ishlash'
      ],
      ru: [
        'Добавление и удаление ежедневных расходов',
        'Категории трат (продукты, образование, транспорт и др.)',
        'Месячный итог и удобная шкала бюджета',
        'Поддержка темной и светлой темы',
        'Работа на 3 языках (UZ, RU, EN)'
      ],
      en: [
        'Add and remove daily household expenses',
        'Categorized tracking (groceries, education, transit, utilities)',
        'Monthly totals and budget status indicators',
        'Light and dark theme support',
        'Full 3-language system (UZ, RU, EN)'
      ]
    },
    learnings: {
      uz: [
        'React state management va holatlarni sinxronlash',
        'Mahalliy xotira (localStorage) bilan ishonchli ishlash',
        'Hisob-kitob algoritmlari va filtratsiya'
      ],
      ru: [
        'Управление состоянием в React и синхронизация',
        'Надежное сохранение данных в LocalStorage',
        'Алгоритмы подсчета и фильтрации'
      ],
      en: [
        'State management and synchronization in React',
        'Persistent client-side data with LocalStorage',
        'Calculation logic, category filters and sorting'
      ]
    },
    githubUrl: 'https://github.com',
    demoUrl: '#demo-family-budget',
    color: '#10b981',
    accentGradient: 'from-emerald-500 to-teal-700',
    iconName: 'Wallet',
    hasInteractiveDemo: true
  },
  {
    id: 'uzb-parking',
    title: {
      uz: 'UZB Parking Game UI',
      ru: 'Концепт игры UZB Parking',
      en: 'UZB Parking Game Concept'
    },
    category: 'creative',
    type: {
      uz: 'Konseptual loyiha',
      ru: 'Концепт-проект',
      en: 'Concept Project'
    },
    description: {
      uz: 'O‘zbekiston ko‘chalari, milliy avtomobillar va zamonaviy o‘yin boshqaruvi bilan boyitilgan avto-turargoh o‘yini interfeysi konsepti.',
      ru: 'Концепт интерфейса автоигры в стилистике дорог Узбекистана с выбором местных авто и игровым HUD.',
      en: 'A concept for an Uzbekistan-themed car parking game interface featuring local streets, car selection, and modern game UI.'
    },
    longDescription: {
      uz: 'Mahalliy madaniyat va zamonaviy UI/UX o‘yin dizaynini birlashtirgan loyiha. Mashina tanlash menyusi, tezlik va yoqilg‘i ko‘rsatkichlari, "Play" va "Back" tugmalari bilan to‘liq o‘yin atmosferasini yaratadi.',
      ru: 'Проект, объединяющий колорит дорог Узбекистана и современный игровой UI. Включает меню выбора автомобиля, спидометр, индикатор топлива и экран старта уровня.',
      en: 'A project uniting local automotive culture with futuristic game HUD design. Features vehicle selector, speed & fuel gauges, responsive play/back controls, and realistic parking mission UI.'
    },
    tags: ['UI/UX Game Design', 'CSS Grid', 'Motion', 'Canvas Concept', 'Audio FX'],
    features: {
      uz: [
        'Mashinalar katalogi (Cobalt, Gentra, Tracker konseptlari)',
        'Boshlash (Play), Orqaga (Back) va Sozlamalar tugmalari',
        'Spidometr va mini-xarita interfeysi',
        'Tovush effektlari va animatsiyalar'
      ],
      ru: [
        'Каталог автомобилей с 3D/2D превью',
        'Кнопки управления (Play, Назад, Настройки)',
        'Интерфейс спидометра и мини-карты',
        'Анимации и звуковые эффекты'
      ],
      en: [
        'Vehicle selector carousel with stats (handling, speed, braking)',
        'Responsive game navigation (Play, Back, Level Select)',
        'Speedometer, mini-map, and parking zone markers',
        'Futuristic HUD glow animations'
      ]
    },
    learnings: {
      uz: [
        'O‘yinlar uchun moslashuvchan UI tuzilmasini yaratish',
        'CSS animatsiyalari va tugmalar mikromotionlari',
        'Foydalanuvchi diqqatini boshqarish va vizual iyerarxiya'
      ],
      ru: [
        'Создание гибких игровых интерфейсов',
        'Микроанимации кнопок и переходов',
        'Управление вниманием пользователя в игровом меню'
      ],
      en: [
        'Game UI/UX hierarchy and HUD design',
        'Keyframe animations and sound trigger integration',
        'Viewport scaling across mobile and desktop screens'
      ]
    },
    githubUrl: 'https://github.com',
    demoUrl: '#demo-uzb-parking',
    color: '#06b6d4',
    accentGradient: 'from-cyan-500 to-blue-700',
    iconName: 'Car',
    hasInteractiveDemo: true
  },
  {
    id: 'coder-boy-portfolio',
    title: {
      uz: 'Coder Boy Portfolio',
      ru: 'Портфолио Coder Boy',
      en: 'Coder Boy Portfolio'
    },
    category: 'web',
    type: {
      uz: 'Shaxsiy loyiha',
      ru: 'Личный проект',
      en: 'Personal Project'
    },
    description: {
      uz: 'Muhammadzoirning yorug‘/qorong‘i mavzuli, 3 tilli, interaktiv terminalli va yuqori tezlikka ega rasmiy portfolio sayti.',
      ru: 'Официальный сайт-портфолио Мухаммадзоира с 3 языками, темной/светлой темой и интерактивным терминалом.',
      en: 'Muhammadzoir’s official portfolio featuring 3 languages, dark/light theme, interactive CLI terminal, and modern aesthetics.'
    },
    longDescription: {
      uz: 'Ushbu saytning o‘zi! Google AI Studio, Vite, React 19 va Tailwind CSS yordamida yaratilgan, GitHub va Vercel platformalariga moslashtirilgan to‘liq frontend loyiha.',
      ru: 'Сам этот сайт! Создан на React 19, TypeScript, Vite и Tailwind CSS с полной поддержкой выгрузки на GitHub и деплоя на Vercel.',
      en: 'This very website! Engineered with React 19, TypeScript, Vite, and Tailwind CSS. Built with zero-pill metadata discipline, instant language switching, and interactive CLI.'
    },
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'i18n', 'Vercel'],
    features: {
      uz: [
        '3 ta til (O‘zbek, Rus, Ingliz) bir zumda almashadi',
        'Qorong‘i va yorug‘ mavzular tizimi',
        'Ishlaydigan interaktiv terminal buyruqlari',
        'Moslashuvchan mobil va planshet dizayni'
      ],
      ru: [
        'Мгновенное переключение 3 языков',
        'Полноценный темный и светлый режим',
        'Рабочий интерактивный терминал с командами',
        'Адаптивный дизайн для смартфонов и ПК'
      ],
      en: [
        'Zero-reload instant switching across 3 languages',
        'Persistent Dark / Light theme engine',
        'Interactive executable CLI terminal component',
        '100% responsive fluid mobile layout'
      ]
    },
    learnings: {
      uz: [
        'Katta frontend arxitekturasini qismlarga ajratish',
        'Xalqaro i18n tizimini to‘g‘ri qurish',
        'Foydalanuvchi qulayligi (Accessibility) va SEO'
      ],
      ru: [
        'Масштабируемая модульная архитектура React',
        'Правильная организация переводов (i18n)',
        'Доступность (a11y) и оптимизация производительности'
      ],
      en: [
        'Component decoupling and maintainable architecture',
        'Type-safe i18n without external bloated dependencies',
        'Web accessibility standards and zero dead clicks'
      ]
    },
    githubUrl: 'https://github.com',
    demoUrl: '#top',
    color: '#8b5cf6',
    accentGradient: 'from-purple-500 to-indigo-700',
    iconName: 'Code',
    hasInteractiveDemo: false
  },
  {
    id: 'ai-prompt-projects',
    title: {
      uz: 'AI Prompt Projects',
      ru: 'AI Промпт-проекты',
      en: 'AI Prompt Projects'
    },
    category: 'ai',
    type: {
      uz: 'O‘quv tadqiqoti',
      ru: 'Учебное исследование',
      en: 'Learning Project'
    },
    description: {
      uz: 'Google Flow, Google AI Studio va tasvir/video yaratish uchun saralangan, sinovdan o‘tgan kreativ promptlar to‘plami.',
      ru: 'Коллекция протестированных AI-промптов для Google AI Studio, Google Flow и генерации креативного контента.',
      en: 'A collection of tested, structured AI prompts for Google Flow, Google AI Studio, and creative media generation.'
    },
    longDescription: {
      uz: 'Sun\'iy intellekt vositalaridan maksimal natija olish uchun ishlab chiqilgan maxsus shablonlar va promptlar bazasi. Dasturlash kodlari, dizayn g‘oyalari va ta\'limiy topshiriqlarni tezlashtirishga yordam beradi.',
      ru: 'База готовых шаблонов и инженерных промптов для эффективного взаимодействия с моделями Gemini и генеративными инструментами.',
      en: 'A systematic library of prompt architectures optimized for Gemini models, Google AI Studio workflows, and creative development pipelines.'
    },
    tags: ['Google AI Studio', 'Google Flow', 'Prompt Engineering', 'Gemini Models'],
    features: {
      uz: [
        'Dasturlash va kod yozish uchun maxsus promptlar',
        'Kreativ tasvir va veb-sahifa g‘oyalari uchun qoliplar',
        'Few-shot va Chain-of-Thought namunalar',
        'Nusxalash va sinab ko‘rish qulayligi'
      ],
      ru: [
        'Промпты для генерации чистого кода и рефакторинга',
        'Шаблоны для креативного дизайна и идей',
        'Примеры с пошаговой логикой (Chain-of-Thought)',
        'Быстрое копирование в один клик'
      ],
      en: [
        'System prompt templates for code generation and debugging',
        'Creative prompts for UI design inspiration and storytelling',
        'Few-shot prompting examples and structure guides',
        'One-click prompt testing and clipboard export'
      ]
    },
    learnings: {
      uz: [
        'Sun\'iy intellekt modellarining ishlash prinsiplari',
        'Kontekst va parametrlar (temperature, top_p) ta\'siri',
        'Kreativ natijalar olish uchun aniq ko‘rsatmalar berish'
      ],
      ru: [
        'Принципы работы больших языковых моделей',
        'Влияние параметров температуры и контекстного окна',
        'Точное формулирование инструкций для идеального результата'
      ],
      en: [
        'Large Language Model behavior and attention mechanisms',
        'Parameter calibration for creative vs analytical tasks',
        'Structuring iterative prompt feedback loops'
      ]
    },
    githubUrl: 'https://github.com',
    demoUrl: '#demo-ai-prompts',
    color: '#f59e0b',
    accentGradient: 'from-amber-500 to-orange-700',
    iconName: 'Sparkles',
    hasInteractiveDemo: true
  },
  {
    id: 'english-learning-tools',
    title: {
      uz: 'English Learning Tools',
      ru: 'Тренажер английского языка',
      en: 'English Learning Tools'
    },
    category: 'education',
    type: {
      uz: 'Ta\'limiy loyiha',
      ru: 'Образовательный проект',
      en: 'Learning Project'
    },
    description: {
      uz: 'IT atamalari, yangi so‘zlarni yodlash va Kembrij uslubidagi mashqlarni bajarish uchun interaktiv lug‘at platformasi.',
      ru: 'Интерактивная платформа для тренировки IT-лексики, пополнения словарного запаса и упражнений по английскому.',
      en: 'An interactive concept for practicing IT vocabulary, flashcard drills, and Cambridge-style grammar exercises.'
    },
    longDescription: {
      uz: 'Dasturchilar va o‘quvchilar uchun ingliz tilini qiziqarli o‘rganish vositasi. Karta uslubidagi so‘z yodlash, tezkor testlar va o‘rganish statistikasini taqdim etadi.',
      ru: 'Инструмент для увлекательного изучения английского языка для юных айтишников. Включает карточки слов, квизы и трекер прогресса.',
      en: 'A dedicated study companion designed for young tech students. Combines spaced-repetition vocabulary cards, instant quiz checks, and progress metrics.'
    },
    tags: ['EdTech', 'Interactive Quiz', 'React', 'Vocabulary Engine'],
    features: {
      uz: [
        'IT va texnik atamalar lug‘ati',
        'Kartalarni ag‘darish orqali ma\'nosini tekshirish',
        'Interaktiv tezkor test rejimi',
        'O‘zbekcha va ruscha tarjimalar bilan'
      ],
      ru: [
        'Словарь технических и общих IT-терминов',
        'Интерактивные флеш-карточки с переводом',
        'Режим быстрой викторины для проверки знаний',
        'Перевод на узбекский и русский языки'
      ],
      en: [
        'Technical and developer terminology vocabulary list',
        'Flip-card interactive memorization engine',
        'Self-check mini quiz with immediate feedback',
        'Trilingual word definitions (EN, UZ, RU)'
      ]
    },
    learnings: {
      uz: [
        'O‘quv jarayonini gamifikatsiya (o‘yinlashtirish) qilish',
        'Test va viktorina logikasini dasturlash',
        'Foydalanuvchi natijalarini hisoblash'
      ],
      ru: [
        'Геймификация образовательного процесса',
        'Разработка логики интерактивных тестов',
        'Подсчет баллов и динамика прогресса'
      ],
      en: [
        'Educational gamification design principles',
        'Stateful quiz logic and instant validation',
        'Accessible card flipping animations'
      ]
    },
    githubUrl: 'https://github.com',
    demoUrl: '#demo-english-tools',
    color: '#3b82f6',
    accentGradient: 'from-blue-500 to-indigo-700',
    iconName: 'BookOpen',
    hasInteractiveDemo: true
  },
  {
    id: 'ilmhub-promo-concept',
    title: {
      uz: 'Ilmhub Promotional Concept',
      ru: 'Промо-концепт Ilmhub',
      en: 'Ilmhub Promotional Concept'
    },
    category: 'education',
    type: {
      uz: 'Konseptual loyiha',
      ru: 'Концепт-проект',
      en: 'Concept Project'
    },
    description: {
      uz: 'Ilmhub o‘quv markazi uchun zamonaviy, ta\'lim va IT yo‘nalishlarini yorituvchi interaktiv veb-sahifa konsepti.',
      ru: 'Креативный концепт промо-страницы учебного центра Ilmhub с акцентом на курсы IT и английского языка.',
      en: 'A creative promotional web concept for Ilmhub Learning Center spotlighting IT courses and English mastery.'
    },
    longDescription: {
      uz: 'O‘zim tahsil olayotgan markaz uchun yaratgan minnatdorlik va ijodiy konseptim. Kurslar tavsifi, mentorlar va o‘quv jarayonini zamonaviy dizayn uslubida namoyish etadi.',
      ru: 'Творческий концепт в благодарность учебному центру, где я занимаюсь. Презентует учебные направления, практические задания и ценности центра.',
      en: 'A conceptual showcase created out of appreciation for my learning center. Highlights curriculum pillars, student peer culture, and hands-on coding exercises.'
    },
    tags: ['Web Design', 'Landing Concept', 'Brand Identity', 'CSS Grid'],
    features: {
      uz: [
        'English va IT kurslari haqida to‘liq ma\'lumot',
        'Amaliy darslar va uy vazifalari bo‘limi',
        'Zamonaviy kartalar va qulay navigatsiya',
        'Ro‘yxatdan o‘tish interfeysi konsepti'
      ],
      ru: [
        'Подробная информация о курсах IT и English',
        'Блок практических занятий и домашних заданий',
        'Современный адаптивный дизайн карточек',
        'Форма заявки на обучение (концепт)'
      ],
      en: [
        'Comprehensive breakdown of IT and English curricula',
        'Classroom environment and homework support showcase',
        'Fluid responsive card layouts and modern typography',
        'Interactive course inquiry concept'
      ]
    },
    learnings: {
      uz: [
        'Landing page arxitekturasi va konversiya elementlari',
        'Brend uslubiga mos ranglar va shriftlarni tanlash',
        'Katta hajmdagi ma\'lumotlarni ixcham joylashtirish'
      ],
      ru: [
        'Архитектура продающих страниц и структура блоков',
        'Подбор фирменной палитры и шрифтовых пар',
        'Эргономичная подача образовательного контента'
      ],
      en: [
        'Conversion-oriented page architecture',
        'Brand color harmony and font balance',
        'Presenting educational value clearly without fluff'
      ]
    },
    githubUrl: 'https://github.com',
    demoUrl: '#demo-ilmhub',
    color: '#ec4899',
    accentGradient: 'from-pink-500 to-rose-700',
    iconName: 'GraduationCap',
    hasInteractiveDemo: true
  }
];
