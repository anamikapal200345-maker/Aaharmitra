import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { ASSESSMENT_QUESTIONS, QuestionOption } from '../data/assessmentData';

interface QuestionnaireViewProps {
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  currentIndex: number;
  onSelectAnswer: (questionId: string, optionId: 'A' | 'B' | 'C' | 'D') => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function QuestionnaireView({
  answers,
  currentIndex,
  onSelectAnswer,
  onPrevious,
  onNext,
}: QuestionnaireViewProps) {
  const [showSelectHint, setShowSelectHint] = useState(false);

  const totalQuestions = ASSESSMENT_QUESTIONS.length;
  const question = ASSESSMENT_QUESTIONS[currentIndex];
  const selectedOption = answers[question.id];
  const isLastQuestion = currentIndex === totalQuestions - 1;
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  useEffect(() => {
    setShowSelectHint(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const handleNextClick = () => {
    if (!selectedOption) {
      setShowSelectHint(true);
      return;
    }
    onNext();
  };

  const handleOptionPick = (option: QuestionOption) => {
    setShowSelectHint(false);
    onSelectAnswer(question.id, option.id);
  };

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-5 pb-28 sm:pt-10 sm:pb-16">
      {/* Progress Section */}
      <section aria-label="Assessment progress" className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between gap-4 text-xs sm:text-sm text-[#4A564C] mb-2.5">
          <div className="font-medium text-[#1B4332] tabular-nums">
            Question {currentIndex + 1} of {totalQuestions}
          </div>
          <div className="flex items-center gap-2 text-right">
            <span>{question.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums font-medium text-[#1B4332]">{progressPercent}%</span>
          </div>
        </div>

        <div
          className="w-full h-2.5 bg-[#E6DEC9] rounded-full overflow-hidden"
          role="progressbar"
          aria-valuenow={progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`Question ${currentIndex + 1} of ${totalQuestions}`}
        >
          <div
            className="h-full bg-[#1B4332] rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </section>

      {/* Single Question Card */}
      <section
        key={question.id}
        className="bg-[#FFFDF9] border border-[#E2DAC8] rounded-2xl p-5 sm:p-8"
      >
        <p className="text-xs font-medium text-[#7A6128]">
          {question.sanskritTerm}
        </p>

        <h1 className="font-display text-xl sm:text-2xl lg:text-[28px] font-semibold text-[#1D2820] leading-snug mt-2 text-balance">
          {question.prompt}
        </h1>

        <p className="text-sm text-[#525E54] mt-2 leading-relaxed">
          {question.helperText}
        </p>

        {/* Exactly 4 Multiple-Choice Options */}
        <div
          role="radiogroup"
          aria-label={question.prompt}
          className="mt-6 space-y-3"
        >
          {question.options.map((option) => {
            const isSelected = selectedOption === option.id;
            return (
              <button
                key={option.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleOptionPick(option)}
                className={`w-full min-h-[64px] text-left rounded-2xl p-4 sm:p-5 border transition-all duration-150 flex items-start gap-3.5 cursor-pointer active:scale-[0.995] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4332] ${
                  isSelected
                    ? 'bg-[#EEF5F0] border-[#1B4332] ring-1 ring-[#1B4332]'
                    : 'bg-[#FAF6EE]/65 border-[#E2DAC8] hover:border-[#B6C5B9] hover:bg-[#F5EFE2]'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5 transition-colors ${
                    isSelected
                      ? 'bg-[#1B4332] text-[#FAF6EE]'
                      : 'bg-[#EAE2D0] text-[#354238]'
                  }`}
                >
                  {isSelected ? <Check className="w-4 h-4" aria-hidden="true" /> : option.id}
                </span>

                <span className="flex-1 min-w-0">
                  <span className="block text-sm sm:text-base font-semibold text-[#1D2820] leading-snug">
                    {option.label}
                  </span>
                  <span className="block text-xs sm:text-sm text-[#525E54] mt-1 leading-relaxed">
                    {option.detail}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {showSelectHint && (
          <p
            role="alert"
            className="mt-4 text-sm font-medium text-[#8C3B2B] bg-[#FBF1EE] border border-[#E7C8BF] rounded-xl px-4 py-2.5"
          >
            Please choose one of the four options above before continuing.
          </p>
        )}

        {/* Desktop inline navigation */}
        <div className="hidden sm:flex items-center justify-between gap-4 mt-8 pt-6 border-t border-[#EAE2D0]">
          <button
            type="button"
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className={`min-h-[48px] px-5 py-2.5 rounded-xl font-medium text-sm flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 ${
              currentIndex === 0
                ? 'text-[#9DA59E] bg-[#F3ECE0] cursor-not-allowed'
                : 'text-[#1B4332] bg-[#EFE8D8] hover:bg-[#E4DAC4] cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={handleNextClick}
            className="min-h-[48px] px-6 py-2.5 rounded-xl bg-[#1B4332] hover:bg-[#143326] text-[#FAF6EE] font-semibold text-sm flex items-center gap-2 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>{isLastQuestion ? 'View Results' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Android Thumb-Zone Sticky Bottom Action Bar (mobile only) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF6EE]/95 backdrop-blur-md border-t border-[#E2DAC8] px-4 pt-2.5 pb-safe">
        <div className="grid grid-cols-2 gap-3 max-w-3xl mx-auto">
          <button
            type="button"
            onClick={onPrevious}
            disabled={currentIndex === 0}
            className={`min-h-[48px] px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors ${
              currentIndex === 0
                ? 'text-[#9DA59E] bg-[#F3ECE0] cursor-not-allowed'
                : 'text-[#1B4332] bg-[#EFE8D8] active:bg-[#E2D6BE] cursor-pointer'
            }`}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Previous</span>
          </button>

          <button
            type="button"
            onClick={handleNextClick}
            className="min-h-[48px] px-4 rounded-xl bg-[#1B4332] active:bg-[#143326] text-[#FAF6EE] font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>{isLastQuestion ? 'View Results' : 'Next'}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </main>
  );
}
