import React from 'react';
import { AaharMitraLogo } from './AyurvedicArt';

export type AppView = 'home' | 'questionnaire' | 'results';

interface TopBarProps {
  currentView: AppView;
  onNavigateHome: () => void;
  onStartAssessment: () => void;
  onScrollSection: (sectionId: string) => void;
}

export function TopBar({
  currentView,
  onNavigateHome,
  onStartAssessment,
  onScrollSection,
}: TopBarProps) {
  const isHome = currentView === 'home';
  const isQuestionnaire = currentView === 'questionnaire';

  return (
    <header
      className={`no-print z-30 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E2DAC8] ${
        isQuestionnaire ? 'relative' : 'sticky top-0'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <button
          type="button"
          onClick={onNavigateHome}
          className="flex items-center gap-2.5 text-left whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] rounded-lg"
        >
          <AaharMitraLogo className="w-8 h-8 shrink-0" />
          <span className="font-display text-lg sm:text-xl font-semibold tracking-tight text-[#1B4332] whitespace-nowrap shrink-0">
            AaharMitra
          </span>
        </button>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#465348]"
        >
          <button
            type="button"
            onClick={() => (isHome ? onScrollSection('aahar-matra') : onNavigateHome())}
            className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Aahar Matra
          </button>
          <button
            type="button"
            onClick={() => (isHome ? onScrollSection('kukshi-guide') : onNavigateHome())}
            className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Kukshi Ratio
          </button>
          <button
            type="button"
            onClick={() => (isHome ? onScrollSection('assessment-pillars') : onNavigateHome())}
            className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            What We Assess
          </button>
          <button
            type="button"
            onClick={() => (isHome ? onScrollSection('herbs-tradition') : onNavigateHome())}
            className="hover:text-[#1B4332] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Herbal Wisdom
          </button>
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center shrink-0">
          {currentView === 'questionnaire' ? (
            <button
              type="button"
              onClick={onNavigateHome}
              className="min-h-[40px] px-4 py-2 text-xs sm:text-sm font-medium text-[#1B4332] bg-[#EFE8D8] hover:bg-[#E4DAC4] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Exit Quiz
            </button>
          ) : (
            <button
              type="button"
              onClick={onStartAssessment}
              className="min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold text-[#FAF6EE] bg-[#1B4332] hover:bg-[#143326] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {currentView === 'results' ? 'Retake Quiz' : 'Start Assessment'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
