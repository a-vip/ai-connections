/**
 * AI CONNECTIONS - Curated Puzzle Archive
 * Author: Avi Perera (aviperera.com)
 * Domain: AI Governance, International Law, Frontier Models, Autonomous Systems & Tech Policy
 *
 * Difficulty Gradient:
 * 🟨 Yellow: Straightforward / Direct Taxonomy
 * 🟩 Green: Intermediate / Technical & Operational
 * 🟦 Blue: Advanced / Legal Treaties, Statutes & Regulatory Precedents
 * 🟪 Purple: Tricky / Lateral, Linguistic, or Meta-Connections
 */

// Universal Module Definition for zero-friction local execution (file://) and bundlers/servers
const PUZZLES = [
  {
    id: 1,
    title: "The Brussels Effect & Beyond",
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
    title: "Alignment & Safety Engineering",
    difficulty: "Intermediate",
    tags: ["Safety", "Alignment", "RLHF", "Red Teaming"],
    categories: [
      {
        name: "ADVERSARIAL ATTACKS ON LLMS",
        color: "yellow",
        items: ["PROMPT INJECTION", "JAILBREAKING", "DATA POISONING", "MODEL INVERSION"],
        dossier: {
          summary: "Techniques used by adversaries or penetration testers to bypass safety guardrails or extract confidential training data.",
          legalOrTechBasis: "OWASP Top 10 for Large Language Model Applications (2025).",
          impact: "Core focus of technical compliance obligations under national AI Safety Institute evaluation protocols."
        }
      },
      {
        name: "TECHNIQUES FOR REINFORCEMENT LEARNING ALIGNMENT",
        color: "green",
        items: ["DPO", "PPO", "KTO", "RLAIF"],
        dossier: {
          summary: "Algorithms optimizing neural models toward human preferences (Direct Preference Optimization, Proximal Policy, Kahneman-Tversky, AI Feedback).",
          legalOrTechBasis: "Anthropic Constitutional AI & Stanford DPO research literature.",
          impact: "Forms the operational mechanics through which raw pre-trained foundation models are steered to refuse harmful directives."
        }
      },
      {
        name: "FRONTIER MODEL CAPABILITY EVALUATIONS",
        color: "blue",
        items: ["CBRN UPLIFT", "CYBER OFFENSE", "AUTONOMOUS REPLICATION", "PERSUASION BENCHMARK"],
        dossier: {
          summary: "Severe risk domains evaluated by government safety institutes before frontier models are approved for public release.",
          legalOrTechBasis: "US AISI & UK AISI Frontier Model Safety Commitments; US Executive Order 14110 Section 4.",
          impact: "Triggers mandatory red-line interventions and export reporting thresholds when systems surpass capability triggers."
        }
      },
      {
        name: "THINGS YOU CAN 'TUNE'",
        color: "purple",
        items: ["PIANO", "ENGINE", "HYPERPARAMETER", "RADIO"],
        dossier: {
          summary: "Objects that undergo 'tuning' (Fine-tuning / Hyperparameter tuning in ML alongside mechanical and musical tuning).",
          legalOrTechBasis: "Everyday polysemy uniting deep learning optimization with classical mechanical calibration.",
          impact: "A witty lateral bridge highlighting how computational metaphors draw from industrial and acoustic history."
        }
      }
    ]
  },
  {
    id: 6,
    title: "Global Governance & Treaties",
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
  },
  {
    id: 7,
    title: "Frontier Foundation Models",
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
    id: 8,
    title: "The Ethics & Bias Labyrinth",
    difficulty: "Intermediate",
    tags: ["Ethics", "Bias", "GDPR", "Transparency"],
    categories: [
      {
        name: "PROTECTED CHARACTERISTICS IN NON-DISCRIMINATION LAW",
        color: "yellow",
        items: ["RACE", "GENDER", "RELIGION", "DISABILITY"],
        dossier: {
          summary: "Categories explicitly shielded against discriminatory disparate impact in algorithmic decision-making systems.",
          legalOrTechBasis: "US Civil Rights Act Title VII, EU Equal Treatment Directives, and Charter of Fundamental Rights.",
          impact: "Audit targets for algorithmic impact assessments across hiring, lending, housing, and predictive bail."
        }
      },
      {
        name: "DATA SUBJECT RIGHTS UNDER GDPR (REGULATION 2016/679)",
        color: "green",
        items: ["ACCESS", "ERASURE", "PORTABILITY", "EXPLANATION"],
        dossier: {
          summary: "Key statutory rights individuals possess regarding automated processing and algorithmic profiling under EU data law.",
          legalOrTechBasis: "GDPR Articles 15 (Access), 17 (Right to be Forgotten), 20 (Portability), 22 (Automated Decision Making).",
          impact: "Creates formidable compliance hurdles for immutable LLM weights that memorize personal identifying data."
        }
      },
      {
        name: "DOCUMENTATION ARTIFACTS FOR RESPONSIBLE AI",
        color: "blue",
        items: ["MODEL CARD", "DATA SHEET", "SYSTEM CARD", "IMPACT ASSESSMENT"],
        dossier: {
          summary: "Standardized technical governance disclosures detailing training datasets, limitations, and benchmark evaluations.",
          legalOrTechBasis: "Mitchell et al. (Model Cards 2019); Gebru et al. (Datasheets for Datasets 2021); EU AI Act Annex IV.",
          impact: "Institutionalized as mandatory regulatory filings for general-purpose AI models (GPAI) under the EU AI Act."
        }
      },
      {
        name: "THINGS THAT HAVE 'ATTENTION'",
        color: "purple",
        items: ["TRANSFORMER", "STUDENT", "SEEKER", "SPAN"],
        dossier: {
          summary: "Entities or phrases associated with 'Attention' (Self-Attention mechanism, Attention Span, Attention Seeker, Attentive Student).",
          legalOrTechBasis: "Vaswani et al. 'Attention Is All You Need' (2017) juxtaposed with psychological and behavioral concepts.",
          impact: "Plays on the foundational mathematical building block of all modern generative AI models."
        }
      }
    ]
  },
  {
    id: 9,
    title: "AI Agents & Autonomous Execution",
    difficulty: "Intermediate",
    tags: ["Agents", "Workflows", "Protocols", "Automation"],
    categories: [
      {
        name: "AGENTIC REASONING PARADIGMS",
        color: "yellow",
        items: ["REACT", "CHAIN OF THOUGHT", "TREE OF THOUGHTS", "REFLECTION"],
        dossier: {
          summary: "Prompting and execution strategies enabling LLMs to deliberate, self-correct, and break complex tasks into steps.",
          legalOrTechBasis: "Yao et al. (ReAct 2022); Wei et al. (CoT 2022); Shinn et al. (Reflexion 2023).",
          impact: "Transitions LLMs from static auto-complete engines into proactive goal-directed agents capable of complex orchestration."
        }
      },
      {
        name: "KEY COMPONENTS OF AN AUTONOMOUS AGENT",
        color: "green",
        items: ["PLANNER", "MEMORY", "TOOL EXECUTOR", "CRITIC"],
        dossier: {
          summary: "The modular subsystems comprising a production-grade autonomous agent architecture.",
          legalOrTechBasis: "Cognitive agent design patterns (LangChain, AutoGen, CrewAI architectures).",
          impact: "Distributes legal culpability across planning, tool invocation, and execution environments."
        }
      },
      {
        name: "INTER-AGENT & TOOL COMMUNICATION PROTOCOLS",
        color: "blue",
        items: ["FUNCTION CALLING", "MCP", "REST API", "JSON SCHEMA"],
        dossier: {
          summary: "Standardized interfaces allowing models to query databases, invoke local binaries, and communicate across networks.",
          legalOrTechBasis: "Anthropic Model Context Protocol (MCP 2024); OpenAI Tool Calling Specifications.",
          impact: "The backbone of agentic integration, raising acute sandboxing, authentication, and prompt injection vulnerabilities."
        }
      },
      {
        name: "WORDS THAT FOLLOW 'ZERO'",
        color: "purple",
        items: ["SHOT", "DAY", "TRUST", "GRAVITY"],
        dossier: {
          summary: "Terms following 'Zero' (Zero-Shot learning, Zero-Day exploit, Zero-Trust security, Zero Gravity).",
          legalOrTechBasis: "Intersects machine learning transfer learning, cybersecurity defense, and aerospace.",
          impact: "A clever lateral grouping crossing between AI inference terminology and cyber defense infrastructure."
        }
      }
    ]
  },
  {
    id: 10,
    title: "Superintelligence, Extinction & Risk",
    difficulty: "Grandmaster",
    tags: ["Safety", "x-Risk", "Alignment", "Philosophy"],
    categories: [
      {
        name: "CLASSIC AI ALIGNMENT THOUGHT EXPERIMENTS",
        color: "yellow",
        items: ["PAPERCLIP MAXIMIZER", "TREACHEROUS TURN", "STOPPING PROBLEM", "ORACLE IN A BOX"],
        dossier: {
          summary: "Famous philosophical thought experiments illustrating failure modes of unaligned superintelligent utility functions.",
          legalOrTechBasis: "Nick Bostrom 'Superintelligence: Paths, Dangers, Strategies' (2014); Yudkowsky & MIRI research.",
          impact: "Catalyzed modern existential risk discourse and influenced UK/US AI safety institute mandate scopes."
        }
      },
      {
        name: "THEORETICAL X-RISK THREAT VECTORS",
        color: "green",
        items: ["SYNTHETIC BIOWEAPON", "CYBER ARMAGEDDON", "DECEPTION AT SCALE", "AUTONOMOUS PROLIFERATION"],
        dossier: {
          summary: "Severe catastrophic failure modes evaluated by national security agencies regarding frontier foundation systems.",
          legalOrTechBasis: "Center for AI Safety Statement on AI Risk (2023); US Presidential Executive Order 14110.",
          impact: "Serves as the legal threshold for mandatory reporting and red-team auditing under dual-use security statutes."
        }
      },
      {
        name: "MEASURES OF COMPUTATIONAL CAPACITY",
        color: "blue",
        items: ["FLOPS", "PARAMETERS", "TOKENS", "PFLOPS PER WATT"],
        dossier: {
          summary: "Quantitative metrics governing computational complexity, dataset scale, and hardware energy efficiency.",
          legalOrTechBasis: "Kaplan et al. Scaling Laws for Neural Language Models; EU AI Act 10^25 FLOPs compute threshold.",
          impact: "Compute thresholds serve as the definitive statutory demarcation for applying systemic risk oversight."
        }
      },
      {
        name: "WORDS ENDING IN 'BOT'",
        color: "purple",
        items: ["CHAT", "SPIDER", "NAN", "RO"],
        dossier: {
          summary: "Prefixes forming 'Bot' words (Chatbot, Spiderbot / Web crawler, Nanobot, Robot).",
          legalOrTechBasis: "Robotics and algorithmic linguistics blended with web automation terminology.",
          impact: "Lateral wordplay challenging players to look past complex alignment jargon to find simple lexical stems."
        }
      }
    ]
  },
  {
    id: 11,
    title: "US Federal AI Strategy & Executive Orders",
    difficulty: "Advanced",
    tags: ["US Law", "Executive Order", "NIST", "Federal"],
    categories: [
      {
        name: "DIRECTIVES UNDER US EXECUTIVE ORDER 14110",
        color: "yellow",
        items: ["SAFETY TEST SHARING", "RED TEAM REPORTING", "WATERMARKING GUIDELINES", "TALENT VISA REFORM"],
        dossier: {
          summary: "Core presidential directives mandating federal agencies to manage frontier AI risks while accelerating safe innovation.",
          legalOrTechBasis: "Executive Order 14110 on Safe, Secure, and Trustworthy Artificial Intelligence (October 30, 2023).",
          impact: "The most sweeping US federal regulatory action on artificial intelligence in history."
        }
      },
      {
        name: "FEDERAL AGENCIES WITH AI ENFORCEMENT MANDATES",
        color: "green",
        items: ["FTC", "SEC", "CFPB", "EEOC"],
        dossier: {
          summary: "Independent regulatory bodies using existing statutory authorities to prosecute deceptive AI claims, bias, and algorithmic collusion.",
          legalOrTechBasis: "FTC Section 5 (Unfair/Deceptive Acts), CFPB Circular 2022-03, EEOC Technical Assistance on ADA/AI.",
          impact: "Demonstrates how existing administrative law governs AI without awaiting specialized congressional statutes."
        }
      },
      {
        name: "CORE FUNCTIONS OF NIST AI RMF",
        color: "blue",
        items: ["GOVERN", "MAP", "MEASURE", "MANAGE"],
        dossier: {
          summary: "The four core organizational functions structuring the National Institute of Standards and Technology AI Risk Management Framework.",
          legalOrTechBasis: "NIST AI 100-1 (AI Risk Management Framework 1.0).",
          impact: "Widely adopted by enterprise compliance officers and cited across international standards bodies (ISO/IEC 42001)."
        }
      },
      {
        name: "SYNONYMS FOR 'FAKE'",
        color: "purple",
        items: ["DEEP", "SHAM", "FORGED", "SYNTHETIC"],
        dossier: {
          summary: "Adjectives describing fabricated or artificial artifacts ('Deepfake', Sham, Forged, Synthetic).",
          legalOrTechBasis: "Linguistic red herring connecting media authenticity law with common colloquial adjectives.",
          impact: "Cleverly disguises 'Deep' and 'Synthetic' to test lateral cognitive flexibility."
        }
      }
    ]
  },
  {
    id: 12,
    title: "Lethal Autonomous Weapons: The CCW Matrix",
    difficulty: "Grandmaster",
    tags: ["LAWS", "IHL", "Geneva", "Drones"],
    categories: [
      {
        name: "DEPLOYED LOITERING MUNITIONS & DRONE SYSTEMS",
        color: "yellow",
        items: ["HARPY", "SWITCHBLADE", "LANCET", "KUB"],
        dossier: {
          summary: "Autonomous and semi-autonomous loitering munitions with target acquisition and self-destruct capabilities.",
          legalOrTechBasis: "IAI Harpy (Israel), AeroVironment Switchblade (US), ZALA Lancet (Russia), Kalashnikov KUB.",
          impact: "Illustrates the operational reality of autonomous targeting already occurring across contemporary battlefields."
        }
      },
      {
        name: "ELEMENTS OF 'MEANINGFUL HUMAN CONTROL'",
        color: "green",
        items: ["SITUATIONAL AWARENESS", "TIMELY INTERVENTION", "OPERATIONAL REVERSIBILITY", "TARGET RESTRICTION"],
        dossier: {
          summary: "The key operational components demanded by human rights advocates and international lawyers to ensure moral accountability in LAWS.",
          legalOrTechBasis: "Article 36 NGO & ICRC Position on Autonomous Weapon Systems (2021).",
          impact: "The primary non-proliferation demand seeking to ban weapons operating without direct human judgment on killing."
        }
      },
      {
        name: "CRITICAL SENSORS IN MILITARY AUTONOMY",
        color: "blue",
        items: ["LIDAR", "RADAR", "ELECTRO-OPTICAL", "INFRARED"],
        dossier: {
          summary: "Multimodal sensor suites enabling autonomous munitions to acquire targets in GNSS-denied environments.",
          legalOrTechBasis: "Defense Advanced Research Projects Agency (DARPA) Autonomous Multi-Domain Sensing Architectures.",
          impact: "Sensor fidelity directly limits or enables compliance with IHL Distinction rules in urban combat."
        }
      },
      {
        name: "WORDS PRECEDING 'FIRE'",
        color: "purple",
        items: ["FRIENDLY", "CEASE", "RAPID", "CROSS"],
        dossier: {
          summary: "Military and figurative terms paired with 'Fire' (Friendly Fire, Ceasefire, Rapid-fire, Crossfire).",
          legalOrTechBasis: "Military tactical terminology hybridized with vernacular English.",
          impact: "Subtly misleads players looking for targeting algorithms into recognizing simple idiomatic wordplay."
        }
      }
    ]
  },
  {
    id: 13,
    title: "Transformers & Neural Mechanics",
    difficulty: "Intermediate",
    tags: ["Deep Learning", "Transformers", "Math", "Architecture"],
    categories: [
      {
        name: "CORE COMPONENTS OF A TRANSFORMER BLOCK",
        color: "yellow",
        items: ["MULTI-HEAD ATTENTION", "FEED FORWARD NETWORK", "LAYER NORMALIZATION", "RESIDUAL CONNECTION"],
        dossier: {
          summary: "The essential computational sublayers repeated across modern autoregressive decoder and encoder transformers.",
          legalOrTechBasis: "Vaswani et al. 'Attention Is All You Need' (NeurIPS 2017).",
          impact: "The standard architectural substrate for virtually all frontier generative AI models in production."
        }
      },
      {
        name: "NON-LINEAR ACTIVATION FUNCTIONS",
        color: "green",
        items: ["RELU", "GELU", "SWIGLU", "SIGMOID"],
        dossier: {
          summary: "Mathematical functions applied to neuron outputs that introduce non-linearity, enabling deep networks to learn complex functions.",
          legalOrTechBasis: "Hendrycks & Gimpel (GELU 2016); Shazeer (GLU Variants 2020).",
          impact: "Subtle architectural choices that dictate inference speed, gradient stability, and training efficiency."
        }
      },
      {
        name: "TECHNIQUES TO REDUCE INFERENCE MEMORY",
        color: "blue",
        items: ["QUANTIZATION", "KV CACHE COMPRESSION", "PRUNING", "SPECULATIVE DECODING"],
        dossier: {
          summary: "Engineering strategies designed to run large models on consumer silicon and slash per-token deployment costs.",
          legalOrTechBasis: "Dettmers et al. (QLoRA 2023); Leviathan et al. (Speculative Decoding 2023).",
          impact: "Crucial for making sovereign on-premise AI deployments commercially viable without massive cloud expenditure."
        }
      },
      {
        name: "THINGS THAT CAN BE 'FROZEN'",
        color: "purple",
        items: ["WEIGHTS", "ASSETS", "ICE", "ACCOUNTS"],
        dossier: {
          summary: "Things subjected to freezing (Frozen neural network weights during fine-tuning, frozen financial assets, frozen accounts, ice).",
          legalOrTechBasis: "Cross-domain wordplay connecting ML transfer learning with legal asset freezes and states of matter.",
          impact: "Forces players to recognize that 'Weights' and 'Assets' share a common conceptual verb outside machine learning."
        }
      }
    ]
  },
  {
    id: 14,
    title: "The Prompt Engineering Lexicon",
    difficulty: "Beginner",
    tags: ["Prompting", "LLMs", "Context", "Techniques"],
    categories: [
      {
        name: "IN-CONTEXT LEARNING TECHNIQUES",
        color: "yellow",
        items: ["ZERO-SHOT", "FEW-SHOT", "ONE-SHOT", "CHAIN-OF-THOUGHT"],
        dossier: {
          summary: "Methods of providing examples and reasoning steps directly inside the prompt context without gradient parameter updates.",
          legalOrTechBasis: "Brown et al. (GPT-3 / Language Models are Few-Shot Learners 2020).",
          impact: "Demonstrated that scale unlocks emergent reasoning and instruction following without expensive task-specific re-training."
        }
      },
      {
        name: "PROMPT INJECTION VARIETIES",
        color: "green",
        items: ["INDIRECT INJECTION", "SYSTEM OVERRIDE", "DAN EXPLOIT", "ASCII ART ATTACK"],
        dossier: {
          summary: "Adversarial inputs designed to trick safety layers by disguising instructions in data, roleplays, or non-text glyphs.",
          legalOrTechBasis: "Greshake et al. (Indirect Prompt Injection 2023); OWASP LLM01:2025.",
          impact: "The primary cyber threat blocking enterprise autonomous agents from having unrestricted read/write API access."
        }
      },
      {
        name: "HYPERPARAMETERS GOVERNING OUTPUT GENERATION",
        color: "blue",
        items: ["TEMPERATURE", "TOP P", "TOP K", "PRESENCE PENALTY"],
        dossier: {
          summary: "Sampling parameters that control the randomness, diversity, and vocabulary breadth of next-token predictions.",
          legalOrTechBasis: "Holtzman et al. (The Curious Case of Neural Text Degeneration 2019).",
          impact: "Fine-grained levers used in production applications to calibrate between deterministic legal extraction and creative drafting."
        }
      },
      {
        name: "WORDS THAT CAN PRECEDE 'ENGINEERING'",
        color: "purple",
        items: ["PROMPT", "SOCIAL", "GENETIC", "CIVIL"],
        dossier: {
          summary: "Disparate domains joined with 'Engineering' (Prompt Engineering, Social Engineering, Genetic Engineering, Civil Engineering).",
          legalOrTechBasis: "Lexical polysemy spanning AI workflows, cybersecurity hacking, biotechnology, and infrastructure.",
          impact: "A clever lateral grouping revealing that 'Prompt' belongs with engineering prefixes rather than prompting techniques!"
        }
      }
    ]
  },
  {
    id: 15,
    title: "Sovereign AI & National Infrastructure",
    difficulty: "Advanced",
    tags: ["Sovereignty", "Geopolitics", "Infrastructure", "National Strategy"],
    categories: [
      {
        name: "ELEMENTS OF A SOVEREIGN AI STRATEGY",
        color: "yellow",
        items: ["INDIGENOUS COMPUTE", "LOCAL LANGUAGE DATA", "DOMESTIC FOUNDRY", "SOVEREIGN CLOUD"],
        dossier: {
          summary: "The foundational pillars required for a state to maintain technological autonomy independent of foreign hyperscalers.",
          legalOrTechBasis: "National AI strategies of France, UAE (Technology Innovation Institute), Japan, and India.",
          impact: "Minimizes national vulnerability to extraterritorial sanctions, cloud service embargoes, and cultural model bias."
        }
      },
      {
        name: "REGIONAL DATA LOCALIZATION MANDATES",
        color: "green",
        items: ["ON-PREM STORAGE", "RESIDENCY REQUIREMENTS", "CROSS-BORDER RESTRICTIONS", "ENCRYPTED ENCLAVES"],
        dossier: {
          summary: "Regulatory mandates requiring sensitive citizen or government data to remain physically within national boundaries.",
          legalOrTechBasis: "China Data Security Law (DSL); EU Data Act; India Digital Personal Data Protection Act (DPDPA).",
          impact: "Complicates global centralized training runs for multinational AI firms and fuels demand for localized fine-tuning."
        }
      },
      {
        name: "GOVERNMENT SUPERCOMPUTING CLUSTERS",
        color: "blue",
        items: ["FRONTIER", "AURORA", "FUGAKU", "LUMI"],
        dossier: {
          summary: "World-leading exascale and petascale supercomputers commissioned by state research laboratories for scientific AI.",
          legalOrTechBasis: "Oak Ridge National Lab (US), Argonne (US), RIKEN (Japan), EuroHPC Joint Undertaking (EU).",
          impact: "State-owned high-performance computing centers driving non-commercial scientific discovery and nuclear simulation."
        }
      },
      {
        name: "HOMOPHONES FOR MONARCHICAL OR ROYAL WORDS",
        color: "purple",
        items: ["REIGN", "KNIGHT", "TIER", "PEER"],
        dossier: {
          summary: "Words sounding identical to monarchical/nobility terms (Reign/Rain, Knight/Night, Tier/Tears, Peer/Pier).",
          legalOrTechBasis: "Phonetic wordplay playing on the concept of 'Sovereignty' (Reign, Peer of the realm, Knight).",
          impact: "An enjoyable lateral linguistic riddle testing phonetic double-meanings."
        }
      }
    ]
  },
  {
    id: 16,
    title: "AI Caselaw & Judicial Battles",
    difficulty: "Grandmaster",
    tags: ["Caselaw", "Judiciary", "Copyright", "Litigation"],
    categories: [
      {
        name: "DEFENDANTS IN MASS COPYRIGHT LITIGATION",
        color: "yellow",
        items: ["OPENAI", "STABILITY AI", "MIDJOURNEY", "RUNWAY"],
        dossier: {
          summary: "Generative AI frontier developers sued by artists, authors, and news publishers for unauthorized training data scraping.",
          legalOrTechBasis: "Andersen v. Stability AI et al. (N.D. Cal.); Authors Guild v. OpenAI (S.D.N.Y.).",
          impact: "These cases will establish whether generative model weights can be subject to court-ordered destruction (algorithmic disgorgement)."
        }
      },
      {
        name: "LEGAL CAUSES OF ACTION IN AI SUITS",
        color: "green",
        items: ["DIRECT INFRINGEMENT", "VICARIOUS LIABILITY", "DMCA REMOVAL", "UNJUST ENRICHMENT"],
        dossier: {
          summary: "Specific civil claims asserted by plaintiffs attempting to survive motions to dismiss under federal copyright rules.",
          legalOrTechBasis: "17 U.S. Code § 501 (Infringement); 17 U.S. Code § 1202(b) (Integrity of Copyright Management Information).",
          impact: "Judges have dismissed vague fraud claims while sustaining claims targeting intentional CMI removal and verbatim memorization."
        }
      },
      {
        name: "REMEDIES SOUGHT BY RIGHTS-HOLDERS",
        color: "blue",
        items: ["STATUTORY DAMAGES", "PRELIMINARY INJUNCTION", "WEIGHT DESTRUCTION", "COMPULSORY LICENSING"],
        dossier: {
          summary: "Legal and equitable relief requested by plaintiffs to halt model deployment or extract billions in restitution.",
          legalOrTechBasis: "17 U.S. Code § 504 (Statutory Damages up to $150,000 per willful work infringed) & FTC Algorithmic Disgorgement Precedent.",
          impact: "The potential catastrophic financial liability posed to venture-backed AI labs if fair use defenses fail."
        }
      },
      {
        name: "WORDS THAT CAN BE 'BRIEF'",
        color: "purple",
        items: ["LEGAL", "ENCOUNTER", "NEWS", "BOXER"],
        dossier: {
          summary: "Words that connect with 'Brief' (Legal Brief, Brief Encounter, News in Brief, Boxer Briefs).",
          legalOrTechBasis: "Lateral humor connecting formal judicial courtroom pleadings with everyday phrases and underwear.",
          impact: "Defuses intense legal doctrine with an unexpected, lighthearted linguistic punchline."
        }
      }
    ]
  },
  {
    id: 17,
    title: "The Open Source AI Debate",
    difficulty: "Intermediate",
    tags: ["Open Source", "OSI", "Weights", "Licensing"],
    categories: [
      {
        name: "OPEN SOURCE / OPEN WEIGHTS LICENSES",
        color: "yellow",
        items: ["APACHE 2.0", "MIT", "LLAMA COMMUNITY", "RAIL"],
        dossier: {
          summary: "Software and model licensing frameworks used to release weights, code, and behavioral use restrictions.",
          legalOrTechBasis: "Open Source Initiative (OSI) criteria & OpenRAIL (Responsible AI Licenses).",
          impact: "Highlights the fracture between truly permissive open source (Apache/MIT) and restrictive commercial caps (Meta Llama)."
        }
      },
      {
        name: "MANDATORY ARTIFACTS IN OSI OPEN SOURCE AI DEFINITION",
        color: "green",
        items: ["TRAINING DATA SPECS", "SOURCE CODE", "MODEL PARAMETERS", "BENCHMARK RESULTS"],
        dossier: {
          summary: "The components required by the Open Source Initiative (OSI 1.0) for a model to be legitimately termed 'Open Source AI'.",
          legalOrTechBasis: "OSI Open Source AI Definition (OSAID v1.0, October 2024).",
          impact: "Disqualifies models that withhold training datasets or impose discriminatory usage restrictions from claiming open source status."
        }
      },
      {
        name: "ARGUMENTS CITED IN DEFENSE OF OPEN WEIGHTS",
        color: "blue",
        items: ["DECENTRALIZATION", "ACADEMIC SCRUTINY", "CENSORSHIP RESISTANCE", "PREVENTING MONOPOLY"],
        dossier: {
          summary: "Policy justifications presented by civil society, startups, and researchers advocating for uninhibited open-weights distribution.",
          legalOrTechBasis: "NTIA Report on Dual-Use Foundation Models with Widely Available Model Weights (July 2024).",
          impact: "Convinced the US government and EU regulators to create partial carve-outs for open-weights models in general-purpose AI rules."
        }
      },
      {
        name: "THINGS THAT CAN BE 'OPEN'",
        color: "purple",
        items: ["SOURCE", "SECRET", "DOOR", "SESAME"],
        dossier: {
          summary: "Words paired with 'Open' (Open Source, Open Secret, Open Door, Open Sesame).",
          legalOrTechBasis: "Linguistic red herring uniting open software paradigms with popular folklore and idioms.",
          impact: "Tricks the player into thinking 'Source' must belong to software components rather than an 'Open' compound."
        }
      }
    ]
  },
  {
    id: 18,
    title: "AI Biometrics & High-Risk Surveillance",
    difficulty: "Intermediate",
    tags: ["Biometrics", "Privacy", "Surveillance", "High Risk"],
    categories: [
      {
        name: "MODALITIES OF BIOMETRIC RECOGNITION",
        color: "yellow",
        items: ["FACIAL", "GAIT", "VOICEPRINT", "IRIS"],
        dossier: {
          summary: "Biological and behavioral characteristics extracted by computer vision and acoustic sensors to identify humans.",
          legalOrTechBasis: "ISO/IEC 19794 Standards for Biometric Data Interchange & EU AI Act Article 3(33-35).",
          impact: "Strictly regulated under biometric privacy statutes due to the impossibility of revoking compromised biological data."
        }
      },
      {
        name: "BIOMETRIC PRIVACY STATUTES",
        color: "green",
        items: ["BIPA", "CCPA", "GDPR", "VIRGINIA CDPA"],
        dossier: {
          summary: "State and international privacy regimes granting private rights of action or steep fines for unauthorized biometric harvesting.",
          legalOrTechBasis: "Illinois Biometric Information Privacy Act (740 ILCS 14/); California Consumer Privacy Act; GDPR Art. 9.",
          impact: "Has generated billions in class action settlements against major tech platforms for unauthorized photo scanning."
        }
      },
      {
        name: "HIGH-RISK AI USE CASES UNDER EU AI ACT ANNEX III",
        color: "blue",
        items: ["CV SCREENING", "CREDIT SCORING", "EXAM PROCTORING", "ASYLUM SCREENING"],
        dossier: {
          summary: "Critical deployment areas subject to ex-ante conformity assessments, human oversight, and data quality logging.",
          legalOrTechBasis: "Regulation (EU) 2024/1689 Annex III (High-Risk AI Systems).",
          impact: "Imposes rigorous audit documentation and fundamental rights impact assessments on commercial deployers."
        }
      },
      {
        name: "WORDS ENDING IN 'PRINT'",
        color: "purple",
        items: ["VOICE", "FINGER", "BLUE", "FOOT"],
        dossier: {
          summary: "Words that compound with 'Print' (Voiceprint, Fingerprint, Blueprint, Footprint).",
          legalOrTechBasis: "Deconstructs biometric identification terms into simple lexical noun roots.",
          impact: "Lures the player into leaving 'Voice' in biometric modalities instead of recognizing its compound suffix pattern."
        }
      }
    ]
  },
  {
    id: 19,
    title: "Frontier Risks: CBRN & Catastrophic Harm",
    difficulty: "Grandmaster",
    tags: ["CBRN", "Biorisk", "Cyber", "Frontier Safety"],
    categories: [
      {
        name: "CBRN WEAPONS OF MASS DESTRUCTION ACRONYM",
        color: "yellow",
        items: ["CHEMICAL", "BIOLOGICAL", "RADIOLOGICAL", "NUCLEAR"],
        dossier: {
          summary: "The four categories of unconventional weapons comprising the standard military and counterproliferation CBRN taxonomy.",
          legalOrTechBasis: "Chemical Weapons Convention (CWC), Biological Weapons Convention (BWC), Nuclear Non-Proliferation Treaty (NPT).",
          impact: "The primary catastrophic risk thresholds monitored by Frontier Model Safety Frameworks."
        }
      },
      {
        name: "BIORISK EVALUATION BENCHMARKS",
        color: "green",
        items: ["PATHOGEN SYNTHESIS", "REVERSE GENETICS", "AEROSOL TRANSMISSION", "VIRULENCE ENHANCEMENT"],
        dossier: {
          summary: "Specific biological engineering uplift capabilities tested to detect if models facilitate illicit creation of dangerous toxins.",
          legalOrTechBasis: "White House Executive Order 14110 Section 4.4 on Nucleic Acid Synthesis Screening Guidance.",
          impact: "Triggers immediate hardware throttle or non-deployment decisions if an AI model lowers barrier to pandemic creation."
        }
      },
      {
        name: "DEFENSIVE CYBERSECURITY SAFEGUARDS",
        color: "blue",
        items: ["AIR GAPPING", "RATE LIMITING", "CANARY TOKENS", "HARDWARE ENCLAVES"],
        dossier: {
          summary: "Physical and algorithmic defenses implemented to secure model weights against state-sponsored espionage or weight exfiltration.",
          legalOrTechBasis: "NIST SP 800-53 (Security and Privacy Controls) & US Cybersecurity and Infrastructure Security Agency (CISA) guidelines.",
          impact: "Protects proprietary weights representing hundreds of millions of dollars of compute from unauthorized theft."
        }
      },
      {
        name: "WORDS THAT CAN PRECEDE 'ATTACK'",
        color: "purple",
        items: ["PANIC", "HEART", "CYBER", "SNEAK"],
        dossier: {
          summary: "Words that join with 'Attack' (Panic Attack, Heart Attack, Cyber Attack, Sneak Attack).",
          legalOrTechBasis: "Lateral pairing blending medical conditions, military surprise, and algorithmic hacking.",
          impact: "Pivots the word 'Cyber' out of technical security systems into a linguistic phrase puzzle."
        }
      }
    ]
  },
  {
    id: 20,
    title: "The Multimodal Frontier",
    difficulty: "Beginner",
    tags: ["Multimodal", "Vision", "Audio", "Generative"],
    categories: [
      {
        name: "INPUT & OUTPUT MODALITIES IN MODERN FOUNDATION MODELS",
        color: "yellow",
        items: ["TEXT", "IMAGE", "AUDIO", "VIDEO"],
        dossier: {
          summary: "The four primary sensory data representations processed seamlessly by omni-modal native foundation models.",
          legalOrTechBasis: "OpenAI GPT-4o, Google Gemini 2.0 Native Multimodal Architecture Specifications.",
          impact: "Shifts legal risk profiles from pure text copyright to complex voice impersonation and visual likeness rights."
        }
      },
      {
        name: "IMAGE GENERATION & DIFFUSION ARCHITECTURES",
        color: "green",
        items: ["LATENT DIFFUSION", "FLOW MATCHING", "CLIP GUIDANCE", "VAE ENCODER"],
        dossier: {
          summary: "Key mathematical algorithms responsible for synthesising photorealistic imagery from natural language prompts.",
          legalOrTechBasis: "Rombach et al. (Stable Diffusion 2022); Lipman et al. (Flow Matching for Generative Modeling 2023).",
          impact: "Revolutionized visual arts while sparking unprecedented copyright litigation and biometric likeness controversies."
        }
      },
      {
        name: "COMPUTER VISION BENCHMARKS & DATASETS",
        color: "blue",
        items: ["IMAGENET", "COCO", "LAION-5B", "MNIST"],
        dossier: {
          summary: "Foundational academic and web-scraped image collections that anchored the last decade of vision AI progress.",
          legalOrTechBasis: "Deng et al. (ImageNet 2009); Schuhmann et al. (LAION-5B 2022).",
          impact: "LAION-5B became the centerpiece of global copyright disputes regarding whether scraping the public web constitutes fair use."
        }
      },
      {
        name: "WORDS THAT CAN BE 'REAL'",
        color: "purple",
        items: ["ESTATE", "WORLD", "TIME", "DEAL"],
        dossier: {
          summary: "Phrases compounding with 'Real' (Real Estate, Real World, Real Time, Real Deal).",
          legalOrTechBasis: "Everyday expressions contrasted with synthetic media authenticity and latency terminology.",
          impact: "Lures the player into grouping 'Time' or 'World' into AI simulation categories instead of everyday idiomatic phrases."
        }
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.AI_PUZZLES = PUZZLES;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PUZZLES };
}
