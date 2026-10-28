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
    { id: 'all', name: 'All Topics', icon: '🌐', desc: 'Browse all available puzzles' },
    { id: 'general', name: 'General Knowledge', icon: '🧠', desc: 'Accessible to everyone, everyday life, fun & friendly' },
    { id: 'culture', name: 'Culture & Media', icon: '🎬', desc: 'Movies, music, superheroes, streaming & pop culture' },
    { id: 'science', name: 'Science & Nature', icon: '🔬', desc: 'Animals, planets, climate, biology & everyday physics' },
    { id: 'history', name: 'History', icon: '📜', desc: 'Ancient civilizations, inventions, explorers & world events' },
    { id: 'politics', name: 'Politics & Society', icon: '🏛️', desc: 'Democracy, civic rights, elections & community' },
    { id: 'law', name: 'Law & Justice', icon: '⚖️', desc: 'Courtroom basics, civil rights, justice & landmark cases' },
    { id: 'ir', name: 'International Relations', icon: '🌍', desc: 'Diplomacy, world capitals, treaties & sovereignty' },
    { id: 'ai', name: 'AI & Technology', icon: '🤖', desc: 'From smartphones & smart homes to AI policy & frontier tech' },
    { id: 'mixed', name: 'Mix & Match', icon: '🔀', desc: 'Custom checkbox blend of topics generated dynamically' }
  ];

  // 2. CURATED PUZZLE CATALOGUE (Spans All Audiences from Casual Everyone to Specialist)
  const PUZZLES = [
    // --- GENERAL KNOWLEDGE & EVERYDAY LIFE (ACCESSIBLE TO EVERYONE) ---
    {
      id: 101,
      title: "Breakfast & Kitchen Essentials",
      topic: "general",
      audience: "Everyone",
      difficulty: "Beginner",
      tags: ["Everyday", "Food", "Kitchen", "General"],
      categories: [
        {
          name: "WAYS TO PREPARE EGGS",
          color: "yellow",
          items: ["SCRAMBLED", "POACHED", "BOILED", "FRIED"],
          dossier: {
            summary: "Common cooking methods for preparing eggs worldwide.",
            legalOrTechBasis: "Culinary arts and everyday kitchen traditions.",
            impact: "A universal, welcoming category accessible to players of all ages and backgrounds."
          }
        },
        {
          name: "HOT MORNING BEVERAGES",
          color: "green",
          items: ["COFFEE", "TEA", "MATCHA", "HOT CHOCOLATE"],
          dossier: {
            summary: "Popular warm breakfast drinks consumed across cultures.",
            legalOrTechBasis: "Global beverage culture and everyday routines.",
            impact: "Universal cultural staples connecting morning traditions."
          }
        },
        {
          name: "THINGS WITH A BLADE IN A KITCHEN",
          color: "blue",
          items: ["KNIFE", "BLENDER", "PEELER", "CAN OPENER"],
          dossier: {
            summary: "Kitchen tools relying on a sharpened cutting edge to prepare ingredients.",
            legalOrTechBasis: "Culinary utensils and food preparation mechanics.",
            impact: "Functional household instruments common in every home."
          }
        },
        {
          name: "WORDS THAT CAN PRECEDE 'BOARD'",
          color: "purple",
          items: ["CHOPPING", "KEY", "SKATE", "CHESS"],
          dossier: {
            summary: "Words that compound with 'Board' (Chopping board, Keyboard, Skateboard, Chessboard).",
            legalOrTechBasis: "Everyday English compound noun wordplay.",
            impact: "A gentle lateral wordplay puzzle testing lexical associations."
          }
        }
      ]
    },
    {
      id: 102,
      title: "Living Room & Everyday Tech",
      topic: "general",
      audience: "Everyone",
      difficulty: "Beginner",
      tags: ["Everyday", "Home", "Gadgets", "General"],
      categories: [
        {
          name: "HOUSEHOLD SMART DEVICES",
          color: "yellow",
          items: ["SPEAKER", "WATCH", "THERMOSTAT", "BULB"],
          dossier: {
            summary: "Connected consumer electronics commonly found in modern homes.",
            legalOrTechBasis: "Consumer Internet of Things (IoT) hardware.",
            impact: "Shows how digital technology integrates into daily household comfort."
          }
        },
        {
          name: "POPULAR VOICE ASSISTANTS",
          color: "green",
          items: ["SIRI", "ALEXA", "CORTANA", "BIXBY"],
          dossier: {
            summary: "Everyday acoustic voice agents built by Apple, Amazon, Microsoft, and Samsung.",
            legalOrTechBasis: "Consumer conversational speech recognition software.",
            impact: "The primary touchpoint where ordinary citizens interact with AI in daily life."
          }
        },
        {
          name: "BUTTONS FOUND ON A REMOTE CONTROL",
          color: "blue",
          items: ["MUTE", "POWER", "PAUSE", "INPUT"],
          dossier: {
            summary: "Universal interface commands found on television and media remotes.",
            legalOrTechBasis: "Consumer electronic interface design.",
            impact: "Tactile everyday controls recognized by people of all generations."
          }
        },
        {
          name: "WORDS THAT CAN FOLLOW 'SMART'",
          color: "purple",
          items: ["PHONE", "COOKIE", "ALEC", "CASUAL"],
          dossier: {
            summary: "Phrases compounding with 'Smart' (Smartphone, Smart cookie, Smart alec, Smart casual).",
            legalOrTechBasis: "Idiomatic expressions and dress codes.",
            impact: "A clever lateral grouping crossing between technology, slang, and fashion."
          }
        }
      ]
    },
    {
      id: 103,
      title: "Wild Creatures & Habitats",
      topic: "science",
      audience: "Everyone",
      difficulty: "Beginner",
      tags: ["Animals", "Nature", "Biology", "Science"],
      categories: [
        {
          name: "BIG CAT SPECIES",
          color: "yellow",
          items: ["LION", "TIGER", "LEOPARD", "JAGUAR"],
          dossier: {
            summary: "Apex predator felids belonging to the genus Panthera.",
            legalOrTechBasis: "Zoological taxonomy and endangered wildlife conservation.",
            impact: "Iconic flagship species protected under global biodiversity treaties like CITES."
          }
        },
        {
          name: "ANIMALS WITH SHELLS",
          color: "green",
          items: ["TURTLE", "SNAIL", "CRAB", "ARMADILLO"],
          dossier: {
            summary: "Creatures possessing a hardened protective carapace or shell.",
            legalOrTechBasis: "Evolutionary biology and biological defense mechanisms.",
            impact: "Diverse evolutionary adaptations protecting vulnerable organisms from predators."
          }
        },
        {
          name: "POLLINATING INSECTS & BIRDS",
          color: "blue",
          items: ["BEE", "BUTTERFLY", "HUMMINGBIRD", "MOTH"],
          dossier: {
            summary: "Creatures vital for plant reproduction and global agriculture by transferring pollen.",
            legalOrTechBasis: "Ecological ecosystem services and agricultural food security.",
            impact: "Crucial for 75% of global food crops; central to ecological conservation policies."
          }
        },
        {
          name: "WORDS THAT CAN PRECEDE 'PRINT'",
          color: "purple",
          items: ["FOOT", "PAW", "FINGER", "CARBON"],
          dossier: {
            summary: "Words that combine with 'Print' (Footprint, Pawprint, Fingerprint, Carbon footprint).",
            legalOrTechBasis: "Linguistic compounds spanning biology, forensics, and climate metrics.",
            impact: "A lateral puzzle bridging physical animal tracks with environmental accounting."
          }
        }
      ]
    },

    // --- CULTURE & POP CULTURE ---
    {
      id: 201,
      title: "Cinema, Music & Entertainment",
      topic: "culture",
      audience: "Everyone",
      difficulty: "Beginner",
      tags: ["Cinema", "Music", "Pop Culture", "Streaming"],
      categories: [
        {
          name: "MAJOR VIDEO STREAMING PLATFORMS",
          color: "yellow",
          items: ["NETFLIX", "DISNEY PLUS", "PRIME VIDEO", "MAX"],
          dossier: {
            summary: "Leading digital video-on-demand subscription services.",
            legalOrTechBasis: "Digital media distribution and copyright licensing.",
            impact: "Transformed entertainment consumption and global media streaming habits."
          }
        },
        {
          name: "ORIGINAL AVENGERS SUPERHEROES",
          color: "green",
          items: ["IRON MAN", "THOR", "HULK", "BLACK WIDOW"],
          dossier: {
            summary: "Foundational superhero characters from Marvel comic books and cinematic universe.",
            legalOrTechBasis: "Cultural franchise IP and global pop culture storytelling.",
            impact: "Demonstrates the immense commercial reach of licensed intellectual property."
          }
        },
        {
          name: "MUSIC RECORD FORMATS THROUGH HISTORY",
          color: "blue",
          items: ["VINYL", "CASSETTE", "CD", "MP3"],
          dossier: {
            summary: "Physical and digital mediums used to record and play audio over the past century.",
            legalOrTechBasis: "Acoustic recording engineering and technological transitions.",
            impact: "Traces the technical democratization of recorded music from analogue grooves to digital streams."
          }
        },
        {
          name: "WORDS THAT CAN PRECEDE 'TRACK'",
          color: "purple",
          items: ["SOUND", "RACE", "FAST", "OFF"],
          dossier: {
            summary: "Common phrases joined with 'Track' (Soundtrack, Racetrack, Fast track, Off track).",
            legalOrTechBasis: "Vernacular idioms and transport terminology.",
            impact: "Lateral wordplay challenging players to look past movie soundtracks to find compound phrases."
          }
        }
      ]
    },
    {
      id: 202,
      title: "Board Games, Cards & Play",
      topic: "culture",
      audience: "Everyone",
      difficulty: "Intermediate",
      tags: ["Games", "Culture", "Play", "Recreation"],
      categories: [
        {
          name: "CLASSIC FAMILY BOARD GAMES",
          color: "yellow",
          items: ["MONOPOLY", "SCRABBLE", "CLUE", "CHESS"],
          dossier: {
            summary: "Enduring tabletop games played across generations.",
            legalOrTechBasis: "Social recreation and game theory classics.",
            impact: "Cultural touchstones that have influenced logic, trade negotiation, and linguistic fun."
          }
        },
        {
          name: "SUITS IN A STANDARD DECK OF CARDS",
          color: "green",
          items: ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"],
          dossier: {
            summary: "The four traditional card suits in French-suited playing card decks.",
            legalOrTechBasis: "Traditional card symbology and recreational gaming standards.",
            impact: "Universal iconography recognized in games, mathematics, and probability theory."
          }
        },
        {
          name: "TERMS USED IN CHESS",
          color: "blue",
          items: ["CHECKMATE", "STALEMATE", "CASTLE", "EN PASSANT"],
          dossier: {
            summary: "Official rules and positional states in the game of chess.",
            legalOrTechBasis: "FIDE (International Chess Federation) official handbook rules.",
            impact: "Classic tactical concepts frequently used as metaphors in international diplomacy and military strategy."
          }
        },
        {
          name: "THINGS THAT HAVE A 'KING'",
          color: "purple",
          items: ["MONARCHY", "MATTRESS", "CRAB", "BURGER"],
          dossier: {
            summary: "Things paired with 'King' (Monarchy, King-size mattress, King crab, Burger King).",
            legalOrTechBasis: "Commercial naming, culinary species, and bedroom furniture.",
            impact: "Humorous lateral connections linking royalty to king-size beds and fast food."
          }
        }
      ]
    },

    // --- SCIENCE & NATURE ---
    {
      id: 301,
      title: "The Solar System & Earth Science",
      topic: "science",
      audience: "Everyone",
      difficulty: "Beginner",
      tags: ["Space", "Planets", "Science", "Nature"],
      categories: [
        {
          name: "ROCKY INNER PLANETS",
          color: "yellow",
          items: ["MERCURY", "VENUS", "EARTH", "MARS"],
          dossier: {
            summary: "Terrestrial planets orbiting closest to the Sun composed mainly of rock and metal.",
            legalOrTechBasis: "Planetary astronomy and astrophysics.",
            impact: "Foundational astronomical knowledge taught globally in primary education."
          }
        },
        {
          name: "RENEWABLE ENERGY SOURCES",
          color: "green",
          items: ["SOLAR", "WIND", "HYDRO", "GEOTHERMAL"],
          dossier: {
            summary: "Naturally replenishing energy systems that produce zero direct greenhouse emissions.",
            legalOrTechBasis: "UN Sustainable Development Goal 7 (Affordable and Clean Energy) and Paris Agreement.",
            impact: "The backbone of global climate transition policy and decarbonization strategies."
          }
        },
        {
          name: "TYPES OF WEATHER CLOUDS",
          color: "blue",
          items: ["CUMULUS", "STRATUS", "CIRRUS", "NIMBUS"],
          dossier: {
            summary: "Fundamental meteorological cloud classifications based on altitude and formation.",
            legalOrTechBasis: "World Meteorological Organization (WMO) International Cloud Atlas.",
            impact: "Essential indicators for weather forecasting, climate modeling, and aviation safety."
          }
        },
        {
          name: "WORDS PRECEDING 'LIGHT'",
          color: "purple",
          items: ["MOON", "TRAFFIC", "FLASH", "DAY"],
          dossier: {
            summary: "Words that compound with 'Light' (Moonlight, Traffic light, Flashlight, Daylight).",
            legalOrTechBasis: "Linguistic compounds connecting celestial bodies, road transit, and hand tools.",
            impact: "Encourages lateral thinking away from physics photons to everyday phrases."
          }
        }
      ]
    },

    // --- HISTORY & HERITAGE ---
    {
      id: 401,
      title: "Ancient Civilizations & Great Wonders",
      topic: "history",
      audience: "Everyone",
      difficulty: "Intermediate",
      tags: ["History", "Ancient", "Civilizations", "Heritage"],
      categories: [
        {
          name: "ANCIENT CRADLES OF CIVILIZATION",
          color: "yellow",
          items: ["MESOPOTAMIA", "EGYPT", "INDUS VALLEY", "YELLOW RIVER"],
          dossier: {
            summary: "Early river valleys where urban civilization, agriculture, and writing independently emerged.",
            legalOrTechBasis: "World history, archaeological records, and early human development.",
            impact: "The historical origins of codified law (Code of Hammurabi) and organized social governance."
          }
        },
        {
          name: "REVOLUTIONARY HISTORICAL INVENTIONS",
          color: "green",
          items: ["PRINTING PRESS", "COMPASS", "STEAM ENGINE", "TELEGRAPH"],
          dossier: {
            summary: "Breakthrough inventions that radically accelerated human communication, trade, and industry.",
            legalOrTechBasis: "History of technology and industrial transformations.",
            impact: "Precedents for how transformative technologies (like AI today) reshape societal institutions."
          }
        },
        {
          name: "HISTORICAL MONARCHICAL TITLES",
          color: "blue",
          items: ["PHARAOH", "EMPEROR", "SULTAN", "TSAR"],
          dossier: {
            summary: "Sovereign titles assumed by historic rulers in Egypt, Rome/China, the Ottoman Empire, and Russia.",
            legalOrTechBasis: "Comparative political history and sovereign dynastic titles.",
            impact: "Illustrates differing historical structures of sovereign authority and supreme legal power."
          }
        },
        {
          name: "WORDS THAT CAN PRECEDE 'AGE'",
          color: "purple",
          items: ["STONE", "BRONZE", "IRON", "GOLDEN"],
          dossier: {
            summary: "Eras paired with 'Age' (Stone Age, Bronze Age, Iron Age, Golden Age).",
            legalOrTechBasis: "Archaeological three-age system hybridized with idiomatic metaphors.",
            impact: "A lateral puzzle bridging material epochs with metaphorical eras of prosperity."
          }
        }
      ]
    },

    // --- POLITICS, CIVIC RIGHTS & DEMOCRACY (ACCESSIBLE TO CIVIL SOCIETY) ---
    {
      id: 501,
      title: "Democracy, Rights & The Ballot Box",
      topic: "politics",
      audience: "Civil Society",
      difficulty: "Intermediate",
      tags: ["Democracy", "Voting", "Rights", "Civics"],
      categories: [
        {
          name: "FUNDAMENTAL RIGHTS IN A DEMOCRACY",
          color: "yellow",
          items: ["FREE SPEECH", "ASSEMBLY", "VOTING", "RELIGION"],
          dossier: {
            summary: "Universal civil liberties protected in modern constitutional democracies and human rights declarations.",
            legalOrTechBasis: "Universal Declaration of Human Rights (UDHR 1948) Articles 18, 19, 20, 21.",
            impact: "The cornerstone principles shielding citizens from authoritarian overreach and algorithmic suppression."
          }
        },
        {
          name: "PARTS OF AN ELECTION PROCESS",
          color: "green",
          items: ["CAMPAIGN", "BALLOT", "POLLING", "DEBATE"],
          dossier: {
            summary: "Standard civic components through which voters select their political representatives.",
            legalOrTechBasis: "Electoral law and democratic electoral commissions.",
            impact: "The foundational civic mechanism ensuring peaceful transfer of power based on citizen consent."
          }
        },
        {
          name: "THREE BRANCHES OF GOVERNMENT & THE FOURTH ESTATE",
          color: "blue",
          items: ["EXECUTIVE", "LEGISLATIVE", "JUDICIAL", "PRESS"],
          dossier: {
            summary: "Constitutional separation of powers complemented by an independent investigative free press.",
            legalOrTechBasis: "Montesquieu 'The Spirit of the Laws' (1748) and constitutional balance of power doctrine.",
            impact: "Ensures checks and balances so no single individual or state organ exercises unchecked control."
          }
        },
        {
          name: "WORDS PRECEDING 'PARTY'",
          color: "purple",
          items: ["POLITICAL", "TEA", "BIRTHDAY", "THIRD"],
          dossier: {
            summary: "Varied terms joined with 'Party' (Political party, Tea party, Birthday party, Third party).",
            legalOrTechBasis: "Civic organization terms blended with historical events and social celebrations.",
            impact: "Cleverly connects parliamentary elections with cake and British colonial tea protests!"
          }
        }
      ]
    },

    // --- LAW & JUSTICE (ACCESSIBLE TO LAW STUDENTS, CITIZENS, SPECIALISTS) ---
    {
      id: 601,
      title: "Courtroom Basics & The Trial",
      topic: "law",
      audience: "Everyone",
      difficulty: "Beginner",
      tags: ["Law", "Courts", "Trial", "Justice"],
      categories: [
        {
          name: "KEY PARTICIPANTS IN A COURTROOM",
          color: "yellow",
          items: ["JUDGE", "JURY", "PROSECUTOR", "DEFENDANT"],
          dossier: {
            summary: "The essential human actors present during an adversarial criminal trial.",
            legalOrTechBasis: "Constitutional due process rights and courtroom procedure.",
            impact: "Ensures a structured, impartial forum for evaluating evidence and administering justice."
          }
        },
        {
          name: "TYPES OF LEGAL EVIDENCE",
          color: "green",
          items: ["TESTIMONY", "FINGERPRINT", "DOCUMENT", "SURVEILLANCE"],
          dossier: {
            summary: "Forms of proof presented to convince a finder of fact regarding the truth of a matter.",
            legalOrTechBasis: "Rules of Evidence (Federal Rules of Evidence Rule 401/402).",
            impact: "Regulates what data may be admitted to prevent unreliable or prejudicial information from tainting verdicts."
          }
        },
        {
          name: "POSSIBLE TRIAL VERDICTS & FINDINGS",
          color: "blue",
          items: ["GUILTY", "ACQUITTED", "MISTRIAL", "DISMISSED"],
          dossier: {
            summary: "Formal judicial determinations resolving a legal charge or complaint.",
            legalOrTechBasis: "Criminal and civil procedure jurisprudence.",
            impact: "Provides binding closure, triggering sentencing, exoneration, or procedural refiling."
          }
        },
        {
          name: "WORDS THAT CAN PRECEDE 'SUIT'",
          color: "purple",
          items: ["LAW", "SPACE", "SWIM", "BIRTHDAY"],
          dossier: {
            summary: "Words combined with 'Suit' (Lawsuit, Spacesuit, Swimsuit, Birthday suit).",
            legalOrTechBasis: "Playful lateral idioms crossing civil litigation with apparel and astronautics.",
            impact: "A lighthearted lateral grouping uniting serious court filings with casual clothing."
          }
        }
      ]
    },

    // --- INTERNATIONAL RELATIONS & DIPLOMACY ---
    {
      id: 701,
      title: "Diplomacy, Borders & Sovereignty",
      topic: "ir",
      audience: "Civil Society",
      difficulty: "Intermediate",
      tags: ["Diplomacy", "Passports", "UN", "IR"],
      categories: [
        {
          name: "PERMANENT MEMBERS OF THE UN SECURITY COUNCIL (P5)",
          color: "yellow",
          items: ["UNITED STATES", "CHINA", "UNITED KINGDOM", "FRANCE"],
          dossier: {
            summary: "Permanent members of the UN Security Council holding veto power over substantive resolutions.",
            legalOrTechBasis: "United Nations Charter Article 23 (omitting Russia to form a distinct 4-item set).",
            impact: "The institutional structure governing international collective security and peace enforcement."
          }
        },
        {
          name: "DOCUMENTS NEEDED FOR INTERNATIONAL TRAVEL",
          color: "green",
          items: ["PASSPORT", "VISA", "BOARDING PASS", "CUSTOMS FORM"],
          dossier: {
            summary: "Official state and transport instruments required to cross international state frontiers.",
            legalOrTechBasis: "Immigration control and border sovereignty standards (ICAO Doc 9303).",
            impact: "Regulates sovereign movement of persons and enforces nationality laws globally."
          }
        },
        {
          name: "RANKS IN DIPLOMATIC MISSIONS",
          color: "blue",
          items: ["AMBASSADOR", "ENVOY", "ATTACHE", "CONSUL"],
          dossier: {
            summary: "Official titles held by state representatives serving in overseas embassies and consulates.",
            legalOrTechBasis: "Vienna Convention on Diplomatic Relations (1961) Article 14.",
            impact: "Protects international communication channels through diplomatic immunity and sovereign representation."
          }
        },
        {
          name: "WORDS THAT CAN PRECEDE 'TREATY'",
          color: "purple",
          items: ["PEACE", "TRADE", "EXTRADITION", "SECRET"],
          dossier: {
            summary: "Varieties of international legal compacts (Peace treaty, Trade treaty, Extradition treaty, Secret treaty).",
            legalOrTechBasis: "Vienna Convention on the Law of Treaties (1969) and bilateral statecraft.",
            impact: "Highlights the distinct functional purposes for which sovereign nations enter binding covenants."
          }
        }
      ]
    },

    // --- AI, TECH & POLICY (ORIGINAL SUITE INCLUDED) ---
    {
      id: 1,
      title: "The Brussels Effect & Beyond",
      topic: "ai",
      audience: "Specialist",
      difficulty: "Intermediate",
      tags: ["Policy", "Governance", "EU AI Act"],
      categories: [
        {
          name: "EU AI ACT PROHIBITED PRACTICES (ART. 5)",
          color: "yellow",
          items: ["SOCIAL SCORING", "EMOTION RECOGNITION", "BIOMETRIC CATEGORIZATION", "COGNITIVE MANIPULATION"],
          dossier: {
            summary: "Practices carrying unacceptable risk outlawed entirely under Article 5 of Regulation (EU) 2024/1689.",
            legalOrTechBasis: "EU AI Act (Regulation (EU) 2024/1689), Chapter II, Article 5.",
            impact: "Sets a global extraterritorial benchmark for banned algorithmic interventions infringing fundamental human rights."
          }
        },
        {
          name: "AI SAFETY SUMMIT HOST CITIES",
          color: "green",
          items: ["BLETCHLEY", "SEOUL", "PARIS", "SAN FRANCISCO"],
          dossier: {
            summary: "Host locations of the high-level international AI Safety Summits and Action Summits (2023–2025).",
            legalOrTechBasis: "Bletchley Park Declaration (UK 2023), Seoul Ministerial (Korea 2024), Paris AI Action Summit (France 2025).",
            impact: "Reflects the shifting geopolitical center of gravity for multilateral frontier safety agreements and testbed coordination."
          }
        },
        {
          name: "MACHINE LEARNING LIFECYCLE PHASES",
          color: "blue",
          items: ["PRE-TRAINING", "FINE-TUNING", "EVALUATION", "INFERENCE"],
          dossier: {
            summary: "The standard sequential computational pipeline for developing and deploying foundation models.",
            legalOrTechBasis: "NIST AI Risk Management Framework (AI RMF 1.0) & Frontier Model Post-Training Workflows.",
            impact: "Regulatory obligations (e.g. transparency, copyright audits, red teaming) attach differentially to distinct lifecycle phases."
          }
        },
        {
          name: "WORDS PRECEDING 'INTELLIGENCE'",
          color: "purple",
          items: ["ARTIFICIAL", "COLLECTIVE", "SOVEREIGN", "EMBODIED"],
          dossier: {
            summary: "Linguistic compounds in tech policy modifying 'Intelligence' (Artificial, Collective, Sovereign, Embodied).",
            legalOrTechBasis: "Conceptual taxonomy in contemporary computational philosophy and sovereign AI industrial policy.",
            impact: "Highlights the expansion of the AI discourse from simple algorithmic automation to geopolitical and physical embodiments."
          }
        }
      ]
    },
    {
      id: 2,
      title: "Autonomous Weapons & Warfare",
      topic: "law",
      audience: "Specialist",
      difficulty: "Advanced",
      tags: ["LAWS", "IHL", "Geneva Conventions", "Defense"],
      categories: [
        {
          name: "CARDINAL IHL PRINCIPLES GOVERNING TARGETING",
          color: "yellow",
          items: ["DISTINCTION", "PROPORTIONALITY", "MILITARY NECESSITY", "PRECAUTION"],
          dossier: {
            summary: "Fundamental pillars of International Humanitarian Law that restrict all lawful use of kinetic force and autonomous weapons.",
            legalOrTechBasis: "1949 Geneva Conventions & 1977 Additional Protocol I (Articles 48, 51, 52, 57).",
            impact: "Legal baseline against which autonomous weapons systems (LAWS) targeting algorithms must be formally reviewed under Article 36."
          }
        },
        {
          name: "PILLARS OF RESPONSIBLE MILITARY AI (US DOD DIR 3000.09)",
          color: "green",
          items: ["RESPONSIBLE", "EQUITABLE", "TRACEABLE", "GOVERNABLE"],
          dossier: {
            summary: "Ethical principles and engineering mandates governing autonomy in weapon systems under updated US Department of Defense policy.",
            legalOrTechBasis: "DoD Directive 3000.09 ('Autonomy in Weapon Systems') & Defense Innovation Board AI Principles.",
            impact: "Establishes institutional design requirements including fail-safes, human oversight, and testing before kinetic deployment."
          }
        },
        {
          name: "CCW GGE ON LAWS NEGOTIATION CONCEPTS",
          color: "blue",
          items: ["HUMAN CONTROL", "CRITICAL FUNCTIONS", "TARGET PROFILES", "ARTICLE 36 REVIEW"],
          dossier: {
            summary: "Key normative touchstones debated at the UN Convention on Certain Conventional Weapons (CCW) Group of Governmental Experts.",
            legalOrTechBasis: "CCW GGE on LAWS 11 Guiding Principles (Geneva Framework).",
            impact: "Defines the frontier of multilateral arms control negotiations on lethal autonomous weapons systems."
          }
        },
        {
          name: "WORDS THAT CAN FOLLOW 'TARGET'",
          color: "purple",
          items: ["ACQUISITION", "AUDIENCE", "PRACTICE", "DISCRIMINATION"],
          dossier: {
            summary: "Common compound words beginning with 'Target' (Target Acquisition, Target Audience, Target Practice, Target Discrimination).",
            legalOrTechBasis: "Military sensor-to-shooter doctrine hybridized with marketing and statistical terminology.",
            impact: "Demonstrates how kinetic targeting nomenclature crosses into general socio-technical and commercial vocabulary."
          }
        }
      ]
    },
    {
      id: 3,
      title: "Copyright, Code & Courts",
      topic: "law",
      audience: "Specialist",
      difficulty: "Advanced",
      tags: ["Law", "Copyright", "Caselaw", "Intellectual Property"],
      categories: [
        {
          name: "FAIR USE DOCTRINE STATUTORY FACTORS (17 U.S.C. § 107)",
          color: "yellow",
          items: ["PURPOSE OF USE", "NATURE OF WORK", "AMOUNT SUBSTANTIALITY", "MARKET EFFECT"],
          dossier: {
            summary: "The four-part balancing test US courts apply to evaluate whether AI training constitutes copyright infringement or fair use.",
            legalOrTechBasis: "17 U.S. Code § 107 (Limitations on Exclusive Rights: Fair Use).",
            impact: "The primary legal battleground determining whether scraping copyrighted web content to train foundation models is lawful."
          }
        },
        {
          name: "PLAINTIFFS IN LANDMARK AI COPYRIGHT LAWSUITS",
          color: "green",
          items: ["NEW YORK TIMES", "GETTY IMAGES", "AUTHORS GUILD", "UNIVERSAL MUSIC"],
          dossier: {
            summary: "Major copyright owners asserting commercial infringement against OpenAI, Stability AI, Anthropic, and Suno/Udio.",
            legalOrTechBasis: "NYT v. OpenAI (SDNY); Getty Images v. Stability AI (D. Del & UK EWHC); Concord Music v. Anthropic (M.D. Tenn).",
            impact: "Precedents that will dictate licensing models, data transparency, and potential billions in statutory damages."
          }
        },
        {
          name: "SYNTHETIC MEDIA WATERMARKING & PROVENANCE PROTOCOLS",
          color: "blue",
          items: ["C2PA", "SYNTHID", "DIGITAL WATERMARK", "CRYPTOGRAPHIC HASH"],
          dossier: {
            summary: "Technical standards and provenance architectures deployed to certify authenticity and trace AI-generated media.",
            legalOrTechBasis: "Coalition for Content Provenance and Authenticity (C2PA) & Google SynthID; mandated in EU AI Act Article 50.",
            impact: "Essential technical infrastructure for mitigating deepfakes, election interference, and content authenticity collapse."
          }
        },
        {
          name: "WORDS ENDING IN 'WEIGHT'",
          color: "purple",
          items: ["LIGHT", "HEAVY", "MODEL", "DEAD"],
          dossier: {
            summary: "Words forming standard English compound terms when followed by 'Weight' (Lightweight, Heavyweight, Model Weight, Deadweight).",
            legalOrTechBasis: "Linguistic wordplay connecting neural network numerical parameters ('weights') with common adjectives.",
            impact: "A clever lateral grouping testing double-meaning recognition between machine learning matrices and vernacular terms."
          }
        }
      ]
    },
    {
      id: 4,
      title: "Silicon Sovereignty & Compute",
      topic: "ai",
      audience: "Specialist",
      difficulty: "Intermediate",
      tags: ["Hardware", "Semiconductors", "Geopolitics", "Compute"],
      categories: [
        {
          name: "LEADING AI ACCELERATOR CHIP FAMILIES",
          color: "yellow",
          items: ["BLACKWELL", "GAUDI", "TRAINIUM", "TPU"],
          dossier: {
            summary: "Flagship hardware accelerators engineered specifically for massive matrix multiplication and LLM training.",
            legalOrTechBasis: "Nvidia (Blackwell), Intel (Gaudi), AWS (Trainium), Google (TPU v5p/v6).",
            impact: "Hardware silicon forms the critical bottleneck determining national technological capability and strategic sovereign AI parity."
          }
        },
        {
          name: "KEY METRICS IN CHIP EXPORT CONTROLS",
          color: "green",
          items: ["TOTAL PROCESSING PERFORMANCE", "INTERCONNECT BANDWIDTH", "MEMORY DENSITY", "DIE SIZE"],
          dossier: {
            summary: "Technical thresholds established by the US Bureau of Industry and Security (BIS) to restrict advanced semiconductor shipments.",
            legalOrTechBasis: "US Export Administration Regulations (EAR) 15 C.F.R. Parts 740, 742, 744 (October 2022/2023 updates).",
            impact: "Defines the boundary between civilian consumer silicon and geostrategically restricted dual-use AI supercomputing hardware."
          }
        },
        {
          name: "CRITICAL FOUNDRY SUPPLY CHAIN HUBS",
          color: "blue",
          items: ["HSINCHU", "VELDHOVEN", "TAENAN", "HILLSBORO"],
          dossier: {
            summary: "Geographical epicenters of global semiconductor manufacturing: TSMC fabs (Taiwan), ASML lithography (Netherlands), Intel R&D (US).",
            legalOrTechBasis: "CHIPS and Science Act of 2022 & EU Chips Act strategic vulnerability assessments.",
            impact: "Extreme geographical concentration creates acute systemic fragility in global AI infrastructure resilience."
          }
        },
        {
          name: "WORDS PRECEDING 'SCALE'",
          color: "purple",
          items: ["GREY", "TIME", "FLOP", "FISH"],
          dossier: {
            summary: "Words that pair with 'Scale' (Greyscale, Timescale, Flopscale / Exascale, Fish-scale).",
            legalOrTechBasis: "Lateral linguistic association blending computational scaling laws with visual and vernacular phrases.",
            impact: "Tests lateral vocabulary pivots away from technical AI scaling laws."
          }
        }
      ]
    },
    {
      id: 5,
      title: "Frontier Foundation Models",
      topic: "ai",
      audience: "Everyone",
      difficulty: "Beginner",
      tags: ["LLMs", "Labs", "Open Weights", "Frontier"],
      categories: [
        {
          name: "ANTHROPIC CLAUDE MODEL TIERS",
          color: "yellow",
          items: ["OPUS", "SONNET", "HAIKU", "INSTANT"],
          dossier: {
            summary: "The tiered intelligence and latency nomenclature utilized across Anthropic's Claude 3/3.5 foundation family.",
            legalOrTechBasis: "Anthropic Model Card specifications and frontier safety tier classifications.",
            impact: "Exemplifies modern commercial compute-to-latency trade-off tiers in enterprise deployment."
          }
        },
        {
          name: "OPEN-WEIGHTS FOUNDATION MODEL FAMILIES",
          color: "green",
          items: ["LLAMA", "MISTRAL", "QWEN", "DEEPSEEK"],
          dossier: {
            summary: "Leading openly accessible model families published with downloadable weights by Meta, Mistral AI, Alibaba, and DeepSeek.",
            legalOrTechBasis: "Open Source AI Definition (OSI 1.0) & US NTIA Dual-Use Foundation Model Open Weights Report.",
            impact: "Drives intense policy debate regarding open-source innovation versus biosecurity and cyber proliferation risks."
          }
        },
        {
          name: "GOOGLE AI MODEL SUFFIXES",
          color: "blue",
          items: ["FLASH", "PRO", "ULTRA", "NANO"],
          dossier: {
            summary: "Size and optimization designations across Google's Gemini multimodal model portfolio.",
            legalOrTechBasis: "Google DeepMind Gemini Architecture Technical Reports (Gemini 1.0/1.5/2.0).",
            impact: "Spans on-device edge computing (Nano) to ultra-high compute frontier reasoning (Ultra)."
          }
        },
        {
          name: "NAMED AFTER ASTRONOMICAL / MYTHOLOGICAL ENTITIES",
          color: "purple",
          items: ["GEMINI", "ATLAS", "ORION", "PHOENIX"],
          dossier: {
            summary: "Codename terms shared between frontier AI projects and Greek constellations/titans (Gemini, Boston Dynamics Atlas, OpenAI Orion, Phoenix).",
            legalOrTechBasis: "Naming mythology prevalent across Silicon Valley frontier labs.",
            impact: "A deceptive red herring: Gemini belongs to astronomical codenames rather than Google suffixes here!"
          }
        }
      ]
    },
    {
      id: 6,
      title: "Global AI Governance & Treaties",
      topic: "ir",
      audience: "Specialist",
      difficulty: "Advanced",
      tags: ["International Law", "Treaties", "UN", "Diplomacy"],
      categories: [
        {
          name: "MULTILATERAL AI GOVERNANCE INITIATIVES",
          color: "yellow",
          items: ["G7 HIROSHIMA PROCESS", "BLETCHLEY DECLARATION", "UN GLOBAL DIGITAL COMPACT", "COUNCIL OF EUROPE CONVENTION"],
          dossier: {
            summary: "Major international frameworks and binding/soft-law instruments shaping global AI norms.",
            legalOrTechBasis: "CETS No. 225 (Council of Europe Framework Convention on AI, Human Rights, Democracy and the Rule of Law, 2024).",
            impact: "Represents the international community's shift from fragmented national rules to coherent multilateral regimes."
          }
        },
        {
          name: "NATIONAL AI SAFETY INSTITUTES (AISI)",
          color: "green",
          items: ["NIST AISI", "UK AISI", "JAPAN AISI", "SINGAPORE AISI"],
          dossier: {
            summary: "State-backed technical institutes established to conduct empirical safety evaluations on frontier foundation models.",
            legalOrTechBasis: "International Network of AI Safety Institutes established at Seoul Summit (May 2024).",
            impact: "Creates state technical sovereign capability to independently verify private sector safety claims before deployment."
          }
        },
        {
          name: "OECD AI PRINCIPLES CORE VALUES",
          color: "blue",
          items: ["INCLUSIVE GROWTH", "HUMAN-CENTERED VALUES", "TRANSPARENCY", "ROBUSTNESS"],
          dossier: {
            summary: "The foundational intergovernmental AI guidelines adopted by 40+ countries in 2019 and revised in 2024.",
            legalOrTechBasis: "OECD Recommendation of the Council on Artificial Intelligence (OECD/LEGAL/0449).",
            impact: "Served as the conceptual bedrock for the EU AI Act, G20 AI Principles, and dozens of national AI strategies."
          }
        },
        {
          name: "WORDS ENDING IN 'NET'",
          color: "purple",
          items: ["RES", "CONV", "CABRO", "INTER"],
          dossier: {
            summary: "Prefixes forming canonical neural networks or networks when joined to 'Net' (ResNet, ConvNet, Planet, InterNet).",
            legalOrTechBasis: "Convolutional architectures (AlexNet/ConvNet, He et al. ResNet) blended with everyday nouns.",
            impact: "A playful lateral pattern highlighting computer vision architecture naming conventions."
          }
        }
      ]
    }
  ];

  // 3. MODULAR TOPIC CATEGORY BANK (For Dynamic Mix-and-Match Generator)
  // Each category is tagged so the engine can assemble custom balanced games on the fly!
  const CATEGORY_BANK = [
    // General Knowledge / Everyday
    { topic: 'general', audience: 'Everyone', color: 'yellow', name: "EVERYDAY CITRUS FRUITS", items: ["LEMON", "LIME", "ORANGE", "GRAPEFRUIT"], dossier: { summary: "Common citrus fruits rich in vitamin C.", legalOrTechBasis: "Botany & agriculture.", impact: "Everyday culinary staple." } },
    { topic: 'general', audience: 'Everyone', color: 'green', name: "COLORS IN A RAINBOW", items: ["RED", "VIOLET", "INDIGO", "YELLOW"], dossier: { summary: "Visible light spectral colors discovered by Isaac Newton.", legalOrTechBasis: "Optics.", impact: "Universal science standard." } },
    { topic: 'general', audience: 'Everyone', color: 'blue', name: "PARTS OF A BICYCLE", items: ["HANDLEBAR", "SADDLE", "PEDAL", "SPOKE"], dossier: { summary: "Essential mechanical components of a bicycle.", legalOrTechBasis: "Everyday transport mechanics.", impact: "Zero-emission personal mobility." } },
    { topic: 'general', audience: 'Everyone', color: 'purple', name: "WORDS PRECEDING 'CAKE'", items: ["CUP", "PAN", "CHEESE", "SHORT"], dossier: { summary: "Words forming types of cake (Cupcake, Pancake, Cheesecake, Shortcake).", legalOrTechBasis: "Culinary wordplay.", impact: "Sweet lateral thinking!" } },

    // Culture & Media
    { topic: 'culture', audience: 'Everyone', color: 'yellow', name: "MUSICAL INSTRUMENTS WITH STRINGS", items: ["GUITAR", "VIOLIN", "CELLO", "HARP"], dossier: { summary: "Acoustic instruments that generate pitch via vibrating strings.", legalOrTechBasis: "Acoustics & music theory.", impact: "Universal artistic expression." } },
    { topic: 'culture', audience: 'Everyone', color: 'green', name: "FAMOUS WORLD MUSEUMS", items: ["LOUVRE", "PRADO", "MET", "UFFIZI"], dossier: { summary: "Iconic national cultural institutions preserving world artistic heritage.", legalOrTechBasis: "Cultural heritage curation.", impact: "Preserves humanity's collective artistic memory." } },
    { topic: 'culture', audience: 'Everyone', color: 'blue', name: "GENRES OF FILM", items: ["HORROR", "WESTERN", "COMEDY", "THRILLER"], dossier: { summary: "Standard narrative genres structuring cinema and screenwriting.", legalOrTechBasis: "Film studies.", impact: "Shapes storytelling formats." } },
    { topic: 'culture', audience: 'Everyone', color: 'purple', name: "WORDS BEFORE 'STAR'", items: ["POP", "ROCK", "MOVIE", "SHOOTING"], dossier: { summary: "Words compounding with 'Star' (Popstar, Rockstar, Moviestar, Shooting star).", legalOrTechBasis: "Pop culture idioms.", impact: "Pivots from celestial astronomy to celebrity fame." } },

    // Science & Nature
    { topic: 'science', audience: 'Everyone', color: 'yellow', name: "STATES OF MATTER IN EVERYDAY PHYSICS", items: ["SOLID", "LIQUID", "GAS", "PLASMA"], dossier: { summary: "The four fundamental observable states of physical matter.", legalOrTechBasis: "Thermodynamics.", impact: "Foundational physical sciences." } },
    { topic: 'science', audience: 'Civil Society', color: 'green', name: "NOBLE GASES IN THE PERIODIC TABLE", items: ["HELIUM", "NEON", "ARGON", "XENON"], dossier: { summary: "Chemically inert elements with complete valence electron shells.", legalOrTechBasis: "Chemistry.", impact: "Lighting and scientific cryogenics." } },
    { topic: 'science', audience: 'Civil Society', color: 'blue', name: "LAYERS OF EARTH'S ATMOSPHERE", items: ["TROPOSPHERE", "STRATOSPHERE", "MESOSPHERE", "THERMOSPHERE"], dossier: { summary: "Stratified atmospheric thermal layers shielding life on Earth.", legalOrTechBasis: "Atmospheric physics.", impact: "Regulates climate and satellite orbits." } },
    { topic: 'science', audience: 'Everyone', color: 'purple', name: "WORDS ENDING IN 'STONE'", items: ["MILE", "LIME", "TOMB", "CORNER"], dossier: { summary: "Words forming compounds with 'Stone' (Milestone, Limestone, Tombstone, Cornerstone).", legalOrTechBasis: "Geology and architectural idioms.", impact: "Bridges mineral rock with metrics and architecture." } },

    // History
    { topic: 'history', audience: 'Civil Society', color: 'yellow', name: "ANCIENT GREEK PHILOSOPHERS", items: ["SOCRATES", "PLATO", "ARISTOTLE", "PYTHAGORAS"], dossier: { summary: "Pioneering thinkers who established Western epistemology, logic, and ethics.", legalOrTechBasis: "Classical philosophy.", impact: "The philosophical bedrock of logic and democratic theory." } },
    { topic: 'history', audience: 'Everyone', color: 'green', name: "FAMOUS ARCHAEOLOGICAL SITES", items: ["COLOSSEUM", "PARTHENON", "PETRA", "MACHU PICCHU"], dossier: { summary: "UNESCO World Heritage sites preserving classical and pre-Columbian architecture.", legalOrTechBasis: "UNESCO World Heritage Convention 1972.", impact: "Protected cultural legacy of human civilization." } },
    { topic: 'history', audience: 'Civil Society', color: 'blue', name: "HISTORICAL PEACE CONFERENCES", items: ["WESTPHALIA", "VERSAILLES", "VIENNA", "YALTA"], dossier: { summary: "Treaty negotiations that redrew international borders and state sovereignty.", legalOrTechBasis: "International treaty history.", impact: "Created modern concepts of nation-state sovereignty." } },
    { topic: 'history', audience: 'Everyone', color: 'purple', name: "THINGS ASSOCIATED WITH 'GOLD'", items: ["RUSH", "MINE", "MEDAL", "FINGER"], dossier: { summary: "Words paired with 'Gold' (Gold rush, Goldmine, Gold medal, Goldfinger).", legalOrTechBasis: "History, sports, and cinema wordplay.", impact: "Fun lateral grouping linking California 1849 with James Bond!" } },

    // Politics & Society
    { topic: 'politics', audience: 'Civil Society', color: 'yellow', name: "FORMS OF GOVERNMENT", items: ["MONARCHY", "REPUBLIC", "FEDERATION", "OLIGARCHY"], dossier: { summary: "Institutional frameworks through which state sovereign authority is organized.", legalOrTechBasis: "Comparative constitutional law.", impact: "Determines citizen voice and democratic representation." } },
    { topic: 'politics', audience: 'Civil Society', color: 'green', name: "CIVIL SOCIETY ADVOCACY TACTICS", items: ["PETITION", "PROTEST", "BOYCOTT", "LOBBYING"], dossier: { summary: "Methods used by grassroots citizens and NGOs to influence public policy.", legalOrTechBasis: "Democratic participation rights.", impact: "Drives legislative reform from environmental protections to civil rights." } },
    { topic: 'politics', audience: 'Civil Society', color: 'blue', name: "CABINET EXECUTIVE MINISTRIES", items: ["DEFENSE", "TREASURY", "EDUCATION", "JUSTICE"], dossier: { summary: "Executive state departments administering national public policy.", legalOrTechBasis: "Public administration.", impact: "The functional delivery of public services and state governance." } },
    { topic: 'politics', audience: 'Everyone', color: 'purple', name: "WORDS THAT CAN PRECEDE 'POLL'", items: ["EXIT", "OPINION", "STRAW", "TELEGRAPH"], dossier: { summary: "Varieties of polls and historic communication (Exit poll, Opinion poll, Straw poll, Pole/Poll homophone).", legalOrTechBasis: "Electoral science & linguistics.", impact: "Lateral wordplay challenging players to see political sampling in phrases." } },

    // Law & Justice
    { topic: 'law', audience: 'Everyone', color: 'yellow', name: "EVERYDAY LEGAL DOCUMENTS", items: ["CONTRACT", "WILL", "LEASE", "DEED"], dossier: { summary: "Binding legal instruments governing property, inheritance, and agreements.", legalOrTechBasis: "Civil contract and property law.", impact: "Foundational legal instruments utilized by ordinary citizens." } },
    { topic: 'law', audience: 'Civil Society', color: 'green', name: "CRIMINAL DEFENSE PLEAS", items: ["NOT GUILTY", "SELF DEFENSE", "ALIBI", "INSANITY"], dossier: { summary: "Affirmative defenses raised by defendants to challenge criminal culpability.", legalOrTechBasis: "Criminal jurisprudence and Mens Rea doctrine.", impact: "Protects fundamental fairness against wrongful conviction." } },
    { topic: 'law', audience: 'Specialist', color: 'blue', name: "LATIN LEGAL MAXIMS", items: ["HABEAS CORPUS", "BONA FIDE", "SUBPOENA", "MENS REA"], dossier: { summary: "Foundational Latin maxims establishing core common-law principles.", legalOrTechBasis: "Classical Roman law influence on contemporary courts.", impact: "Underpins procedural safeguards from unlawful detention to intent." } },
    { topic: 'law', audience: 'Everyone', color: 'purple', name: "THINGS THAT CAN BE 'PASSED'", items: ["LAW", "EXAM", "TIME", "BATON"], dossier: { summary: "Things that undergo 'passing' (Passed law, Passed exam, Passed time, Passed baton).", legalOrTechBasis: "Cross-domain polysemy.", impact: "Lateral connection connecting legislative enactment with sports relays and tests." } },

    // International Relations
    { topic: 'ir', audience: 'Everyone', color: 'yellow', name: "EUROPEAN CAPITAL CITIES", items: ["PARIS", "BERLIN", "ROME", "MADRID"], dossier: { summary: "Capital seats of government in major European democracies.", legalOrTechBasis: "Geopolitics and European Union integration.", impact: "Epicenters of European policy and multilateral governance." } },
    { topic: 'ir', audience: 'Civil Society', color: 'green', name: "SPECIALIZED UN AGENCIES", items: ["UNESCO", "UNICEF", "WHO", "UNHCR"], dossier: { summary: "Specialized bodies of the United Nations managing health, children, education, and refugees.", legalOrTechBasis: "UN Charter Article 57.", impact: "Global delivery of humanitarian aid, public health, and human dignity." } },
    { topic: 'ir', audience: 'Specialist', color: 'blue', name: "ECONOMIC SANCTIONS INSTRUMENTS", items: ["ASSET FREEZE", "EMBARGO", "TRAVEL BAN", "SWIFT CUTOFF"], dossier: { summary: "Non-kinetic coercive economic measures deployed to deter international violations.", legalOrTechBasis: "UN Charter Chapter VII (Article 41) & OFAC sanctions regulations.", impact: "The primary non-military pressure tool in modern international statecraft." } },
    { topic: 'ir', audience: 'Everyone', color: 'purple', name: "WORDS THAT CAN PRECEDE 'LINE'", items: ["BORDER", "COAST", "DEAD", "FRONT"], dossier: { summary: "Terms compounded with 'Line' (Borderline, Coastline, Deadline, Frontline).", legalOrTechBasis: "Geography, military terminology, and project management.", impact: "Lateral bridge from territorial frontiers to calendar deadlines." } },

    // AI & Technology
    { topic: 'ai', audience: 'Everyone', color: 'yellow', name: "SOCIAL MEDIA POST FORMATS", items: ["STORY", "REEL", "POST", "SHORT"], dossier: { summary: "Everyday content publication formats across Instagram, TikTok, and YouTube.", legalOrTechBasis: "Consumer social platforms and user-generated content.", impact: "The primary interface through which modern society creates and consumes media." } },
    { topic: 'ai', audience: 'Civil Society', color: 'green', name: "DIGITAL PRIVACY & SECURITY TOOLS", items: ["VPN", "PASSWORD MANAGER", "AD BLOCKER", "TWO FACTOR"], dossier: { summary: "Essential digital hygiene tools protecting everyday citizens from tracking and identity theft.", legalOrTechBasis: "Cybersecurity best practices and data self-defense.", impact: "Empowers civil society against surveillance and algorithmic profiling." } },
    { topic: 'ai', audience: 'Specialist', color: 'blue', name: "COMPUTER VISION TASKS", items: ["OBJECT DETECTION", "SEGMENTATION", "DEPTH ESTIMATION", "IMAGE CLASSIFICATION"], dossier: { summary: "Core visual perception tasks automated by convolutional and transformer networks.", legalOrTechBasis: "Computer vision and autonomous navigation.", impact: "Powers everything from medical imaging to autonomous vehicles." } },
    { topic: 'ai', audience: 'Everyone', color: 'purple', name: "THINGS THAT CAN BE 'GENERATED'", items: ["AI CONTENT", "ELECTRICITY", "LEADS", "REVENUE"], dossier: { summary: "Diverse entities that are 'generated' (AI-generated content, electricity, sales leads, corporate revenue).", legalOrTechBasis: "Commerce, energy, and generative computing.", impact: "Lateral riddle highlighting the versatile verb 'generate'." } }
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
