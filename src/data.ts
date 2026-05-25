import { Service, CaseStudy, TeamMember } from './types';

export const SERVICES: Service[] = [
  {
    id: 'enterprise-scaling',
    title: 'Enterprise Agility & Scaling',
    category: 'Scaling & Architecture',
    description: 'We align hundred-person engineering groups with Lean Portfolio Management, SAFe, or custom light-weight frameworks without the corporate overhead.',
    detailedDescription: 'True scaling is not about adding layers of bureaucracy; it is about synchronizing dependencies, clearing obstacles, and aligning strategy with execution. We design modern "Squad & Tribe" topographies, implement Lean Portfolio Management, and orchestrate value stream map flows.',
    deliverables: [
      'Value Stream & Development Flow Architecture Design',
      'Lean Portfolio Management (LPM) Implementation',
      'Scaled Agile (SAFe, LeSS, or Hybrid) Custom Framework Tailoring',
      'Dependency Isolation & Cross-Team Synchronization Protocols'
    ],
    metrics: 'Average 34% reduction in time-to-market for digital products',
    icon: 'Layers'
  },
  {
    id: 'scrum-coaching',
    title: 'High-Performance Scrum & Kanban Practice',
    category: 'Team Execution',
    description: 'Busting standup fatigue and sprint stagnation. We coach teams to double velocity through pull-systems, focus limiters, and high-impact retrospectives.',
    detailedDescription: 'Is your "Agile" just waterfall with a 15-minute daily interrogation? We help teams focus on real work. We rebuild your Scrum/Kanban practices from scratch: implementing strict Work In Progress (WIP) limits, refining user story health, and creating psychological safety in retros.',
    deliverables: [
      'Interactive Scrum Master & Product Owner Masterclasses',
      'WIP Limits & Pull-System Design for Continuous Delivery',
      'Sizing, Story Splitting, & Agile Estimation Workspaces',
      'Retrospective Re-engineering and Team Alignment Reviews'
    ],
    metrics: 'Up to 55% increase in team velocity and backlog clarity',
    icon: 'Activity'
  },
  {
    id: 'agile-leadership',
    title: 'Agile Leadership & Culture Transformation',
    category: 'Cultural Shift',
    description: 'Transitioning command-and-control directors into supportive, high-trust leaders who empower autonomous, self-organizing squads.',
    detailedDescription: 'Micromanagement is the killer of velocity. We partner with executive boards, VP-levels, and product directors to foster a culture of transparent experimentation, high accountability, psychological safety, and decentralized decision-making.',
    deliverables: [
      'Servant Leadership Coaching & Alignment for Executives',
      'Objective & Key Results (OKR) Strategy Mapping Workshops',
      'Autonomy Frameworks & High-Trust Performance Systems',
      'Agile Career Paths & Talent Development Programs'
    ],
    metrics: '92% retention rate and substantial improvements in team health scores',
    icon: 'Compass'
  },
  {
    id: 'product-discovery',
    title: 'Product Discovery & Value-Stream Mapping',
    category: 'Product Strategy',
    description: 'Ensuring your engineers are building what users actually want. We replace bloated spec sheets with modern impact mapping and dynamic user story slicing.',
    detailedDescription: 'There is nothing more wasteful than highly efficient teams building the incorrect products. We introduce rapid prototyping, impact mapping, user story mapping, and dual-track Agile discovery loops to validate customer demand and decrease wasted engineering cycles.',
    deliverables: [
      'Dual-Track Agile Discovery & Prototyping Loops',
      'User Story Mapping & Dynamic Backlog Grooming Services',
      'Customer Value Stream Audits & Operational Lead Time Maps',
      'MVP Optimization Strategy & Release Train Milestones'
    ],
    metrics: '91% accuracy in feature adoption post-launch',
    icon: 'Briefcase'
  },
  {
    id: 'devops-alignment',
    title: 'DevOps Flow & Continuous Delivery Orchestration',
    category: 'Agile Engineering',
    description: 'Unifying software build pipelines and releases. We assist teams in automating testing and deployment lines for sub-hour cycle times.',
    detailedDescription: 'Your Scrum process is completely crippled if deployment takes four weeks. We bridge the gap between product management, engineering, and infrastructure, building automated automated delivery pipelines to reduce release risk.',
    deliverables: [
      'Development-Operations Combined Guild Infrastructure Sizing',
      'Continuous Integration / Continuous Deployment (CI/CD) Strategic Audits',
      'Automated Test Coverage Optimization & Shift-Left Security',
      'Trunk-Based Development & Feature Flag Management'
    ],
    metrics: 'From monthly batch releases to average of 4.2 automated deploys daily',
    icon: 'Cpu'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-velocity',
    title: 'From Water-Scrum-Fall to Multi-Daily Deploys',
    client: 'Global FinTech Corp',
    industry: 'Financial Technology',
    brief: 'A standard fintech company with legacy 3-month releases adopts structured Scrum, automated integration, and team-guided dependency management.',
    challenge: 'Releases took 12 hours of manual server configuration, QA was treated as a distinct visual bottleneck phase, and team members were burnt out from overnight weekend release calls.',
    strategy: 'We reorganized three disparate departments into cross-functional, autonomous teams, initiated continuous integration automated testing, and shifted product managers into active Product Owners writing sliced user stories.',
    outcome: 'We eliminated release anxiety by delivering micro-incremental values and shifting to daily, zero-downtime microservice deployments.',
    metrics: [
      { label: 'Release Time', value: '12 hrs → 8 mins' },
      { label: 'Delivery Speed', value: '+320%' },
      { label: 'Defect Rate', value: '-85%' }
    ],
    duration: '10 Months',
    year: 2025
  },
  {
    id: 'retail-scale',
    title: 'Scaling 45 Squads on a Single Cadence',
    client: 'Omni Retail Group',
    industry: 'Consumer Commerce',
    brief: 'Restructured a disjointed organization of 450 engineers using dynamic value streams, visual dependency boards, and synchronized sprint cycles.',
    challenge: 'Individual teams met micro targets, but cross-team dependencies caused massive integration delays. Brand releases routinely slipped by up to six months.',
    strategy: 'We mapped operations to clear Value Streams, trained scrum masters to manage external dependencies pro-actively, and introduced bi-weekly program board demonstrations.',
    outcome: 'Synchronized alignment eliminated blockages earlier. Teams began identifying integration conflicts during sprint boundary planning rather than the day of release.',
    metrics: [
      { label: 'On-Time Releases', value: '94.2% Rate' },
      { label: 'Wait Bottlenecks', value: '-72% Time' },
      { label: 'Team Engagement', value: '+45% Index' }
    ],
    duration: '14 Months',
    year: 2024
  },
  {
    id: 'health-scrum',
    title: 'HIPAA-Compliant Agility in Clinical Platforms',
    client: 'BioPulse Systems',
    industry: 'MedTech & Compliance',
    brief: 'Injected rapid prototyping and continuous discovery procedures into high-regulation medical software development cycle times.',
    challenge: 'Heavy compliance procedures led engineers to adopt rigid documentation-heavy flows that prevented early user testing, resulting in products rejected by actual clinical operators.',
    strategy: 'We built a compliant continuous sandbox where medical experts reviewed visual prototypes mid-sprint. We mapped compliance documents directly to automated testing proofs.',
    outcome: 'The client successfully released the surgical coordination platform months ahead of schedule, with perfect FDA compliance audits.',
    metrics: [
      { label: 'Time to Market', value: '-4 Months' },
      { label: 'Doctor Usability', value: '9.4/10 Score' },
      { label: 'Compliance Audit', value: '100% Passed' }
    ],
    duration: '8 Months',
    year: 2025
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'marcus-agile',
    name: 'Marcus Vance',
    role: 'Managing Partner & Enterprise SAFe Fellow',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Marcus has 22+ years helping organizations dismantle deep silos. Previously a Lead Flow Coach at McKinsey and strategic advisor at massive international tech operations.',
    specialties: ['Scaled Agility (SAFe/LeSS)', 'Value Stream Redesign', 'Systemic Transformation'],
    experience: 24,
    almaMater: 'Wharton School (MBA), Princeton (BA)'
  },
  {
    id: 'elena-scrum',
    name: 'Dr. Elena Rostova',
    role: 'VP, Agile Engineering & Continuous Delivery',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Elena is dedicated to engineering cadence. She pairs Agile behavioral psychology with rigid CI/CD pipelines, demonstrating that speed and quality are entirely compatible.',
    specialties: ['DevOps Integration', 'WIP Limits & Pull Systems', 'Agile Architecture'],
    experience: 16,
    almaMater: 'MIT (PhD in Computer Science), Stanford (MS)'
  },
  {
    id: 'sarah-culture',
    name: 'Sarah Jenkins',
    role: 'Principal Agile Leadership Coach',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'Sarah leads interactive leadership workshops for executives, replacing control-focussed tracking with outcome-driven servant leadership systems.',
    specialties: ['Executive Servant Leadership', 'OKRs & Performance Maps', 'Psychological Safety'],
    experience: 15,
    almaMater: 'Stanford GSB (MBA), UC Berkeley (BS)'
  },
  {
    id: 'david-backlog',
    name: 'David Thorne',
    role: 'Director of Product Coaching',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    bio: 'David helps teams write premium user stories, manage highly complex nested backlogs, and run high-efficiency collaborative sorting sessions.',
    specialties: ['User Story Slicing', 'Dynamic Backlog Tuning', 'Customer Discovery Journeys'],
    experience: 14,
    almaMater: 'Georgia Tech (MS Operations Research)'
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
