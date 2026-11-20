/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import { HomeView } from './components/HomeView';
import { QuestionnaireView } from './components/QuestionnaireView';
import { ResultsView } from './components/ResultsView';
import { AppView, TopBar } from './components/TopBar';
import { ASSESSMENT_QUESTIONS, evaluateAssessment } from './data/assessmentData';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});

  const profile = useMemo(() => {
    if (currentView !== 'results') return null;
    return evaluateAssessment(answers);
  }, [answers, currentView]);

  const handleStartAssessment = () => {
    setAnswers({});
    setCurrentIndex(0);
    setCurrentView('questionnaire');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectAnswer = (questionId: string, optionId: 'A' | 'B' | 'C' | 'D') => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    if (currentIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentView('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#1D2820] flex flex-col">
      <TopBar
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onStartAssessment={handleStartAssessment}
        onScrollSection={handleScrollSection}
      />

      <div className="flex-1">
        {currentView === 'home' && (
          <HomeView onStartAssessment={handleStartAssessment} />
        )}

        {currentView === 'questionnaire' && (
          <QuestionnaireView
            answers={answers}
            currentIndex={currentIndex}
            onSelectAnswer={handleSelectAnswer}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        )}

        {currentView === 'results' && profile && (
          <ResultsView
            profile={profile}
            answers={answers}
            onRetake={handleStartAssessment}
            onReturnHome={handleNavigateHome}
          />
        )}
      </div>
    </div>
  );
}

