import React from 'react';
import { ArrowRight, Flame, Leaf, Scale, Sparkles, Utensils } from 'lucide-react';
import {
  AaharMitraLogo,
  HeroThaliIllustration,
  KukshiDiagram,
  TraditionalDivider,
} from './AyurvedicArt';

interface HomeViewProps {
  onStartAssessment: () => void;
}

const PILLARS = [
  {
    icon: Scale,
    title: '01. Aahar Matra (Right Quantity)',
    sanskrit: 'Matravat Aahar',
    description:
      'Discover whether your typical portions leave room for smooth digestion or tip toward excess (Ati-Matra) or insufficiency (Hina-Matra).',
  },
  {
    icon: Flame,
    title: '02. Agni & Digestive Comfort',
    sanskrit: 'Jatharagni · Pachana',
    description:
      'Evaluate how clearly you feel natural hunger, how smoothly food settles, and whether post-meal energy stays light or turns sluggish.',
  },
  {
    icon: Utensils,
    title: '03. Eating Habits & Effects',
    sanskrit: 'Aahar Vidhi',
    description:
      'Reflect on meal timing, eating speed, screen distractions, water temperature, and how food quantity affects your daily vitality.',
  },
];

const HERB_CARDS = [
  {
    name: 'Fresh Ginger',
    sanskrit: 'Adraka · Zingiber officinale',
    note: 'Traditional pre-meal Deepana (appetite kindler) used with a pinch of rock salt to awaken sluggish Agni.',
  },
  {
    name: 'Holy Basil',
    sanskrit: 'Tulsi · Ocimum tenuiflorum',
    note: 'Aromatic sattvic leaf brewed warm between meals to promote digestive clarity and lightness.',
  },
  {
    name: 'Turmeric & Cumin',
    sanskrit: 'Haridra & Jiraka',
    note: 'Everyday kitchen spices tempered in warm ghee to ease bloating and help transform dense foods cleanly.',
  },
  {
    name: 'Fennel Seeds',
    sanskrit: 'Saunf · Foeniculum vulgare',
    note: 'Cooling post-meal digestive chewed gently after lunch or dinner to calm excess acidity and gas.',
  },
];

export function HomeView({ onStartAssessment }: HomeViewProps) {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <section
        id="aahar-matra"
        className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-12 sm:pt-12 sm:pb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <AaharMitraLogo className="w-11 h-11 shrink-0" />
              <div className="text-xs sm:text-sm font-medium text-[#526055]">
                <span>Ayurvedic Aahar Assessment</span>
                <span aria-hidden="true" className="mx-2">·</span>
                <span>Swasthavritta Guide</span>
              </div>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1B4332] leading-[1.14] tracking-tight text-balance">
              Understand Your Food Quantity &amp; Digestive Fire Through Ayurveda
            </h1>

            <p className="mt-4 sm:mt-5 text-base sm:text-lg text-[#435045] leading-relaxed max-w-xl">
              In Ayurveda, wellness begins not only with <em className="italic font-medium text-[#1D2820]">what</em> you eat, but{' '}
              <strong className="font-semibold text-[#1B4332]">Aahar Matra</strong> — eating the right quantity in harmony with your{' '}
              <strong className="font-semibold text-[#1B4332]">Agni</strong> (digestive fire) and mindful daily rhythm.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={onStartAssessment}
                className="min-h-[52px] px-7 py-3.5 rounded-xl bg-[#1B4332] hover:bg-[#143326] active:scale-[0.99] text-[#FAF6EE] font-semibold text-base flex items-center justify-center gap-2.5 transition-all cursor-pointer shadow-sm"
              >
                <span>Start Assessment</span>
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="text-xs sm:text-sm text-[#525E54] flex items-center justify-center sm:justify-start gap-2">
                <span>10 Questions</span>
                <span aria-hidden="true">·</span>
                <span>4 Options Each</span>
                <span aria-hidden="true">·</span>
                <span>3 Min Self-Check</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <HeroThaliIllustration />
          </div>
        </div>
      </section>

      {/* Introduction to Ayurvedic Aahar Matra & Interactive Kukshi Explorer */}
      <section
        id="kukshi-guide"
        className="bg-[#F3ECE0] border-y border-[#E2DAC8] py-12 sm:py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-8 sm:mb-10">
            <p className="text-xs sm:text-sm font-medium text-[#7A6128]">
              Classical Principle · Charaka Samhita (Matrashitiya Adhyaya)
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2820] mt-1.5 text-balance">
              What Is Ayurvedic Aahar Matra?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#465348] leading-relaxed">
              <strong className="font-semibold text-[#1D2820]">Matravat Aahar</strong> means eating in a measure suited to your digestive capacity at that meal. Too much food (<em className="italic">Ati-Matra</em>) crowds the stomach and leaves sluggish residue, while too little (<em className="italic">Hina-Matra</em>) weakens tissue nourishment and scatters energy. Explore the traditional four-part stomach balance below:
            </p>
          </div>

          <KukshiDiagram />
        </div>
      </section>

      {/* Three Pillars Assessed */}
      <section
        id="assessment-pillars"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
      >
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-xs sm:text-sm font-medium text-[#2D6A4F]">
            Inside the Assessment
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2820] mt-1.5 text-balance">
            Three Dimensions of Everyday Digestion
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#4A564C] leading-relaxed">
            Answer ten straightforward questions—one per screen—to receive tailored insights on portion balance, digestive fire, and practical habits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-[#FFFDF9] border border-[#E2DAC8] rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#E8EFE9] text-[#1B4332] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <p className="text-xs font-medium text-[#7A6128]">{pillar.sanskrit}</p>
                  <h3 className="font-display text-xl font-semibold text-[#1D2820] mt-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#4A564C] leading-relaxed mt-2.5">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <TraditionalDivider />
      </div>

      {/* Herbs & Traditional Elements */}
      <section
        id="herbs-tradition"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-medium text-[#2D6A4F]">
              Ayurvedic Botanical Allies
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1D2820] mt-1.5 text-balance">
              Time-Tested Herbs &amp; Spices for Agni
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#525E54] max-w-sm">
            Gentle kitchen botanicals paired with mindful portions help digestion work effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HERB_CARDS.map((herb) => (
            <div
              key={herb.name}
              className="bg-[#F3ECE0] border border-[#DDD3BD] rounded-2xl p-5"
            >
              <div className="flex items-center gap-2 text-[#1B4332] mb-2">
                <Leaf className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span className="text-xs font-medium text-[#7A6128]">{herb.sanskrit}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-[#1D2820]">
                {herb.name}
              </h3>
              <p className="text-sm text-[#4A564C] leading-relaxed mt-2">
                {herb.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Call-to-Action & Disclaimer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1B4332] text-[#FAF6EE] rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#C8E0D0] text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Personalized Self-Reflection</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mt-2 text-balance">
              Ready to Check Your Aahar Matra &amp; Digestive Rhythm?
            </h2>
            <p className="text-sm sm:text-base text-[#D8E5DC] mt-2 leading-relaxed">
              Take three quiet minutes to reflect on your everyday meals and receive customized Ayurvedic explanations and practical daily suggestions.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartAssessment}
            className="min-h-[52px] px-7 py-3.5 rounded-xl bg-[#FAF6EE] hover:bg-[#EFE8D8] active:scale-[0.99] text-[#1B4332] font-semibold text-base flex items-center justify-center gap-2.5 transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Start Assessment</span>
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <footer className="mt-8 pt-6 border-t border-[#E2DAC8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5A665C]">
          <p>
            AaharMitra – Ayurvedic Aahar Assessment · Traditional wellness education, not a medical diagnosis.
          </p>
          <p>Designed for mindful everyday living.</p>
        </footer>
      </section>
    </main>
  );
}
