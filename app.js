/**
 * AI & MULTI-TOPIC CONNECTIONS - GAME ENGINE
 * Author: Avi Perera (aviperera.com)
 * High-performance, zero-dependency, modular client-side engine with Web Audio API synthesis
 * Supports: AI, Law, IR, General Knowledge, Science, Culture, History, Politics, and Mixed Mode
 */

(function () {
  'use strict';

  const SafeStorage = {
    get: function(key) {
      try {
        return (typeof window !== 'undefined' && window.localStorage) ? window.localStorage.getItem(key) : null;
      } catch (e) {
        return null;
      }
    },
    set: function(key, val) {
      try {
        if (typeof window !== 'undefined' && window.localStorage) window.localStorage.setItem(key, val);
      } catch (e) {}
    }
  };

  const BUILTIN_TOPICS = [
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
  const BUILTIN_PUZZLES = [
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
  const BUILTIN_CATEGORY_BANK = [
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
    { topic: 'ai', audience: 'Everyone', color: 'purple', name: "THINGS THAT CAN BE 'GENERATED'", items: ["AI CONTENT", "ELECTRICITY", "LEADS", "REVENUE"], dossier: { summary: "Diverse entities that are 'generated' (AI-generated content, electricity, sales leads, corporate revenue).", legalOrTechBasis: "Commerce, energy, and generative computing.", impact: "Lateral riddle highlighting the versatile verb 'generate'." } },

    // Additional Diverse Categories (Question Bank Expansion for 3D & Bi-Layer Modes)
    { topic: 'general', audience: 'Everyone', color: 'yellow', name: "POPULAR DOG BREEDS", items: ["BEAGLE", "POODLE", "BULLDOG", "RETRIEVER"], dossier: { summary: "Domesticated canine breeds recognized globally.", legalOrTechBasis: "Zoology and companion animal welfare.", impact: "Beloved family companions." } },
    { topic: 'general', audience: 'Everyone', color: 'green', name: "VESSELS FOR WATER TRAVEL", items: ["CANOE", "YACHT", "KAYAK", "FERRY"], dossier: { summary: "Navigational vessels used for maritime and river transit.", legalOrTechBasis: "Maritime navigation.", impact: "Ancient and modern water transportation." } },
    { topic: 'general', audience: 'Everyone', color: 'blue', name: "THINGS WITH TEETH", items: ["COMB", "SAW", "GEAR", "ZIPPER"], dossier: { summary: "Mechanical and grooming objects featuring serrated teeth.", legalOrTechBasis: "Everyday mechanics and tooling.", impact: "Clever lateral functional association." } },
    { topic: 'general', audience: 'Everyone', color: 'purple', name: "WORDS PRECEDING 'CARD'", items: ["POST", "CREDIT", "WILD", "GIFT"], dossier: { summary: "Terms paired with 'Card' (Postcard, Credit card, Wildcard, Gift card).", legalOrTechBasis: "Commerce, gaming, and postal mail.", impact: "Common compound noun wordplay." } },

    { topic: 'science', audience: 'Civil Society', color: 'yellow', name: "SI BASE UNITS OF MEASUREMENT", items: ["METER", "KILOGRAM", "SECOND", "KELVIN"], dossier: { summary: "Standard metric base units defined by the International Bureau of Weights and Measures.", legalOrTechBasis: "BIPM Metrology standards.", impact: "The global foundation of scientific measurement." } },
    { topic: 'science', audience: 'Civil Society', color: 'green', name: "BLOOD VESSELS IN HUMAN ANATOMY", items: ["ARTERY", "VEIN", "CAPILLARY", "AORTA"], dossier: { summary: "Tubular structures carrying blood through the circulatory system.", legalOrTechBasis: "Human physiology.", impact: "Essential cardiovascular biology." } },
    { topic: 'science', audience: 'Everyone', color: 'blue', name: "OCEANS OF THE WORLD", items: ["PACIFIC", "ATLANTIC", "INDIAN", "ARCTIC"], dossier: { summary: "The major continuous bodies of salt water covering 71% of Earth.", legalOrTechBasis: "UN Convention on the Law of the Sea (UNCLOS).", impact: "Regulates marine biodiversity and global maritime trade." } },
    { topic: 'science', audience: 'Everyone', color: 'purple', name: "WORDS THAT CAN PRECEDE 'WAVE'", items: ["HEAT", "SHOCK", "RADIO", "TIDAL"], dossier: { summary: "Phrases joined with 'Wave' (Heatwave, Shockwave, Radiowave, Tidal wave).", legalOrTechBasis: "Physics and meteorology.", impact: "Bridges climate events with electromagnetic physics." } },

    { topic: 'culture', audience: 'Everyone', color: 'yellow', name: "CLASSIC RETRO VIDEO GAMES", items: ["TETRIS", "PACMAN", "PONG", "SPACE INVADERS"], dossier: { summary: "Pioneering arcade and console video games that birthed the gaming industry.", legalOrTechBasis: "Interactive digital entertainment history.", impact: "Cultural landmarks in computing history." } },
    { topic: 'culture', audience: 'Civil Society', color: 'green', name: "MUSICAL TEMPO MARKINGS", items: ["ALLEGRO", "ANDANTE", "PRESTO", "LARGO"], dossier: { summary: "Traditional Italian terms indicating the speed and mood of musical compositions.", legalOrTechBasis: "Classical music theory.", impact: "Universal acoustic performance language." } },
    { topic: 'culture', audience: 'Everyone', color: 'blue', name: "COFFEE DRINK VARIATIONS", items: ["ESPRESSO", "CAPPUCCINO", "LATTE", "AMERICANO"], dossier: { summary: "Popular espresso-based coffee beverages enjoyed globally.", legalOrTechBasis: "Culinary culture.", impact: "Everyday cafe culture across cities worldwide." } },
    { topic: 'culture', audience: 'Everyone', color: 'purple', name: "THINGS WITH A 'CHAIR'", items: ["WHEEL", "ARM", "HIGH", "DECK"], dossier: { summary: "Words forming types of chairs (Wheelchair, Armchair, Highchair, Deckchair).", legalOrTechBasis: "Furniture design and accessibility.", impact: "Clever lateral furniture grouping." } },

    { topic: 'history', audience: 'Civil Society', color: 'yellow', name: "RENAISSANCE POLYMATHS & ARTISTS", items: ["DA VINCI", "MICHELANGELO", "RAPHAEL", "DONATELLO"], dossier: { summary: "Master painters, sculptors, and architects of the Italian Renaissance.", legalOrTechBasis: "Art history and Renaissance humanism.", impact: "Catalyzed humanism and scientific inquiry." } },
    { topic: 'history', audience: 'Everyone', color: 'green', name: "SEVEN WONDERS OF THE ANCIENT WORLD", items: ["PYRAMIDS", "COLOSSUS", "LIGHTHOUSE", "GARDENS"], dossier: { summary: "Classical architectural marvels documented by Hellenic travelers.", legalOrTechBasis: "Classical antiquities.", impact: "Early human monuments celebrating monumental engineering." } },
    { topic: 'history', audience: 'Civil Society', color: 'blue', name: "HISTORICAL CURRENCIES BEFORE THE EURO", items: ["FRANC", "DEUTSCHE MARK", "LIRA", "PESETA"], dossier: { summary: "National currencies replaced by the single European currency in 2002.", legalOrTechBasis: "Treaty of Maastricht & European Economic and Monetary Union.", impact: "The largest monetary integration experiment in human history." } },
    { topic: 'history', audience: 'Everyone', color: 'purple', name: "WORDS THAT CAN PRECEDE 'TOWER'", items: ["EIFFEL", "CLOCK", "CONTROL", "IVORY"], dossier: { summary: "Words paired with 'Tower' (Eiffel Tower, Clock tower, Control tower, Ivory tower).", legalOrTechBasis: "Architecture, aviation, and academic idioms.", impact: "Lateral wordplay from Paris monuments to airport runways." } },

    { topic: 'law', audience: 'Specialist', color: 'yellow', name: "INTELLECTUAL PROPERTY CATEGORIES", items: ["PATENT", "COPYRIGHT", "TRADEMARK", "TRADE SECRET"], dossier: { summary: "The four primary legal regimes protecting intangible creations of the human intellect.", legalOrTechBasis: "WIPO Conventions and national IP statutory codes.", impact: "Dictates the boundaries of innovation, open access, and commercial exclusivity." } },
    { topic: 'law', audience: 'Civil Society', color: 'green', name: "CIVIL LIBERTIES IN CRIMINAL PROCEDURE", items: ["DUE PROCESS", "SPEEDY TRIAL", "DOUBLE JEOPARDY", "RIGHT TO COUNSEL"], dossier: { summary: "Fundamental procedural guarantees protecting individuals facing state prosecution.", legalOrTechBasis: "US Bill of Rights (Amendments 5 & 6) and ECHR Article 6.", impact: "Essential legal shields guarding against wrongful imprisonment." } },
    { topic: 'law', audience: 'Everyone', color: 'blue', name: "CRIMINAL OFFENSE CATEGORIES", items: ["ARSON", "FORGERY", "PERJURY", "LARCENY"], dossier: { summary: "Recognized common-law offenses against property, state administration, and truth.", legalOrTechBasis: "Penal code statutory jurisprudence.", impact: "The core taxonomy of criminal prohibition." } },
    { topic: 'law', audience: 'Everyone', color: 'purple', name: "THINGS THAT CAN BE 'HELD'", items: ["COURT", "BREATH", "HANDS", "GRUDGE"], dossier: { summary: "Things that can be 'held' (Held court, Held breath, Held hands, Held a grudge).", legalOrTechBasis: "Everyday linguistic idioms.", impact: "Playful lateral bridge connecting judicial proceedings with emotion and physical touch." } },

    { topic: 'ai', audience: 'Specialist', color: 'yellow', name: "FOUNDATIONAL NEURAL NETWORK TYPES", items: ["TRANSFORMER", "CONVOLUTIONAL", "RECURRENT", "DIFFUSION"], dossier: { summary: "The major mathematical network architectures powering deep learning.", legalOrTechBasis: "Machine learning literature (CNN, RNN, Transformer, Diffusion).", impact: "The algorithmic engines underlying vision, speech, reasoning, and synthesis." } },
    { topic: 'ai', audience: 'Everyone', color: 'green', name: "MAJOR CLOUD COMPUTING HYPERSCALERS", items: ["AMAZON AWS", "MICROSOFT AZURE", "GOOGLE CLOUD", "ORACLE CLOUD"], dossier: { summary: "Leading global providers of centralized enterprise computing and AI hosting infrastructure.", legalOrTechBasis: "Cloud computing infrastructure and market competition antitrust law.", impact: "Hosts the vast majority of the world's AI training and inference pipelines." } },
    { topic: 'ai', audience: 'Civil Society', color: 'blue', name: "DATA PROTECTION SAFEGUARDS", items: ["ENCRYPTION", "ANONYMIZATION", "PSEUDONYMIZATION", "ACCESS CONTROL"], dossier: { summary: "Technical measures required to protect confidential records and citizen privacy.", legalOrTechBasis: "GDPR Article 32 (Security of Processing) and ISO/IEC 27001.", impact: "The minimum technical bar for lawful storage of human data in digital systems." } },
    { topic: 'ai', audience: 'Everyone', color: 'purple', name: "THINGS YOU CAN 'PROMPT'", items: ["AI MODEL", "ACTOR", "USER", "MEMORY"], dossier: { summary: "Things that receive a 'prompt' (Prompting an AI model, prompter for an actor, user prompt, memory prompt).", legalOrTechBasis: "Theater, psychology, and conversational AI.", impact: "Connects LLM prompting with traditional stage prompters and human memory!" } }
  ];
  const TOPICS = (typeof window !== 'undefined' && Array.isArray(window.AI_TOPICS) && window.AI_TOPICS.length > 0)
    ? window.AI_TOPICS
    : BUILTIN_TOPICS;

  const PUZZLES = (typeof window !== 'undefined' && Array.isArray(window.AI_PUZZLES) && window.AI_PUZZLES.length > 0)
    ? window.AI_PUZZLES
    : BUILTIN_PUZZLES;

  const CATEGORY_BANK = (typeof window !== 'undefined' && Array.isArray(window.AI_CATEGORY_BANK) && window.AI_CATEGORY_BANK.length > 0)
    ? window.AI_CATEGORY_BANK
    : BUILTIN_CATEGORY_BANK;

// --- Web Audio Synthesizer (Zero External Audio Assets) ---
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = SafeStorage.get('ai_connections_sound') !== 'false';
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    SafeStorage.set('ai_connections_sound', this.enabled ? 'true' : 'false');
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.1, gainVal = 0.15) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // AudioContext unavailable or restricted
    }
  }

  playTap() {
    this.playTone(520, 'sine', 0.06, 0.12);
  }

  playDeselect() {
    this.playTone(380, 'sine', 0.05, 0.08);
  }

  playShuffle() {
    this.playTone(420, 'triangle', 0.08, 0.1);
  }

  playWrong() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(110, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {}
  }

  playOneAway() {
    this.playTone(660, 'sine', 0.12, 0.15);
    setTimeout(() => this.playTone(880, 'sine', 0.15, 0.12), 80);
  }

  playCorrect() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'triangle', 0.35, 0.14);
        }, idx * 70);
      });
    } catch (e) {}
  }

  playWin() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        setTimeout(() => {
          this.playTone(freq, 'sine', 0.5, 0.18);
        }, idx * 100);
      });
    } catch (e) {}
  }
}

// --- Main Game State Machine ---
class ConnectionsGame {
  constructor() {
    this.sound = new SoundEngine();
    this.puzzleIndex = 0;
    this.currentPuzzle = null;
    this.remainingTiles = [];
    this.selectedTiles = new Set();
    this.solvedCategories = [];
    this.mistakesRemaining = 4;
    this.maxMistakes = 4;
    this.guessHistory = [];
    this.submittedCombinations = new Set();
    this.gameOver = false;
    this.gameWon = false;
    this.isCustom = false;

    // 3D Spatial Engine State
    this.is3D = false;
    this.dim3D = '16'; // '16' | '32' | 'cylinder' | 'cube'
    this.rot3D = { x: 22, y: -25, zoom: 0 };
    this.depth3D = 100;
    this.autoSpin3D = false;
    this.isDragging3D = false;
    this.lastPointerPos = { x: 0, y: 0 };
    this.spinAnimFrame = null;

    // DOM Elements
    this.dom = {
      grid: document.getElementById('grid-container'),
      solved: document.getElementById('solved-categories'),
      mistakeDots: document.getElementById('mistake-dots'),
      btnSubmit: document.getElementById('btn-submit'),
      btnShuffle: document.getElementById('btn-shuffle'),
      btnDeselect: document.getElementById('btn-deselect'),
      btnHint: document.getElementById('btn-hint'),
      puzzleTitle: document.getElementById('puzzle-title-display'),
      puzzleTopic: document.getElementById('puzzle-topic-display'),
      puzzleAudience: document.getElementById('puzzle-audience-display'),
      puzzleDiff: document.getElementById('puzzle-difficulty-display'),
      puzzleMode: document.getElementById('puzzle-mode-tag'),
      toastContainer: document.getElementById('toast-container'),
      btnArchive: document.getElementById('btn-archive'),
      btnCustom: document.getElementById('btn-custom'),
      btnHelp: document.getElementById('btn-help'),
      btnStats: document.getElementById('btn-stats'),
      btnSound: document.getElementById('btn-sound'),
      btnTheme: document.getElementById('btn-theme'),
      btnShareCopy: document.getElementById('btn-share-copy'),
      btnGenerateCustom: document.getElementById('btn-generate-custom'),
      btnMixModal: document.getElementById('btn-mix-modal'),
      btnPillMix: document.getElementById('btn-pill-mix'),
      btnSelectAllTopics: document.getElementById('btn-select-all-topics'),
      btnClearAllTopics: document.getElementById('btn-clear-all-topics'),
      btnGenerateMix: document.getElementById('btn-generate-mix'),
      modalMix: document.getElementById('modal-mix'),
      topicBar: document.getElementById('topic-bar'),
      shareSection: document.getElementById('share-section'),
      sharePreview: document.getElementById('share-preview'),
      archiveList: document.getElementById('archive-list'),
      // 3D Engine Elements
      tab2D: document.getElementById('tab-mode-2d'),
      tab3D: document.getElementById('tab-mode-3d'),
      viewport3D: document.getElementById('viewport-3d'),
      stage3D: document.getElementById('stage-3d'),
      depthSlider: document.getElementById('depth-slider'),
      btn3DIso: document.getElementById('btn-3d-iso'),
      btn3DFront: document.getElementById('btn-3d-front'),
      btn3DTop: document.getElementById('btn-3d-top'),
      btn3DSpin: document.getElementById('btn-3d-spin'),
      btn3DReset: document.getElementById('btn-3d-reset')
    };

    this.stats = this.loadStats();
    this.init();
  }

  init() {
    this.detectEnvironment();
    this.bindEvents();
    this.initThemeAndSound();
    this.resolveTargetPuzzle();
    this.startPuzzle(this.puzzleIndex);
    this.notifyParentHeight();
  }

  detectEnvironment() {
    const params = new URLSearchParams(window.location.search);
    const isEmbed = params.get('embed') === 'true' || window.self !== window.top;
    if (isEmbed) {
      document.body.classList.add('embedded');
    }
  }

  initThemeAndSound() {
    const params = new URLSearchParams(window.location.search);
    const themeParam = params.get('theme');
    const storedTheme = SafeStorage.get('ai_connections_theme');
    const theme = themeParam || storedTheme || 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    if (params.get('sound') === '0') {
      this.sound.enabled = false;
    }
    this.updateSoundIcon();
  }

  updateSoundIcon() {
    this.dom.btnSound.textContent = this.sound.enabled ? '🔊' : '🔇';
    this.dom.btnSound.title = this.sound.enabled ? 'Mute Sound' : 'Enable Sound';
  }

  resolveTargetPuzzle() {
    const params = new URLSearchParams(window.location.search);
    const customData = params.get('custom');
    if (customData) {
      try {
        const decoded = JSON.parse(decodeURIComponent(escape(atob(customData))));
        if (decoded && decoded.categories && decoded.categories.length === 4) {
          this.currentPuzzle = decoded;
          this.isCustom = true;
          return;
        }
      } catch (e) {
        this.showToast('Invalid custom puzzle link! Loading Daily.');
      }
    }

    const puzzleParam = params.get('puzzle');
    if (puzzleParam !== null) {
      const idx = parseInt(puzzleParam, 10);
      if (!isNaN(idx) && idx >= 1 && idx <= PUZZLES.length) {
        this.puzzleIndex = idx - 1;
        return;
      }
    }

    // Default to Daily Puzzle (Epoch Day modulo count)
    const epochDays = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
    this.puzzleIndex = epochDays % PUZZLES.length;
  }

  startPuzzle(index) {
    if (!this.isCustom) {
      this.puzzleIndex = index;
      this.currentPuzzle = PUZZLES[this.puzzleIndex];
    }

    this.solvedCategories = [];
    this.selectedTiles.clear();
    this.mistakesRemaining = this.maxMistakes;
    this.guessHistory = [];
    this.submittedCombinations.clear();
    this.gameOver = false;
    this.gameWon = false;

    // Collect 16 items
    const allItems = [];
    this.currentPuzzle.categories.forEach(cat => {
      cat.items.forEach(item => {
        allItems.push({
          text: item.trim().toUpperCase(),
          category: cat.name,
          color: cat.color
        });
      });
    });

    this.remainingTiles = this.shuffleArray(allItems);

    // Update Header Metadata
    const topicIcons = {
      ai: '🤖 AI & Tech',
      law: '⚖️ Law',
      ir: '🌍 World',
      general: '🧠 General',
      science: '🔬 Science',
      culture: '🎬 Culture',
      history: '📜 History',
      politics: '🏛️ Politics',
      mixed: '🔀 Mixed'
    };

    this.dom.puzzleTitle.textContent = this.isCustom 
      ? 'Custom AI Puzzle' 
      : (this.currentPuzzle.id === 'MIXED' ? 'Mixed Challenge' : `Puzzle #${this.currentPuzzle.id}`);
    
    if (this.dom.puzzleTopic) {
      const topicKey = this.currentPuzzle.topic || 'ai';
      this.dom.puzzleTopic.textContent = topicIcons[topicKey] || '🤖 AI';
    }

    if (this.dom.puzzleAudience) {
      const aud = this.currentPuzzle.audience || 'Everyone';
      this.dom.puzzleAudience.textContent = aud;
      this.dom.puzzleAudience.className = `audience-pill ${aud.replace(/\s+/g, '-')}`;
    }

    if (this.dom.puzzleDiff) {
      this.dom.puzzleDiff.textContent = this.currentPuzzle.difficulty || 'Intermediate';
      this.dom.puzzleDiff.className = `difficulty-pill ${this.currentPuzzle.difficulty || 'Intermediate'}`;
    }
    
    this.dom.puzzleMode.textContent = this.isCustom 
      ? 'Community Created' 
      : (this.currentPuzzle.id === 'MIXED' ? 'Mix & Match' : (this.puzzleIndex === (Math.floor(Date.now() / 86400000) % PUZZLES.length) ? 'Daily Challenge' : 'Archive Vault'));

    this.renderMistakes();
    this.renderSolvedCategories();
    this.renderGrid(); if (this.is3D) this.render3DStage();
    this.updateControls();
    this.notifyParentHeight();
  }

  renderMistakes() {
    this.dom.mistakeDots.innerHTML = '';
    for (let i = 0; i < this.maxMistakes; i++) {
      const dot = document.createElement('span');
      dot.className = i < this.mistakesRemaining ? 'dot' : 'dot lost';
      this.dom.mistakeDots.appendChild(dot);
    }
  }

  renderSolvedCategories() {
    this.dom.solved.innerHTML = '';
    this.solvedCategories.forEach(cat => {
      const card = document.createElement('div');
      card.className = `category-card ${cat.color}`;
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `View dossier for ${cat.name}`);

      const title = document.createElement('div');
      title.className = 'card-title';
      title.textContent = cat.name;

      const items = document.createElement('div');
      items.className = 'card-items';
      items.textContent = cat.items.join(', ');

      const hint = document.createElement('div');
      hint.className = 'card-hint';
      hint.innerHTML = '📖 Tap for Intelligence Dossier';

      card.appendChild(title);
      card.appendChild(items);
      card.appendChild(hint);

      card.addEventListener('click', () => {
        this.sound.playTap();
        this.openDossierModal(cat);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.openDossierModal(cat);
        }
      });

      this.dom.solved.appendChild(card);
    });
  }

  renderGrid() {
    this.dom.grid.innerHTML = '';
    this.remainingTiles.forEach(tileObj => {
      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.textContent = tileObj.text;
      tile.setAttribute('role', 'checkbox');
      tile.setAttribute('aria-checked', this.selectedTiles.has(tileObj.text) ? 'true' : 'false');
      tile.setAttribute('tabindex', '0');

      // Adaptive text size for long phrases
      if (tileObj.text.length > 22) {
        tile.classList.add('extra-long-text');
      } else if (tileObj.text.length > 14) {
        tile.classList.add('long-text');
      }

      if (this.selectedTiles.has(tileObj.text)) {
        tile.classList.add('selected');
      }

      tile.addEventListener('click', () => this.handleTileClick(tileObj.text, tile));
      tile.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handleTileClick(tileObj.text, tile);
        }
      });

      this.dom.grid.appendChild(tile);
    });
  }

  handleTileClick(text, element) {
    if (this.gameOver) return;

    if (this.selectedTiles.has(text)) {
      this.selectedTiles.delete(text);
      this.sound.playDeselect();
      element.classList.remove('selected');
      element.setAttribute('aria-checked', 'false');
    } else {
      if (this.selectedTiles.size >= 4) {
        this.showToast('You can only select 4 items!');
        return;
      }
      this.selectedTiles.add(text);
      this.sound.playTap();
      element.classList.add('selected');
      element.setAttribute('aria-checked', 'true');
    }

    this.updateControls();
  }

  updateControls() {
    this.dom.btnSubmit.disabled = this.selectedTiles.size !== 4 || this.gameOver;
  }

  handleShuffle() {
    if (this.gameOver) return;
    this.sound.playShuffle();
    this.remainingTiles = this.shuffleArray(this.remainingTiles);
    this.renderGrid(); if (this.is3D) this.render3DStage();
  }

  handleDeselectAll() {
    if (this.gameOver || this.selectedTiles.size === 0) return;
    this.sound.playDeselect();
    this.selectedTiles.clear();
    this.renderGrid(); if (this.is3D) this.render3DStage();
    this.updateControls();
  }

  handleHint() {
    if (this.gameOver) return;
    // Find an unsolved category and highlight 2 of its items
    const unsolvedCat = this.currentPuzzle.categories.find(cat => 
      !this.solvedCategories.some(solved => solved.name === cat.name)
    );
    if (!unsolvedCat) return;

    const availableItems = unsolvedCat.items.filter(item => 
      this.remainingTiles.some(t => t.text === item.toUpperCase())
    );

    if (availableItems.length >= 2) {
      this.sound.playOneAway();
      this.showToast(`💡 Hint: "${availableItems[0]}" and "${availableItems[1]}" share a connection!`);
    }
  }

  handleSubmit() {
    if (this.selectedTiles.size !== 4 || this.gameOver) return;

    const selectedArray = Array.from(this.selectedTiles);
    const sortedKey = [...selectedArray].sort().join('|');

    // Duplicate check
    if (this.submittedCombinations.has(sortedKey)) {
      this.showToast('Already guessed!');
      this.sound.playDeselect();
      return;
    }
    this.submittedCombinations.add(sortedKey);

    // Map each selected item to its category
    const guessWithColors = selectedArray.map(item => {
      const tileObj = this.remainingTiles.find(t => t.text === item);
      return { item, color: tileObj ? tileObj.color : 'yellow' };
    });
    this.guessHistory.push(guessWithColors);

    // Check if the 4 items match any unsolved category
    let matchedCategory = null;
    for (const cat of this.currentPuzzle.categories) {
      const isAlreadySolved = this.solvedCategories.some(s => s.name === cat.name);
      if (isAlreadySolved) continue;

      const catItemsUpper = cat.items.map(i => i.trim().toUpperCase());
      const allMatch = selectedArray.every(item => catItemsUpper.includes(item));
      if (allMatch) {
        matchedCategory = cat;
        break;
      }
    }

    if (matchedCategory) {
      // Correct!
      this.sound.playCorrect();
      this.solvedCategories.push(matchedCategory);
      this.remainingTiles = this.remainingTiles.filter(t => !selectedArray.includes(t.text));
      this.selectedTiles.clear();

      this.renderSolvedCategories();
      this.renderGrid(); if (this.is3D) this.render3DStage();
      this.updateControls();
      this.notifyParentHeight();

      // Check win condition
      if (this.solvedCategories.length === 4) {
        this.handleGameWin();
      }
    } else {
      // Check for "One away..."
      let isOneAway = false;
      for (const cat of this.currentPuzzle.categories) {
        const isAlreadySolved = this.solvedCategories.some(s => s.name === cat.name);
        if (isAlreadySolved) continue;

        const catItemsUpper = cat.items.map(i => i.trim().toUpperCase());
        const matchCount = selectedArray.filter(item => catItemsUpper.includes(item)).length;
        if (matchCount === 3) {
          isOneAway = true;
          break;
        }
      }

      this.mistakesRemaining--;
      this.renderMistakes();

      // Animate shake on selected tiles
      const tileDoms = this.dom.grid.querySelectorAll('.tile.selected');
      tileDoms.forEach(t => t.classList.add('shake'));
      setTimeout(() => tileDoms.forEach(t => t.classList.remove('shake')), 400);

      if (isOneAway) {
        this.sound.playOneAway();
        this.showToast('One away...');
      } else {
        this.sound.playWrong();
      }

      if (this.mistakesRemaining <= 0) {
        this.handleGameOver();
      }
    }
  }

  handleGameWin() {
    this.gameOver = true;
    this.gameWon = true;
    this.sound.playWin();
    this.showToast('Superb! All connections solved! 🎯');
    this.updateStats(true);
    setTimeout(() => this.openStatsModal(), 1200);
  }

  handleGameOver() {
    this.gameOver = true;
    this.gameWon = false;
    this.showToast('Game over! Revealing remaining connections...');
    this.updateStats(false);

    // Auto-reveal remaining categories with a progressive reveal
    setTimeout(() => {
      this.currentPuzzle.categories.forEach(cat => {
        if (!this.solvedCategories.some(s => s.name === cat.name)) {
          this.solvedCategories.push(cat);
        }
      });
      this.remainingTiles = [];
      this.selectedTiles.clear();
      this.renderSolvedCategories();
      this.renderGrid(); if (this.is3D) this.render3DStage();
      this.updateControls();
      this.notifyParentHeight();
      setTimeout(() => this.openStatsModal(), 1500);
    }, 1000);
  }

  openDossierModal(cat) {
    const modal = document.getElementById('modal-dossier');
    const pill = document.getElementById('dossier-pill');
    const itemsEl = document.getElementById('dossier-items');
    const summaryEl = document.getElementById('dossier-summary');
    const basisEl = document.getElementById('dossier-basis');
    const impactEl = document.getElementById('dossier-impact');

    pill.className = `dossier-pill ${cat.color}`;
    pill.textContent = cat.name;
    itemsEl.textContent = cat.items.join(' • ');

    if (cat.dossier) {
      summaryEl.textContent = cat.dossier.summary || 'No summary provided.';
      basisEl.textContent = cat.dossier.legalOrTechBasis || 'Statutory / technical literature consensus.';
      impactEl.textContent = cat.dossier.impact || 'Constitutes an essential pillar of contemporary AI governance.';
    } else {
      summaryEl.textContent = 'Curated grouping in AI governance and frontier systems.';
      basisEl.textContent = 'International AI regulatory frameworks and benchmark evaluations.';
      impactEl.textContent = 'Defines the structural boundaries of lawful and safe machine learning systems.';
    }

    this.openModal(modal);
  }

  openStatsModal() {
    const modal = document.getElementById('modal-stats');
    document.getElementById('stat-played').textContent = this.stats.played;
    const winPct = this.stats.played > 0 ? Math.round((this.stats.won / this.stats.played) * 100) : 0;
    document.getElementById('stat-win-pct').textContent = `${winPct}%`;
    document.getElementById('stat-streak').textContent = this.stats.streak;
    document.getElementById('stat-max-streak').textContent = this.stats.maxStreak;

    if (this.gameOver && this.guessHistory.length > 0) {
      this.dom.shareSection.classList.remove('hidden');
      const shareText = this.generateShareText();
      this.dom.sharePreview.textContent = shareText;
    } else {
      this.dom.shareSection.classList.add('hidden');
    }

    this.openModal(modal);
  }

  generateShareText() {
    const colorEmojiMap = {
      yellow: '🟨',
      green: '🟩',
      blue: '🟦',
      purple: '🟪'
    };

    let titleText = this.isCustom 
      ? 'AI Connections (Custom Challenge)'
      : `AI Connections #${this.currentPuzzle.id}`;

    let matrix = this.guessHistory.map(row => {
      return row.map(g => colorEmojiMap[g.color] || '⬜').join('');
    }).join('\n');

    return `${titleText}\nScore: ${this.gameWon ? `${this.guessHistory.length} Guesses` : 'Revealed'}\n${matrix}\nPlay at aviperera.com`;
  }

  copyShareResult() {
    const text = this.generateShareText();
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        this.sound.playTap();
        this.showToast('Results copied to clipboard! 📋');
      }).catch(() => {
        this.fallbackCopy(text);
      });
    } else {
      this.fallbackCopy(text);
    }
  }

  fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      this.sound.playTap();
      this.showToast('Results copied to clipboard! 📋');
    } catch (e) {
      this.showToast('Could not auto-copy. Please copy manually.');
    }
    document.body.removeChild(textarea);
  }

  openArchiveModal() {
    const modal = document.getElementById('modal-archive');
    this.renderArchiveList('all');
    const pills = document.querySelectorAll('#archive-topic-filter .topic-pill');
    pills.forEach(p => p.classList.toggle('active', p.getAttribute('data-filter-topic') === 'all'));
    this.openModal(modal);
  }

  synthesizeMixedPuzzle(selectedTopics) {
    if (!selectedTopics || selectedTopics.length === 0) {
      selectedTopics = ['general', 'culture', 'science', 'history', 'law', 'politics', 'ir', 'ai'];
    }

    const eligible = CATEGORY_BANK.filter(c => selectedTopics.includes(c.topic));
    
    const byColor = {
      yellow: eligible.filter(c => c.color === 'yellow'),
      green: eligible.filter(c => c.color === 'green'),
      blue: eligible.filter(c => c.color === 'blue'),
      purple: eligible.filter(c => c.color === 'purple')
    };

    for (let attempt = 0; attempt < 30; attempt++) {
      const yPool = byColor.yellow.length > 0 ? byColor.yellow : CATEGORY_BANK.filter(c => c.color === 'yellow');
      const gPool = byColor.green.length > 0 ? byColor.green : CATEGORY_BANK.filter(c => c.color === 'green');
      const bPool = byColor.blue.length > 0 ? byColor.blue : CATEGORY_BANK.filter(c => c.color === 'blue');
      const pPool = byColor.purple.length > 0 ? byColor.purple : CATEGORY_BANK.filter(c => c.color === 'purple');

      const y = yPool[Math.floor(Math.random() * yPool.length)];
      const g = gPool[Math.floor(Math.random() * gPool.length)];
      const b = bPool[Math.floor(Math.random() * bPool.length)];
      const p = pPool[Math.floor(Math.random() * pPool.length)];

      if (!y || !g || !b || !p) continue;

      const allWords = new Set();
      let hasCollision = false;
      [y, g, b, p].forEach(cat => {
        cat.items.forEach(item => {
          const up = item.toUpperCase();
          if (allWords.has(up)) hasCollision = true;
          allWords.add(up);
        });
      });

      if (!hasCollision && allWords.size === 16) {
        return {
          id: 'MIXED',
          title: 'Custom Mixed Challenge',
          topic: 'mixed',
          audience: 'Everyone',
          difficulty: 'Intermediate',
          categories: [
            JSON.parse(JSON.stringify(y)),
            JSON.parse(JSON.stringify(g)),
            JSON.parse(JSON.stringify(b)),
            JSON.parse(JSON.stringify(p))
          ]
        };
      }
    }

    return PUZZLES[0];
  }

  playMixedGame() {
    const checkboxes = document.querySelectorAll('input[name="topic-choice"]:checked');
    const selected = Array.from(checkboxes).map(cb => cb.value);
    if (selected.length === 0) {
      this.showToast('Please select at least 1 topic!');
      return;
    }

    const mixedPuzzle = this.synthesizeMixedPuzzle(selected);
    this.closeModal(document.getElementById('modal-mix'));
    this.currentPuzzle = mixedPuzzle;
    this.isCustom = true;
    this.startPuzzle(0);
    this.sound.playCorrect();
    this.showToast(`Generated dynamic mix across ${selected.length} topics! 🔀`);
  }

  filterArchive(topic) {
    this.renderArchiveList(topic);
    const pills = document.querySelectorAll('#archive-topic-filter .topic-pill');
    pills.forEach(p => {
      p.classList.toggle('active', p.getAttribute('data-filter-topic') === topic);
    });
  }

  renderArchiveList(filterTopic = 'all') {
    this.dom.archiveList.innerHTML = '';
    const filtered = filterTopic === 'all' 
      ? PUZZLES 
      : PUZZLES.filter(p => p.topic === filterTopic);

    if (filtered.length === 0) {
      this.dom.archiveList.innerHTML = '<p style="font-size:0.85rem; color:var(--text-muted); text-align:center; padding:12px;">No pre-built puzzles for this topic yet. Generate one in Mix & Match mode!</p>';
      return;
    }

    filtered.forEach((p) => {
      const originalIdx = PUZZLES.findIndex(item => item.id === p.id);
      const card = document.createElement('div');
      card.className = `archive-card ${originalIdx === this.puzzleIndex && !this.isCustom ? 'active' : ''}`;
      
      const meta = document.createElement('div');
      meta.className = 'archive-meta';

      const title = document.createElement('div');
      title.className = 'archive-title';
      title.textContent = `#${p.id} — ${p.title}`;

      const tags = document.createElement('div');
      tags.className = 'archive-tags';
      const audienceBadge = p.audience ? `[${p.audience}] • ` : '';
      tags.textContent = `${audienceBadge}${(p.tags || []).join(' • ')}`;

      meta.appendChild(title);
      meta.appendChild(tags);

      const diffPill = document.createElement('span');
      diffPill.className = `difficulty-pill ${p.difficulty || 'Intermediate'}`;
      diffPill.textContent = p.difficulty || 'Intermediate';

      card.appendChild(meta);
      card.appendChild(diffPill);

      card.addEventListener('click', () => {
        this.sound.playTap();
        this.closeModal(document.getElementById('modal-archive'));
        this.isCustom = false;
        window.history.pushState({}, '', `?puzzle=${p.id}`);
        this.startPuzzle(originalIdx);
      });

      this.dom.archiveList.appendChild(card);
    });
  }


  openCustomModal() {
    this.openModal(document.getElementById('modal-custom'));
  }

  generateCustomPuzzle() {
    const title = document.getElementById('custom-puzzle-title').value.trim() || 'Custom AI Challenge';
    const groups = [
      { color: 'yellow', prefix: 'custom-g1' },
      { color: 'green', prefix: 'custom-g2' },
      { color: 'blue', prefix: 'custom-g3' },
      { color: 'purple', prefix: 'custom-g4' }
    ];

    const categories = [];
    const allItems = new Set();

    for (const g of groups) {
      const catName = document.getElementById(`${g.prefix}-title`).value.trim();
      const items = [
        document.getElementById(`${g.prefix}-item1`).value.trim().toUpperCase(),
        document.getElementById(`${g.prefix}-item2`).value.trim().toUpperCase(),
        document.getElementById(`${g.prefix}-item3`).value.trim().toUpperCase(),
        document.getElementById(`${g.prefix}-item4`).value.trim().toUpperCase()
      ];

      if (!catName) {
        this.showToast(`Please enter a category name for ${g.color.toUpperCase()} group.`);
        return;
      }

      for (const item of items) {
        if (!item) {
          this.showToast(`All 4 items in ${catName} must be filled.`);
          return;
        }
        if (allItems.has(item)) {
          this.showToast(`Duplicate item detected: "${item}". All 16 items must be unique.`);
          return;
        }
        allItems.add(item);
      }

      categories.push({
        name: catName.toUpperCase(),
        color: g.color,
        items
      });
    }

    const payload = {
      id: 'CUSTOM',
      title,
      difficulty: 'Custom',
      categories
    };

    const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const shareUrl = `${window.location.origin}${window.location.pathname}?custom=${b64}`;

    this.fallbackCopy(shareUrl);
    this.showToast('Custom puzzle link copied to clipboard! 🔗');
    this.closeModal(document.getElementById('modal-custom'));
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    this.dom.toastContainer.appendChild(toast);
    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 2500);
  }

  openModal(modal) {
    modal.classList.add('open');
  }

  closeModal(modal) {
    modal.classList.remove('open');
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    SafeStorage.set('ai_connections_theme', nextTheme);
    this.sound.playTap();
  }

  toggleSound() {
    this.sound.toggle();
    this.updateSoundIcon();
    if (this.sound.enabled) {
      this.sound.playTap();
    }
  }

  notifyParentHeight() {
    if (window.parent && window.parent !== window) {
      const height = document.documentElement.scrollHeight || document.body.scrollHeight;
      window.parent.postMessage({ type: 'connections-resize', height }, '*');
    }
  }

  shuffleArray(arr) {
    const array = [...arr];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  loadStats() {
    const defaultStats = { played: 0, won: 0, streak: 0, maxStreak: 0 };
    try {
      const stored = SafeStorage.get('ai_connections_stats');
      return stored ? JSON.parse(stored) : defaultStats;
    } catch (e) {
      return defaultStats;
    }
  }

  updateStats(won) {
    this.stats.played++;
    if (won) {
      this.stats.won++;
      this.stats.streak++;
      if (this.stats.streak > this.stats.maxStreak) {
        this.stats.maxStreak = this.stats.streak;
      }
    } else {
      this.stats.streak = 0;
    }
    try {
      SafeStorage.set('ai_connections_stats', JSON.stringify(this.stats));
    } catch (e) {}
  }

  
  // --- 3D Spatial Engine Methods ---
  setGameMode(mode) {
    this.is3D = (mode === '3d');
    if (this.dom.tab2D && this.dom.tab3D) {
      this.dom.tab2D.classList.toggle('active', !this.is3D);
      this.dom.tab2D.setAttribute('aria-selected', !this.is3D ? 'true' : 'false');
      this.dom.tab3D.classList.toggle('active', this.is3D);
      this.dom.tab3D.setAttribute('aria-selected', this.is3D ? 'true' : 'false');
    }

    if (this.is3D) {
      if (this.dom.grid) this.dom.grid.classList.add('hidden');
      if (this.dom.viewport3D) this.dom.viewport3D.classList.remove('hidden');
      this.render3DStage();
      this.update3DTransform();
      this.sound.playCorrect();
      this.showToast('Entered 3D Holographic Mode 🔮');
    } else {
      if (this.dom.viewport3D) this.dom.viewport3D.classList.add('hidden');
      if (this.dom.grid) this.dom.grid.classList.remove('hidden');
      this.renderGrid(); if (this.is3D) this.render3DStage();
      this.sound.playTap();
      this.showToast('Returned to 2D Classic Mode 🎯');
    }
    this.notifyParentHeight();
  }

  set3DDimension(dim) {
    this.dim3D = dim;
    document.querySelectorAll('.hud-btn[data-dim]').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-dim') === dim);
    });

    if (dim === '32') {
      const puzzle32 = this.synthesize32TilePuzzle();
      this.currentPuzzle = puzzle32;
      this.isCustom = true;
      this.maxMistakes = 6;
      this.startPuzzle(0);
      this.showToast('Loaded 32-Tile Bi-Layer Challenge! (8 Groups) 🌟');
    } else {
      if (this.currentPuzzle && this.currentPuzzle.categories.length > 4) {
        this.maxMistakes = 4;
        this.isCustom = false;
        this.startPuzzle(0);
      }
      this.render3DStage();
      this.showToast(`Switched to 3D ${dim.toUpperCase()} view`);
    }
  }

  synthesize32TilePuzzle() {
    const yPool = CATEGORY_BANK.filter(c => c.color === 'yellow');
    const gPool = CATEGORY_BANK.filter(c => c.color === 'green');
    const bPool = CATEGORY_BANK.filter(c => c.color === 'blue');
    const pPool = CATEGORY_BANK.filter(c => c.color === 'purple');

    for (let attempt = 0; attempt < 50; attempt++) {
      const pickY = this.shuffleArray(yPool).slice(0, 2);
      const pickG = this.shuffleArray(gPool).slice(0, 2);
      const pickB = this.shuffleArray(bPool).slice(0, 2);
      const pickP = this.shuffleArray(pPool).slice(0, 2);

      const allCats = [...pickY, ...pickG, ...pickB, ...pickP];
      if (allCats.length !== 8) continue;

      const words = new Set();
      let hasCollision = false;
      allCats.forEach(c => {
        c.items.forEach(item => {
          const up = item.toUpperCase();
          if (words.has(up)) hasCollision = true;
          words.add(up);
        });
      });

      if (!hasCollision && words.size === 32) {
        return {
          id: '3D-DUAL-DECK',
          title: '3D Dual-Layer Matrix (32 Tiles / 8 Groups)',
          topic: 'mixed',
          audience: 'Everyone',
          difficulty: 'Grandmaster',
          categories: JSON.parse(JSON.stringify(allCats))
        };
      }
    }

    // Fallback: return 8 categories from puzzle collection
    return {
      id: '3D-DUAL-DECK',
      title: '3D Dual-Layer Matrix',
      topic: 'mixed',
      audience: 'Everyone',
      difficulty: 'Grandmaster',
      categories: [...PUZZLES[0].categories, ...PUZZLES[1].categories]
    };
  }

  render3DStage() {
    if (!this.dom.stage3D) return;
    this.dom.stage3D.innerHTML = '';

    const tiles = this.remainingTiles;

    if (this.dim3D === '32') {
      // Bi-Layer 4x4x2 Matrix
      const half = Math.ceil(tiles.length / 2);
      const deckA = tiles.slice(0, half);
      const deckB = tiles.slice(half);

      const layerA = document.createElement('div');
      layerA.className = 'layer-3d grid-4x4';
      layerA.style.transform = `translateZ(${this.depth3D / 2}px)`;
      
      const badgeA = document.createElement('div');
      badgeA.className = 'layer-badge-3d deck-a';
      badgeA.textContent = 'Deck Alpha (Upper)';
      layerA.appendChild(badgeA);

      deckA.forEach(tileObj => {
        layerA.appendChild(this.create3DTileElement(tileObj));
      });

      const layerB = document.createElement('div');
      layerB.className = 'layer-3d grid-4x4';
      layerB.style.transform = `translateZ(-${this.depth3D / 2}px)`;
      
      const badgeB = document.createElement('div');
      badgeB.className = 'layer-badge-3d deck-b';
      badgeB.textContent = 'Deck Beta (Lower)';
      layerB.appendChild(badgeB);

      deckB.forEach(tileObj => {
        layerB.appendChild(this.create3DTileElement(tileObj));
      });

      this.dom.stage3D.appendChild(layerA);
      this.dom.stage3D.appendChild(layerB);
    } else if (this.dim3D === 'cylinder') {
      // 3D Orbital Cylindrical Ring
      const radius = 260;
      const total = tiles.length;
      const angleStep = 360 / Math.max(total, 1);

      tiles.forEach((tileObj, i) => {
        const angle = i * angleStep;
        const tile = this.create3DTileElement(tileObj);
        tile.style.position = 'absolute';
        tile.style.width = '100px';
        tile.style.height = '60px';
        tile.style.left = 'calc(50% - 50px)';
        tile.style.top = 'calc(50% - 30px)';
        tile.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
        this.dom.stage3D.appendChild(tile);
      });
    } else if (this.dim3D === 'cube') {
      // 3D Cube (4 faces around Y)
      const sideDistance = 160;
      const faces = [[], [], [], []]; // Front (0), Right (90), Back (180), Left (270)
      tiles.forEach((t, i) => faces[i % 4].push(t));

      const faceAngles = [0, 90, 180, 270];
      faces.forEach((faceTiles, fIdx) => {
        const faceDiv = document.createElement('div');
        faceDiv.className = 'layer-3d';
        faceDiv.style.width = '240px';
        faceDiv.style.height = '240px';
        faceDiv.style.left = 'calc(50% - 120px)';
        faceDiv.style.top = 'calc(50% - 120px)';
        faceDiv.style.gridTemplateColumns = 'repeat(2, 1fr)';
        faceDiv.style.gridTemplateRows = 'repeat(2, 1fr)';
        faceDiv.style.transform = `rotateY(${faceAngles[fIdx]}deg) translateZ(${sideDistance}px)`;

        faceTiles.forEach(tObj => {
          faceDiv.appendChild(this.create3DTileElement(tObj));
        });
        this.dom.stage3D.appendChild(faceDiv);
      });
    } else {
      // Default 4x4 Planar Deck with 3D elevation
      const layer = document.createElement('div');
      layer.className = 'layer-3d grid-4x4';
      layer.style.transform = 'translateZ(0px)';

      tiles.forEach(tileObj => {
        layer.appendChild(this.create3DTileElement(tileObj));
      });
      this.dom.stage3D.appendChild(layer);
    }

    this.update3DTransform();
  }

  create3DTileElement(tileObj) {
    const tile = document.createElement('div');
    tile.className = 'tile-3d';
    tile.textContent = tileObj.text;
    tile.setAttribute('role', 'checkbox');
    tile.setAttribute('aria-checked', this.selectedTiles.has(tileObj.text) ? 'true' : 'false');
    tile.setAttribute('tabindex', '0');

    if (tileObj.text.length > 22) {
      tile.style.fontSize = '0.62rem';
    } else if (tileObj.text.length > 14) {
      tile.style.fontSize = '0.7rem';
    }

    if (this.selectedTiles.has(tileObj.text)) {
      tile.classList.add('selected');
    }

    tile.addEventListener('click', (e) => {
      e.stopPropagation();
      this.handleTileClick(tileObj.text, tile);
      if (this.is3D) this.render3DStage();
    });

    return tile;
  }

  update3DTransform() {
    if (!this.dom.stage3D) return;
    this.dom.stage3D.style.transform = `rotateX(${this.rot3D.x}deg) rotateY(${this.rot3D.y}deg) translateZ(${this.rot3D.zoom}px)`;
  }

  init3DOrbitControls() {
    if (!this.dom.viewport3D) return;

    const vp = this.dom.viewport3D;

    vp.addEventListener('pointerdown', (e) => {
      this.isDragging3D = true;
      this.lastPointerPos = { x: e.clientX, y: e.clientY };
      vp.setPointerCapture(e.pointerId);
    });

    vp.addEventListener('pointermove', (e) => {
      if (!this.isDragging3D) return;
      const dx = e.clientX - this.lastPointerPos.x;
      const dy = e.clientY - this.lastPointerPos.y;
      this.lastPointerPos = { x: e.clientX, y: e.clientY };

      this.rot3D.y += dx * 0.45;
      this.rot3D.x = Math.max(-65, Math.min(65, this.rot3D.x - dy * 0.45));
      this.update3DTransform();
    });

    const stopDrag = (e) => {
      if (this.isDragging3D) {
        this.isDragging3D = false;
        try { vp.releasePointerCapture(e.pointerId); } catch (err) {}
      }
    };

    vp.addEventListener('pointerup', stopDrag);
    vp.addEventListener('pointercancel', stopDrag);

    // Zoom on wheel
    vp.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.rot3D.zoom = Math.max(-200, Math.min(260, this.rot3D.zoom - e.deltaY * 0.4));
      this.update3DTransform();
    }, { passive: false });

    // HUD Camera Buttons
    if (this.dom.btn3DIso) {
      this.dom.btn3DIso.addEventListener('click', () => {
        this.rot3D.x = 25;
        this.rot3D.y = -30;
        this.rot3D.zoom = 0;
        this.update3DTransform();
        this.sound.playTap();
      });
    }

    if (this.dom.btn3DFront) {
      this.dom.btn3DFront.addEventListener('click', () => {
        this.rot3D.x = 10;
        this.rot3D.y = 0;
        this.rot3D.zoom = 0;
        this.update3DTransform();
        this.sound.playTap();
      });
    }

    if (this.dom.btn3DTop) {
      this.dom.btn3DTop.addEventListener('click', () => {
        this.rot3D.x = 65;
        this.rot3D.y = 0;
        this.rot3D.zoom = -40;
        this.update3DTransform();
        this.sound.playTap();
      });
    }

    if (this.dom.btn3DSpin) {
      this.dom.btn3DSpin.addEventListener('click', () => {
        this.autoSpin3D = !this.autoSpin3D;
        this.dom.btn3DSpin.classList.toggle('active', this.autoSpin3D);
        if (this.autoSpin3D) {
          const spinLoop = () => {
            if (!this.autoSpin3D) return;
            if (!this.isDragging3D) {
              this.rot3D.y += 0.28;
              this.update3DTransform();
            }
            this.spinAnimFrame = requestAnimationFrame(spinLoop);
          };
          this.spinAnimFrame = requestAnimationFrame(spinLoop);
        } else {
          if (this.spinAnimFrame) cancelAnimationFrame(this.spinAnimFrame);
        }
      });
    }

    if (this.dom.btn3DReset) {
      this.dom.btn3DReset.addEventListener('click', () => {
        this.rot3D = { x: 22, y: -25, zoom: 0 };
        this.update3DTransform();
        this.sound.playTap();
      });
    }

    // Depth slider
    if (this.dom.depthSlider) {
      this.dom.depthSlider.addEventListener('input', (e) => {
        this.depth3D = parseInt(e.target.value, 10);
        if (this.dim3D === '32') this.render3DStage();
      });
    }

    // Dimension Switcher HUD buttons
    document.querySelectorAll('.hud-btn[data-dim]').forEach(btn => {
      btn.addEventListener('click', () => {
        const dim = btn.getAttribute('data-dim');
        this.set3DDimension(dim);
      });
    });

    // Mode Tabs (2D vs 3D)
    if (this.dom.tab2D) {
      this.dom.tab2D.addEventListener('click', () => this.setGameMode('2d'));
    }
    if (this.dom.tab3D) {
      this.dom.tab3D.addEventListener('click', () => this.setGameMode('3d'));
    }
  }

  bindEvents() {
    this.init3DOrbitControls();
    this.dom.btnShuffle.addEventListener('click', () => this.handleShuffle());
    this.dom.btnDeselect.addEventListener('click', () => this.handleDeselectAll());
    this.dom.btnHint.addEventListener('click', () => this.handleHint());
    this.dom.btnSubmit.addEventListener('click', () => this.handleSubmit());
    this.dom.btnArchive.addEventListener('click', () => this.openArchiveModal());
    this.dom.btnCustom.addEventListener('click', () => this.openCustomModal());
    this.dom.btnHelp.addEventListener('click', () => this.openModal(document.getElementById('modal-help')));
    this.dom.btnStats.addEventListener('click', () => this.openStatsModal());
    this.dom.btnSound.addEventListener('click', () => this.toggleSound());
    this.dom.btnTheme.addEventListener('click', () => this.toggleTheme());
    this.dom.btnShareCopy.addEventListener('click', () => this.copyShareResult());
    this.dom.btnGenerateCustom.addEventListener('click', () => this.generateCustomPuzzle());

    if (this.dom.btnMixModal) {
      this.dom.btnMixModal.addEventListener('click', () => this.openModal(this.dom.modalMix));
    }
    if (this.dom.btnPillMix) {
      this.dom.btnPillMix.addEventListener('click', () => this.openModal(this.dom.modalMix));
    }
    if (this.dom.btnSelectAllTopics) {
      this.dom.btnSelectAllTopics.addEventListener('click', () => {
        document.querySelectorAll('input[name="topic-choice"]').forEach(cb => cb.checked = true);
      });
    }
    if (this.dom.btnClearAllTopics) {
      this.dom.btnClearAllTopics.addEventListener('click', () => {
        document.querySelectorAll('input[name="topic-choice"]').forEach(cb => cb.checked = false);
      });
    }
    if (this.dom.btnGenerateMix) {
      this.dom.btnGenerateMix.addEventListener('click', () => this.playMixedGame());
    }

    // Horizontal Topic Bar Filter clicks
    document.querySelectorAll('#topic-bar .topic-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const topic = btn.getAttribute('data-topic');
        if (topic === 'mix') {
          this.openModal(this.dom.modalMix);
          return;
        }

        document.querySelectorAll('#topic-bar .topic-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (topic === 'all') {
          this.isCustom = false;
          this.startPuzzle(0);
          return;
        }

        // Find first puzzle of this topic
        const foundIdx = PUZZLES.findIndex(p => p.topic === topic);
        if (foundIdx !== -1) {
          this.isCustom = false;
          this.startPuzzle(foundIdx);
          this.sound.playTap();
        } else {
          // Synthesize one on the fly for this topic
          const synthesized = this.synthesizeMixedPuzzle([topic]);
          this.currentPuzzle = synthesized;
          this.isCustom = true;
          this.startPuzzle(0);
          this.sound.playTap();
        }
      });
    });

    // Archive Modal Topic Filter clicks
    document.querySelectorAll('#archive-topic-filter .topic-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const topic = btn.getAttribute('data-filter-topic');
        this.filterArchive(topic);
      });
    });


    // Modal Close Buttons and Backdrop click
    document.querySelectorAll('[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-close');
        this.closeModal(document.getElementById(modalId));
      });
    });

    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal(modal);
      });
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 's' || e.key === 'S') {
        this.handleShuffle();
      } else if (e.key === 'Escape') {
        // Close modals if open, else deselect
        const openModal = document.querySelector('.modal-overlay.open');
        if (openModal) {
          this.closeModal(openModal);
        } else {
          this.handleDeselectAll();
        }
      } else if (e.key === 'Enter') {
        if (this.selectedTiles.size === 4 && !this.dom.btnSubmit.disabled) {
          this.handleSubmit();
        }
      }
    });

    // Resize observer for iframe communication
    if (window.ResizeObserver) {
      new ResizeObserver(() => this.notifyParentHeight()).observe(document.body);
    }
  }
}

  // Safe boot function that triggers whether DOMContentLoaded has already fired or not
  function bootGame() {
    if (!window.__AI_CONNECTIONS__) {
      window.__AI_CONNECTIONS__ = new ConnectionsGame();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootGame);
  } else {
    bootGame();
  }
})();
