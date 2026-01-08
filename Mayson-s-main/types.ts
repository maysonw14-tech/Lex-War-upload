



export enum WordType {
  NOUN = 'Noun',
  VERB = 'Verb',
  ADJECTIVE = 'Adjective',
  ADVERB = 'Adverb',
  OTHER = 'Other'
}

export interface DefinitionGroup {
  partOfSpeech: string;
  meanings: {
    english: string;
    translation: string;
    example: string;
    exampleTranslation: string;
  }[];
}

export interface Scenario {
  context: string;
  english: string;
  translation: string;
}

export interface WordDetails {
  word: string;
  phonetic: string;
  definitions: DefinitionGroup[];
  scenarios: Scenario[];
  visualPrompt: string; 
  funFact: string; 
  mnemonic: string; 
  idioms: string[]; 
  forms: string[];
}

export interface PronunciationResult {
  score: number;
  feedback: string;
  phonemesToImprove: string[];
}

export interface LibraryItem {
  word: string;
  category?: string;
  addedAt: number;
  mistakes: number;
  status: 'learning' | 'mastered';
  nextReview?: number;
  interval?: number;
  reviewsSuccessful: number;
}

export interface MistakeRecord {
  id: string;
  questionId: string;
  questionPrompt: string;
  correctAnswer: string;
  userAnswer?: string;
  explanation: string;
  type: BattleQuestionType;
  difficultyLevel: string;
  timestamp: number;
  mistakeCount: number;
}


export interface UserMeta {
  streak: number;
  lastVisit: number;
  totalPronunciationChecks: number;
  totalPronunciationScore: number;
  totalXp: number;
  searchCount: number;
  hasSeenFeedbackPrompt: boolean;
  rpgLevel?: number;
  rpgXp?: number;
  rpgStats?: { atk: number; def: number; maxHp: number; currentHp: number };
}

export interface TestContent {
  story: string; 
  targetSentence: string; 
  question: string; 
}

export interface TestEvaluation {
  score: number; 
  feedback: string;
  passed: boolean;
}

export interface ComparisonPoint {
  attribute: string;
  values: { [word: string]: string };
}

export interface WordNuance {
  word: string;
  definition: string;
  keyDifferentiator: string;
  tags: string[];
}

export interface ComparisonResult {
  sharedConcept: string;
  nuances: WordNuance[];
  matrix: ComparisonPoint[];
  bestFit: {
    scenario: string;
    correctWord: string;
    explanation: string;
  }[];
}

export type BattleQuestionType = 'vocab' | 'grammar' | 'pronunciation' | 'collocation' | 'idiom' | 'visual_vocab' | 'mcq' | 'pairing' | 'blank' | 'sentence_order';

export interface BattleQuestion {
  id: string;
  type: BattleQuestionType;
  prompt: string;
  context?: string;
  hint?: string;
  options?: string[];
  correctAnswer: string;
  difficulty: number;
  shuffledParts?: string[];
  visualPrompt?: string;
  explanation?: string;
  isRetry?: boolean;
  pairs?: { term: string; match: string }[];
}

export type EnemyClass = 'berserker' | 'tank' | 'rogue' | 'mage' | 'elite' | 'ghost' | 'boss';

export interface RPGEnemy {
  id: string;
  name: string;
  class: EnemyClass;
  level: number;
  maxHp: number;
  currentHp: number;
  maxMana: number;
  currentMana: number;
  atk: number;
  def: number;
  critChance: number;
  growthFactor: number;
  description?: string;
  featureBonus?: string;
  perk?: {
      type: 'atk' | 'def' | 'hp' | 'mana' | 'critChance';
      value: number;
      label: string;
  };
  statusEffects: {
    frozen: number;
    burning: number;
    defReduction: number;
    defReductionTimer: number;
  };
  skills: {
    proactives: ('fire' | 'ice' | 'thunder' | 'light')[];
    passives: ('wind' | 'dark')[];
    elementalLevel: number;
  };
  spriteUrl: string;
  allySpriteUrl: string;
}

export interface RPGPet {
    id: string;
    name: string;
    originalName: string;
    class: EnemyClass;
    level: number;
    xp: number;
    maxXp: number;
    hp: number;
    maxHp: number;
    mana: number;
    maxMana: number;
    atk: number;
    def: number;
    critChance: number;
    growthFactor: number;
    statPoints: number;
    description?: string;
    featureBonus?: string;
    perk?: {
        type: 'atk' | 'def' | 'hp' | 'mana' | 'critChance';
        value: number;
        label: string;
    };
    skills: {
        proactives: ('fire' | 'ice' | 'thunder' | 'light')[];
        passives: ('wind' | 'dark')[];
        elementalLevel: number;
    };
    spriteUrl: string;
    statusEffects?: {
        frozen: number;
        burning: number;
        defReduction: number;
        defReductionTimer: number;
    };
}

export type RPGItemType = 'head' | 'chest' | 'hands' | 'relic' | 'feet' | 'weapon';
export type RPGItemQuality = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export interface ItemPerk {
  type: 'armor_pen' | 'crit_chance' | 'burn_res' | 'freeze_res' | 'def_red_res';
  value: number;
  label: string;
}

export interface RPGItem {
  id: string; 
  name: string;
  type: RPGItemType;
  quality: RPGItemQuality;
  level: number;
  upgradeLevel: number;
  qualityBonus: number;
  iconUrl: string;
  baseStats: {
    atk: number;
    def: number;
    hp: number;
    mana: number;
  };
  perk?: ItemPerk; 
}

export interface TriviaCampaign {
    country: string;
    theme: string;
    activeTrivia: {
        id: string;
        question: string;
        answer?: string;
        options?: string[];
        correctAnswer?: string;
        explanation: string;
    };
}

export interface StoryArc {
    title: string;
    premise: string;
    clues: string[];
    resolution: string;
    theme: 'conspiracy' | 'investigation' | 'mythology' | 'heist' | 'virus';
}

export interface RPGPlayerState {
    level: number;
    xp: number;
    maxXp: number;
    hp: number;
    maxHp: number;
    mana: number;
    maxMana: number;
    atk: number;
    def: number;
    coins: number;
    statPoints: number;
    avatarUrl?: string; 
    inventory: RPGItem[];
    pets: RPGPet[];
    activePetId: string | null;
    equipment: {
        head: RPGItem | null;
        chest: RPGItem | null;
        hands: RPGItem | null;
        relic: RPGItem | null;
        feet: RPGItem | null;
        weapon: RPGItem | null;
    };
    elemental: {
        fire: number;
        ice: number;
        thunder: number;
        wind: number;
        dark: number;
        light: number;
    };
    campaign: {
        currentWave: number;
        storyArc: StoryArc | null;
        collectedClues: string[];
        activeTrivia?: TriviaCampaign | null;
    };
    statusEffects: {
        frozen: number;
        burning: number;
        defReduction: number;
        defReductionTimer: number;
    };
}