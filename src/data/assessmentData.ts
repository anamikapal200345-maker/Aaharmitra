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
    prompt: 'Bhojan karte samay aapki gati kaisi rehti hai — kya aap Natidruta (not too fast) aur Nativilambita (not too slow) vidhi ka palan karte hain?',
    helperText: 'Aahar Vidhi Visheshayatana: Eating too fast (Atidruta) or too slow (Ativilambita) impairs digestion.',
    options: [
      {
        id: 'A',
        label: 'Sama Gati (Natidruta-Nativilambita) — Calm 15 to 25 minutes',
        detail: 'Proper chewing and noticing natural Trupti cues in time.',
        scores: { matra: 9, agni: 8, vidhi: 10, postMeal: 9 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Atidruta Bhojana — Rushing through meals in 5 to 10 minutes',
        detail: 'Swallowing hurriedly, missing fullness cues, and leading to Atimatra & Vata vitiation.',
        scores: { matra: 4, agni: 5, vidhi: 2, postMeal: 4 },
        tendency: 'tikshna',
        insightKey: 'rushed_eating',
      },
      {
        id: 'C',
        label: 'Ativilambita Bhojana — Eating very slowly over 40+ minutes',
        detail: 'Ahara becomes cold (Sheeta), reducing Agni efficiency and causing overconsumption.',
        scores: { matra: 6, agni: 5, vidhi: 4, postMeal: 5 },
        tendency: 'ati',
        insightKey: 'prolonged_eating',
      },
      {
        id: 'D',
        label: 'Aniyamita Gati — Rushed on workdays, irregular on holidays',
        detail: 'Eating speed fluctuates constantly with external stress.',
        scores: { matra: 5, agni: 6, vidhi: 4, postMeal: 5 },
        tendency: 'hina',
        insightKey: 'inconsistent_pace',
      },
    ],
  },
  {
    id: 'q7_mindful_attention',
    number: 7,
    category: 'Eating Habits',
    sanskritTerm: 'Tanmana Bhunjita · Ch. Vi. 1/24',
    prompt: 'Kya aap bhojan karte samay Tanmana Bhunjita (full mindful attention without screens or stress) ka palan karte hain?',
    helperText: 'Shloka (Ch. Vi. 1/24): "तन्मना भुञ्जीत" — Mindful eating is essential for proper Agni stimulation and Matra awareness.',
    options: [
      {
        id: 'A',
        label: 'Tanmana Bhunjita — Seated calmly without mobile, TV, or work',
        detail: 'Focusing on Rasa (taste), Gandha (aroma), and bodily satiety.',
        scores: { matra: 9, agni: 8, vidhi: 10, postMeal: 9 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Amanaska Bhojana — Watching screens or scrolling phone while eating',
        detail: 'Diverted Manas causes unaware overeating (Atimatra) and weak digestive secretion.',
        scores: { matra: 4, agni: 6, vidhi: 3, postMeal: 5 },
        tendency: 'ati',
        insightKey: 'screen_distraction',
      },
      {
        id: 'C',
        label: 'Chinta & Shoka Yukta — Eating while working, standing, or stressed',
        detail: 'Mental stress (Chinta) impairs Jatharagni even when wholesome food is eaten.',
        scores: { matra: 5, agni: 4, vidhi: 2, postMeal: 4 },
        tendency: 'hina',
        insightKey: 'stressed_eating',
      },
      {
        id: 'D',
        label: 'Atijalpa / Multitasking — Talking excessively or doing chores while eating',
        detail: 'Split attention disturbs Pranavayu and smooth swallowing.',
        scores: { matra: 6, agni: 6, vidhi: 5, postMeal: 6 },
        tendency: 'tikshna',
      },
    ],
  },
  {
    id: 'q8_meal_timing',
    number: 8,
    category: 'Agni',
    sanskritTerm: 'Sayam-Pratah Sukhena Parinamana · Ch. Vi. 2/6',
    prompt: 'Kya aapka bhojan Sayam aur Pratah (morning and evening) niyamit samay par hota hai aur bina kisi kasht ke pach jata hai?',
    helperText: 'Shloka (Ch. Vi. 2/6): "...सायं प्रातश्च सुखेन परिणमनम्" — Proper Matra digests effortlessly both morning and evening.',
    options: [
      {
        id: 'A',
        label: 'Kala Bhojana — Regular midday meal & light early Ratri Bhojana',
        detail: 'Meals align with solar and Jatharagni rhythm, digesting cleanly by morning.',
        scores: { matra: 9, agni: 10, vidhi: 10, postMeal: 9 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Ratri Atibhojana — Heavy late-night dinner after 8:30 PM',
        detail: 'Eating heavily when evening Agni is low leads to morning Ama and heaviness.',
        scores: { matra: 4, agni: 3, vidhi: 3, postMeal: 3 },
        tendency: 'ati',
        insightKey: 'late_heavy_dinner',
      },
      {
        id: 'C',
        label: 'Akala Bhojana / Langhana — Frequently skipping or delaying meals',
        detail: 'Long gaps past Kshudha aggravate Vata and Pitta.',
        scores: { matra: 4, agni: 4, vidhi: 3, postMeal: 4 },
        tendency: 'hina',
        insightKey: 'skipped_meals',
      },
      {
        id: 'D',
        label: 'Samashana / Adhyashana — Frequent snacking between main meals',
        detail: 'Adding snacks before prior Ahara completes Parinamana (digestion).',
        scores: { matra: 5, agni: 5, vidhi: 5, postMeal: 5 },
        tendency: 'ati',
        insightKey: 'frequent_snacking',
      },
    ],
  },
  {
    id: 'q9_hydration_habits',
    number: 9,
    category: 'Eating Habits',
    sanskritTerm: 'Drava Avakasha & Jala Vidhi · Ch. Vi. 2/3',
    prompt: 'Bhojan ke saath Drava (water/liquids) ka sevan aap kis prakar karte hain taaki Kukshi mein 1/3 Drava bhag santulit rahe?',
    helperText: 'Shloka (Ch. Vi. 2/3): "...एकं द्रवाणाम्..." — Warm/room-temperature sips during meals aid softening without drowning Agni.',
    options: [
      {
        id: 'A',
        label: 'Madhye Ushnodaka — Small sips of warm/room-temp water during meals',
        detail: 'Maintains the 1/3 Drava proportion in Kukshi and supports smooth Pachana.',
        scores: { matra: 9, agni: 9, vidhi: 10, postMeal: 9 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Ati-Drava & Sheeta Jala — Large amounts of cold/iced drinks with meals',
        detail: 'Excess cold liquid extinguishes Jatharagni (Agnimandya) and dilutes digestive enzymes.',
        scores: { matra: 5, agni: 3, vidhi: 3, postMeal: 4 },
        tendency: 'ati',
        insightKey: 'cold_water_meals',
      },
      {
        id: 'C',
        label: 'Alpa Jala / Ruksha — Very little water or excessive tea/coffee',
        detail: 'Insufficient Drava portion causes dryness (Rukshata) and Vata aggravation.',
        scores: { matra: 6, agni: 5, vidhi: 4, postMeal: 5 },
        tendency: 'hina',
        insightKey: 'dry_caffeinated',
      },
      {
        id: 'D',
        label: 'Bhojanapurva Atijala — Drinking full glasses right before eating',
        detail: 'Filling Kukshi with water beforehand suppresses Agni and reduces proper Ahara intake.',
        scores: { matra: 5, agni: 4, vidhi: 5, postMeal: 5 },
        tendency: 'tikshna',
        insightKey: 'water_before_meal',
      },
    ],
  },
  {
    id: 'q10_food_temperature_freshness',
    number: 10,
    category: 'Digestion',
    sanskritTerm: 'Ushna, Snigdha & Laghu-Guru Matra · Ch. Vi. 2/4',
    prompt: 'Aapke bhojan ke dravya (food items) kaise hote hain — kya aap Guru (heavy) aur Laghu (light) ahara ki matra ko apni Agni ke anusaar rakhte hain?',
    helperText: 'Shloka (Ch. Vi. 2/4): Guru dravyas require half-satiety (Ardha-Sauhitya), while Laghu dravyas can be taken up to full satiety.',
    options: [
      {
        id: 'A',
        label: 'Ushna & Snigdha Ahara — Warm, fresh meals balanced by Guru/Laghu nature',
        detail: 'Freshly cooked food with appropriate ghee/spices that kindles Jatharagni.',
        scores: { matra: 9, agni: 10, vidhi: 9, postMeal: 10 },
        tendency: 'sama',
      },
      {
        id: 'B',
        label: 'Ati-Guru & Paryushita — Heavy, fried, creamy, or reheated leftover food',
        detail: 'Taking Guru ahara in full quantity overwhelms Agni and creates Ama.',
        scores: { matra: 4, agni: 4, vidhi: 5, postMeal: 3 },
        tendency: 'ati',
        insightKey: 'heavy_leftover_food',
      },
      {
        id: 'C',
        label: 'Sheeta & Ruksha — Cold, dry, raw, or packaged foods',
        detail: 'Lacks Ushna (warmth) and Snigdha (unctuousness), aggravating Vata and weakening Agni.',
        scores: { matra: 5, agni: 4, vidhi: 5, postMeal: 4 },
        tendency: 'hina',
        insightKey: 'cold_dry_food',
      },
      {
        id: 'D',
        label: 'Ati-Ushna & Vidahi — Excessively spicy, sour, or fermented restaurant food',
        detail: 'Aggravates Pitta and causes Vidaha (burning) even in moderate quantities.',
        scores: { matra: 6, agni: 5, vidhi: 5, postMeal: 4 },
        tendency: 'tikshna',
        insightKey: 'spicy_takeout_food',
      },
    ],
  },
];
export interface DimensionScore {
  key: 'matra' | 'agni' | 'vidhi' | 'postMeal';
  label: string;
  sanskrit: string;
  score: number; // 0 to 100
  statusLabel: 'Balanced' | 'Moderate' | 'Needs Care';
  description: string;
}

export interface PersonalizedInsight {
  title: string;
  explanation: string;
  suggestion: string;
}

export interface AssessmentProfile {
  id: string;
  title: string;
  sanskritName: string;
  subtitle: string;
  summary: string;
  ayurvedicExplanation: string;
  overallScore: number;
  overallStatus: 'Balanced' | 'Moderately Balanced' | 'Needs Gentle Rebalancing';
  dimensions: DimensionScore[];
  personalizedInsights: PersonalizedInsight[];
  dailyRoutineSuggestions: string[];
  herbAndSpiceSupport: {
    name: string;
    sanskrit: string;
    role: string;
    howToUse: string;
  }[];
}

const INSIGHT_LIBRARY: Record<string, PersonalizedInsight> = {
  ati_fullness: {
    title: 'Recognizing Ati-Matra (Overfilling the Kukshi)',
    explanation:
      'Eating until your stomach feels tight leaves too little open space (Akasha) for natural churning and enzyme mixing. In Ayurveda, excess quantity dampens Agni and creates lingering heaviness.',
    suggestion:
      'Pause when you feel about 75% full—wait 5 minutes before taking a second serving. Picture dividing your stomach into 2 parts food, 1 part liquid, and 1 part empty air.',
  },
  hina_fullness: {
    title: 'Addressing Hina-Matra (Insufficient Nourishment)',
    explanation:
      'Consistently eating too little leaves tissues under-nourished and can aggravate Vata, leading to airy discomfort, restlessness, and sudden evening cravings.',
    suggestion:
      'Serve a complete, warm, grounding plate at regular meals—combining well-cooked grains, lentils or protein, and a teaspoon of ghee or sesame oil so fullness feels steady.',
  },
  erratic_fullness: {
    title: 'Stabilizing Fluctuating Meal Portions',
    explanation:
      'Swinging between small and oversized portions confuses digestive timing and stretches Agni unevenly across the day.',
    suggestion:
      'Use a consistent medium-sized thali or bowl at home so your eyes and appetite learn a calm, repeatable baseline.',
  },
  manda_hunger: {
    title: 'Reawakening Gentle Mandagni (Slow Digestive Fire)',
    explanation:
      'Eating solely by the clock when true hunger has not yet arrived adds new food onto partially digested food (Adhyashana), which can dull appetite further.',
    suggestion:
      'Wait for lightness in the abdomen before eating. Ten minutes before lunch, chew a thin slice of fresh ginger with a drop of lemon juice and a pinch of rock salt to kindle appetite.',
  },
  tikshna_hunger: {
    title: 'Cooling Sharp Tikshnagni (Intense Hunger Peaks)',
    explanation:
      'Sharp, urgent hunger paired with irritability suggests heightened Pitta heat in the digestive tract that burns rapidly when meals are delayed.',
    suggestion:
      'Keep meals punctual—especially midday lunch—and avoid excessive chili, sour pickles, or black coffee on an empty stomach. Soaked raisins or sweet fresh fruit can bridge unexpected delays.',
  },
  vishama_hunger: {
    title: 'Grounding Vishamagni (Irregular Appetite)',
    explanation:
      'Unpredictable appetite reflects Vata variability—when sleep, stress, or travel shift, digestive rhythm fluctuates alongside them.',
    suggestion:
      'Anchor at least two meals at predictable hours each day and begin meals with warm, softly spiced soup or dal rather than dry cold foods.',
  },
  post_meal_sluggish: {
    title: 'Clearing Post-Meal Heaviness & Tandra (Drowsiness)',
    explanation:
      'Drowsiness 60–90 minutes after eating is a classic sign that meal volume or richness exceeded your current digestive fire, diverting energy toward heavy processing.',
    suggestion:
      'Take a gentle 100-step stroll (Shatapavali) after lunch and dinner instead of lying down immediately, and slightly trim heavy dairy, fried items, or final bites.',
  },
  post_meal_depleted: {
    title: 'Sustaining Post-Meal Bala (Steady Energy)',
    explanation:
      'Quickly dipping energy or lightheadedness after eating suggests either insufficient caloric/healthy fat grounding or rapid blood-sugar swings from overly light or dry meals.',
    suggestion:
      'Include warm cooked root vegetables, whole grains, and healthy unctuousness (ghee or olive/sesame oil) so energy releases steadily for 4–5 hours.',
  },
  post_meal_heat: {
    title: 'Soothing Post-Meal Heat & Restlessness',
    explanation:
      'Feeling flushed or thirsty right after eating points to excess internal warmth (Ushna) during digestion.',
    suggestion:
      'Sip cool-to-room-temperature fennel or coriander seed water between meals and favor naturally sweet, cooling herbs like fresh cilantro, mint, and cardamom.',
  },
  slow_digestion: {
    title: 'Supporting Sluggish Pachana & Clearing Ama',
    explanation:
      'Food feeling heavy for hours or waking with a coated tongue suggests mild Ama (undigested metabolic residue) slowing digestive clarity.',
    suggestion:
      'Sip warm water infused with toasted cumin and ginger through the morning, keep dinner lighter than lunch, and allow 12 hours of overnight digestive rest.',
  },
  vata_bloating: {
    title: 'Calming Airiness & Bloating',
    explanation:
      'Gas, bloating, and dry irregularity arise when Vata dries or cools the gut—often worsened by rushing, cold foods, or irregular timings.',
    suggestion:
      'Favor warm, moist, freshly cooked meals seasoned with cumin, ajwain (carom seeds), or hing (asafoetida), and sit quietly for 5 minutes after finishing.',
  },
  pitta_acidity: {
    title: 'Balancing Excess Acidity & Heat',
    explanation:
      'Sour belching or heartburn indicates sharpened Pitta in the stomach—often triggered by spicy takeout, sour ferments, or skipping meals.',
    suggestion:
      'Tone down sharp chilies and vinegar; finish meals with a pinch of roasted fennel seeds (Saunf) and keep at least 2–3 hours between dinner and bedtime.',
  },
  ati_matra_habit: {
    title: 'Breaking the "Extra Bites" Habit',
    explanation:
      'Continuing past comfortable satisfaction out of taste or politeness turns nourishing Aahar into Ati-Matra, tiring the digestive organs.',
    suggestion:
      'Serve your full intended portion onto your plate before sitting down rather than keeping serving bowls within reach, and take a slow breath halfway through.',
  },
  hina_matra_habit: {
    title: 'Preventing Daytime Undereating & Late Cravings',
    explanation:
      'Skimping on nourishment during active daylight hours undermines daytime Agni and often rebounds into unstructured evening snacking.',
    suggestion:
      'Prioritize a wholesome, warm midday lunch between 12:00 and 1:30 PM when digestive fire is naturally at its peak.',
  },
  swing_quantity: {
    title: 'Evening Out Day-to-Night Portion Swings',
    explanation:
      'Eating minimally all day and compensating with a large late dinner places the heaviest digestive burden when Agni is winding down for sleep.',
    suggestion:
      'Shift roughly 45–50% of your daily nourishment to lunch and keep dinner warm, soupy, and easily digestible.',
  },
  rushed_eating: {
    title: 'Slowing Down Fast Eating (Nati-Druta)',
    explanation:
      'Finishing in under 10 minutes bypasses thorough chewing—the first stage of digestion—and causes satiety signals to arrive only after overeating has occurred.',
    suggestion:
      'Set your spoon or fork down between bites for the first half of your meal and chew each mouthful until smooth before swallowing.',
  },
  prolonged_eating: {
    title: 'Keeping Meals Warm & Focused',
    explanation:
      'Stretching meals beyond 40 minutes cools food and blurs the boundary between mealtime and continuous grazing.',
    suggestion:
      'Set aside a dedicated 20-minute window for warm meals so food stays pleasant in temperature and digestion gets a clear start and finish.',
  },
  inconsistent_pace: {
    title: 'Creating a Calm Mealtime Anchor',
    explanation:
      'When work stress dictates eating speed, the nervous system stays in fight-or-flight mode rather than rest-and-digest mode.',
    suggestion:
      'Take three slow belly breaths before lifting your first bite—this simple pause signals your body to shift into digestive readiness.',
  },
  screen_distraction: {
    title: 'Practicing Screen-Free First Bites (Tanmana Bhunjita)',
    explanation:
      'Scrolling or watching videos diverts awareness away from taste and fullness cues, quietly encouraging both Ati-Matra and poor chewing.',
    suggestion:
      'Keep your phone face-down in another room for just the first 10 minutes of each meal so you connect with flavor and natural satiety.',
  },
  stressed_eating: {
    title: 'Stepping Away from Work While Eating',
    explanation:
      'Eating at a desk or on the move constricts abdominal breathing and weakens enzyme release, even when the food itself is healthy.',
    suggestion:
      'Step away from screens and tasks for 15 minutes—sitting upright on a chair or mat lets the diaphragm and stomach work smoothly.',
  },
  late_heavy_dinner: {
    title: 'Lightening & Advancing Evening Meals',
    explanation:
      'Heavy meals after 8:30 PM meet naturally declining evening Agni, often resulting in restless sleep and morning heaviness.',
    suggestion:
      'Aim to finish dinner 2.5 to 3 hours before bed, favoring light combinations such as moong dal khichdi, steamed vegetables, or warm vegetable soup.',
  },
  skipped_meals: {
    title: 'Respecting Regular Meal Intervals',
    explanation:
      'Going long stretches past true hunger destabilizes blood sugar and aggravates Vata-Pitta discomfort.',
    suggestion:
      'Leave 3.5 to 4.5 hours between main meals with minimal grazing in between, and carry wholesome backups like soaked almonds if delays are unavoidable.',
  },
  frequent_snacking: {
    title: 'Allowing Complete Digestion Between Meals',
    explanation:
      'Snacking before the prior meal has fully digested creates Adhyashana (eating upon undigested food), dulling clarity of hunger.',
    suggestion:
      'Sip warm water or herbal tea if mild urges arise between meals, letting genuine hunger build cleanly before the next plate.',
  },
  cold_water_meals: {
    title: 'Replacing Iced Drinks with Warm Sips',
    explanation:
      'Ice-cold beverages during meals constrict digestive vessels and dampen the warmth of Agni right when food needs breaking down.',
    suggestion:
      'Switch to small sips of room-temperature or warm water (or lightly spiced buttermilk at lunch) during meals, saving larger hydration for 30–45 minutes apart.',
  },
  dry_caffeinated: {
    title: 'Balancing Caffeine with Warm Hydration',
    explanation:
      'Relying heavily on coffee or strong tea dries gut moisture and creates artificial alertness that masks real hunger or fatigue.',
    suggestion:
      'Begin the morning with a glass of warm plain water before caffeinated drinks, and switch afternoon tea to roasted cumin-fennel or tulsi infusion.',
  },
  water_before_meal: {
    title: 'Timing Pre-Meal Hydration Wisely',
    explanation:
      'Drinking a full glass of water right before eating dilutes gastric warmth and occupies space needed for solid nourishment.',
    suggestion:
      'Finish full glasses of water at least 30 minutes prior to eating, taking only gentle small sips while you dine.',
  },
  heavy_leftover_food: {
    title: 'Choosing Freshly Cooked Warmth Over Heavy Leftovers',
    explanation:
      'Ayurveda teaches that freshly prepared warm meals retain Prana (vitality) and digest cleanly, whereas dense leftovers and deep-fried foods tax Agni.',
    suggestion:
      'Cook simpler one-pot fresh meals on busy days and brighten richer dishes with digestive spices like black pepper, ginger, and turmeric.',
  },
  cold_dry_food: {
    title: 'Warming Up Cold & Dry Meals',
    explanation:
      'Frequent raw, refrigerated, or dry packaged foods require extra digestive heat to warm up and tend to increase gas and dryness.',
    suggestion:
      'Lightly steam or sauté vegetables with warming spices and a drizzle of healthy oil rather than eating meals straight from the refrigerator.',
  },
  spicy_takeout_food: {
    title: 'Moderating Excess Heat & Takeout Intensity',
    explanation:
      'Excess chili, sour sauces, and restaurant oils inflame the digestive lining over time and mask subtle natural flavors.',
    suggestion:
      'Balance bold flavors with cooling herbs (coriander, fennel, mint) and prioritize mild home-cooked meals most days of the week.',
  },
};
export function evaluateAssessment(answers: Record<string, 'A' | 'B' | 'C' | 'D'>): AssessmentProfile {
  let matraTotal = 0;
  let agniTotal = 0;
  let vidhiTotal = 0;
  let postMealTotal = 0;

  const tendencyCounts: Record<TendencyType, number> = {
    sama: 0,
    ati: 0,
    hina: 0,
    tikshna: 0,
  };

  const collectedInsightKeys: string[] = [];

  for (const question of ASSESSMENT_QUESTIONS) {
    const selectedId = answers[question.id] ?? 'A';
    const option = question.options.find((o) => o.id === selectedId) ?? question.options[0];
    matraTotal += option.scores.matra;
    agniTotal += option.scores.agni;
    vidhiTotal += option.scores.vidhi;
    postMealTotal += option.scores.postMeal;
    tendencyCounts[option.tendency] += 1;
    if (option.insightKey) {
      collectedInsightKeys.push(option.insightKey);
    }
  }

  const maxPerDimension = ASSESSMENT_QUESTIONS.length * 10;
  const matraScore = Math.round((matraTotal / maxPerDimension) * 100);
  const agniScore = Math.round((agniTotal / maxPerDimension) * 100);
  const vidhiScore = Math.round((vidhiTotal / maxPerDimension) * 100);
  const postMealScore = Math.round((postMealTotal / maxPerDimension) * 100);

  const overallScore = Math.round((matraScore + agniScore + vidhiScore + postMealScore) / 4);

  const getStatus = (val: number): 'Balanced' | 'Moderate' | 'Needs Care' => {
    if (val >= 76) return 'Balanced';
    if (val >= 54) return 'Moderate';
    return 'Needs Care';
  };

  const dimensions: DimensionScore[] = [
    {
      key: 'matra',
      label: 'Aahar Matra (Quantity)',
      sanskrit: 'Matravat Aahar',
      score: matraScore,
      statusLabel: getStatus(matraScore),
      description: 'Alignment of meal volume with your stomach capacity and activity.',
    },
    {
      key: 'agni',
      label: 'Agni Steadiness',
      sanskrit: 'Jatharagni',
      score: agniScore,
      statusLabel: getStatus(agniScore),
      description: 'Clarity of natural hunger cues and consistent digestive fire.',
    },
    {
      key: 'vidhi',
      label: 'Mindful Aahar Vidhi',
      sanskrit: 'Bhojana Vidhi',
      score: vidhiScore,
      statusLabel: getStatus(vidhiScore),
      description: 'Eating pace, screen-free focus, meal timing, and liquid habits.',
    },
    {
      key: 'postMeal',
      label: 'Post-Meal Vitality',
      sanskrit: 'Trupti & Laghuta',
      score: postMealScore,
      statusLabel: getStatus(postMealScore),
      description: 'Lightness, mental clarity, and digestive ease after eating.',
    },
  ];

  // Determine dominant profile
  const { sama, ati, hina, tikshna } = tendencyCounts;
  let profileCore: Pick<
    AssessmentProfile,
    'id' | 'title' | 'sanskritName' | 'subtitle' | 'summary' | 'ayurvedicExplanation' | 'dailyRoutineSuggestions' | 'herbAndSpiceSupport'
  >;

  if (sama >= 7 && overallScore >= 78) {
    profileCore = {
      id: 'sama_samagni',
      title: 'Harmonious Matra & Balanced Agni',
      sanskritName: 'Sama-Matra · Samagni',
      subtitle: 'Your eating rhythm naturally honors stomach proportion and steady digestive fire.',
      summary:
        'Your responses show strong alignment with Ayurvedic principles of Matravat Aahar (eating in right measure). You generally listen to authentic hunger, stop before heaviness sets in, and maintain supportive mealtime habits.',
      ayurvedicExplanation:
        'In classical texts such as the Charaka Samhita, Sama-Matra is described as food quantity that digests smoothly in due time without disturbing any Dosha, sustaining strength (Bala), complexion, and mental clarity. Your Samagni—balanced digestive fire—transforms nourishment cleanly with minimal Ama (metabolic residue).',
      dailyRoutineSuggestions: [
        'Continue honoring seasonal shifts: slightly lighter meals in humid/spring months and gently warmer, unctuous meals in dry winter weather.',
        'Maintain your 75% fullness threshold and keep midday lunch as your most substantial meal.',
        'Preserve a 12-hour overnight window between an early dinner and morning breakfast to keep Agni crisp.',
      ],
      herbAndSpiceSupport: [
        {
          name: 'Fresh Ginger & Rock Salt',
          sanskrit: 'Adraka · Saindhava',
          role: 'Maintains brisk pre-meal appetite without aggravating heat.',
          howToUse: 'A small slice before heavy or celebratory meals.',
        },
        {
          name: 'Fennel & Cardamom',
          sanskrit: 'Mishreya · Ela',
          role: 'Refreshes the palate and supports smooth post-meal comfort.',
          howToUse: 'Chew 1/2 teaspoon lightly toasted fennel after lunch.',
        },
        {
          name: 'Tulsi Infusion',
          sanskrit: 'Tulasi',
          role: 'Clarifies lightness and supports seasonal respiratory & gut harmony.',
          howToUse: 'Warm herbal cup mid-morning or late afternoon.',
        },
      ],
    };
  } else if (ati >= hina && ati >= tikshna && ati >= 3) {
    profileCore = {
      id: 'ati_mandagni',
      title: 'Abundant Intake & Slower Digestive Fire',
      sanskritName: 'Ati-Matra · Mandagni Tendency',
      subtitle: 'Portion richness, extra bites, or cooled drinks may be dampening your digestive clarity.',
      summary:
        'Your answers point toward Ati-Matra (slightly exceeding comfortable stomach capacity) or habits that slow Agni—such as lingering post-meal drowsiness, muted hunger cues, late dinners, or chilled beverages alongside meals.',
      ayurvedicExplanation:
        'Ayurveda explains that when food quantity exceeds current digestive strength, the stomach loses the open space (Akasha) needed for proper churning. This slows Jatharagni (Mandagni tendency) and leaves heavy metabolic residue (Ama), often felt as afternoon sluggishness, bloating, or waking without clear morning appetite.',
      dailyRoutineSuggestions: [
        'Practice the Kukshi 2:1:1 rule: fill half the stomach with solid food, a quarter with warm liquid/buttermilk, and leave a quarter completely free.',
        'Replace iced or cold drinks during meals with small sips of warm water or ginger-infused water.',
        'Shift heavier grains and rich dishes to midday lunch and keep dinner warm, soupy, and finished 2.5+ hours before sleep.',
        'Take a relaxed 10-minute walk (Shatapavali) after meals instead of sitting or reclining right away.',
      ],
      herbAndSpiceSupport: [
        {
          name: 'Ginger, Lemon & Rock Salt',
          sanskrit: 'Adraka Deepana',
          role: 'Gently sparks sluggish Agni before eating.',
          howToUse: 'Chew a thin slice of fresh ginger with 2 drops lemon and a pinch of salt 10 minutes before lunch.',
        },
        {
          name: 'Cumin, Coriander & Fennel (CCF)',
          sanskrit: 'Jiraka · Dhanyaka · Saunf',
          role: 'Helps clear post-meal heaviness without harsh heat.',
          howToUse: 'Steep 1/2 tsp each in hot water and sip warm between meals.',
        },
        {
          name: 'Black Pepper & Turmeric',
          sanskrit: 'Maricha · Haridra',
          role: 'Lightens dense, creamy, or Kapha-heavy dishes.',
          howToUse: 'Add a pinch of freshly cracked black pepper to cooked dals and vegetables.',
        },
      ],
    };
  }
  else if (hina >= ati && hina >= tikshna && hina >= 3) {
    profileCore = {
      id: 'hina_vishamagni',
      title: 'Light or Irregular Intake & Variable Fire',
      sanskritName: 'Hina-Matra · Vishamagni Tendency',
      subtitle: 'Skipped meals, fast schedules, or cold/dry foods may be unsettling your digestive rhythm.',
      summary:
        'Your responses suggest Hina-Matra (under-nourishing during active hours) or Vishamagni (variable digestive fire). Irregular meal timings, cold or dry convenience foods, and eating under stress can leave you alternating between bloating, fatigue, and late cravings.',
      ayurvedicExplanation:
        'Classical Ayurveda notes that insufficient food quantity (Hina-Matra) deprives bodily tissues (Dhatus) of steady nourishment and elevates Vata (air and space elements). Because Vata governs movement and nervous rhythm, variable schedules or dry cold meals cause Agni to flicker unpredictably—producing gas, dryness, or sudden energy drops.',
      dailyRoutineSuggestions: [
        'Anchor three calm, seated meals at roughly the same hours each day—avoid skipping lunch even on busy days.',
        'Swap dry, cold, or raw refrigerator foods for warm, moist, freshly cooked bowls with a teaspoon of ghee or sesame oil.',
        'Pause for three slow breaths before eating and keep phones/work away during the first 10 minutes of your meal.',
        'Keep dinner nourishing yet gentle—such as spiced moong khichdi, warm stewed vegetables, or oat-rice porridge.',
      ],
      herbAndSpiceSupport: [
        {
          name: 'Ajwain & Cumin',
          sanskrit: 'Yavani · Jiraka',
          role: 'Relieves airy bloating and settles variable Vata digestion.',
          howToUse: 'Temper warm dals or vegetables in ghee with 1/2 tsp cumin and a pinch of ajwain.',
        },
        {
          name: 'Cardamom & Cinnamon',
          sanskrit: 'Ela · Twak',
          role: 'Adds gentle grounding warmth to breakfasts and herbal milk.',
          howToUse: 'Steep a crushed cardamom pod in warm water or spiced morning porridge.',
        },
        {
          name: 'Hing (Asafoetida)',
          sanskrit: 'Hingu',
          role: 'Traditional Vata-pacifying spice for lentils and legumes.',
          howToUse: 'Add a tiny pinch to warm oil tempering when cooking beans or dal.',
        },
      ],
    };
  } else if (tikshna >= 3) {
    profileCore = {
      id: 'tikshna_rushed',
      title: 'Intense Digestive Fire & Fast Pacing',
      sanskritName: 'Tikshnagni · Rushed Vidhi Tendency',
      subtitle: 'Sharp hunger, fast eating speed, or fiery food choices may be straining digestive calm.',
      summary:
        'Your answers highlight brisk or intense digestive heat (Tikshnagni) often paired with fast-paced meals, sharp hunger pangs when delayed, or occasional acidity and post-meal warmth.',
      ayurvedicExplanation:
        'In Ayurveda, Tikshnagni occurs when Pitta (fire and transformation) burns fiercely—digesting quickly yet easily tipping into acidity, irritability, or rushed eating when meals are delayed or overly spicy. Slowing down chewing and cooling excess heat protects digestive tissues while keeping vitality high.',
      dailyRoutineSuggestions: [
        'Avoid letting intense hunger build too long—eat lunch promptly around 12:00–1:00 PM.',
        'Slow your eating pace to at least 15–20 minutes, placing your utensils down periodically to chew thoroughly.',
        'Moderate harsh chili heat, sour vinegar, and excess coffee; balance meals with cooling coriander, mint, cucumber (at lunch), or ghee.',
        'Avoid eating right while multitasking or under deadline pressure.',
      ],
      herbAndSpiceSupport: [
        {
          name: 'Coriander & Fennel Infusion',
          sanskrit: 'Dhanyaka · Mishreya',
          role: 'Cools excess digestive acidity without weakening Agni.',
          howToUse: 'Soak 1 tsp crushed coriander seeds in water overnight or steep lightly and sip at room temperature.',
        },
        {
          name: 'Fresh Cilantro & Mint',
          sanskrit: 'Dhanyaka Patra · Pudina',
          role: 'Soothes fiery meals and refreshes post-meal comfort.',
          howToUse: 'Garnish cooked grains and curries generously after turning off heat.',
        },
        {
          name: 'Rose & Cardamom',
          sanskrit: 'Shatapatri · Ela',
          role: 'Calms Pitta heat and eases irritable hunger.',
          howToUse: 'Enjoy rose-cardamom herbal water or a small spoon of gulkand after spicy meals.',
        },
      ],
    };
  } else {
    profileCore = {
      id: 'madhyama_refine',
      title: 'Steady Core with Targeted Habit Opportunities',
      sanskritName: 'Madhyama Bala · Evolving Rhythm',
      subtitle: 'Your foundation is sound, with a few daily eating habits ready for gentle refinement.',
      summary:
        'You show a balanced intuitive relationship with food in several areas, while specific habits—such as mealtime screens, hydration timing, or occasional portion swings—offer high-impact opportunities to elevate your digestive ease.',
      ayurvedicExplanation:
        'Ayurveda places equal importance on what we eat (Dravya), how much we eat (Matra), and how we eat (Aahar Vidhi). Even a wholesome diet delivers far deeper nourishment when meals are eaten calmly, warmly, and at consistent intervals that let Agni complete each digestive cycle.',
      dailyRoutineSuggestions: [
        'Pick one anchor habit for the next 7 days—such as screen-free first 10 minutes or warm water sipping instead of iced drinks.',
        'Keep lunch as your steady centerpiece meal and leave 3.5–4 hours between meals before snacking.',
        'Check in with your stomach fullness two-thirds through your plate so you finish feeling light and clear.',
      ],
      herbAndSpiceSupport: [
        {
          name: 'Cumin, Coriander & Fennel',
          sanskrit: 'Tridoshic Digestive Tea',
          role: 'Gently harmonizes all three Doshas and supports steady Agni.',
          howToUse: 'Sip warm mid-morning or 45 minutes after lunch.',
        },
        {
          name: 'Fresh Ginger & Turmeric',
          sanskrit: 'Adraka · Haridra',
          role: 'Supports daily digestive resilience and clean metabolism.',
          howToUse: 'Include freshly grated ginger and a pinch of turmeric in everyday cooking.',
        },
        {
          name: 'Roasted Fennel Seeds',
          sanskrit: 'Saunf',
          role: 'Signals completion of the meal and aids calm post-meal digestion.',
          howToUse: 'Chew 1/2 teaspoon slowly after lunch or dinner.',
        },
      ],
    };
  }

  // Pick up to 4 most relevant personalized insights from user's actual choices
  const uniqueInsights: PersonalizedInsight[] = [];
  const seenTitles = new Set<string>();
  for (const key of collectedInsightKeys) {
    const item = INSIGHT_LIBRARY[key];
    if (item && !seenTitles.has(item.title)) {
      seenTitles.add(item.title);
      uniqueInsights.push(item);
      if (uniqueInsights.length >= 4) break;
    }
  }

  if (uniqueInsights.length === 0) {
    uniqueInsights.push({
      title: 'Strong Alignment with Matravat Aahar',
      explanation:
        'Across quantity, hunger clarity, pace, and food warmth, your current habits align closely with classical Ayurvedic Aahar Vidhi guidelines.',
      suggestion:
        'Notice subtle seasonal changes—favoring slightly lighter foods in spring and warmer, nourishing dishes in colder months.',
    });
  }

  const overallStatus: AssessmentProfile['overallStatus'] =
    overallScore >= 76
      ? 'Balanced'
      : overallScore >= 55
        ? 'Moderately Balanced'
        : 'Needs Gentle Rebalancing';

  return {
    ...profileCore,
    overallScore,
    overallStatus,
    dimensions,
    personalizedInsights: uniqueInsights,
    dailyRoutineSuggestions: profileCore.dailyRoutineSuggestions,
    herbAndSpiceSupport: profileCore.herbAndSpiceSupport,
  };
}
