
export interface TriviaVariant {
    id: string;
    question: string;
    answer_reveal?: string;
    options?: string[];
    correct_answer?: string;
    explanation: string;
}

export interface TriviaWave {
    wave_id: number;
    type: "fun_fact_reveal" | "true_false_boss";
    description: string;
    variants: TriviaVariant[];
}

export interface TriviaChapter {
    chapter_id: number;
    country: string;
    theme_description: string;
    waves: TriviaWave[];
}

const TRIVIA_DATA: TriviaChapter[] = [
  {
    "chapter_id": 1,
    "country": "China",
    "theme_description": "The Dragon's Empire",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Ancient Inventions",
        "variants": [
          {
            "id": "C1-W1-V1",
            "question": "Which material, vital for writing and education, was first invented in China during the Han Dynasty?",
            "answer_reveal": "Paper",
            "explanation": "It was traditionally invented by Cai Lun around 105 AD using mulberry bark and hemp, replacing expensive silk and heavy bamboo."
          },
          {
            "id": "C1-W1-V2",
            "question": "The 'South Pointing Fish' was the earliest known version of which navigational tool?",
            "answer_reveal": "The Compass",
            "explanation": "Early Chinese compasses were made of lodestone and were originally used for geomancy (Feng Shui) before navigation."
          },
          {
            "id": "C1-W1-V3",
            "question": "Which explosive chemical mixture was originally discovered by alchemists searching for an immortality elixir?",
            "answer_reveal": "Gunpowder",
            "explanation": "It was discovered in the 9th century by mixing sulfur, charcoal, and saltpeter, eventually changing warfare forever."
          },
          {
            "id": "C1-W1-V4",
            "question": "China kept the production method of which luxurious fabric a secret for over a thousand years?",
            "answer_reveal": "Silk",
            "explanation": "Silk production (sericulture) involves harvesting the cocoon of the silkworm. Smuggling silkworms out of China was once punishable by death."
          },
          {
            "id": "C1-W1-V5",
            "question": "According to legend, Emperor Shen Nong discovered which popular beverage when a wild leaf fell into his boiling water?",
            "answer_reveal": "Tea",
            "explanation": "This occurred around 2737 BC. Tea became a medicinal drink before evolving into a daily beverage."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C1-W2-V1",
            "question": "Which massive structure, visible on maps but not from the moon, was built to protect China from northern invaders?",
            "answer_reveal": "The Great Wall of China",
            "explanation": "It stretches over 13,000 miles (21,000 km) and took over 2,000 years to complete across different dynasties."
          },
          {
            "id": "C1-W2-V2",
            "question": "What is the name of the immense palace complex in Beijing that served as the home of emperors for 500 years?",
            "answer_reveal": "The Forbidden City",
            "explanation": "It is the world's largest palace complex, consisting of 980 buildings and allegedly 9,999 rooms."
          },
          {
            "id": "C1-W2-V3",
            "question": "Which silent army was buried with China's first Emperor to protect him in the afterlife?",
            "answer_reveal": "The Terracotta Army",
            "explanation": "Discovered in 1974 by farmers, it contains over 8,000 unique life-sized clay soldiers, horses, and chariots."
          },
          {
            "id": "C1-W2-V4",
            "question": "What is the longest river in Asia, which flows from the Tibetan Plateau to Shanghai?",
            "answer_reveal": "The Yangtze River",
            "explanation": "It plays a massive role in China's economy, generating power (Three Gorges Dam) and enabling transport."
          },
          {
            "id": "C1-W2-V5",
            "question": "Which city square in Beijing is known as one of the largest public squares in the world?",
            "answer_reveal": "Tiananmen Square",
            "explanation": "It is named after the 'Gate of Heavenly Peace' and can hold over one million people."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Culture & Symbols",
        "variants": [
          {
            "id": "C1-W3-V1",
            "question": "According to the zodiac legend, which animal missed the race because the Rat forgot to wake it up?",
            "answer_reveal": "The Cat",
            "explanation": "This is why cats hunt rats to this day. The Rat finished first by riding on the Ox's back."
          },
          {
            "id": "C1-W3-V2",
            "question": "Which color is strictly forbidden at traditional Chinese weddings because it represents mourning?",
            "answer_reveal": "White",
            "explanation": "White is worn at funerals. Red is the color of weddings, symbolizing luck, joy, and prosperity."
          },
          {
            "id": "C1-W3-V3",
            "question": "Which black and white animal is considered a national treasure and serves as a tool for 'diplomacy'?",
            "answer_reveal": "The Giant Panda",
            "explanation": "China lends Pandas to other countries as a gesture of goodwill, known as 'Panda Diplomacy'."
          },
          {
            "id": "C1-W3-V4",
            "question": "Unlike in the West, which mythical creature is seen as a benevolent controller of rain and water in China?",
            "answer_reveal": "The Dragon",
            "explanation": "Chinese dragons symbolize power, strength, and good luck, rather than destruction."
          },
          {
            "id": "C1-W3-V5",
            "question": "Which number is avoided in elevators and addresses because it sounds like the word for 'death'?",
            "answer_reveal": "Four (4)",
            "explanation": "This superstition is called tetraphobia. The number 8, conversely, is considered extremely lucky."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - History",
        "variants": [
          {
            "id": "C1-W4-V1",
            "question": "What was the name of the ancient network of trade routes that connected China to the Mediterranean?",
            "answer_reveal": "The Silk Road",
            "explanation": "It didn't just trade silk; it facilitated the exchange of culture, religion, and technology between East and West."
          },
          {
            "id": "C1-W4-V2",
            "question": "Who was the ancient philosopher whose teachings on family and ethics shaped Chinese society for millennia?",
            "answer_reveal": "Confucius",
            "explanation": "His philosophy, Confucianism, emphasizes respect for elders, ancestors, and social harmony."
          },
          {
            "id": "C1-W4-V3",
            "question": "Who is the military strategist credited with writing 'The Art of War'?",
            "answer_reveal": "Sun Tzu",
            "explanation": "Written in the 5th century BC, it remains one of the most influential strategy books in the world."
          },
          {
            "id": "C1-W4-V4",
            "question": "Which dynasty constructed the majority of the Great Wall that we see today?",
            "answer_reveal": "The Ming Dynasty",
            "explanation": "While the wall started much earlier, the Ming Dynasty (1368–1644) reinforced it with bricks and stone towers."
          },
          {
            "id": "C1-W4-V5",
            "question": "Which dynasty was the last to rule China before it became a republic in 1912?",
            "answer_reveal": "The Qing Dynasty",
            "explanation": "The Qing empire lasted nearly 300 years and was noted for the queue hairstyle worn by men."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C1-W5-V1",
            "question": "True or False: The Great Wall of China is visible from the Moon with the naked eye.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "This is a myth. The wall is too narrow to be seen from the moon without a telescope."
          },
          {
            "id": "C1-W5-V2",
            "question": "True or False: Fortune cookies are a traditional Chinese dessert invented in Beijing.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "They were actually popularized in California, USA, likely by Japanese immigrants."
          },
          {
            "id": "C1-W5-V3",
            "question": "True or False: China spans five geographical time zones but uses only one official time.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "To promote unity, the whole country follows Beijing Standard Time."
          },
          {
            "id": "C1-W5-V4",
            "question": "True or False: Table Tennis (Ping Pong) originated in China.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "It originated in Victorian England as an upper-class parlor game."
          },
          {
            "id": "C1-W5-V5",
            "question": "True or False: It is considered polite to finish every grain of rice in your bowl in China.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "It shows respect for the farmers' hard work. However, leaving a little food on a serving dish can imply the host provided enough."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 2,
    "country": "Japan",
    "theme_description": "The Land of the Rising Sun",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Warriors & History",
        "variants": [
          {
            "id": "C2-W1-V1",
            "question": "What class of elite warriors ruled feudal Japan and followed the code of Bushido?",
            "answer_reveal": "Samurai",
            "explanation": "They were the military nobility and officers. Bushido means 'The Way of the Warrior'."
          },
          {
            "id": "C2-W1-V2",
            "question": "Which covert mercenaries were historically known for espionage, sabotage, and guerrilla warfare?",
            "answer_reveal": "Ninja (Shinobi)",
            "explanation": "Unlike samurai who fought openly, ninja operated in the shadows and used deceptive tactics."
          },
          {
            "id": "C2-W1-V3",
            "question": "What does the Japanese name for Japan, 'Nihon', literally translate to?",
            "answer_reveal": "Origin of the Sun",
            "explanation": "This is why Japan is famously known as 'The Land of the Rising Sun'."
          },
          {
            "id": "C2-W1-V4",
            "question": "During the feudal era, who was the military dictator that held the actual power over the Emperor?",
            "answer_reveal": "The Shogun",
            "explanation": "The Emperor was a figurehead, while the Shogun controlled the military and the country."
          },
          {
            "id": "C2-W1-V5",
            "question": "What is the name of the curved, single-edged sword traditionally worn by the Samurai?",
            "answer_reveal": "The Katana",
            "explanation": "It is famous for its sharpness and cutting ability, made through a complex folding process."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Food",
        "variants": [
          {
            "id": "C2-W2-V1",
            "question": "Though often associated with raw fish, the word 'Sushi' actually refers to what ingredient?",
            "answer_reveal": "Vinegared Rice",
            "explanation": "Sushi means 'sour tasting'. Raw fish without rice is called 'Sashimi'."
          },
          {
            "id": "C2-W2-V2",
            "question": "What is the spicy green paste often served with sushi, made from a grated plant stem?",
            "answer_reveal": "Wasabi",
            "explanation": "True wasabi is difficult to grow; most cheap versions are actually dyed horseradish."
          },
          {
            "id": "C2-W2-V3",
            "question": "Which popular Japanese noodle soup dish originated from Chinese wheat noodles?",
            "answer_reveal": "Ramen",
            "explanation": "Ramen became a Japanese staple after World War II and is now distinct from its Chinese origins."
          },
          {
            "id": "C2-W2-V4",
            "question": "What is the name of the highly prized Japanese beef known for its intense fat marbling?",
            "answer_reveal": "Wagyu",
            "explanation": "'Wa' means Japanese and 'Gyu' means cow. Kobe beef is a famous variety of Wagyu."
          },
          {
            "id": "C2-W2-V5",
            "question": "Sake, the traditional alcoholic drink of Japan, is made by fermenting what grain?",
            "answer_reveal": "Rice",
            "explanation": "The rice is polished to remove the bran before fermentation. It is brewed more like beer than wine."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Nature & Geography",
        "variants": [
          {
            "id": "C2-W3-V1",
            "question": "What is the highest peak in Japan, which is also an active volcano?",
            "answer_reveal": "Mount Fuji",
            "explanation": "Standing at 3,776 meters, it is a sacred symbol of Japan and has been dormant since 1707."
          },
          {
            "id": "C2-W3-V2",
            "question": "What seasonal event, involving the viewing of cherry blossoms, is a major cultural activity in Japan?",
            "answer_reveal": "Hanami",
            "explanation": "People gather under blooming Sakura trees to picnic and celebrate the transient beauty of nature."
          },
          {
            "id": "C2-W3-V3",
            "question": "Japan is an archipelago primarily made up of how many main islands?",
            "answer_reveal": "Four",
            "explanation": "The main islands are Honshu (the largest), Hokkaido, Kyushu, and Shikoku."
          },
          {
            "id": "C2-W3-V4",
            "question": "Which Japanese city became the first in history to be struck by an atomic bomb?",
            "answer_reveal": "Hiroshima",
            "explanation": "The bombing occurred on August 6, 1945, leading to the end of World War II."
          },
          {
            "id": "C2-W3-V5",
            "question": "Because it sits on the 'Ring of Fire', Japan experiences about 1,500 of these natural events every year.",
            "answer_reveal": "Earthquakes",
            "explanation": "Most are minor tremors, but Japan has developed advanced engineering to withstand major shocks."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Modern Culture",
        "variants": [
          {
            "id": "C2-W4-V1",
            "question": "What is the specific term for Japanese animation that has become a global phenomenon?",
            "answer_reveal": "Anime",
            "explanation": "Anime accounts for about 60% of the world's animated television shows."
          },
          {
            "id": "C2-W4-V2",
            "question": "What is the nickname of the Japanese high-speed railway trains?",
            "answer_reveal": "Bullet Trains (Shinkansen)",
            "explanation": "They are famous for punctuality; the average delay is often less than a minute per year."
          },
          {
            "id": "C2-W4-V3",
            "question": "Which traditional T-shaped Japanese garment is wrapped around the body and secured with a sash?",
            "answer_reveal": "Kimono",
            "explanation": "The sash is called an 'Obi'. Kimonos are now mostly worn for special occasions like weddings."
          },
          {
            "id": "C2-W4-V4",
            "question": "Which multinational company, founded in Kyoto in 1889, originally sold playing cards before video games?",
            "answer_reveal": "Nintendo",
            "explanation": "They sold handmade 'Hanafuda' cards long before creating Mario or Pokémon."
          },
          {
            "id": "C2-W4-V5",
            "question": "What is the Japanese form of poetry that consists of three lines with a 5-7-5 syllable structure?",
            "answer_reveal": "Haiku",
            "explanation": "Haiku traditionally focus on nature or a specific moment in time."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C2-W5-V1",
            "question": "True or False: In Japan, slurping your noodles is considered rude and offensive.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "Slurping is encouraged! It cools the hot noodles and enhances the flavor/aroma."
          },
          {
            "id": "C2-W5-V2",
            "question": "True or False: Japanese farmers grow square watermelons.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "They are grown in glass boxes to stack easily in refrigerators, though they are very expensive and mostly decorative."
          },
          {
            "id": "C2-W5-V3",
            "question": "True or False: The Greater Tokyo Area is the most populated metropolitan area in the world.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "It has a population of over 37 million people, more than the entire population of Canada."
          },
          {
            "id": "C2-W5-V4",
            "question": "True or False: There are more registered pets in Japan than there are children under 15.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Japan has a declining birth rate and a high love for cats and dogs."
          },
          {
            "id": "C2-W5-V5",
            "question": "True or False: It is customary to wear your shoes inside a Japanese house.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "You must remove shoes at the genkan (entrance). Wearing shoes inside is considered extremely dirty."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 3,
    "country": "Egypt",
    "theme_description": "The Pharaoh's Domain",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Ancient Inventions",
        "variants": [
          {
            "id": "C3-W1-V1",
            "question": "Which writing material, made from the pith of a river plant, gave us the English word for 'paper'?",
            "answer_reveal": "Papyrus",
            "explanation": "It was made from the papyrus reed that grew along the Nile and was a major Egyptian export."
          },
          {
            "id": "C3-W1-V2",
            "question": "Ancient Egyptians invented a cosmetic called 'Kohl' to protect their eyes from what?",
            "answer_reveal": "The Sun",
            "explanation": "The dark eyeliner reduced glare from the desert sun and also helped prevent eye infections."
          },
          {
            "id": "C3-W1-V3",
            "question": "Which time-keeping system did the Egyptians refine to 365 days based on the flooding of the Nile?",
            "answer_reveal": "The Calendar",
            "explanation": "They needed to predict the annual flooding for farming, leading to the solar calendar we recognize today."
          },
          {
            "id": "C3-W1-V4",
            "question": "Archaeologists found evidence that Egyptians played an early form of which sport involving balls and pins?",
            "answer_reveal": "Bowling",
            "explanation": "A room with stone balls and a lane dating back to 3200 BC was found in Narmoutheos."
          },
          {
            "id": "C3-W1-V5",
            "question": "To maintain dental health, Egyptians created an early form of toothpaste using what unusual ingredient?",
            "answer_reveal": "Crushed Eggshells",
            "explanation": "The paste also included pumice and ashes to scrub teeth clean, though it was likely very abrasive."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C3-W2-V1",
            "question": "Which of the Seven Wonders of the Ancient World is the only one still largely intact today?",
            "answer_reveal": "The Great Pyramid of Giza",
            "explanation": "Built for Pharaoh Khufu, it was the tallest man-made structure in the world for over 3,800 years."
          },
          {
            "id": "C3-W2-V2",
            "question": "What is the name of the mythical limestone statue with the body of a lion and the head of a human?",
            "answer_reveal": "The Great Sphinx",
            "explanation": "It guards the Giza plateau. It is carved directly from the bedrock and is one of the world's largest statues."
          },
          {
            "id": "C3-W2-V3",
            "question": "Without which massive river would the Ancient Egyptian civilization likely not have existed?",
            "answer_reveal": "The Nile River",
            "explanation": "The Nile provided water, fertile soil (from flooding), and transportation in the middle of a desert."
          },
          {
            "id": "C3-W2-V4",
            "question": "Where were many Pharaohs of the New Kingdom, including Tutankhamun, buried to avoid grave robbers?",
            "answer_reveal": "The Valley of the Kings",
            "explanation": "Instead of visible pyramids, they cut tombs deep into the rock of the Theban Hills."
          },
          {
            "id": "C3-W2-V5",
            "question": "Which city was home to a famous lighthouse and the largest library of the ancient world?",
            "answer_reveal": "Alexandria",
            "explanation": "Founded by Alexander the Great, it became a center of knowledge and culture."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Gods & Culture",
        "variants": [
          {
            "id": "C3-W3-V1",
            "question": "Which animal was considered sacred and associated with the goddess Bastet?",
            "answer_reveal": "The Cat",
            "explanation": "Cats were protected by law; harming a cat, even accidentally, could result in the death penalty."
          },
          {
            "id": "C3-W3-V2",
            "question": "What is the name of the ancient Egyptian writing system that uses pictures as symbols?",
            "answer_reveal": "Hieroglyphs",
            "explanation": "The word means 'Holy Carvings'. The code was cracked thanks to the Rosetta Stone."
          },
          {
            "id": "C3-W3-V3",
            "question": "Which major organ was often discarded during mummification because it was thought to be useless?",
            "answer_reveal": "The Brain",
            "explanation": "They believed the heart was the center of intelligence and emotion, so the brain was pulled out through the nose."
          },
          {
            "id": "C3-W3-V4",
            "question": "Who was the Sun God, considered the most important deity in the Egyptian pantheon?",
            "answer_reveal": "Ra",
            "explanation": "He was believed to sail across the sky during the day and through the underworld at night."
          },
          {
            "id": "C3-W3-V5",
            "question": "What cross-like symbol with a loop at the top represented 'life' in Ancient Egypt?",
            "answer_reveal": "The Ankh",
            "explanation": "It is often seen in the hands of gods and pharaohs in art, symbolizing eternal life."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Rulers & History",
        "variants": [
          {
            "id": "C3-W4-V1",
            "question": "Which 'Boy King' is famous today mostly because his tomb was found completely intact in 1922?",
            "answer_reveal": "Tutankhamun",
            "explanation": "While a minor pharaoh historically, the treasures found in his tomb by Howard Carter made him a modern icon."
          },
          {
            "id": "C3-W4-V2",
            "question": "Who was the last active ruler of the Ptolemaic Kingdom of Egypt?",
            "answer_reveal": "Cleopatra VII",
            "explanation": "She was famous for her alliances with Julius Caesar and Mark Antony."
          },
          {
            "id": "C3-W4-V3",
            "question": "Which female Pharaoh ruled as a king and is often depicted wearing a fake beard?",
            "answer_reveal": "Hatshepsut",
            "explanation": "She was one of the most successful pharaohs, establishing trade networks and building great monuments."
          },
          {
            "id": "C3-W4-V4",
            "question": "Which stone slab allowed modern historians to finally read Ancient Egyptian Hieroglyphs?",
            "answer_reveal": "The Rosetta Stone",
            "explanation": "It featured the same text in Greek, Demotic, and Hieroglyphic, acting as a translation key."
          },
          {
            "id": "C3-W4-V5",
            "question": "Who was the powerful Pharaoh known for building huge statues of himself and ruling for 66 years?",
            "answer_reveal": "Ramses II",
            "explanation": "Known as Ramses the Great, he fathered over 100 children and built temples like Abu Simbel."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C3-W5-V1",
            "question": "True or False: The Great Pyramids were built by slaves.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "Archaeological evidence shows they were built by paid laborers who ate meat and were honored in burial."
          },
          {
            "id": "C3-W5-V2",
            "question": "True or False: Cleopatra was ethnically Egyptian.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "She was part of the Ptolemaic dynasty and was actually of Greek Macedonian descent."
          },
          {
            "id": "C3-W5-V3",
            "question": "True or False: Napoleon's troops shot the nose off the Great Sphinx.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "Sketches of the Sphinx from before Napoleon was born show that the nose was already missing."
          },
          {
            "id": "C3-W5-V4",
            "question": "True or False: Ancient Egyptians shaved their eyebrows when their cats died.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "This was a traditional sign of mourning for the sacred animal."
          },
          {
            "id": "C3-W5-V5",
            "question": "True or False: The heart was left inside the mummy during the embalming process.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "The heart was believed to be the seat of the soul and was needed for judgment in the afterlife."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 4,
    "country": "Greece",
    "theme_description": "The Cradle of Legends",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Inventions & Thought",
        "variants": [
          {
            "id": "C4-W1-V1",
            "question": "Which political system, meaning 'rule by the people', was invented in Athens?",
            "answer_reveal": "Democracy",
            "explanation": "In 507 BC, Cleisthenes introduced 'demokratia', allowing citizens to vote directly on laws."
          },
          {
            "id": "C4-W1-V2",
            "question": "The Greeks created the first analog computer, the Antikythera mechanism, to track what?",
            "answer_reveal": "Astronomical positions",
            "explanation": "It could predict eclipses and track the movement of stars decades in advance."
          },
          {
            "id": "C4-W1-V3",
            "question": "Which major sporting event was held every four years in honor of Zeus?",
            "answer_reveal": "The Olympic Games",
            "explanation": "They began in 776 BC in Olympia. Wars were often paused so athletes could travel safely."
          },
          {
            "id": "C4-W1-V4",
            "question": "Which Greek mathematician shouted 'Eureka!' after discovering water displacement in a bath?",
            "answer_reveal": "Archimedes",
            "explanation": "He realized he could measure the volume of an irregular object (like a crown) by how much water it pushed away."
          },
          {
            "id": "C4-W1-V5",
            "question": "The Greeks developed which form of entertainment that involved masks, a chorus, and tragedies?",
            "answer_reveal": "Theater",
            "explanation": "Plays were performed in open-air amphitheaters with amazing acoustics."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C4-W2-V1",
            "question": "Which temple dedicated to Athena stands atop the Acropolis in Athens?",
            "answer_reveal": "The Parthenon",
            "explanation": "It is considered the finest example of Doric architecture still standing."
          },
          {
            "id": "C4-W2-V2",
            "question": "What is the name of the highest mountain in Greece, believed to be the home of the gods?",
            "answer_reveal": "Mount Olympus",
            "explanation": "The 12 major gods were known as the Olympians because they supposedly lived at the peak."
          },
          {
            "id": "C4-W2-V3",
            "question": "Where did people travel to hear prophecies from the priestess Pythia?",
            "answer_reveal": "The Oracle of Delphi",
            "explanation": "Leaders would consult the Oracle before waging war or making major decisions."
          },
          {
            "id": "C4-W2-V4",
            "question": "Which island was home to the legendary Labyrinth and the Minotaur?",
            "answer_reveal": "Crete",
            "explanation": "The Palace of Knossos on Crete is often associated with the Labyrinth myth."
          },
          {
            "id": "C4-W2-V5",
            "question": "Which giant statue, one of the Seven Wonders, once stood at the harbor of Rhodes?",
            "answer_reveal": "The Colossus of Rhodes",
            "explanation": "It was a massive bronze statue of the sun god Helios, standing as tall as the Statue of Liberty."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Mythology",
        "variants": [
          {
            "id": "C4-W3-V1",
            "question": "Who is the King of the Greek Gods and ruler of the sky?",
            "answer_reveal": "Zeus",
            "explanation": "His weapon is the thunderbolt, and he ruled from Mount Olympus."
          },
          {
            "id": "C4-W3-V2",
            "question": "Which monster had snakes for hair and could turn anyone who looked at her to stone?",
            "answer_reveal": "Medusa",
            "explanation": "She was a Gorgon, eventually defeated by the hero Perseus using a mirrored shield."
          },
          {
            "id": "C4-W3-V3",
            "question": "Which hero was invincible except for a single spot on his heel?",
            "answer_reveal": "Achilles",
            "explanation": "His mother dipped him in the River Styx but held him by his heel, leaving it vulnerable."
          },
          {
            "id": "C4-W3-V4",
            "question": "Who is the god of the sea, known for carrying a trident?",
            "answer_reveal": "Poseidon",
            "explanation": "He was Zeus's brother and could cause earthquakes and storms."
          },
          {
            "id": "C4-W3-V5",
            "question": "What wooden gift did the Greeks use to secretly enter the city of Troy?",
            "answer_reveal": "The Trojan Horse",
            "explanation": "Soldiers hid inside the hollow horse, emerging at night to open the city gates."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - History & Society",
        "variants": [
          {
            "id": "C4-W4-V1",
            "question": "Which Greek city-state was famous for its rigorous military training and warrior culture?",
            "answer_reveal": "Sparta",
            "explanation": "Spartan boys began military training at age 7 in a system called the Agoge."
          },
          {
            "id": "C4-W4-V2",
            "question": "Who was the young king who created one of the largest empires in history by age 30?",
            "answer_reveal": "Alexander the Great",
            "explanation": "He was a student of Aristotle and never lost a battle, stretching his empire from Greece to India."
          },
          {
            "id": "C4-W4-V3",
            "question": "The modern race spanning 42km is named after which Greek battlefield?",
            "answer_reveal": "Marathon",
            "explanation": "It honors Pheidippides, who ran from Marathon to Athens to announce victory over the Persians, then died."
          },
          {
            "id": "C4-W4-V4",
            "question": "Who was the philosopher sentenced to death by drinking poison hemlock for 'corrupting the youth'?",
            "answer_reveal": "Socrates",
            "explanation": "He is the founder of Western philosophy but never wrote anything down; his student Plato recorded his ideas."
          },
          {
            "id": "C4-W4-V5",
            "question": "What is the name of the heavily armored Greek infantry formation?",
            "answer_reveal": "The Phalanx",
            "explanation": "Soldiers stood shoulder-to-shoulder with shields locked and spears pointing forward."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C4-W5-V1",
            "question": "True or False: Ancient Olympic athletes competed completely naked.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "The word 'gymnasium' actually comes from the Greek word 'gymnos', meaning naked."
          },
          {
            "id": "C4-W5-V2",
            "question": "True or False: Alexander the Great died in battle.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "He died in Babylon at age 32, likely from illness (malaria or typhoid) or poisoning."
          },
          {
            "id": "C4-W5-V3",
            "question": "True or False: The Parthenon in Athens was blown up by gunpowder.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "In 1687, the Ottomans used it as a gunpowder magazine, and it exploded when hit by a Venetian mortar."
          },
          {
            "id": "C4-W5-V4",
            "question": "True or False: Greece has thousands of islands.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Depending on the definition, Greece has between 1,200 and 6,000 islands, though only about 200 are inhabited."
          },
          {
            "id": "C4-W5-V5",
            "question": "True or False: Women were allowed to watch the ancient Olympic Games.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "Married women were banned from watching under penalty of death, though they had their own separate festival for Hera."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 5,
    "country": "Italy",
    "theme_description": "The Eternal Empire",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Ancient Rome",
        "variants": [
          {
            "id": "C5-W1-V1",
            "question": "What massive amphitheater in Rome was used for gladiator battles and could hold up to 80,000 spectators?",
            "answer_reveal": "The Colosseum",
            "explanation": "It hosted gladiatorial contests, animal hunts, and even mock sea battles."
          },
          {
            "id": "C5-W1-V2",
            "question": "Which engineering marvel allowed Romans to transport fresh water into cities from miles away?",
            "answer_reveal": "Aqueducts",
            "explanation": "Using gravity and precise gradients, they supplied public baths, latrines, and fountains."
          },
          {
            "id": "C5-W1-V3",
            "question": "Which Roman leader was famously assassinated by the Senate on the 'Ides of March'?",
            "answer_reveal": "Julius Caesar",
            "explanation": "He was stabbed 23 times on March 15, 44 BC, leading to the end of the Roman Republic."
          },
          {
            "id": "C5-W1-V4",
            "question": "What language was spoken by the Ancient Romans and became the basis for French, Spanish, and Italian?",
            "answer_reveal": "Latin",
            "explanation": "It remained the language of science and the church in Europe for over a thousand years."
          },
          {
            "id": "C5-W1-V5",
            "question": "Which city was buried and preserved under ash after the eruption of Mount Vesuvius in 79 AD?",
            "answer_reveal": "Pompeii",
            "explanation": "The ash preserved buildings, art, and even the shapes of the people who perished."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - The Renaissance",
        "variants": [
          {
            "id": "C5-W2-V1",
            "question": "Which Italian artist painted the 'Mona Lisa' and designed early flying machines?",
            "answer_reveal": "Leonardo da Vinci",
            "explanation": "He was a polymath: a painter, sculptor, architect, musician, mathematician, and engineer."
          },
          {
            "id": "C5-W2-V2",
            "question": "Who painted the famous ceiling of the Sistine Chapel while lying on his back?",
            "answer_reveal": "Michelangelo",
            "explanation": "It took him four years to complete the masterpiece, which features scenes from Genesis."
          },
          {
            "id": "C5-W2-V3",
            "question": "Which Italian city is considered the birthplace of the Renaissance?",
            "answer_reveal": "Florence (Firenze)",
            "explanation": "Wealthy patrons like the Medici family funded artists and thinkers, sparking a cultural rebirth."
          },
          {
            "id": "C5-W2-V4",
            "question": "Which Italian astronomer was put under house arrest for claiming the Earth revolved around the Sun?",
            "answer_reveal": "Galileo Galilei",
            "explanation": "He is called the 'father of modern science' for his improvements to the telescope and physics."
          },
          {
            "id": "C5-W2-V5",
            "question": "What literary masterpiece by Dante Alighieri describes a journey through Hell, Purgatory, and Heaven?",
            "answer_reveal": "The Divine Comedy",
            "explanation": "It established the modern Italian language and shaped the Western view of the afterlife."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Food & Culture",
        "variants": [
          {
            "id": "C5-W3-V1",
            "question": "Which famous Italian dish was invented in Naples to honor Queen Margherita?",
            "answer_reveal": "Pizza",
            "explanation": "The Pizza Margherita features basil, mozzarella, and tomato—the colors of the Italian flag."
          },
          {
            "id": "C5-W3-V2",
            "question": "What is the general term for the hundreds of shapes of Italian dough, such as penne, fusilli, and spaghetti?",
            "answer_reveal": "Pasta",
            "explanation": "There are over 600 shapes of pasta, each designed to hold specific types of sauces."
          },
          {
            "id": "C5-W3-V3",
            "question": "Which frozen dessert, similar to ice cream but denser and made with more milk than cream, originated in Italy?",
            "answer_reveal": "Gelato",
            "explanation": "It is churned at a slower speed than ice cream, introducing less air for a richer flavor."
          },
          {
            "id": "C5-W3-V4",
            "question": "Which city is built entirely on a lagoon and uses canals instead of roads?",
            "answer_reveal": "Venice",
            "explanation": "It consists of 118 small islands separated by canals and linked by over 400 bridges."
          },
          {
            "id": "C5-W3-V5",
            "question": "What strong, concentrated coffee is the base for drinks like cappuccinos and lattes?",
            "answer_reveal": "Espresso",
            "explanation": "The first espresso machine was patented in Turin in 1884."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C5-W4-V1",
            "question": "What building in Pisa is famous worldwide because of its unintended tilt?",
            "answer_reveal": "The Leaning Tower of Pisa",
            "explanation": "It began leaning during construction in the 12th century due to soft ground on one side."
          },
          {
            "id": "C5-W4-V2",
            "question": "Which independent city-state is located entirely within Rome and is the headquarters of the Catholic Church?",
            "answer_reveal": "Vatican City",
            "explanation": "It is the smallest country in the world by both area and population."
          },
          {
            "id": "C5-W4-V3",
            "question": "What is the name of the fountain in Rome where throwing a coin ensures you will return to the city?",
            "answer_reveal": "The Trevi Fountain",
            "explanation": "An estimated 3,000 Euros are thrown into it every day, which is collected for charity."
          },
          {
            "id": "C5-W4-V4",
            "question": "Which massive domed church in Vatican City was designed partly by Michelangelo?",
            "answer_reveal": "St. Peter's Basilica",
            "explanation": "It is one of the largest churches in the world and a major pilgrimage site."
          },
          {
            "id": "C5-W4-V5",
            "question": "What is the name of the active volcano on the island of Sicily?",
            "answer_reveal": "Mount Etna",
            "explanation": "It is the tallest active volcano in Europe and has a history of eruptions dating back 3,500 years."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C5-W5-V1",
            "question": "True or False: Tomatoes are native to Italy.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "Tomatoes originated in the Americas and weren't introduced to Italy until the 16th century."
          },
          {
            "id": "C5-W5-V2",
            "question": "True or False: Rome is older than Italy as a unified country.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Rome was founded in 753 BC, while modern Italy only unified as a single nation in 1861."
          },
          {
            "id": "C5-W5-V3",
            "question": "True or False: It is illegal to die in the Italian town of Falciano del Massico.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "The mayor issued the decree because the town's cemetery is full, highlighting a local issue."
          },
          {
            "id": "C5-W5-V4",
            "question": "True or False: Italians drink Cappuccinos only in the morning.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Ordering a milky coffee after 11 AM is considered strange, as milk is seen as a breakfast food."
          },
          {
            "id": "C5-W5-V5",
            "question": "True or False: Julius Caesar was the first Emperor of Rome.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "He was a 'Dictator for Life'. The first actual Emperor was his heir, Augustus."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 6,
    "country": "United Kingdom",
    "theme_description": "The Crown's Legacy",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Medieval History",
        "variants": [
          {
            "id": "C6-W1-V1",
            "question": "Which document, signed in 1215, limited the power of the King and laid the foundation for modern democracy?",
            "answer_reveal": "The Magna Carta",
            "explanation": "King John was forced by his barons to sign it at Runnymede, establishing that no one is above the law."
          },
          {
            "id": "C6-W1-V2",
            "question": "Who was the legendary King who pulled the sword from the stone and ruled Camelot?",
            "answer_reveal": "King Arthur",
            "explanation": "Though likely a mix of folklore and myth, his Knights of the Round Table are a staple of British legend."
          },
          {
            "id": "C6-W1-V3",
            "question": "Which historic fortress in London has served as a royal palace, a prison, and a zoo?",
            "answer_reveal": "The Tower of London",
            "explanation": "It is home to the Crown Jewels and the famous 'Beefeater' guards."
          },
          {
            "id": "C6-W1-V4",
            "question": "What mysterious circle of massive stones in Wiltshire was built over 4,000 years ago?",
            "answer_reveal": "Stonehenge",
            "explanation": "Its true purpose remains a mystery, though it aligns perfectly with the sunrise on the summer solstice."
          },
          {
            "id": "C6-W1-V5",
            "question": "Which King is famous for having six wives and splitting England from the Catholic Church?",
            "answer_reveal": "Henry VIII",
            "explanation": "He created the Church of England so he could divorce his first wife, Catherine of Aragon."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Literature",
        "variants": [
          {
            "id": "C6-W2-V1",
            "question": "Who is considered the greatest writer in the English language, known as 'The Bard'?",
            "answer_reveal": "William Shakespeare",
            "explanation": "He wrote 39 plays, including Romeo & Juliet and Hamlet, and invented over 1,700 words."
          },
          {
            "id": "C6-W2-V2",
            "question": "Which fictional detective lived at 221B Baker Street in London?",
            "answer_reveal": "Sherlock Holmes",
            "explanation": "Created by Sir Arthur Conan Doyle, he is famous for his logical reasoning and forensic science."
          },
          {
            "id": "C6-W2-V3",
            "question": "Which British author wrote the 'Harry Potter' series?",
            "answer_reveal": "J.K. Rowling",
            "explanation": "She wrote the first book in cafes in Edinburgh, and it became the best-selling book series in history."
          },
          {
            "id": "C6-W2-V4",
            "question": "Who wrote 'The Lord of the Rings' and 'The Hobbit'?",
            "answer_reveal": "J.R.R. Tolkien",
            "explanation": "He was a professor at Oxford University and invented entire languages for his Middle-earth universe."
          },
          {
            "id": "C6-W2-V5",
            "question": "Which famous spy, code-named 007, was created by Ian Fleming?",
            "answer_reveal": "James Bond",
            "explanation": "Fleming was a naval intelligence officer during WWII, inspiring his spy novels."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C6-W3-V1",
            "question": "What is the nickname of the Great Bell inside the clock tower at the Palace of Westminster?",
            "answer_reveal": "Big Ben",
            "explanation": "Technically, 'Big Ben' is the name of the bell, not the tower itself (which is the Elizabeth Tower)."
          },
          {
            "id": "C6-W3-V2",
            "question": "What is the official London residence of the British Monarch?",
            "answer_reveal": "Buckingham Palace",
            "explanation": "It has 775 rooms. When the monarch is home, the Royal Standard flag is flown."
          },
          {
            "id": "C6-W3-V3",
            "question": "Which famous bridge in London can lift up to let ships pass through?",
            "answer_reveal": "Tower Bridge",
            "explanation": "Often confused with London Bridge, it is an iconic symbol of the city built in the Victorian era."
          },
          {
            "id": "C6-W3-V4",
            "question": "What is the giant Ferris wheel on the South Bank of the River Thames called?",
            "answer_reveal": "The London Eye",
            "explanation": "It was built to mark the millennium (year 2000) and offers panoramic views of the city."
          },
          {
            "id": "C6-W3-V5",
            "question": "Which mythical monster is said to inhabit a loch (lake) in Scotland?",
            "answer_reveal": "The Loch Ness Monster (Nessie)",
            "explanation": "Despite many 'sightings', no scientific evidence proves the existence of the creature."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Inventions & Culture",
        "variants": [
          {
            "id": "C6-W4-V1",
            "question": "Which British scientist formulated the laws of gravity after supposedly watching an apple fall?",
            "answer_reveal": "Isaac Newton",
            "explanation": "His book 'Principia Mathematica' laid the foundations for classical mechanics."
          },
          {
            "id": "C6-W4-V2",
            "question": "Which Scottish engineer is credited with inventing the telephone?",
            "answer_reveal": "Alexander Graham Bell",
            "explanation": "He made the first successful telephone call in 1876, saying 'Mr. Watson, come here, I want to see you.'"
          },
          {
            "id": "C6-W4-V3",
            "question": "Which British band from Liverpool became the best-selling music act of all time?",
            "answer_reveal": "The Beatles",
            "explanation": "The 'Fab Four' (John, Paul, George, and Ringo) changed pop culture in the 1960s."
          },
          {
            "id": "C6-W4-V4",
            "question": "Who is the British computer scientist who invented the World Wide Web?",
            "answer_reveal": "Tim Berners-Lee",
            "explanation": "He created the first web browser and server in 1989 while working at CERN."
          },
          {
            "id": "C6-W4-V5",
            "question": "What is the national drink of the UK, with over 100 million cups consumed daily?",
            "answer_reveal": "Tea",
            "explanation": "The British tradition of Afternoon Tea was popularized by the Duchess of Bedford in the 1840s."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C6-W5-V1",
            "question": "True or False: The Queen (or King) of England owns all the swans in the UK.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Technically, the Crown retains the right to claim ownership of all unmarked mute swans in open water."
          },
          {
            "id": "C6-W5-V2",
            "question": "True or False: Champagne was invented in England.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "While France made it famous, English scientist Christopher Merret documented adding sugar for fizz 30 years before Dom Pérignon."
          },
          {
            "id": "C6-W5-V3",
            "question": "True or False: London Bridge has fallen down and been moved to Arizona, USA.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "In 1968, the old London Bridge was sold to an American oil tycoon and reassembled in Lake Havasu City."
          },
          {
            "id": "C6-W5-V4",
            "question": "True or False: It is illegal to handle a salmon in suspicious circumstances in the UK.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "This is a real law (Section 32 of the Salmon Act 1986) aimed at preventing illegal fishing."
          },
          {
            "id": "C6-W5-V5",
            "question": "True or False: Big Ben is the name of the clock tower.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "Big Ben is the nickname of the Great Bell inside. The tower is called the Elizabeth Tower."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 7,
    "country": "France",
    "theme_description": "The Revolutionary Republic",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Inventions",
        "variants": [
          {
            "id": "C7-W1-V1",
            "question": "Which system of reading and writing for the blind was invented by a 15-year-old French boy?",
            "answer_reveal": "Braille",
            "explanation": "Louis Braille lost his sight as a child and developed the code of raised dots in 1824."
          },
          {
            "id": "C7-W1-V2",
            "question": "The Montgolfier brothers are credited with launching the first piloted version of which flying vehicle?",
            "answer_reveal": "The Hot Air Balloon",
            "explanation": "The first passengers were actually a sheep, a duck, and a rooster to test if the air was breathable."
          },
          {
            "id": "C7-W1-V3",
            "question": "Which medical device, originally just a wooden tube, was invented by René Laennec to listen to hearts?",
            "answer_reveal": "The Stethoscope",
            "explanation": "He invented it because he was too shy to place his ear directly on a female patient's chest."
          },
          {
            "id": "C7-W1-V4",
            "question": "Which global measurement system was developed during the French Revolution to standardize trade?",
            "answer_reveal": "The Metric System",
            "explanation": "It replaced a chaotic system of local measurements and is now used by almost every country on Earth."
          },
          {
            "id": "C7-W1-V5",
            "question": "The Lumière brothers held the first public screening of which form of entertainment in 1895?",
            "answer_reveal": "Motion Pictures (Cinema)",
            "explanation": "One of their first films showed a train arriving, which allegedly terrified the audience who thought it was real."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C7-W2-V1",
            "question": "Which iron lattice tower was originally built as a temporary entrance for the 1889 World's Fair?",
            "answer_reveal": "The Eiffel Tower",
            "explanation": "It was hated by Parisians at first, who called it a 'useless monstrosity', but it was saved because it served as a radio antenna."
          },
          {
            "id": "C7-W2-V2",
            "question": "Which museum in Paris is the largest art museum in the world and home to the Mona Lisa?",
            "answer_reveal": "The Louvre",
            "explanation": "It was originally a fortress built in the 12th century before becoming a royal palace and then a museum."
          },
          {
            "id": "C7-W2-V3",
            "question": "Which massive palace, famous for its Hall of Mirrors, was the home of French Kings before the Revolution?",
            "answer_reveal": "The Palace of Versailles",
            "explanation": "It became a symbol of royal excess and absolute power, located just outside Paris."
          },
          {
            "id": "C7-W2-V4",
            "question": "Which Gothic cathedral became famous again after Victor Hugo wrote a novel about its 'Hunchback'?",
            "answer_reveal": "Notre-Dame de Paris",
            "explanation": "Construction began in 1163 and took over 180 years. It was tragically damaged by fire in 2019."
          },
          {
            "id": "C7-W2-V5",
            "question": "What is the name of the monumental arch that stands at the center of the Place Charles de Gaulle?",
            "answer_reveal": "The Arc de Triomphe",
            "explanation": "It honors those who fought for France, particularly during the Napoleonic Wars."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Food & Culture",
        "variants": [
          {
            "id": "C7-W3-V1",
            "question": "Which sparkling wine can only legally be called by its name if it comes from a specific region in France?",
            "answer_reveal": "Champagne",
            "explanation": "If produced elsewhere, it must be called 'sparkling wine', 'Prosecco', or 'Cava'."
          },
          {
            "id": "C7-W3-V2",
            "question": "Ironically, which famous crescent-shaped French pastry actually originated in Austria?",
            "answer_reveal": "The Croissant",
            "explanation": "It was based on the Austrian 'Kipferl' and introduced to France in the 19th century."
          },
          {
            "id": "C7-W3-V3",
            "question": "Which prestigious restaurant guide was originally created by a tire company to encourage people to drive more?",
            "answer_reveal": "The Michelin Guide",
            "explanation": "They reviewed restaurants in the countryside to give people a reason to wear out their tires traveling."
          },
          {
            "id": "C7-W3-V4",
            "question": "What is the long, thin loaf of bread that is a staple of French life and protected by law?",
            "answer_reveal": "The Baguette",
            "explanation": "By law, a traditional baguette can only contain four ingredients: flour, water, salt, and yeast."
          },
          {
            "id": "C7-W3-V5",
            "question": "France produces over 1,000 types of what dairy product, known as 'fromage'?",
            "answer_reveal": "Cheese",
            "explanation": "Famous varieties include Camembert, Brie, and Roquefort."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - History",
        "variants": [
          {
            "id": "C7-W4-V1",
            "question": "Which French military leader conquered much of Europe in the early 19th century?",
            "answer_reveal": "Napoleon Bonaparte",
            "explanation": "Despite the myth that he was short, he was actually of average height for his time."
          },
          {
            "id": "C7-W4-V2",
            "question": "Who was the peasant girl who led the French army to victory at Orléans claiming divine guidance?",
            "answer_reveal": "Joan of Arc",
            "explanation": "She was burned at the stake at age 19 but was later canonized as a saint."
          },
          {
            "id": "C7-W4-V3",
            "question": "Which King was known as the 'Sun King' and ruled France for 72 years?",
            "answer_reveal": "Louis XIV",
            "explanation": "He centralized power in France and built the Palace of Versailles."
          },
          {
            "id": "C7-W4-V4",
            "question": "What was the primary method of execution used during the French Revolution's 'Reign of Terror'?",
            "answer_reveal": "The Guillotine",
            "explanation": "It was considered a 'humane' and egalitarian method of execution compared to axes or swords."
          },
          {
            "id": "C7-W4-V5",
            "question": "Which colossal statue in New York Harbor was a gift from France to the United States?",
            "answer_reveal": "The Statue of Liberty",
            "explanation": "It was designed by Frédéric Auguste Bartholdi and built by Gustave Eiffel (who built the tower)."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C7-W5-V1",
            "question": "True or False: French Fries originated in France.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "They actually originated in Belgium. American soldiers in WWI called them 'French' because the Belgian army spoke French."
          },
          {
            "id": "C7-W5-V2",
            "question": "True or False: A con artist once successfully 'sold' the Eiffel Tower for scrap metal.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Victor Lustig posed as a government official in 1925 and convinced a scrap dealer to buy it."
          },
          {
            "id": "C7-W5-V3",
            "question": "True or False: France covers the most time zones of any country in the world.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Due to its many overseas territories (like French Guiana and Tahiti), France spans 12 different time zones."
          },
          {
            "id": "C7-W5-V4",
            "question": "True or False: The guillotine was last used in France in 1977.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "It was used for the last time the same year the first 'Star Wars' movie was released."
          },
          {
            "id": "C7-W5-V5",
            "question": "True or False: Louis XIX was King of France for only 20 minutes.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "His father abdicated, and Louis XIX abdicated 20 minutes later in favor of his nephew."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 8,
    "country": "United States",
    "theme_description": "The Land of Liberty",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Innovation",
        "variants": [
          {
            "id": "C8-W1-V1",
            "question": "Which brothers are credited with inventing and flying the first successful airplane in 1903?",
            "answer_reveal": "The Wright Brothers",
            "explanation": "Orville and Wilbur Wright made history with a 12-second flight at Kitty Hawk, North Carolina."
          },
          {
            "id": "C8-W1-V2",
            "question": "Which American inventor held over 1,000 patents, including the lightbulb and phonograph?",
            "answer_reveal": "Thomas Edison",
            "explanation": "He was known as the 'Wizard of Menlo Park' and established the first industrial research lab."
          },
          {
            "id": "C8-W1-V3",
            "question": "What network, originally a US military project called ARPANET, evolved into the modern Internet?",
            "answer_reveal": "The Internet",
            "explanation": "The first message sent was 'LO' (intended to be 'LOGIN') before the system crashed."
          },
          {
            "id": "C8-W1-V4",
            "question": "Which industrialist revolutionized manufacturing by introducing the moving assembly line?",
            "answer_reveal": "Henry Ford",
            "explanation": "This innovation made the Model T automobile affordable for the average American."
          },
          {
            "id": "C8-W1-V5",
            "question": "Which Global Positioning System (GPS) was originally developed by which US organization?",
            "answer_reveal": "The US Military (DoD)",
            "explanation": "It was opened for public use in the 1980s, changing navigation forever."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C8-W2-V1",
            "question": "What is the name of the official residence and workplace of the President of the United States?",
            "answer_reveal": "The White House",
            "explanation": "It has been the residence of every U.S. president since John Adams in 1800."
          },
          {
            "id": "C8-W2-V2",
            "question": "Which massive canyon in Arizona was carved by the Colorado River over millions of years?",
            "answer_reveal": "The Grand Canyon",
            "explanation": "It is 277 miles long, up to 18 miles wide, and over a mile deep."
          },
          {
            "id": "C8-W2-V3",
            "question": "Which monument in South Dakota features the 60-foot heads of four US Presidents?",
            "answer_reveal": "Mount Rushmore",
            "explanation": "It features Washington, Jefferson, T. Roosevelt, and Lincoln carved into granite."
          },
          {
            "id": "C8-W2-V4",
            "question": "What was the first National Park established in the world, famous for its geysers?",
            "answer_reveal": "Yellowstone",
            "explanation": "Established in 1872, it sits on top of a dormant supervolcano."
          },
          {
            "id": "C8-W2-V5",
            "question": "Which famous suspension bridge in San Francisco is painted 'International Orange'?",
            "answer_reveal": "The Golden Gate Bridge",
            "explanation": "The color was chosen to make the bridge visible to ships in the thick fog."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - History",
        "variants": [
          {
            "id": "C8-W3-V1",
            "question": "In 1969, the US mission Apollo 11 successfully did what for the first time in history?",
            "answer_reveal": "Landed humans on the Moon",
            "explanation": "Neil Armstrong and Buzz Aldrin were the first humans to walk on the lunar surface."
          },
          {
            "id": "C8-W3-V2",
            "question": "Which document, adopted on July 4, 1776, announced the separation of the 13 colonies from Britain?",
            "answer_reveal": "The Declaration of Independence",
            "explanation": "It was primarily drafted by Thomas Jefferson."
          },
          {
            "id": "C8-W3-V3",
            "question": "Which war was fought between the Northern and Southern states of the US from 1861 to 1865?",
            "answer_reveal": "The Civil War",
            "explanation": "It remains the deadliest war in American history, resulting in the abolition of slavery."
          },
          {
            "id": "C8-W3-V4",
            "question": "What 1849 event caused a massive migration of people to California?",
            "answer_reveal": "The Gold Rush",
            "explanation": "The prospectors were nicknamed '49ers'. The population of San Francisco exploded from 1,000 to 25,000 in two years."
          },
          {
            "id": "C8-W3-V5",
            "question": "Who was the first President of the United States?",
            "answer_reveal": "George Washington",
            "explanation": "He was the commander-in-chief of the Continental Army during the American Revolutionary War."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Culture",
        "variants": [
          {
            "id": "C8-W4-V1",
            "question": "Which district in Los Angeles is known as the entertainment capital of the world?",
            "answer_reveal": "Hollywood",
            "explanation": "The famous Hollywood sign originally read 'HOLLYWOODLAND' and was a real estate advertisement."
          },
          {
            "id": "C8-W4-V2",
            "question": "Which music genre originated in the African-American communities of New Orleans?",
            "answer_reveal": "Jazz",
            "explanation": "It is considered one of America's original art forms, blending blues and ragtime."
          },
          {
            "id": "C8-W4-V3",
            "question": "What sport is famously known as 'America's National Pastime'?",
            "answer_reveal": "Baseball",
            "explanation": "The first professional league was founded in 1871, though the game's roots are older."
          },
          {
            "id": "C8-W4-V4",
            "question": "Which annual American football championship game is one of the most-watched events on TV?",
            "answer_reveal": "The Super Bowl",
            "explanation": "Commercials during the game are famous for costing millions of dollars for 30 seconds."
          },
          {
            "id": "C8-W4-V5",
            "question": "Which region in California is the global center for high technology and innovation?",
            "answer_reveal": "Silicon Valley",
            "explanation": "It is home to giants like Apple, Google, and Meta, named after the silicon used in computer chips."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C8-W5-V1",
            "question": "True or False: The US flag has 50 stars.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Each star represents a state, while the 13 stripes represent the original colonies."
          },
          {
            "id": "C8-W5-V2",
            "question": "True or False: Benjamin Franklin wanted the Turkey to be the national bird instead of the Bald Eagle.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "He called the Eagle a 'bird of bad moral character' (a thief), while the Turkey was a 'respectable bird'."
          },
          {
            "id": "C8-W5-V3",
            "question": "True or False: George Washington had wooden teeth.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "His dentures were made of hippopotamus ivory, bone, gold, and human teeth, but never wood."
          },
          {
            "id": "C8-W5-V4",
            "question": "True or False: The character 'Uncle Sam' was based on a real person.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "He was based on Samuel Wilson, a meat packer who supplied barrels of beef to the army during the War of 1812."
          },
          {
            "id": "C8-W5-V5",
            "question": "True or False: The Declaration of Independence was signed by everyone on July 4th.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "It was adopted on July 4th, but most delegates actually signed it on August 2nd."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 9,
    "country": "India",
    "theme_description": "The Jewel of the East",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Ancient Inventions",
        "variants": [
          {
            "id": "C9-W1-V1",
            "question": "Which mathematical concept, represented by a circle, was first defined and used in ancient India?",
            "answer_reveal": "Zero (0)",
            "explanation": "Mathematician Aryabhata was one of the first to treat zero as a number rather than just a placeholder."
          },
          {
            "id": "C9-W1-V2",
            "question": "Which strategic board game originated in India under the name 'Chaturanga'?",
            "answer_reveal": "Chess",
            "explanation": "The pieces represented the four divisions of the military: infantry, cavalry, elephantry, and chariotry."
          },
          {
            "id": "C9-W1-V3",
            "question": "The word 'Shampoo' comes from the Hindi word 'Champu', which originally meant what?",
            "answer_reveal": "Head Massage",
            "explanation": "It was introduced to Britain by a Bengali entrepreneur in the early 19th century as a medicated vapor massage."
          },
          {
            "id": "C9-W1-V4",
            "question": "Which fastening device, used on clothes today, was first used in the Indus Valley Civilization for ornament?",
            "answer_reveal": "Buttons",
            "explanation": "They were made from seashells and used for decoration rather than fastening at first."
          },
          {
            "id": "C9-W1-V5",
            "question": "India was the only world source of which precious gemstone until deposits were found in Brazil in the 18th century?",
            "answer_reveal": "Diamonds",
            "explanation": "The famous Koh-i-Noor diamond, now part of the British Crown Jewels, was mined in India."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C9-W2-V1",
            "question": "Which white marble mausoleum was built by Emperor Shah Jahan in memory of his favorite wife?",
            "answer_reveal": "The Taj Mahal",
            "explanation": "It took approximately 20,000 artisans over 20 years to complete and is a UNESCO World Heritage site."
          },
          {
            "id": "C9-W2-V2",
            "question": "What is the holiest river in Hinduism, believed to wash away sins?",
            "answer_reveal": "The Ganges (Ganga)",
            "explanation": "Millions of people visit the river banks in Varanasi to bathe in the sacred waters."
          },
          {
            "id": "C9-W2-V3",
            "question": "Which spiritual site in Amritsar is the holiest shrine of Sikhism, plated with real gold?",
            "answer_reveal": "The Golden Temple",
            "explanation": "Its community kitchen (Langar) serves free meals to up to 100,000 people daily, regardless of religion."
          },
          {
            "id": "C9-W2-V4",
            "question": "What ancient university in Bihar was a center of learning centuries before Oxford or Cambridge existed?",
            "answer_reveal": "Nalanda University",
            "explanation": "It attracted students from as far as China, Korea, and Turkey between the 5th and 12th centuries."
          },
          {
            "id": "C9-W2-V5",
            "question": "Which massive red sandstone fort in Delhi served as the main residence of the Mughal Emperors?",
            "answer_reveal": "The Red Fort",
            "explanation": "Every year on Independence Day, the Prime Minister hoists the national flag here."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Culture & Wildlife",
        "variants": [
          {
            "id": "C9-W3-V1",
            "question": "Which animal is considered sacred in Hinduism and is often seen wandering freely in streets?",
            "answer_reveal": "The Cow",
            "explanation": "Cows are respected as a symbol of life and the earth; harming them is socially and legally prohibited in many states."
          },
          {
            "id": "C9-W3-V2",
            "question": "What is the name of the Indian film industry based in Mumbai, which produces more movies than Hollywood?",
            "answer_reveal": "Bollywood",
            "explanation": "It is a portmanteau of 'Bombay' (the old name for Mumbai) and 'Hollywood'."
          },
          {
            "id": "C9-W3-V3",
            "question": "Which big cat is the national animal of India, with the country hosting 70% of the world's population?",
            "answer_reveal": "The Bengal Tiger",
            "explanation": "Project Tiger was launched in 1973 to protect these majestic animals from extinction."
          },
          {
            "id": "C9-W3-V4",
            "question": "What is the 'Festival of Lights' celebrated by millions across India?",
            "answer_reveal": "Diwali (Deepavali)",
            "explanation": "It symbolizes the spiritual victory of light over darkness and good over evil."
          },
          {
            "id": "C9-W3-V5",
            "question": "Which discipline, combining physical posture and spiritual meditation, originated in ancient India?",
            "answer_reveal": "Yoga",
            "explanation": "The word 'Yoga' comes from Sanskrit and means to join or unite, symbolizing the union of body and consciousness."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - History",
        "variants": [
          {
            "id": "C9-W4-V1",
            "question": "Who was the leader of the Indian independence movement known for his philosophy of nonviolent resistance?",
            "answer_reveal": "Mahatma Gandhi",
            "explanation": "His title 'Mahatma' means 'Great Soul'. He inspired civil rights movements worldwide."
          },
          {
            "id": "C9-W4-V2",
            "question": "Which British company effectively ruled large parts of India for a century before the British government took over?",
            "answer_reveal": "The East India Company",
            "explanation": "At its height, the company had a private army twice the size of the British Royal Army."
          },
          {
            "id": "C9-W4-V3",
            "question": "In 1947, British India was partitioned into two independent nations: India and which other country?",
            "answer_reveal": "Pakistan",
            "explanation": "The partition led to one of the largest mass migrations in human history."
          },
          {
            "id": "C9-W4-V4",
            "question": "Which ancient Emperor renounced violence after a bloody war and helped spread Buddhism across Asia?",
            "answer_reveal": "Ashoka the Great",
            "explanation": "His emblem, the Lion Capital of Ashoka, is now the official emblem of the Republic of India."
          },
          {
            "id": "C9-W4-V5",
            "question": "The 'Sepoy Mutiny' of 1857 was a major uprising against whose rule?",
            "answer_reveal": "British Rule",
            "explanation": "It is also known as the First War of Independence and led to the end of the East India Company."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C9-W5-V1",
            "question": "True or False: India has the largest postal network in the world.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "India has over 150,000 post offices, including a floating post office on Dal Lake in Srinagar."
          },
          {
            "id": "C9-W5-V2",
            "question": "True or False: The national language of India is Hindi.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "India has no single 'national' language. Hindi and English are 'official' languages, but the constitution recognizes 22 languages."
          },
          {
            "id": "C9-W5-V3",
            "question": "True or False: India was once an island.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "About 100 million years ago, India broke off from a supercontinent and drifted north to collide with Asia, forming the Himalayas."
          },
          {
            "id": "C9-W5-V4",
            "question": "True or False: Snakes and Ladders originated in India.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "It was originally a moral game called 'Moksha Patam', where ladders represented virtues and snakes represented vices."
          },
          {
            "id": "C9-W5-V5",
            "question": "True or False: Tea is indigenous to India.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "While China is famous for tea, the Camellia sinensis plant is also native to the Assam region of India."
          }
        ]
      }
    ]
  },
  {
    "chapter_id": 10,
    "country": "Brazil",
    "theme_description": "The Tropical Giant",
    "waves": [
      {
        "wave_id": 1,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Nature",
        "variants": [
          {
            "id": "C10-W1-V1",
            "question": "Which massive rainforest, known as the 'lungs of the Earth', is primarily located in Brazil?",
            "answer_reveal": "The Amazon Rainforest",
            "explanation": "It produces about 20% of the world's oxygen and contains 10% of the world's known species."
          },
          {
            "id": "C10-W1-V2",
            "question": "What is the name of the river that discharges the largest volume of water in the world?",
            "answer_reveal": "The Amazon River",
            "explanation": "It discharges more water than the next seven largest rivers combined."
          },
          {
            "id": "C10-W1-V3",
            "question": "Brazil is the world's largest producer of which caffeinated bean?",
            "answer_reveal": "Coffee",
            "explanation": "Brazil has been the world's top producer of coffee for the last 150 years."
          },
          {
            "id": "C10-W1-V4",
            "question": "Which colorful bird with a large beak is a symbol of Brazilian wildlife?",
            "answer_reveal": "The Toucan",
            "explanation": "The Toco Toucan is the largest and most famous species found in Brazil."
          },
          {
            "id": "C10-W1-V5",
            "question": "Which wetlands in Brazil are the largest tropical wetland area in the world?",
            "answer_reveal": "The Pantanal",
            "explanation": "Though less famous than the Amazon, it actually has the highest concentration of wildlife in South America."
          }
        ]
      },
      {
        "wave_id": 2,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Landmarks",
        "variants": [
          {
            "id": "C10-W2-V1",
            "question": "Which Art Deco statue of Jesus stands atop Mount Corcovado in Rio de Janeiro?",
            "answer_reveal": "Christ the Redeemer",
            "explanation": "It is 30 meters tall and was voted one of the New Seven Wonders of the World."
          },
          {
            "id": "C10-W2-V2",
            "question": "What is the name of the famous peak in Rio reachable by cable car?",
            "answer_reveal": "Sugarloaf Mountain",
            "explanation": "Its name comes from its resemblance to the traditional conical shape of refined loaf sugar."
          },
          {
            "id": "C10-W2-V3",
            "question": "Which massive waterfalls border Brazil and Argentina?",
            "answer_reveal": "Iguazu Falls",
            "explanation": "The system consists of 275 distinct falls and stretches for 2.7 kilometers."
          },
          {
            "id": "C10-W2-V4",
            "question": "What is the name of the futuristic capital city built from scratch in the 1950s?",
            "answer_reveal": "Brasília",
            "explanation": "Designed by Oscar Niemeyer, the city layout resembles an airplane when viewed from above."
          },
          {
            "id": "C10-W2-V5",
            "question": "Which famous beach in Rio de Janeiro is known for its crescent shape?",
            "answer_reveal": "Copacabana",
            "explanation": "It frequently hosts millions of people for New Year's Eve celebrations and concerts."
          }
        ]
      },
      {
        "wave_id": 3,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - Culture",
        "variants": [
          {
            "id": "C10-W3-V1",
            "question": "What is the massive annual festival held before Lent, famous for parades and samba?",
            "answer_reveal": "Carnival",
            "explanation": "The Rio Carnival is the biggest carnival in the world, with two million people on the streets per day."
          },
          {
            "id": "C10-W3-V2",
            "question": "Which sport is the most popular in Brazil, with the country winning the World Cup five times?",
            "answer_reveal": "Football (Soccer)",
            "explanation": "Brazil is the only country to have played in every World Cup tournament."
          },
          {
            "id": "C10-W3-V3",
            "question": "What martial art, which combines dance and acrobatics, was developed by enslaved Africans in Brazil?",
            "answer_reveal": "Capoeira",
            "explanation": "It was disguised as a dance so that slave owners wouldn't realize they were practicing fighting techniques."
          },
          {
            "id": "C10-W3-V4",
            "question": "What is the official language of Brazil?",
            "answer_reveal": "Portuguese",
            "explanation": "Brazil is the only Portuguese-speaking country in the Americas and the largest in the world."
          },
          {
            "id": "C10-W3-V5",
            "question": "Which music genre, meaning 'New Trend', originated in Brazil in the late 1950s?",
            "answer_reveal": "Bossa Nova",
            "explanation": "It is a fusion of Samba and Jazz, popularized by the song 'The Girl from Ipanema'."
          }
        ]
      },
      {
        "wave_id": 4,
        "type": "fun_fact_reveal",
        "description": "Normal Battle - History",
        "variants": [
          {
            "id": "C10-W4-V1",
            "question": "From which European country did Brazil declare independence in 1822?",
            "answer_reveal": "Portugal",
            "explanation": "Unlike many colonies, the declaration was made by the Portuguese Prince Regent himself, who became Emperor."
          },
          {
            "id": "C10-W4-V2",
            "question": "What is the origin of the country's name 'Brazil'?",
            "answer_reveal": "Brazilwood (Pau-Brasil)",
            "explanation": "It is a tree that produces a deep red dye, which was the first major export of the colony."
          },
          {
            "id": "C10-W4-V3",
            "question": "Who was the legendary Brazilian football player known as 'The King'?",
            "answer_reveal": "Pelé",
            "explanation": "He is the only player to have won three FIFA World Cups."
          },
          {
            "id": "C10-W4-V4",
            "question": "Which city was the capital of Brazil before it was moved to Brasília in 1960?",
            "answer_reveal": "Rio de Janeiro",
            "explanation": "Rio was the capital for nearly 200 years, and before that, it was Salvador."
          },
          {
            "id": "C10-W4-V5",
            "question": "Brazil was the last country in the Americas to abolish what practice in 1888?",
            "answer_reveal": "Slavery",
            "explanation": "It was abolished by the 'Golden Law' signed by Princess Isabel."
          }
        ]
      },
      {
        "wave_id": 5,
        "type": "true_false_boss",
        "description": "Boss Battle - Trivia Challenge",
        "variants": [
          {
            "id": "C10-W5-V1",
            "question": "True or False: Rio de Janeiro is the capital of Brazil.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "The capital is Brasília. Rio was the capital until 1960."
          },
          {
            "id": "C10-W5-V2",
            "question": "True or False: Brazil shares a border with every South American country except two.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "It borders everyone except Chile and Ecuador."
          },
          {
            "id": "C10-W5-V3",
            "question": "True or False: Brazil has the largest population of Japanese people outside of Japan.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "There are estimated to be over 1.6 million Japanese-Brazilians, mostly in São Paulo."
          },
          {
            "id": "C10-W5-V4",
            "question": "True or False: The Amazon River is the longest river in the world.",
            "options": ["True", "False"],
            "correct_answer": "False",
            "explanation": "It is widely considered the second longest (after the Nile), though it is the largest by volume. (This is debated, but generally accepted)."
          },
          {
            "id": "C10-W5-V5",
            "question": "True or False: There is an island in Brazil forbidden to humans because of snakes.",
            "options": ["True", "False"],
            "correct_answer": "True",
            "explanation": "Ilha da Queimada Grande (Snake Island) is home to the Golden Lancehead viper and is restricted by the Navy."
          }
        ]
      }
    ]
  }
];

export default TRIVIA_DATA;
