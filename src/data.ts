import { Service, CaseStudy, TeamMember } from './types';
import jaroProfile from './assets/images/pexels-karola-g-4887163 (1).jpg';

export const SERVICES: Service[] = [
  {
    id: 'agile-consulting',
    title: '🌈 Agile & Delivery Operations Consulting ☁️',
    category: 'Agile Ways of Working',
    description: 'Banishing standup fatigue and sprint stagnation. I coach your teams to double velocity through custom Kanban/Scrum setups, delivery ops, and WIP limits.',
    detailedDescription: 'Agile is not about daily standup status reports or command-oriented checklists. I analyze your team bottlenecks, design highly visual Scrum or Kanban value streams, and implement concrete metrics and work-in-progress (WIP) limit policies to protect team focus and maximize delivery flow.',
    deliverables: [
      'Interactive Kanban & Scrum Setup Workshops',
      'Delivery Operations Auditing & Delivery Metric Tuning',
      'Practical User Story Slicing & Backlog Grooming Protocols',
      'Retrospective Re-engineering for Psychological Safety'
    ],
    metrics: 'Boosted delivery pipeline throughput by up to 55% with optimized velocity',
    icon: 'Activity'
  },
  {
    id: 'product-owner',
    title: '🦄 AI Product Owner & Strategy Services 🌈',
    category: 'Product Strategy',
    description: 'Steering MVP roadmaps, crafting clean backlogs, and designing validation frameworks like rapid A/B metrics and dual-track product discovery.',
    detailedDescription: 'There is nothing more wasteful than highly efficient developers building features users reject. I provide dedicated hands-on Product Owner services to help you design customer-centric roadmaps, slice features into high-value micro-user stories, and apply rigorous experimentation frameworks (including A/B and metric monitoring).',
    deliverables: [
      'Product Backlog Creation, Grooming & Priority Maps',
      'Dual-Track Product Discovery & MVP Sizing',
      'A/B Testing Strategies & Release Flight Plans',
      'Dynamic User Story Spec Mapping'
    ],
    metrics: 'Achieved 91% user feature adoption rates in early-stage pilot phases',
    icon: 'Briefcase'
  },
  {
    id: 'innovation-prototyping',
    title: '✨ Innovation Consultation & Quick Prototyping ☁️',
    category: 'Startup & Rapid Tech',
    description: 'Turning ambitious AI/Tech ideas into tangible, shipped products using rapid LLM engineering, Streamlit demos, and high-fidelity React MVPs.',
    detailedDescription: 'Don’t spend six months arguing over spec sheets or static mockups. I translate cutting-edge AI power and complex business strategies into working, user-validated prototypes (LLM applications, MLOps integrations, rapid Streamlit apps, and responsive React modules) at startup speed.',
    deliverables: [
      'Fast AI Prototyping / LLM Integration Sprints',
      'High-Fidelity React UX or Streamlit Web Demos',
      'Technical Feasibility Audits & Architecture Mockups',
      'Lean Startup Validation & Experimentation'
    ],
    metrics: 'From raw napkin brainstorm to live, functional web demo in under 7 days',
    icon: 'Cpu'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'glowmind-ai',
    title: 'Glowmind: Skincare Guidance AI MVP',
    client: 'Glowmind Startup',
    industry: 'Healthcare & AI Consumer App',
    brief: 'Designed and shipped a consumer-facing AI application providing personalized skincare advice, leveraging user-validated iterations.',
    challenge: 'Navigating high domain ambiguity and user-trust barriers. Standard tech solutions lack human touch and personalization.',
    strategy: 'Implemented rapid dual-track discovery and MVP testing, utilizing state-of-the-art vision LLM layers for user skin consultations, backed by a clean React-powered flow.',
    outcome: 'Launched a beautifully finished product that rapidly collected community feedback and proven user retention metrics.',
    metrics: [
      { label: 'Time to Shipped MVP', value: '4 Weeks 🦄' },
      { label: 'User Rating', value: '4.8 Est 🌈' },
      { label: 'Validation Cycle', value: '7-Day Slices ☁️' }
    ],
    duration: '2 Months',
    year: 2025
  },
  {
    id: 'dermalabel-ai',
    title: 'Dermalabel AI Workflow Streamlining',
    client: 'Clinical Labs Project',
    industry: 'MLOps & Dermatology Workflows',
    brief: 'Created an interactive Streamlit application exploring advanced AI-assisted labeling for dermatology workflows.',
    challenge: 'High lab friction and slow data indexing cycles were creating bottlenecks. Specialized dermatologists lost precious hours doing manual data labeling.',
    strategy: 'Engineered a highly custom, intuitive Streamlit feedback system with integrated LLMs to suggest and curate complex labels dynamically.',
    outcome: 'Streamlined clinical operations and data indexing speed, cutting lab annotating workload by nearly three quarters.',
    metrics: [
      { label: 'Annotating Workload', value: '-75% Time ☁️' },
      { label: 'Setup Time', value: '3 Days 🦄' },
      { label: 'Label Accuracy', value: '98.4% 🌈' }
    ],
    duration: '1 Month',
    year: 2024
  },
  {
    id: 'delivery-velocity',
    title: 'Continuous Agile Velocity Overhaul',
    client: 'SaaS Innovator',
    industry: 'Software Delivery Ops',
    brief: 'Transitioned a struggling SaaS development pipeline from multi-month blockages to a seamless Kanban-driven stream.',
    challenge: 'Teams were suffering from daily standup fatigue, bloated backlogs, and critical QA bottleneck release delays.',
    strategy: 'Rebuilt team workflows around strict WIP limits, continuous integration pipelines, and interactive relative-point estimation.',
    outcome: 'Releases completed daily with total transparency, zero overnight releases, and significantly high developer happiness indices.',
    metrics: [
      { label: 'Avg Velocity Boost', value: 'Double Speed 🌈' },
      { label: 'Wait Bottlenecks', value: '-72% ☁️' },
      { label: 'Sprint Burn Accuracy', value: '94.2% 🦄' }
    ],
    duration: '6 Months',
    year: 2025
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'jaro-sidor',
    name: 'Jaro Sidor',
    role: 'Lead AI Product & Unicorn Agile Advisor 🦄',
    photo: jaroProfile,
    bio: 'Jaro Sidor is a magical Agile Coach & Rapid AI builder who blows away sprint delays using golden rainbow dust pipelines to maximize sprint flow and team collaboration.',
    specialties: ['AI Prototyping & Gemini LLMs 🦄', 'Kanban/Scrum & Delivery Ops ☁️', 'MVP Roadmaps & Rainbow Slices 🌈'],
    experience: 10,
    almaMater: 'Certified PMP & PSM • jaro11.github.io'
  },
  {
    id: 'elena-scrum',
    name: 'Dr. Elena Rostova',
    role: 'VP, Cloud Engineering & Rainbow Pathways 🌈',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Elena designs flying cloud servers that ride on rainbow tracks. She unblocks multi-layered Kubernetes bottlenecks using magical WIP limits.',
    specialties: ['DevOps Cloud Integration ☁️', 'WIP Limits & Rainbow Pulls 🌈', 'Magic Agile Architecture 🦄'],
    experience: 16,
    almaMater: 'MIT (PhD in Computer Science), Stanford (MS)'
  }
];

export interface AgileMeme {
  id: string;
  title: string;
  setup: string;
  punchline: string;
  realityLabel: string;
  realityText: string;
  severity: 'Mild' | 'Spicy' | 'Maximum Facepalm';
}

export const AGILE_MEMES: AgileMeme[] = [
  {
    id: 'daily-standup',
    title: 'The 15-Minute Daily Standup',
    setup: 'Scrum Master: "Let\'s keep updates concise, maximum 15 minutes today."',
    punchline: '45 minutes later... developer Bob is explaining his local Docker config in excruciating detail to 12 completely silent people.',
    realityLabel: 'The Coach’s Diagnosis:',
    realityText: 'Bob is trying to justify his job because of a low-trust culture, and the Scrum Master has turned an alignment meeting into a status report. Standups are for planning, not status logs!',
    severity: 'Spicy'
  },
  {
    id: 'estimation-math',
    title: 'Fibonacci Point Logic',
    setup: 'Product Owner: "Why is updating a single login form button a size 13 story?"',
    punchline: 'Developer: "Well, because Steve built the CSS module, and if we touch it, the entire authentication server drops offline. Plus, 13 is a lucky number!"',
    realityLabel: 'The Coach’s Diagnosis:',
    realityText: 'Story points represent effort, complexity, and risk—not time. Instead of arguing over points, invest in refactoring your high-friction code so Steve isn\'t a single point of failure.',
    severity: 'Mild'
  },
  {
    id: 'agile-waterfall',
    title: 'The "We Do Agile" Lie (Water-Scrum-Fall)',
    setup: 'CEO: "We pivoted to Agile! We do daily sprint standups now!"',
    punchline: 'Reality check: Requirements are set 12 months in advance, releases happen twice a year, and QA is locked in a dark room for 2 months testing a finished monolith.',
    realityLabel: 'The Coach’s Diagnosis:',
    realityText: 'This is "Cargo-Cult" agile. You bought the jargon, but are still shipping risk in massive batches. Agility is measured by release frequency and team empowerment, not standups!',
    severity: 'Maximum Facepalm'
  },
  {
    id: 'retro-actions',
    title: 'The Forgotten Retrospective',
    setup: 'Team: "We found 12 critical delivery roadblocks and documented excellent action items!"',
    punchline: 'Action items are uploaded to Jira and immediately filed under "Never to be looked at again" while the next sprint planning overrides all improvements.',
    realityLabel: 'The Coach’s Diagnosis:',
    realityText: 'If you fail to act on retro feedback, teams realize it is a theater. Always take exactly ONE high-priority retrospective action item and place it directly into the next Sprint backlog as a mandatory task.',
    severity: 'Spicy'
  },
  {
    id: 'sprint-burndown',
    title: 'The "Cliff of Hope" Burndown',
    setup: 'Sprint Days 1 to 9: Flat line. Zero tasks completed or marked done.',
    punchline: 'Day 10 (Last day of Sprint): An absolute vertical cliff drop as QA finally reviews and merges all 14 backlog pull-requests at 4:45 PM.',
    realityLabel: 'The Coach’s Diagnosis:',
    realityText: 'Classic mini-waterfall within a sprint. The team is not slicing stories small enough, and QA isn’t looking at items concurrently. Achieve stable burn by designing daily checkable increments!',
    severity: 'Maximum Facepalm'
  }
];

export const TRANSLATION_PAIRS = [
  {
    corporate: "This project has a hard, unmovable deadline of Next Friday with a 100% fixed feature list.",
    agileText: "We are currently operating inside a highly rigid Waterfall constraint. We need to immediately prioritize features into standard Must-Have, Should-Have (MoSCoW) bins, or we will deploy a broken product.",
    translationNote: "Agile Translator: Slicing the backlog keeps the business afloat when deadlines collide with reality."
  },
  {
    corporate: "Tell the developers to just work overtime so we can hit our sprint commitment.",
    agileText: "We have overcommitted our team capacity this sprint, leading to unsustainable pressure. We will adjust the scope of low-priority tickets, defer them to the next backlog, and recalculate our real historical velocity.",
    translationNote: "Agile Translator: Overtime decreases quality, creates technical debt, and ruins tomorrow's sprint velocity."
  },
  {
    corporate: "I want an exact, comprehensive Gantt chart showing weekly feature delivery for the next eighteen months.",
    agileText: "We will establish a flexible Product Roadmap with rolling quarterly objectives. High-level themes are solid for Q1, but subsequent quarters represent high-adaptability priorities that respond to real customer data.",
    translationNote: "Agile Translator: A Gantt chart on Day 1 is an elegant fantasy that is obsolete by Day 15."
  },
  {
    corporate: "Why is QA taking so long? Just skip writing writing automated tests so we can release quickly.",
    agileText: "We are actively taking on severe Technical Debt to achieve high temporary speed. This debt will act like high-interest credit cards, requiring substantial bugfixing in subsequent sprints and slowing feature work to a crawl next month.",
    translationNote: "Agile Translator: Hurrying today means grinding to a painful halt tomorrow."
  },
  {
    corporate: "We need a 2-hour daily alignment meeting to review status updates from every individual developer.",
    agileText: "We should implement self-managing visual boards (like Kanban) to visualize task states instantly. This allows us to replace exhausting status updates with brief, targeted discussion about unblocking active obstacles.",
    translationNote: "Agile Translator: Meetings are symptoms of poor information transparency and lack of delegation."
  }
];

export const BINGO_WORDS = [
  "Story Points", "Sprint Pivot", "Velocity", "Backlog Grooming",
  "Scrum of Scrums", "SAFe Alignment", "Epic", "Spike",
  "Retro Actions", "Work in Progress", "Agile Transformation", "Water-Scrum-Fall",
  "Cargo Cult", "Psychological Safety", "Servant Leader", "Sprint Retrospective",
  "Standup Fatigue", "Fibonacci Sizing", "Burndown Chart", "Self-Organizing",
  "MoSCoW Prioritize", "MVP", "Definition of Done", "Impediment Unblocked",
  "Value Stream"
];

export interface QuizQuestion {
  id: number;
  question: string;
  options: { text: string; points: number; explanation: string }[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What does your Daily Standup honestly feel like?",
    options: [
      {
        text: "A quick 10-minute alignment, standing up, identifying clear blockers, ready in a snap.",
        points: 4,
        explanation: "Excellent! You understand that standups exist for peer-to-peer adjustment, not administrative overhead."
      },
      {
        text: "A 30-minute status check where everyone reports to the Scrum Master or Tech Lead while sitting down.",
        points: 2,
        explanation: "Sub-optimal. Senders are talking to a single authority, not collaborating. Try standing up, or using a walkthrough-board format!"
      },
      {
        text: "A 45+ minute ordeal of deep technical configuration logs, debugging on the spot, and general boredom.",
        points: 1,
        explanation: "A major anti-pattern. If a topic needs deep tech, take it Offline. Set up a sidebar meeting afterward with just the affected people!"
      }
    ]
  },
  {
    id: 2,
    question: "How does the team handle Sprint Commitments?",
    options: [
      {
        text: "We pull stories based on our real historical velocity, with room for buffer and retros.",
        points: 4,
        explanation: "Brilliant. Focus on sustainable pace protects team health and maintains reliable production outcomes."
      },
      {
        text: "Management sets what must be delivered, and we squeeze points in to make it look like we agreed.",
        points: 2,
        explanation: "Highly risky. This is 'Water-Scrum-Fall' where team velocity is forced rather than observed. Leads to burn-out and bad code."
      },
      {
        text: "Commitment? We just grab tickets whenever, change scope mid-sprint, and rarely finish anything.",
        points: 1,
        explanation: "Chaos. Complete lack of focus limit rules. Sprints exist to provide a peaceful horizon of stable goals. Enforce sprint focus guidelines!"
      }
    ]
  },
  {
    id: 3,
    question: "When does QA (Quality Assurance) get involved in features?",
    options: [
      {
        text: "Involved from product discovery! Collocated, reviewing stories before they are coded, writing checks concurrently.",
        points: 4,
        explanation: "Perfect! Shift-Left QA prevents defects rather than catching them after hours of coding."
      },
      {
        text: "They receive tickets on Day 8 of the Sprint and frantically attempt to test 10 tickets at once in two days.",
        points: 2,
        explanation: "Stressful bottleneck. You are holding a mini-waterfall within Sprints. Try to slice user stories into smaller independent tracks."
      },
      {
        text: "QA is a separate department in a different building that tests releases 3 weeks after the sprint completes.",
        points: 1,
        explanation: "Completely Waterfall. Your sprint 'done' state is an illusion. Reorganize QA directly into the product squad!"
      }
    ]
  },
  {
    id: 4,
    question: "How do you estimate your engineering backlogs?",
    options: [
      {
        text: "Relative estimation (Fibonacci points or T-shirt sizes) to measure difficulty/risk, updated collaboratively.",
        points: 4,
        explanation: "Correct. Relative sizing removes the high-stress precise time estimates, keeping teams fast and aligned."
      },
      {
        text: "We estimate in precise hours, and management converts those hours directly to fixed dollar deadlines.",
        points: 2,
        explanation: "Anti-pattern. Sizing is not a promise. Converting relative sizing to binding schedules breaks the confidence index."
      },
      {
        text: "Estimations are made by the architect alone in a basement with no team feedback. We just obey.",
        points: 1,
        explanation: "Dictatorship. The developers doing the actual implementation must own the estimation to ensure accountability."
      }
    ]
  },
  {
    id: 5,
    question: "What actually happens to Retrospective action items?",
    options: [
      {
        text: "We choose exactly ONE premium action item, assign an owner, and complete it inside the immediate next sprint.",
        points: 4,
        explanation: "Splendid execution. Continuous improvement requires consistent focus on small, realizable changes."
      },
      {
        text: "We write a long, elaborate bullet list on a whiteboard, take a blurry photo, and never look at it again.",
        points: 2,
        explanation: "Retro Theater. Teams lose faith in retro processes. Dedicate a real spot in your next backlog for retro improvements!"
      },
      {
        text: "We skip retrospective sessions entirely because 'there is too much work to do' to waste time talking.",
        points: 1,
        explanation: "Self-sabotage. Failing to take retros is like driving a racecar on flat tires because you're too busy to stop for a pit."
      }
    ]
  }
];
