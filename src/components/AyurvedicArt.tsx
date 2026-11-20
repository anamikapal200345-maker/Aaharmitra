import React, { useState } from 'react';

export function AaharMitraLogo({ className = 'w-9 h-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="#1B4332" />
      <circle cx="24" cy="24" r="19" stroke="#D9C7A3" strokeOpacity="0.45" strokeWidth="1" />
      {/* Botanical lotus / tulsi leaves */}
      <path
        d="M24 11C21 15.5 20.5 20 24 24C27.5 20 27 15.5 24 11Z"
        fill="#E9DFCA"
      />
      <path
        d="M15.5 16.5C16.5 20.8 19.3 23.3 23.2 24.4C21.8 20.2 19.2 17.6 15.5 16.5Z"
        fill="#95D5B2"
      />
      <path
        d="M32.5 16.5C28.8 17.6 26.2 20.2 24.8 24.4C28.7 23.3 31.5 20.8 32.5 16.5Z"
        fill="#95D5B2"
      />
      {/* Traditional brass katori / bowl */}
      <path
        d="M13 26.5H35C34.3 32.2 29.7 36 24 36C18.3 36 13.7 32.2 13 26.5Z"
        fill="#D4A853"
      />
      <path d="M12 26.5H36" stroke="#FAF6EE" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 37.5H29" stroke="#D4A853" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function TraditionalDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-[#DED5C1]" />
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="text-[#8C6D32] shrink-0">
        <path
          d="M14 2C12.2 4.8 12.2 7.5 14 10C15.8 7.5 15.8 4.8 14 2Z"
          fill="currentColor"
          fillOpacity="0.85"
        />
        <path
          d="M7.5 5.5C8.5 8 10.5 9.4 13 10C11.8 7.4 10 6 7.5 5.5Z"
          fill="#2D6A4F"
          fillOpacity="0.75"
        />
        <path
          d="M20.5 5.5C18 6 16.2 7.4 15 10C17.5 9.4 19.5 8 20.5 5.5Z"
          fill="#2D6A4F"
          fillOpacity="0.75"
        />
        <circle cx="14" cy="13" r="1.3" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-[#DED5C1]" />
    </div>
  );
}

export function HeroThaliIllustration() {
  return (
    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] rounded-2xl bg-[#EFE8D8] border border-[#DDD3BD] overflow-hidden flex items-center justify-center p-4 sm:p-6">
      <svg
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[360px]"
        role="img"
        aria-label="Illustration of a traditional Ayurvedic sattvic thali with brass bowls, rice, dal, greens, and fresh tulsi and ginger herbs"
      >
        {/* Soft background arch motif inspired by Indian architecture */}
        <path
          d="M65 375V165C65 92 145 45 260 45C375 45 455 92 455 165V375"
          fill="#FAF6EE"
          stroke="#D7CCB3"
          strokeWidth="1.5"
        />
        <path
          d="M83 375V172C83 108 156 64 260 64C364 64 437 108 437 172V375"
          stroke="#C8B998"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Subtle botanical leaf silhouettes in warm sage */}
        <path
          d="M95 110C122 106 144 126 146 154C118 156 96 138 95 110Z"
          fill="#D8E5DA"
        />
        <path
          d="M78 148C101 144 121 159 124 182C101 185 81 170 78 148Z"
          fill="#C5DAC9"
        />
        <path
          d="M425 118C398 115 376 135 375 162C402 165 424 146 425 118Z"
          fill="#D8E5DA"
        />

        {/* Woven handloom table mat */}
        <rect x="75" y="295" width="370" height="72" rx="14" fill="#E6DCC6" />
        <line x1="90" y1="312" x2="430" y2="312" stroke="#D3C6AA" strokeWidth="1" />
        <line x1="90" y1="352" x2="430" y2="352" stroke="#D3C6AA" strokeWidth="1" />

        {/* Brass Thali Plate */}
        <ellipse cx="255" cy="235" rx="146" ry="102" fill="#D5B26A" />
        <ellipse cx="255" cy="231" rx="142" ry="96" fill="#E8CE92" />
        <ellipse cx="255" cy="232" rx="126" ry="82" fill="#F8F3E6" stroke="#C89E4B" strokeWidth="1.5" />

        {/* Center warm steamed rice & ghee */}
        <ellipse cx="255" cy="252" rx="52" ry="33" fill="#FFFDF8" stroke="#E4DAC4" strokeWidth="1.2" />
        <path
          d="M225 250C234 234 276 234 285 250C273 262 237 262 225 250Z"
          fill="#F4EFE2"
        />
        <circle cx="255" cy="245" r="7" fill="#E0A93E" fillOpacity="0.85" />
        {/* Cumin garnish */}
        <ellipse cx="249" cy="242" rx="2" ry="0.9" transform="rotate(-25 249 242)" fill="#5C4422" />
        <ellipse cx="261" cy="247" rx="2" ry="0.9" transform="rotate(20 261 247)" fill="#5C4422" />

        {/* Katori 1: Golden Moong Dal (Left) */}
        <circle cx="178" cy="212" r="34" fill="#C99A45" />
        <circle cx="178" cy="210" r="30" fill="#E2A83B" />
        <circle cx="178" cy="210" r="25" fill="#DDA02E" />
        {/* Fresh cilantro leaf on dal */}
        <path d="M178 205C175 200 179 195 183 197C186 200 183 206 178 205Z" fill="#2D6A4F" />
        <path d="M177 206C172 203 169 207 171 211C174 213 178 210 177 206Z" fill="#40916C" />

        {/* Katori 2: Green Leafy Sabzi (Top Center) */}
        <circle cx="255" cy="182" r="32" fill="#C99A45" />
        <circle cx="255" cy="180" r="28" fill="#2D6A4F" />
        <circle cx="249" cy="176" r="8" fill="#40916C" />
        <circle cx="262" cy="183" r="9" fill="#1B4332" fillOpacity="0.45" />
        <circle cx="257" cy="173" r="3" fill="#E5B95C" />

        {/* Katori 3: Spiced Buttermilk / Takra (Right) */}
        <circle cx="332" cy="212" r="34" fill="#C99A45" />
        <circle cx="332" cy="210" r="30" fill="#FBF8F0" />
        <circle cx="332" cy="210" r="26" fill="#F4EFE2" />
        <circle cx="329" cy="208" r="2" fill="#40916C" />
        <circle cx="336" cy="213" r="1.5" fill="#7D5A2A" />
        <circle cx="335" cy="204" r="1.5" fill="#7D5A2A" />

        {/* Warm Rotis / Phulka on lower left */}
        <ellipse cx="175" cy="268" rx="30" ry="18" fill="#D8B37C" stroke="#B68B4C" strokeWidth="1" />
        <ellipse cx="182" cy="264" rx="28" ry="16" fill="#E3C38F" stroke="#BD9355" strokeWidth="1" />
        <circle cx="176" cy="262" r="3" fill="#B58342" fillOpacity="0.55" />
        <circle cx="189" cy="267" r="2.5" fill="#B58342" fillOpacity="0.45" />

        {/* Fresh Ginger, Turmeric & Tulsi Sprig on side */}
        {/* Copper water cup top-right */}
        <path d="M406 168H442L437 224C436.5 229 432 232 424 232C416 232 411.5 229 411 224L406 168Z" fill="#C27849" />
        <ellipse cx="424" cy="168" rx="18" ry="5.5" fill="#D99466" stroke="#9B5A32" strokeWidth="1" />
        <ellipse cx="424" cy="169" rx="14" ry="3.5" fill="#DDEBE7" />

        {/* Tulsi sprig beside thali */}
        <path d="M98 282C108 266 116 250 120 232" stroke="#2D6A4F" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M119 235C110 227 112 215 123 212C127 222 125 231 119 235Z" fill="#2D6A4F" />
        <path d="M112 252C101 247 100 236 109 231C115 239 116 247 112 252Z" fill="#40916C" />
        <path d="M115 256C125 248 133 252 133 262C125 266 118 262 115 256Z" fill="#1B4332" />

        {/* Whole turmeric & ginger accents */}
        <path
          d="M362 325C374 316 392 318 400 328C406 336 395 347 380 345C367 344 354 333 362 325Z"
          fill="#D49B38"
        />
        <ellipse cx="342" cy="338" rx="8" ry="5" transform="rotate(-18 342 338)" fill="#52796F" />
        <ellipse cx="326" cy="343" rx="6" ry="4" transform="rotate(14 326 343)" fill="#40916C" />
      </svg>
    </div>
  );
}

interface KukshiSegment {
  id: 'solid' | 'liquid' | 'space';
  title: string;
  sanskrit: string;
  ratio: string;
  summary: string;
}

const KUKSHI_SEGMENTS: KukshiSegment[] = [
  {
    id: 'solid',
    title: 'Nourishing Solid Food',
    sanskrit: 'Anna · 2 Quarters (50%)',
    ratio: '2 / 4 Stomach Capacity',
    summary:
      'Wholesome, warm, freshly cooked grains, vegetables, and proteins that satisfy hunger comfortably without stretching the stomach wall.',
  },
  {
    id: 'liquid',
    title: 'Warm Liquids & Soups',
    sanskrit: 'Drava · 1 Quarter (25%)',
    ratio: '1 / 4 Stomach Capacity',
    summary:
      'Moistening broths, spiced buttermilk (Takra), or small sips of warm water that soften food so digestive enzymes mix evenly.',
  },
  {
    id: 'space',
    title: 'Open Space for Agni & Doshas',
    sanskrit: 'Akasha · 1 Quarter (25%)',
    ratio: '1 / 4 Left Free',
    summary:
      'Essential breathing room inside the stomach allowing Vata, Pitta, and Kapha to circulate smoothly and churn food into clean energy.',
  },
];

export function KukshiDiagram() {
  const [activeId, setActiveId] = useState<'solid' | 'liquid' | 'space'>('solid');
  const active = KUKSHI_SEGMENTS.find((s) => s.id === activeId) ?? KUKSHI_SEGMENTS[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
      <div className="lg:col-span-5 flex flex-col items-center">
        <div className="w-full max-w-[290px] bg-[#FAF6EE] rounded-2xl border border-[#DDD3BD] p-5">
          <svg
            viewBox="0 0 240 240"
            className="w-full h-auto"
            role="img"
            aria-label="Kukshi four-quarter stomach proportion diagram"
          >
            {/* Outer traditional vessel frame */}
            <circle cx="120" cy="120" r="102" fill="#F3ECE0" stroke="#C8B998" strokeWidth="1.5" />

            {/* Top Left + Bottom Left = 2 Quarters Solid Food (50%) */}
            <g
              onClick={() => setActiveId('solid')}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <path
                d="M120 26 A94 94 0 0 0 120 214 Z"
                fill={activeId === 'solid' ? '#1B4332' : '#2D6A4F'}
                fillOpacity={activeId === 'solid' ? '1' : '0.82'}
              />
              <text
                x="72"
                y="112"
                textAnchor="middle"
                fill="#FAF6EE"
                fontSize="13"
                fontWeight="600"
              >
                50%
              </text>
              <text
                x="72"
                y="130"
                textAnchor="middle"
                fill="#E3EDE6"
                fontSize="11"
              >
                Solid Food
              </text>
            </g>

            {/* Bottom Right = 1 Quarter Liquid (25%) */}
            <g
              onClick={() => setActiveId('liquid')}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <path
                d="M120 120 L214 120 A94 94 0 0 1 120 214 Z"
                fill={activeId === 'liquid' ? '#A67B2E' : '#C69D4F'}
                fillOpacity={activeId === 'liquid' ? '1' : '0.85'}
              />
              <text
                x="164"
                y="160"
                textAnchor="middle"
                fill="#FFFDF9"
                fontSize="13"
                fontWeight="600"
              >
                25%
              </text>
              <text
                x="164"
                y="177"
                textAnchor="middle"
                fill="#FFF7E6"
                fontSize="11"
              >
                Liquids
              </text>
            </g>

            {/* Top Right = 1 Quarter Space (25%) */}
            <g
              onClick={() => setActiveId('space')}
              className="cursor-pointer transition-opacity hover:opacity-90"
            >
              <path
                d="M120 120 L120 26 A94 94 0 0 1 214 120 Z"
                fill={activeId === 'space' ? '#E4DEC9' : '#EFE9DA'}
              />
              <text
                x="164"
                y="78"
                textAnchor="middle"
                fill="#1B4332"
                fontSize="13"
                fontWeight="600"
              >
                25%
              </text>
              <text
                x="164"
                y="95"
                textAnchor="middle"
                fill="#405045"
                fontSize="11"
              >
                Open Space
              </text>
            </g>

            {/* Clean quarter lines */}
            <line x1="120" y1="26" x2="120" y2="214" stroke="#FAF6EE" strokeWidth="2.5" />
            <line x1="120" y1="120" x2="214" y2="120" stroke="#FAF6EE" strokeWidth="2.5" />
            <circle cx="120" cy="120" r="94" stroke="#B7A888" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
      </div>

      <div className="lg:col-span-7 space-y-4">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Kukshi stomach division">
          {KUKSHI_SEGMENTS.map((seg) => {
            const isSelected = seg.id === activeId;
            return (
              <button
                key={seg.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveId(seg.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1B4332] text-[#FAF6EE]'
                    : 'bg-[#EFE8D8] text-[#2A382D] hover:bg-[#E5DCC7]'
                }`}
              >
                {seg.id === 'solid' ? '2/4 Solid Food' : seg.id === 'liquid' ? '1/4 Liquids' : '1/4 Open Space'}
              </button>
            );
          })}
        </div>

        <div className="bg-[#FAF6EE] border border-[#DDD3BD] rounded-2xl p-5 sm:p-6">
          <p className="text-xs font-medium text-[#7A6128] tracking-wide">
            {active.sanskrit} · {active.ratio}
          </p>
          <h4 className="font-display text-xl sm:text-2xl font-semibold text-[#1D2820] mt-1.5">
            {active.title}
          </h4>
          <p className="text-sm sm:text-base text-[#4A564C] leading-relaxed mt-2">
            {active.summary}
          </p>
        </div>
      </div>
    </div>
  );
}
