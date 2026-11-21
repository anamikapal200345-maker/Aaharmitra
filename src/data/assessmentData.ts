export type AssessmentCategory =
  | 'Aahar Matra'
  | 'Agni'
  | 'Digestion'
  | 'Eating Habits'
  | 'Effects of Quantity';

export type TendencyType = 'sama' | 'ati' | 'hina' | 'tikshna';

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  label: string;
  detail: string;
  scores: {
    matra: number; // 0-10 contribution
    agni: number;
    vidhi: number;
    postMeal: number;
  };
  tendency: TendencyType;
  insightKey?: string;
}

export interface AssessmentQuestion {
  id: string;
  number: number;
  category: AssessmentCategory;
  sanskritTerm: string;
  prompt: string;
  helperText: string;
  options: [QuestionOption, QuestionOption, QuestionOption, QuestionOption];
}

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'q1_matra_fullness',
    number: 1,
    category: 'Aahar Matra',
    sanskritTerm: 'Trividha Kukshi Vibhaga · Ch. Vi. 2/3',
    prompt: 'Bhojan karte samay kya aap apni Kukshi (stomach) ko 3 bhagon mein baant kar—ek bhag Murta Ahara (solid), ek Drava (liquid), aur ek Tridosha gati (khali)—chhodte hain?',
    helperText: 'Shloka (Ch. Vi. 2/3): "त्रिविधं कुक्षौ स्थापयेदवकाशांशमाहारस्याहारमुपयुञ्जानः..." — Right after a meal, how full does your Kukshi feel?',
    options: [
      {
        id: 'A',
        label: 'Samyak Kukshi Vibhaga — Comfortably satisfied with space for Tridosha',
        detail: '2 parts Murta (solid), 1 part Drava (liquid), and 1 part Avakasha (empty space) for Vata-Pitta-Kapha.',
        scores: { matra: 10, agni: 9, vidhi: 8, postMeal: 10 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Atimatra Purana — Kukshi tightly packed with zero empty Avakasha',
        detail: 'Feeling pressure on the abdomen (Kukshi Prapeedana) and needing to rest immediately.',
        scores: { matra: 3, agni: 4, vidhi: 5, postMeal: 3 },
        tendency: 'ati',
        insightKey: 'ati_fullness',
      },
      {
        id: 'C',
        label: 'Heena Matra — Kukshi remains mostly empty or under-nourished',
        detail: 'Taking very small portions that fail to provide Trupti (satiety) or Bala (strength).',
        scores: { matra: 4, agni: 5, vidhi: 6, postMeal: 5 },
        tendency: 'hina',
        insightKey: 'hina_fullness',
      },
      {
        id: 'D',
        label: 'Vishama Matra — Fluctuating between Atimatra and Heena Matra',
        detail: 'Portion proportion changes sharply depending on stress or irregular schedule.',
        scores: { matra: 5, agni: 5, vidhi: 4, postMeal: 5 },
        tendency: 'tikshna',
        insightKey: 'erratic_fullness',
      },
    ],
  },
  {
    id: 'q2_agni_hunger',
    number: 2,
    category: 'Agni',
    sanskritTerm: 'Jatharagni & Kshudha · Ch. Vi. 2/4',
    prompt: 'Kya aap apni Jatharagni (digestive fire) aur Kshudha (natural hunger) ke pradipta hone par hi bhojan karte hain, ya Adhyashana (eating before previous digestion) karte hain?',
    helperText: 'Shloka (Ch. Vi. 2/4): "अग्निबलमवेक्ष्य..." — Food quantity must always depend on the strength of Jatharagni.',
    options: [
      {
        id: 'A',
        label: 'Samagni & Shuddha Kshudha — Clear hunger after prior meal digests',
        detail: 'Udgara Shuddhi (clear belching) and Utsaha (enthusiasm) appear naturally before meals.',
        scores: { matra: 9, agni: 10, vidhi: 8, postMeal: 9 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Mandagni & Adhyashana — Eating by the clock without true Kshudha',
        detail: 'Stomach still feels heavy (Guru) from the previous meal when new food is taken.',
        scores: { matra: 5, agni: 3, vidhi: 5, postMeal: 4 },
        tendency: 'ati',
        insightKey: 'manda_hunger',
      },
      {
        id: 'C',
        label: 'Tikshnagni — Sharp, intense Kshudha & Pipasa (thirst) with irritability',
        detail: 'Delaying Ahara causes burning sensation (Daha), acidity, or tremors.',
        scores: { matra: 6, agni: 5, vidhi: 5, postMeal: 5 },
        tendency: 'tikshna',
        insightKey: 'tikshna_hunger',
      },
      {
        id: 'D',
        label: 'Vishamagni — Irregular, unpredictable Kshudha',
        detail: 'Appetite varies wildly due to Vata aggravation, irregular sleep, or mental strain.',
        scores: { matra: 5, agni: 4, vidhi: 4, postMeal: 5 },
        tendency: 'hina',
        insightKey: 'vishama_hunger',
      },
    ],
  },
  {
    id: 'q3_post_meal_energy',
    number: 3,
    category: 'Effects of Quantity',
    sanskritTerm: 'Matravat Ahara Lakshana · Ch. Vi. 2/6',
    prompt: 'Bhojan ke baad kya aapko Udar mein Anatigaurava (lightness in abdomen) aur Indriya Prinana (satisfaction of senses) mehsoos hota hai?',
    helperText: 'Shloka (Ch. Vi. 2/6): "अनतिगौरवमुदरस्य, प्रीणनमिन्द्रियाणां, क्षुत्पिपासोपरमः..." — Classical signs of proper Matravat Ahara.',
    options: [
      {
        id: 'A',
        label: 'Anatigaurava & Indriya Prinana — Light, clear, and energized',
        detail: 'Kshudha-Pipasa Uparama (relief from hunger/thirst) with steady Bala (vitality) and mental clarity.',
        scores: { matra: 10, agni: 9, vidhi: 8, postMeal: 10 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Atigaurava & Tandra — Heavy abdomen, drowsiness, and lethargy',
        detail: 'Excess quantity dampens Agni, causing Alasya (sluggishness) and heaviness.',
        scores: { matra: 3, agni: 4, vidhi: 5, postMeal: 2 },
        tendency: 'ati',
        insightKey: 'post_meal_sluggish',
      },
      {
        id: 'C',
        label: 'Bala-Ojas Kshaya — Lightheaded, fatigued, or hungry again quickly',
        detail: 'Heena Matra fails to nourish Dhatus, leading to early exhaustion.',
        scores: { matra: 4, agni: 5, vidhi: 5, postMeal: 4 },
        tendency: 'hina',
        insightKey: 'post_meal_depleted',
      },
      {
        id: 'D',
        label: 'Ushna & Vidaha — Internal heat, flushing, or restlessness',
        detail: 'Pitta aggravation after meals causing excess thirst (Trishna) or irritability.',
        scores: { matra: 6, agni: 6, vidhi: 5, postMeal: 5 },
        tendency: 'tikshna',
        insightKey: 'post_meal_heat',
      },
    ],
  },
  {
    id: 'q4_digestion_comfort',
    number: 4,
    category: 'Digestion',
    sanskritTerm: 'Hridaya Anavarodha & Parshva Avipatana · Ch. Vi. 2/6',
    prompt: 'Kya bhojan ke baad aapko Hridaya Anavarodha (no chest heaviness) aur Parshva Avipatana (no pain/stretching in flanks) ke saath Sukhena Parinamana hota hai?',
    helperText: 'Shloka (Ch. Vi. 2/6): "कुक्षेरप्रपीडनमाहारेण, हृदयस्यानवरोधः, पार्श्वयोरविपाटनम्..." — Smooth digestion without physical distress.',
    options: [
      {
        id: 'A',
        label: 'Sukhena Parinamana — Smooth digestion with Hridaya Anavarodha',
        detail: 'No pressure on chest/heart, no flank pain, and effortless morning Mala-Mutra Pravrutti.',
        scores: { matra: 9, agni: 10, vidhi: 8, postMeal: 10 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Hridaya Avarodha & Ama Lakshana — Coated tongue & slow digestion',
        detail: 'Heaviness in chest/stomach (Kukshi Prapeedana) as undigested Ama accumulates.',
        scores: { matra: 4, agni: 3, vidhi: 5, postMeal: 3 },
        tendency: 'ati',
        insightKey: 'slow_digestion',
      },
      {
        id: 'C',
        label: 'Parshva Vipatana & Adhmana — Gas, bloating, and dry/hard stools',
        detail: 'Vata aggravation causing flank stretching (Parshva Vipatana) and abdominal distension.',
        scores: { matra: 5, agni: 4, vidhi: 5, postMeal: 3 },
        tendency: 'hina',
        insightKey: 'vata_bloating',
      },
      {
        id: 'D',
        label: 'Amlapitta & Vidaha — Sour belching, heartburn, or loose stools',
        detail: 'Pitta vitiation causing burning sensation during digestion.',
        scores: { matra: 6, agni: 5, vidhi: 5, postMeal: 4 },
        tendency: 'tikshna',
        insightKey: 'pitta_acidity',
      },
    ],
  },
  {
    id: 'q5_quantity_effects',
    number: 5,
    category: 'Effects of Quantity',
    sanskritTerm: 'Atimatra vs Heenamatra Phala · Ch. Vi. 2/7-8',
    prompt: 'Aapke bhojan ki matra mein asantulan hone par sharir mein kis prakar ke lakshan (Atimatra ya Heenamatra) adhik dikhte hain?',
    helperText: 'Shloka (Ch. Vi. 2/7): "अतिमात्रं हि सर्वदोषप्रकोपणमिच्छन्ति..." — Atimatra vitiates all three Doshas and produces Ama.',
    options: [
      {
        id: 'A',
        label: 'Matravat Ahara — Balanced quantity sustaining Bala, Varna & Sukha',
        detail: 'Stopping right at Trupti without triggering Dosha Prakopa.',
        scores: { matra: 10, agni: 9, vidhi: 9, postMeal: 9 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Atimatra & Sarva-Dosha Prakopa — Overeating leading to Ama Dosha',
        detail: 'Eating extra out of taste (Laulya), causing stiffness, salivation (Praseka), and lethargy.',
        scores: { matra: 2, agni: 4, vidhi: 4, postMeal: 3 },
        tendency: 'ati',
        insightKey: 'ati_matra_habit',
      },
      {
        id: 'C',
        label: 'Heenamatra & Vata Prakopa — Undereating causing Dhatu Kshaya',
        detail: 'Skipping meals or eating too little, reducing strength, immunity (Ojas), and causing Vata disorders.',
        scores: { matra: 3, agni: 5, vidhi: 4, postMeal: 4 },
        tendency: 'hina',
        insightKey: 'hina_matra_habit',
      },
      {
        id: 'D',
        label: 'Vishamashana — Alternating between Langhana (fasting) and Atimatra',
        detail: 'Light daytime intake followed by excessive heavy dinner.',
        scores: { matra: 3, agni: 4, vidhi: 3, postMeal: 3 },
        tendency: 'tikshna',
        insightKey: 'swing_quantity',
      },
    ],
  },
  {
    id: 'q6_eating_pace',
    number: 6,
    category: 'Eating Habits',
    sanskritTerm: 'Natidruta & Nativilambita · Ch. Vi. 1/24',
