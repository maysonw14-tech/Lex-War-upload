


import { GoogleGenAI, Type } from "@google/genai";
import { WordDetails, TestContent, TestEvaluation, ComparisonResult, BattleQuestion, RPGEnemy, EnemyClass, TriviaCampaign, BattleQuestionType, PronunciationResult } from "../types";
import COLLOCATION_QUESTIONS from "../components/collocation";
import VOCAB_QUESTIONS from "../components/Vocab";
import IDIOM_QUESTIONS from "../components/idioms";
import PAIRING_QUESTIONS from "../components/pairing";
import BLANK_QUESTIONS from "../components/blank";
import TRIVIA_DATA from "../components/trivia";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Matrix Data Structure from CSV with Description
const NPC_DATA = [
    { name: "Gas", skill: "Hell Fire", desc: "A sentient cloud of toxic fumes born from the city's underbelly. It suffocates foes in silence before igniting in a flash. Its form shifts like smoke in the wind.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/Gas.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/Gas-ezgif.com-reverse.gif" },
    { name: "Alien", skill: "Thunder Splash", desc: "A wanderer from a distant star system seeking energy. Its advanced biology allows it to channel raw electricity. Its logic is incomprehensible to humans.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/alien.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/alien-ezgif.com-reverse.gif" },
    { name: "Bat", skill: "Life Steal", desc: "A creature of the night that feasts on the vitality of others. It moves with terrifying speed in the dark. Its screech can paralyze prey.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/bat.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/bat-ezgif.com-reverse.gif" },
    { name: "Bear", skill: "Thunder Splash", desc: "A guardian of the ancient forests with immense endurance. Its roar shakes the earth and summons storms. Few can withstand its mighty paws.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/bear.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/bear-ezgif.com-reverse.gif" },
    { name: "Bee", skill: "Wind Steps", desc: "A giant soldier from the royal hive. It moves with blinding speed to protect its queen. Its sting carries a potent venom.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/bee.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/bee-ezgif.com-reverse.gif" },
    { name: "Blue Blop", skill: "Healing", desc: "A mysterious gelatinous entity from the deep caves. It pulses with a soothing blue light. It absorbs magic to heal itself and allies.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/blue%20blop.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/blue%20blop-ezgif.com-reverse.gif" },
    { name: "Crab", skill: "Storm", desc: "A crustacean with a shell harder than steel. It dwells in coastal storms, absorbing their fury. Its pincers can snap bone effortlessly.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/crab.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/crab-ezgif.com-reverse.gif" },
    { name: "Dragonfly", skill: "Wind Steps", desc: "An ancient predator of the skies with shimmering wings. It darts through the air faster than the eye can follow. It is a master of aerial combat.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/dragonfly.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/dragonfly-ezgif.com-reverse.gif" },
    { name: "Eel", skill: "Storm", desc: "A serpent of the deep ocean charged with bio-electricity. It strikes from the darkness with shocking precision. Sailors fear its glowing eyes.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/eel.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/eel-ezgif.com-reverse.gif" },
    { name: "Hydra", skill: "Thunder Splash", desc: "A multi-headed beast from mythology reborn. If one head rests, the others channel magical energy. It is a font of raw, chaotic power.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/hydra.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/hydra-ezgif.com-reverse.gif" },
    { name: "Jelly", skill: "Healing", desc: "A floating organism that drifts through the air like water. Its touch can mend wounds or drain energy. It is peaceful until provoked.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/jelly.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/jelly-ezgif.com-reverse.gif" },
    { name: "Knight", skill: "Hell Fire", desc: "A fallen warrior whose armor is animated by a cursed flame. It remembers only battle. Its shield is impenetrable to most attacks.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/knight.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/knight-ezgif.com-reverse.gif" },
    { name: "Monster", skill: "Healing", desc: "A creature stitched together from nightmares. Despite its appearance, it possesses great restorative magic. It wanders seeking a purpose.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/monster.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/monster-ezgif.com-reverse.gif" },
    { name: "Scorpion", skill: "Life Steal", desc: "A desert stalker with a venomous tail. It waits buried in the sand for its prey. Its sting drains the life force of its victims.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/scorpion.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/scorpion-ezgif.com-reverse.gif" },
    { name: "Shark", skill: "Storm", desc: "The apex predator of the seas, now adapted to land. It smells blood from miles away. It moves with the ferocity of a hurricane.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/shark.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/shark-ezgif.com-reverse.gif" },
    { name: "Snowflake", skill: "Storm", desc: "An elemental spirit of pure ice. It brings the winter wherever it goes. Its beauty hides a deadly freezing aura.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/snowflake.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/snowflake-ezgif.com-reverse.gif" },
    { name: "Whale", skill: "Healing", desc: "A gentle giant of the ocean depths. Its song has the power to soothe and heal. It acts as a massive shield for its pod.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/whale.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/whale-ezgif.com-reverse.gif" },
    { name: "Wolf", skill: "Wind Steps", desc: "A hunter that moves like the wind. It targets weak points with surgical precision. The pack is never far behind.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/wolf.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/wolf-ezgif.com-reverse.gif" },
    { name: "Yeti", skill: "Storm", desc: "The abominable snowman of the high peaks. It commands the blizzards of the north. It is solitary but fiercely territorial.", leftUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/yeti.gif", rightUrl: "https://raw.githubusercontent.com/maysonw14-tech/asset/refs/heads/main/npcs/yeti-ezgif.com-reverse.gif" }
];

// Mapping Skill string to system types
const SKILL_MAP: Record<string, 'fire' | 'ice' | 'thunder' | 'light' | 'wind' | 'dark'> = {
    "Hell Fire": "fire",
    "Storm": "ice",
    "Thunder Splash": "thunder",
    "Healing": "light",
    "Wind Steps": "wind",
    "Life Steal": "dark"
};

const cleanJSON = (text: string): string => text.replace(/```json|```/g, '').trim();

const sanitizeWordData = (data: any): WordDetails => {
    const cleanStr = (str: string, maxLength = 500) => {
        if (typeof str !== 'string') return '';
        return str.length > maxLength ? str.substring(0, maxLength) + '...' : str.replace(/^[A-Z]+-\d+\s*/, '');
    };
    return {
        word: cleanStr(data.word, 50), phonetic: cleanStr(data.phonetic, 50), forms: Array.isArray(data.forms) ? data.forms.map((f: any) => cleanStr(f, 30)) : [],
        definitions: Array.isArray(data.definitions) ? data.definitions.map((g: any) => ({ partOfSpeech: cleanStr(g.partOfSpeech, 20), meanings: Array.isArray(g.meanings) ? g.meanings.map((m: any) => ({ english: cleanStr(m.english), translation: cleanStr(m.translation), example: cleanStr(m.example), exampleTranslation: cleanStr(m.exampleTranslation) })) : [] })) : [],
        scenarios: Array.isArray(data.scenarios) ? data.scenarios.map((s: any) => ({ context: cleanStr(s.context, 30), english: cleanStr(s.english), translation: cleanStr(s.translation) })) : [],
        idioms: Array.isArray(data.idioms) ? data.idioms.map((i: any) => cleanStr(i, 100)) : [],
        mnemonic: cleanStr(data.mnemonic), funFact: cleanStr(data.funFact), visualPrompt: cleanStr(data.visualPrompt)
    };
};

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const withRetry = async <T>(fn: () => Promise<T>, retries = 5, delay = 10000): Promise<T> => {
    try { return await fn(); } catch (error: any) {
        const isRateLimit = error?.status === 429 || error?.code === 429 || error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED');
        if (retries > 0 && isRateLimit) { await wait(delay); return withRetry(fn, retries - 1, delay * 2); }
        throw error;
    }
};

export const lookupWord = async (input: string, sourceLang: string = 'Auto', targetLang: string = 'English'): Promise<WordDetails> => {
  return withRetry(async () => {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview", contents: `Analyze word: "${input}" (Source:${sourceLang}, Target:${targetLang}). Provide concise JSON.`,
        config: { responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { word: { type: Type.STRING }, phonetic: { type: Type.STRING }, forms: { type: Type.ARRAY, items: { type: Type.STRING } }, definitions: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { partOfSpeech: { type: Type.STRING }, meanings: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { english: { type: Type.STRING }, translation: { type: Type.STRING }, example: { type: Type.STRING }, exampleTranslation: { type: Type.STRING } } } } } } }, scenarios: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { context: { type: Type.STRING }, english: { type: Type.STRING }, translation: { type: Type.STRING } } } }, idioms: { type: Type.ARRAY, items: { type: Type.STRING } }, mnemonic: { type: Type.STRING }, funFact: { type: Type.STRING }, visualPrompt: { type: Type.STRING } }, required: ["word", "phonetic", "definitions", "scenarios", "visualPrompt"] } }
      });
      return sanitizeWordData(JSON.parse(cleanJSON(response.text)));
  });
};

export const compareWords = async (words: string[], targetLang: string = 'English'): Promise<ComparisonResult> => {
  return withRetry(async () => {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview", contents: `Compare [${words.join(', ')}]. Target Language: ${targetLang}. JSON Output.`,
        config: { 
            responseMimeType: "application/json", 
            responseSchema: { 
                type: Type.OBJECT, 
                properties: { 
                    sharedConcept: { type: Type.STRING }, 
                    nuances: { 
                        type: Type.ARRAY, 
                        items: { 
                            type: Type.OBJECT, 
                            properties: { 
                                word: { type: Type.STRING }, 
                                definition: { type: Type.STRING }, 
                                keyDifferentiator: { type: Type.STRING }, 
                                tags: { type: Type.ARRAY, items: { type: Type.STRING } } 
                            } 
                        } 
                    }, 
                    matrix: { 
                        type: Type.ARRAY, 
                        items: { 
                            type: Type.OBJECT, 
                            properties: { 
                                attribute: { type: Type.STRING }, 
                                values: { 
                                    type: Type.OBJECT, 
                                    // Let the model fill values dynamically
                                } 
                            } 
                        } 
                    },
                    bestFit: {
                        type: Type.ARRAY,
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                scenario: { type: Type.STRING },
                                correctWord: { type: Type.STRING },
                                explanation: { type: Type.STRING }
                            }
                        }
                    }
                } 
            } 
        }
      });
      return JSON.parse(cleanJSON(response.text || "{}"));
  });
};

export const generateVisualAid = async (prompt: string): Promise<string> => {
  return withRetry(async () => {
      const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: prompt }] },
      });
      for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
              return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          }
      }
      return ''; 
  });
};

export const checkPronunciation = async (audioBase64: string, targetWord: string): Promise<PronunciationResult> => {
    return withRetry(async () => {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: {
                parts: [
                    { inlineData: { mimeType: 'audio/webm', data: audioBase64 } },
                    { text: `Analyze the pronunciation of the word "${targetWord}". Return JSON.` }
                ]
            },
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        score: { type: Type.INTEGER },
                        feedback: { type: Type.STRING },
                        phonemesToImprove: { type: Type.ARRAY, items: { type: Type.STRING } }
                    }
                }
            }
        });
        return JSON.parse(cleanJSON(response.text || "{}"));
    });
};

export const generateTestContent = async (word: string): Promise<TestContent> => {
    return withRetry(async () => {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `Create a test for the word "${word}". Return JSON. Style: Harry Potter.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        story: { type: Type.STRING },
                        targetSentence: { type: Type.STRING },
                        question: { type: Type.STRING }
                    }
                }
            }
        });
        return JSON.parse(cleanJSON(response.text || "{}"));
    });
};

export const evaluateUsage = async (word: string, question: string, answer: string): Promise<TestEvaluation> => {
    return withRetry(async () => {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: `Evaluate usage of "${word}". Question: "${question}". Answer: "${answer}". Return JSON.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        score: { type: Type.INTEGER },
                        feedback: { type: Type.STRING },
                        passed: { type: Type.BOOLEAN }
                    }
                }
            }
        });
        return JSON.parse(cleanJSON(response.text || "{}"));
    });
};

export const getTriviaForWave = (wave: number): TriviaCampaign | null => {
    const chapterId = Math.ceil(wave / 5);
    const waveId = ((wave - 1) % 5) + 1;
    const chapter = TRIVIA_DATA.find(c => c.chapter_id === chapterId);
    if (!chapter) return null;
    const waveData = chapter.waves.find(w => w.wave_id === waveId);
    if (!waveData) return null;
    
    const variant = waveData.variants[Math.floor(Math.random() * waveData.variants.length)];
    
    return {
        country: chapter.country,
        theme: chapter.theme_description,
        activeTrivia: {
            id: variant.id,
            question: variant.question,
            answer: variant.answer_reveal,
            options: variant.options,
            correctAnswer: variant.correct_answer,
            explanation: variant.explanation
        }
    };
};

export const generateBattleQuestion = async (
    cefrLevel: number,
    type: BattleQuestionType,
    history: string[] = [],
    specialType?: 'boss' | 'elite'
): Promise<{ question: BattleQuestion, enemy: RPGEnemy }> => {
    let question: BattleQuestion | null = null;
    let pool: any[] = [];
    
    const levels = ["A2", "B1", "B2", "C1", "C2"];
    const levelStr = levels[cefrLevel];

    if (type === 'vocab') pool = VOCAB_QUESTIONS;
    else if (type === 'collocation') pool = COLLOCATION_QUESTIONS;
    else if (type === 'idiom') pool = IDIOM_QUESTIONS;
    else if (type === 'pairing') pool = PAIRING_QUESTIONS;
    else if (type === 'blank') pool = BLANK_QUESTIONS;
    
    if (pool.length > 0) {
        const levelPool = pool.filter(q => q.cefr_level === levelStr);
        if (levelPool.length > 0) {
            let available = levelPool.filter(q => !history.includes(q.id.toString()));
            if (available.length === 0) available = levelPool;
            const q = available[Math.floor(Math.random() * available.length)];
            
            question = {
                id: q.id.toString(), type: type, prompt: q.question, options: q.options, correctAnswer: q.correct_answer,
                difficulty: cefrLevel, explanation: q.explanation, pairs: q.pairs,
            };
        }
    }

    if (!question) {
       if (type !== 'vocab') return generateBattleQuestion(cefrLevel, 'vocab', history, specialType);
       question = { id: 'failsafe', type: 'vocab', prompt: 'The brave knight carries a ___ to protect himself.', options: ['shield', 'spoon', 'shoe', 'cloud'], correctAnswer: 'shield', difficulty: 0, explanation: 'A shield protects you.', isRetry: true };
    }

    const npc = NPC_DATA[Math.floor(Math.random() * NPC_DATA.length)];
    const level = cefrLevel * 10 + 1 + Math.floor(Math.random() * 5);
    const hp = 100 + level * 20;
    
    const skillKey = SKILL_MAP[npc.skill] || 'fire';
    const isPassive = skillKey === 'wind' || skillKey === 'dark';
    
    const proactives: ('fire' | 'ice' | 'thunder' | 'light')[] = [];
    const passives: ('wind' | 'dark')[] = [];

    if (isPassive) passives.push(skillKey as 'wind' | 'dark');
    else proactives.push(skillKey as 'fire' | 'ice' | 'thunder' | 'light');

    // Generate Randomized Perk
    const perkTypes: ( 'atk' | 'def' | 'hp' | 'mana' | 'critChance')[] = ['atk', 'def', 'hp', 'mana', 'critChance'];
    const selectedPerkType = perkTypes[Math.floor(Math.random() * perkTypes.length)];
    const perkValue = Math.floor(Math.random() * 51); // 0 to 50
    const perkLabel = `+${perkValue}% ${selectedPerkType === 'atk' ? 'Attack' : selectedPerkType === 'def' ? 'Defense' : selectedPerkType === 'hp' ? 'Health' : selectedPerkType === 'mana' ? 'Mana' : 'Crit Chance'}`;

    const enemy: RPGEnemy = {
        id: `enemy-${Date.now()}`, name: npc.name, class: (['berserker', 'tank', 'rogue', 'mage'][Math.floor(Math.random()*4)]) as EnemyClass,
        level: level, maxHp: hp, currentHp: hp, maxMana: 50 + level * 10, currentMana: 50 + level * 10,
        atk: 10 + level * 2, def: 5 + level, critChance: 0, growthFactor: 1.0, description: npc.desc,
        perk: { type: selectedPerkType, value: perkValue, label: perkLabel },
        statusEffects: { frozen: 0, burning: 0, defReduction: 0, defReductionTimer: 0 },
        skills: { proactives: proactives, passives: passives, elementalLevel: Math.ceil(level / 10) },
        spriteUrl: npc.leftUrl, allySpriteUrl: npc.rightUrl
    };

    // Apply Perk Bonus to Initial Stats
    if (selectedPerkType === 'hp') {
        enemy.maxHp = Math.floor(enemy.maxHp * (1 + perkValue / 100));
        enemy.currentHp = enemy.maxHp;
    } else if (selectedPerkType === 'mana') {
        enemy.maxMana = Math.floor(enemy.maxMana * (1 + perkValue / 100));
        enemy.currentMana = enemy.maxMana;
    } else if (selectedPerkType === 'atk') {
        enemy.atk = Math.floor(enemy.atk * (1 + perkValue / 100));
    } else if (selectedPerkType === 'def') {
        enemy.def = Math.floor(enemy.def * (1 + perkValue / 100));
    } else if (selectedPerkType === 'critChance') {
        enemy.critChance = (enemy.critChance || 0) + perkValue;
    }


    if (specialType === 'boss') {
        enemy.class = 'boss'; enemy.maxHp *= 3; enemy.currentHp *= 3; enemy.atk *= 1.5; enemy.name = "Boss " + enemy.name;
    } else if (specialType === 'elite') {
        enemy.class = 'elite'; enemy.maxHp *= 1.5; enemy.currentHp *= 1.5; enemy.atk *= 1.2; enemy.name = "Elite " + enemy.name;
    }

    return { question: question!, enemy };
};