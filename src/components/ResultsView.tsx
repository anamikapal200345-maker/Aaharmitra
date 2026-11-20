import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Leaf,
  Printer,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { ASSESSMENT_QUESTIONS, AssessmentProfile } from '../data/assessmentData';
import { TraditionalDivider } from './AyurvedicArt';

interface ResultsViewProps {
  profile: AssessmentProfile;
  answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  onRetake: () => void;
  onReturnHome: () => void;
}

export function ResultsView({
  profile,
  answers,
  onRetake,
  onReturnHome,
}: ResultsViewProps) {
  const [showReview, setShowReview] = useState(false);

  const getStatusStyle = (status: 'Balanced' | 'Moderate' | 'Needs Care') => {
    if (status === 'Balanced') {
      return {
        bar: 'bg-[#1B4332]',
        text: 'text-[#1B4332]',
      };
    }
    if (status === 'Moderate') {
      return {
        bar: 'bg-[#A67B2E]',
        text: 'text-[#825F1E]',
      };
    }
    return {
      bar: 'bg-[#9E4733]',
      text: 'text-[#8C3B2B]',
    };
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-16 sm:pt-10">
      {/* Primary Profile Overview */}
      <section className="bg-[#1B4332] text-[#FAF6EE] rounded-2xl p-6 sm:p-9">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#C8E0D0]">
              {profile.sanskritName} · Personalized Aahar Assessment
            </p>
            <h1 className="font-display text-2xl sm:text-4xl font-semibold mt-2 leading-tight text-balance">
              {profile.title}
            </h1>
            <p className="text-sm sm:text-base text-[#E2EDE6] mt-3 leading-relaxed">
              {profile.subtitle}
            </p>
          </div>

          <div className="bg-[#143326] border border-[#35644C] rounded-2xl p-4 sm:p-5 shrink-0 min-w-[175px]">
            <p className="text-xs text-[#C8E0D0]">Overall Balance Index</p>
            <div className="flex items-baseline gap-1.5 mt-1">
              <span className="font-display text-3xl sm:text-4xl font-semibold tabular-nums">
                {profile.overallScore}
              </span>
              <span className="text-sm text-[#B7D1C0] tabular-nums">/ 100</span>
            </div>
            <p className="text-xs font-medium text-[#E5C98B] mt-1.5">
              {profile.overallStatus}
            </p>
          </div>
        </div>

        <p className="mt-6 pt-5 border-t border-[#325E48] text-sm sm:text-base text-[#EAEFE9] leading-relaxed">
          {profile.summary}
        </p>
      </section>

      {/* Four Dimension Breakdown */}
      <section aria-labelledby="dimensions-heading" className="mt-8">
        <div className="mb-4">
          <h2 id="dimensions-heading" className="font-display text-xl sm:text-2xl font-semibold text-[#1D2820]">
            Your Four Ayurvedic Pillars
          </h2>
          <p className="text-sm text-[#525E54] mt-1">
            Each score reflects your responses across quantity, digestive fire, eating habits, and post-meal vitality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {profile.dimensions.map((dim) => {
            const style = getStatusStyle(dim.statusLabel);
            return (
              <div
                key={dim.key}
                className="bg-[#FFFDF9] border border-[#E2DAC8] rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-[#7A6128]">{dim.sanskrit}</p>
                    <h3 className="font-display text-lg font-semibold text-[#1D2820] mt-0.5">
                      {dim.label}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-xl font-semibold text-[#1D2820] tabular-nums">
                      {dim.score}%
                    </span>
                    <span className={`block text-xs font-semibold ${style.text}`}>
                      {dim.statusLabel}
                    </span>
                  </div>
                </div>

                <div className="w-full h-2 bg-[#EDE5D5] rounded-full overflow-hidden mt-3.5">
                  <div
                    className={`h-full rounded-full ${style.bar}`}
                    style={{ width: `${dim.score}%` }}
                  />
                </div>

                <p className="text-xs sm:text-sm text-[#4A564C] mt-3 leading-relaxed">
                  {dim.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ayurvedic Explanation */}
      <section className="mt-8 bg-[#F3ECE0] border border-[#DDD3BD] rounded-2xl p-6 sm:p-7">
        <p className="text-xs font-medium text-[#7A6128]">Ayurvedic Perspective</p>
        <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#1D2820] mt-1">
          How Ayurveda Interprets Your Pattern
        </h2>
        <p className="text-sm sm:text-base text-[#374339] leading-relaxed mt-3">
          {profile.ayurvedicExplanation}
        </p>
      </section>

      {/* Personalized Answer-Driven Insights */}
      <section aria-labelledby="insights-heading" className="mt-8">
        <div className="mb-4">
          <h2 id="insights-heading" className="font-display text-xl sm:text-2xl font-semibold text-[#1D2820]">
            Personalized Observations &amp; Suggestions
          </h2>
          <p className="text-sm text-[#525E54] mt-1">
            Tailored directly from the mealtime habits and digestive cues you reported.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {profile.personalizedInsights.map((insight) => (
            <article
              key={insight.title}
              className="bg-[#FFFDF9] border border-[#E2DAC8] rounded-2xl p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-lg font-semibold text-[#1B4332]">
                  {insight.title}
                </h3>
                <p className="text-sm text-[#4A564C] leading-relaxed mt-2">
                  {insight.explanation}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#EDE5D5]">
                <p className="text-xs font-semibold text-[#7A6128] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Practical Step</span>
                </p>
                <p className="text-sm text-[#1D2820] leading-relaxed mt-1">
                  {insight.suggestion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <TraditionalDivider className="my-9" />

      {/* Daily Routine & Herbal Support */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 bg-[#FFFDF9] border border-[#E2DAC8] rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-[#1D2820]">
            Daily Aahar Vidhi Checklist
          </h2>
          <p className="text-sm text-[#525E54] mt-1">
            Simple adjustments you can begin at your very next meal.
          </p>

          <ul className="mt-4 space-y-3">
            {profile.dailyRoutineSuggestions.map((step) => (
              <li key={step} className="flex items-start gap-3 text-sm text-[#2A382D] leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-1" aria-hidden="true" />
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 bg-[#F3ECE0] border border-[#DDD3BD] rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-[#1D2820]">
            Supportive Herbs &amp; Spices
          </h2>
          <p className="text-sm text-[#525E54] mt-1">
            Traditional culinary botanicals aligned with your assessment.
          </p>

          <div className="mt-4 space-y-3.5">
            {profile.herbAndSpiceSupport.map((herb) => (
              <div
                key={herb.name}
                className="bg-[#FAF6EE] border border-[#E2DAC8] rounded-xl p-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#1B4332] shrink-0" aria-hidden="true" />
                    <h3 className="font-semibold text-sm text-[#1D2820]">{herb.name}</h3>
                  </div>
                  <span className="text-xs text-[#7A6128]">{herb.sanskrit}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4A564C] mt-1.5 leading-relaxed">
                  {herb.role} <span className="text-[#1D2820] font-medium">{herb.howToUse}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Answers Accordion */}
      <section className="no-print mt-8 bg-[#FFFDF9] border border-[#E2DAC8] rounded-2xl overflow-hidden">
        <button
          type="button"
          onClick={() => setShowReview((prev) => !prev)}
          aria-expanded={showReview}
          className="w-full min-h-[56px] px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-[#F7F1E6] transition-colors cursor-pointer"
        >
          <div>
            <span className="font-display text-lg font-semibold text-[#1D2820] block">
              Review Your 10 Responses
            </span>
            <span className="text-xs text-[#525E54]">
              Inspect each question and your selected answer
            </span>
          </div>
          {showReview ? (
            <ChevronUp className="w-5 h-5 text-[#1B4332] shrink-0" aria-hidden="true" />
          ) : (
            <ChevronDown className="w-5 h-5 text-[#1B4332] shrink-0" aria-hidden="true" />
          )}
        </button>

        {showReview && (
          <div className="border-t border-[#E2DAC8] divide-y divide-[#EDE5D5] px-5 sm:px-6">
            {ASSESSMENT_QUESTIONS.map((q) => {
              const chosen = q.options.find((o) => o.id === answers[q.id]);
              return (
                <div key={q.id} className="py-4">
                  <p className="text-xs font-medium text-[#7A6128]">
                    Question {q.number} · {q.category}
                  </p>
                  <p className="text-sm font-semibold text-[#1D2820] mt-1">{q.prompt}</p>
                  <p className="text-sm text-[#1B4332] mt-1.5">
                    Selected ({chosen?.id}): {chosen?.label}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Action Buttons */}
      <section className="no-print mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onRetake}
            className="min-h-[48px] px-6 py-3 rounded-xl bg-[#1B4332] hover:bg-[#143326] text-[#FAF6EE] font-semibold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" aria-hidden="true" />
            <span>Retake Assessment</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="min-h-[48px] px-5 py-3 rounded-xl bg-[#EFE8D8] hover:bg-[#E4DAC4] text-[#1B4332] font-medium text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" aria-hidden="true" />
            <span>Print / Save Summary</span>
          </button>
        </div>

        <button
          type="button"
          onClick={onReturnHome}
          className="min-h-[48px] px-5 py-3 rounded-xl border border-[#DDD3BD] hover:bg-[#F3ECE0] text-[#354238] font-medium text-sm transition-colors cursor-pointer"
        >
          Back to Overview
        </button>
      </section>

      {/* Educational Disclaimer */}
      <aside
        aria-label="Educational disclaimer"
        className="mt-8 bg-[#F3ECE0] border border-[#DDD3BD] rounded-2xl p-5 sm:p-6 flex items-start gap-3.5"
      >
        <AlertCircle className="w-5 h-5 text-[#7A6128] shrink-0 mt-0.5" aria-hidden="true" />
        <div className="text-xs sm:text-sm text-[#435045] leading-relaxed">
          <p className="font-semibold text-[#1D2820]">Educational Disclaimer — Not a Medical Diagnosis</p>
          <p className="mt-1">
            AaharMitra is designed purely for educational self-reflection based on classical Ayurvedic concepts of Aahar Matra, Agni, and mindful eating habits. It does not diagnose, treat, cure, or prevent any medical condition. If you experience persistent digestive pain, unexplained weight changes, severe acidity, or chronic health concerns, please consult a qualified healthcare physician or certified Ayurvedic Vaidya.
          </p>
        </div>
      </aside>
    </main>
  );
}
