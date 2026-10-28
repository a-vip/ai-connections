/**
 * AI & MULTI-TOPIC CONNECTIONS - CURATED PUZZLE ARCHIVE & TOPIC BANK
 * Author: Avi Perera (aviperera.com)
 *
 * Supported Topics:
 * - AI & Technology
 * - Law & Justice
 * - International Relations
 * - General Knowledge (Accessible to everyone / everyday public)
 * - Science & Nature
 * - Culture & Pop Culture
 * - History & Heritage
 * - Politics & Society
 * - Mixed (Dynamic mix-and-match via checkbox selection)
 */

(function () {
  'use strict';

  // 1. TOPIC DEFINITIONS
  const TOPICS = [
  {
    "id": "all",
    "name": "All Topics",
    "icon": "🌐",
    "desc": "Browse all available puzzles"
  },
  {
    "id": "general",
    "name": "General Knowledge",
    "icon": "🧠",
    "desc": "Accessible to everyone, everyday life, fun & friendly"
  },
  {
    "id": "animals",
    "name": "Animals & Nature",
    "icon": "🐾",
    "desc": "Wildlife, bears, birds, marine creatures & ecosystems"
  },
  {
    "id": "chemistry",
    "name": "Chemistry & Matter",
    "icon": "⚗️",
    "desc": "Acids, lab tools, household chemicals & periodic table"
  },
  {
    "id": "math",
    "name": "Mathematics & Logic",
    "icon": "📐",
    "desc": "Shapes, constants, trigonometry, numbers & puzzles"
  },
  {
    "id": "current",
    "name": "Current Events & World",
    "icon": "📰",
    "desc": "Olympic hosts, space missions, climate accords & viral trends"
  },
  {
    "id": "culture",
    "name": "Culture & Media",
    "icon": "🎬",
    "desc": "Movies, music, superheroes, streaming & pop culture"
  },
  {
    "id": "science",
    "name": "Science & Physics",
    "icon": "🔬",
    "desc": "Planets, SI units, biology, weather & energy"
  },
  {
    "id": "history",
    "name": "History & Heritage",
    "icon": "📜",
    "desc": "Ancient civilizations, inventions, explorers & world events"
  },
  {
    "id": "politics",
    "name": "Politics & Society",
    "icon": "🏛️",
    "desc": "Democracy, civic rights, elections & community"
  },
  {
    "id": "law",
    "name": "Law & Justice",
    "icon": "⚖️",
    "desc": "Courtroom basics, civil rights, justice & landmark cases"
  },
  {
    "id": "ir",
    "name": "International Relations",
    "icon": "🌍",
    "desc": "Diplomacy, world capitals, treaties & sovereignty"
  },
  {
    "id": "ai",
    "name": "AI & Technology",
    "icon": "🤖",
    "desc": "From smartphones & smart homes to AI policy & frontier tech"
  },
  {
    "id": "mixed",
    "name": "Mix & Match",
    "icon": "🔀",
    "desc": "Custom checkbox blend of topics generated dynamically"
  }
];

  // 2. CURATED PUZZLE CATALOGUE (Spans All Audiences from Casual Everyone to Specialist)
  const PUZZLES = [
  {
    "id": 110,
    "title": "Creatures of the Earth",
    "topic": "animals",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Animals",
      "Wildlife",
      "Nature",
      "Everyone"
    ],
    "categories": [
      {
        "name": "BEAR SPECIES OF THE WORLD",
        "color": "yellow",
        "items": [
          "GRIZZLY",
          "POLAR",
          "PANDA",
          "SLOTH BEAR"
        ],
        "dossier": {
          "summary": "Distinct bear species adapted to diverse global climates.",
          "legalOrTechBasis": "Zoological taxonomy.",
          "impact": "Flagship species for conservation."
        }
      },
      {
        "name": "NOCTURNAL ANIMALS",
        "color": "green",
        "items": [
          "BARN OWL",
          "BROWN BAT",
          "RACCOON",
          "HEDGEHOG"
        ],
        "dossier": {
          "summary": "Animals that sleep during daylight hours and forage during the night.",
          "legalOrTechBasis": "Behavioral animal biology.",
          "impact": "Crucial nocturnal ecological roles."
        }
      },
      {
        "name": "ANIMALS WITH POUCHES (MARSUPIALS)",
        "color": "blue",
        "items": [
          "KANGAROO",
          "KOALA",
          "WOMBAT",
          "OPOSSUM"
        ],
        "dossier": {
          "summary": "Mammals carrying underdeveloped young in external abdominal pouches.",
          "legalOrTechBasis": "Marsupial evolutionary biology.",
          "impact": "Iconic biodiversity of Australasia and the Americas."
        }
      },
      {
        "name": "WORDS PRECEDING 'BIRD'",
        "color": "purple",
        "items": [
          "EARLY",
          "SONG",
          "LOVE",
          "BLACK"
        ],
        "dossier": {
          "summary": "Common English compound phrases (Early bird, Songbird, Lovebird, Blackbird).",
          "legalOrTechBasis": "Colloquial linguistic idioms.",
          "impact": "Accessible everyday lateral wordplay."
        }
      }
    ]
  },
  {
    "id": 120,
    "title": "The Periodic Table & The Lab",
    "topic": "chemistry",
    "audience": "Civil Society",
    "difficulty": "Intermediate",
    "tags": [
      "Chemistry",
      "Lab",
      "Elements",
      "Science"
    ],
    "categories": [
      {
        "name": "COMMON HOUSEHOLD CHEMICALS",
        "color": "yellow",
        "items": [
          "BAKING SODA",
          "TABLE SALT",
          "ACETIC ACID",
          "SODIUM BLEACH"
        ],
        "dossier": {
          "summary": "Everyday chemical compounds used in cleaning and cooking.",
          "legalOrTechBasis": "Applied chemistry.",
          "impact": "Universal consumer chemistry in daily life."
        }
      },
      {
        "name": "ESSENTIAL LABORATORY GLASSWARE",
        "color": "green",
        "items": [
          "BEAKER",
          "ERLENMEYER",
          "PIPETTE",
          "BURETTE"
        ],
        "dossier": {
          "summary": "Standard volumetric and mixing glass containers utilized in scientific laboratories.",
          "legalOrTechBasis": "Chemical laboratory instrumentation.",
          "impact": "Enables precision in medical and chemical synthesis."
        }
      },
      {
        "name": "COMMON METALLIC ALLOYS",
        "color": "blue",
        "items": [
          "BRASS",
          "BRONZE",
          "PEWTER",
          "STAINLESS STEEL"
        ],
        "dossier": {
          "summary": "Metallic materials composed of two or more combined elements.",
          "legalOrTechBasis": "Metallurgy and materials science.",
          "impact": "Enabled humanity's Bronze and Industrial Ages."
        }
      },
      {
        "name": "WORDS THAT CAN PRECEDE 'ACID'",
        "color": "purple",
        "items": [
          "CITRIC",
          "AMINO",
          "FATTY",
          "RAIN"
        ],
        "dossier": {
          "summary": "Phrases compounding with 'Acid' (Citric acid, Amino acid, Fatty acid, Acid rain).",
          "legalOrTechBasis": "Biochemistry and environmental science.",
          "impact": "Lateral wordplay uniting nutrition, biology, and pollution."
        }
      }
    ]
  },
  {
    "id": 130,
    "title": "Shapes, Numbers & The Infinite",
    "topic": "math",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Math",
      "Geometry",
      "Numbers",
      "Logic"
    ],
    "categories": [
      {
        "name": "BASIC 2D GEOMETRIC SHAPES",
        "color": "yellow",
        "items": [
          "CIRCLE",
          "TRIANGLE",
          "RECTANGLE",
          "PENTAGON"
        ],
        "dossier": {
          "summary": "Fundamental planar shapes taught in early mathematics.",
          "legalOrTechBasis": "Euclidean plane geometry.",
          "impact": "The foundational geometry structuring human architecture."
        }
      },
      {
        "name": "FAMOUS MATHEMATICAL CONSTANTS",
        "color": "green",
        "items": [
          "PI",
          "EULER NUMBER",
          "GOLDEN RATIO",
          "AVOGADRO NUMBER"
        ],
        "dossier": {
          "summary": "Universal unchanging mathematical and physical values.",
          "legalOrTechBasis": "Mathematical physics.",
          "impact": "Fundamental constants governing circles, growth, and atoms."
        }
      },
      {
        "name": "CORE BRANCHES OF MATHEMATICS",
        "color": "blue",
        "items": [
          "ALGEBRA",
          "GEOMETRY",
          "CALCULUS",
          "TOPOLOGY"
        ],
        "dossier": {
          "summary": "The primary academic divisions of mathematical study.",
          "legalOrTechBasis": "Pure and applied mathematics.",
          "impact": "The quantitative language of modern engineering and computer algorithms."
        }
      },
      {
        "name": "WORDS PRECEDING 'ROOT'",
        "color": "purple",
        "items": [
          "SQUARE",
          "CUBE",
          "GRASS",
          "GINGER"
        ],
        "dossier": {
          "summary": "Terms paired with 'Root' (Square root, Cube root, Grassroots, Ginger root).",
          "legalOrTechBasis": "Mathematics, botany, and civic advocacy wordplay.",
          "impact": "Witty lateral grouping crossing math with tea and politics!"
        }
      }
    ]
  },
  {
    "id": 140,
    "title": "The Modern World & Breaking News",
    "topic": "current",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Current Events",
      "World",
      "Space",
      "Pop"
    ],
    "categories": [
      {
        "name": "SUMMER OLYMPIC HOST CITIES",
        "color": "yellow",
        "items": [
          "TOKYO",
          "PARIS",
          "LOS ANGELES",
          "BRISBANE"
        ],
        "dossier": {
          "summary": "Host cities of the modern Olympic Games (2020 to 2032).",
          "legalOrTechBasis": "International Olympic Committee (IOC) charters.",
          "impact": "Global celebration of athletics, diplomacy, and urban infrastructure."
        }
      },
      {
        "name": "ACTIVE MARS EXPLORATION MISSIONS",
        "color": "green",
        "items": [
          "CURIOSITY",
          "PERSEVERANCE",
          "HOPE PROBE",
          "TIANWEN"
        ],
        "dossier": {
          "summary": "Active scientific rovers and orbiters exploring the Martian surface.",
          "legalOrTechBasis": "NASA, ESA, UAE Space Agency, CNSA planetary science.",
          "impact": "Paves the path for humanity's multi-planetary future."
        }
      },
      {
        "name": "MAJOR CLIMATE ACCORDS",
        "color": "blue",
        "items": [
          "PARIS ACCORD",
          "KYOTO PROTOCOL",
          "MONTREAL PROTOCOL",
          "COP28 CONSENSUS"
        ],
        "dossier": {
          "summary": "Landmark multilateral treaties adopted to mitigate atmospheric and ozone emissions.",
          "legalOrTechBasis": "UNFCCC international environmental law.",
          "impact": "Coordinates international decarbonization and ozone recovery."
        }
      },
      {
        "name": "WORDS PRECEDING 'NEWS'",
        "color": "purple",
        "items": [
          "BREAKING",
          "FAKE",
          "EVENING",
          "GOOD"
        ],
        "dossier": {
          "summary": "Familiar expressions joined with 'News' (Breaking news, Fake news, Evening news, Good news).",
          "legalOrTechBasis": "Journalism and media studies.",
          "impact": "Clever lateral recognition of daily broadcasting phrases."
        }
      }
    ]
  },
  {
    "id": 150,
    "title": "DIY, Hand Tools & Street Food",
    "topic": "general",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Everyday",
      "DIY",
      "Food",
      "Non-Academic"
    ],
    "categories": [
      {
        "name": "COMMON HAND TOOLS IN A TOOLBOX",
        "color": "yellow",
        "items": [
          "CLAW HAMMER",
          "SCREWDRIVER",
          "PIPE WRENCH",
          "NEEDLE PLIERS"
        ],
        "dossier": {
          "summary": "Standard manual tools used for home repairs and carpentry.",
          "legalOrTechBasis": "Everyday craft and trades.",
          "impact": "Universal household maintenance essentials."
        }
      },
      {
        "name": "BELOVED GLOBAL STREET FOODS",
        "color": "green",
        "items": [
          "TACOS",
          "FALAFEL",
          "STEAMED DUMPLINGS",
          "SAMOSAS"
        ],
        "dossier": {
          "summary": "Iconic street food dishes enjoyed globally.",
          "legalOrTechBasis": "Global culinary heritage.",
          "impact": "Accessible, delicious street foods that unite cultures."
        }
      },
      {
        "name": "SEWING & FABRIC REPAIR TOOLS",
        "color": "blue",
        "items": [
          "SEWING NEEDLE",
          "COTTON THREAD",
          "BRASS THIMBLE",
          "BOBBIN"
        ],
        "dossier": {
          "summary": "Manual tools utilized in hand sewing and garment repair.",
          "legalOrTechBasis": "Textile craftsmanship.",
          "impact": "Timeless domestic craft and clothing repair."
        }
      },
      {
        "name": "THINGS YOU CAN 'PUNCH'",
        "color": "purple",
        "items": [
          "CLOCK",
          "BAG",
          "TICKET",
          "LINE"
        ],
        "dossier": {
          "summary": "Things associated with 'punch' (Punch the clock, Punching bag, Punch a ticket, Punchline).",
          "legalOrTechBasis": "Workplace, boxing, and comedy idioms.",
          "impact": "Fun lateral connection between comedy and punching in for work!"
        }
      }
    ]
  },
  {
    "id": 101,
    "title": "Breakfast & Kitchen Essentials",
    "topic": "general",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Everyday",
      "Food",
      "Kitchen",
      "General"
    ],
    "categories": [
      {
        "name": "WAYS TO PREPARE EGGS",
        "color": "yellow",
        "items": [
          "SCRAMBLED",
          "POACHED",
          "BOILED",
          "FRIED"
        ],
        "dossier": {
          "summary": "Common cooking methods for preparing eggs worldwide.",
          "legalOrTechBasis": "Culinary arts and everyday kitchen traditions.",
          "impact": "A universal, welcoming category accessible to players of all ages and backgrounds."
        }
      },
      {
        "name": "HOT MORNING BEVERAGES",
        "color": "green",
        "items": [
          "COFFEE",
          "TEA",
          "MATCHA",
          "HOT CHOCOLATE"
        ],
        "dossier": {
          "summary": "Popular warm breakfast drinks consumed across cultures.",
          "legalOrTechBasis": "Global beverage culture and everyday routines.",
          "impact": "Universal cultural staples connecting morning traditions."
        }
      },
      {
        "name": "THINGS WITH A BLADE IN A KITCHEN",
        "color": "blue",
        "items": [
          "KNIFE",
          "BLENDER",
          "PEELER",
          "CAN OPENER"
        ],
        "dossier": {
          "summary": "Kitchen tools relying on a sharpened cutting edge to prepare ingredients.",
          "legalOrTechBasis": "Culinary utensils and food preparation mechanics.",
          "impact": "Functional household instruments common in every home."
        }
      },
      {
        "name": "WORDS THAT CAN PRECEDE 'BOARD'",
        "color": "purple",
        "items": [
          "CHOPPING",
          "KEY",
          "SKATE",
          "CHESS"
        ],
        "dossier": {
          "summary": "Words that compound with 'Board' (Chopping board, Keyboard, Skateboard, Chessboard).",
          "legalOrTechBasis": "Everyday English compound noun wordplay.",
          "impact": "A gentle lateral wordplay puzzle testing lexical associations."
        }
      }
    ]
  },
  {
    "id": 102,
    "title": "Living Room & Everyday Tech",
    "topic": "general",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Everyday",
      "Home",
      "Gadgets",
      "General"
    ],
    "categories": [
      {
        "name": "HOUSEHOLD SMART DEVICES",
        "color": "yellow",
        "items": [
          "SPEAKER",
          "WATCH",
          "THERMOSTAT",
          "BULB"
        ],
        "dossier": {
          "summary": "Connected consumer electronics commonly found in modern homes.",
          "legalOrTechBasis": "Consumer Internet of Things (IoT) hardware.",
          "impact": "Shows how digital technology integrates into daily household comfort."
        }
      },
      {
        "name": "POPULAR VOICE ASSISTANTS",
        "color": "green",
        "items": [
          "SIRI",
          "ALEXA",
          "CORTANA",
          "BIXBY"
        ],
        "dossier": {
          "summary": "Everyday acoustic voice agents built by Apple, Amazon, Microsoft, and Samsung.",
          "legalOrTechBasis": "Consumer conversational speech recognition software.",
          "impact": "The primary touchpoint where ordinary citizens interact with AI in daily life."
        }
      },
      {
        "name": "BUTTONS FOUND ON A REMOTE CONTROL",
        "color": "blue",
        "items": [
          "MUTE",
          "POWER",
          "PAUSE",
          "INPUT"
        ],
        "dossier": {
          "summary": "Universal interface commands found on television and media remotes.",
          "legalOrTechBasis": "Consumer electronic interface design.",
          "impact": "Tactile everyday controls recognized by people of all generations."
        }
      },
      {
        "name": "WORDS THAT CAN FOLLOW 'SMART'",
        "color": "purple",
        "items": [
          "PHONE",
          "COOKIE",
          "ALEC",
          "CASUAL"
        ],
        "dossier": {
          "summary": "Phrases compounding with 'Smart' (Smartphone, Smart cookie, Smart alec, Smart casual).",
          "legalOrTechBasis": "Idiomatic expressions and dress codes.",
          "impact": "A clever lateral grouping crossing between technology, slang, and fashion."
        }
      }
    ]
  },
  {
    "id": 103,
    "title": "Wild Creatures & Habitats",
    "topic": "science",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Animals",
      "Nature",
      "Biology",
      "Science"
    ],
    "categories": [
      {
        "name": "BIG CAT SPECIES",
        "color": "yellow",
        "items": [
          "LION",
          "TIGER",
          "LEOPARD",
          "JAGUAR"
        ],
        "dossier": {
          "summary": "Apex predator felids belonging to the genus Panthera.",
          "legalOrTechBasis": "Zoological taxonomy and endangered wildlife conservation.",
          "impact": "Iconic flagship species protected under global biodiversity treaties like CITES."
        }
      },
      {
        "name": "ANIMALS WITH SHELLS",
        "color": "green",
        "items": [
          "TURTLE",
          "SNAIL",
          "CRAB",
          "ARMADILLO"
        ],
        "dossier": {
          "summary": "Creatures possessing a hardened protective carapace or shell.",
          "legalOrTechBasis": "Evolutionary biology and biological defense mechanisms.",
          "impact": "Diverse evolutionary adaptations protecting vulnerable organisms from predators."
        }
      },
      {
        "name": "POLLINATING INSECTS & BIRDS",
        "color": "blue",
        "items": [
          "BEE",
          "BUTTERFLY",
          "HUMMINGBIRD",
          "MOTH"
        ],
        "dossier": {
          "summary": "Creatures vital for plant reproduction and global agriculture by transferring pollen.",
          "legalOrTechBasis": "Ecological ecosystem services and agricultural food security.",
          "impact": "Crucial for 75% of global food crops; central to ecological conservation policies."
        }
      },
      {
        "name": "WORDS THAT CAN PRECEDE 'PRINT'",
        "color": "purple",
        "items": [
          "FOOT",
          "PAW",
          "FINGER",
          "CARBON"
        ],
        "dossier": {
          "summary": "Words that combine with 'Print' (Footprint, Pawprint, Fingerprint, Carbon footprint).",
          "legalOrTechBasis": "Linguistic compounds spanning biology, forensics, and climate metrics.",
          "impact": "A lateral puzzle bridging physical animal tracks with environmental accounting."
        }
      }
    ]
  },
  {
    "id": 201,
    "title": "Cinema, Music & Entertainment",
    "topic": "culture",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Cinema",
      "Music",
      "Pop Culture",
      "Streaming"
    ],
    "categories": [
      {
        "name": "MAJOR VIDEO STREAMING PLATFORMS",
        "color": "yellow",
        "items": [
          "NETFLIX",
          "DISNEY PLUS",
          "PRIME VIDEO",
          "MAX"
        ],
        "dossier": {
          "summary": "Leading digital video-on-demand subscription services.",
          "legalOrTechBasis": "Digital media distribution and copyright licensing.",
          "impact": "Transformed entertainment consumption and global media streaming habits."
        }
      },
      {
        "name": "ORIGINAL AVENGERS SUPERHEROES",
        "color": "green",
        "items": [
          "IRON MAN",
          "THOR",
          "HULK",
          "BLACK WIDOW"
        ],
        "dossier": {
          "summary": "Foundational superhero characters from Marvel comic books and cinematic universe.",
          "legalOrTechBasis": "Cultural franchise IP and global pop culture storytelling.",
          "impact": "Demonstrates the immense commercial reach of licensed intellectual property."
        }
      },
      {
        "name": "MUSIC RECORD FORMATS THROUGH HISTORY",
        "color": "blue",
        "items": [
          "VINYL",
          "CASSETTE",
          "CD",
          "MP3"
        ],
        "dossier": {
          "summary": "Physical and digital mediums used to record and play audio over the past century.",
          "legalOrTechBasis": "Acoustic recording engineering and technological transitions.",
          "impact": "Traces the technical democratization of recorded music from analogue grooves to digital streams."
        }
      },
      {
        "name": "WORDS THAT CAN PRECEDE 'TRACK'",
        "color": "purple",
        "items": [
          "SOUND",
          "RACE",
          "FAST",
          "OFF"
        ],
        "dossier": {
          "summary": "Common phrases joined with 'Track' (Soundtrack, Racetrack, Fast track, Off track).",
          "legalOrTechBasis": "Vernacular idioms and transport terminology.",
          "impact": "Lateral wordplay challenging players to look past movie soundtracks to find compound phrases."
        }
      }
    ]
  },
  {
    "id": 202,
    "title": "Board Games, Cards & Play",
    "topic": "culture",
    "audience": "Everyone",
    "difficulty": "Intermediate",
    "tags": [
      "Games",
      "Culture",
      "Play",
      "Recreation"
    ],
    "categories": [
      {
        "name": "CLASSIC FAMILY BOARD GAMES",
        "color": "yellow",
        "items": [
          "MONOPOLY",
          "SCRABBLE",
          "CLUE",
          "CHESS"
        ],
        "dossier": {
          "summary": "Enduring tabletop games played across generations.",
          "legalOrTechBasis": "Social recreation and game theory classics.",
          "impact": "Cultural touchstones that have influenced logic, trade negotiation, and linguistic fun."
        }
      },
      {
        "name": "SUITS IN A STANDARD DECK OF CARDS",
        "color": "green",
        "items": [
          "HEARTS",
          "DIAMONDS",
          "CLUBS",
          "SPADES"
        ],
        "dossier": {
          "summary": "The four traditional card suits in French-suited playing card decks.",
          "legalOrTechBasis": "Traditional card symbology and recreational gaming standards.",
          "impact": "Universal iconography recognized in games, mathematics, and probability theory."
        }
      },
      {
        "name": "TERMS USED IN CHESS",
        "color": "blue",
        "items": [
          "CHECKMATE",
          "STALEMATE",
          "CASTLE",
          "EN PASSANT"
        ],
        "dossier": {
          "summary": "Official rules and positional states in the game of chess.",
          "legalOrTechBasis": "FIDE (International Chess Federation) official handbook rules.",
          "impact": "Classic tactical concepts frequently used as metaphors in international diplomacy and military strategy."
        }
      },
      {
        "name": "THINGS THAT HAVE A 'KING'",
        "color": "purple",
        "items": [
          "MONARCHY",
          "MATTRESS",
          "CRAB",
          "BURGER"
        ],
        "dossier": {
          "summary": "Things paired with 'King' (Monarchy, King-size mattress, King crab, Burger King).",
          "legalOrTechBasis": "Commercial naming, culinary species, and bedroom furniture.",
          "impact": "Humorous lateral connections linking royalty to king-size beds and fast food."
        }
      }
    ]
  },
  {
    "id": 301,
    "title": "The Solar System & Earth Science",
    "topic": "science",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Space",
      "Planets",
      "Science",
      "Nature"
    ],
    "categories": [
      {
        "name": "ROCKY INNER PLANETS",
        "color": "yellow",
        "items": [
          "MERCURY",
          "VENUS",
          "EARTH",
          "MARS"
        ],
        "dossier": {
          "summary": "Terrestrial planets orbiting closest to the Sun composed mainly of rock and metal.",
          "legalOrTechBasis": "Planetary astronomy and astrophysics.",
          "impact": "Foundational astronomical knowledge taught globally in primary education."
        }
      },
      {
        "name": "RENEWABLE ENERGY SOURCES",
        "color": "green",
        "items": [
          "SOLAR",
          "WIND",
          "HYDRO",
          "GEOTHERMAL"
        ],
        "dossier": {
          "summary": "Naturally replenishing energy systems that produce zero direct greenhouse emissions.",
          "legalOrTechBasis": "UN Sustainable Development Goal 7 (Affordable and Clean Energy) and Paris Agreement.",
          "impact": "The backbone of global climate transition policy and decarbonization strategies."
        }
      },
      {
        "name": "TYPES OF WEATHER CLOUDS",
        "color": "blue",
        "items": [
          "CUMULUS",
          "STRATUS",
          "CIRRUS",
          "NIMBUS"
        ],
        "dossier": {
          "summary": "Fundamental meteorological cloud classifications based on altitude and formation.",
          "legalOrTechBasis": "World Meteorological Organization (WMO) International Cloud Atlas.",
          "impact": "Essential indicators for weather forecasting, climate modeling, and aviation safety."
        }
      },
      {
        "name": "WORDS PRECEDING 'LIGHT'",
        "color": "purple",
        "items": [
          "MOON",
          "TRAFFIC",
          "FLASH",
          "DAY"
        ],
        "dossier": {
          "summary": "Words that compound with 'Light' (Moonlight, Traffic light, Flashlight, Daylight).",
          "legalOrTechBasis": "Linguistic compounds connecting celestial bodies, road transit, and hand tools.",
          "impact": "Encourages lateral thinking away from physics photons to everyday phrases."
        }
      }
    ]
  },
  {
    "id": 401,
    "title": "Ancient Civilizations & Great Wonders",
    "topic": "history",
    "audience": "Everyone",
    "difficulty": "Intermediate",
    "tags": [
      "History",
      "Ancient",
      "Civilizations",
      "Heritage"
    ],
    "categories": [
      {
        "name": "ANCIENT CRADLES OF CIVILIZATION",
        "color": "yellow",
        "items": [
          "MESOPOTAMIA",
          "EGYPT",
          "INDUS VALLEY",
          "YELLOW RIVER"
        ],
        "dossier": {
          "summary": "Early river valleys where urban civilization, agriculture, and writing independently emerged.",
          "legalOrTechBasis": "World history, archaeological records, and early human development.",
          "impact": "The historical origins of codified law (Code of Hammurabi) and organized social governance."
        }
      },
      {
        "name": "REVOLUTIONARY HISTORICAL INVENTIONS",
        "color": "green",
        "items": [
          "PRINTING PRESS",
          "COMPASS",
          "STEAM ENGINE",
          "TELEGRAPH"
        ],
        "dossier": {
          "summary": "Breakthrough inventions that radically accelerated human communication, trade, and industry.",
          "legalOrTechBasis": "History of technology and industrial transformations.",
          "impact": "Precedents for how transformative technologies (like AI today) reshape societal institutions."
        }
      },
      {
        "name": "HISTORICAL MONARCHICAL TITLES",
        "color": "blue",
        "items": [
          "PHARAOH",
          "EMPEROR",
          "SULTAN",
          "TSAR"
        ],
        "dossier": {
          "summary": "Sovereign titles assumed by historic rulers in Egypt, Rome/China, the Ottoman Empire, and Russia.",
          "legalOrTechBasis": "Comparative political history and sovereign dynastic titles.",
          "impact": "Illustrates differing historical structures of sovereign authority and supreme legal power."
        }
      },
      {
        "name": "WORDS THAT CAN PRECEDE 'AGE'",
        "color": "purple",
        "items": [
          "STONE",
          "BRONZE",
          "IRON",
          "GOLDEN"
        ],
        "dossier": {
          "summary": "Eras paired with 'Age' (Stone Age, Bronze Age, Iron Age, Golden Age).",
          "legalOrTechBasis": "Archaeological three-age system hybridized with idiomatic metaphors.",
          "impact": "A lateral puzzle bridging material epochs with metaphorical eras of prosperity."
        }
      }
    ]
  },
  {
    "id": 501,
    "title": "Democracy, Rights & The Ballot Box",
    "topic": "politics",
    "audience": "Civil Society",
    "difficulty": "Intermediate",
    "tags": [
      "Democracy",
      "Voting",
      "Rights",
      "Civics"
    ],
    "categories": [
      {
        "name": "FUNDAMENTAL RIGHTS IN A DEMOCRACY",
        "color": "yellow",
        "items": [
          "FREE SPEECH",
          "ASSEMBLY",
          "VOTING",
          "RELIGION"
        ],
        "dossier": {
          "summary": "Universal civil liberties protected in modern constitutional democracies and human rights declarations.",
          "legalOrTechBasis": "Universal Declaration of Human Rights (UDHR 1948) Articles 18, 19, 20, 21.",
          "impact": "The cornerstone principles shielding citizens from authoritarian overreach and algorithmic suppression."
        }
      },
      {
        "name": "PARTS OF AN ELECTION PROCESS",
        "color": "green",
        "items": [
          "CAMPAIGN",
          "BALLOT",
          "POLLING",
          "DEBATE"
        ],
        "dossier": {
          "summary": "Standard civic components through which voters select their political representatives.",
          "legalOrTechBasis": "Electoral law and democratic electoral commissions.",
          "impact": "The foundational civic mechanism ensuring peaceful transfer of power based on citizen consent."
        }
      },
      {
        "name": "THREE BRANCHES OF GOVERNMENT & THE FOURTH ESTATE",
        "color": "blue",
        "items": [
          "EXECUTIVE",
          "LEGISLATIVE",
          "JUDICIAL",
          "PRESS"
        ],
        "dossier": {
          "summary": "Constitutional separation of powers complemented by an independent investigative free press.",
          "legalOrTechBasis": "Montesquieu 'The Spirit of the Laws' (1748) and constitutional balance of power doctrine.",
          "impact": "Ensures checks and balances so no single individual or state organ exercises unchecked control."
        }
      },
      {
        "name": "WORDS PRECEDING 'PARTY'",
        "color": "purple",
        "items": [
          "POLITICAL",
          "TEA",
          "BIRTHDAY",
          "THIRD"
        ],
        "dossier": {
          "summary": "Varied terms joined with 'Party' (Political party, Tea party, Birthday party, Third party).",
          "legalOrTechBasis": "Civic organization terms blended with historical events and social celebrations.",
          "impact": "Cleverly connects parliamentary elections with cake and British colonial tea protests!"
        }
      }
    ]
  },
  {
    "id": 601,
    "title": "Courtroom Basics & The Trial",
    "topic": "law",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "Law",
      "Courts",
      "Trial",
      "Justice"
    ],
    "categories": [
      {
        "name": "KEY PARTICIPANTS IN A COURTROOM",
        "color": "yellow",
        "items": [
          "JUDGE",
          "JURY",
          "PROSECUTOR",
          "DEFENDANT"
        ],
        "dossier": {
          "summary": "The essential human actors present during an adversarial criminal trial.",
          "legalOrTechBasis": "Constitutional due process rights and courtroom procedure.",
          "impact": "Ensures a structured, impartial forum for evaluating evidence and administering justice."
        }
      },
      {
        "name": "TYPES OF LEGAL EVIDENCE",
        "color": "green",
        "items": [
          "TESTIMONY",
          "FINGERPRINT",
          "DOCUMENT",
          "SURVEILLANCE"
        ],
        "dossier": {
          "summary": "Forms of proof presented to convince a finder of fact regarding the truth of a matter.",
          "legalOrTechBasis": "Rules of Evidence (Federal Rules of Evidence Rule 401/402).",
          "impact": "Regulates what data may be admitted to prevent unreliable or prejudicial information from tainting verdicts."
        }
      },
      {
        "name": "POSSIBLE TRIAL VERDICTS & FINDINGS",
        "color": "blue",
        "items": [
          "GUILTY",
          "ACQUITTED",
          "MISTRIAL",
          "DISMISSED"
        ],
        "dossier": {
          "summary": "Formal judicial determinations resolving a legal charge or complaint.",
          "legalOrTechBasis": "Criminal and civil procedure jurisprudence.",
          "impact": "Provides binding closure, triggering sentencing, exoneration, or procedural refiling."
        }
      },
      {
        "name": "WORDS THAT CAN PRECEDE 'SUIT'",
        "color": "purple",
        "items": [
          "LAW",
          "SPACE",
          "SWIM",
          "BIRTHDAY"
        ],
        "dossier": {
          "summary": "Words combined with 'Suit' (Lawsuit, Spacesuit, Swimsuit, Birthday suit).",
          "legalOrTechBasis": "Playful lateral idioms crossing civil litigation with apparel and astronautics.",
          "impact": "A lighthearted lateral grouping uniting serious court filings with casual clothing."
        }
      }
    ]
  },
  {
    "id": 701,
    "title": "Diplomacy, Borders & Sovereignty",
    "topic": "ir",
    "audience": "Civil Society",
    "difficulty": "Intermediate",
    "tags": [
      "Diplomacy",
      "Passports",
      "UN",
      "IR"
    ],
    "categories": [
      {
        "name": "PERMANENT MEMBERS OF THE UN SECURITY COUNCIL (P5)",
        "color": "yellow",
        "items": [
          "UNITED STATES",
          "CHINA",
          "UNITED KINGDOM",
          "FRANCE"
        ],
        "dossier": {
          "summary": "Permanent members of the UN Security Council holding veto power over substantive resolutions.",
          "legalOrTechBasis": "United Nations Charter Article 23 (omitting Russia to form a distinct 4-item set).",
          "impact": "The institutional structure governing international collective security and peace enforcement."
        }
      },
      {
        "name": "DOCUMENTS NEEDED FOR INTERNATIONAL TRAVEL",
        "color": "green",
        "items": [
          "PASSPORT",
          "VISA",
          "BOARDING PASS",
          "CUSTOMS FORM"
        ],
        "dossier": {
          "summary": "Official state and transport instruments required to cross international state frontiers.",
          "legalOrTechBasis": "Immigration control and border sovereignty standards (ICAO Doc 9303).",
          "impact": "Regulates sovereign movement of persons and enforces nationality laws globally."
        }
      },
      {
        "name": "RANKS IN DIPLOMATIC MISSIONS",
        "color": "blue",
        "items": [
          "AMBASSADOR",
          "ENVOY",
          "ATTACHE",
          "CONSUL"
        ],
        "dossier": {
          "summary": "Official titles held by state representatives serving in overseas embassies and consulates.",
          "legalOrTechBasis": "Vienna Convention on Diplomatic Relations (1961) Article 14.",
          "impact": "Protects international communication channels through diplomatic immunity and sovereign representation."
        }
      },
      {
        "name": "WORDS THAT CAN PRECEDE 'TREATY'",
        "color": "purple",
        "items": [
          "PEACE",
          "TRADE",
          "EXTRADITION",
          "SECRET"
        ],
        "dossier": {
          "summary": "Varieties of international legal compacts (Peace treaty, Trade treaty, Extradition treaty, Secret treaty).",
          "legalOrTechBasis": "Vienna Convention on the Law of Treaties (1969) and bilateral statecraft.",
          "impact": "Highlights the distinct functional purposes for which sovereign nations enter binding covenants."
        }
      }
    ]
  },
  {
    "id": 1,
    "title": "The Brussels Effect & Beyond",
    "topic": "ai",
    "audience": "Specialist",
    "difficulty": "Intermediate",
    "tags": [
      "Policy",
      "Governance",
      "EU AI Act"
    ],
    "categories": [
      {
        "name": "EU AI ACT PROHIBITED PRACTICES (ART. 5)",
        "color": "yellow",
        "items": [
          "SOCIAL SCORING",
          "EMOTION RECOGNITION",
          "BIOMETRIC CATEGORIZATION",
          "COGNITIVE MANIPULATION"
        ],
        "dossier": {
          "summary": "Practices carrying unacceptable risk outlawed entirely under Article 5 of Regulation (EU) 2024/1689.",
          "legalOrTechBasis": "EU AI Act (Regulation (EU) 2024/1689), Chapter II, Article 5.",
          "impact": "Sets a global extraterritorial benchmark for banned algorithmic interventions infringing fundamental human rights."
        }
      },
      {
        "name": "AI SAFETY SUMMIT HOST CITIES",
        "color": "green",
        "items": [
          "BLETCHLEY",
          "SEOUL",
          "PARIS",
          "SAN FRANCISCO"
        ],
        "dossier": {
          "summary": "Host locations of the high-level international AI Safety Summits and Action Summits (2023–2025).",
          "legalOrTechBasis": "Bletchley Park Declaration (UK 2023), Seoul Ministerial (Korea 2024), Paris AI Action Summit (France 2025).",
          "impact": "Reflects the shifting geopolitical center of gravity for multilateral frontier safety agreements and testbed coordination."
        }
      },
      {
        "name": "MACHINE LEARNING LIFECYCLE PHASES",
        "color": "blue",
        "items": [
          "PRE-TRAINING",
          "FINE-TUNING",
          "EVALUATION",
          "INFERENCE"
        ],
        "dossier": {
          "summary": "The standard sequential computational pipeline for developing and deploying foundation models.",
          "legalOrTechBasis": "NIST AI Risk Management Framework (AI RMF 1.0) & Frontier Model Post-Training Workflows.",
          "impact": "Regulatory obligations (e.g. transparency, copyright audits, red teaming) attach differentially to distinct lifecycle phases."
        }
      },
      {
        "name": "WORDS PRECEDING 'INTELLIGENCE'",
        "color": "purple",
        "items": [
          "ARTIFICIAL",
          "COLLECTIVE",
          "SOVEREIGN",
          "EMBODIED"
        ],
        "dossier": {
          "summary": "Linguistic compounds in tech policy modifying 'Intelligence' (Artificial, Collective, Sovereign, Embodied).",
          "legalOrTechBasis": "Conceptual taxonomy in contemporary computational philosophy and sovereign AI industrial policy.",
          "impact": "Highlights the expansion of the AI discourse from simple algorithmic automation to geopolitical and physical embodiments."
        }
      }
    ]
  },
  {
    "id": 2,
    "title": "Autonomous Weapons & Warfare",
    "topic": "law",
    "audience": "Specialist",
    "difficulty": "Advanced",
    "tags": [
      "LAWS",
      "IHL",
      "Geneva Conventions",
      "Defense"
    ],
    "categories": [
      {
        "name": "CARDINAL IHL PRINCIPLES GOVERNING TARGETING",
        "color": "yellow",
        "items": [
          "DISTINCTION",
          "PROPORTIONALITY",
          "MILITARY NECESSITY",
          "PRECAUTION"
        ],
        "dossier": {
          "summary": "Fundamental pillars of International Humanitarian Law that restrict all lawful use of kinetic force and autonomous weapons.",
          "legalOrTechBasis": "1949 Geneva Conventions & 1977 Additional Protocol I (Articles 48, 51, 52, 57).",
          "impact": "Legal baseline against which autonomous weapons systems (LAWS) targeting algorithms must be formally reviewed under Article 36."
        }
      },
      {
        "name": "PILLARS OF RESPONSIBLE MILITARY AI (US DOD DIR 3000.09)",
        "color": "green",
        "items": [
          "RESPONSIBLE",
          "EQUITABLE",
          "TRACEABLE",
          "GOVERNABLE"
        ],
        "dossier": {
          "summary": "Ethical principles and engineering mandates governing autonomy in weapon systems under updated US Department of Defense policy.",
          "legalOrTechBasis": "DoD Directive 3000.09 ('Autonomy in Weapon Systems') & Defense Innovation Board AI Principles.",
          "impact": "Establishes institutional design requirements including fail-safes, human oversight, and testing before kinetic deployment."
        }
      },
      {
        "name": "CCW GGE ON LAWS NEGOTIATION CONCEPTS",
        "color": "blue",
        "items": [
          "HUMAN CONTROL",
          "CRITICAL FUNCTIONS",
          "TARGET PROFILES",
          "ARTICLE 36 REVIEW"
        ],
        "dossier": {
          "summary": "Key normative touchstones debated at the UN Convention on Certain Conventional Weapons (CCW) Group of Governmental Experts.",
          "legalOrTechBasis": "CCW GGE on LAWS 11 Guiding Principles (Geneva Framework).",
          "impact": "Defines the frontier of multilateral arms control negotiations on lethal autonomous weapons systems."
        }
      },
      {
        "name": "WORDS THAT CAN FOLLOW 'TARGET'",
        "color": "purple",
        "items": [
          "ACQUISITION",
          "AUDIENCE",
          "PRACTICE",
          "DISCRIMINATION"
        ],
        "dossier": {
          "summary": "Common compound words beginning with 'Target' (Target Acquisition, Target Audience, Target Practice, Target Discrimination).",
          "legalOrTechBasis": "Military sensor-to-shooter doctrine hybridized with marketing and statistical terminology.",
          "impact": "Demonstrates how kinetic targeting nomenclature crosses into general socio-technical and commercial vocabulary."
        }
      }
    ]
  },
  {
    "id": 3,
    "title": "Copyright, Code & Courts",
    "topic": "law",
    "audience": "Specialist",
    "difficulty": "Advanced",
    "tags": [
      "Law",
      "Copyright",
      "Caselaw",
      "Intellectual Property"
    ],
    "categories": [
      {
        "name": "FAIR USE DOCTRINE STATUTORY FACTORS (17 U.S.C. § 107)",
        "color": "yellow",
        "items": [
          "PURPOSE OF USE",
          "NATURE OF WORK",
          "AMOUNT SUBSTANTIALITY",
          "MARKET EFFECT"
        ],
        "dossier": {
          "summary": "The four-part balancing test US courts apply to evaluate whether AI training constitutes copyright infringement or fair use.",
          "legalOrTechBasis": "17 U.S. Code § 107 (Limitations on Exclusive Rights: Fair Use).",
          "impact": "The primary legal battleground determining whether scraping copyrighted web content to train foundation models is lawful."
        }
      },
      {
        "name": "PLAINTIFFS IN LANDMARK AI COPYRIGHT LAWSUITS",
        "color": "green",
        "items": [
          "NEW YORK TIMES",
          "GETTY IMAGES",
          "AUTHORS GUILD",
          "UNIVERSAL MUSIC"
        ],
        "dossier": {
          "summary": "Major copyright owners asserting commercial infringement against OpenAI, Stability AI, Anthropic, and Suno/Udio.",
          "legalOrTechBasis": "NYT v. OpenAI (SDNY); Getty Images v. Stability AI (D. Del & UK EWHC); Concord Music v. Anthropic (M.D. Tenn).",
          "impact": "Precedents that will dictate licensing models, data transparency, and potential billions in statutory damages."
        }
      },
      {
        "name": "SYNTHETIC MEDIA WATERMARKING & PROVENANCE PROTOCOLS",
        "color": "blue",
        "items": [
          "C2PA",
          "SYNTHID",
          "DIGITAL WATERMARK",
          "CRYPTOGRAPHIC HASH"
        ],
        "dossier": {
          "summary": "Technical standards and provenance architectures deployed to certify authenticity and trace AI-generated media.",
          "legalOrTechBasis": "Coalition for Content Provenance and Authenticity (C2PA) & Google SynthID; mandated in EU AI Act Article 50.",
          "impact": "Essential technical infrastructure for mitigating deepfakes, election interference, and content authenticity collapse."
        }
      },
      {
        "name": "WORDS ENDING IN 'WEIGHT'",
        "color": "purple",
        "items": [
          "LIGHT",
          "HEAVY",
          "MODEL",
          "DEAD"
        ],
        "dossier": {
          "summary": "Words forming standard English compound terms when followed by 'Weight' (Lightweight, Heavyweight, Model Weight, Deadweight).",
          "legalOrTechBasis": "Linguistic wordplay connecting neural network numerical parameters ('weights') with common adjectives.",
          "impact": "A clever lateral grouping testing double-meaning recognition between machine learning matrices and vernacular terms."
        }
      }
    ]
  },
  {
    "id": 4,
    "title": "Silicon Sovereignty & Compute",
    "topic": "ai",
    "audience": "Specialist",
    "difficulty": "Intermediate",
    "tags": [
      "Hardware",
      "Semiconductors",
      "Geopolitics",
      "Compute"
    ],
    "categories": [
      {
        "name": "LEADING AI ACCELERATOR CHIP FAMILIES",
        "color": "yellow",
        "items": [
          "BLACKWELL",
          "GAUDI",
          "TRAINIUM",
          "TPU"
        ],
        "dossier": {
          "summary": "Flagship hardware accelerators engineered specifically for massive matrix multiplication and LLM training.",
          "legalOrTechBasis": "Nvidia (Blackwell), Intel (Gaudi), AWS (Trainium), Google (TPU v5p/v6).",
          "impact": "Hardware silicon forms the critical bottleneck determining national technological capability and strategic sovereign AI parity."
        }
      },
      {
        "name": "KEY METRICS IN CHIP EXPORT CONTROLS",
        "color": "green",
        "items": [
          "TOTAL PROCESSING PERFORMANCE",
          "INTERCONNECT BANDWIDTH",
          "MEMORY DENSITY",
          "DIE SIZE"
        ],
        "dossier": {
          "summary": "Technical thresholds established by the US Bureau of Industry and Security (BIS) to restrict advanced semiconductor shipments.",
          "legalOrTechBasis": "US Export Administration Regulations (EAR) 15 C.F.R. Parts 740, 742, 744 (October 2022/2023 updates).",
          "impact": "Defines the boundary between civilian consumer silicon and geostrategically restricted dual-use AI supercomputing hardware."
        }
      },
      {
        "name": "CRITICAL FOUNDRY SUPPLY CHAIN HUBS",
        "color": "blue",
        "items": [
          "HSINCHU",
          "VELDHOVEN",
          "TAENAN",
          "HILLSBORO"
        ],
        "dossier": {
          "summary": "Geographical epicenters of global semiconductor manufacturing: TSMC fabs (Taiwan), ASML lithography (Netherlands), Intel R&D (US).",
          "legalOrTechBasis": "CHIPS and Science Act of 2022 & EU Chips Act strategic vulnerability assessments.",
          "impact": "Extreme geographical concentration creates acute systemic fragility in global AI infrastructure resilience."
        }
      },
      {
        "name": "WORDS PRECEDING 'SCALE'",
        "color": "purple",
        "items": [
          "GREY",
          "TIME",
          "FLOP",
          "FISH"
        ],
        "dossier": {
          "summary": "Words that pair with 'Scale' (Greyscale, Timescale, Flopscale / Exascale, Fish-scale).",
          "legalOrTechBasis": "Lateral linguistic association blending computational scaling laws with visual and vernacular phrases.",
          "impact": "Tests lateral vocabulary pivots away from technical AI scaling laws."
        }
      }
    ]
  },
  {
    "id": 5,
    "title": "Frontier Foundation Models",
    "topic": "ai",
    "audience": "Everyone",
    "difficulty": "Beginner",
    "tags": [
      "LLMs",
      "Labs",
      "Open Weights",
      "Frontier"
    ],
    "categories": [
      {
        "name": "ANTHROPIC CLAUDE MODEL TIERS",
        "color": "yellow",
        "items": [
          "OPUS",
          "SONNET",
          "HAIKU",
          "INSTANT"
        ],
        "dossier": {
          "summary": "The tiered intelligence and latency nomenclature utilized across Anthropic's Claude 3/3.5 foundation family.",
          "legalOrTechBasis": "Anthropic Model Card specifications and frontier safety tier classifications.",
          "impact": "Exemplifies modern commercial compute-to-latency trade-off tiers in enterprise deployment."
        }
      },
      {
        "name": "OPEN-WEIGHTS FOUNDATION MODEL FAMILIES",
        "color": "green",
        "items": [
          "LLAMA",
          "MISTRAL",
          "QWEN",
          "DEEPSEEK"
        ],
        "dossier": {
          "summary": "Leading openly accessible model families published with downloadable weights by Meta, Mistral AI, Alibaba, and DeepSeek.",
          "legalOrTechBasis": "Open Source AI Definition (OSI 1.0) & US NTIA Dual-Use Foundation Model Open Weights Report.",
          "impact": "Drives intense policy debate regarding open-source innovation versus biosecurity and cyber proliferation risks."
        }
      },
      {
        "name": "GOOGLE AI MODEL SUFFIXES",
        "color": "blue",
        "items": [
          "FLASH",
          "PRO",
          "ULTRA",
          "NANO"
        ],
        "dossier": {
          "summary": "Size and optimization designations across Google's Gemini multimodal model portfolio.",
          "legalOrTechBasis": "Google DeepMind Gemini Architecture Technical Reports (Gemini 1.0/1.5/2.0).",
          "impact": "Spans on-device edge computing (Nano) to ultra-high compute frontier reasoning (Ultra)."
        }
      },
      {
        "name": "NAMED AFTER ASTRONOMICAL / MYTHOLOGICAL ENTITIES",
        "color": "purple",
        "items": [
          "GEMINI",
          "ATLAS",
          "ORION",
          "PHOENIX"
        ],
        "dossier": {
          "summary": "Codename terms shared between frontier AI projects and Greek constellations/titans (Gemini, Boston Dynamics Atlas, OpenAI Orion, Phoenix).",
          "legalOrTechBasis": "Naming mythology prevalent across Silicon Valley frontier labs.",
          "impact": "A deceptive red herring: Gemini belongs to astronomical codenames rather than Google suffixes here!"
        }
      }
    ]
  },
  {
    "id": 6,
    "title": "Global AI Governance & Treaties",
    "topic": "ir",
    "audience": "Specialist",
    "difficulty": "Advanced",
    "tags": [
      "International Law",
      "Treaties",
      "UN",
      "Diplomacy"
    ],
    "categories": [
      {
        "name": "MULTILATERAL AI GOVERNANCE INITIATIVES",
        "color": "yellow",
        "items": [
          "G7 HIROSHIMA PROCESS",
          "BLETCHLEY DECLARATION",
          "UN GLOBAL DIGITAL COMPACT",
          "COUNCIL OF EUROPE CONVENTION"
        ],
        "dossier": {
          "summary": "Major international frameworks and binding/soft-law instruments shaping global AI norms.",
          "legalOrTechBasis": "CETS No. 225 (Council of Europe Framework Convention on AI, Human Rights, Democracy and the Rule of Law, 2024).",
          "impact": "Represents the international community's shift from fragmented national rules to coherent multilateral regimes."
        }
      },
      {
        "name": "NATIONAL AI SAFETY INSTITUTES (AISI)",
        "color": "green",
        "items": [
          "NIST AISI",
          "UK AISI",
          "JAPAN AISI",
          "SINGAPORE AISI"
        ],
        "dossier": {
          "summary": "State-backed technical institutes established to conduct empirical safety evaluations on frontier foundation models.",
          "legalOrTechBasis": "International Network of AI Safety Institutes established at Seoul Summit (May 2024).",
          "impact": "Creates state technical sovereign capability to independently verify private sector safety claims before deployment."
        }
      },
      {
        "name": "OECD AI PRINCIPLES CORE VALUES",
        "color": "blue",
        "items": [
          "INCLUSIVE GROWTH",
          "HUMAN-CENTERED VALUES",
          "TRANSPARENCY",
          "ROBUSTNESS"
        ],
        "dossier": {
          "summary": "The foundational intergovernmental AI guidelines adopted by 40+ countries in 2019 and revised in 2024.",
          "legalOrTechBasis": "OECD Recommendation of the Council on Artificial Intelligence (OECD/LEGAL/0449).",
          "impact": "Served as the conceptual bedrock for the EU AI Act, G20 AI Principles, and dozens of national AI strategies."
        }
      },
      {
        "name": "WORDS ENDING IN 'NET'",
        "color": "purple",
        "items": [
          "RES",
          "CONV",
          "CABRO",
          "INTER"
        ],
        "dossier": {
          "summary": "Prefixes forming canonical neural networks or networks when joined to 'Net' (ResNet, ConvNet, Planet, InterNet).",
          "legalOrTechBasis": "Convolutional architectures (AlexNet/ConvNet, He et al. ResNet) blended with everyday nouns.",
          "impact": "A playful lateral pattern highlighting computer vision architecture naming conventions."
        }
      }
    ]
  }
];

  // 3. MODULAR TOPIC CATEGORY BANK (For Dynamic Mix-and-Match Generator)
  // Each category is tagged so the engine can assemble custom balanced games on the fly!
  const CATEGORY_BANK = [
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "yellow",
    "name": "EVERYDAY CITRUS FRUITS",
    "items": [
      "LEMON",
      "LIME",
      "ORANGE",
      "GRAPEFRUIT"
    ],
    "dossier": {
      "summary": "Common citrus fruits rich in vitamin C.",
      "legalOrTechBasis": "Botany & agriculture.",
      "impact": "Everyday culinary staple."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "green",
    "name": "COLORS IN A RAINBOW",
    "items": [
      "RED",
      "VIOLET",
      "INDIGO",
      "YELLOW"
    ],
    "dossier": {
      "summary": "Visible light spectral colors discovered by Isaac Newton.",
      "legalOrTechBasis": "Optics.",
      "impact": "Universal science standard."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "blue",
    "name": "PARTS OF A BICYCLE",
    "items": [
      "HANDLEBAR",
      "SADDLE",
      "PEDAL",
      "SPOKE"
    ],
    "dossier": {
      "summary": "Essential mechanical components of a bicycle.",
      "legalOrTechBasis": "Everyday transport mechanics.",
      "impact": "Zero-emission personal mobility."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS PRECEDING 'CAKE'",
    "items": [
      "CUP",
      "PAN",
      "CHEESE",
      "SHORT"
    ],
    "dossier": {
      "summary": "Words forming types of cake (Cupcake, Pancake, Cheesecake, Shortcake).",
      "legalOrTechBasis": "Culinary wordplay.",
      "impact": "Sweet lateral thinking!"
    }
  },
  {
    "topic": "culture",
    "audience": "Everyone",
    "color": "yellow",
    "name": "MUSICAL INSTRUMENTS WITH STRINGS",
    "items": [
      "GUITAR",
      "VIOLIN",
      "CELLO",
      "HARP"
    ],
    "dossier": {
      "summary": "Acoustic instruments that generate pitch via vibrating strings.",
      "legalOrTechBasis": "Acoustics & music theory.",
      "impact": "Universal artistic expression."
    }
  },
  {
    "topic": "culture",
    "audience": "Everyone",
    "color": "green",
    "name": "FAMOUS WORLD MUSEUMS",
    "items": [
      "LOUVRE",
      "PRADO",
      "MET",
      "UFFIZI"
    ],
    "dossier": {
      "summary": "Iconic national cultural institutions preserving world artistic heritage.",
      "legalOrTechBasis": "Cultural heritage curation.",
      "impact": "Preserves humanity's collective artistic memory."
    }
  },
  {
    "topic": "culture",
    "audience": "Everyone",
    "color": "blue",
    "name": "GENRES OF FILM",
    "items": [
      "HORROR",
      "WESTERN",
      "COMEDY",
      "THRILLER"
    ],
    "dossier": {
      "summary": "Standard narrative genres structuring cinema and screenwriting.",
      "legalOrTechBasis": "Film studies.",
      "impact": "Shapes storytelling formats."
    }
  },
  {
    "topic": "culture",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS BEFORE 'STAR'",
    "items": [
      "POP",
      "ROCK",
      "MOVIE",
      "SHOOTING"
    ],
    "dossier": {
      "summary": "Words compounding with 'Star' (Popstar, Rockstar, Moviestar, Shooting star).",
      "legalOrTechBasis": "Pop culture idioms.",
      "impact": "Pivots from celestial astronomy to celebrity fame."
    }
  },
  {
    "topic": "science",
    "audience": "Everyone",
    "color": "yellow",
    "name": "STATES OF MATTER IN EVERYDAY PHYSICS",
    "items": [
      "SOLID",
      "LIQUID",
      "GAS",
      "PLASMA"
    ],
    "dossier": {
      "summary": "The four fundamental observable states of physical matter.",
      "legalOrTechBasis": "Thermodynamics.",
      "impact": "Foundational physical sciences."
    }
  },
  {
    "topic": "science",
    "audience": "Civil Society",
    "color": "green",
    "name": "NOBLE GASES IN THE PERIODIC TABLE",
    "items": [
      "HELIUM",
      "NEON",
      "ARGON",
      "XENON"
    ],
    "dossier": {
      "summary": "Chemically inert elements with complete valence electron shells.",
      "legalOrTechBasis": "Chemistry.",
      "impact": "Lighting and scientific cryogenics."
    }
  },
  {
    "topic": "science",
    "audience": "Civil Society",
    "color": "blue",
    "name": "LAYERS OF EARTH'S ATMOSPHERE",
    "items": [
      "TROPOSPHERE",
      "STRATOSPHERE",
      "MESOSPHERE",
      "THERMOSPHERE"
    ],
    "dossier": {
      "summary": "Stratified atmospheric thermal layers shielding life on Earth.",
      "legalOrTechBasis": "Atmospheric physics.",
      "impact": "Regulates climate and satellite orbits."
    }
  },
  {
    "topic": "science",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS ENDING IN 'STONE'",
    "items": [
      "MILE",
      "LIME",
      "TOMB",
      "CORNER"
    ],
    "dossier": {
      "summary": "Words forming compounds with 'Stone' (Milestone, Limestone, Tombstone, Cornerstone).",
      "legalOrTechBasis": "Geology and architectural idioms.",
      "impact": "Bridges mineral rock with metrics and architecture."
    }
  },
  {
    "topic": "history",
    "audience": "Civil Society",
    "color": "yellow",
    "name": "ANCIENT GREEK PHILOSOPHERS",
    "items": [
      "SOCRATES",
      "PLATO",
      "ARISTOTLE",
      "PYTHAGORAS"
    ],
    "dossier": {
      "summary": "Pioneering thinkers who established Western epistemology, logic, and ethics.",
      "legalOrTechBasis": "Classical philosophy.",
      "impact": "The philosophical bedrock of logic and democratic theory."
    }
  },
  {
    "topic": "history",
    "audience": "Everyone",
    "color": "green",
    "name": "FAMOUS ARCHAEOLOGICAL SITES",
    "items": [
      "COLOSSEUM",
      "PARTHENON",
      "PETRA",
      "MACHU PICCHU"
    ],
    "dossier": {
      "summary": "UNESCO World Heritage sites preserving classical and pre-Columbian architecture.",
      "legalOrTechBasis": "UNESCO World Heritage Convention 1972.",
      "impact": "Protected cultural legacy of human civilization."
    }
  },
  {
    "topic": "history",
    "audience": "Civil Society",
    "color": "blue",
    "name": "HISTORICAL PEACE CONFERENCES",
    "items": [
      "WESTPHALIA",
      "VERSAILLES",
      "VIENNA",
      "YALTA"
    ],
    "dossier": {
      "summary": "Treaty negotiations that redrew international borders and state sovereignty.",
      "legalOrTechBasis": "International treaty history.",
      "impact": "Created modern concepts of nation-state sovereignty."
    }
  },
  {
    "topic": "history",
    "audience": "Everyone",
    "color": "purple",
    "name": "THINGS ASSOCIATED WITH 'GOLD'",
    "items": [
      "RUSH",
      "MINE",
      "MEDAL",
      "FINGER"
    ],
    "dossier": {
      "summary": "Words paired with 'Gold' (Gold rush, Goldmine, Gold medal, Goldfinger).",
      "legalOrTechBasis": "History, sports, and cinema wordplay.",
      "impact": "Fun lateral grouping linking California 1849 with James Bond!"
    }
  },
  {
    "topic": "politics",
    "audience": "Civil Society",
    "color": "yellow",
    "name": "FORMS OF GOVERNMENT",
    "items": [
      "MONARCHY",
      "REPUBLIC",
      "FEDERATION",
      "OLIGARCHY"
    ],
    "dossier": {
      "summary": "Institutional frameworks through which state sovereign authority is organized.",
      "legalOrTechBasis": "Comparative constitutional law.",
      "impact": "Determines citizen voice and democratic representation."
    }
  },
  {
    "topic": "politics",
    "audience": "Civil Society",
    "color": "green",
    "name": "CIVIL SOCIETY ADVOCACY TACTICS",
    "items": [
      "PETITION",
      "PROTEST",
      "BOYCOTT",
      "LOBBYING"
    ],
    "dossier": {
      "summary": "Methods used by grassroots citizens and NGOs to influence public policy.",
      "legalOrTechBasis": "Democratic participation rights.",
      "impact": "Drives legislative reform from environmental protections to civil rights."
    }
  },
  {
    "topic": "politics",
    "audience": "Civil Society",
    "color": "blue",
    "name": "CABINET EXECUTIVE MINISTRIES",
    "items": [
      "DEFENSE",
      "TREASURY",
      "EDUCATION",
      "JUSTICE"
    ],
    "dossier": {
      "summary": "Executive state departments administering national public policy.",
      "legalOrTechBasis": "Public administration.",
      "impact": "The functional delivery of public services and state governance."
    }
  },
  {
    "topic": "politics",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS THAT CAN PRECEDE 'POLL'",
    "items": [
      "EXIT",
      "OPINION",
      "STRAW",
      "TELEGRAPH"
    ],
    "dossier": {
      "summary": "Varieties of polls and historic communication (Exit poll, Opinion poll, Straw poll, Pole/Poll homophone).",
      "legalOrTechBasis": "Electoral science & linguistics.",
      "impact": "Lateral wordplay challenging players to see political sampling in phrases."
    }
  },
  {
    "topic": "law",
    "audience": "Everyone",
    "color": "yellow",
    "name": "EVERYDAY LEGAL DOCUMENTS",
    "items": [
      "CONTRACT",
      "WILL",
      "LEASE",
      "DEED"
    ],
    "dossier": {
      "summary": "Binding legal instruments governing property, inheritance, and agreements.",
      "legalOrTechBasis": "Civil contract and property law.",
      "impact": "Foundational legal instruments utilized by ordinary citizens."
    }
  },
  {
    "topic": "law",
    "audience": "Civil Society",
    "color": "green",
    "name": "CRIMINAL DEFENSE PLEAS",
    "items": [
      "NOT GUILTY",
      "SELF DEFENSE",
      "ALIBI",
      "INSANITY"
    ],
    "dossier": {
      "summary": "Affirmative defenses raised by defendants to challenge criminal culpability.",
      "legalOrTechBasis": "Criminal jurisprudence and Mens Rea doctrine.",
      "impact": "Protects fundamental fairness against wrongful conviction."
    }
  },
  {
    "topic": "law",
    "audience": "Specialist",
    "color": "blue",
    "name": "LATIN LEGAL MAXIMS",
    "items": [
      "HABEAS CORPUS",
      "BONA FIDE",
      "SUBPOENA",
      "MENS REA"
    ],
    "dossier": {
      "summary": "Foundational Latin maxims establishing core common-law principles.",
      "legalOrTechBasis": "Classical Roman law influence on contemporary courts.",
      "impact": "Underpins procedural safeguards from unlawful detention to intent."
    }
  },
  {
    "topic": "law",
    "audience": "Everyone",
    "color": "purple",
    "name": "THINGS THAT CAN BE 'PASSED'",
    "items": [
      "LAW",
      "EXAM",
      "TIME",
      "BATON"
    ],
    "dossier": {
      "summary": "Things that undergo 'passing' (Passed law, Passed exam, Passed time, Passed baton).",
      "legalOrTechBasis": "Cross-domain polysemy.",
      "impact": "Lateral connection connecting legislative enactment with sports relays and tests."
    }
  },
  {
    "topic": "ir",
    "audience": "Everyone",
    "color": "yellow",
    "name": "EUROPEAN CAPITAL CITIES",
    "items": [
      "PARIS",
      "BERLIN",
      "ROME",
      "MADRID"
    ],
    "dossier": {
      "summary": "Capital seats of government in major European democracies.",
      "legalOrTechBasis": "Geopolitics and European Union integration.",
      "impact": "Epicenters of European policy and multilateral governance."
    }
  },
  {
    "topic": "ir",
    "audience": "Civil Society",
    "color": "green",
    "name": "SPECIALIZED UN AGENCIES",
    "items": [
      "UNESCO",
      "UNICEF",
      "WHO",
      "UNHCR"
    ],
    "dossier": {
      "summary": "Specialized bodies of the United Nations managing health, children, education, and refugees.",
      "legalOrTechBasis": "UN Charter Article 57.",
      "impact": "Global delivery of humanitarian aid, public health, and human dignity."
    }
  },
  {
    "topic": "ir",
    "audience": "Specialist",
    "color": "blue",
    "name": "ECONOMIC SANCTIONS INSTRUMENTS",
    "items": [
      "ASSET FREEZE",
      "EMBARGO",
      "TRAVEL BAN",
      "SWIFT CUTOFF"
    ],
    "dossier": {
      "summary": "Non-kinetic coercive economic measures deployed to deter international violations.",
      "legalOrTechBasis": "UN Charter Chapter VII (Article 41) & OFAC sanctions regulations.",
      "impact": "The primary non-military pressure tool in modern international statecraft."
    }
  },
  {
    "topic": "ir",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS THAT CAN PRECEDE 'LINE'",
    "items": [
      "BORDER",
      "COAST",
      "DEAD",
      "FRONT"
    ],
    "dossier": {
      "summary": "Terms compounded with 'Line' (Borderline, Coastline, Deadline, Frontline).",
      "legalOrTechBasis": "Geography, military terminology, and project management.",
      "impact": "Lateral bridge from territorial frontiers to calendar deadlines."
    }
  },
  {
    "topic": "ai",
    "audience": "Everyone",
    "color": "yellow",
    "name": "SOCIAL MEDIA POST FORMATS",
    "items": [
      "STORY",
      "REEL",
      "POST",
      "SHORT"
    ],
    "dossier": {
      "summary": "Everyday content publication formats across Instagram, TikTok, and YouTube.",
      "legalOrTechBasis": "Consumer social platforms and user-generated content.",
      "impact": "The primary interface through which modern society creates and consumes media."
    }
  },
  {
    "topic": "ai",
    "audience": "Civil Society",
    "color": "green",
    "name": "DIGITAL PRIVACY & SECURITY TOOLS",
    "items": [
      "VPN",
      "PASSWORD MANAGER",
      "AD BLOCKER",
      "TWO FACTOR"
    ],
    "dossier": {
      "summary": "Essential digital hygiene tools protecting everyday citizens from tracking and identity theft.",
      "legalOrTechBasis": "Cybersecurity best practices and data self-defense.",
      "impact": "Empowers civil society against surveillance and algorithmic profiling."
    }
  },
  {
    "topic": "ai",
    "audience": "Specialist",
    "color": "blue",
    "name": "COMPUTER VISION TASKS",
    "items": [
      "OBJECT DETECTION",
      "SEGMENTATION",
      "DEPTH ESTIMATION",
      "IMAGE CLASSIFICATION"
    ],
    "dossier": {
      "summary": "Core visual perception tasks automated by convolutional and transformer networks.",
      "legalOrTechBasis": "Computer vision and autonomous navigation.",
      "impact": "Powers everything from medical imaging to autonomous vehicles."
    }
  },
  {
    "topic": "ai",
    "audience": "Everyone",
    "color": "purple",
    "name": "THINGS THAT CAN BE 'GENERATED'",
    "items": [
      "AI CONTENT",
      "ELECTRICITY",
      "LEADS",
      "REVENUE"
    ],
    "dossier": {
      "summary": "Diverse entities that are 'generated' (AI-generated content, electricity, sales leads, corporate revenue).",
      "legalOrTechBasis": "Commerce, energy, and generative computing.",
      "impact": "Lateral riddle highlighting the versatile verb 'generate'."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "yellow",
    "name": "POPULAR DOG BREEDS",
    "items": [
      "BEAGLE",
      "POODLE",
      "BULLDOG",
      "RETRIEVER"
    ],
    "dossier": {
      "summary": "Domesticated canine breeds recognized globally.",
      "legalOrTechBasis": "Zoology and companion animal welfare.",
      "impact": "Beloved family companions."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "green",
    "name": "VESSELS FOR WATER TRAVEL",
    "items": [
      "CANOE",
      "YACHT",
      "KAYAK",
      "FERRY"
    ],
    "dossier": {
      "summary": "Navigational vessels used for maritime and river transit.",
      "legalOrTechBasis": "Maritime navigation.",
      "impact": "Ancient and modern water transportation."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "blue",
    "name": "THINGS WITH TEETH",
    "items": [
      "COMB",
      "SAW",
      "GEAR",
      "ZIPPER"
    ],
    "dossier": {
      "summary": "Mechanical and grooming objects featuring serrated teeth.",
      "legalOrTechBasis": "Everyday mechanics and tooling.",
      "impact": "Clever lateral functional association."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS PRECEDING 'CARD'",
    "items": [
      "POST",
      "CREDIT",
      "WILD",
      "GIFT"
    ],
    "dossier": {
      "summary": "Terms paired with 'Card' (Postcard, Credit card, Wildcard, Gift card).",
      "legalOrTechBasis": "Commerce, gaming, and postal mail.",
      "impact": "Common compound noun wordplay."
    }
  },
  {
    "topic": "science",
    "audience": "Civil Society",
    "color": "yellow",
    "name": "SI BASE UNITS OF MEASUREMENT",
    "items": [
      "METER",
      "KILOGRAM",
      "SECOND",
      "KELVIN"
    ],
    "dossier": {
      "summary": "Standard metric base units defined by the International Bureau of Weights and Measures.",
      "legalOrTechBasis": "BIPM Metrology standards.",
      "impact": "The global foundation of scientific measurement."
    }
  },
  {
    "topic": "science",
    "audience": "Civil Society",
    "color": "green",
    "name": "BLOOD VESSELS IN HUMAN ANATOMY",
    "items": [
      "ARTERY",
      "VEIN",
      "CAPILLARY",
      "AORTA"
    ],
    "dossier": {
      "summary": "Tubular structures carrying blood through the circulatory system.",
      "legalOrTechBasis": "Human physiology.",
      "impact": "Essential cardiovascular biology."
    }
  },
  {
    "topic": "science",
    "audience": "Everyone",
    "color": "blue",
    "name": "OCEANS OF THE WORLD",
    "items": [
      "PACIFIC",
      "ATLANTIC",
      "INDIAN",
      "ARCTIC"
    ],
    "dossier": {
      "summary": "The major continuous bodies of salt water covering 71% of Earth.",
      "legalOrTechBasis": "UN Convention on the Law of the Sea (UNCLOS).",
      "impact": "Regulates marine biodiversity and global maritime trade."
    }
  },
  {
    "topic": "science",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS THAT CAN PRECEDE 'WAVE'",
    "items": [
      "HEAT",
      "SHOCK",
      "RADIO",
      "TIDAL"
    ],
    "dossier": {
      "summary": "Phrases joined with 'Wave' (Heatwave, Shockwave, Radiowave, Tidal wave).",
      "legalOrTechBasis": "Physics and meteorology.",
      "impact": "Bridges climate events with electromagnetic physics."
    }
  },
  {
    "topic": "culture",
    "audience": "Everyone",
    "color": "yellow",
    "name": "CLASSIC RETRO VIDEO GAMES",
    "items": [
      "TETRIS",
      "PACMAN",
      "PONG",
      "SPACE INVADERS"
    ],
    "dossier": {
      "summary": "Pioneering arcade and console video games that birthed the gaming industry.",
      "legalOrTechBasis": "Interactive digital entertainment history.",
      "impact": "Cultural landmarks in computing history."
    }
  },
  {
    "topic": "culture",
    "audience": "Civil Society",
    "color": "green",
    "name": "MUSICAL TEMPO MARKINGS",
    "items": [
      "ALLEGRO",
      "ANDANTE",
      "PRESTO",
      "LARGO"
    ],
    "dossier": {
      "summary": "Traditional Italian terms indicating the speed and mood of musical compositions.",
      "legalOrTechBasis": "Classical music theory.",
      "impact": "Universal acoustic performance language."
    }
  },
  {
    "topic": "culture",
    "audience": "Everyone",
    "color": "blue",
    "name": "COFFEE DRINK VARIATIONS",
    "items": [
      "ESPRESSO",
      "CAPPUCCINO",
      "LATTE",
      "AMERICANO"
    ],
    "dossier": {
      "summary": "Popular espresso-based coffee beverages enjoyed globally.",
      "legalOrTechBasis": "Culinary culture.",
      "impact": "Everyday cafe culture across cities worldwide."
    }
  },
  {
    "topic": "culture",
    "audience": "Everyone",
    "color": "purple",
    "name": "THINGS WITH A 'CHAIR'",
    "items": [
      "WHEEL",
      "ARM",
      "HIGH",
      "DECK"
    ],
    "dossier": {
      "summary": "Words forming types of chairs (Wheelchair, Armchair, Highchair, Deckchair).",
      "legalOrTechBasis": "Furniture design and accessibility.",
      "impact": "Clever lateral furniture grouping."
    }
  },
  {
    "topic": "history",
    "audience": "Civil Society",
    "color": "yellow",
    "name": "RENAISSANCE POLYMATHS & ARTISTS",
    "items": [
      "DA VINCI",
      "MICHELANGELO",
      "RAPHAEL",
      "DONATELLO"
    ],
    "dossier": {
      "summary": "Master painters, sculptors, and architects of the Italian Renaissance.",
      "legalOrTechBasis": "Art history and Renaissance humanism.",
      "impact": "Catalyzed humanism and scientific inquiry."
    }
  },
  {
    "topic": "history",
    "audience": "Everyone",
    "color": "green",
    "name": "SEVEN WONDERS OF THE ANCIENT WORLD",
    "items": [
      "PYRAMIDS",
      "COLOSSUS",
      "LIGHTHOUSE",
      "GARDENS"
    ],
    "dossier": {
      "summary": "Classical architectural marvels documented by Hellenic travelers.",
      "legalOrTechBasis": "Classical antiquities.",
      "impact": "Early human monuments celebrating monumental engineering."
    }
  },
  {
    "topic": "history",
    "audience": "Civil Society",
    "color": "blue",
    "name": "HISTORICAL CURRENCIES BEFORE THE EURO",
    "items": [
      "FRANC",
      "DEUTSCHE MARK",
      "LIRA",
      "PESETA"
    ],
    "dossier": {
      "summary": "National currencies replaced by the single European currency in 2002.",
      "legalOrTechBasis": "Treaty of Maastricht & European Economic and Monetary Union.",
      "impact": "The largest monetary integration experiment in human history."
    }
  },
  {
    "topic": "history",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS THAT CAN PRECEDE 'TOWER'",
    "items": [
      "EIFFEL",
      "CLOCK",
      "CONTROL",
      "IVORY"
    ],
    "dossier": {
      "summary": "Words paired with 'Tower' (Eiffel Tower, Clock tower, Control tower, Ivory tower).",
      "legalOrTechBasis": "Architecture, aviation, and academic idioms.",
      "impact": "Lateral wordplay from Paris monuments to airport runways."
    }
  },
  {
    "topic": "law",
    "audience": "Specialist",
    "color": "yellow",
    "name": "INTELLECTUAL PROPERTY CATEGORIES",
    "items": [
      "PATENT",
      "COPYRIGHT",
      "TRADEMARK",
      "TRADE SECRET"
    ],
    "dossier": {
      "summary": "The four primary legal regimes protecting intangible creations of the human intellect.",
      "legalOrTechBasis": "WIPO Conventions and national IP statutory codes.",
      "impact": "Dictates the boundaries of innovation, open access, and commercial exclusivity."
    }
  },
  {
    "topic": "law",
    "audience": "Civil Society",
    "color": "green",
    "name": "CIVIL LIBERTIES IN CRIMINAL PROCEDURE",
    "items": [
      "DUE PROCESS",
      "SPEEDY TRIAL",
      "DOUBLE JEOPARDY",
      "RIGHT TO COUNSEL"
    ],
    "dossier": {
      "summary": "Fundamental procedural guarantees protecting individuals facing state prosecution.",
      "legalOrTechBasis": "US Bill of Rights (Amendments 5 & 6) and ECHR Article 6.",
      "impact": "Essential legal shields guarding against wrongful imprisonment."
    }
  },
  {
    "topic": "law",
    "audience": "Everyone",
    "color": "blue",
    "name": "CRIMINAL OFFENSE CATEGORIES",
    "items": [
      "ARSON",
      "FORGERY",
      "PERJURY",
      "LARCENY"
    ],
    "dossier": {
      "summary": "Recognized common-law offenses against property, state administration, and truth.",
      "legalOrTechBasis": "Penal code statutory jurisprudence.",
      "impact": "The core taxonomy of criminal prohibition."
    }
  },
  {
    "topic": "law",
    "audience": "Everyone",
    "color": "purple",
    "name": "THINGS THAT CAN BE 'HELD'",
    "items": [
      "COURT",
      "BREATH",
      "HANDS",
      "GRUDGE"
    ],
    "dossier": {
      "summary": "Things that can be 'held' (Held court, Held breath, Held hands, Held a grudge).",
      "legalOrTechBasis": "Everyday linguistic idioms.",
      "impact": "Playful lateral bridge connecting judicial proceedings with emotion and physical touch."
    }
  },
  {
    "topic": "ai",
    "audience": "Specialist",
    "color": "yellow",
    "name": "FOUNDATIONAL NEURAL NETWORK TYPES",
    "items": [
      "TRANSFORMER",
      "CONVOLUTIONAL",
      "RECURRENT",
      "DIFFUSION"
    ],
    "dossier": {
      "summary": "The major mathematical network architectures powering deep learning.",
      "legalOrTechBasis": "Machine learning literature (CNN, RNN, Transformer, Diffusion).",
      "impact": "The algorithmic engines underlying vision, speech, reasoning, and synthesis."
    }
  },
  {
    "topic": "ai",
    "audience": "Everyone",
    "color": "green",
    "name": "MAJOR CLOUD COMPUTING HYPERSCALERS",
    "items": [
      "AMAZON AWS",
      "MICROSOFT AZURE",
      "GOOGLE CLOUD",
      "ORACLE CLOUD"
    ],
    "dossier": {
      "summary": "Leading global providers of centralized enterprise computing and AI hosting infrastructure.",
      "legalOrTechBasis": "Cloud computing infrastructure and market competition antitrust law.",
      "impact": "Hosts the vast majority of the world's AI training and inference pipelines."
    }
  },
  {
    "topic": "ai",
    "audience": "Civil Society",
    "color": "blue",
    "name": "DATA PROTECTION SAFEGUARDS",
    "items": [
      "ENCRYPTION",
      "ANONYMIZATION",
      "PSEUDONYMIZATION",
      "ACCESS CONTROL"
    ],
    "dossier": {
      "summary": "Technical measures required to protect confidential records and citizen privacy.",
      "legalOrTechBasis": "GDPR Article 32 (Security of Processing) and ISO/IEC 27001.",
      "impact": "The minimum technical bar for lawful storage of human data in digital systems."
    }
  },
  {
    "topic": "ai",
    "audience": "Everyone",
    "color": "purple",
    "name": "THINGS YOU CAN 'PROMPT'",
    "items": [
      "AI MODEL",
      "ACTOR",
      "USER",
      "MEMORY"
    ],
    "dossier": {
      "summary": "Things that receive a 'prompt' (Prompting an AI model, prompter for an actor, user prompt, memory prompt).",
      "legalOrTechBasis": "Theater, psychology, and conversational AI.",
      "impact": "Connects LLM prompting with traditional stage prompters and human memory!"
    }
  },
  {
    "topic": "animals",
    "audience": "Everyone",
    "color": "yellow",
    "name": "FARM ANIMAL OFFSPRING",
    "items": [
      "PUPPY",
      "KITTEN",
      "CALF",
      "LAMB"
    ],
    "dossier": {
      "summary": "Young offspring of common domesticated animals.",
      "legalOrTechBasis": "Animal husbandry.",
      "impact": "Universal farm and family vocabulary."
    }
  },
  {
    "topic": "animals",
    "audience": "Everyone",
    "color": "green",
    "name": "BIRDS THAT CANNOT FLY",
    "items": [
      "PENGUIN",
      "OSTRICH",
      "EMU",
      "KIWI"
    ],
    "dossier": {
      "summary": "Flightless avian species with evolutionary adaptations for running or swimming.",
      "legalOrTechBasis": "Avian biology.",
      "impact": "Unique evolutionary survival adaptations."
    }
  },
  {
    "topic": "animals",
    "audience": "Civil Society",
    "color": "blue",
    "name": "CETACEAN OCEAN MAMMALS",
    "items": [
      "DOLPHIN",
      "ORCA",
      "BLUE WHALE",
      "PORPOISE"
    ],
    "dossier": {
      "summary": "Aquatic placental mammals belonging to order Cetacea.",
      "legalOrTechBasis": "Marine biology and IWC regulations.",
      "impact": "Protected under global anti-whaling conventions."
    }
  },
  {
    "topic": "animals",
    "audience": "Everyone",
    "color": "purple",
    "name": "ANIMAL HOMOPHONES",
    "items": [
      "BARE",
      "DEAR",
      "HARE",
      "NIGHT"
    ],
    "dossier": {
      "summary": "Words that sound identical to animals (Bare/Bear, Dear/Deer, Hare/Hair, Night/Knight/Newt).",
      "legalOrTechBasis": "Phonetic wordplay.",
      "impact": "Playful lateral phonetic puzzle."
    }
  },
  {
    "topic": "chemistry",
    "audience": "Civil Society",
    "color": "yellow",
    "name": "COMMON ACIDS IN CHEMISTRY",
    "items": [
      "HYDROCHLORIC",
      "SULFURIC",
      "NITRIC",
      "ACETIC"
    ],
    "dossier": {
      "summary": "Fundamental chemical acids used across industrial synthesis and laboratory research.",
      "legalOrTechBasis": "Inorganic chemistry.",
      "impact": "Crucial reagents in pharmaceuticals and materials science."
    }
  },
  {
    "topic": "chemistry",
    "audience": "Everyone",
    "color": "green",
    "name": "PRECIOUS METALS IN THE PERIODIC TABLE",
    "items": [
      "GOLD",
      "SILVER",
      "PLATINUM",
      "PALLADIUM"
    ],
    "dossier": {
      "summary": "Rare chemical metallic elements with high economic value and corrosion resistance.",
      "legalOrTechBasis": "Periodic Table (Group 10 & 11).",
      "impact": "Used in microchip contacts, catalysts, and monetary reserves."
    }
  },
  {
    "topic": "chemistry",
    "audience": "Specialist",
    "color": "blue",
    "name": "TYPES OF ATOMIC CHEMICAL BONDS",
    "items": [
      "COVALENT",
      "IONIC",
      "METALLIC",
      "HYDROGEN BOND"
    ],
    "dossier": {
      "summary": "Attractive forces holding atoms and molecules together.",
      "legalOrTechBasis": "Quantum chemistry and molecular physics.",
      "impact": "Determines all material properties in the universe."
    }
  },
  {
    "topic": "chemistry",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS ENDING IN 'IDE'",
    "items": [
      "OXIDE",
      "CHLORIDE",
      "CYANIDE",
      "DIVIDE"
    ],
    "dossier": {
      "summary": "Chemical suffixes juxtaposed with an everyday verb (Divide).",
      "legalOrTechBasis": "Chemical nomenclature & wordplay.",
      "impact": "Tricks the player into looking for pure chemistry."
    }
  },
  {
    "topic": "math",
    "audience": "Everyone",
    "color": "yellow",
    "name": "REGULAR 3D PLATONIC SOLIDS",
    "items": [
      "TETRAHEDRON",
      "CUBE SHAPE",
      "OCTAHEDRON",
      "DODECAHEDRON"
    ],
    "dossier": {
      "summary": "Convex regular polyhedra with identical faces composed of congruent polygons.",
      "legalOrTechBasis": "Solid geometry.",
      "impact": "Classical geometric perfection studied since Plato."
    }
  },
  {
    "topic": "math",
    "audience": "Civil Society",
    "color": "green",
    "name": "TYPES OF NUMBERS IN MATHEMATICS",
    "items": [
      "PRIME NUMBER",
      "INTEGER",
      "RATIONAL NUMBER",
      "IMAGINARY NUMBER"
    ],
    "dossier": {
      "summary": "Formal numerical classifications structuring number theory.",
      "legalOrTechBasis": "Number theory.",
      "impact": "Underpins public-key cryptography and RSA encryption."
    }
  },
  {
    "topic": "math",
    "audience": "Civil Society",
    "color": "blue",
    "name": "TRIGONOMETRIC RATIO FUNCTIONS",
    "items": [
      "SINE",
      "COSINE",
      "TANGENT",
      "SECANT"
    ],
    "dossier": {
      "summary": "Mathematical functions relating angles of a right-angled triangle to ratios of side lengths.",
      "legalOrTechBasis": "Trigonometry.",
      "impact": "Essential for navigation, GPS satellites, and computer graphics."
    }
  },
  {
    "topic": "math",
    "audience": "Everyone",
    "color": "purple",
    "name": "THINGS WITH 'DEGREES'",
    "items": [
      "TRIANGLE ANGLE",
      "THERMOMETER",
      "COLLEGE DIPLOMA",
      "SEPARATION"
    ],
    "dossier": {
      "summary": "Things measured or described in 'Degrees' (Angle, Temperature, Academic degree, Degrees of separation).",
      "legalOrTechBasis": "Polysemy.",
      "impact": "Clever lateral connection connecting math, weather, and university!"
    }
  },
  {
    "topic": "current",
    "audience": "Everyone",
    "color": "yellow",
    "name": "MAJOR SOCIAL MEDIA PLATFORMS",
    "items": [
      "INSTAGRAM",
      "TIKTOK",
      "REDDIT",
      "PINTEREST"
    ],
    "dossier": {
      "summary": "Leading consumer content and social discussion platforms.",
      "legalOrTechBasis": "Digital communications and online platform governance.",
      "impact": "The modern public squares for global social interaction."
    }
  },
  {
    "topic": "current",
    "audience": "Civil Society",
    "color": "green",
    "name": "ROLES IN THE CREATOR ECONOMY",
    "items": [
      "CREATOR",
      "INFLUENCER",
      "STREAMER",
      "SUBSCRIBER"
    ],
    "dossier": {
      "summary": "Key economic identities driving user-generated digital media.",
      "legalOrTechBasis": "Digital copyright and creator monetization.",
      "impact": "A multi-billion dollar decentralized entertainment industry."
    }
  },
  {
    "topic": "current",
    "audience": "Civil Society",
    "color": "blue",
    "name": "NEXT-GEN CLEAN ENERGY TECH",
    "items": [
      "OFFSHORE WIND",
      "GREEN HYDROGEN",
      "PEROVSKITE SOLAR",
      "SOLID STATE BATTERY"
    ],
    "dossier": {
      "summary": "Emerging energy technologies accelerating global decarbonization.",
      "legalOrTechBasis": "Clean technology engineering.",
      "impact": "Critical for fulfilling net-zero climate commitments."
    }
  },
  {
    "topic": "current",
    "audience": "Everyone",
    "color": "purple",
    "name": "THINGS THAT GO 'VIRAL'",
    "items": [
      "MEME",
      "VIDEO CLIP",
      "DANCE CHALLENGE",
      "INFECTION"
    ],
    "dossier": {
      "summary": "Entities that spread rapidly (Viral meme, viral video, viral challenge, viral infection).",
      "legalOrTechBasis": "Epidemiology and Internet culture.",
      "impact": "Bridges digital social algorithms with microbiology."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "yellow",
    "name": "CHILDHOOD PLAYGROUND GAMES",
    "items": [
      "TAG GAME",
      "HIDE AND SEEK",
      "HOPSCOTCH",
      "DODGEBALL"
    ],
    "dossier": {
      "summary": "Universal recreational games played by children worldwide.",
      "legalOrTechBasis": "Childhood culture.",
      "impact": "Shared social memories transcending borders."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "green",
    "name": "WINTER WARM CLOTHING",
    "items": [
      "WOOL SCARF",
      "MITTENS",
      "WINTER BEANIE",
      "HEAVY PARKA"
    ],
    "dossier": {
      "summary": "Insulated apparel worn to preserve body heat during cold winter seasons.",
      "legalOrTechBasis": "Textile manufacturing.",
      "impact": "Everyday seasonal comfort."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "blue",
    "name": "GARDENING HAND TOOLS",
    "items": [
      "HAND TROWEL",
      "PRUNING SHEARS",
      "GARDEN RAKE",
      "WATERING CAN"
    ],
    "dossier": {
      "summary": "Manual instruments used in planting and cultivating gardens.",
      "legalOrTechBasis": "Horticulture.",
      "impact": "Everyday hobbies and home food cultivation."
    }
  },
  {
    "topic": "general",
    "audience": "Everyone",
    "color": "purple",
    "name": "WORDS PRECEDING 'WATER'",
    "items": [
      "MINERAL",
      "TAP",
      "HOLY",
      "WATERMELON"
    ],
    "dossier": {
      "summary": "Common phrases with 'Water' (Mineral water, Tap water, Holy water, Watermelon).",
      "legalOrTechBasis": "Everyday English linguistics.",
      "impact": "Accessible, friendly lateral wordplay."
    }
  }
];

  // Expose to window and CommonJS
  const EXPORTS = { TOPICS, PUZZLES, CATEGORY_BANK };

  if (typeof window !== 'undefined') {
    window.AI_TOPICS = TOPICS;
    window.AI_PUZZLES = PUZZLES;
    window.AI_CATEGORY_BANK = CATEGORY_BANK;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = EXPORTS;
  }
})();
