
const COLLOCATION_QUESTIONS = [
  {
    "id": 1,
    "cefr_level": "A2",
    "question": "You should ___ a look at this map.",
    "options": ["have", "make", "do", "put"],
    "correct_answer": "have",
    "explanation": "Correct: The collocation is 'have a look' (or 'take a look'). Wrong: You do not 'make', 'do', or 'put' a look."
  },
  {
    "id": 2,
    "cefr_level": "A2",
    "question": "The wizard ___ a mistake in his spell.",
    "options": ["made", "did", "took", "had"],
    "correct_answer": "made",
    "explanation": "Correct: We say 'make a mistake'. Wrong: 'Did', 'took', and 'had' do not collocate with mistake."
  },
  {
    "id": 3,
    "cefr_level": "A2",
    "question": "It is getting dark; we should ___ a fire.",
    "options": ["start", "do", "catch", "go"],
    "correct_answer": "start",
    "explanation": "Correct: You 'start' (or build/light) a fire. Wrong: You do not 'do', 'catch', or 'go' a fire."
  },
  {
    "id": 4,
    "cefr_level": "A2",
    "question": "Please ___ attention to the king's orders.",
    "options": ["pay", "give", "make", "take"],
    "correct_answer": "pay",
    "explanation": "Correct: The set phrase is 'pay attention'. Wrong: 'Give', 'make', and 'take' are not used with attention in this context."
  },
  {
    "id": 5,
    "cefr_level": "A2",
    "question": "The knight decided to ___ a break from fighting.",
    "options": ["take", "do", "make", "get"],
    "correct_answer": "take",
    "explanation": "Correct: We say 'take a break'. Wrong: 'Do', 'make', and 'get' are incorrect here."
  },
  {
    "id": 6,
    "cefr_level": "A2",
    "question": "I need to ___ my homework before the quest.",
    "options": ["do", "make", "create", "build"],
    "correct_answer": "do",
    "explanation": "Correct: You always 'do' homework. Wrong: You never 'make' homework."
  },
  {
    "id": 7,
    "cefr_level": "B1",
    "question": "Can you ___ a secret about the treasure?",
    "options": ["keep", "hold", "stay", "save"],
    "correct_answer": "keep",
    "explanation": "Correct: The phrase is 'keep a secret'. Wrong: 'Hold', 'stay', and 'save' are not standard collocations for secrets."
  },
  {
    "id": 8,
    "cefr_level": "B1",
    "question": "The sudden noise ___ me a fright.",
    "options": ["gave", "made", "took", "put"],
    "correct_answer": "gave",
    "explanation": "Correct: Something 'gives you a fright'. Wrong: It does not 'make', 'take', or 'put' a fright."
  },
  {
    "id": 9,
    "cefr_level": "B1",
    "question": "We need to ___ time by taking the shortcut.",
    "options": ["save", "keep", "hold", "win"],
    "correct_answer": "save",
    "explanation": "Correct: You 'save time' by being efficient. Wrong: 'Keep' and 'hold' don't imply efficiency; 'win time' is not a standard phrase."
  },
  {
    "id": 10,
    "cefr_level": "B1",
    "question": "The archer ___ the target perfectly.",
    "options": ["hit", "beat", "knocked", "shot"],
    "correct_answer": "hit",
    "explanation": "Correct: You 'hit the target'. Wrong: You shoot *at* a target, but you 'hit' it when successful."
  },
  {
    "id": 11,
    "cefr_level": "B1",
    "question": "It is time to ___ goodbye to the village.",
    "options": ["say", "tell", "speak", "talk"],
    "correct_answer": "say",
    "explanation": "Correct: You 'say goodbye'. Wrong: You do not 'tell', 'speak', or 'talk' goodbye."
  },
  {
    "id": 12,
    "cefr_level": "B1",
    "question": "The potion will ___ you good.",
    "options": ["do", "make", "give", "bring"],
    "correct_answer": "do",
    "explanation": "Correct: The idiom is 'it will do you good'. Wrong: 'Make', 'give', and 'bring' are incorrect."
  },
  {
    "id": 13,
    "cefr_level": "B1",
    "question": "Please ___ an eye on my horse while I go inside.",
    "options": ["keep", "put", "hold", "set"],
    "correct_answer": "keep",
    "explanation": "Correct: 'Keep an eye on' means to watch/guard. Wrong: 'Put', 'hold', and 'set' do not form this idiom."
  },
  {
    "id": 14,
    "cefr_level": "B1",
    "question": "The dragon ___ a loud roar.",
    "options": ["let out", "made out", "put out", "did out"],
    "correct_answer": "let out",
    "explanation": "Correct: You 'let out' a sound, scream, or roar. Wrong: 'Made out', 'put out', and 'did out' are incorrect."
  },
  {
    "id": 15,
    "cefr_level": "B1",
    "question": "I need to ___ a decision about which path to take.",
    "options": ["make", "do", "create", "get"],
    "correct_answer": "make",
    "explanation": "Correct: You 'make a decision'. Wrong: You do not 'do' or 'create' a decision."
  },
  {
    "id": 16,
    "cefr_level": "B2",
    "question": "The heavy rain caused ___ damage to the castle.",
    "options": ["severe", "strong", "strict", "sharp"],
    "correct_answer": "severe",
    "explanation": "Correct: 'Severe damage' is a strong collocation. Wrong: 'Strong' and 'sharp' do not typically describe damage magnitude."
  },
  {
    "id": 17,
    "cefr_level": "B2",
    "question": "The knight ___ his promise to protect the king.",
    "options": ["kept", "held", "saved", "guarded"],
    "correct_answer": "kept",
    "explanation": "Correct: You 'keep a promise' (or break it). Wrong: 'Held', 'saved', and 'guarded' are not used with promise."
  },
  {
    "id": 18,
    "cefr_level": "B2",
    "question": "He was ___ aware of the danger lurking in the shadows.",
    "options": ["fully", "highly", "deeply", "greatly"],
    "correct_answer": "fully",
    "explanation": "Correct: 'Fully aware' is the standard collocation. Wrong: 'Highly', 'deeply', and 'greatly' are less natural with 'aware'."
  },
  {
    "id": 19,
    "cefr_level": "B2",
    "question": "The thief ___ the opportunity to steal the key.",
    "options": ["seized", "caught", "grabbed", "held"],
    "correct_answer": "seized",
    "explanation": "Correct: 'Seize an opportunity' is a formal collocation meaning to take a chance. 'Grabbed' is possible but 'Seized' is the stronger collocation."
  },
  {
    "id": 20,
    "cefr_level": "B2",
    "question": "We must ___ an end to this war.",
    "options": ["put", "make", "do", "set"],
    "correct_answer": "put",
    "explanation": "Correct: The phrase is 'put an end to'. Wrong: 'Make', 'do', and 'set' do not fit this phrase."
  },
  {
    "id": 21,
    "cefr_level": "B2",
    "question": "The army suffered ___ losses in the battle.",
    "options": ["heavy", "strong", "hard", "weighty"],
    "correct_answer": "heavy",
    "explanation": "Correct: We say 'heavy losses' (many deaths). Wrong: 'Strong', 'hard', and 'weighty' do not collocate with losses."
  },
  {
    "id": 22,
    "cefr_level": "B2",
    "question": "I have a ___ feeling that something is wrong.",
    "options": ["nagging", "biting", "scratching", "chewing"],
    "correct_answer": "nagging",
    "explanation": "Correct: A 'nagging feeling' is a persistent feeling of anxiety. Wrong: Biting, scratching, and chewing don't describe feelings."
  },
  {
    "id": 23,
    "cefr_level": "B2",
    "question": "The wizard ___ a spell on the door.",
    "options": ["cast", "threw", "tossed", "pitched"],
    "correct_answer": "cast",
    "explanation": "Correct: You 'cast a spell'. Wrong: 'Threw', 'tossed', and 'pitched' are physical actions."
  },
  {
    "id": 24,
    "cefr_level": "B2",
    "question": "Please ___ in mind that dragons breathe fire.",
    "options": ["bear", "hold", "take", "carry"],
    "correct_answer": "bear",
    "explanation": "Correct: 'Bear in mind' means to remember/consider. Wrong: 'Hold', 'take', and 'carry' are not used in this fixed phrase."
  },
  {
    "id": 25,
    "cefr_level": "B2",
    "question": "The village is ___ located near the river.",
    "options": ["conveniently", "comfortably", "happily", "joyfully"],
    "correct_answer": "conveniently",
    "explanation": "Correct: 'Conveniently located' is a common collocation for places. Wrong: 'Comfortably', 'happily', and 'joyfully' don't fit location."
  },
  {
    "id": 26,
    "cefr_level": "C1",
    "question": "The two enemies are ___ opposed to each other.",
    "options": ["diametrically", "diagonally", "diameter", "dramatically"],
    "correct_answer": "diametrically",
    "explanation": "Correct: 'Diametrically opposed' means completely opposite. Wrong: 'Diagonally' is a direction; 'dramatically' means theatrically."
  },
  {
    "id": 27,
    "cefr_level": "C1",
    "question": "The king was ___ disappointed by his son's failure.",
    "options": ["bitterly", "sourly", "sharply", "acidly"],
    "correct_answer": "bitterly",
    "explanation": "Correct: 'Bitterly disappointed' is a strong fixed collocation. Wrong: 'Sourly', 'sharply', and 'acidly' are not standard intensifiers for disappointed."
  },
  {
    "id": 28,
    "cefr_level": "C1",
    "question": "The prisoner was released due to ___ of evidence.",
    "options": ["lack", "short", "need", "gap"],
    "correct_answer": "lack",
    "explanation": "Correct: 'Lack of evidence' is the legal/formal standard. Wrong: 'Short of' works but not 'short of evidence' as a noun phrase here."
  },
  {
    "id": 29,
    "cefr_level": "C1",
    "question": "The monster let out a ___ scream.",
    "options": ["blood-curdling", "blood-stopping", "blood-freezing", "blood-boiling"],
    "correct_answer": "blood-curdling",
    "explanation": "Correct: 'Blood-curdling' describes a terrifying sound. Wrong: 'Blood-boiling' means making you angry."
  },
  {
    "id": 30,
    "cefr_level": "C1",
    "question": "This artifact is of ___ importance to our quest.",
    "options": ["paramount", "surmount", "mountainous", "tantamount"],
    "correct_answer": "paramount",
    "explanation": "Correct: 'Paramount importance' means supreme importance. Wrong: 'Surmount' is a verb; 'tantamount' means equivalent to."
  },
  {
    "id": 31,
    "cefr_level": "C1",
    "question": "The spy had an ___ motive for helping us.",
    "options": ["ulterior", "exterior", "interior", "inferior"],
    "correct_answer": "ulterior",
    "explanation": "Correct: 'Ulterior motive' refers to a hidden reason. Wrong: 'Exterior', 'interior', and 'inferior' do not collocate with motive here."
  },
  {
    "id": 32,
    "cefr_level": "C1",
    "question": "It is ___ unlikely that the dragon will wake up.",
    "options": ["highly", "tallly", "strongly", "widely"],
    "correct_answer": "highly",
    "explanation": "Correct: 'Highly unlikely' is the standard phrase. Wrong: 'Strongly' and 'widely' do not fit unlikely."
  },
  {
    "id": 33,
    "cefr_level": "C1",
    "question": "The forbidden forest is ___ populated by ghosts.",
    "options": ["densely", "thickly", "heavily", "solidly"],
    "correct_answer": "densely",
    "explanation": "Correct: 'Densely populated' is the correct term for population. Wrong: 'Thickly' usually refers to vegetation; 'heavily' refers to traffic/rain."
  },
  {
    "id": 34,
    "cefr_level": "C1",
    "question": "You must ___ the rules of the tournament.",
    "options": ["abide by", "abide with", "abide in", "abide on"],
    "correct_answer": "abide by",
    "explanation": "Correct: 'Abide by' means to accept or follow a rule. Wrong: The other prepositions are incorrect."
  },
  {
    "id": 35,
    "cefr_level": "C1",
    "question": "The rumor has no ___ in reality.",
    "options": ["basis", "base", "basic", "basement"],
    "correct_answer": "basis",
    "explanation": "Correct: 'Basis in reality' is the set phrase. Wrong: 'Base' is a physical bottom; 'basic' is an adjective."
  },
  {
    "id": 36,
    "cefr_level": "C1",
    "question": "The storm caused ___ damage to the fleet.",
    "options": ["extensive", "expensive", "expansive", "expressive"],
    "correct_answer": "extensive",
    "explanation": "Correct: 'Extensive damage' means widespread damage. Wrong: 'Expensive' costs money; 'expansive' covers a wide area (but doesn't collocate with damage)."
  },
  {
    "id": 37,
    "cefr_level": "C1",
    "question": "We need to ___ a balance between magic and steel.",
    "options": ["strike", "hit", "beat", "knock"],
    "correct_answer": "strike",
    "explanation": "Correct: You 'strike a balance'. Wrong: 'Hit', 'beat', and 'knock' do not fit this idiom."
  },
  {
    "id": 38,
    "cefr_level": "C2",
    "question": "The battle was an ___ disaster.",
    "options": ["unmitigated", "undefeated", "unrelated", "uneducated"],
    "correct_answer": "unmitigated",
    "explanation": "Correct: 'Unmitigated disaster' means absolute disaster. Wrong: 'Undefeated' means not beaten; 'unrelated' not connected."
  },
  {
    "id": 39,
    "cefr_level": "C2",
    "question": "There is a ___ of truth in the goblin's story.",
    "options": ["grain", "drop", "slice", "lump"],
    "correct_answer": "grain",
    "explanation": "Correct: 'A grain of truth' is the idiom for a small amount of truth. Wrong: 'Drop' liquid; 'slice' food; 'lump' solid."
  },
  {
    "id": 40,
    "cefr_level": "C2",
    "question": "The hero acted in ___ of the king's orders.",
    "options": ["defiance", "reliance", "alliance", "variance"],
    "correct_answer": "defiance",
    "explanation": "Correct: 'In defiance of' means openly resisting. Wrong: 'Reliance' depending on; 'alliance' joining; 'variance' difference."
  },
  {
    "id": 41,
    "cefr_level": "C2",
    "question": "The decision to ban magic was ___ controversial.",
    "options": ["highly", "strongly", "deeply", "richly"],
    "correct_answer": "highly",
    "explanation": "Correct: 'Highly controversial' is the strong collocation. Wrong: 'Strongly' and 'deeply' are not usually used with controversial."
  },
  {
    "id": 42,
    "cefr_level": "C2",
    "question": "The evidence against the witch is ___.",
    "options": ["irrefutable", "irreplaceable", "irresponsible", "irreversible"],
    "correct_answer": "irrefutable",
    "explanation": "Correct: 'Irrefutable evidence' means evidence that cannot be denied. Wrong: 'Irreplaceable' unique; 'irreversible' permanent."
  },
  {
    "id": 43,
    "cefr_level": "C2",
    "question": "The villagers live in ___ poverty.",
    "options": ["abject", "object", "reject", "subject"],
    "correct_answer": "abject",
    "explanation": "Correct: 'Abject poverty' means extremely severe poverty. Wrong: 'Object', 'reject', and 'subject' do not act as adjectives for poverty."
  },
  {
    "id": 44,
    "cefr_level": "C2",
    "question": "We must ___ the temptation to use dark magic.",
    "options": ["resist", "assist", "consist", "desist"],
    "correct_answer": "resist",
    "explanation": "Correct: You 'resist temptation'. Wrong: 'Assist' help; 'consist' be composed of; 'desist' stop."
  },
  {
    "id": 45,
    "cefr_level": "C2",
    "question": "The thief has a ___ record of escaping prisons.",
    "options": ["track", "trace", "trail", "trick"],
    "correct_answer": "track",
    "explanation": "Correct: A 'track record' is the past performance history. Wrong: 'Trace', 'trail', and 'trick' do not form this compound noun."
  },
  {
    "id": 46,
    "cefr_level": "C2",
    "question": "The sheer ___ of the cliff face was terrifying.",
    "options": ["magnitude", "attitude", "solitude", "aptitude"],
    "correct_answer": "magnitude",
    "explanation": "Correct: 'Sheer magnitude' emphasizes immense size/scale. Wrong: 'Attitude' behavior; 'solitude' loneliness; 'aptitude' skill."
  },
  {
    "id": 47,
    "cefr_level": "C2",
    "question": "The knight is held in high ___ by the people.",
    "options": ["esteem", "steam", "team", "scheme"],
    "correct_answer": "esteem",
    "explanation": "Correct: 'Held in high esteem' means respected greatly. Wrong: 'Steam' vapor; 'team' group; 'scheme' plan."
  },
  {
    "id": 48,
    "cefr_level": "C2",
    "question": "It is a ___ conclusion that the war is lost.",
    "options": ["foregone", "forgone", "far-gone", "bygone"],
    "correct_answer": "foregone",
    "explanation": "Correct: A 'foregone conclusion' is a result that is certain to happen. Wrong: 'Forgone' (gave up); 'far-gone' (advanced state); 'bygone' (past)."
  },
  {
    "id": 49,
    "cefr_level": "C2",
    "question": "The wizard's tower stands in ___ contrast to the slums below.",
    "options": ["stark", "dark", "spark", "shark"],
    "correct_answer": "stark",
    "explanation": "Correct: 'Stark contrast' means a very sharp, clear difference. Wrong: 'Dark' contrast is not a standard phrase."
  },
  {
    "id": 50,
    "cefr_level": "C2",
    "question": "He has a ___ knowledge of ancient runes.",
    "options": ["working", "walking", "waking", "waiting"],
    "correct_answer": "working",
    "explanation": "Correct: 'Working knowledge' means enough knowledge to use it effectively. Wrong: 'Walking', 'waking', and 'waiting' do not fit knowledge."
  }
];

export default COLLOCATION_QUESTIONS;
