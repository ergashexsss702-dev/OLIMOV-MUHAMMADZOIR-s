import React, { useEffect, useState } from 'react';
import { ProjectItem } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { siteConfig } from '../config/site';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Sparkles,
  Layers,
  Code2,
  Play,
  RotateCcw,
  Plus,
  Trash2,
  Wallet,
  Car,
  Lightbulb,
  BookOpen,
  Volume2
} from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  // Interactive Demo State: Family Budget
  const [budgetItems, setBudgetItems] = useState([
    { id: 1, name: 'Ilmhub oylik to‘lov', amount: 450000, category: 'Ta\'lim' },
    { id: 2, name: 'Dasturlash kitoblari', amount: 120000, category: 'Kitoblar' },
    { id: 3, name: 'Internet & Wi-Fi', amount: 150000, category: 'Kommunal' },
  ]);
  const [newExpenseName, setNewExpenseName] = useState('');
  const [newExpenseAmount, setNewExpenseAmount] = useState('');

  // Interactive Demo State: UZB Parking
  const [selectedCar, setSelectedCar] = useState('Cobalt');
  const [engineStarted, setEngineStarted] = useState(false);
  const [parkingScore, setParkingScore] = useState(100);

  // Interactive Demo State: English Tools
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const englishCards = [
    { word: 'Algorithm', uz: 'Algoritm — qat\'iy qoidalar ketma-ketligi', ru: 'Алгоритм — точная последовательность шагов' },
    { word: 'Repository', uz: 'Repozitoriy — loyiha kodlari saqlanadigan joy', ru: 'Репозиторий — место хранения кода проекта' },
    { word: 'Responsive', uz: 'Moslashuvchan — barcha ekranlarga mos dizayn', ru: 'Адаптивный — подстраивающийся под любой экран' },
    { word: 'Framework', uz: 'Freymvork — tayyor dasturlash poydevori', ru: 'Фреймворк — готовая архитектурная основа' },
  ];

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const totalBudget = budgetItems.reduce((acc, item) => acc + item.amount, 0);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExpenseName.trim() || !newExpenseAmount) return;
    const item = {
      id: Date.now(),
      name: newExpenseName.trim(),
      amount: parseInt(newExpenseAmount, 10) || 0,
      category: 'Xarajat'
    };
    setBudgetItems([item, ...budgetItems]);
    setNewExpenseName('');
    setNewExpenseAmount('');
  };

  const handleRemoveExpense = (id: number) => {
    setBudgetItems(budgetItems.filter(item => item.id !== id));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl my-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/50">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                {project.type[language]}
              </span>
              <span className="text-xs font-mono text-slate-400 uppercase">
                {project.category}
              </span>
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {project.title[language]}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Interactive Simulation Container */}
          {project.id === 'family-budget' && (
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-emerald-500/30 shadow-inner">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Interactive Mini-Demo: Family Budget
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Jami: <span className="font-bold text-emerald-400">{totalBudget.toLocaleString()} UZS</span>
                </div>
              </div>

              {/* Add form */}
              <form onSubmit={handleAddExpense} className="flex flex-col sm:flex-row gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Xarajat nomi..."
                  value={newExpenseName}
                  onChange={(e) => setNewExpenseName(e.target.value)}
                  className="flex-1 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
                />
                <input
                  type="number"
                  placeholder="Summa (UZS)..."
                  value={newExpenseAmount}
                  onChange={(e) => setNewExpenseAmount(e.target.value)}
                  className="w-full sm:w-32 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium flex items-center justify-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Qo‘shish</span>
                </button>
              </form>

              {/* Items List */}
              <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                {budgetItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 text-xs"
                  >
                    <span className="font-medium truncate mr-2">{item.name}</span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-mono text-emerald-300">
                        {item.amount.toLocaleString()} UZS
                      </span>
                      <button
                        type="button"
                        onClick={() => handleRemoveExpense(item.id)}
                        className="text-slate-400 hover:text-red-400"
                        title="O‘chirish"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.id === 'uzb-parking' && (
            <div className="p-5 rounded-2xl bg-slate-950 text-white border border-cyan-500/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    UZB Parking: Game HUD Preview
                  </span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800 text-cyan-300">
                  Level 1 · Namangan Central
                </span>
              </div>

              {/* Car Selection */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {['Cobalt', 'Gentra', 'Tracker'].map((car) => (
                  <button
                    key={car}
                    onClick={() => setSelectedCar(car)}
                    className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                      selectedCar === car
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    🚗 {car}
                  </button>
                ))}
              </div>

              {/* HUD Controls */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setEngineStarted(!engineStarted)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-colors flex items-center gap-1.5 ${
                      engineStarted
                        ? 'bg-red-500/20 border border-red-500 text-red-300'
                        : 'bg-emerald-500 text-white hover:bg-emerald-600'
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{engineStarted ? 'STOP ENGINE' : 'START ENGINE'}</span>
                  </button>
                  <span className="text-xs font-mono text-slate-400">
                    Status: {engineStarted ? '🟢 Idling (850 RPM)' : '⚪ Off'}
                  </span>
                </div>
                <div className="text-xs font-mono text-slate-300">
                  Accuracy: <span className="text-cyan-400 font-bold">{parkingScore}%</span>
                </div>
              </div>
            </div>
          )}

          {project.id === 'english-learning-tools' && (
            <div className="p-5 rounded-2xl bg-slate-900 text-white border border-blue-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                    Interactive Flashcard Demo
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Card {activeCardIndex + 1} of {englishCards.length}
                </span>
              </div>

              <div
                onClick={() => setIsFlipped(!isFlipped)}
                className="cursor-pointer min-h-[120px] rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-400/60 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 select-none"
              >
                {!isFlipped ? (
                  <>
                    <span className="text-2xl font-bold font-mono text-blue-300 mb-1">
                      {englishCards[activeCardIndex].word}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      (Kartani bosib tarjimasini ko‘ring)
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-sm font-semibold text-emerald-300 mb-1">
                      {language === 'ru'
                        ? englishCards[activeCardIndex].ru
                        : englishCards[activeCardIndex].uz}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      (Qayta bosib oldinga o‘ting)
                    </span>
                  </>
                )}
              </div>

              <div className="flex justify-between items-center mt-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsFlipped(false);
                    setActiveCardIndex((prev) => (prev > 0 ? prev - 1 : englishCards.length - 1));
                  }}
                  className="px-3 py-1 rounded bg-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-700"
                >
                  ← Oldingi
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsFlipped(false);
                    setActiveCardIndex((prev) => (prev + 1) % englishCards.length);
                  }}
                  className="px-3 py-1 rounded bg-blue-600 text-xs font-mono text-white hover:bg-blue-500"
                >
                  Keyingi →
                </button>
              </div>
            </div>
          )}

          {/* Description */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2">
              Loyiha haqida
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.longDescription[language]}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-3">
              {t.projects.modal.keyFeatures}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features[language].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-3">
              {t.projects.modal.learningOutcomes}
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              {project.learnings[language].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Tags */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-mono mb-2">
              {t.projects.modal.techUsed}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/50">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={siteConfig.github || project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 py-1.5 px-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t.projects.modal.sourceCode}</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-semibold transition-colors"
          >
            {t.projects.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
