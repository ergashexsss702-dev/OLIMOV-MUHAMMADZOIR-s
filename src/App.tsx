import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Ilmhub } from './sections/Ilmhub';
import { Skills } from './sections/Skills';
import { TechStack } from './sections/TechStack';
import { Projects } from './sections/Projects';
import { CoderBoyCode } from './sections/CoderBoyCode';
import { Timeline } from './sections/Timeline';
import { EnglishLearning } from './sections/EnglishLearning';
import { WhatICreate } from './sections/WhatICreate';
import { GitHubSection } from './sections/GitHubSection';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-400 transition-colors duration-200">
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Ilmhub />
            <Skills />
            <TechStack />
            <Projects />
            <CoderBoyCode />
            <Timeline />
            <EnglishLearning />
            <WhatICreate />
            <GitHubSection />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
