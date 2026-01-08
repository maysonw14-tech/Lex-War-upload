
const IDIOM_QUESTIONS = [
  {
    "id": 1,
    "cefr_level": "A2",
    "question": "The level 1 slime was very easy to defeat; it was a ___.",
    "options": ["piece of cake", "slice of bread", "bowl of soup", "glass of water"],
    "correct_answer": "piece of cake",
    "explanation": "Meaning: Something very easy to do.\n\nOrigin: Believed to originate from the 1870s, where 'cake walks' were competitions where the prize was a cake. Winning was seen as easy or enjoyable.\n\nUsage: Use this when a task (like a test or a job) requires almost no effort."
  },
  {
    "id": 2,
    "cefr_level": "A2",
    "question": "The bard is about to go on stage. You shout, '___!'",
    "options": ["Break a leg", "Break a hand", "Smash a drum", "Cut a rope"],
    "correct_answer": "Break a leg",
    "explanation": "Meaning: Good luck.\n\nOrigin: Theatrical superstition. Performers believed saying 'good luck' would actually cause bad luck (jinxing). Breaking a leg might refer to 'breaking' the leg line of the stage (bowing to the audience).\n\nUsage: Say this to someone before a presentation, speech, or performance."
  },
  {
    "id": 3,
    "cefr_level": "A2",
    "question": "The merchant charges too much. That sword costs an ___.",
    "options": ["arm and a leg", "eye and a ear", "hand and a foot", "head and a toe"],
    "correct_answer": "arm and a leg",
    "explanation": "Meaning: Extremely expensive.\n\nOrigin: Disputed, but likely relates to the immense cost of losing limbs in war (Civil War/WWI) or portrait painters charging more for painting limbs (though the painting theory is often debunked). It implies a price so high it hurts.\n\nUsage: Use when buying cars, houses, or luxury items."
  },
  {
    "id": 4,
    "cefr_level": "A2",
    "question": "I cannot go on the quest today; I am feeling a bit ___.",
    "options": ["under the weather", "over the moon", "inside the cloud", "below the rain"],
    "correct_answer": "under the weather",
    "explanation": "Meaning: Feeling sick or unwell.\n\nOrigin: Maritime history. Sailors feeling seasick would go below deck, literally 'under the weather' (away from the storm) to recover.\n\nUsage: Use when calling in sick to work or declining an invitation due to illness."
  },
  {
    "id": 5,
    "cefr_level": "B1",
    "question": "The goblin told everyone our secret plan. He let the ___ out of the bag.",
    "options": ["cat", "rat", "dog", "bat"],
    "correct_answer": "cat",
    "explanation": "Meaning: To reveal a secret.\n\nOrigin: In medieval markets, dishonest sellers would replace a valuable piglet with a worthless cat in a bag. If the cat jumped out, the fraud was revealed.\n\nUsage: Use when someone accidentally spoils a surprise party or leaks confidential news."
  },
  {
    "id": 6,
    "cefr_level": "B1",
    "question": "A dragon sighting is very rare; it only happens once in a ___.",
    "options": ["blue moon", "red sun", "black star", "white cloud"],
    "correct_answer": "blue moon",
    "explanation": "Meaning: Very rarely.\n\nOrigin: A 'blue moon' is the second full moon in a calendar month, which happens approximately every 2.7 years—a rare astronomical event.\n\nUsage: Use for habits or events that hardly ever happen (e.g., 'I go to the gym once in a blue moon')."
  },
  {
    "id": 7,
    "cefr_level": "B1",
    "question": "The arrow hit the target exactly. You hit the ___ on the head.",
    "options": ["nail", "hammer", "screw", "wood"],
    "correct_answer": "nail",
    "explanation": "Meaning: To describe exactly what is causing a situation or problem; to be exactly right.\n\nOrigin: Carpentry. When you hit a nail perfectly on the head, it goes in straight and effectively.\n\nUsage: Use when someone guesses the exact reason for a problem or summarizes a situation perfectly."
  },
  {
    "id": 8,
    "cefr_level": "B1",
    "question": "We agreed on the plan immediately. We see ___ to ___.",
    "options": ["eye / eye", "face / face", "hand / hand", "ear / ear"],
    "correct_answer": "eye / eye",
    "explanation": "Meaning: To agree fully with someone.\n\nOrigin: Found in the Bible (Isaiah 52:8), referring to watchmen seeing the same things. It implies having the same perspective.\n\nUsage: Use during negotiations or discussions when you share the same opinion."
  },
  {
    "id": 9,
    "cefr_level": "B1",
    "question": "The wizard ignored my warning, so I gave him the ___ shoulder.",
    "options": ["cold", "hot", "hard", "soft"],
    "correct_answer": "cold",
    "explanation": "Meaning: To ignore someone deliberately.\n\nOrigin: Medieval hospitality. A guest who was welcome received a hot meal. A guest who had stayed too long was given a 'cold shoulder' of mutton (leftovers), signaling it was time to leave.\n\nUsage: Use when someone is snubbing you or being unfriendly."
  },
  {
    "id": 10,
    "cefr_level": "B1",
    "question": "To save money on armor, the blacksmith ___ corners.",
    "options": ["cut", "broke", "bent", "shaved"],
    "correct_answer": "cut",
    "explanation": "Meaning: To do something badly or cheaply to save time or money.\n\nOrigin: Hunting or driving. Taking a direct path across a corner/turn instead of following the road properly, often leading to accidents or sloppy results.\n\nUsage: Use when criticizing cheap manufacturing or lazy work habits."
  },
  {
    "id": 11,
    "cefr_level": "B2",
    "question": "It is late and I am tired. I am going to ___ the sack.",
    "options": ["hit", "kick", "punch", "throw"],
    "correct_answer": "hit",
    "explanation": "Meaning: To go to sleep.\n\nOrigin: 19th-century America. Mattresses were often simple sacks filled with hay. Going to bed meant literally lying down on the sack.\n\nUsage: Informal way to say you are going to bed."
  },
  {
    "id": 12,
    "cefr_level": "B2",
    "question": "The healing potion tastes awful, but you have to ___ the bullet.",
    "options": ["bite", "chew", "eat", "swallow"],
    "correct_answer": "bite",
    "explanation": "Meaning: To force yourself to do something unpleasant or painful.\n\nOrigin: Before anesthesia, soldiers wounded in battle were given a lead bullet to bite down on to cope with the pain of surgery.\n\nUsage: Use when you have to do a difficult task (like paying a fine or visiting the dentist) and just need to get it over with."
  },
  {
    "id": 13,
    "cefr_level": "B2",
    "question": "Our plan to defeat the boss is still up in the ___.",
    "options": ["air", "sky", "clouds", "tree"],
    "correct_answer": "air",
    "explanation": "Meaning: Uncertain or not yet decided.\n\nOrigin: Derived from coin tossing. When a coin is 'in the air', the outcome (heads or tails) is not yet known.\n\nUsage: Use when plans are not finalized (e.g., 'Our vacation dates are still up in the air')."
  },
  {
    "id": 14,
    "cefr_level": "B2",
    "question": "Stop talking about the weather and ___ to the chase.",
    "options": ["cut", "run", "jump", "skip"],
    "correct_answer": "cut",
    "explanation": "Meaning: Get to the point; stop wasting time.\n\nOrigin: Early film industry (1920s). Silent films often had romantic storylines that bored the audience, who preferred the exciting 'chase' scenes. Directors were told to cut the dialogue and get to the chase.\n\nUsage: Use in meetings when someone is talking too much and you want the main facts."
  },
  {
    "id": 15,
    "cefr_level": "B2",
    "question": "He betrayed me! He stabbed me in the ___.",
    "options": ["back", "heart", "leg", "foot"],
    "correct_answer": "back",
    "explanation": "Meaning: To betray someone who trusts you.\n\nOrigin: Literal betrayal. Attacking someone from behind is seen as cowardly and treacherous because the victim cannot defend themselves. Famous historical example: Brutus stabbing Caesar.\n\nUsage: Use when a friend or colleague secretly works against you."
  },
  {
    "id": 16,
    "cefr_level": "B2",
    "question": "This magic puzzle is hard. I think I'm losing my ___.",
    "options": ["touch", "grip", "hand", "mind"],
    "correct_answer": "touch",
    "explanation": "Meaning: To lose an ability or talent you once had.\n\nOrigin: Likely related to tactile skills, like a musician or artist losing the delicate 'touch' required for their craft.\n\nUsage: Use when you fail at something you used to be good at (e.g., video games, sports)."
  },
  {
    "id": 17,
    "cefr_level": "B2",
    "question": "Don't move! Just ___ tight until the guard passes.",
    "options": ["sit", "hold", "stand", "stay"],
    "correct_answer": "sit",
    "explanation": "Meaning: To wait patiently and take no action.\n\nOrigin: Dating back to the 1700s, simply meaning to keep one's position or stay in place.\n\nUsage: Use when telling someone to wait for further instructions or news."
  },
  {
    "id": 18,
    "cefr_level": "B2",
    "question": "You broke the king's vase. Now you must ___ the music.",
    "options": ["face", "hear", "listen", "dance"],
    "correct_answer": "face",
    "explanation": "Meaning: To accept responsibility for something you have done (usually bad).\n\nOrigin: One theory suggests disgraced military officers were 'drummed out' of the regiment and had to face the music of the drums while leaving.\n\nUsage: Use when you have to confess to a mistake and accept the punishment."
  },
  {
    "id": 19,
    "cefr_level": "B2",
    "question": "That ancient rune looks familiar. It rings a ___.",
    "options": ["bell", "gong", "alarm", "note"],
    "correct_answer": "bell",
    "explanation": "Meaning: To sound familiar or cause you to remember something indefinite.\n\nOrigin: Before electric alarms, bells were used to remind people of time, church, or events. A sound that 'rings a bell' triggers a memory.\n\nUsage: Use when you recognize a name or face but can't quite place it."
  },
  {
    "id": 20,
    "cefr_level": "B2",
    "question": "As a rule of ___, always carry a health potion.",
    "options": ["thumb", "finger", "hand", "wrist"],
    "correct_answer": "thumb",
    "explanation": "Meaning: A general practical rule that is usually correct, though not scientifically precise.\n\nOrigin: Woodworkers or brewers often used their thumb to estimate measurements or temperature quickly rather than using precision tools.\n\nUsage: Use when giving general advice or guidelines."
  },
  {
    "id": 21,
    "cefr_level": "C1",
    "question": "The barbarian was angry, so he went to the arena to ___ off steam.",
    "options": ["blow", "let", "burn", "push"],
    "correct_answer": "blow",
    "explanation": "Meaning: To do something to get rid of stress or anger.\n\nOrigin: Steam engines. If pressure built up too high, the engine would explode. 'Blowing off steam' released the pressure safely.\n\nUsage: Use when you need to exercise or yell to calm down after a stressful day."
  },
  {
    "id": 22,
    "cefr_level": "C1",
    "question": "He was addicted to magic dust, but he quit ___ turkey.",
    "options": ["cold", "frozen", "wild", "hot"],
    "correct_answer": "cold",
    "explanation": "Meaning: To stop a habit suddenly and completely, rather than gradually.\n\nOrigin: When withdrawing from addictive substances, the skin can become bumpy and clammy, resembling the skin of a plucked, cold turkey.\n\nUsage: Use when discussing giving up smoking, caffeine, or sugar instantly."
  },
  {
    "id": 23,
    "cefr_level": "C1",
    "question": "Don't mention the war to the orc. Let sleeping ___ lie.",
    "options": ["dogs", "cats", "bears", "dragons"],
    "correct_answer": "dogs",
    "explanation": "Meaning: Do not restart an old argument or cause trouble by discussing a sensitive topic.\n\nOrigin: Medieval proverb. A sleeping dog is harmless, but if you wake it up, it might bite you.\n\nUsage: Use when advising someone not to bring up a past conflict."
  },
  {
    "id": 24,
    "cefr_level": "C1",
    "question": "The wizard has been studying all night. He is burning the ___ oil.",
    "options": ["midnight", "morning", "evening", "lamp"],
    "correct_answer": "midnight",
    "explanation": "Meaning: Working or studying late into the night.\n\nOrigin: Before electricity, oil lamps were expensive. Working late meant literally burning costly oil.\n\nUsage: Use when working on a project with a tight deadline or studying for exams."
  },
  {
    "id": 25,
    "cefr_level": "C1",
    "question": "We are best friends. We stick together through ___ and ___.",
    "options": ["thick / thin", "hard / soft", "high / low", "dark / light"],
    "correct_answer": "thick / thin",
    "explanation": "Meaning: Under all circumstances, no matter how difficult.\n\nOrigin: Hunting/Travel. Walking through a forest, the trees could be 'thick' (dense/difficult) or 'thin' (easy). You keep going regardless of the terrain.\n\nUsage: Use to describe loyal relationships or long-term commitment."
  },
  {
    "id": 26,
    "cefr_level": "C1",
    "question": "Everyone knows the king is a vampire, but no one says it. It's the ___ in the room.",
    "options": ["elephant", "dragon", "giant", "horse"],
    "correct_answer": "elephant",
    "explanation": "Meaning: A major problem or issue that is obviously present but everyone avoids discussing.\n\nOrigin: 1950s literature. The idea that an elephant in a small room would be impossible to overlook, yet people might pretend it isn't there to avoid awkwardness.\n\nUsage: Use in business or family meetings when there is an uncomfortable topic everyone is ignoring."
  },
  {
    "id": 27,
    "cefr_level": "C1",
    "question": "I announced my plan, but then the rival guild stole my ___.",
    "options": ["thunder", "lightning", "cloud", "rain"],
    "correct_answer": "thunder",
    "explanation": "Meaning: To take credit for someone else's idea or prevent them from getting attention.\n\nOrigin: 1704, playwright John Dennis invented a new way to make thunder sounds for a play. The play failed, but later, Macbeth used his method. Dennis shouted, 'They steal my thunder!'\n\nUsage: Use when someone announces your news (like a pregnancy or engagement) before you do."
  },
  {
    "id": 28,
    "cefr_level": "C1",
    "question": "The goblin lies often. Take his advice with a grain of ___.",
    "options": ["salt", "sugar", "sand", "pepper"],
    "correct_answer": "salt",
    "explanation": "Meaning: To view something with skepticism; to not interpret it literally.\n\nOrigin: Latin 'cum grano salis'. Pliny the Elder (AD 77) wrote about an antidote for poison that worked only if taken with a grain of salt. It implies making something easier to swallow/accept.\n\nUsage: Use when listening to gossip or unverified news."
  },
  {
    "id": 29,
    "cefr_level": "C1",
    "question": "I agree with you, but let me play ___ advocate to test the plan.",
    "options": ["devil's", "angel's", "king's", "god's"],
    "correct_answer": "devil's",
    "explanation": "Meaning: To argue against an idea (even if you agree with it) to test its strength or find flaws.\n\nOrigin: The Catholic Church had an official called the 'Devil's Advocate' whose job was to find reasons why a person should NOT be made a saint, ensuring the decision was solid.\n\nUsage: Use in debates or planning sessions to ensure all potential problems are discussed."
  },
  {
    "id": 30,
    "cefr_level": "C1",
    "question": "My plan seems crazy, but there is a method to my ___.",
    "options": ["madness", "chaos", "craziness", "sadness"],
    "correct_answer": "madness",
    "explanation": "Meaning: Actions that seem senseless actually have a clever or logical purpose.\n\nOrigin: Shakespeare's Hamlet. Polonius says, 'Though this be madness, yet there is method in't.'\n\nUsage: Use when someone questions your unusual way of doing things."
  },
  {
    "id": 31,
    "cefr_level": "C2",
    "question": "Losing my job was a blessing in ___; I found a better one!",
    "options": ["disguise", "surprise", "shadow", "costume"],
    "correct_answer": "disguise",
    "explanation": "Meaning: Something that seems bad at first but turns out to be good.\n\nOrigin: Literary concept. Often bad luck forces a change that leads to a better outcome.\n\nUsage: Use when a misfortune (like missing a train) prevents a worse accident or leads to a lucky meeting."
  },
  {
    "id": 32,
    "cefr_level": "C2",
    "question": "You look deep in thought. A ___ for your thoughts?",
    "options": ["penny", "dollar", "coin", "gold"],
    "correct_answer": "penny",
    "explanation": "Meaning: Asking someone what they are thinking.\n\nOrigin: 16th-century English. A penny was a standard small value, implying 'I'll give you a small reward if you tell me what's on your mind'.\n\nUsage: Use when a friend is quiet and staring into space."
  },
  {
    "id": 33,
    "cefr_level": "C2",
    "question": "Stop beating around the ___ and tell me the truth!",
    "options": ["bush", "tree", "hedge", "grass"],
    "correct_answer": "bush",
    "explanation": "Meaning: To avoid talking about the main topic; being indirect.\n\nOrigin: Hunting. Hunters would beat the bushes around a bird to scare it out, but avoided hitting the bush directly to avoid bee hives or snakes.\n\nUsage: Use when someone is stalling or refusing to answer a direct question."
  },
  {
    "id": 34,
    "cefr_level": "C2",
    "question": "The king promises peace, but actions speak louder than ___.",
    "options": ["words", "thoughts", "songs", "swords"],
    "correct_answer": "words",
    "explanation": "Meaning: What you do is more important than what you say.\n\nOrigin: Found in various forms since the 1600s. It emphasizes integrity.\n\nUsage: Use when someone promises to change but keeps doing the same bad behavior."
  },
  {
    "id": 35,
    "cefr_level": "C2",
    "question": "He stole my horse, and then added ___ to injury by laughing at me.",
    "options": ["insult", "pain", "salt", "wound"],
    "correct_answer": "insult",
    "explanation": "Meaning: To make a bad situation worse with mocking or disrespect.\n\nOrigin: Ancient fable (Aesop). A bald man swats a fly on his head but misses and slaps himself. The fly mocks him, saying 'You wanted to kill me but added insult to injury.'\n\nUsage: Use when someone hurts you and then mocks you for it."
  },
  {
    "id": 36,
    "cefr_level": "C2",
    "question": "The assassin is ready to strike at the ___ of a hat.",
    "options": ["drop", "fall", "throw", "tip"],
    "correct_answer": "drop",
    "explanation": "Meaning: Immediately; without hesitation.\n\nOrigin: 19th-century signaling. In races or fights, dropping a hat was often the visual signal to start immediately.\n\nUsage: Use for someone who is impulsive or very ready to act."
  },
  {
    "id": 37,
    "cefr_level": "C2",
    "question": "I've made my offer. Now the ball is in your ___.",
    "options": ["court", "field", "hand", "zone"],
    "correct_answer": "court",
    "explanation": "Meaning: It is now your responsibility to take the next step.\n\nOrigin: Tennis. If the ball is hit into your side of the court, you must hit it back or you lose the point.\n\nUsage: Use in negotiations after you have made your proposal and are waiting for a reply."
  },
  {
    "id": 38,
    "cefr_level": "C2",
    "question": "If you think I stole the ring, you are barking up the wrong ___.",
    "options": ["tree", "bush", "path", "dog"],
    "correct_answer": "tree",
    "explanation": "Meaning: Accusing the wrong person or following a false lead.\n\nOrigin: Hunting dogs. A dog might bark at the bottom of a tree thinking a raccoon is up there, but the raccoon has already escaped to another tree.\n\nUsage: Use when someone accuses you of something you didn't do."
  },
  {
    "id": 39,
    "cefr_level": "C2",
    "question": "This magic bag is amazing! It's the best thing since sliced ___.",
    "options": ["bread", "cheese", "meat", "cake"],
    "correct_answer": "bread",
    "explanation": "Meaning: A very good invention or idea.\n\nOrigin: 1928. When sliced bread was first sold, it was advertised as the greatest step forward in baking. The phrase became a standard for hyperbolically praising new things.\n\nUsage: Use when enthusiastic about a new gadget or app."
  },
  {
    "id": 40,
    "cefr_level": "C2",
    "question": "Don't ask too many questions about the dark magic. Curiosity killed the ___.",
    "options": ["cat", "rat", "bird", "mouse"],
    "correct_answer": "cat",
    "explanation": "Meaning: Being too inquisitive can lead to danger.\n\nOrigin: Originally 'Care (worry) killed the cat'. It evolved to 'curiosity' over time. Cats are naturally curious creatures, often getting stuck in bad spots.\n\nUsage: Use to warn someone to stop snooping into private affairs."
  },
  {
    "id": 41,
    "cefr_level": "C2",
    "question": "You haven't won the battle yet. Don't count your ___ before they hatch.",
    "options": ["chickens", "eggs", "dragons", "birds"],
    "correct_answer": "chickens",
    "explanation": "Meaning: Don't rely on a positive outcome until it actually happens.\n\nOrigin: Aesop's Fables. A milkmaid carries milk on her head, calculating how many eggs she'll buy and chickens she'll hatch. She tosses her head, spills the milk, and gets nothing.\n\nUsage: Use when someone starts spending money they haven't earned yet."
  },
  {
    "id": 42,
    "cefr_level": "C2",
    "question": "This rusty dagger is a ___ cry from the legendary sword you promised.",
    "options": ["far", "long", "loud", "big"],
    "correct_answer": "far",
    "explanation": "Meaning: Very different from (usually worse).\n\nOrigin: Measuring distance by shouting. If you are a 'far cry' away, you are a long distance away. Metaphorically, a long distance in quality.\n\nUsage: Use when comparing two things that are not alike (e.g., 'This hotel is a far cry from the luxury resort')."
  },
  {
    "id": 43,
    "cefr_level": "C2",
    "question": "I'm not sure if he's lying, but I'll give him the benefit of the ___.",
    "options": ["doubt", "truth", "trust", "faith"],
    "correct_answer": "doubt",
    "explanation": "Meaning: To believe someone is telling the truth because you cannot prove they are lying.\n\nOrigin: Legal concept. If a jury is not 100% sure of guilt, they must acquit (doubt favors the accused).\n\nUsage: Use when you are suspicious but decide to trust someone anyway."
  },
  {
    "id": 44,
    "cefr_level": "C2",
    "question": "How did I know? I heard it on the ___.",
    "options": ["grapevine", "wind", "street", "bush"],
    "correct_answer": "grapevine",
    "explanation": "Meaning: To hear news through gossip or rumors.\n\nOrigin: US Civil War. Telegraph lines strung loosely between trees looked like grapevines. The news traveling these lines was often unreliable rumor.\n\nUsage: Use when you know a secret but don't want to reveal your specific source."
  },
  {
    "id": 45,
    "cefr_level": "C2",
    "question": "In the ___ of the moment, I cast the wrong spell.",
    "options": ["heat", "spark", "flash", "fire"],
    "correct_answer": "heat",
    "explanation": "Meaning: While angry, excited, or under pressure, without thinking.\n\nOrigin: Refers to the physical sensation of heat when angry or in battle.\n\nUsage: Use to excuse an action you regret doing when you were emotional."
  },
  {
    "id": 46,
    "cefr_level": "C2",
    "question": "Everyone is joining the rebellion. You should jump on the ___.",
    "options": ["bandwagon", "cart", "train", "horse"],
    "correct_answer": "bandwagon",
    "explanation": "Meaning: To join a popular trend or activity just because others are doing it.\n\nOrigin: US Politics. A bandwagon carried the band in a parade. Politicians would jump on it to be seen with the popular music. Joining it meant supporting the popular candidate.\n\nUsage: Use when criticizing fair-weather sports fans or fashion trends."
  },
  {
    "id": 47,
    "cefr_level": "C2",
    "question": "He stole my gold, which was bad, but stealing my horse was the last ___.",
    "options": ["straw", "drop", "stick", "nail"],
    "correct_answer": "straw",
    "explanation": "Meaning: The final small problem that makes a situation unbearable.\n\nOrigin: 'The straw that broke the camel's back.' A camel can carry a lot, but eventually, even a single piece of straw is too much weight and causes collapse.\n\nUsage: Use when you finally lose your patience after many problems."
  },
  {
    "id": 48,
    "cefr_level": "C2",
    "question": "The old wizard is talking to squirrels. He's off his ___.",
    "options": ["rocker", "chair", "mind", "feet"],
    "correct_answer": "rocker",
    "explanation": "Meaning: Crazy or eccentric.\n\nOrigin: Mechanical engineering. A trolley or tram that came 'off its rocker' (guide wheel) would stop working properly. Alternatively, relates to rocking chairs—someone rocking too violently.\n\nUsage: Informal/Slang. Use to describe someone behaving very strangely."
  },
  {
    "id": 49,
    "cefr_level": "C2",
    "question": "The guard noticed the thief immediately. He is really on the ___.",
    "options": ["ball", "target", "mark", "dot"],
    "correct_answer": "ball",
    "explanation": "Meaning: Alert, competent, and efficient.\n\nOrigin: Sports (Baseball/Cricket/Golf). You must keep your eye 'on the ball' to play well. Being 'on the ball' means you are focused.\n\nUsage: Use to compliment someone who is working very efficiently."
  },
  {
    "id": 50,
    "cefr_level": "C2",
    "question": "We have to start all over again. Back to the drawing ___.",
    "options": ["board", "table", "room", "slate"],
    "correct_answer": "board",
    "explanation": "Meaning: Starting a plan again from the beginning because the first one failed.\n\nOrigin: Architects/Engineers. If a design failed during construction, they literally had to go back to the drafting/drawing board to sketch a new one.\n\nUsage: Use when a project fails completely and you need a redesign."
  }
];

export default IDIOM_QUESTIONS;
