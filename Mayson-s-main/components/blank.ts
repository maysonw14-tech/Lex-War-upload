
const BLANK_QUESTIONS = [
  {
    "id": 1,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Yesterday, I ___ to the market.",
    "options": ["go", "went", "gone", "going"],
    "correct_answer": "went",
    "explanation": "Past Simple: Irregular past form of 'go' is 'went'."
  },
  {
    "id": 2,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The cat chased three ___.",
    "options": ["mouse", "mouses", "mice", "mices"],
    "correct_answer": "mice",
    "explanation": "Irregular Plural: The plural of 'mouse' is 'mice'."
  },
  {
    "id": 3,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "She ___ a beautiful song now.",
    "options": ["sing", "sang", "is singing", "sung"],
    "correct_answer": "is singing",
    "explanation": "Present Continuous: Action happening 'now' requires 'is singing'."
  },
  {
    "id": 4,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Look at those two ___.",
    "options": ["man", "mans", "men", "mens"],
    "correct_answer": "men",
    "explanation": "Irregular Plural: The plural of 'man' is 'men'."
  },
  {
    "id": 5,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I have ___ my homework.",
    "options": ["do", "did", "done", "doing"],
    "correct_answer": "done",
    "explanation": "Present Perfect: 'Have' is followed by the past participle 'done'."
  },
  {
    "id": 6,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "My ___ hurt after the long walk.",
    "options": ["foot", "foots", "feet", "feets"],
    "correct_answer": "feet",
    "explanation": "Irregular Plural: The plural of 'foot' is 'feet'."
  },
  {
    "id": 7,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ a loud noise last night.",
    "options": ["hear", "heard", "hearing", "hears"],
    "correct_answer": "heard",
    "explanation": "Past Simple: Irregular past form of 'hear' is 'heard'."
  },
  {
    "id": 8,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The ___ are playing in the park.",
    "options": ["child", "childs", "children", "childrens"],
    "correct_answer": "children",
    "explanation": "Irregular Plural: The plural of 'child' is 'children'."
  },
  {
    "id": 9,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "We ___ pizza for dinner yesterday.",
    "options": ["eat", "ate", "eaten", "eating"],
    "correct_answer": "ate",
    "explanation": "Past Simple: Irregular past form of 'eat' is 'ate'."
  },
  {
    "id": 10,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "She needs to brush her ___.",
    "options": ["tooth", "tooths", "teeth", "teeths"],
    "correct_answer": "teeth",
    "explanation": "Irregular Plural: The plural of 'tooth' is 'teeth'."
  },
  {
    "id": 11,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of fish swam past the boat.",
    "options": ["school", "class", "team", "group"],
    "correct_answer": "school",
    "explanation": "Collective Noun: A group of fish is called a 'school'."
  },
  {
    "id": 12,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "I was ___ when the phone rang.",
    "options": ["sleep", "slept", "sleeping", "sleeps"],
    "correct_answer": "sleeping",
    "explanation": "Past Continuous: 'Was' + verb-ing describing an interrupted action."
  },
  {
    "id": 13,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The farmer owns many ___.",
    "options": ["sheep", "sheeps", "shoop", "shape"],
    "correct_answer": "sheep",
    "explanation": "Irregular Plural: 'Sheep' stays the same in singular and plural."
  },
  {
    "id": 14,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She has ___ that movie three times.",
    "options": ["see", "saw", "seen", "seeing"],
    "correct_answer": "seen",
    "explanation": "Present Perfect: 'Has' + past participle 'seen'."
  },
  {
    "id": 15,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of wolves howled at the moon.",
    "options": ["pack", "herd", "flock", "bunch"],
    "correct_answer": "pack",
    "explanation": "Collective Noun: A group of wolves is called a 'pack'."
  },
  {
    "id": 16,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "There are many ___ in the library.",
    "options": ["person", "persons", "peoples", "people"],
    "correct_answer": "people",
    "explanation": "Irregular Plural: The standard plural of 'person' is 'people'."
  },
  {
    "id": 17,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ his keys this morning.",
    "options": ["lose", "lost", "losed", "losing"],
    "correct_answer": "lost",
    "explanation": "Past Simple: Irregular past form of 'lose' is 'lost'."
  },
  {
    "id": 18,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Be careful with those sharp ___.",
    "options": ["knife", "knifes", "knives", "knive"],
    "correct_answer": "knives",
    "explanation": "Irregular Plural: Nouns ending in -f/-fe often change to -ves."
  },
  {
    "id": 19,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of lions rested under the tree.",
    "options": ["pride", "proud", "pack", "herd"],
    "correct_answer": "pride",
    "explanation": "Collective Noun: A group of lions is called a 'pride'."
  },
  {
    "id": 20,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "By 2025, we ___ in Mars.",
    "options": ["live", "lived", "will live", "living"],
    "correct_answer": "will live",
    "explanation": "Future Simple: Prediction about the future."
  },
  {
    "id": 21,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ fell from the autumn trees.",
    "options": ["leaf", "leafs", "leaves", "leave"],
    "correct_answer": "leaves",
    "explanation": "Irregular Plural: 'Leaf' changes to 'leaves' (f -> ves)."
  },
  {
    "id": 22,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "I wish I ___ known the truth.",
    "options": ["have", "had", "has", "having"],
    "correct_answer": "had",
    "explanation": "Past Perfect (Subjunctive): 'I wish I had known' expresses regret."
  },
  {
    "id": 23,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of birds flew overhead.",
    "options": ["flock", "herd", "school", "swarm"],
    "correct_answer": "flock",
    "explanation": "Collective Noun: A group of birds is called a 'flock'."
  },
  {
    "id": 24,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ written three books by then.",
    "options": ["has", "have", "had", "having"],
    "correct_answer": "had",
    "explanation": "Past Perfect: 'Had written' indicates action completed before a past time."
  },
  {
    "id": 25,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "We saw a ___ of cattle crossing.",
    "options": ["herd", "flock", "pack", "school"],
    "correct_answer": "herd",
    "explanation": "Collective Noun: A group of cattle is called a 'herd'."
  },
  {
    "id": 26,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "I would ___ gone if you asked.",
    "options": ["have", "had", "has", "of"],
    "correct_answer": "have",
    "explanation": "Conditional Perfect: 'Would have gone' (often misspoken as 'would of')."
  },
  {
    "id": 27,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ are grazing in the field.",
    "options": ["ox", "oxes", "oxen", "oxens"],
    "correct_answer": "oxen",
    "explanation": "Irregular Plural: The plural of 'ox' is 'oxen'."
  },
  {
    "id": 28,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of bees chased the bear.",
    "options": ["swarm", "flock", "pack", "herd"],
    "correct_answer": "swarm",
    "explanation": "Collective Noun: A group of insects (bees) is called a 'swarm'."
  },
  {
    "id": 29,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The cloth was ___ into two pieces.",
    "options": ["tear", "tore", "torn", "teared"],
    "correct_answer": "torn",
    "explanation": "Passive Voice: 'Was' + past participle 'torn' (tear/tore/torn)."
  },
  {
    "id": 30,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The pond is full of ___.",
    "options": ["goose", "geese", "gooses", "geeses"],
    "correct_answer": "geese",
    "explanation": "Irregular Plural: The plural of 'goose' is 'geese'."
  },
  {
    "id": 31,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of crows gathered on the wire.",
    "options": ["murder", "killing", "flock", "gang"],
    "correct_answer": "murder",
    "explanation": "Collective Noun: A group of crows is famously called a 'murder'."
  },
  {
    "id": 32,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "By noon, I will have ___ the report.",
    "options": ["finish", "finished", "finishing", "finishes"],
    "correct_answer": "finished",
    "explanation": "Future Perfect: 'Will have' + past participle 'finished'."
  },
  {
    "id": 33,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The data ___ derived from two sources.",
    "options": ["datum", "data", "were", "was"],
    "correct_answer": "were",
    "explanation": "Grammar: 'Data' is technically the plural of 'datum' (taking 'were'), though 'was' is common casually."
  },
  {
    "id": 34,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of dolphins swam alongside us.",
    "options": ["pod", "school", "herd", "pack"],
    "correct_answer": "pod",
    "explanation": "Collective Noun: A group of dolphins/whales is called a 'pod'."
  },
  {
    "id": 35,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He ___ on the couch all day yesterday.",
    "options": ["lie", "lay", "laid", "lain"],
    "correct_answer": "lay",
    "explanation": "Past Simple: Past tense of 'lie' (to recline) is 'lay'. (Not 'laid' which is for 'lay something down')."
  },
  {
    "id": 36,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Several ___ were discussed at the meeting.",
    "options": ["crisis", "crises", "crisises", "crisi"],
    "correct_answer": "crises",
    "explanation": "Irregular Plural: Words ending in -is often change to -es (crisis -> crises)."
  },
  {
    "id": 37,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of ants carried the crumb.",
    "options": ["colony", "army", "school", "swarm"],
    "correct_answer": "colony",
    "explanation": "Collective Noun: A group of ants is a 'colony' (or sometimes 'army')."
  },
  {
    "id": 38,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "If I ___ you, I would accept.",
    "options": ["was", "were", "am", "be"],
    "correct_answer": "were",
    "explanation": "Subjunctive Mood: 'If I were you' is standard for hypothetical advice."
  },
  {
    "id": 39,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The ___ in the desert are sharp.",
    "options": ["cactus", "cactuses", "cacti", "cactis"],
    "correct_answer": "cacti",
    "explanation": "Irregular Plural: Latin roots ending in -us often change to -i (cactus -> cacti)."
  },
  {
    "id": 40,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of owls stared silently.",
    "options": ["parliament", "congress", "flock", "bunch"],
    "correct_answer": "parliament",
    "explanation": "Collective Noun: A group of owls is famously called a 'parliament'."
  },
  {
    "id": 41,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "She has ___ the table for dinner.",
    "options": ["lie", "lay", "laid", "lain"],
    "correct_answer": "laid",
    "explanation": "Present Perfect: Past participle of 'lay' (to put down) is 'laid'."
  },
  {
    "id": 42,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The study included two ___.",
    "options": ["hypothesis", "hypotheses", "hypothesises", "hypothese"],
    "correct_answer": "hypotheses",
    "explanation": "Irregular Plural: Greek/Latin words ending in -is change to -es."
  },
  {
    "id": 43,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of rhinoceroses blocked the road.",
    "options": ["crash", "bang", "smash", "herd"],
    "correct_answer": "crash",
    "explanation": "Collective Noun: A group of rhinos is called a 'crash'."
  },
  {
    "id": 44,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The cloth had ___ considerably.",
    "options": ["shrink", "shrank", "shrunk", "shrunken"],
    "correct_answer": "shrunk",
    "explanation": "Past Perfect: Past participle of 'shrink' is 'shrunk'."
  },
  {
    "id": 45,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "We saw many ___ in the cave.",
    "options": ["fungus", "fungi", "funguses", "fungis"],
    "correct_answer": "fungi",
    "explanation": "Irregular Plural: Plural of 'fungus' is 'fungi'."
  },
  {
    "id": 46,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of stingrays glided by.",
    "options": ["fever", "cold", "school", "shoal"],
    "correct_answer": "fever",
    "explanation": "Collective Noun: A group of stingrays is uniquely called a 'fever'."
  },
  {
    "id": 47,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "He ___ have stolen the money.",
    "options": ["must", "can't", "shouldn't", "needn't"],
    "correct_answer": "can't",
    "explanation": "Modal Deduction: 'Can't have' expresses logical impossibility in the past."
  },
  {
    "id": 48,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The scientific ___ were strictly followed.",
    "options": ["criterion", "criteria", "criterions", "criterias"],
    "correct_answer": "criteria",
    "explanation": "Irregular Plural: 'Criteria' is the plural of 'criterion'."
  },
  {
    "id": 49,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of leopards slept in the tree.",
    "options": ["leap", "jump", "pride", "spot"],
    "correct_answer": "leap",
    "explanation": "Collective Noun: A group of leopards is called a 'leap'."
  },
  {
    "id": 50,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "I would have visited, ___ I known.",
    "options": ["if", "had", "have", "did"],
    "correct_answer": "had",
    "explanation": "Inverted Conditional: 'Had I known' replaces 'If I had known'."
  },
  {
    "id": 51,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ a glass of water.",
    "options": ["drink", "drank", "drunk", "drinking"],
    "correct_answer": "drank",
    "explanation": "Past Simple: Irregular past form of 'drink' is 'drank'."
  },
  {
    "id": 52,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Two ___ walked into the shop.",
    "options": ["woman", "womans", "women", "womens"],
    "correct_answer": "women",
    "explanation": "Irregular Plural: The plural of 'woman' is 'women'."
  },
  {
    "id": 53,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The bird ___ away quickly.",
    "options": ["fly", "flew", "flown", "flying"],
    "correct_answer": "flew",
    "explanation": "Past Simple: Irregular past form of 'fly' is 'flew'."
  },
  {
    "id": 54,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I caught three ___ in the lake.",
    "options": ["fish", "fishes", "fishs", "fishing"],
    "correct_answer": "fish",
    "explanation": "Irregular Plural: 'Fish' usually stays the same in plural form."
  },
  {
    "id": 55,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "She ___ him a birthday gift.",
    "options": ["give", "gave", "given", "giving"],
    "correct_answer": "gave",
    "explanation": "Past Simple: Irregular past form of 'give' is 'gave'."
  },
  {
    "id": 56,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The ___ arrested the robber.",
    "options": ["police", "polices", "policeman", "policemans"],
    "correct_answer": "police",
    "explanation": "Grammar: 'Police' is a plural noun taking a plural verb."
  },
  {
    "id": 57,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ across the river.",
    "options": ["swim", "swam", "swum", "swimming"],
    "correct_answer": "swam",
    "explanation": "Past Simple: Irregular past form of 'swim' is 'swam'."
  },
  {
    "id": 58,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ a letter to my friend.",
    "options": ["write", "wrote", "written", "writing"],
    "correct_answer": "wrote",
    "explanation": "Past Simple: Irregular past form of 'write' is 'wrote'."
  },
  {
    "id": 59,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "She ___ to me in French.",
    "options": ["speak", "spoke", "spoken", "speaking"],
    "correct_answer": "spoke",
    "explanation": "Past Simple: Irregular past form of 'speak' is 'spoke'."
  },
  {
    "id": 60,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Who ___ the window?",
    "options": ["break", "broke", "broken", "breaking"],
    "correct_answer": "broke",
    "explanation": "Past Simple: Irregular past form of 'break' is 'broke'."
  },
  {
    "id": 61,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The ___ chased the guards.",
    "options": ["thief", "thiefs", "thieves", "thieve"],
    "correct_answer": "thieves",
    "explanation": "Irregular Plural: Nouns ending in -f change to -ves (thief -> thieves)."
  },
  {
    "id": 62,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of puppies slept in the basket.",
    "options": ["litter", "bunch", "pack", "herd"],
    "correct_answer": "litter",
    "explanation": "Collective Noun: A group of baby animals (puppies/kittens) is a 'litter'."
  },
  {
    "id": 63,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Put the books on the ___.",
    "options": ["shelf", "shelfs", "shelves", "shelve"],
    "correct_answer": "shelves",
    "explanation": "Irregular Plural: 'Shelf' changes to 'shelves'."
  },
  {
    "id": 64,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He has ___ the car carefully.",
    "options": ["drive", "drove", "driven", "driving"],
    "correct_answer": "driven",
    "explanation": "Present Perfect: 'Has' + past participle 'driven'."
  },
  {
    "id": 65,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of geese waddled by.",
    "options": ["gaggle", "giggle", "flock", "herd"],
    "correct_answer": "gaggle",
    "explanation": "Collective Noun: A group of geese on the ground is a 'gaggle'."
  },
  {
    "id": 66,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The ___ lives of the kings were short.",
    "options": ["life", "lifes", "lives", "live"],
    "correct_answer": "lives",
    "explanation": "Irregular Plural: 'Life' changes to 'lives' (f -> ves)."
  },
  {
    "id": 67,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "We have ___ the winner.",
    "options": ["chose", "chosen", "choose", "choosed"],
    "correct_answer": "chosen",
    "explanation": "Present Perfect: 'Have' + past participle 'chosen'."
  },
  {
    "id": 68,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The water has ___ solid.",
    "options": ["freeze", "froze", "frozen", "freezed"],
    "correct_answer": "frozen",
    "explanation": "Present Perfect: 'Has' + past participle 'frozen'."
  },
  {
    "id": 69,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of elephants walked slowly.",
    "options": ["parade", "march", "herd", "pack"],
    "correct_answer": "parade",
    "explanation": "Collective Noun: A group of elephants can be a 'parade' (or herd)."
  },
  {
    "id": 70,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Seven ___ worked in the mine.",
    "options": ["dwarf", "dwarfs", "dwarves", "dwarvs"],
    "correct_answer": "dwarves",
    "explanation": "Irregular Plural: Both 'dwarfs' and 'dwarves' exist, but 'dwarves' is standard in fantasy."
  },
  {
    "id": 71,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "These natural ___ are amazing.",
    "options": ["phenomenon", "phenomenons", "phenomena", "phenomenas"],
    "correct_answer": "phenomena",
    "explanation": "Irregular Plural: Greek word ending in -on changes to -a."
  },
  {
    "id": 72,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of monkeys swung from trees.",
    "options": ["troop", "troupe", "bunch", "pack"],
    "correct_answer": "troop",
    "explanation": "Collective Noun: A group of monkeys is called a 'troop'."
  },
  {
    "id": 73,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "We spotted three ___ in the forest.",
    "options": ["deer", "deers", "doe", "doer"],
    "correct_answer": "deer",
    "explanation": "Irregular Plural: 'Deer' stays the same in singular and plural."
  },
  {
    "id": 74,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He has ___ upon the bed.",
    "options": ["lie", "lay", "lain", "laid"],
    "correct_answer": "lain",
    "explanation": "Present Perfect: Past participle of 'lie' (recline) is 'lain'."
  },
  {
    "id": 75,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of ants marched in line.",
    "options": ["army", "school", "herd", "flock"],
    "correct_answer": "army",
    "explanation": "Collective Noun: Ants are often referred to as an 'army' or 'colony'."
  },
  {
    "id": 76,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Five ___ landed on the runway.",
    "options": ["aircraft", "aircrafts", "airplane", "airplanes"],
    "correct_answer": "aircraft",
    "explanation": "Irregular Plural: 'Aircraft' stays the same in singular and plural."
  },
  {
    "id": 77,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ were grazing peacefully.",
    "options": ["cattle", "cattles", "cow", "cows"],
    "correct_answer": "cattle",
    "explanation": "Grammar: 'Cattle' is an irregular plural noun (always plural)."
  },
  {
    "id": 78,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of bats flew out.",
    "options": ["colony", "flock", "swarm", "herd"],
    "correct_answer": "colony",
    "explanation": "Collective Noun: A group of bats is called a 'colony' (or sometimes 'cloud')."
  },
  {
    "id": 79,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The bell has ___ twelve times.",
    "options": ["ring", "rang", "rung", "ringed"],
    "correct_answer": "rung",
    "explanation": "Present Perfect: 'Has' + past participle 'rung'."
  },
  {
    "id": 80,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He protects his ___ carefully.",
    "options": ["offspring", "offsprings", "childs", "kid"],
    "correct_answer": "offspring",
    "explanation": "Irregular Plural: 'Offspring' stays the same in singular and plural."
  },
  {
    "id": 81,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The ___ showed a positive trend.",
    "options": ["analysis", "analyses", "analysises", "analyzes"],
    "correct_answer": "analyses",
    "explanation": "Irregular Plural: Words ending in -is change to -es (analysis -> analyses)."
  },
  {
    "id": 82,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of chickens pecked the ground.",
    "options": ["brood", "breed", "flock", "school"],
    "correct_answer": "brood",
    "explanation": "Collective Noun: A family of chickens/hens is a 'brood'."
  },
  {
    "id": 83,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "I suggest he ___ the offer.",
    "options": ["accept", "accepts", "accepted", "accepting"],
    "correct_answer": "accept",
    "explanation": "Subjunctive: 'I suggest he accept' (base form), not 'accepts'."
  },
  {
    "id": 84,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "We found two ___ in the desert.",
    "options": ["oasis", "oases", "oasises", "oasi"],
    "correct_answer": "oases",
    "explanation": "Irregular Plural: Words ending in -is change to -es (oasis -> oases)."
  },
  {
    "id": 85,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of foxes hid in the bushes.",
    "options": ["skulk", "pack", "herd", "sneak"],
    "correct_answer": "skulk",
    "explanation": "Collective Noun: A group of foxes is uniquely called a 'skulk'."
  },
  {
    "id": 86,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The ___ were stacked against the wall.",
    "options": ["bureau", "bureaus", "bureaux", "bureax"],
    "correct_answer": "bureaux",
    "explanation": "Irregular Plural: French origin words ending in -eau can take -eaux."
  },
  {
    "id": 87,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of peacocks displayed their feathers.",
    "options": ["muster", "master", "flock", "pride"],
    "correct_answer": "muster",
    "explanation": "Collective Noun: A group of peacocks is called a 'muster'."
  },
  {
    "id": 88,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The bread has ___ in the oven.",
    "options": ["rise", "rose", "risen", "raised"],
    "correct_answer": "risen",
    "explanation": "Present Perfect: Past participle of 'rise' is 'risen' (intransitive)."
  },
  {
    "id": 89,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Several ___ occurred last night.",
    "options": ["diagnosis", "diagnoses", "diagnosises", "diagnosis"],
    "correct_answer": "diagnoses",
    "explanation": "Irregular Plural: Words ending in -is change to -es."
  },
  {
    "id": 90,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of flamingos stood in the water.",
    "options": ["stand", "flock", "pink", "herd"],
    "correct_answer": "stand",
    "explanation": "Collective Noun: A group of flamingos is called a 'stand' (or flamboyance)."
  },
  {
    "id": 91,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "Check the ___ at the back of the book.",
    "options": ["appendix", "appendixes", "appendices", "appendi"],
    "correct_answer": "appendices",
    "explanation": "Irregular Plural: Words ending in -ix often change to -ices."
  },
  {
    "id": 92,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "An ___ of larks sang in the sky.",
    "options": ["exaltation", "excitement", "flock", "chorus"],
    "correct_answer": "exaltation",
    "explanation": "Collective Noun: A group of larks is poetically called an 'exaltation'."
  },
  {
    "id": 93,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "Refer to the ___ on page 5.",
    "options": ["index", "indexes", "indices", "indexs"],
    "correct_answer": "indices",
    "explanation": "Irregular Plural: Mathematical/technical plural of 'index' is 'indices'."
  },
  {
    "id": 94,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "An ___ of ravens circled the tower.",
    "options": ["unkindness", "sadness", "murder", "darkness"],
    "correct_answer": "unkindness",
    "explanation": "Collective Noun: A group of ravens is called an 'unkindness'."
  },
  {
    "id": 95,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "He ___ for forgiveness.",
    "options": ["beseech", "beseeched", "besought", "besaught"],
    "correct_answer": "besought",
    "explanation": "Past Simple: Archaic/formal past of 'beseech' is 'besought'."
  },
  {
    "id": 96,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of jellyfish floated by.",
    "options": ["smack", "hit", "school", "swarm"],
    "correct_answer": "smack",
    "explanation": "Collective Noun: A group of jellyfish is uniquely called a 'smack'."
  },
  {
    "id": 97,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "All the ___ attended the reunion.",
    "options": ["alumnus", "alumna", "alumni", "alumnis"],
    "correct_answer": "alumni",
    "explanation": "Irregular Plural: Masculine/mixed plural of 'alumnus' is 'alumni'."
  },
  {
    "id": 98,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of bears walked through the woods.",
    "options": ["sleuth", "detective", "pack", "herd"],
    "correct_answer": "sleuth",
    "explanation": "Collective Noun: A group of bears is called a 'sleuth'."
  },
  {
    "id": 99,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The king ___ the traitor.",
    "options": ["slay", "slayed", "slew", "slain"],
    "correct_answer": "slew",
    "explanation": "Past Simple: Irregular past form of 'slay' is 'slew'."
  },
  {
    "id": 100,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of starlings moved like a cloud.",
    "options": ["murmuration", "whisper", "cloud", "flock"],
    "correct_answer": "murmuration",
    "explanation": "Collective Noun: A swooping group of starlings is a 'murmuration'."
  },
  {
    "id": 101,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The lesson ___ at 9:00 AM.",
    "options": ["begin", "began", "begun", "beginning"],
    "correct_answer": "began",
    "explanation": "Past Simple: Irregular past form of 'begin' is 'began'."
  },
  {
    "id": 102,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ his new sword to the battle.",
    "options": ["bring", "brang", "brought", "bringing"],
    "correct_answer": "brought",
    "explanation": "Past Simple: Irregular past form of 'bring' is 'brought'."
  },
  {
    "id": 103,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ a new potion yesterday.",
    "options": ["buy", "buyed", "bought", "buying"],
    "correct_answer": "bought",
    "explanation": "Past Simple: Irregular past form of 'buy' is 'bought'."
  },
  {
    "id": 104,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The giant ___ the ball.",
    "options": ["catch", "catched", "caught", "catching"],
    "correct_answer": "caught",
    "explanation": "Past Simple: Irregular past form of 'catch' is 'caught'."
  },
  {
    "id": 105,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The wizard ___ me magic.",
    "options": ["teach", "teached", "taught", "teaching"],
    "correct_answer": "taught",
    "explanation": "Past Simple: Irregular past form of 'teach' is 'taught'."
  },
  {
    "id": 106,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ about the quest all night.",
    "options": ["think", "thank", "thought", "thinking"],
    "correct_answer": "thought",
    "explanation": "Past Simple: Irregular past form of 'think' is 'thought'."
  },
  {
    "id": 107,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The knight ___ bravely.",
    "options": ["fight", "fought", "fighted", "fighting"],
    "correct_answer": "fought",
    "explanation": "Past Simple: Irregular past form of 'fight' is 'fought'."
  },
  {
    "id": 108,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "We ___ well last night.",
    "options": ["sleep", "sleeped", "slept", "sleeping"],
    "correct_answer": "slept",
    "explanation": "Past Simple: Irregular past form of 'sleep' is 'slept'."
  },
  {
    "id": 109,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Put the vegetables in ___.",
    "options": ["box", "boxs", "boxes", "boxies"],
    "correct_answer": "boxes",
    "explanation": "Plural Rule: Nouns ending in -x add -es."
  },
  {
    "id": 110,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ the gold in a chest.",
    "options": ["keep", "keeped", "kept", "keeping"],
    "correct_answer": "kept",
    "explanation": "Past Simple: Irregular past form of 'keep' is 'kept'."
  },
  {
    "id": 111,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of giraffes ate from the trees.",
    "options": ["tower", "neck", "herd", "high"],
    "correct_answer": "tower",
    "explanation": "Collective Noun: A group of giraffes is called a 'tower'."
  },
  {
    "id": 112,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The armor is ___ out.",
    "options": ["wear", "wore", "worn", "wearing"],
    "correct_answer": "worn",
    "explanation": "Past Participle: 'Wear' becomes 'wore' (past) and 'worn' (participle)."
  },
  {
    "id": 113,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The plant has ___ quickly.",
    "options": ["grow", "grew", "grown", "growing"],
    "correct_answer": "grown",
    "explanation": "Present Perfect: 'Has' + past participle 'grown'."
  },
  {
    "id": 114,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He has ___ the rock across the river.",
    "options": ["throw", "threw", "thrown", "throwing"],
    "correct_answer": "thrown",
    "explanation": "Present Perfect: 'Has' + past participle 'thrown'."
  },
  {
    "id": 115,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "I need three ___ for the salad.",
    "options": ["tomato", "tomatos", "tomatoes", "tomaties"],
    "correct_answer": "tomatoes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es."
  },
  {
    "id": 116,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of horses pulled the wagon.",
    "options": ["team", "pack", "school", "bunch"],
    "correct_answer": "team",
    "explanation": "Collective Noun: Working animals (horses/oxen) form a 'team'."
  },
  {
    "id": 117,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The heroes ___ their swords.",
    "options": ["draw", "drew", "drawn", "drawing"],
    "correct_answer": "drew",
    "explanation": "Past Simple: Irregular past form of 'draw' is 'drew'."
  },
  {
    "id": 118,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The wind has ___ the fire out.",
    "options": ["blow", "blew", "blown", "blowing"],
    "correct_answer": "blown",
    "explanation": "Present Perfect: 'Has' + past participle 'blown'."
  },
  {
    "id": 119,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The crown was ___ by the thief.",
    "options": ["steal", "stole", "stolen", "stealed"],
    "correct_answer": "stolen",
    "explanation": "Passive Voice: 'Was' + past participle 'stolen'."
  },
  {
    "id": 120,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Many ___ fought in the war.",
    "options": ["hero", "heros", "heroes", "heroies"],
    "correct_answer": "heroes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (hero -> heroes)."
  },
  {
    "id": 121,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of hippos bathed in the river.",
    "options": ["bloat", "fat", "herd", "pack"],
    "correct_answer": "bloat",
    "explanation": "Collective Noun: A group of hippopotamuses is called a 'bloat'."
  },
  {
    "id": 122,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The triangle has three ___.",
    "options": ["vertex", "vertexes", "vertices", "verti"],
    "correct_answer": "vertices",
    "explanation": "Irregular Plural: Words ending in -ex often change to -ices."
  },
  {
    "id": 123,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The monkey ___ from the branch.",
    "options": ["swing", "swang", "swung", "swinged"],
    "correct_answer": "swung",
    "explanation": "Past Simple: Irregular past form of 'swing' is 'swung'."
  },
  {
    "id": 124,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "I was ___ by a giant bee.",
    "options": ["sting", "stang", "stung", "stinged"],
    "correct_answer": "stung",
    "explanation": "Passive Voice: 'Was' + past participle 'stung'."
  },
  {
    "id": 125,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The wagon got ___ in the mud.",
    "options": ["stick", "stack", "stuck", "sticked"],
    "correct_answer": "stuck",
    "explanation": "Past Participle: 'Stick' becomes 'stuck' (used here as an adjective/passive)."
  },
  {
    "id": 126,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Lightning ___ the tower.",
    "options": ["strike", "stroke", "struck", "stricken"],
    "correct_answer": "struck",
    "explanation": "Past Simple: Irregular past form of 'strike' is 'struck'."
  },
  {
    "id": 127,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "An ___ of tigers waited in the grass.",
    "options": ["ambush", "attack", "army", "anger"],
    "correct_answer": "ambush",
    "explanation": "Collective Noun: A group of tigers is called an 'ambush' (or streak)."
  },
  {
    "id": 128,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The insect ___ look like worms.",
    "options": ["larva", "larvas", "larvae", "larvi"],
    "correct_answer": "larvae",
    "explanation": "Irregular Plural: Latin words ending in -a often change to -ae."
  },
  {
    "id": 129,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ship had ___ to the bottom.",
    "options": ["sink", "sank", "sunk", "sanken"],
    "correct_answer": "sunk",
    "explanation": "Past Perfect: 'Had' + past participle 'sunk'."
  },
  {
    "id": 130,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The garbage has ___ up the room.",
    "options": ["stink", "stank", "stunk", "stinked"],
    "correct_answer": "stunk",
    "explanation": "Present Perfect: 'Has' + past participle 'stunk'."
  },
  {
    "id": 131,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of ferrets ran across the road.",
    "options": ["business", "company", "meeting", "gang"],
    "correct_answer": "business",
    "explanation": "Collective Noun: A group of ferrets is called a 'business'."
  },
  {
    "id": 132,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The computer analyzed the ___.",
    "options": ["matrix", "matrixes", "matrices", "matrixs"],
    "correct_answer": "matrices",
    "explanation": "Irregular Plural: Words ending in -ix change to -ices."
  },
  {
    "id": 133,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The trap has ___ shut.",
    "options": ["spring", "sprang", "sprung", "springed"],
    "correct_answer": "sprung",
    "explanation": "Present Perfect: 'Has' + past participle 'sprung'."
  },
  {
    "id": 134,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The basket was ___ from straw.",
    "options": ["weave", "wove", "woven", "weaved"],
    "correct_answer": "woven",
    "explanation": "Passive Voice: 'Was' + past participle 'woven'."
  },
  {
    "id": 135,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The dirt was ___ into the carpet.",
    "options": ["tread", "trod", "trodden", "treaded"],
    "correct_answer": "trodden",
    "explanation": "Passive Voice: 'Was' + past participle 'trodden' (tread/trod/trodden)."
  },
  {
    "id": 136,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The ___ swirled in the water.",
    "options": ["vortex", "vortexes", "vortices", "vorti"],
    "correct_answer": "vortices",
    "explanation": "Irregular Plural: Words ending in -ex change to -ices."
  },
  {
    "id": 137,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of eagles soared high.",
    "options": ["convocation", "convention", "flock", "gathering"],
    "correct_answer": "convocation",
    "explanation": "Collective Noun: A group of eagles is called a 'convocation'."
  },
  {
    "id": 138,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He ___ the truth for years.",
    "options": ["seek", "seeked", "sought", "saught"],
    "correct_answer": "sought",
    "explanation": "Past Simple: Irregular past form of 'seek' is 'sought'."
  },
  {
    "id": 139,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The wheat was ___ into flour.",
    "options": ["grind", "ground", "grinded", "grounded"],
    "correct_answer": "ground",
    "explanation": "Passive Voice: 'Was' + past participle 'ground'. ('Grounded' means forbidden to fly)."
  },
  {
    "id": 140,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Humans have lived here for ___.",
    "options": ["millennium", "millenniums", "millennia", "millennias"],
    "correct_answer": "millennia",
    "explanation": "Irregular Plural: Latin words ending in -um often change to -a."
  },
  {
    "id": 141,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of parrots screamed loudly.",
    "options": ["pandemonium", "chaos", "riot", "flock"],
    "correct_answer": "pandemonium",
    "explanation": "Collective Noun: A group of parrots is uniquely called a 'pandemonium'."
  },
  {
    "id": 142,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "These ___ of plants are rare.",
    "options": ["genus", "genuses", "genera", "geni"],
    "correct_answer": "genera",
    "explanation": "Irregular Plural: Scientific plural of 'genus' is 'genera'."
  },
  {
    "id": 143,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "He ___ the stone into the lake.",
    "options": ["fling", "flang", "flung", "flingen"],
    "correct_answer": "flung",
    "explanation": "Past Simple: Irregular past form of 'fling' is 'flung'."
  },
  {
    "id": 144,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The thief ___ away into the shadows.",
    "options": ["slink", "slank", "slunk", "slinked"],
    "correct_answer": "slunk",
    "explanation": "Past Simple: Irregular past form of 'slink' is 'slunk'."
  },
  {
    "id": 145,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "He was ___ with love.",
    "options": ["smite", "smote", "smitten", "smited"],
    "correct_answer": "smitten",
    "explanation": "Passive Voice: 'Was' + past participle 'smitten' (smite/smote/smitten)."
  },
  {
    "id": 146,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "We studied several text ___.",
    "options": ["corpus", "corpuses", "corpora", "corpi"],
    "correct_answer": "corpora",
    "explanation": "Irregular Plural: 'Corpora' is the plural of 'corpus'."
  },
  {
    "id": 147,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of apes gathered in the clearing.",
    "options": ["shrewdness", "cleverness", "troop", "gang"],
    "correct_answer": "shrewdness",
    "explanation": "Collective Noun: A group of apes is traditionally called a 'shrewdness'."
  },
  {
    "id": 148,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The king ___ them farewell.",
    "options": ["bid", "bade", "bidden", "bidded"],
    "correct_answer": "bade",
    "explanation": "Past Simple: Archaic past of 'bid' (greeting/farewell) is 'bade'."
  },
  {
    "id": 149,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "He ___ confidently across the room.",
    "options": ["stride", "strode", "stridden", "strided"],
    "correct_answer": "strode",
    "explanation": "Past Simple: Irregular past form of 'stride' is 'strode'."
  },
  {
    "id": 150,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "An ___ of buffalo blocked the path.",
    "options": ["obstinacy", "stubbornness", "herd", "gang"],
    "correct_answer": "obstinacy",
    "explanation": "Collective Noun: A group of buffalo is sometimes called an 'obstinacy'."
  },
  {
    "id": 151,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ the ball to me.",
    "options": ["throw", "threw", "thrown", "throwing"],
    "correct_answer": "threw",
    "explanation": "Past Simple: Irregular past form of 'throw' is 'threw'."
  },
  {
    "id": 152,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The ___ ran into the hole.",
    "options": ["mouse", "mouses", "mice", "micies"],
    "correct_answer": "mice",
    "explanation": "Irregular Plural: The plural of 'mouse' is 'mice'."
  },
  {
    "id": 153,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "She ___ her finger on the paper.",
    "options": ["cut", "cuted", "cutting", "cuts"],
    "correct_answer": "cut",
    "explanation": "Past Simple: 'Cut' is irregular; the past form remains 'cut'."
  },
  {
    "id": 154,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I saw two ___ on the roof.",
    "options": ["man", "men", "mans", "mens"],
    "correct_answer": "men",
    "explanation": "Irregular Plural: The plural of 'man' is 'men'."
  },
  {
    "id": 155,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "We ___ the game yesterday.",
    "options": ["win", "won", "winned", "winning"],
    "correct_answer": "won",
    "explanation": "Past Simple: Irregular past form of 'win' is 'won'."
  },
  {
    "id": 156,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "My ___ hurt from walking.",
    "options": ["foot", "feet", "foots", "feets"],
    "correct_answer": "feet",
    "explanation": "Irregular Plural: The plural of 'foot' is 'feet'."
  },
  {
    "id": 157,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ his keys on the table.",
    "options": ["leave", "left", "leaved", "leaving"],
    "correct_answer": "left",
    "explanation": "Past Simple: Irregular past form of 'leave' is 'left'."
  },
  {
    "id": 158,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Three ___ swam in the pond.",
    "options": ["goose", "geese", "gooses", "geeses"],
    "correct_answer": "geese",
    "explanation": "Irregular Plural: The plural of 'goose' is 'geese'."
  },
  {
    "id": 159,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ a loud noise.",
    "options": ["hear", "heard", "heared", "hearing"],
    "correct_answer": "heard",
    "explanation": "Past Simple: Irregular past form of 'hear' is 'heard'."
  },
  {
    "id": 160,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Put the ___ on the shelf.",
    "options": ["book", "books", "bookes", "bookies"],
    "correct_answer": "books",
    "explanation": "Regular Plural: 'Book' simply adds -s."
  },
  {
    "id": 161,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of ants raided the picnic.",
    "options": ["colony", "pack", "herd", "school"],
    "correct_answer": "colony",
    "explanation": "Collective Noun: A group of ants is a 'colony' (or army)."
  },
  {
    "id": 162,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The treasure was ___ in the cave.",
    "options": ["hide", "hid", "hidden", "hiding"],
    "correct_answer": "hidden",
    "explanation": "Passive Voice: 'Was' + past participle 'hidden'."
  },
  {
    "id": 163,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Many ___ died in the battle.",
    "options": ["hero", "heros", "heroes", "heroies"],
    "correct_answer": "heroes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es."
  },
  {
    "id": 164,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The arrow ___ the target.",
    "options": ["hit", "hitted", "hot", "hitting"],
    "correct_answer": "hit",
    "explanation": "Past Simple: 'Hit' is irregular; the past form remains 'hit'."
  },
  {
    "id": 165,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of dogs barked loudly.",
    "options": ["pack", "flock", "herd", "school"],
    "correct_answer": "pack",
    "explanation": "Collective Noun: A group of dogs (or wolves) is a 'pack'."
  },
  {
    "id": 166,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Peel the ___ for dinner.",
    "options": ["potato", "potatos", "potatoes", "potaties"],
    "correct_answer": "potatoes",
    "explanation": "Plural Rule: 'Potato' ends in -o, so add -es."
  },
  {
    "id": 167,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the sword tightly.",
    "options": ["hold", "held", "holded", "holding"],
    "correct_answer": "held",
    "explanation": "Past Simple: Irregular past form of 'hold' is 'held'."
  },
  {
    "id": 168,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The fall ___ his leg.",
    "options": ["hurt", "hurted", "hart", "hurting"],
    "correct_answer": "hurt",
    "explanation": "Past Simple: 'Hurt' is irregular; past form remains 'hurt'."
  },
  {
    "id": 169,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The ___ howled at the moon.",
    "options": ["wolf", "wolfs", "wolves", "wolve"],
    "correct_answer": "wolves",
    "explanation": "Irregular Plural: Nouns ending in -f change to -ves."
  },
  {
    "id": 170,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The guide ___ us through the forest.",
    "options": ["lead", "led", "leaded", "leading"],
    "correct_answer": "led",
    "explanation": "Past Simple: Irregular past form of 'lead' is 'led' (pronounced 'red')."
  },
  {
    "id": 171,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of whales surfaced nearby.",
    "options": ["pod", "pack", "school", "flock"],
    "correct_answer": "pod",
    "explanation": "Collective Noun: A group of whales is called a 'pod'."
  },
  {
    "id": 172,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Many ___ of birds live here.",
    "options": ["species", "specie", "specieses", "speci"],
    "correct_answer": "species",
    "explanation": "Irregular Plural: 'Species' is the same in singular and plural."
  },
  {
    "id": 173,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ the book on the table.",
    "options": ["lie", "lay", "laid", "lain"],
    "correct_answer": "laid",
    "explanation": "Past Simple: 'Lay' (to put object down) becomes 'laid'."
  },
  {
    "id": 174,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "I ___ to call you earlier.",
    "options": ["mean", "meaned", "meant", "meaning"],
    "correct_answer": "meant",
    "explanation": "Past Simple: Irregular past form of 'mean' is 'meant' (pronounced 'ment')."
  },
  {
    "id": 175,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The TV ___ was cancelled.",
    "options": ["series", "serie", "serieses", "serial"],
    "correct_answer": "series",
    "explanation": "Irregular Plural: 'Series' is the same in singular and plural."
  },
  {
    "id": 176,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of monkeys stole the fruit.",
    "options": ["troop", "troupe", "herd", "pack"],
    "correct_answer": "troop",
    "explanation": "Collective Noun: A group of monkeys is called a 'troop'."
  },
  {
    "id": 177,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The news has ___ him badly.",
    "options": ["shake", "shook", "shaken", "shaked"],
    "correct_answer": "shaken",
    "explanation": "Present Perfect: 'Has' + past participle 'shaken'."
  },
  {
    "id": 178,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ faded in the cave.",
    "options": ["echo", "echos", "echoes", "echoies"],
    "correct_answer": "echoes",
    "explanation": "Plural Rule: 'Echo' ends in -o, so add -es."
  },
  {
    "id": 179,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The archer ___ the arrow.",
    "options": ["shoot", "shot", "shooted", "shooting"],
    "correct_answer": "shot",
    "explanation": "Past Simple: Irregular past form of 'shoot' is 'shot'."
  },
  {
    "id": 180,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of bees lived in the tree.",
    "options": ["hive", "flock", "herd", "pack"],
    "correct_answer": "hive",
    "explanation": "Collective Noun: A group of bees inside their home is a 'hive' (flying group is a 'swarm')."
  },
  {
    "id": 181,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of cats slept in the barn.",
    "options": ["clowder", "cloud", "pack", "crowd"],
    "correct_answer": "clowder",
    "explanation": "Collective Noun: A group of cats is uniquely called a 'clowder'."
  },
  {
    "id": 182,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Several ___ stopped to watch.",
    "options": ["passerby", "passersby", "passerbys", "passersbys"],
    "correct_answer": "passersby",
    "explanation": "Compound Noun Plural: Pluralize the main noun (passer), not the preposition (by)."
  },
  {
    "id": 183,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He ___ shelter from the storm.",
    "options": ["seek", "sought", "seeked", "saught"],
    "correct_answer": "sought",
    "explanation": "Past Simple: Irregular past form of 'seek' is 'sought'."
  },
  {
    "id": 184,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Two ___ walked out of the woods.",
    "options": ["moose", "mooses", "meese", "moosis"],
    "correct_answer": "moose",
    "explanation": "Irregular Plural: 'Moose' stays the same in singular and plural."
  },
  {
    "id": 185,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of toads sat by the pond.",
    "options": ["knot", "tie", "bunch", "lump"],
    "correct_answer": "knot",
    "explanation": "Collective Noun: A group of toads is called a 'knot'."
  },
  {
    "id": 186,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "His face was ___ with bruises.",
    "options": ["swell", "swelled", "swollen", "swole"],
    "correct_answer": "swollen",
    "explanation": "Past Participle (Adjectival): 'Swell' becomes 'swollen' when used as an adjective."
  },
  {
    "id": 187,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The professors compared their ___.",
    "options": ["syllabus", "syllabuses", "syllabi", "syllabia"],
    "correct_answer": "syllabi",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (syllabus -> syllabi)."
  },
  {
    "id": 188,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of otters played in the river.",
    "options": ["romp", "play", "school", "game"],
    "correct_answer": "romp",
    "explanation": "Collective Noun: A group of otters is playfully called a 'romp'."
  },
  {
    "id": 189,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He ___ on a sharp stone.",
    "options": ["tread", "trod", "treaded", "trodden"],
    "correct_answer": "trod",
    "explanation": "Past Simple: Irregular past of 'tread' (step) is 'trod'."
  },
  {
    "id": 190,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Dangerous ___ were found in the water.",
    "options": ["bacterium", "bacterias", "bacteria", "bacteriums"],
    "correct_answer": "bacteria",
    "explanation": "Irregular Plural: 'Bacteria' is the plural of 'bacterium'."
  },
  {
    "id": 191,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of zebras ran across the plain.",
    "options": ["zeal", "stripe", "herd", "flash"],
    "correct_answer": "zeal",
    "explanation": "Collective Noun: A group of zebras is poetically called a 'zeal'."
  },
  {
    "id": 192,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The museum displayed ancient ___.",
    "options": ["automaton", "automatons", "automata", "automat"],
    "correct_answer": "automata",
    "explanation": "Irregular Plural: Greek ending -on changes to -a (automaton -> automata)."
  },
  {
    "id": 193,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "Flowers were ___ across the floor.",
    "options": ["strew", "strewed", "strewn", "strowed"],
    "correct_answer": "strewn",
    "explanation": "Past Participle: 'Strew' becomes 'strewn' (scattered)."
  },
  {
    "id": 194,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of sharks circled the boat.",
    "options": ["shiver", "shake", "school", "fright"],
    "correct_answer": "shiver",
    "explanation": "Collective Noun: A group of sharks is uniquely called a 'shiver'."
  },
  {
    "id": 195,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The monk copied the ___ by hand.",
    "options": ["codex", "codexes", "codices", "codes"],
    "correct_answer": "codices",
    "explanation": "Irregular Plural: Words ending in -ex often change to -ices (codex -> codices)."
  },
  {
    "id": 196,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The sheep was ___ of its wool.",
    "options": ["shear", "sheared", "shorn", "shore"],
    "correct_answer": "shorn",
    "explanation": "Past Participle: 'Shear' becomes 'shorn' (or sheared, but shorn is more traditional/adjectival)."
  },
  {
    "id": 197,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of penguins lined the shore.",
    "options": ["raft", "waddle", "float", "march"],
    "correct_answer": "waddle",
    "explanation": "Collective Noun: A group of penguins on land is a 'waddle' (in water, a 'raft')."
  },
  {
    "id": 198,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "Check the list of ___.",
    "options": ["erratum", "erratums", "errata", "errors"],
    "correct_answer": "errata",
    "explanation": "Irregular Plural: 'Errata' is the plural of 'erratum' (errors in writing)."
  },
  {
    "id": 199,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The queen ___ when she heard the news.",
    "options": ["weep", "weeped", "wept", "wopen"],
    "correct_answer": "wept",
    "explanation": "Past Simple: Irregular past form of 'weep' is 'wept'."
  },
  {
    "id": 200,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "He investigated the ___ of the case.",
    "options": ["minutia", "minutias", "minutiae", "minutes"],
    "correct_answer": "minutiae",
    "explanation": "Irregular Plural: 'Minutiae' (small details) is the plural of 'minutia'."
  },
  {
    "id": 201,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the clock yesterday.",
    "options": ["wind", "wound", "winded", "winding"],
    "correct_answer": "wound",
    "explanation": "Past Simple: Irregular past form of 'wind' is 'wound' (pronounced 'wow-nd')."
  },
  {
    "id": 202,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The world faces many ___.",
    "options": ["crisis", "crisises", "crises", "crisi"],
    "correct_answer": "crises",
    "explanation": "Irregular Plural: Words ending in -is change to -es (crisis -> crises)."
  },
  {
    "id": 203,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "An ___ of ravens sat on the wall.",
    "options": ["unkindness", "anger", "murder", "flock"],
    "correct_answer": "unkindness",
    "explanation": "Collective Noun: A group of ravens is called an 'unkindness'."
  },
  {
    "id": 204,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "She ___ the wet towel.",
    "options": ["wring", "wrang", "wrung", "wringed"],
    "correct_answer": "wrung",
    "explanation": "Past Simple: Irregular past form of 'wring' is 'wrung'."
  },
  {
    "id": 205,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The college invited its ___ back.",
    "options": ["alumnus", "alumni", "alumnas", "alumnius"],
    "correct_answer": "alumni",
    "explanation": "Irregular Plural: 'Alumnus' (singular male) becomes 'alumni' (plural male/mixed)."
  },
  {
    "id": 206,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of owls hooted at night.",
    "options": ["parliament", "congress", "meeting", "flock"],
    "correct_answer": "parliament",
    "explanation": "Collective Noun: A group of owls is famously called a 'parliament'."
  },
  {
    "id": 207,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The fire ___ quickly through the house.",
    "options": ["spread", "spreaded", "spred", "spreading"],
    "correct_answer": "spread",
    "explanation": "Past Simple: 'Spread' is irregular; the past form remains 'spread'."
  },
  {
    "id": 208,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "They covered all the ___.",
    "options": ["basis", "bases", "basises", "basi"],
    "correct_answer": "bases",
    "explanation": "Irregular Plural: 'Basis' changes to 'bases' (pronounced 'bay-seez')."
  },
  {
    "id": 209,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of ferrets stole the keys.",
    "options": ["business", "company", "job", "pack"],
    "correct_answer": "business",
    "explanation": "Collective Noun: A group of ferrets is called a 'business'."
  },
  {
    "id": 210,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The snake ___ its skin.",
    "options": ["shed", "shedded", "shad", "shedding"],
    "correct_answer": "shed",
    "explanation": "Past Simple: 'Shed' is irregular; the past form remains 'shed'."
  },
  {
    "id": 211,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The doctor made two ___.",
    "options": ["diagnosis", "diagnoses", "diagnosises", "diagnosi"],
    "correct_answer": "diagnoses",
    "explanation": "Irregular Plural: Words ending in -is change to -es (diagnosis -> diagnoses)."
  },
  {
    "id": 212,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of toads sat on the log.",
    "options": ["knot", "tie", "lump", "wart"],
    "correct_answer": "knot",
    "explanation": "Collective Noun: A group of toads is called a 'knot'."
  },
  {
    "id": 213,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ the sword into the stone.",
    "options": ["thrust", "thrusted", "throast", "thrusting"],
    "correct_answer": "thrust",
    "explanation": "Past Simple: 'Thrust' is irregular; the past form remains 'thrust'."
  },
  {
    "id": 214,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Measure the circle's ___.",
    "options": ["radius", "radiuses", "radii", "radiius"],
    "correct_answer": "radii",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (radius -> radii)."
  },
  {
    "id": 215,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of wombats slept in the burrow.",
    "options": ["wisdom", "smartness", "mob", "herd"],
    "correct_answer": "wisdom",
    "explanation": "Collective Noun: A group of wombats is playfully called a 'wisdom'."
  },
  {
    "id": 216,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The wood ___ when it dried.",
    "options": ["split", "splitted", "splat", "splitting"],
    "correct_answer": "split",
    "explanation": "Past Simple: 'Split' is irregular; the past form remains 'split'."
  },
  {
    "id": 217,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Check the course ___.",
    "options": ["syllabus", "syllabuses", "syllabi", "syllabia"],
    "correct_answer": "syllabi",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (syllabus -> syllabi)."
  },
  {
    "id": 218,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of porcupines ate the bark.",
    "options": ["prickle", "spike", "needle", "herd"],
    "correct_answer": "prickle",
    "explanation": "Collective Noun: A group of porcupines is called a 'prickle'."
  },
  {
    "id": 219,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The wet shirt ___ to his back.",
    "options": ["cling", "clang", "clung", "clinged"],
    "correct_answer": "clung",
    "explanation": "Past Simple: Irregular past form of 'cling' is 'clung'."
  },
  {
    "id": 220,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Use ___ for extra information.",
    "options": ["parenthesis", "parentheses", "parenthesises", "parenthesi"],
    "correct_answer": "parentheses",
    "explanation": "Irregular Plural: Words ending in -is change to -es (parenthesis -> parentheses)."
  },
  {
    "id": 221,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of flamingos looks pink.",
    "options": ["flamboyance", "flash", "flare", "flock"],
    "correct_answer": "flamboyance",
    "explanation": "Collective Noun: A group of flamingos is called a 'flamboyance'."
  },
  {
    "id": 222,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ a hole in the garden.",
    "options": ["dig", "dug", "digged", "digging"],
    "correct_answer": "dug",
    "explanation": "Past Simple: Irregular past form of 'dig' is 'dug'."
  },
  {
    "id": 223,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The cell has two ___.",
    "options": ["nucleus", "nuclei", "nucleuses", "nucleui"],
    "correct_answer": "nuclei",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (nucleus -> nuclei)."
  },
  {
    "id": 224,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of crows flew overhead.",
    "options": ["murder", "killing", "crime", "flock"],
    "correct_answer": "murder",
    "explanation": "Collective Noun: A group of crows is called a 'murder'."
  },
  {
    "id": 225,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The room ___ of smoke.",
    "options": ["stink", "stank", "stunk", "stinked"],
    "correct_answer": "stank",
    "explanation": "Past Simple: Irregular past form of 'stink' is 'stank' (participle is 'stunk')."
  },
  {
    "id": 226,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The light reacted to ___. ",
    "options": ["stimulus", "stimuli", "stimuluses", "stimula"],
    "correct_answer": "stimuli",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (stimulus -> stimuli)."
  },
  {
    "id": 227,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of jellyfish floated by.",
    "options": ["smack", "hit", "school", "swarm"],
    "correct_answer": "smack",
    "explanation": "Collective Noun: A group of jellyfish is called a 'smack'."
  },
  {
    "id": 228,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ down to pray.",
    "options": ["kneel", "knelt", "kneeled", "kneeling"],
    "correct_answer": "knelt",
    "explanation": "Past Simple: Irregular past form of 'kneel' is 'knelt'."
  },
  {
    "id": 229,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The train line has two ___.",
    "options": ["terminus", "termini", "terminuses", "termina"],
    "correct_answer": "termini",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (terminus -> termini)."
  },
  {
    "id": 230,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of cobras raised their hoods.",
    "options": ["quiver", "shake", "nest", "pack"],
    "correct_answer": "quiver",
    "explanation": "Collective Noun: A group of cobras is called a 'quiver'."
  },
  {
    "id": 231,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The grass was ___ yesterday.",
    "options": ["mow", "mowed", "mown", "mowing"],
    "correct_answer": "mown",
    "explanation": "Past Participle: 'Mow' becomes 'mowed' (past) and 'mown' (participle)."
  },
  {
    "id": 232,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Find the ___ of the points.",
    "options": ["locus", "loci", "locuses", "loca"],
    "correct_answer": "loci",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (locus -> loci)."
  },
  {
    "id": 233,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of rhinoceroses charged.",
    "options": ["crash", "bang", "herd", "rumble"],
    "correct_answer": "crash",
    "explanation": "Collective Noun: A group of rhinos is called a 'crash'."
  },
  {
    "id": 234,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The dress was ___ by hand.",
    "options": ["sew", "sewed", "sewn", "sewing"],
    "correct_answer": "sewn",
    "explanation": "Past Participle: 'Sew' becomes 'sewn' (used as passive adjective)."
  },
  {
    "id": 235,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The camera has two ___.",
    "options": ["focus", "foci", "focuses", "focas"],
    "correct_answer": "foci",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (focus -> foci)."
  },
  {
    "id": 236,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "An ___ of tigers hid in the grass.",
    "options": ["ambush", "attack", "army", "streak"],
    "correct_answer": "ambush",
    "explanation": "Collective Noun: A group of tigers is called an 'ambush' (or streak)."
  },
  {
    "id": 237,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The farmer has ___ the seeds.",
    "options": ["sow", "sowed", "sown", "sowing"],
    "correct_answer": "sown",
    "explanation": "Present Perfect: Past participle of 'sow' (plant seeds) is 'sown'."
  },
  {
    "id": 238,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The ___ are rod-shaped bacteria.",
    "options": ["bacillus", "bacilli", "bacilluses", "bacilla"],
    "correct_answer": "bacilli",
    "explanation": "Irregular Plural: Latin roots ending in -us change to -i (bacillus -> bacilli)."
  },
  {
    "id": 239,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of cats rested in the sun.",
    "options": ["clowder", "cloud", "cluster", "crowd"],
    "correct_answer": "clowder",
    "explanation": "Collective Noun: A group of cats is called a 'clowder'."
  },
  {
    "id": 240,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ on the ground.",
    "options": ["spit", "spat", "spitted", "spitting"],
    "correct_answer": "spat",
    "explanation": "Past Simple: Irregular past form of 'spit' is 'spat'."
  },
  {
    "id": 241,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Use these ___ to solve the problem.",
    "options": ["formula", "formulas", "formulae", "formuli"],
    "correct_answer": "formulae",
    "explanation": "Irregular Plural: Latin ending -a changes to -ae (formula -> formulae) in technical contexts."
  },
  {
    "id": 242,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of raccoons raided the trash.",
    "options": ["gaze", "stare", "look", "mask"],
    "correct_answer": "gaze",
    "explanation": "Collective Noun: A group of raccoons is called a 'gaze'."
  },
  {
    "id": 243,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The milk has ___.",
    "options": ["spoil", "spoiled", "spoilt", "spoiling"],
    "correct_answer": "spoilt",
    "explanation": "Past Participle: 'Spoilt' is the irregular/British spelling often used as an adjective."
  },
  {
    "id": 244,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Green ___ grew in the pond.",
    "options": ["alga", "algae", "algas", "algi"],
    "correct_answer": "algae",
    "explanation": "Irregular Plural: 'Algae' is the plural of 'alga'."
  },
  {
    "id": 245,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of moles dug tunnels.",
    "options": ["labor", "work", "group", "gang"],
    "correct_answer": "labor",
    "explanation": "Collective Noun: A group of moles is called a 'labor'."
  },
  {
    "id": 246,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "His ankle was ___.",
    "options": ["swell", "swelled", "swollen", "swoling"],
    "correct_answer": "swollen",
    "explanation": "Past Participle: 'Swollen' is used as the adjective."
  },
  {
    "id": 247,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Review the school ___.",
    "options": ["curriculum", "curriculums", "curricula", "curriculae"],
    "correct_answer": "curricula",
    "explanation": "Irregular Plural: Latin ending -um changes to -a (curriculum -> curricula)."
  },
  {
    "id": 248,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "An ___ of larks sang above.",
    "options": ["exaltation", "happiness", "choir", "flight"],
    "correct_answer": "exaltation",
    "explanation": "Collective Noun: A group of larks is called an 'exaltation'."
  },
  {
    "id": 249,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "She ___ a basket from reeds.",
    "options": ["weave", "wove", "woven", "weaving"],
    "correct_answer": "wove",
    "explanation": "Past Simple: Irregular past form of 'weave' is 'wove'."
  },
  {
    "id": 250,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "She wrote three ___.",
    "options": ["memorandum", "memorandums", "memoranda", "memorandas"],
    "correct_answer": "memoranda",
    "explanation": "Irregular Plural: Latin ending -um changes to -a (memorandum -> memoranda)."
  },
  {
    "id": 251,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ early this morning.",
    "options": ["awake", "awoke", "awaked", "awaken"],
    "correct_answer": "awoke",
    "explanation": "Past Simple: Irregular past form of 'awake' is 'awoke'."
  },
  {
    "id": 252,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The earth spins on its ___.",
    "options": ["axis", "axises", "axes", "axis's"],
    "correct_answer": "axes",
    "explanation": "Irregular Plural: Words ending in -is change to -es (axis -> axes, pronounced 'ax-eez')."
  },
  {
    "id": 253,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of cheetahs ran fast.",
    "options": ["coalition", "union", "pack", "herd"],
    "correct_answer": "coalition",
    "explanation": "Collective Noun: A group of cheetahs is uniquely called a 'coalition'."
  },
  {
    "id": 254,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "She has ___ three children.",
    "options": ["bear", "bore", "born", "borne"],
    "correct_answer": "borne",
    "explanation": "Present Perfect: 'Has borne' (carried/given birth). Note: 'Born' is passive (I was born)."
  },
  {
    "id": 255,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Read the ___ of the play.",
    "options": ["synopsis", "synopsises", "synopses", "synopsi"],
    "correct_answer": "synopses",
    "explanation": "Irregular Plural: Words ending in -is change to -es (synopsis -> synopses)."
  },
  {
    "id": 256,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of kangaroos jumped by.",
    "options": ["mob", "gang", "herd", "crowd"],
    "correct_answer": "mob",
    "explanation": "Collective Noun: A group of kangaroos is traditionally called a 'mob'."
  },
  {
    "id": 257,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Our team ___ them yesterday.",
    "options": ["beat", "beated", "beaten", "beating"],
    "correct_answer": "beat",
    "explanation": "Past Simple: 'Beat' is irregular; the past form remains 'beat'."
  },
  {
    "id": 258,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Five ___ lived in the forest.",
    "options": ["elf", "elfs", "elves", "elfes"],
    "correct_answer": "elves",
    "explanation": "Irregular Plural: Nouns ending in -f often change to -ves (elf -> elves)."
  },
  {
    "id": 259,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of alligators lay still.",
    "options": ["congregation", "church", "gathering", "float"],
    "correct_answer": "congregation",
    "explanation": "Collective Noun: A group of alligators is called a 'congregation'."
  },
  {
    "id": 260,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the metal bar.",
    "options": ["bend", "bended", "bent", "bending"],
    "correct_answer": "bent",
    "explanation": "Past Simple: Irregular past form of 'bend' is 'bent'."
  },
  {
    "id": 261,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The ___ connect to the spine.",
    "options": ["vertebra", "vertebras", "vertebrae", "vertebri"],
    "correct_answer": "vertebrae",
    "explanation": "Irregular Plural: Latin roots ending in -a change to -ae (vertebra -> vertebrae)."
  },
  {
    "id": 262,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of lemurs played in the tree.",
    "options": ["conspiracy", "plot", "troop", "band"],
    "correct_answer": "conspiracy",
    "explanation": "Collective Noun: A group of lemurs is called a 'conspiracy'."
  },
  {
    "id": 263,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "I ___ twenty dollars on the game.",
    "options": ["bet", "betted", "betting", "bets"],
    "correct_answer": "bet",
    "explanation": "Past Simple: 'Bet' is irregular; the past form remains 'bet' (though 'betted' exists, 'bet' is standard)."
  },
  {
    "id": 264,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The storm damaged the ___.",
    "options": ["roof", "roofs", "rooves", "roofes"],
    "correct_answer": "roofs",
    "explanation": "Regular Plural Exception: 'Roof' is an exception to the -ves rule; it usually just takes -s."
  },
  {
    "id": 265,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of squirrels climbed the oak.",
    "options": ["scurry", "hurry", "drey", "nut"],
    "correct_answer": "scurry",
    "explanation": "Collective Noun: A group of squirrels is called a 'scurry' (or dray)."
  },
  {
    "id": 266,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "They ___ him to the chair.",
    "options": ["bind", "bound", "binded", "bounded"],
    "correct_answer": "bound",
    "explanation": "Past Simple: Irregular past form of 'bind' is 'bound'."
  },
  {
    "id": 267,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The pyramid has an ___.",
    "options": ["apex", "apexes", "apices", "apexi"],
    "correct_answer": "apex",
    "explanation": "Singular Noun: The question implies one ('an'), so 'apex'. Plural is apices."
  },
  {
    "id": 268,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of pigs crossed the road.",
    "options": ["drift", "float", "drive", "mud"],
    "correct_answer": "drift",
    "explanation": "Collective Noun: A group of pigs is called a 'drift' (or drove)."
  },
  {
    "id": 269,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The dog ___ the postman.",
    "options": ["bite", "bit", "bitten", "bited"],
    "correct_answer": "bit",
    "explanation": "Past Simple: Irregular past form of 'bite' is 'bit'."
  },
  {
    "id": 270,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The insect waved its ___.",
    "options": ["antenna", "antennas", "antennae", "antenni"],
    "correct_answer": "antennae",
    "explanation": "Irregular Plural: Biological term ending in -a changes to -ae."
  },
  {
    "id": 271,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of wild boars charged.",
    "options": ["sounder", "noise", "squeal", "herd"],
    "correct_answer": "sounder",
    "explanation": "Collective Noun: A group of wild boars/swine is called a 'sounder'."
  },
  {
    "id": 272,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "His nose ___ yesterday.",
    "options": ["bleed", "bled", "bleeded", "blood"],
    "correct_answer": "bled",
    "explanation": "Past Simple: Irregular past form of 'bleed' is 'bled'."
  },
  {
    "id": 273,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The shampoo kills head ___.",
    "options": ["louse", "louses", "lice", "licen"],
    "correct_answer": "lice",
    "explanation": "Irregular Plural: The plural of 'louse' is 'lice'."
  },
  {
    "id": 274,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "We visited a seal ___.",
    "options": ["rookery", "nest", "hive", "den"],
    "correct_answer": "rookery",
    "explanation": "Collective Noun: A breeding ground for seals (or penguins) is a 'rookery'."
  },
  {
    "id": 275,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "They ___ dogs for the show.",
    "options": ["breed", "bred", "breeded", "brood"],
    "correct_answer": "bred",
    "explanation": "Past Simple: Irregular past form of 'breed' is 'bred'."
  },
  {
    "id": 276,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Roll the ___.",
    "options": ["die", "dice", "dices", "dies"],
    "correct_answer": "dice",
    "explanation": "Irregular Plural: 'Die' (singular cube) becomes 'dice' (plural/collective)."
  },
  {
    "id": 277,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of herons stood in the water.",
    "options": ["siege", "attack", "stand", "flock"],
    "correct_answer": "siege",
    "explanation": "Collective Noun: A group of herons is called a 'siege'."
  },
  {
    "id": 278,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The news was ___ worldwide.",
    "options": ["broadcast", "broadcasted", "broadcost", "broadcasting"],
    "correct_answer": "broadcast",
    "explanation": "Past Simple: 'Broadcast' usually remains 'broadcast' (like 'cast')."
  },
  {
    "id": 279,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Huge herds of ___ roamed the plains.",
    "options": ["bison", "bisons", "bisen", "bisone"],
    "correct_answer": "bison",
    "explanation": "Irregular Plural: 'Bison' stays the same in singular and plural."
  },
  {
    "id": 280,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of otters floated downstream.",
    "options": ["raft", "boat", "float", "school"],
    "correct_answer": "raft",
    "explanation": "Collective Noun: A group of otters in water is called a 'raft'."
  },
  {
    "id": 281,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "They ___ a new house.",
    "options": ["build", "built", "builded", "building"],
    "correct_answer": "built",
    "explanation": "Past Simple: Irregular past form of 'build' is 'built'."
  },
  {
    "id": 282,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He wrote three doctoral ___.",
    "options": ["thesis", "theses", "thesises", "thesi"],
    "correct_answer": "theses",
    "explanation": "Irregular Plural: Words ending in -is change to -es (thesis -> theses)."
  },
  {
    "id": 283,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of badgers emerged at dusk.",
    "options": ["cete", "seat", "sett", "pack"],
    "correct_answer": "cete",
    "explanation": "Collective Noun: A group of badgers is called a 'cete'."
  },
  {
    "id": 284,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The toast ___ in the toaster.",
    "options": ["burn", "burned", "burnt", "burning"],
    "correct_answer": "burnt",
    "explanation": "Past Simple: Both 'burned' and 'burnt' are correct; 'burnt' is common in UK English."
  },
  {
    "id": 285,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "We took two ___ in class.",
    "options": ["quiz", "quizes", "quizzes", "quizs"],
    "correct_answer": "quizzes",
    "explanation": "Plural Rule: Words ending in -z double the z and add -es."
  },
  {
    "id": 286,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of oxen pulled the plow.",
    "options": ["yoke", "egg", "pair", "couple"],
    "correct_answer": "yoke",
    "explanation": "Collective Noun: Two working oxen joined together are a 'yoke'."
  },
  {
    "id": 287,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The balloon ___ loudly.",
    "options": ["burst", "bursted", "bust", "bursting"],
    "correct_answer": "burst",
    "explanation": "Past Simple: 'Burst' is irregular; the past form remains 'burst'."
  },
  {
    "id": 288,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "Use the correct ___ for the database.",
    "options": ["schema", "schemas", "schemata", "schem"],
    "correct_answer": "schemata",
    "explanation": "Irregular Plural: Greek ending -a changes to -ata (schema -> schemata) in technical contexts."
  },
  {
    "id": 289,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of buzzards circled above.",
    "options": ["wake", "sleep", "flock", "murder"],
    "correct_answer": "wake",
    "explanation": "Collective Noun: A group of buzzards is called a 'wake'."
  },
  {
    "id": 290,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "They ___ lots for the prize.",
    "options": ["cast", "casted", "cost", "casting"],
    "correct_answer": "cast",
    "explanation": "Past Simple: 'Cast' is irregular; the past form remains 'cast'."
  },
  {
    "id": 291,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "Send your ___ (CVs) here.",
    "options": ["curriculum vitae", "curricula vitae", "curriculum vitaes", "curriculums vita"],
    "correct_answer": "curricula vitae",
    "explanation": "Irregular Plural: Both words pluralize in Latin (Curricula Vitae)."
  },
  {
    "id": 292,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of pelicans flew in formation.",
    "options": ["squadron", "army", "fleet", "wing"],
    "correct_answer": "squadron",
    "explanation": "Collective Noun: A group of pelicans is sometimes called a 'squadron' (or pod)."
  },
  {
    "id": 293,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the cards to the players.",
    "options": ["deal", "dealed", "dealt", "dealing"],
    "correct_answer": "dealt",
    "explanation": "Past Simple: Irregular past form of 'deal' is 'dealt' (pronounced 'delt')."
  },
  {
    "id": 294,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The opera has two ___.",
    "options": ["libretto", "librettos", "libretti", "libretta"],
    "correct_answer": "libretti",
    "explanation": "Irregular Plural: Italian ending -o changes to -i (libretto -> libretti)."
  },
  {
    "id": 295,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of nightingales sang sweetly.",
    "options": ["watch", "look", "listen", "choir"],
    "correct_answer": "watch",
    "explanation": "Collective Noun: A group of nightingales is called a 'watch'."
  },
  {
    "id": 296,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "She ___ the red dress yesterday.",
    "options": ["choose", "chose", "chosen", "choosing"],
    "correct_answer": "chose",
    "explanation": "Past Simple: Irregular past form of 'choose' is 'chose'."
  },
  {
    "id": 297,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The music has different ___.",
    "options": ["tempo", "tempos", "tempi", "tempus"],
    "correct_answer": "tempi",
    "explanation": "Irregular Plural: Italian ending -o changes to -i (tempo -> tempi) in music."
  },
  {
    "id": 298,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of magpies chattered.",
    "options": ["tiding", "news", "story", "flock"],
    "correct_answer": "tiding",
    "explanation": "Collective Noun: A group of magpies is poetically called a 'tiding'."
  },
  {
    "id": 299,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The spider ___ into the corner.",
    "options": ["creep", "crept", "creeped", "creeping"],
    "correct_answer": "crept",
    "explanation": "Past Simple: Irregular past form of 'creep' is 'crept'."
  },
  {
    "id": 300,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The orchestra is full of ___.",
    "options": ["virtuoso", "virtuosos", "virtuosi", "virtuosa"],
    "correct_answer": "virtuosi",
    "explanation": "Irregular Plural: Italian ending -o changes to -i (virtuoso -> virtuosi)."
  },
  {
    "id": 301,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The ticket ___ five dollars.",
    "options": ["cost", "costed", "costing", "costs"],
    "correct_answer": "cost",
    "explanation": "Past Simple: 'Cost' is irregular; the past form remains 'cost'."
  },
  {
    "id": 302,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She bought two ___ of bread.",
    "options": ["loaf", "loafs", "loaves", "loave"],
    "correct_answer": "loaves",
    "explanation": "Irregular Plural: Nouns ending in -f often change to -ves (loaf -> loaves)."
  },
  {
    "id": 303,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "A ___ of elephants walked by.",
    "options": ["herd", "pack", "flock", "school"],
    "correct_answer": "herd",
    "explanation": "Collective Noun: A group of elephants is commonly called a 'herd'."
  },
  {
    "id": 304,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the cards quickly.",
    "options": ["deal", "dealed", "dealt", "dealing"],
    "correct_answer": "dealt",
    "explanation": "Past Simple: Irregular past form of 'deal' is 'dealt'."
  },
  {
    "id": 305,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Make three ___ for your birthday.",
    "options": ["wish", "wishs", "wishes", "wishies"],
    "correct_answer": "wishes",
    "explanation": "Plural Rule: Nouns ending in -sh add -es."
  },
  {
    "id": 306,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The ___ played a loud song.",
    "options": ["band", "pack", "herd", "team"],
    "correct_answer": "band",
    "explanation": "Collective Noun: A group of musicians is called a 'band'."
  },
  {
    "id": 307,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The dog ___ a hole.",
    "options": ["dig", "dug", "digged", "digging"],
    "correct_answer": "dug",
    "explanation": "Past Simple: Irregular past form of 'dig' is 'dug'."
  },
  {
    "id": 308,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The island has two ___.",
    "options": ["volcano", "volcanos", "volcanoes", "volcanies"],
    "correct_answer": "volcanoes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (volcano -> volcanoes)."
  },
  {
    "id": 309,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The ship's ___ worked hard.",
    "options": ["crew", "crowd", "team", "pack"],
    "correct_answer": "crew",
    "explanation": "Collective Noun: A group of sailors working on a ship is a 'crew'."
  },
  {
    "id": 310,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "I ___ of flying last night.",
    "options": ["dream", "dreamed", "dreamt", "dreaming"],
    "correct_answer": "dreamt",
    "explanation": "Past Simple: Irregular past form of 'dream' is 'dreamt' (or dreamed)."
  },
  {
    "id": 311,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Five ___ swung from the trees.",
    "options": ["monkey", "monkies", "monkeys", "monkeies"],
    "correct_answer": "monkeys",
    "explanation": "Plural Rule: Nouns ending in vowel+y add -s (monkey -> monkeys)."
  },
  {
    "id": 312,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of thieves robbed the bank.",
    "options": ["gang", "pack", "herd", "flock"],
    "correct_answer": "gang",
    "explanation": "Collective Noun: A organized group of criminals is a 'gang'."
  },
  {
    "id": 313,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He has ___ too much water.",
    "options": ["drink", "drank", "drunk", "drinking"],
    "correct_answer": "drunk",
    "explanation": "Present Perfect: 'Has' + past participle 'drunk'."
  },
  {
    "id": 314,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Two ___ watched the building.",
    "options": ["spy", "spys", "spies", "spyes"],
    "correct_answer": "spies",
    "explanation": "Plural Rule: Nouns ending in consonant+y change y to i and add -es."
  },
  {
    "id": 315,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The dance ___ performed beautifully.",
    "options": ["troupe", "troop", "gang", "pack"],
    "correct_answer": "troupe",
    "explanation": "Collective Noun: A group of dancers/performers is a 'troupe' (not troop)."
  },
  {
    "id": 316,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "We ___ to the beach yesterday.",
    "options": ["drive", "drove", "driven", "driving"],
    "correct_answer": "drove",
    "explanation": "Past Simple: Irregular past form of 'drive' is 'drove'."
  },
  {
    "id": 317,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She picked wild ___.",
    "options": ["daisy", "daisys", "daisies", "daiseys"],
    "correct_answer": "daisies",
    "explanation": "Plural Rule: Nouns ending in consonant+y change y to i and add -es."
  },
  {
    "id": 318,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ bowed to the audience.",
    "options": ["cast", "crew", "gang", "panel"],
    "correct_answer": "cast",
    "explanation": "Collective Noun: The group of actors in a play/movie is the 'cast'."
  },
  {
    "id": 319,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Leaves have ___ from the tree.",
    "options": ["fall", "fell", "fallen", "falling"],
    "correct_answer": "fallen",
    "explanation": "Present Perfect: 'Have' + past participle 'fallen'."
  },
  {
    "id": 320,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "Three ___ ran into the woods.",
    "options": ["fox", "foxes", "foxs", "foxen"],
    "correct_answer": "foxes",
    "explanation": "Plural Rule: Nouns ending in -x add -es."
  },
  {
    "id": 321,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of experts discussed it.",
    "options": ["panel", "board", "flock", "gang"],
    "correct_answer": "panel",
    "explanation": "Collective Noun: A selected group of experts is a 'panel'."
  },
  {
    "id": 322,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ off the ladder.",
    "options": ["fall", "fell", "fallen", "falling"],
    "correct_answer": "fell",
    "explanation": "Past Simple: Irregular past form of 'fall' is 'fell'."
  },
  {
    "id": 323,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I need a box of ___.",
    "options": ["match", "matchs", "matches", "matchies"],
    "correct_answer": "matches",
    "explanation": "Plural Rule: Nouns ending in -ch add -es."
  },
  {
    "id": 324,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ of directors met today.",
    "options": ["board", "plank", "panel", "crew"],
    "correct_answer": "board",
    "explanation": "Collective Noun: A governing body of a company is a 'board'."
  },
  {
    "id": 325,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She ___ the cat this morning.",
    "options": ["feed", "fed", "feeded", "feeding"],
    "correct_answer": "fed",
    "explanation": "Past Simple: Irregular past form of 'feed' is 'fed'."
  },
  {
    "id": 326,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The cow had two ___.",
    "options": ["calf", "calfs", "calves", "calve"],
    "correct_answer": "calves",
    "explanation": "Irregular Plural: Nouns ending in -f change to -ves (calf -> calves)."
  },
  {
    "id": 327,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The ___ listened to the sermon.",
    "options": ["congregation", "audience", "crowd", "mob"],
    "correct_answer": "congregation",
    "explanation": "Collective Noun: A group of people at church is a 'congregation'."
  },
  {
    "id": 328,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ sick yesterday.",
    "options": ["feel", "felt", "feeled", "feeling"],
    "correct_answer": "felt",
    "explanation": "Past Simple: Irregular past form of 'feel' is 'felt'."
  },
  {
    "id": 329,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She wore two wool ___.",
    "options": ["scarf", "scarfs", "scarves", "scarve"],
    "correct_answer": "scarves",
    "explanation": "Irregular Plural: 'Scarf' changes to 'scarves'."
  },
  {
    "id": 330,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of soldiers marched by.",
    "options": ["platoon", "gang", "herd", "pack"],
    "correct_answer": "platoon",
    "explanation": "Collective Noun: A military unit is a 'platoon' (or regiment/squad)."
  },
  {
    "id": 331,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "I ___ my keys in the car.",
    "options": ["find", "found", "finded", "finding"],
    "correct_answer": "found",
    "explanation": "Past Simple: Irregular past form of 'find' is 'found'."
  },
  {
    "id": 332,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "King Henry had six ___.",
    "options": ["wife", "wifes", "wives", "wive"],
    "correct_answer": "wives",
    "explanation": "Irregular Plural: 'Wife' changes to 'wives'."
  },
  {
    "id": 333,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of rubbish lay on the floor.",
    "options": ["heap", "herd", "flock", "crowd"],
    "correct_answer": "heap",
    "explanation": "Collective Noun: A disorganized collection of things is a 'heap'."
  },
  {
    "id": 334,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The refugees ___ the country.",
    "options": ["flee", "fled", "fleed", "flown"],
    "correct_answer": "fled",
    "explanation": "Past Simple: Irregular past form of 'flee' is 'fled'."
  },
  {
    "id": 335,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Cut the orange into ___.",
    "options": ["half", "halfs", "halves", "halve"],
    "correct_answer": "halves",
    "explanation": "Irregular Plural: 'Half' changes to 'halves'."
  },
  {
    "id": 336,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Put the socks in the ___ of drawers.",
    "options": ["chest", "box", "trunk", "herd"],
    "correct_answer": "chest",
    "explanation": "Collective Noun: Furniture with drawers is a 'chest of drawers'."
  },
  {
    "id": 337,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ his name yesterday.",
    "options": ["forget", "forgot", "forgotten", "forgetting"],
    "correct_answer": "forgot",
    "explanation": "Past Simple: Irregular past form of 'forget' is 'forgot'."
  },
  {
    "id": 338,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He carried a ___ of papers.",
    "options": ["sheaf", "sheaves", "sheafs", "sheave"],
    "correct_answer": "sheaf",
    "explanation": "Collective Noun: A bundle of papers (or wheat) is a 'sheaf' (Singular)."
  },
  {
    "id": 339,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "We climbed a ___ of stairs.",
    "options": ["flight", "flock", "herd", "run"],
    "correct_answer": "flight",
    "explanation": "Collective Noun: A set of stairs is a 'flight'."
  },
  {
    "id": 340,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "His mother ___ him to go.",
    "options": ["forbid", "forbade", "forbidden", "forbided"],
    "correct_answer": "forbade",
    "explanation": "Past Simple: Irregular past form of 'forbid' is 'forbade' (pronounced 'for-bad')."
  },
  {
    "id": 341,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "They looked at their other ___.",
    "options": ["self", "selfs", "selves", "selve"],
    "correct_answer": "selves",
    "explanation": "Irregular Plural: 'Self' changes to 'selves'."
  },
  {
    "id": 342,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "We walked through a ___ of trees.",
    "options": ["grove", "herd", "pack", "flock"],
    "correct_answer": "grove",
    "explanation": "Collective Noun: A small group of trees is a 'grove'."
  },
  {
    "id": 343,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She ___ him for his mistake.",
    "options": ["forgive", "forgave", "forgiven", "forgiving"],
    "correct_answer": "forgave",
    "explanation": "Past Simple: Irregular past form of 'forgive' is 'forgave'."
  },
  {
    "id": 344,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The horse has hard ___.",
    "options": ["hoof", "hoofs", "hooves", "hoove"],
    "correct_answer": "hooves",
    "explanation": "Irregular Plural: 'Hoof' can be 'hoofs' or 'hooves', but 'hooves' is very common."
  },
  {
    "id": 345,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The archer bought a ___ of arrows.",
    "options": ["sheaf", "pack", "herd", "quiver"],
    "correct_answer": "sheaf",
    "explanation": "Collective Noun: A bundle of arrows is a 'sheaf' (A quiver is the container)."
  },
  {
    "id": 346,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The lake ___ over in winter.",
    "options": ["freeze", "froze", "frozen", "freezed"],
    "correct_answer": "froze",
    "explanation": "Past Simple: Irregular past form of 'freeze' is 'froze'."
  },
  {
    "id": 347,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The money is in the ___.",
    "options": ["safe", "safes", "saves", "saven"],
    "correct_answer": "safes",
    "explanation": "Regular Plural Exception: 'Safe' (box) adds -s, not -ves."
  },
  {
    "id": 348,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "Buy a ___ of paper.",
    "options": ["ream", "sheet", "deck", "herd"],
    "correct_answer": "ream",
    "explanation": "Collective Noun: A package of 500 sheets of paper is a 'ream'."
  },
  {
    "id": 349,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He has ___ better at swimming.",
    "options": ["get", "got", "gotten", "getting"],
    "correct_answer": "gotten",
    "explanation": "Present Perfect: US English prefers 'gotten', UK 'got'. 'Gotten' implies 'become'."
  },
  {
    "id": 350,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The tribal ___ met for peace.",
    "options": ["chief", "chiefs", "chieves", "chieve"],
    "correct_answer": "chiefs",
    "explanation": "Regular Plural Exception: 'Chief' adds -s, not -ves."
  },
  {
    "id": 351,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ the picture on the wall.",
    "options": ["hang", "hanged", "hung", "hanging"],
    "correct_answer": "hung",
    "explanation": "Past Simple: 'Hung' is for objects; 'hanged' is for execution."
  },
  {
    "id": 352,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "She wore a ___ of pearls.",
    "options": ["string", "rope", "chain", "line"],
    "correct_answer": "string",
    "explanation": "Collective Noun: A group of pearls threaded together is a 'string'."
  },
  {
    "id": 353,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The city has many art ___.",
    "options": ["studio", "studios", "studioes", "studis"],
    "correct_answer": "studios",
    "explanation": "Regular Plural Exception: 'Studio' ends in -o but adds only -s."
  },
  {
    "id": 354,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ down to beg.",
    "options": ["kneel", "kneed", "knelt", "kneeling"],
    "correct_answer": "knelt",
    "explanation": "Past Simple: Irregular past form of 'kneel' is 'knelt' (or kneeled)."
  },
  {
    "id": 355,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of turtles rested on the log.",
    "options": ["bale", "shell", "herd", "pack"],
    "correct_answer": "bale",
    "explanation": "Collective Noun: A group of turtles is called a 'bale'."
  },
  {
    "id": 356,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The ___ faded into silence.",
    "options": ["echo", "echos", "echoes", "echoies"],
    "correct_answer": "echoes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (echo -> echoes)."
  },
  {
    "id": 357,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The chicken ___ three eggs.",
    "options": ["lie", "lay", "laid", "lain"],
    "correct_answer": "laid",
    "explanation": "Past Simple: 'Lay' (to produce eggs) becomes 'laid'."
  },
  {
    "id": 358,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of finches ate the seeds.",
    "options": ["charm", "spell", "flock", "school"],
    "correct_answer": "charm",
    "explanation": "Collective Noun: A group of finches is called a 'charm'."
  },
  {
    "id": 359,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The ___ saved the village.",
    "options": ["hero", "heros", "heroes", "heroies"],
    "correct_answer": "heroes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (hero -> heroes)."
  },
  {
    "id": 360,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the candle.",
    "options": ["light", "litted", "lit", "lighting"],
    "correct_answer": "lit",
    "explanation": "Past Simple: Irregular past form of 'light' is 'lit'."
  },
  {
    "id": 361,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of witches gathered.",
    "options": ["coven", "club", "herd", "pack"],
    "correct_answer": "coven",
    "explanation": "Collective Noun: A group of witches is called a 'coven'."
  },
  {
    "id": 362,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Boil the ___ for dinner.",
    "options": ["potato", "potatos", "potatoes", "potaties"],
    "correct_answer": "potatoes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (potato -> potatoes)."
  },
  {
    "id": 363,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The lawn was ___ yesterday.",
    "options": ["mow", "mowed", "mown", "mowing"],
    "correct_answer": "mown",
    "explanation": "Past Participle: 'Mow' becomes 'mown' (used as passive adjective)."
  },
  {
    "id": 364,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of quail ran across the field.",
    "options": ["bevy", "drink", "flock", "pack"],
    "correct_answer": "bevy",
    "explanation": "Collective Noun: A group of quail (or ladies) is called a 'bevy'."
  },
  {
    "id": 365,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "I need three ripe ___.",
    "options": ["tomato", "tomatos", "tomatoes", "tomaties"],
    "correct_answer": "tomatoes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (tomato -> tomatoes)."
  },
  {
    "id": 366,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Panic ___ the crowd.",
    "options": ["overtake", "overtook", "overtaken", "overtaking"],
    "correct_answer": "overtook",
    "explanation": "Past Simple: Irregular past form of 'overtake' is 'overtook'."
  },
  {
    "id": 367,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of locusts destroyed the crops.",
    "options": ["plague", "swarm", "cloud", "herd"],
    "correct_answer": "plague",
    "explanation": "Collective Noun: A destructive swarm of locusts is often called a 'plague'."
  },
  {
    "id": 368,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The submarine fired two ___.",
    "options": ["torpedo", "torpedos", "torpedoes", "torpedi"],
    "correct_answer": "torpedoes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (torpedo -> torpedoes)."
  },
  {
    "id": 369,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ for the meal.",
    "options": ["pay", "payed", "paid", "paying"],
    "correct_answer": "paid",
    "explanation": "Past Simple: Irregular past form of 'pay' is 'paid' (not payed)."
  },
  {
    "id": 370,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The archer reached for his ___.",
    "options": ["quiver", "sheaf", "pack", "bow"],
    "correct_answer": "quiver",
    "explanation": "Collective Noun: A container for holding arrows is a 'quiver'."
  },
  {
    "id": 371,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The president issued two ___.",
    "options": ["veto", "vetos", "vetoes", "vetis"],
    "correct_answer": "vetoes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (veto -> vetoes)."
  },
  {
    "id": 372,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He ___ guilty to the crime.",
    "options": ["plead", "pled", "pleaden", "pleading"],
    "correct_answer": "pled",
    "explanation": "Past Simple: 'Pled' (or pleaded) is the past form of 'plead'."
  },
  {
    "id": 373,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of zombies attacked.",
    "options": ["horde", "herd", "flock", "pack"],
    "correct_answer": "horde",
    "explanation": "Collective Noun: A large, disorganized group of savages or monsters is a 'horde'."
  },
  {
    "id": 374,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The trade ___ were lifted.",
    "options": ["embargo", "embargos", "embargoes", "embargis"],
    "correct_answer": "embargoes",
    "explanation": "Plural Rule: Nouns ending in -o often add -es (embargo -> embargoes)."
  },
  {
    "id": 375,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "It has been ___ true.",
    "options": ["prove", "proved", "proven", "proving"],
    "correct_answer": "proven",
    "explanation": "Past Participle: 'Proven' is commonly used as the participle/adjective of 'prove'."
  },
  {
    "id": 376,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The hen sat on a ___ of eggs.",
    "options": ["clutch", "bunch", "pack", "herd"],
    "correct_answer": "clutch",
    "explanation": "Collective Noun: A group of eggs laid at once is a 'clutch'."
  },
  {
    "id": 377,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Turn on the ___.",
    "options": ["radio", "radios", "radioes", "radis"],
    "correct_answer": "radios",
    "explanation": "Regular Plural Exception: 'Radio' ends in -o but adds only -s."
  },
  {
    "id": 378,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "She ___ the horse fast.",
    "options": ["ride", "rode", "ridden", "riding"],
    "correct_answer": "rode",
    "explanation": "Past Simple: Irregular past form of 'ride' is 'rode'."
  },
  {
    "id": 379,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of chicks followed the hen.",
    "options": ["brood", "breed", "flock", "herd"],
    "correct_answer": "brood",
    "explanation": "Collective Noun: A family of young birds is a 'brood'."
  },
  {
    "id": 380,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Watch these ___.",
    "options": ["video", "videos", "videoes", "vidios"],
    "correct_answer": "videos",
    "explanation": "Regular Plural Exception: 'Video' ends in -o but adds only -s."
  },
  {
    "id": 381,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The phone ___ loudly.",
    "options": ["ring", "rang", "rung", "ringing"],
    "correct_answer": "rang",
    "explanation": "Past Simple: Irregular past form of 'ring' is 'rang'."
  },
  {
    "id": 382,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of islands formed an arc.",
    "options": ["chain", "string", "rope", "flock"],
    "correct_answer": "chain",
    "explanation": "Collective Noun: A group of islands is called a 'chain' (or archipelago)."
  },
  {
    "id": 383,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The sun ___ at 6 AM.",
    "options": ["rise", "rose", "risen", "rising"],
    "correct_answer": "rose",
    "explanation": "Past Simple: Irregular past form of 'rise' is 'rose'."
  },
  {
    "id": 384,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "We visited three ___.",
    "options": ["zoo", "zoos", "zooes", "zoose"],
    "correct_answer": "zoos",
    "explanation": "Regular Plural Exception: 'Zoo' ends in -o but adds only -s."
  },
  {
    "id": 385,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He held a ___ of cash.",
    "options": ["wad", "wood", "wid", "wed"],
    "correct_answer": "wad",
    "explanation": "Collective Noun: A bundle of paper money is a 'wad'."
  },
  {
    "id": 386,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ to the store.",
    "options": ["run", "ran", "runned", "running"],
    "correct_answer": "ran",
    "explanation": "Past Simple: Irregular past form of 'run' is 'ran'."
  },
  {
    "id": 387,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He plays two ___.",
    "options": ["piano", "pianos", "pianoes", "pianis"],
    "correct_answer": "pianos",
    "explanation": "Regular Plural Exception: 'Piano' ends in -o but adds only -s."
  },
  {
    "id": 388,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of wood lay by the fire.",
    "options": ["stack", "herd", "flock", "pack"],
    "correct_answer": "stack",
    "explanation": "Collective Noun: A pile of wood/hay is a 'stack'."
  },
  {
    "id": 389,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The logs were ___ yesterday.",
    "options": ["saw", "sawed", "sawn", "sawing"],
    "correct_answer": "sawn",
    "explanation": "Past Participle: 'Saw' becomes 'sawn' (used as passive adjective)."
  },
  {
    "id": 390,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Take some ___ of the event.",
    "options": ["photo", "photos", "photoes", "photis"],
    "correct_answer": "photos",
    "explanation": "Regular Plural Exception: 'Photo' ends in -o but adds only -s."
  },
  {
    "id": 391,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of grass grew in the crack.",
    "options": ["tuft", "flock", "herd", "school"],
    "correct_answer": "tuft",
    "explanation": "Collective Noun: A small bunch of grass/hair is a 'tuft'."
  },
  {
    "id": 392,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He ___ revenge.",
    "options": ["seek", "sought", "seeked", "saught"],
    "correct_answer": "sought",
    "explanation": "Past Simple: Irregular past form of 'seek' is 'sought'."
  },
  {
    "id": 393,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She sang three ___.",
    "options": ["solo", "solos", "soloes", "solis"],
    "correct_answer": "solos",
    "explanation": "Regular Plural Exception: 'Solo' ends in -o but adds only -s."
  },
  {
    "id": 394,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "They booked a ___ of rooms.",
    "options": ["suite", "sweet", "suit", "sweat"],
    "correct_answer": "suite",
    "explanation": "Collective Noun: A set of connected rooms is a 'suite'."
  },
  {
    "id": 395,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ my old car.",
    "options": ["sell", "sold", "selled", "selling"],
    "correct_answer": "sold",
    "explanation": "Past Simple: Irregular past form of 'sell' is 'sold'."
  },
  {
    "id": 396,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The choir needs more ___.",
    "options": ["soprano", "sopranos", "sopranoes", "soprani"],
    "correct_answer": "sopranos",
    "explanation": "Regular Plural Exception: 'Soprano' ends in -o but adds only -s."
  },
  {
    "id": 397,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He bought a ___ of film.",
    "options": ["reel", "real", "roll", "wheel"],
    "correct_answer": "reel",
    "explanation": "Collective Noun: Film or thread is wound on a 'reel'."
  },
  {
    "id": 398,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "She ___ the letter yesterday.",
    "options": ["send", "sent", "sended", "sending"],
    "correct_answer": "sent",
    "explanation": "Past Simple: Irregular past form of 'send' is 'sent'."
  },
  {
    "id": 399,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "I lost five ___.",
    "options": ["kilo", "kilos", "kiloes", "kilies"],
    "correct_answer": "kilos",
    "explanation": "Regular Plural Exception: 'Kilo' ends in -o but adds only -s."
  },
  {
    "id": 400,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of islands stretched south.",
    "options": ["chain", "rope", "string", "flock"],
    "correct_answer": "chain",
    "explanation": "Collective Noun: A line of islands is a 'chain'."
  },
  {
    "id": 401,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The sun ___ in the west.",
    "options": ["set", "setted", "sat", "setting"],
    "correct_answer": "set",
    "explanation": "Past Simple: 'Set' is irregular; the past form remains 'set'."
  },
  {
    "id": 402,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The artist owns two ___.",
    "options": ["studio", "studios", "studioes", "studi"],
    "correct_answer": "studios",
    "explanation": "Regular Plural Exception: 'Studio' ends in -o but adds only -s."
  },
  {
    "id": 403,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of geese flew south.",
    "options": ["skein", "skin", "gaggle", "herd"],
    "correct_answer": "skein",
    "explanation": "Collective Noun: A group of geese *in flight* is a 'skein' (on ground: 'gaggle')."
  },
  {
    "id": 404,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the bottle well.",
    "options": ["shake", "shook", "shaked", "shaken"],
    "correct_answer": "shook",
    "explanation": "Past Simple: Irregular past form of 'shake' is 'shook'."
  },
  {
    "id": 405,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Buy three ripe ___.",
    "options": ["avocado", "avocados", "avocadoes", "avocadis"],
    "correct_answer": "avocados",
    "explanation": "Regular Plural Exception: 'Avocado' ends in -o but adds only -s."
  },
  {
    "id": 406,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of books fell over.",
    "options": ["pile", "herd", "flock", "covey"],
    "correct_answer": "pile",
    "explanation": "Collective Noun: A disorganized collection of things is a 'pile' (or heap)."
  },
  {
    "id": 407,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The sun ___ brightly yesterday.",
    "options": ["shine", "shone", "shined", "shining"],
    "correct_answer": "shone",
    "explanation": "Past Simple: Irregular past form of 'shine' (give light) is 'shone'."
  },
  {
    "id": 408,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ attacked at night.",
    "options": ["commando", "commandos", "commandoes", "commandi"],
    "correct_answer": "commandos",
    "explanation": "Regular Plural Exception: 'Commando' ends in -o but adds only -s."
  },
  {
    "id": 409,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He hung a ___ of flowers.",
    "options": ["wreath", "herd", "pack", "flock"],
    "correct_answer": "wreath",
    "explanation": "Collective Noun: An arrangement of flowers (circular) is a 'wreath'."
  },
  {
    "id": 410,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ the door quietly.",
    "options": ["shut", "shutted", "shot", "shutting"],
    "correct_answer": "shut",
    "explanation": "Past Simple: 'Shut' is irregular; the past form remains 'shut'."
  },
  {
    "id": 411,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The orchestra has four ___.",
    "options": ["cello", "cellos", "celloes", "celli"],
    "correct_answer": "cellos",
    "explanation": "Regular Plural Exception: 'Cello' ends in -o but adds only -s."
  },
  {
    "id": 412,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of kittens played.",
    "options": ["kindle", "fire", "spark", "herd"],
    "correct_answer": "kindle",
    "explanation": "Collective Noun: A group of kittens is uniquely called a 'kindle' (or litter)."
  },
  {
    "id": 413,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She ___ a lullaby softly.",
    "options": ["sing", "sang", "sung", "singed"],
    "correct_answer": "sang",
    "explanation": "Past Simple: Irregular past form of 'sing' is 'sang'."
  },
  {
    "id": 414,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Astronomers study distant ___.",
    "options": ["nebula", "nebulas", "nebulae", "nebuli"],
    "correct_answer": "nebulae",
    "explanation": "Irregular Plural: Latin ending -a changes to -ae (nebula -> nebulae)."
  },
  {
    "id": 415,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of oysters lay there.",
    "options": ["bed", "sheet", "blanket", "herd"],
    "correct_answer": "bed",
    "explanation": "Collective Noun: A group of oysters (or flowers) on the ground is a 'bed'."
  },
  {
    "id": 416,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "The boat ___ in the storm.",
    "options": ["sink", "sank", "sunk", "sinked"],
    "correct_answer": "sank",
    "explanation": "Past Simple: Irregular past form of 'sink' is 'sank'."
  },
  {
    "id": 417,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Nerves connect to ___.",
    "options": ["ganglion", "ganglions", "ganglia", "gangli"],
    "correct_answer": "ganglia",
    "explanation": "Irregular Plural: Greek ending -on changes to -a (ganglion -> ganglia)."
  },
  {
    "id": 418,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He gave her a ___ of flowers.",
    "options": ["bouquet", "bucket", "herd", "pack"],
    "correct_answer": "bouquet",
    "explanation": "Collective Noun: An arranged bunch of flowers is a 'bouquet'."
  },
  {
    "id": 419,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She ___ on the chair.",
    "options": ["sit", "sat", "sitted", "sitting"],
    "correct_answer": "sat",
    "explanation": "Past Simple: Irregular past form of 'sit' is 'sat'."
  },
  {
    "id": 420,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "His religious ___ are strong.",
    "options": ["belief", "beliefs", "believes", "beliefes"],
    "correct_answer": "beliefs",
    "explanation": "Regular Plural Exception: 'Belief' adds -s, not -ves (unlike leaf -> leaves)."
  },
  {
    "id": 421,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "I bought a ___ of grapes.",
    "options": ["bunch", "herd", "flock", "pack"],
    "correct_answer": "bunch",
    "explanation": "Collective Noun: Grapes attached together form a 'bunch' (or cluster)."
  },
  {
    "id": 422,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The children ___ on the ice.",
    "options": ["slide", "slid", "slided", "sliding"],
    "correct_answer": "slid",
    "explanation": "Past Simple: Irregular past form of 'slide' is 'slid'."
  },
  {
    "id": 423,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ were steep.",
    "options": ["cliff", "cliffs", "clives", "cliffes"],
    "correct_answer": "cliffs",
    "explanation": "Regular Plural Exception: 'Cliff' adds -s, not -ves."
  },
  {
    "id": 424,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He carried a ___ of sticks.",
    "options": ["bundle", "bunch", "herd", "flock"],
    "correct_answer": "bundle",
    "explanation": "Collective Noun: Things tied together form a 'bundle'."
  },
  {
    "id": 425,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ the bag over his shoulder.",
    "options": ["sling", "slang", "slung", "slinged"],
    "correct_answer": "slung",
    "explanation": "Past Simple: Irregular past form of 'sling' is 'slung'."
  },
  {
    "id": 426,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Show me the ___.",
    "options": ["proof", "proofs", "prooves", "proves"],
    "correct_answer": "proofs",
    "explanation": "Regular Plural Exception: 'Proof' adds -s, not -ves."
  },
  {
    "id": 427,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of bushes blocked the way.",
    "options": ["clump", "herd", "flock", "school"],
    "correct_answer": "clump",
    "explanation": "Collective Noun: A small group of plants/bushes growing together is a 'clump'."
  },
  {
    "id": 428,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He ___ the envelope open.",
    "options": ["slit", "slitted", "slat", "slitting"],
    "correct_answer": "slit",
    "explanation": "Past Simple: 'Slit' is irregular; the past form remains 'slit'."
  },
  {
    "id": 429,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The policeman put on the ___.",
    "options": ["cuff", "cuffs", "cuves", "cuffes"],
    "correct_answer": "cuffs",
    "explanation": "Regular Plural Exception: 'Cuff' adds -s, not -ves."
  },
  {
    "id": 430,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "A ___ of stars shone brightly.",
    "options": ["cluster", "bunch", "herd", "pack"],
    "correct_answer": "cluster",
    "explanation": "Collective Noun: A small group of stars is a 'cluster' (large is constellation/galaxy)."
  },
  {
    "id": 431,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The room ___ of flowers.",
    "options": ["smell", "smelled", "smelt", "smelling"],
    "correct_answer": "smelled",
    "explanation": "Past Simple: 'Smelled' (US) or 'Smelt' (UK) are both correct. 'Smelled' is standard here."
  },
  {
    "id": 432,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She has two silk ___.",
    "options": ["handkerchief", "handkerchiefs", "handkerchieves", "handkerchievs"],
    "correct_answer": "handkerchiefs",
    "explanation": "Regular Plural Exception: 'Handkerchief' usually adds -s, though -ves is archaic/rare."
  },
  {
    "id": 433,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Orion is a famous ___.",
    "options": ["constellation", "galaxy", "cluster", "star"],
    "correct_answer": "constellation",
    "explanation": "Collective Noun: A recognized pattern of stars is a 'constellation'."
  },
  {
    "id": 434,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The car ___ away.",
    "options": ["speed", "sped", "speeded", "speeding"],
    "correct_answer": "sped",
    "explanation": "Past Simple: Irregular past form of 'speed' is 'sped'."
  },
  {
    "id": 435,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The two ___ are wide.",
    "options": ["gulf", "gulfs", "gulves", "gulfes"],
    "correct_answer": "gulfs",
    "explanation": "Regular Plural Exception: 'Gulf' adds -s, not -ves."
  },
  {
    "id": 436,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Shuffle the ___ of cards.",
    "options": ["deck", "pack", "stack", "pile"],
    "correct_answer": "deck",
    "explanation": "Collective Noun: A set of playing cards is a 'deck' (US) or 'pack' (UK). 'Deck' is standard."
  },
  {
    "id": 437,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the word wrong.",
    "options": ["spell", "spelled", "spelt", "spelling"],
    "correct_answer": "spelled",
    "explanation": "Past Simple: 'Spelled' (US) or 'Spelt' (UK). 'Spelled' is safe standard."
  },
  {
    "id": 438,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Coral ___ are beautiful.",
    "options": ["reef", "reefs", "reeves", "reves"],
    "correct_answer": "reefs",
    "explanation": "Regular Plural Exception: 'Reef' adds -s, not -ves."
  },
  {
    "id": 439,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The Milky Way is a ___.",
    "options": ["galaxy", "constellation", "cluster", "universe"],
    "correct_answer": "galaxy",
    "explanation": "Collective Noun: A massive system of stars is a 'galaxy'."
  },
  {
    "id": 440,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "I ___ all my money.",
    "options": ["spend", "spent", "spended", "spending"],
    "correct_answer": "spent",
    "explanation": "Past Simple: Irregular past form of 'spend' is 'spent'."
  },
  {
    "id": 441,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She shared her ___.",
    "options": ["grief", "griefs", "grieves", "grieving"],
    "correct_answer": "griefs",
    "explanation": "Regular Plural Exception: 'Grief' adds -s, not -ves."
  },
  {
    "id": 442,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of angels appeared.",
    "options": ["host", "flock", "herd", "pack"],
    "correct_answer": "host",
    "explanation": "Collective Noun: A large number of angels/sparrows is a 'host'."
  },
  {
    "id": 443,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the milk.",
    "options": ["spill", "spilled", "spilt", "spilling"],
    "correct_answer": "spilled",
    "explanation": "Past Simple: 'Spilled' (US) or 'Spilt' (UK). 'Spilled' is safe standard."
  },
  {
    "id": 444,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The social ___ are powerful.",
    "options": ["medium", "media", "mediums", "medias"],
    "correct_answer": "media",
    "explanation": "Irregular Plural: 'Media' is the plural of 'medium'."
  },
  {
    "id": 445,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "She has a large ___ of books.",
    "options": ["library", "school", "flock", "pack"],
    "correct_answer": "library",
    "explanation": "Collective Noun: A large collection of books is a 'library'."
  },
  {
    "id": 446,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The wheel ___ round.",
    "options": ["spin", "spun", "span", "spinning"],
    "correct_answer": "spun",
    "explanation": "Past Simple: Irregular past form of 'spin' is 'spun'."
  },
  {
    "id": 447,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The rock ___ are visible.",
    "options": ["stratum", "strata", "stratums", "stratas"],
    "correct_answer": "strata",
    "explanation": "Irregular Plural: Latin ending -um changes to -a (stratum -> strata)."
  },
  {
    "id": 448,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "An ___ of apple trees.",
    "options": ["orchard", "forest", "grove", "clump"],
    "correct_answer": "orchard",
    "explanation": "Collective Noun: A group of fruit trees is an 'orchard'."
  },
  {
    "id": 449,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ in the corner.",
    "options": ["stand", "stood", "standed", "standing"],
    "correct_answer": "stood",
    "explanation": "Past Simple: Irregular past form of 'stand' is 'stood'."
  },
  {
    "id": 450,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Read the ___ at the end.",
    "options": ["addendum", "addenda", "addendums", "addendas"],
    "correct_answer": "addenda",
    "explanation": "Irregular Plural: Latin ending -um changes to -a (addendum -> addenda)."
  },
  {
    "id": 451,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "He ___ the alarm clock.",
    "options": ["set", "setted", "sat", "setting"],
    "correct_answer": "set",
    "explanation": "Past Simple: 'Set' is irregular; the past form remains 'set'."
  },
  {
    "id": 452,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The fisherman caught five ___.",
    "options": ["salmon", "salmons", "salmones", "sammon"],
    "correct_answer": "salmon",
    "explanation": "Irregular Plural: 'Salmon' stays the same in singular and plural."
  },
  {
    "id": 453,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of ships sailed by.",
    "options": ["fleet", "flock", "herd", "pack"],
    "correct_answer": "fleet",
    "explanation": "Collective Noun: A large group of ships or vehicles is a 'fleet'."
  },
  {
    "id": 454,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She ___ the floor yesterday.",
    "options": ["sweep", "swept", "sweeped", "sweeping"],
    "correct_answer": "swept",
    "explanation": "Past Simple: Irregular past form of 'sweep' is 'swept'."
  },
  {
    "id": 455,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Look at the ___ (passers-by).",
    "options": ["passerby", "passersby", "passerbys", "passersbys"],
    "correct_answer": "passersby",
    "explanation": "Compound Noun: Pluralize the person ('passers'), not the preposition ('by')."
  },
  {
    "id": 456,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "An ___ of peacocks strutted.",
    "options": ["ostentation", "show", "display", "pride"],
    "correct_answer": "ostentation",
    "explanation": "Collective Noun: A group of peacocks is poetically called an 'ostentation'."
  },
  {
    "id": 457,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ a loud noise.",
    "options": ["hear", "heard", "heared", "hearing"],
    "correct_answer": "heard",
    "explanation": "Past Simple: Irregular past form of 'hear' is 'heard'."
  },
  {
    "id": 458,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Cook the ___ for dinner.",
    "options": ["shrimp", "shrimps", "shrimpes", "shrimpi"],
    "correct_answer": "shrimp",
    "explanation": "Irregular Plural: 'Shrimp' can be pluralized as 'shrimp' (common in food context) or 'shrimps'."
  },
  {
    "id": 459,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of mountains blocked the path.",
    "options": ["range", "herd", "flock", "deck"],
    "correct_answer": "range",
    "explanation": "Collective Noun: A line of mountains is a 'range'."
  },
  {
    "id": 460,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ against the wall.",
    "options": ["lean", "leaned", "leant", "leaning"],
    "correct_answer": "leant",
    "explanation": "Past Simple: 'Leant' (UK) or 'Leaned' (US). 'Leant' is the irregular form."
  },
  {
    "id": 461,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "The ___ are in the river.",
    "options": ["trout", "trouts", "troute", "fishs"],
    "correct_answer": "trout",
    "explanation": "Irregular Plural: 'Trout' stays the same in singular and plural."
  },
  {
    "id": 462,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of turkeys gobbled.",
    "options": ["rafter", "roof", "gang", "herd"],
    "correct_answer": "rafter",
    "explanation": "Collective Noun: A group of turkeys is called a 'rafter' (or gang)."
  },
  {
    "id": 463,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She ___ the book on the desk.",
    "options": ["put", "putted", "pat", "putting"],
    "correct_answer": "put",
    "explanation": "Past Simple: 'Put' is irregular; the past form remains 'put'."
  },
  {
    "id": 464,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ is located in London.",
    "options": ["headquarters", "headquarter", "headquaters", "headquater"],
    "correct_answer": "headquarters",
    "explanation": "Irregular Plural: 'Headquarters' is used for both singular and plural."
  },
  {
    "id": 465,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of singers performed well.",
    "options": ["choir", "band", "herd", "pack"],
    "correct_answer": "choir",
    "explanation": "Collective Noun: A group of singers is a 'choir'."
  },
  {
    "id": 466,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ smoking last year.",
    "options": ["quit", "quitted", "quat", "quitting"],
    "correct_answer": "quit",
    "explanation": "Past Simple: 'Quit' is irregular; the past form remains 'quit'."
  },
  {
    "id": 467,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Two ___ (runners-up) won prizes.",
    "options": ["runner-up", "runners-up", "runner-ups", "runners-ups"],
    "correct_answer": "runners-up",
    "explanation": "Compound Noun: Pluralize the person ('runners'), not the preposition ('up')."
  },
  {
    "id": 468,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of crocodiles sunbathed.",
    "options": ["bask", "float", "log", "herd"],
    "correct_answer": "bask",
    "explanation": "Collective Noun: A group of crocodiles resting is called a 'bask'."
  },
  {
    "id": 469,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ the book yesterday.",
    "options": ["read", "readed", "red", "reading"],
    "correct_answer": "read",
    "explanation": "Past Simple: Spelled 'read' but pronounced 'red'."
  },
  {
    "id": 470,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ are sleeping in the mud.",
    "options": ["swine", "swines", "pig", "pigses"],
    "correct_answer": "swine",
    "explanation": "Irregular Plural: 'Swine' stays the same in singular and plural."
  },
  {
    "id": 471,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of bananas hung there.",
    "options": ["hand", "foot", "arm", "leg"],
    "correct_answer": "hand",
    "explanation": "Collective Noun: A cluster of bananas is called a 'hand'."
  },
  {
    "id": 472,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ money to his friend.",
    "options": ["lend", "lent", "lended", "lending"],
    "correct_answer": "lent",
    "explanation": "Past Simple: Irregular past form of 'lend' is 'lent'."
  },
  {
    "id": 473,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Soldiers sleep in the ___.",
    "options": ["barracks", "barrack", "barrackes", "barracs"],
    "correct_answer": "barracks",
    "explanation": "Irregular Plural: 'Barracks' is used for both singular (one building) and plural."
  },
  {
    "id": 474,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of vipers hissed.",
    "options": ["nest", "home", "pit", "cave"],
    "correct_answer": "nest",
    "explanation": "Collective Noun: A group of snakes/vipers is called a 'nest' (or knot)."
  },
  {
    "id": 475,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "She ___ the lights together.",
    "options": ["string", "strung", "strang", "stringed"],
    "correct_answer": "strung",
    "explanation": "Past Simple: Irregular past form of 'string' is 'strung'."
  },
  {
    "id": 476,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "Add two ___ of sugar.",
    "options": ["spoonful", "spoonfuls", "spoonsful", "spoonsfull"],
    "correct_answer": "spoonfuls",
    "explanation": "Compound Noun: Pluralize the end of the word ('spoonfuls'), not the middle."
  },
  {
    "id": 477,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of judges sat down.",
    "options": ["bench", "seat", "gang", "flock"],
    "correct_answer": "bench",
    "explanation": "Collective Noun: A group of judges is called a 'bench'."
  },
  {
    "id": 478,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "He ___ to do better.",
    "options": ["strive", "strived", "strove", "striven"],
    "correct_answer": "strove",
    "explanation": "Past Simple: Irregular past form of 'strive' is 'strove'."
  },
  {
    "id": 479,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "Turn left at the ___.",
    "options": ["crossroads", "crossroad", "crossroades", "cross"],
    "correct_answer": "crossroads",
    "explanation": "Irregular Plural: 'Crossroads' is used for both singular and plural."
  },
  {
    "id": 480,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of trout swam upstream.",
    "options": ["hover", "school", "herd", "flock"],
    "correct_answer": "hover",
    "explanation": "Collective Noun: A group of trout is specifically called a 'hover'."
  },
  {
    "id": 481,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ to tell the truth.",
    "options": ["swear", "swore", "sworn", "sweared"],
    "correct_answer": "swore",
    "explanation": "Past Simple: Irregular past form of 'swear' is 'swore'."
  },
  {
    "id": 482,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ (aircraft) landed safely.",
    "options": ["aircraft", "aircrafts", "aircrafte", "air-crafts"],
    "correct_answer": "aircraft",
    "explanation": "Irregular Plural: 'Aircraft' stays the same in singular and plural."
  },
  {
    "id": 483,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "An ___ of warships sailed in.",
    "options": ["armada", "army", "flight", "herd"],
    "correct_answer": "armada",
    "explanation": "Collective Noun: A large fleet of warships is an 'armada'."
  },
  {
    "id": 484,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "She ___ the child by the hand.",
    "options": ["take", "took", "taken", "taking"],
    "correct_answer": "took",
    "explanation": "Past Simple: Irregular past form of 'take' is 'took'."
  },
  {
    "id": 485,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "The ___ (deer) ran fast.",
    "options": ["deer", "deers", "doer", "doe"],
    "correct_answer": "deer",
    "explanation": "Irregular Plural: 'Deer' stays the same in singular and plural."
  },
  {
    "id": 486,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "A ___ of onions hung in the kitchen.",
    "options": ["rope", "string", "chain", "line"],
    "correct_answer": "rope",
    "explanation": "Collective Noun: Onions braided together form a 'rope'."
  },
  {
    "id": 487,
    "cefr_level": "A2",
    "type": "fill_in_the_blank",
    "question": "I ___ the question.",
    "options": ["understand", "understood", "understanded", "understanding"],
    "correct_answer": "understood",
    "explanation": "Past Simple: Irregular past form of 'understand' is 'understood'."
  },
  {
    "id": 488,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "The ___ (species) is endangered.",
    "options": ["species", "specie", "specieses", "special"],
    "correct_answer": "species",
    "explanation": "Irregular Plural: 'Species' stays the same in singular and plural."
  },
  {
    "id": 489,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of employees met.",
    "options": ["staff", "stave", "herd", "pack"],
    "correct_answer": "staff",
    "explanation": "Collective Noun: A group of employees is a 'staff'."
  },
  {
    "id": 490,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ the money from the bank.",
    "options": ["withdraw", "withdrew", "withdrawn", "withdrawing"],
    "correct_answer": "withdrew",
    "explanation": "Past Simple: Irregular past form of 'withdraw' is 'withdrew'."
  },
  {
    "id": 491,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Use any ___ necessary.",
    "options": ["means", "mean", "meant", "meaning"],
    "correct_answer": "means",
    "explanation": "Irregular Plural: 'Means' (method) is used for both singular and plural."
  },
  {
    "id": 492,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of jays screamed.",
    "options": ["party", "band", "flock", "school"],
    "correct_answer": "party",
    "explanation": "Collective Noun: A group of jays is called a 'party' (or band)."
  },
  {
    "id": 493,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "He ___ the law.",
    "options": ["uphold", "upheld", "upholded", "upholding"],
    "correct_answer": "upheld",
    "explanation": "Past Simple: Irregular past form of 'uphold' is 'upheld'."
  },
  {
    "id": 494,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "The ___ (gallows) was built high.",
    "options": ["gallows", "gallow", "gallowses", "gallous"],
    "correct_answer": "gallows",
    "explanation": "Irregular Plural: 'Gallows' looks plural but is treated as a singular noun."
  },
  {
    "id": 495,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of whales is rare.",
    "options": ["gam", "game", "pod", "herd"],
    "correct_answer": "gam",
    "explanation": "Collective Noun: A gathering of whales (social) is traditionally a 'gam'."
  },
  {
    "id": 496,
    "cefr_level": "B1",
    "type": "fill_in_the_blank",
    "question": "He ___ a great leader.",
    "options": ["become", "became", "becomed", "becoming"],
    "correct_answer": "became",
    "explanation": "Past Simple: Irregular past form of 'become' is 'became'."
  },
  {
    "id": 497,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "My two ___ are visiting.",
    "options": ["mother-in-law", "mothers-in-law", "mother-in-laws", "mothers-in-laws"],
    "correct_answer": "mothers-in-law",
    "explanation": "Compound Noun: Pluralize the person ('mothers'), not the law."
  },
  {
    "id": 498,
    "cefr_level": "C2",
    "type": "fill_in_the_blank",
    "question": "A ___ of guns fired.",
    "options": ["battery", "pack", "herd", "flock"],
    "correct_answer": "battery",
    "explanation": "Collective Noun: A group of heavy guns/artillery is a 'battery'."
  },
  {
    "id": 499,
    "cefr_level": "B2",
    "type": "fill_in_the_blank",
    "question": "Problems ___ during the project.",
    "options": ["arise", "arose", "arisen", "arised"],
    "correct_answer": "arose",
    "explanation": "Past Simple: Irregular past form of 'arise' is 'arose'."
  },
  {
    "id": 500,
    "cefr_level": "C1",
    "type": "fill_in_the_blank",
    "question": "A ___ of tools lay there.",
    "options": ["set", "herd", "flock", "school"],
    "correct_answer": "set",
    "explanation": "Collective Noun: A complete collection of tools/dishes is a 'set'."
  }
];

export default BLANK_QUESTIONS;
