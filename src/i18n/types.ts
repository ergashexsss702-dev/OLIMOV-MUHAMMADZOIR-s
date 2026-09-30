export type Language = 'uz' | 'ru' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    journey: string;
    education: string;
    whatICreate: string;
    contact: string;
  };
  hero: {
    badge: string;
    greeting: string;
    name: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    downloadCV: string;
    cvModalTitle: string;
    cvModalText: string;
    cvModalClose: string;
    floating: {
      frontend: string;
      ai: string;
      web: string;
      creative: string;
    };
  };
  about: {
    badge: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    interestsTitle: string;
    stats: {
      learningLabel: string;
      learningValue: string;
      projectsLabel: string;
      projectsValue: string;
      curiosityLabel: string;
      curiosityValue: string;
      locationLabel: string;
      locationValue: string;
    };
  };
  ilmhub: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    pillars: {
      english: { title: string; desc: string };
      it: { title: string; desc: string };
      programming: { title: string; desc: string };
      practice: { title: string; desc: string };
    };
    visitBadge: string;
  };
  skills: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      all: string;
      programming: string;
      creative: string;
      ai: string;
      english: string;
      computer: string;
    };
    levels: {
      learning: string;
      familiar: string;
      exploring: string;
    };
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
    legend: {
      learning: string;
      familiar: string;
      exploring: string;
    };
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      web: string;
      ai: string;
      education: string;
      creative: string;
      apps: string;
      experiments: string;
    };
    card: {
      viewDetails: string;
      liveDemo: string;
      github: string;
      conceptBadge: string;
    };
    modal: {
      keyFeatures: string;
      learningOutcomes: string;
      techUsed: string;
      category: string;
      type: string;
      openDemo: string;
      sourceCode: string;
      close: string;
    };
  };
  coderBoy: {
    badge: string;
    title: string;
    loopTitle: string;
    philosophyTitle: string;
    philosophyText: string;
  };
  terminal: {
    title: string;
    subtitle: string;
    placeholder: string;
    helpHint: string;
    quickCommands: string;
  };
  journey: {
    badge: string;
    title: string;
    subtitle: string;
    statusCurrent: string;
  };
  english: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    whyMatters: string;
    pillars: {
      cambridge: string;
      vocab: string;
      grammar: string;
      speaking: string;
      reading: string;
      writing: string;
    };
  };
  whatICreate: {
    badge: string;
    title: string;
    subtitle: string;
  };
  github: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    note: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      topic: string;
      message: string;
      send: string;
      sending: string;
      successTitle: string;
      successMsg: string;
      errorMsg: string;
    };
    direct: {
      title: string;
      subtitle: string;
      copyEmail: string;
      copied: string;
      location: string;
      socialsTitle: string;
    };
  };
  footer: {
    tagline: string;
    motto: string;
    rights: string;
    craftedWith: string;
    backToTop: string;
  };
}
