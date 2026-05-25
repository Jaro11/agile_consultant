import React, { useState, useEffect, useRef } from 'react';
import { 
  Layers, 
  Activity, 
  Compass, 
  Briefcase, 
  Cpu, 
  Calendar, 
  ChevronRight, 
  ChevronLeft, 
  User, 
  Clock, 
  ArrowRight, 
  Check, 
  CheckCircle, 
  Plus, 
  X, 
  Award, 
  Shield, 
  Zap, 
  RefreshCw, 
  Play, 
  Smile, 
  ThumbsUp, 
  AlertCircle, 
  TrendingUp, 
  Sparkles, 
  BookOpen, 
  Info,
  ExternalLink,
  Flame,
  Frown,
  Coins,
  Terminal,
  Code,
  FileText,
  Send,
  Smartphone,
  MessageSquare,
  Database,
  Cloud
} from 'lucide-react';
import Header from './components/Header';
import { 
  SERVICES, 
  CASE_STUDIES, 
  TEAM, 
  AGILE_MEMES, 
  TRANSLATION_PAIRS, 
  BINGO_WORDS, 
  QUIZ_QUESTIONS 
} from './data';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  
  // Quiz states
  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizPoints, setQuizPoints] = useState<number[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showQuizDetails, setShowQuizDetails] = useState(false);

  // Meme states
  const [selectedMemeIndex, setSelectedMemeIndex] = useState(0);
  const [revealedReality, setRevealedReality] = useState(false);

  // Translator states
  const [selectedTranslationIndex, setSelectedTranslationIndex] = useState(0);
  const [customCorporateText, setCustomCorporateText] = useState('');
  const [customTranslatedResult, setCustomTranslatedResult] = useState<{agileText: string, note: string} | null>(null);
  const [isTranslatingAnim, setIsTranslatingAnim] = useState(false);

  // Bingo states
  const [bingoGrid, setBingoGrid] = useState<{ word: string; checked: boolean }[]>([]);
  const [bingoWin, setBingoWin] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [bingoWinLines, setBingoWinLines] = useState<number>(0);

  // Service modal / active state
  const [selectedServiceId, setSelectedServiceId] = useState('agile-consulting');

  // AI Prototype Simulation states
  const [aiIdeaType, setAiIdeaType] = useState<'skincare' | 'dermalabel' | 'document' | 'custom'>('skincare');
  const [customAiIdea, setCustomAiIdea] = useState('');
  const [aiModelType, setAiModelType] = useState<'flash' | 'pro'>('flash');
  const [aiTechStack, setAiTechStack] = useState<'streamlit' | 'react'>('streamlit');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationStep, setSimulationStep] = useState(1);
  const [simulationProgress, setSimulationProgress] = useState(0);
  const [showLivePrototype, setShowLivePrototype] = useState(false);
  
  // Skincare states
  const [skincareAnalyzing, setSkincareAnalyzing] = useState(false);
  const [skincareResult, setSkincareResult] = useState<string | null>(null);
  const [skincareSample, setSkincareSample] = useState<'normal' | 'dry' | 'acne' | null>(null);

  // Dermatology states
  const [dermalabels, setDermalabels] = useState<{[key: string]: 'approved' | 'rejected' | 'pending'}>({
    'Epidermal hyperplasia': 'pending',
    'Sebaceous gland hyperplasia': 'pending',
    'Psoriasiform dermatitis': 'pending',
  });

  // Document states
  const [docClauses, setDocClauses] = useState([
    { id: 1, type: 'Indemnity', text: 'The Vendor shall fully indemnify and hold harmless the Client against all third-party IP claims, with no liability cap.', risk: 'CRITICAL', revised: false },
    { id: 2, type: 'Termination', text: 'Client reserves the right to terminate for convenience with 2 hours written notice via email.', risk: 'HIGH', revised: false },
    { id: 3, type: 'Governing Law', text: 'This Agreement shall be governed by and construed in accordance with the laws of the Cayman Islands.', risk: 'MEDIUM', revised: false },
  ]);

  // General terminal commands list for Custom Idea simulation
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [customAiPrompt, setCustomAiPrompt] = useState('');
  const [customPromptResponse, setCustomPromptResponse] = useState<string | null>(null);
  const [customPromptLatency, setCustomPromptLatency] = useState(0);
  const [skincareVotes, setSkincareVotes] = useState({ up: 24, down: 2 });

  // Magical Unicorn & Rainbow state triggers
  const [unicornPowerCount, setUnicornPowerCount] = useState(0);
  const [magicRainbowShower, setMagicRainbowShower] = useState(false);
  const [selectedUnicornQuote, setSelectedUnicornQuote] = useState("Click me to double Jaro's delivery output with 100% pure fairy-dust!");

  // Case Study active switcher
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // Booking states
  const [advisorId, setAdvisorId] = useState('jaro-sidor');
  const [date, setDate] = useState('2026-05-28');
  const [time, setTime] = useState('10:00 AM');
  const [focusArea, setFocusArea] = useState('Squad Velocity Optimization');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    notes: ''
  });
  const [isBooked, setIsBooked] = useState(false);

  // Initialize interactive Bingo board once
  useEffect(() => {
    const shuffleArray = [...BINGO_WORDS].sort(() => Math.random() - 0.5);
    const selected25 = shuffleArray.slice(0, 25);
    // ensure middle center is free or standard
    selected25[12] = "FREE STANDUP";
    setBingoGrid(selected25.map((word, index) => ({
      word,
      checked: index === 12 // center is checked by default
    })));
  }, []);

  // Check scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'ai-speed-builder', 'assessor', 'agile-memes', 'interactive-fun', 'case-studies', 'team', 'scheduler'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const startAiSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);
    setSimulationProgress(10);
    setShowLivePrototype(false);
    
    // reset mock sub-states
    setSkincareResult(null);
    setSkincareSample(null);
    setDermalabels({
      'Epidermal hyperplasia': 'pending',
      'Sebaceous gland hyperplasia': 'pending',
      'Psoriasiform dermatitis': 'pending',
    });
    setDocClauses([
      { id: 1, type: 'Indemnity', text: 'The Vendor shall fully indemnify and hold harmless the Client against all third-party IP claims, with no liability cap.', risk: 'CRITICAL', revised: false },
      { id: 2, type: 'Termination', text: 'Client reserves the right to terminate for convenience with 2 hours written notice via email.', risk: 'HIGH', revised: false },
      { id: 3, type: 'Governing Law', text: 'This Agreement shall be governed by and construed in accordance with the laws of the Cayman Islands.', risk: 'MEDIUM', revised: false },
    ]);
    
    const steps = [
      { step: 1, progress: 14 },
      { step: 2, progress: 28 },
      { step: 3, progress: 42 },
      { step: 4, progress: 57 },
      { step: 5, progress: 71 },
      { step: 6, progress: 85 },
      { step: 7, progress: 100 },
    ];
    
    steps.forEach((s, idx) => {
      setTimeout(() => {
        setSimulationStep(s.step);
        setSimulationProgress(s.progress);
        if (s.step === 7) {
          setIsSimulating(false);
          setShowLivePrototype(true);
        }
      }, (idx + 1) * 350);
    });
  };

  const testCustomPrompt = () => {
    if (!customAiPrompt.trim()) return;
    setCustomPromptResponse(null);
    setCustomPromptLatency(0);
    
    // Simulate API query latency
    const startTime = Date.now();
    setTimeout(() => {
      const p = customAiPrompt.toLowerCase();
      let reply = "";
      if (p.includes("idea") || p.includes("app") || p.includes("product")) {
        reply = `[AI SECURE DISCOVERY SKELETON]\n\nI have evaluated your product concept: "${customAiPrompt}". \n\nSuggested MVP Slices:\n1. Core value proposition single UI component\n2. Local storage telemetry persistence.\n\nRecommended LLM Settings:\nModel: Gemini 2.5 Flash\nTemperature: 0.1 (strict, structured JSON schema).`;
      } else if (p.includes("code") || p.includes("react") || p.includes("typescript")) {
        reply = `export function useAISprint() {\n  // Automated rapid sprint bootstrapper\n  const [isLive, setIsLive] = useState(true);\n  return {\n    framework: 'React + Vite',\n    latency: '85ms',\n    readyToShip: true\n  };\n}`;
      } else {
        reply = `[AI ENGINE STATUS CHECK: ONLINE]\n\nProcessed Custom Request: "${customAiPrompt}"\n\nMethodology Action: Under Jaro's 7-Day Agile Prototyping process, this prompt schema is wrapped securely behind a server-side proxy route (/api/ai/sandbox) to prevent Client-Side API Key leaks, structured using strict Zod types, and integrated into a fast hosted endpoint.`;
      }
      setCustomPromptLatency(Date.now() - startTime);
      setCustomPromptResponse(reply);
    }, 600);
  };

  // Service helper to map icon
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  // Bingo cell toggle & winner check
  const toggleBingoCell = (index: number) => {
    if (index === 12) return; // free square cannot be toggled
    const newGrid = [...bingoGrid];
    newGrid[index].checked = !newGrid[index].checked;
    setBingoGrid(newGrid);

    // Grid coordinates
    // 0  1  2  3  4
    // 5  6  7  8  9
    // 10 11 12 13 14
    // 15 16 17 18 19
    // 20 21 22 23 24

    let lines = 0;
    
    // Rows
    for (let r = 0; r < 5; r++) {
      if (newGrid.slice(r * 5, r * 5 + 5).every(cell => cell.checked)) lines++;
    }
    // Columns
    for (let c = 0; c < 5; c++) {
      if ([0, 1, 2, 3, 4].every(r => newGrid[r * 5 + c].checked)) lines++;
    }
    // Diagonals
    if ([0, 6, 12, 18, 24].every(i => newGrid[i].checked)) lines++;
    if ([4, 8, 12, 16, 20].every(i => newGrid[i].checked)) lines++;

    setBingoWinLines(lines);
    if (lines > 0) {
      setBingoWin(true);
    } else {
      setBingoWin(false);
    }
  };

  const resetBingo = () => {
    const shuffleArray = [...BINGO_WORDS].sort(() => Math.random() - 0.5);
    const selected25 = shuffleArray.slice(0, 25);
    selected25[12] = "FREE STANDUP";
    setBingoGrid(selected25.map((word, index) => ({
      word,
      checked: index === 12
    })));
    setBingoWin(false);
    setShowCertificate(false);
    setBingoWinLines(0);
  };

  // Custom simulation translator
  const handleCustomTranslate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customCorporateText.trim()) return;
    
    setIsTranslatingAnim(true);
    setTimeout(() => {
      // Create a nice dynamic translation using client-side intelligence
      const responses = [
        {
          agileText: `Estimations are inflated by roughly 300% to create buffer for unmanaged requirements. We will establish real velocity boundaries to limit initial input and force realistic prioritization.`,
          note: "Coach's Diagnostics: Artificially padding hours is the team's natural response to being fired for missed forecasts."
        },
        {
          agileText: `Systemic blockages and poor deployment flow are crushing software throughput. We must audit our deployment pipelines and reduce story size targets to unblock deliveries.`,
          note: "Coach's Diagnostics: Blaming the staff ignores the heavy architecture pipeline which prevents continuous releases."
        },
        {
          agileText: `The management layer insists on command-oriented control rather than value focus. We will introduce leadership alignment goals to emphasize results over micro-managing details.`,
          note: "Coach's Diagnostics: Weekly status spreadsheets exist to feed middle-management telemetry anxiety."
        }
      ];
      
      const randomIdx = Math.floor((customCorporateText.length + 3) % responses.length);
      setCustomTranslatedResult(responses[randomIdx]);
      setIsTranslatingAnim(false);
    }, 900);
  };

  // Quiz calculations
  const handleAnswerSelect = (points: number, optionIndex: number) => {
    const newPoints = [...quizPoints];
    newPoints[currentQuestionIndex] = points;
    setQuizPoints(newPoints);

    const newAnswers = [...quizAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setQuizAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finished
      const sum = newPoints.reduce((a, b) => a + b, 0);
      setQuizScore(sum);
    }
  };

  const restartQuiz = () => {
    setQuizScore(null);
    setCurrentQuestionIndex(0);
    setQuizPoints([]);
    setQuizAnswers([]);
    setShowQuizDetails(false);
  };

  const getRankData = (score: number) => {
    if (score >= 18) {
      return {
        badge: "Agile flow Zenith (Masterclass Speed)",
        theme: "text-blue-400 bg-blue-950/80 border-blue-500",
        desc: "Phenomenal agility! Your squads operate in true crossfunctional cadence with synchronized pipelines, high psychological safety, and rapid feedback loops.",
        recommendation: "Focus on micro-optimizations and leading value stream audits. You are ready to join Jaro Sidor on strategic product keynotes."
      };
    } else if (score >= 14) {
      return {
        badge: "Velocity Catalyst (Evolving Sprint Squads)",
        theme: "text-sky-400 bg-sky-950/80 border-sky-500",
        desc: "Solid foundation. Your standard scrum loops are stable, but you suffer from dependency delays and slow quarterly planning integration.",
        recommendation: "Begin implementing strict WIP limits, continuous integration checks, and switch to rolling quarterly roadmaps with Jaro."
      };
    } else if (score >= 10) {
      return {
        badge: "Water-Scrum-Fall (Cargo-Cult Novice)",
        theme: "text-amber-400 bg-amber-950/80 border-amber-500",
        desc: "You are doing Agile on paper only. Daily standups take place, but deployment pipelines are rigid blocks, and requirements are hard-scoped annually.",
        recommendation: "Transition QA immediately into individual sprints, slice user stories to smaller independent values, and book a backlog session."
      };
    } else {
      return {
        badge: "Command-and-Control Chaos (Waterfall Silos)",
        theme: "text-rose-400 bg-rose-950/80 border-rose-500",
        desc: "Critical state. Long status calls, fear of code failure, manual server releases, and massive overhead pipelines.",
        recommendation: "Stop immediately. Schedule an urgent Agile Transformation mapping session below with Jaro Sidor before sprint friction stalls your entire delivery pipeline."
      };
    }
  };

  // Pre-fill quiz diagnostic inside Booking Notes!
  const prefillWithQuizResult = () => {
    if (quizScore === null) return;
    const rank = getRankData(quizScore);
    setClientInfo({
      ...clientInfo,
      notes: `We recently took your Agile Maturity Assessor and scored ${quizScore}/20 points, earning the '${rank.badge}' ranking. We need help focusing on: ${rank.recommendation}`
    });
    // Scroll to scheduler
    const element = document.getElementById('scheduler');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleBookSession = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.email || !clientInfo.company) {
      alert("Please pre-fill Name, Email, and Company to generate secure advisor invitation.");
      return;
    }
    setIsBooked(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 text-slate-800 flex flex-col relative overflow-hidden">
      {/* Background Graphic Accents - Magical Rainbow Aurora Horizon */}
      <div className="absolute top-0 left-10 w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[160px] -z-10 animate-pulse" />
      <div className="absolute top-[200px] right-10 w-[600px] h-[600px] bg-yellow-450/20 rounded-full blur-[180px] -z-10" />
      <div className="absolute top-[800px] left-1/3 w-[600px] h-[600px] bg-sky-450/20 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-[400px] left-10 w-[450px] h-[450px] bg-indigo-500/20 rounded-full blur-[100px] -z-10" />

      {/* Sticky Header component */}
      <Header activeSection={activeSection} />

      {/* Hero Background Drifting Clouds */}
      <div className="absolute top-24 left-10 text-white/10 text-8xl select-none pointer-events-none animate-float-left">☁️</div>
      <div className="absolute top-44 right-10 text-white/10 text-9xl select-none pointer-events-none animate-float-right">☁️</div>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 md:pt-40 pb-20 px-6 md:px-8 border-b border-pink-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 via-yellow-500/20 to-sky-400/20 border border-pink-500/30 px-4 py-1.5 rounded-full w-fit animate-pulse">
              <span className="text-sm">🦄</span>
              <span className="font-mono text-xs tracking-wider text-pink-600 font-extrabold uppercase animate-pulse">
                Jaro Sidor's Magical Delivery Unicorns & Clouds
              </span>
            </div>

            {/* Display Header */}
            <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.1]">
              Sprinkle <span className="text-rainbow-glow">Fairy Dust Agility</span>
              <br />& Ship Products in Days!
            </h1>

            {/* Paragraph Subhead */}
            <p className="font-sans text-slate-750 text-base sm:text-lg leading-relaxed max-w-2xl">
              Welcome to <strong className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-indigo-600">Jaro Sidor Consulting</strong>, where we combine elite Agile advisory with whimsical unicorn velocity. I help high-growth tech hubs, startups, and agile squads establish legendary Scrum/Kanban setups, deploy active PO guidance, and engineer rapid prototypes that soar through clouds to user-validation in days!
            </p>

            {/* Dynamic visual statistics grids */}
            <div className="grid grid-cols-3 gap-4 py-3 border-y border-pink-100/85 my-2">
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-pink-500/20 text-left relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 text-[35px] opacity-10 pointer-events-none">🦄</div>
                <span className="font-mono text-xl sm:text-2xl font-black text-pink-600 block">+320%</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-pink-500 block font-bold">
                  Unicorn Speed
                </span>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-yellow-500/20 text-left relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 text-[35px] opacity-10 pointer-events-none">☁️</div>
                <span className="font-mono text-xl sm:text-2xl font-black text-yellow-600 block">8 Min</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-yellow-650 block font-bold">
                  Cloud Deploys
                </span>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-sm rounded-xl border-2 border-sky-500/20 text-left relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 text-[35px] opacity-10 pointer-events-none">🌈</div>
                <span className="font-mono text-xl sm:text-2xl font-black text-sky-500 block">-72%</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-sky-500 block font-bold">
                  Silo Blockages
                </span>
              </div>
            </div>

            {/* CTA Interaction */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#scheduler"
                className="flex items-center justify-center gap-2 font-sans font-bold uppercase tracking-wider bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-600 hover:opacity-95 text-white shadow-xl shadow-pink-500/15 px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Backlog Audit 🌈
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#assessor"
                className="flex items-center justify-center gap-2 font-sans font-bold uppercase tracking-wider bg-white hover:bg-pink-50/40 border-2 border-pink-500/30 text-slate-705 px-6 py-4 rounded-xl transition-all duration-300"
              >
                Assess Your Agility ☁️
                <Info className="w-4 h-4 text-pink-500" />
              </a>
            </div>

          </div>

          {/* Hero Right Visual Column - Embedded asset overlay */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full relative max-w-md lg:max-w-none">
              
              {/* Flaunty magical glowing background and card border */}
              <div className="relative rainbow-glow-card p-5 overflow-hidden shadow-2xl flex flex-col gap-4">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-pink-100 pb-3 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">🦄</span>
                    <span className="text-sm">🌈</span>
                    <span className="text-sm">☁️</span>
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-pink-600 uppercase font-black">
                    Continuous Delivery Magic
                  </span>
                </div>

                {/* Hero Asset image overlay with elegant text bubble */}
                <div className="relative aspect-video rounded-xl overflow-hidden group border border-pink-500/20 shadow-inner z-10">
                  <img
                    src="/src/assets/images/magic_unicorn_agile_1779727888073.png"
                    alt="Whimsical cyber agile unicorn leaping over digital rainbow cloud"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-905/60 via-pink-900/20 to-transparent flex items-end p-4">
                    <p className="font-sans text-[11px] text-slate-900 leading-normal font-medium bg-white/95 backdrop-blur-md px-3 py-2 rounded-lg border border-pink-500/30 shadow-lg">
                      🦄 <strong className="text-pink-600">Jaro Sidor Consulting</strong> injects beautiful whimsical frameworks to maximize sprint flow and engineering happiness!
                    </p>
                  </div>
                </div>

                {/* Fun Live Ticker */}
                <div className="flex flex-col gap-2 relative z-10">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-705 font-semibold">Active Coach Status:</span>
                    <span className="text-pink-600 font-extrabold flex items-center gap-1.5 animate-pulse">
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-500 inline-block animate-ping" />
                      Sprinkling Fairy Dust
                    </span>
                  </div>
                  <div className="p-3 bg-pink-50/50 rounded-xl border border-pink-500/20 font-sans text-xs flex items-start gap-2 text-slate-700 shadow-inner">
                    <Flame className="w-4 h-4 text-pink-500 shrink-0 mt-0.5 animate-bounce" />
                    <div>
                      <strong className="text-pink-600">Specialist Focus:</strong> Continuous backlog streamlining, automated epic alignment, and leadership behavior transformation powered by unicorns.
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Absolute Card overlap */}
              <div className="absolute -bottom-6 -right-4 bg-white border-2 border-pink-500/30 shadow-2xl rounded-2xl p-3.5 flex items-center gap-3 hidden sm:flex max-w-[200px] hover:border-pink-500/80 transition-all cursor-pointer animate-float-right relative z-20">
                <div className="p-2 bg-pink-50 text-pink-500 rounded-lg shrink-0">
                  <Zap className="w-5 h-5 fill-pink-500/20" />
                </div>
                <div>
                  <span className="font-mono text-xs font-black text-slate-800 block">Jira Bottlenecks</span>
                  <span className="font-sans text-[10px] text-pink-500 font-extrabold uppercase block">0 Pending 🦄</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* AGILE SOLUTIONS SECTION */}
      <section id="services" className="py-24 px-6 md:px-8 bg-transparent border-b border-pink-100 relative overflow-hidden">
        
        {/* Floating clouds & neon rainbows in background */}
        <div className="absolute top-8 left-1/4 text-white/10 text-[110px] select-none pointer-events-none animate-float-left">☁️</div>
        <div className="absolute bottom-12 right-12 text-white/10 text-[80px] select-none pointer-events-none animate-float-right">☁️</div>
        <div className="absolute top-1/2 right-10 text-pink-500/10 text-5xl select-none pointer-events-none animate-unicorn">🦄</div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-pink-500 uppercase font-extrabold flex items-center justify-center gap-2">
              <span>🌈</span> Advisory Cloud Matrix <span>☁️</span>
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-slate-900">
              Slinging <span className="text-rainbow-glow">Fairy Dust Delivery Solutions</span>
            </h2>
            <p className="font-sans text-slate-705 text-sm sm:text-base leading-relaxed">
              We replace boring enterprise jargon and corporate cargo cults with magical delivery models, rapid automated pipelines, and happy unicorn squad engineering setups!
            </p>
          </div>

          {/* Interactive Layout Builder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left selector menu */}
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {SERVICES.map((serv) => {
                const isActive = selectedServiceId === serv.id;
                return (
                  <button
                    key={serv.id}
                    onClick={() => setSelectedServiceId(serv.id)}
                    className={`p-4 rounded-xl text-left font-sans transition-all duration-300 w-full border flex items-center gap-4 cursor-pointer relative ${
                      isActive 
                        ? 'bg-gradient-to-r from-pink-500/10 via-white to-pink-500/5 border-pink-500/40 shadow-lg shadow-pink-500/10 font-bold' 
                        : 'bg-white border-pink-100/80 hover:border-pink-300 hover:bg-pink-50/20 text-slate-700'
                    }`}
                  >
                    {/* Active vertical glow */}
                    {isActive && (
                      <span className="absolute left-0 top-1/4 bottom-1/4 w-[3.5px] bg-gradient-to-b from-pink-500 to-indigo-400 rounded-full animate-pulse" />
                    )}
                    
                    <div className={`p-2.5 rounded-lg shrink-0 transition-all ${
                      isActive ? 'bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-md scale-110 animate-unicorn' : 'bg-pink-50 text-pink-500'
                    }`}>
                      {getIcon(serv.icon)}
                    </div>
                    
                    <div>
                      <span className={`font-semibold text-[10px] uppercase tracking-widest block mb-0.5 ${isActive ? 'text-pink-600 font-extrabold' : 'text-slate-500'}`}>
                        {serv.category}
                      </span>
                      <span className="font-bold text-sm text-slate-800 block group-hover:text-pink-600 transition-colors">
                        {serv.title} {isActive && '✨'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right detailed showcase pane (FUNNY CLOUD FORMAT) */}
            <div className="lg:col-span-8 cloud-shape-container p-6 md:p-8 flex flex-col justify-between gap-6 relative overflow-visible min-h-[460px] animate-fade-in text-slate-800" key={selectedServiceId}>
              
              {/* Cloud Bubble Overlays to give it a hilarious 3D cartoon cloud shape outline! */}
              <div className="cloud-bubble-left animate-float-left pointer-events-none hidden md:block" />
              <div className="cloud-bubble-right animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '0.6s' }} />
              <div className="cloud-bubble-bottom-left animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '1.2s' }} />
              <div className="cloud-bubble-bottom-right animate-float-left pointer-events-none hidden md:block" style={{ animationDelay: '1.8s' }} />

              {/* Absolute decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full blur-2xl relative z-10" />

              {/* Service details */}
              {(() => {
                const s = SERVICES.find(serv => serv.id === selectedServiceId) || SERVICES[0];
                return (
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2 text-left">
                        <span className="font-sans font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-600 to-indigo-600">
                          {s.title} 🌈
                        </span>
                        <span className="font-mono text-xs tracking-wider text-pink-500 uppercase font-black animate-pulse">
                          🦄 Magic Focus: {s.category}
                        </span>
                      </div>

                      <p className="font-sans text-slate-700 text-sm leading-relaxed border-b border-pink-100 pb-5 text-left">
                        {s.detailedDescription}
                      </p>

                      <div className="text-left">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-pink-500 font-extrabold block mb-3">
                          ✨ Deliverables:
                        </span>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                          {s.deliverables.map((del, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs font-sans text-slate-705 bg-pink-50/20 p-3 rounded-xl border border-pink-200 shadow-sm">
                              <span className="shrink-0 mt-0.5 select-none text-md">🦄</span>
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-4 bg-pink-50/40 border-2 border-pink-200 rounded-2xl flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3 text-left">
                        <span className="text-xl animate-bounce">🌈</span>
                        <div>
                          <span className="font-mono text-[10px] uppercase text-pink-500 block font-bold leading-tight">
                            Key Performance Benchmark
                          </span>
                          <span className="font-sans text-sm font-black text-slate-800">
                            {s.metrics}
                          </span>
                        </div>
                      </div>
                      <a 
                        href="#scheduler" 
                        onClick={() => setFocusArea(s.title)}
                        className="flex items-center gap-1.5 font-sans text-xs font-black uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-indigo-600 hover:opacity-95 py-2.5 px-4 rounded-xl transition-all shrink-0 cursor-pointer shadow-lg shadow-pink-500/20"
                      >
                        Request This Cloud Audit ✨
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

      {/* AI SPEED BUILDER SECTION */}
      <section id="ai-speed-builder" className="py-24 px-6 md:px-8 bg-transparent border-b border-pink-100 relative overflow-hidden">
        
        {/* Whimsical clouds and stars in the background */}
        <div className="absolute top-16 right-1/4 text-white/10 text-[90px] select-none pointer-events-none animate-float-right">☁️</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-[120px] select-none pointer-events-none animate-float-left">☁️</div>
        <div className="absolute top-1/2 left-4 text-pink-500/10 text-6xl select-none pointer-events-none animate-unicorn">🦄</div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Headline */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.22em] text-pink-500 uppercase font-extrabold flex items-center justify-center gap-2">
              <span>🦄</span> Magical Prototype Lab <span>🌈</span>
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-slate-900 leading-[1.2]">
              Jaro's <span className="text-rainbow-glow">7-Day Cloud Prototype Laboratory</span>
            </h2>
            <p className="font-sans text-slate-705 text-sm sm:text-base leading-relaxed">
              Don’t let boring consultants lock you in meetings for months! Choose an AI concept to see how I spray unicorn dust, deploy rapid cloud setups, and build functional MVPs with stunning UI in days!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT INPUT PANEL: CONFIGURATION */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="rainbow-glow-card p-6 shadow-xl relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-2xl pointer-events-none" />
                <h3 className="font-sans font-black text-lg text-purple-950 mb-4 flex items-center gap-2 relative z-10">
                  <span className="text-xl animate-unicorn inline-block">🦄</span>
                  Configure Agile Power-ups
                </h3>

                {/* Concept Ticker Buttons */}
                <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-pink-600 block mb-2.5">
                  1. Select a Product Concept
                </span>
                <div className="flex flex-col gap-2.5 mb-6">
                  {/* Option Skincare */}
                  <button
                    onClick={() => {
                      setAiIdeaType('skincare');
                      setShowLivePrototype(false);
                    }}
                    className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 group relative cursor-pointer ${
                      aiIdeaType === 'skincare'
                        ? 'bg-cyan-50 border-cyan-300 text-cyan-950 shadow-[0_4px_12px_rgba(6,182,212,0.1)]'
                        : 'bg-white border-pink-105 hover:border-pink-300 text-slate-700 shadow-sm'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 mt-0.5 text-cyan-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-sans font-black text-sm text-slate-800 transition-colors">
                          AI Skincare Guidance App
                        </span>
                        <span className="font-mono text-[9px] uppercase font-semibold text-cyan-600 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-200">
                          Vision LLM
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-snug truncate">
                        Glowmind MVP style. Scans cheeks & suggests customized routines with metric monitoring.
                      </p>
                    </div>
                  </button>

                  {/* Option Dermalabel */}
                  <button
                    onClick={() => {
                      setAiIdeaType('dermalabel');
                      setShowLivePrototype(false);
                    }}
                    className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 group relative cursor-pointer ${
                      aiIdeaType === 'dermalabel'
                        ? 'bg-pink-50 border-pink-300 text-pink-950 shadow-[0_4px_12px_rgba(236,72,153,0.1)]'
                        : 'bg-white border-pink-105 hover:border-pink-300 text-slate-700 shadow-sm'
                    }`}
                  >
                    <Activity className="w-5 h-5 mt-0.5 text-pink-500 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-sans font-black text-sm text-slate-800 transition-colors">
                          Dermalabel Labeler
                        </span>
                        <span className="font-mono text-[9px] uppercase font-semibold text-pink-600 bg-pink-50 px-1.5 py-0.5 rounded border border-pink-200">
                          MLOps
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-snug truncate">
                        Streamlit feedback dashboard to automatically annotate clinical slides.
                      </p>
                    </div>
                  </button>

                  {/* Option RAG Document Redliner */}
                  <button
                    onClick={() => {
                      setAiIdeaType('document');
                      setShowLivePrototype(false);
                    }}
                    className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 group relative cursor-pointer ${
                      aiIdeaType === 'document'
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-950 shadow-[0_4px_12px_rgba(16,185,129,0.1)]'
                        : 'bg-white border-pink-105 hover:border-pink-300 text-slate-700 shadow-sm'
                    }`}
                  >
                    <FileText className="w-5 h-5 mt-0.5 text-emerald-600 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-sans font-black text-sm text-slate-800 transition-colors">
                          Legal Document Redliner
                        </span>
                        <span className="font-mono text-[9px] uppercase font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                          RAG & JSON
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-snug truncate">
                        Instantly flags high-risk contract clauses and rewrites them using target metrics.
                      </p>
                    </div>
                  </button>

                  {/* Option Custom Ideas */}
                  <div className={`p-3.5 rounded-xl border transition-all flex flex-col gap-2.5 ${
                    aiIdeaType === 'custom'
                      ? 'bg-purple-50 border-purple-305 text-purple-950 shadow-[0_4px_12px_rgba(147,51,234,0.1)]'
                      : 'bg-white border-pink-105 hover:border-pink-300 text-slate-700 shadow-sm'
                  }`}>
                    <button
                      onClick={() => {
                        setAiIdeaType('custom');
                        setShowLivePrototype(false);
                      }}
                      className="text-left flex items-start gap-3 w-full group cursor-pointer"
                    >
                      <Sparkles className="w-5 h-5 mt-0.5 text-purple-500 shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-sans font-black text-sm text-slate-800 transition-colors">
                            Custom Custom AI Idea
                          </span>
                          <span className="font-mono text-[9px] uppercase font-semibold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded border border-purple-200">
                            Napkin Idea
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-snug">
                          Type any custom software or automated assistant idea you want built.
                        </p>
                      </div>
                    </button>

                    {aiIdeaType === 'custom' && (
                      <div className="mt-2.5 flex items-center gap-2">
                        <input
                          type="text"
                          value={customAiIdea}
                          onChange={(e) => setCustomAiIdea(e.target.value)}
                          placeholder="e.g. AI-powered real estate inspector..."
                          className="bg-white border border-pink-200 focus:border-pink-400 text-slate-800 outline-none rounded-lg p-2.5 text-xs font-sans flex-1 shadow-inner"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Sub-Technical Stack Configurations */}
                <div className="grid grid-cols-2 gap-4 mt-4 border-t border-pink-100 pt-5">
                  <div>
                    <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-pink-600 block mb-1.5">
                      Model Choice
                    </label>
                    <select
                      value={aiModelType}
                      onChange={(e: any) => setAiModelType(e.target.value)}
                      className="bg-white border border-pink-200 text-slate-800 px-3 py-2 rounded-lg text-xs font-sans w-full cursor-pointer outline-none focus:border-pink-300 shadow-sm"
                    >
                      <option value="flash">Gemini 2.5 Flash (85ms / Low Cost)</option>
                      <option value="pro">Gemini 2.5 Pro (Ultra reasoning)</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] uppercase font-bold tracking-widest text-pink-600 block mb-1.5">
                      Fast Track Stack
                    </label>
                    <select
                      value={aiTechStack}
                      onChange={(e: any) => setAiTechStack(e.target.value)}
                      className="bg-white border border-pink-200 text-slate-800 px-3 py-2 rounded-lg text-xs font-sans w-full cursor-pointer outline-none focus:border-pink-300 shadow-sm"
                    >
                      <option value="streamlit">Streamlit Dashboard (Napkin to Demo)</option>
                      <option value="react">React Single Page App (Client Ready)</option>
                    </select>
                  </div>
                </div>

                {/* Simulation Trigger Action Button */}
                <button
                  disabled={isSimulating}
                  onClick={startAiSimulation}
                  className="w-full mt-6 bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-600 hover:opacity-95 disabled:from-pink-200 disabled:to-pink-300 disabled:text-pink-400 active:scale-[0.98] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-pink-500/10 border border-pink-300/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin text-white" />
                      SIMULATING DAY {simulationStep} / 7...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 text-white stroke-[2.5]" />
                      Simulate Jaro's 7-Day Sprint ⚡
                    </>
                  )}
                </button>
              </div>

              {/* Delivery Stats widget */}
              <div className="bg-white/90 border border-pink-200 rounded-xl p-4 flex items-center justify-between text-left shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-pink-50 text-pink-500 border border-pink-100 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-sans font-bold text-sm text-slate-800 block">
                      Guaranteed Delivery Ops
                    </span>
                    <span className="font-mono text-[10px] uppercase text-slate-500 block">
                       Napkin to Shipped URL in 7 Days
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono text-xl font-bold text-pink-500 block">
                    168 hrs
                  </span>
                  <span className="font-mono text-[9px] text-slate-500 block">
                    Max Slicing cycle
                  </span>
                </div>
              </div>

            </div>

            {/* RIGHT PANEL: DYNAMIC SPRINT TIMELINE & LIVE PREVIEW CONTAINER */}
            <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-6">

              {/* Simulator Header / Status Line */}
              <div className="bg-white/80 border border-pink-100 rounded-2xl p-6.5 min-h-[460px] flex flex-col relative overflow-hidden shadow-xl">
                
                {/* Visual grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* INITIAL WELCOME SCREEN */}
                {!isSimulating && !showLivePrototype && (
                  <div className="m-auto text-center max-w-sm flex flex-col gap-4 py-8 relative z-10">
                    <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-500 border border-pink-100 mx-auto shadow-sm">
                      <Terminal className="w-7 h-7 text-pink-500 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="font-sans font-black text-slate-850 text-md">
                        Lab Environment Offline
                      </h4>
                      <p className="font-sans text-slate-650 text-xs leading-relaxed mt-1.5">
                        Select an AI solution on the left and trigger the simulation. You will observe Jaro’s structural methodology of fast building, safety engineering, and immediate validation.
                      </p>
                    </div>
                  </div>
                )}

                {/* SIMULATING IN SPRINT (ACTIVE SYSTEM STATUS PROGRESS) */}
                {isSimulating && (
                  <div className="flex-1 flex flex-col md:flex-row gap-6 relative z-10 text-left">
                    
                    {/* PROGRESS STEPS BAR (LEFT) */}
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex-1 flex flex-col gap-2.5">
                        
                        {/* Day 1 */}
                        <div className={`p-3 rounded-lg border transition-all flex items-start gap-2.5 ${
                          simulationStep === 1 
                            ? 'bg-pink-100/50 border-pink-300' 
                            : simulationStep > 1 ? 'bg-white border-pink-200/60 opacity-60 shadow-xs' : 'bg-pink-50/10 border-pink-100/20 opacity-30'
                        }`}>
                          <span className={`font-mono text-xs px-1.5 py-0.5 rounded font-black shrink-0 ${
                            simulationStep >= 1 ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-400'
                          }`}>D01</span>
                          <div>
                            <span className="font-sans font-black text-xs text-slate-808 text-slate-800 block leading-tight">Sprint Grooming & Backlog Slicing</span>
                            <span className="font-mono text-[9px] text-slate-550 leading-tight block mt-0.5">Map core user stories. Draft strict JSON scheme structure.</span>
                          </div>
                          {simulationStep > 1 && <Check className="w-4 h-4 text-pink-500 ml-auto shrink-0" />}
                        </div>

                        {/* Day 2 */}
                        <div className={`p-3 rounded-lg border transition-all flex items-start gap-2.5 ${
                          simulationStep === 2 
                            ? 'bg-pink-100/50 border-pink-300 animate-pulse' 
                            : simulationStep > 2 ? 'bg-white border-pink-200/60 opacity-60 shadow-xs' : 'bg-pink-50/10 border-pink-100/20 opacity-30'
                        }`}>
                          <span className={`font-mono text-xs px-1.5 py-0.5 rounded font-black shrink-0 ${
                            simulationStep >= 2 ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-400'
                          }`}>D02</span>
                          <div>
                            <span className="font-sans font-black text-xs text-slate-808 text-slate-800 block leading-tight">UI Scaffold & State Assembly</span>
                            <span className="font-mono text-[9px] text-slate-550 leading-tight block mt-0.5">Mount React/Streamlit app structure with layout anchors.</span>
                          </div>
                          {simulationStep > 2 && <Check className="w-4 h-4 text-pink-500 ml-auto shrink-0" />}
                        </div>

                        {/* Day 3 */}
                        <div className={`p-3 rounded-lg border transition-all flex items-start gap-2.5 ${
                          simulationStep === 3 
                            ? 'bg-pink-100/50 border-pink-300 animate-pulse' 
                            : simulationStep > 3 ? 'bg-white border-pink-200/60 opacity-60 shadow-xs' : 'bg-pink-50/10 border-pink-100/20 opacity-30'
                        }`}>
                          <span className={`font-mono text-xs px-1.5 py-0.5 rounded font-black shrink-0 ${
                            simulationStep >= 3 ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-400'
                          }`}>D03</span>
                          <div>
                            <span className="font-sans font-black text-xs text-slate-808 text-slate-800 block leading-tight">LLM Integration & Prompt Tuning</span>
                            <span className="font-mono text-[9px] text-slate-550 leading-tight block mt-0.5">Connect SDK to model with customized API proxies.</span>
                          </div>
                          {simulationStep > 3 && <Check className="w-4 h-4 text-pink-500 ml-auto shrink-0" />}
                        </div>

                        {/* Day 4 */}
                        <div className={`p-3 rounded-lg border transition-all flex items-start gap-2.5 ${
                          simulationStep === 4 
                            ? 'bg-pink-100/50 border-pink-300 animate-pulse' 
                            : simulationStep > 4 ? 'bg-white border-pink-200/60 opacity-60 shadow-xs' : 'bg-pink-50/10 border-pink-100/20 opacity-30'
                        }`}>
                          <span className={`font-mono text-xs px-1.5 py-0.5 rounded font-black shrink-0 ${
                            simulationStep >= 4 ? 'bg-pink-500 text-white' : 'bg-pink-100 text-pink-400'
                          }`}>D04</span>
                          <div>
                            <span className="font-sans font-black text-xs text-slate-808 text-slate-800 block leading-tight">MLOps Guardrails & Token Tuning</span>
                            <span className="font-mono text-[9px] text-slate-550 leading-tight block mt-0.5">Configure Zod schemas to secure strict text outputs.</span>
                          </div>
                          {simulationStep > 4 && <Check className="w-4 h-4 text-pink-500 ml-auto shrink-0" />}
                        </div>

                      </div>
                    </div>

                    {/* PROGRESS BAR DETAILS & METRICS LOG (RIGHT IN SPLIT) */}
                    <div className="flex-1 flex flex-col justify-between bg-white/95 border border-pink-200 p-4 rounded-xl min-h-[300px] shadow-sm">
                      <div>
                        <span className="font-mono text-[9px] uppercase font-bold text-pink-505 text-pink-550 tracking-wider block">
                          Simulation Progress Console
                        </span>
                        
                        <div className="flex items-center gap-2 mt-2">
                          <Terminal className="w-4 h-4 text-pink-500 shrink-0 animate-pulse" />
                          <span className="font-mono text-[11px] text-slate-800 font-black">SYSTEM STATUS: BUILDING</span>
                        </div>

                        <div className="w-full bg-pink-50 h-2.5 rounded-full mt-4 overflow-hidden border border-pink-100">
                          <div 
                            className="bg-pink-500 h-full rounded-full transition-all duration-300" 
                            style={{ width: `${simulationProgress}%` }}
                          />
                        </div>

                        {/* Staggered simulated logs based on active step */}
                        <div className="font-mono text-[10px] text-slate-600 flex flex-col gap-1.5 mt-5 leading-relaxed">
                          <span className="text-slate-400">Initializing Agile container sandbox...</span>
                          {simulationStep >= 1 && <span className="text-pink-600 font-black">&gt; story_slicing --concept={aiIdeaType} --model={aiModelType}</span>}
                          {simulationStep >= 2 && <span className="text-pink-600 font-black">&gt; git_commit --message="Scaffold structural UI controls"</span>}
                          {simulationStep >= 3 && <span className="text-pink-600 font-black">&gt; model_initialize --sdk=gemini --temperature=0.15</span>}
                          {simulationStep >= 4 && <span className="text-pink-600 font-black">&gt; schema_validation_test --schema=strict_json... SUCCESS</span>}
                          {simulationStep >= 5 && <span className="text-slate-400">Preparing analytics tables and telemetry feedback...</span>}
                          {simulationStep >= 6 && <span className="text-pink-600 font-black">&gt; push_deploy --platform=cloud_run --ingress=port_3000 --proxy=active</span>}
                        </div>
                      </div>

                      {/* Speed Metrics summary */}
                      <div className="border-t border-pink-100 pt-3 mt-4 flex justify-between items-center text-xs">
                        <span className="font-mono text-[9px] text-slate-400 block animate-pulse">DELIVERY VELOCITY</span>
                        <span className="font-mono text-pink-600 font-bold tracking-widest block uppercase text-[10px] bg-pink-50 px-2 py-0.5 rounded border border-pink-200">
                          +112% Speed Offset
                        </span>
                      </div>

                    </div>

                  </div>
                )}

                {/* COMPPILED RESULT: USER INTERACTIVE SANDBOX */}
                {showLivePrototype && (
                  <div className="flex-1 flex flex-col relative z-20 text-left">
                    
                    {/* Device Header Bar */}
                    <div className="flex items-center justify-between border-b border-pink-100 pb-3 mb-4.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-3 h-3 rounded-full bg-rose-450 bg-rose-400 block" />
                        <span className="w-3 h-3 rounded-full bg-yellow-450 bg-yellow-400 block" />
                        <span className="w-3 h-3 rounded-full bg-green-450 bg-green-400 block" />
                      </div>
                      <div className="bg-pink-50/60 border border-pink-100 rounded-lg px-4 py-1 text-[10px] font-mono text-pink-705 text-pink-700 flex items-center gap-2 max-w-sm truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 block animate-ping" />
                        https://{aiIdeaType}-val-mvp.jaro-fast.run/
                      </div>
                      <span className="font-mono text-[10px] font-bold text-pink-600 bg-pink-100/60 px-2 py-0.5 rounded border border-pink-200">
                        {aiTechStack === 'streamlit' ? 'STREAMLIT' : 'REACT SPA'}
                      </span>
                    </div>

                    {/* LIVE INTERACTIVE BODY DYNAMIC CASES */}
                    <div className="flex-1 bg-white/70 backdrop-blur-md border border-pink-200 rounded-xl p-4 sm:p-5 relative min-h-[340px] flex flex-col shadow-sm">
                      
                      {/* CASE A: SKINCARE GUIDANCE APP */}
                      {aiIdeaType === 'skincare' && (
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-pink-100 pb-3">
                            <div className="flex items-center gap-2">
                              <Smartphone className="w-5 h-5 text-cyan-500 shrink-0" />
                              <span className="font-sans font-bold text-sm text-slate-800">Glowmind AI Consultation</span>
                            </div>
                            <span className="font-mono text-[9px] uppercase bg-cyan-50 border border-cyan-200 text-cyan-600 px-2 py-0.5 rounded block">
                              Active MVP v1.02
                            </span>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Face Selector buttons */}
                            <div className="bg-pink-50/50 border border-pink-100 rounded-xl p-3.5 flex flex-col gap-3">
                              <span className="font-mono text-[9px] uppercase font-bold text-pink-600 tracking-wider">
                                Choose Simulated Photo Target
                              </span>
                              
                              <div className="flex flex-col gap-2">
                                <button
                                  onClick={() => {
                                    setSkincareSample('normal');
                                    setSkincareAnalyzing(true);
                                    setSkincareResult(null);
                                    setTimeout(() => {
                                      setSkincareAnalyzing(false);
                                      setSkincareResult("Balanced lipid index. Mild moisture loss around lower cheek region. We suggest incorporating natural ceramides.");
                                    }, 800);
                                  }}
                                  className={`text-left p-2 rounded-lg text-xs font-semibold font-sans border transition-all flex items-center justify-between cursor-pointer ${
                                    skincareSample === 'normal' ? 'bg-cyan-500 text-white shadow-md border-transparent' : 'bg-white border-pink-100 text-slate-705 hover:border-pink-300 shadow-xs'
                                  }`}
                                >
                                  <span>Cheek Zone (Normal Skin)</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  onClick={() => {
                                    setSkincareSample('dry');
                                    setSkincareAnalyzing(true);
                                    setSkincareResult(null);
                                    setTimeout(() => {
                                      setSkincareAnalyzing(false);
                                      setSkincareResult("Severely dehydrated epidermal barriers detected. Avoid active chemical peeling. Apply rich cream layer with glycerin PM.");
                                    }, 800);
                                  }}
                                  className={`text-left p-2 rounded-lg text-xs font-semibold font-sans border transition-all flex items-center justify-between cursor-pointer ${
                                    skincareSample === 'dry' ? 'bg-cyan-500 text-white shadow-md border-transparent' : 'bg-white border-pink-100 text-slate-705 hover:border-pink-300 shadow-xs'
                                  }`}
                                >
                                  <span>T-Zone Area (Dry / Flaky patch)</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>

                                <button
                                  onClick={() => {
                                    setSkincareSample('acne');
                                    setSkincareAnalyzing(true);
                                    setSkincareResult(null);
                                    setTimeout(() => {
                                      setSkincareAnalyzing(false);
                                      setSkincareResult("Active follicular congestion. Light non-comedogenic salicylic acid wash recommended. Restrict heavy oil formulas immediately.");
                                    }, 800);
                                  }}
                                  className={`text-left p-2 rounded-lg text-xs font-semibold font-sans border transition-all flex items-center justify-between cursor-pointer ${
                                    skincareSample === 'acne' ? 'bg-cyan-500 text-white shadow-md border-transparent' : 'bg-white border-pink-100 text-slate-705 hover:border-pink-300 shadow-xs'
                                  }`}
                                >
                                  <span>Forehead Scan (Congested pores)</span>
                                  <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>

                            {/* Live Result Output Console */}
                            <div className="bg-white border border-pink-200 rounded-xl p-3.5 flex flex-col justify-between shadow-xs">
                              <div>
                                <span className="font-mono text-[9px] uppercase font-bold text-pink-505 text-pink-600 block mb-2">
                                  Structured AI Response
                                </span>
                                
                                {skincareAnalyzing && (
                                  <div className="flex flex-col gap-2 items-center justify-center py-6 text-xs text-cyan-500 font-mono">
                                    <RefreshCw className="w-5 h-5 animate-spin" />
                                    <span>Vision token analysis...</span>
                                  </div>
                                )}

                                {!skincareSample && !skincareAnalyzing && (
                                  <p className="font-sans text-xs text-slate-500 block py-6 text-center">
                                    Click flat zone to review the instant diagnosis.
                                  </p>
                                )}

                                {skincareResult && !skincareAnalyzing && (
                                  <div className="font-sans text-xs text-slate-805 text-slate-800 space-y-2 mt-1">
                                    <p className="leading-relaxed bg-pink-50/50 p-2.5 rounded border border-pink-100">{skincareResult}</p>
                                    <div className="text-[10px] text-slate-550 flex items-center gap-1.5 font-mono pt-1">
                                      <Zap className="w-3.5 h-3.5 text-cyan-505 text-cyan-500" />
                                      <span>Execution speed: 104ms</span>
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* A/B Metric persistence */}
                              <div className="flex items-center justify-between border-t border-pink-100 pt-3 mt-3 text-xs">
                                <span className="text-[10px] text-slate-500 font-sans font-bold">
                                  A/B Validation Log Counter:
                                </span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={() => setSkincareVotes(prev => ({ ...prev, up: prev.up + 1 }))}
                                    className="flex items-center gap-1 font-mono text-[10px] bg-cyan-50 text-cyan-700 border border-cyan-200 px-2 py-1 rounded hover:bg-cyan-100 transition-colors cursor-pointer font-bold"
                                  >
                                    👍 {skincareVotes.up}
                                  </button>
                                  <button
                                    onClick={() => setSkincareVotes(prev => ({ ...prev, down: prev.down + 1 }))}
                                    className="flex items-center gap-1 font-mono text-[10px] bg-pink-50 text-pink-700 border border-pink-200 px-2 py-1 rounded hover:bg-pink-100 transition-colors cursor-pointer font-bold"
                                  >
                                    👎 {skincareVotes.down}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* CASE B: DERMALABEL ML WORKFLOW APP */}
                      {aiIdeaType === 'dermalabel' && (
                        <div className="flex-1 flex flex-col gap-3.5">
                          <div className="flex items-center justify-between border-b border-pink-100 pb-3">
                            <div className="flex items-center gap-2">
                              <Activity className="w-5 h-5 text-cyan-500 shrink-0" />
                              <span className="font-sans font-bold text-sm text-slate-800">Dermalabel Annotation Assistant</span>
                            </div>
                            <span className="font-mono text-[9px] uppercase bg-pink-100/50 border border-pink-200 text-pink-600 px-2 py-0.5 rounded block">
                              MLOps stream active
                            </span>
                          </div>

                          <div className="p-3 bg-pink-50/50 border border-pink-100 rounded-lg text-xs leading-relaxed flex items-center justify-between gap-4">
                            <p className="font-sans text-slate-650 text-[11px]">
                              Active Histopathological sample: <strong className="text-slate-800 font-mono text-xs">#SDF-2026</strong>. 
                              The classification model generated three annotation propositions for validation.
                            </p>
                            <span className="font-mono text-[10px] text-slate-700 border border-pink-200 bg-white px-2.5 py-1 rounded whitespace-nowrap">
                              Feedback queue: 3 open
                            </span>
                          </div>

                          <div className="flex flex-col gap-2">
                            {Object.entries(dermalabels).map(([labelName, status]) => (
                              <div 
                                key={labelName}
                                className="bg-white border border-pink-100/70 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                              >
                                <div className="flex items-start gap-2.5">
                                  <div className="p-1.5 bg-pink-50 rounded border border-pink-100">
                                    <Layers className="w-4 h-4 text-pink-500 shrink-0" />
                                  </div>
                                  <div>
                                    <span className="font-sans font-bold text-xs text-slate-850 block">
                                      {labelName}
                                    </span>
                                    <span className="font-mono text-[9px] text-slate-500 block mt-0.5">
                                      Confidence rate: {labelName.includes('Epidermal') ? '98.4%' : labelName.includes('Sebaceous') ? '45%' : '88.1%'}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2 self-end sm:self-auto">
                                  {status === 'pending' ? (
                                    <>
                                      <button
                                        onClick={() => setDermalabels(prev => ({...prev, [labelName]: 'approved'}))}
                                        className="font-sans text-[10px] uppercase font-bold tracking-wider bg-emerald-505 bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md transition-colors cursor-pointer shadow-sm"
                                      >
                                        Approve Label
                                      </button>
                                      <button
                                        onClick={() => setDermalabels(prev => ({...prev, [labelName]: 'rejected'}))}
                                        className="font-sans text-[10px] uppercase font-bold tracking-wider bg-pink-101 bg-pink-100 hover:bg-pink-150 text-pink-700 px-3 py-1.5 rounded-md transition-colors cursor-pointer"
                                      >
                                        Reject
                                      </button>
                                    </>
                                  ) : (
                                    <span className={`font-mono text-[10px] uppercase font-bold px-3 py-1.5 rounded border ${
                                      status === 'approved' 
                                        ? 'bg-emerald-50 border-emerald-205 border-emerald-250 border-emerald-200 text-emerald-700' 
                                        : 'bg-slate-105 border-slate-200 bg-slate-50 text-slate-455 text-slate-500 line-through'
                                    }`}>
                                      {status === 'approved' ? '✓ APPROVED & INDEXED' : '✗ REJECTED'}
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CASE C: LEGAL DOCUMENT RISK REDLINER */}
                      {aiIdeaType === 'document' && (
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-pink-100 pb-3">
                            <div className="flex items-center gap-2">
                              <FileText className="w-5 h-5 text-pink-500 shrink-0" />
                              <span className="font-sans font-bold text-sm text-slate-800">RAG Agreement Redline Console</span>
                            </div>
                            <span className="font-mono text-[9px] uppercase bg-emerald-50 border border-emerald-200 text-emerald-600 px-2 py-0.5 rounded block">
                              Strict JSON schema locked
                            </span>
                          </div>

                          <div className="flex flex-col gap-2.5">
                            {docClauses.map((clause) => (
                              <div 
                                key={clause.id}
                                className="bg-white border border-pink-100/70 rounded-xl p-3 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
                              >
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <span className={`font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 rounded border ${
                                      clause.revised 
                                        ? 'bg-emerald-50 border-emerald-200 text-emerald-700' 
                                        : clause.risk === 'CRITICAL' ? 'bg-rose-50 border-rose-200 text-rose-700' : 'bg-yellow-50 border-yellow-200 text-yellow-700'
                                    }`}>
                                      {clause.revised ? 'RESOLVED SAFE ✅' : `${clause.risk} RISK: ${clause.type}`}
                                    </span>
                                  </div>
                                  <p className={`font-sans text-[11px] leading-relaxed ${
                                    clause.revised ? 'text-slate-550 italic font-mono bg-pink-50/40 p-1.5 rounded border border-pink-100/60' : 'text-slate-800'
                                  }`}>
                                    {clause.text}
                                  </p>
                                </div>

                                <div className="shrink-0 flex items-center self-end md:self-auto">
                                  {!clause.revised ? (
                                    <button
                                      onClick={() => {
                                        setDocClauses(prev => prev.map(c => {
                                          if (c.id === clause.id) {
                                            let redlineText = "";
                                            if (c.type === 'Indemnity') {
                                              redlineText = "The Vendor’s aggregate indemnification liability for third-party IP claims is strictly capped at 2.0x Contract Value.";
                                            } else if (c.type === 'Termination') {
                                              redlineText = "Client reserves the right to terminate for convenience upon providing 30 business days written notice.";
                                            } else {
                                              redlineText = "This Agreement is governed by Delaware business corporation laws.";
                                            }
                                            return { ...c, text: redlineText, revised: true };
                                          }
                                          return c;
                                        }));
                                      }}
                                      className="font-sans text-[10px] uppercase font-extrabold tracking-wider text-white bg-gradient-to-r from-pink-500 to-indigo-600 hover:opacity-95 px-3 py-2 rounded-lg cursor-pointer shadow-sm"
                                    >
                                      Rewrite 🪄
                                    </button>
                                  ) : (
                                    <span className="font-mono text-[9px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                                      SHIPPED TO PLAYBOOK
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* CASE D: CUSTOM AI NAPKIN IDEA SANDBOX */}
                      {aiIdeaType === 'custom' && (
                        <div className="flex-1 flex flex-col gap-4">
                          <div className="flex items-center justify-between border-b border-pink-100 pb-3">
                            <div className="flex items-center gap-2">
                              <Sparkles className="w-5 h-5 text-pink-500 shrink-0" />
                              <span className="font-sans font-bold text-sm text-slate-800">Dynamic AI API Prompt Sandbox</span>
                            </div>
                            <span className="font-mono text-[9px] uppercase bg-pink-100 border border-pink-200 text-pink-600 px-2 py-0.5 rounded block">
                              Custom VM Mode
                            </span>
                          </div>

                          <span className="font-mono text-[10px] uppercase text-emerald-600 block font-bold">
                            SIMULATED PROJECT BACKLOG NAME: "{customAiIdea || 'Jaro Custom Concept'}"
                          </span>

                          <div className="flex flex-col gap-3 flex-1 justify-between">
                            <div className="flex gap-2.5">
                              <input
                                type="text"
                                value={customAiPrompt}
                                onChange={(e) => setCustomAiPrompt(e.target.value)}
                                placeholder="Type a prompt or system constraint test..."
                                className="bg-white border border-pink-200 text-slate-800 p-2.5 text-xs font-sans rounded-xl flex-1 outline-none focus:border-pink-300 shadow-inner"
                              />
                              <button
                                onClick={testCustomPrompt}
                                className="font-sans text-xs uppercase font-extrabold tracking-wider bg-pink-500 hover:bg-pink-600 text-white py-2.5 px-4 rounded-xl shrink-0 cursor-pointer shadow-sm"
                              >
                                Test Prompt Response
                              </button>
                            </div>

                            {/* OUTPUT FRAME */}
                            <div className="bg-white border border-pink-100 rounded-xl p-3.5 min-h-[140px] flex flex-col justify-between shadow-xs">
                              <div className="font-mono text-xs pr-4">
                                {!customPromptResponse ? (
                                  <span className="text-slate-500">
                                    Enter test parameters and click 'Test Prompt Response' above to verify output schemas...
                                  </span>
                                ) : (
                                  <pre className="text-pink-700 text-[11px] bg-pink-50/50 p-2.5 border border-pink-100 rounded-lg whitespace-pre-wrap leading-relaxed max-h-[160px] overflow-y-auto font-mono">
                                    {customPromptResponse}
                                  </pre>
                                )}
                              </div>

                              {customPromptResponse && (
                                <div className="flex items-center justify-between border-t border-pink-100 pt-3.5 mt-2 text-[10px] font-mono text-slate-500">
                                  <div className="flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 text-pink-505 text-pink-500" />
                                    <span>Latency: {customPromptLatency}ms</span>
                                  </div>
                                  <div className="flex items-center gap-1.5/2">
                                    <Database className="w-3.5 h-3.5 text-pink-505 text-pink-500" />
                                    <span>Estimated Call Cost: $0.000015 USD</span>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Reset option button */}
                      <div className="mt-5 border-t border-slate-900 pt-4 flex items-center justify-between text-xs">
                        <span className="text-[11px] font-sans text-slate-400">
                          Secure server-side routing is configured.
                        </span>
                        <button
                          onClick={() => {
                            setShowLivePrototype(false);
                            setCustomPromptResponse(null);
                          }}
                          className="flex items-center gap-1.5 font-mono text-[10px] uppercase text-sky-400 hover:text-sky-350 cursor-pointer"
                        >
                          <RefreshCw className="w-3 h-3" />
                          Back to Sprints Config
                        </button>
                      </div>

                    </div>
                  </div>
                )}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* DYNAMIC QUIZ SECTION */}
      <section id="assessor" className="py-24 px-6 md:px-8 bg-gradient-to-tr from-pink-50 via-purple-50 to-pink-50 border-b border-pink-100 relative">
        <div className="max-w-5xl mx-auto">
          
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-pink-600 uppercase font-black">
              Interactive Diagnostic Engine
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-slate-900">
              Sprinting or Stalled? Assess Your Agility
            </h2>
            <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Take our 2-minute reality assessment to score your team. We identify command-silos and standup anomalies instantly.
            </p>
          </div>

          {/* Interactive Quiz container card (FUNNY CLOUD FORMAT) */}
          <div className="cloud-shape-container p-6 md:p-10 shadow-2xl relative overflow-visible">
            
            {/* Cloud Bubble Overlays to give the assessment deck a physical fluffy cloud shape */}
            <div className="cloud-bubble-left animate-float-left pointer-events-none hidden md:block" />
            <div className="cloud-bubble-right animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '0.8s' }} />
            <div className="cloud-bubble-bottom-left animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '1.4s' }} />
            <div className="cloud-bubble-bottom-right animate-float-left pointer-events-none hidden md:block" style={{ animationDelay: '2.2s' }} />

            {/* Ambient decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-4 text-2xl opacity-40 animate-unicorn pointer-events-none">🦄</div>
            <div className="absolute bottom-6 right-8 text-2xl opacity-40 animate-float-right pointer-events-none">🌈</div>

            {/* QUIZ ACTIVE CASE */}
            {quizScore === null ? (
              <div className="flex flex-col gap-6">
                
                {/* Visual Progress bar */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-600 font-extrabold">
                    <span>PROGRESS: QUESTION {currentQuestionIndex + 1} OF {QUIZ_QUESTIONS.length}</span>
                    <span className="text-pink-600">{Math.round(((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-pink-100 rounded-full overflow-hidden p-[1px] border border-pink-200">
                    <div 
                      className="h-full bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="py-2">
                  <span className="font-mono text-xs font-bold text-pink-650 text-pink-600 uppercase block mb-1">
                    Scenario Checklist
                  </span>
                  <h3 className="font-sans font-black text-lg sm:text-2xl text-slate-850 text-slate-800">
                    {QUIZ_QUESTIONS[currentQuestionIndex].question}
                  </h3>
                </div>

                {/* Options answers */}
                <div className="flex flex-col gap-3.5">
                  {QUIZ_QUESTIONS[currentQuestionIndex].options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleAnswerSelect(opt.points, oIdx)}
                      className="group p-4 bg-white border border-pink-100 hover:border-pink-300 hover:bg-pink-50/50 text-left font-sans text-sm font-bold transition-all duration-300 rounded-xl cursor-pointer flex items-start gap-3 w-full shadow-xs"
                    >
                      <div className="w-5.5 h-5.5 rounded-full border border-pink-200 group-hover:border-pink-500 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 transition-colors group-hover:bg-pink-100 font-black text-pink-600 bg-white shadow-xs">
                        {String.fromCharCode(65 + oIdx)}
                      </div>
                      <span className="text-slate-700 group-hover:text-pink-600 transition-colors">
                        {opt.text}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Footnotes */}
                <div className="text-center font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-2">
                  🛡️ Responses are processed entirely local (zero tracking logs).
                </div>

              </div>
            ) : (
              // REPORT CARD AFTER FINISHED
              <div className="flex flex-col gap-8 animate-fade-in">
                
                {/* Result banner card */}
                <div className="p-6 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-6 bg-white border-pink-200 shadow-md">
                  <div className="flex flex-col gap-2 text-left">
                    <span className="font-mono text-[10px] uppercase text-slate-505 text-slate-500 tracking-wider block font-black leading-tight">
                      Diagnostic Agility Outcome Status
                    </span>
                    <span className="font-sans font-black text-xl sm:text-3xl text-slate-850 text-slate-800 block">
                      Agility Score: {quizScore} / 20
                    </span>
                    <div className={`px-3 py-1.5 mt-2 rounded-lg font-mono text-xs font-bold tracking-wider inline-block w-fit border uppercase ${getRankData(quizScore).theme}`}>
                      🏆 Rank: {getRankData(quizScore).badge}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
                    <button
                      onClick={prefillWithQuizResult}
                      className="flex items-center justify-center gap-2 font-sans text-xs font-bold uppercase tracking-wider bg-pink-500 hover:bg-pink-600 text-white px-5 py-3 rounded-lg transition-colors cursor-pointer w-full shadow-md"
                    >
                      Pre-fill Advisor Session
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={restartQuiz}
                      className="flex items-center justify-center gap-1.5 font-mono text-xs text-slate-500 hover:text-slate-800 transition-colors py-2 cursor-pointer w-full text-center font-bold"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Restart Assessment
                    </button>
                  </div>
                </div>

                {/* Diagnostics details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="p-5 rounded-xl bg-pink-50/50 border border-pink-100 flex flex-col gap-2 shadow-xs">
                    <span className="font-mono text-[10px] uppercase text-pink-600 font-bold block">
                      The Root Issues Identified:
                    </span>
                    <p className="font-sans text-sm text-slate-700 leading-relaxed font-semibold">
                      {getRankData(quizScore).desc}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-pink-50/50 border border-pink-100 flex flex-col gap-2 shadow-xs">
                    <span className="font-mono text-[10px] uppercase text-emerald-600 font-bold block">
                      Advisor Recommendation:
                    </span>
                    <p className="font-sans text-sm text-slate-700 leading-relaxed font-semibold">
                      {getRankData(quizScore).recommendation}
                    </p>
                  </div>
                </div>

                {/* Score break-down mapping */}
                <div className="border-t border-pink-100 pt-6">
                  <button 
                    onClick={() => setShowQuizDetails(!showQuizDetails)}
                    className="flex items-center justify-between font-sans text-xs text-slate-500 hover:text-slate-800 transition-colors font-black uppercase w-full py-2 cursor-pointer"
                  >
                    <span>{showQuizDetails ? "Hide" : "Show"} Detailed Question Breakdown & Advice</span>
                    <span className="text-pink-650 text-pink-600 font-mono text-xs">{showQuizDetails ? "[-]" : "[+]"}</span>
                  </button>

                  {showQuizDetails && (
                    <div className="flex flex-col gap-5 mt-4 text-left animate-fade-in">
                      {QUIZ_QUESTIONS.map((q, idx) => {
                        const answeredOptIdx = quizAnswers[idx] ?? 0;
                        const opt = q.options[answeredOptIdx];
                        return (
                          <div key={q.id} className="p-4 bg-white border border-pink-100 rounded-lg flex flex-col gap-2 shadow-xs">
                            <span className="font-sans text-xs font-bold text-slate-800">
                              Question {q.id}: {q.question}
                            </span>
                            <div className="text-xs font-sans text-slate-600 leading-relaxed pl-3 border-l-2 border-pink-200">
                              <span className="text-slate-800 font-bold font-mono">You Answered: </span>
                              "{opt.text}" <span className="text-pink-605 text-pink-600 font-mono font-bold">({opt.points} pts)</span>
                            </div>
                            <div className="text-xs font-sans text-slate-700 leading-normal pl-3">
                              <span className="font-semibold text-[10px] font-mono uppercase text-pink-600">Coach Advice:</span> {opt.explanation}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* DYNAMIC MEME SECTION */}
      <section id="agile-memes" className="py-24 px-6 md:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 border-b border-pink-100 relative overflow-hidden">
        
        {/* Floating background clouds */}
        <div className="absolute top-6 left-1/3 text-white/40 text-[100px] select-none pointer-events-none animate-float-left">☁️</div>
        <div className="absolute bottom-8 right-16 text-white/40 text-[90px] select-none pointer-events-none animate-float-right">☁️</div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-pink-600 uppercase font-extrabold flex items-center justify-center gap-2 animate-pulse">
              <span>🌈</span> Cloud Rainbow Comedy Hub <span>☁️</span>
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-slate-900">
              The daily struggles of "We Do Agile™"
            </h2>
            <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
              Let's spray unicorn laughter on real enterprise bottlenecks. Explore common cargo cult scenarios and discover our magical, airy solutions!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Meme Column Selector (Left) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-wider text-pink-600 uppercase font-black block mb-1 animate-pulse">
                🌈 SELECT UNICORN CARGO CULT PROFILE:
              </span>
              {AGILE_MEMES.map((meme, idx) => (
                <button
                  key={meme.id}
                  onClick={() => {
                    setSelectedMemeIndex(idx);
                    setRevealedReality(false);
                  }}
                  className={`p-3.5 rounded-xl text-left font-sans transition-all duration-300 border cursor-pointer ${
                    selectedMemeIndex === idx
                      ? 'bg-white border-pink-300 shadow-md'
                      : 'bg-white/60 border-pink-100/70 hover:border-pink-300 hover:bg-white text-slate-700 shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-sans font-black text-sm text-slate-800 block">
                      {meme.title} {selectedMemeIndex === idx && '✨'}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border font-bold ${
                      meme.severity === 'Maximum Facepalm' 
                        ? 'bg-rose-50 border-rose-200 text-rose-700' 
                        : meme.severity === 'Spicy'
                          ? 'bg-yellow-50 border-yellow-200 text-yellow-750 text-yellow-850 text-yellow-700'
                          : 'bg-indigo-50 border-indigo-200 text-indigo-700'
                    }`}>
                      {meme.severity}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-slate-505 text-slate-500 line-clamp-1">
                    {meme.setup}
                  </p>
                </button>
              ))}
            </div>

            {/* Comic Panel Showcase (Right) (FUNNY CLOUD FORMAT) */}
            {(() => {
              const meme = AGILE_MEMES[selectedMemeIndex];
              return (
                <div className="lg:col-span-7 cloud-shape-container overflow-visible shadow-2xl flex flex-col relative" key={selectedMemeIndex}>
                  
                  {/* Cloud bubbles on outline */}
                  <div className="cloud-bubble-left animate-float-left pointer-events-none hidden md:block" />
                  <div className="cloud-bubble-right animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '0.8s' }} />
                  <div className="cloud-bubble-bottom-left animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '0.4s' }} />
                  <div className="cloud-bubble-bottom-right animate-float-left pointer-events-none hidden md:block" style={{ animationDelay: '1.2s' }} />

                  {/* Comic/Panel Header info */}
                  <div className="bg-white/90 rounded-t-2xl px-6 py-4.5 border-b border-pink-100 flex items-center justify-between relative z-10 shadow-xs">
                    <div className="flex items-center gap-2">
                       <span className="text-sm">🦄</span>
                      <span className="font-sans font-black text-xs uppercase tracking-widest text-pink-700">
                        Visualizing Agile Paradox #{selectedMemeIndex + 1}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-pink-600 font-extrabold uppercase">
                      Severity Rating: {meme.severity}
                    </span>
                  </div>

                  {/* Comic Panel Workspace Body */}
                  <div className="p-6 md:p-8 flex flex-col gap-6 bg-white/75 relative z-10 shadow-inner">
                    
                    {/* Setup dialog frame */}
                    <div className="flex flex-col gap-2 text-left relative">
                      <div className="absolute -top-1.5 left-4 font-mono text-[9px] text-pink-600 uppercase font-black tracking-widest bg-white border border-pink-100 px-2.5 py-0.5 rounded-full shadow-xs">
                        1. Scene Setup
                      </div>
                      <div className="p-5 pt-8 rounded-xl bg-pink-50/40 border border-pink-100 font-sans text-sm text-slate-800 leading-relaxed shadow-xs font-semibold">
                        💬 <span className="italic">"{meme.setup}"</span>
                      </div>
                    </div>

                    {/* Punchline dialog frame with comical bubble styling */}
                    <div className="flex flex-col gap-2 text-left relative">
                      <div className="absolute -top-1.5 left-4 font-mono text-[9px] text-indigo-600 uppercase font-black tracking-widest bg-white border border-indigo-100 px-2.5 py-0.5 rounded-full shadow-xs">
                        2. Punchline Reality Paradox
                      </div>
                      <div className="p-5 pt-8 rounded-xl bg-indigo-50/40 border border-indigo-200 font-mono text-xs text-slate-900 leading-relaxed shimmer-gradient relative overflow-hidden font-bold shadow-xs">
                        <span className="font-black text-rose-650 text-rose-600 block mb-1">🚨 CRITICAL FAILURE DETECTED:</span>
                        "{meme.punchline}"
                        
                        {/* Shimmer background line decoration */}
                        <div className="absolute right-0 bottom-0 w-12 h-12 bg-indigo-500/10 blur-xl pointer-events-none" />
                      </div>
                    </div>

                    {/* Action reveal diagnostic section */}
                    {!revealedReality ? (
                      <button
                        onClick={() => setRevealedReality(true)}
                        className="py-4.5 bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-600 hover:opacity-95 text-white font-sans font-black uppercase tracking-wider text-xs rounded-xl transition-all shadow-lg shadow-pink-500/15 cursor-pointer flex items-center justify-center gap-2.5 relative z-10"
                      >
                        <RefreshCw className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '4s' }} />
                        Unveil Magical Agile Diagnosis 🦄
                      </button>
                    ) : (
                      // REVEALED COACH REALITY INSIGHT
                      <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 text-left animate-fade-in flex flex-col gap-2 relative z-10 shadow-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-md">🌈</span>
                          <span className="font-mono text-xs font-black text-emerald-800 uppercase tracking-wider block leading-tight">
                            {meme.realityLabel}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-slate-700 leading-relaxed border-l-2 border-emerald-400 pl-3 font-semibold">
                          {meme.realityText}
                        </p>
                        
                        <div className="mt-2.5 pt-2.5 border-t border-emerald-200 text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center justify-between">
                          <span>Diagnosis complete • Resolved with fairy dust sparks ✨</span>
                          <button 
                            onClick={() => setRevealedReality(false)}
                            className="text-xs text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer font-bold capitalize font-sans non-italic"
                          >
                            Hide Insights
                          </button>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              );
            })()}

          </div>
        </div>
      </section>

      {/* INTERACTIVE FUN: TRANSLATOR & BINGO GRID */}
      <section id="interactive-fun" className="py-24 px-6 md:px-8 bg-gradient-to-tr from-pink-50 via-purple-50 to-pink-50 border-b border-pink-100 relative overflow-hidden">
        
        {/* Whimsical drifting background clouds and rainbows for real sandbox vibe */}
        <div className="absolute top-10 left-10 text-white/40 text-7xl select-none pointer-events-none animate-float-left">☁️</div>
        <div className="absolute top-1/2 -right-12 text-white/30 text-[120px] select-none pointer-events-none animate-float-right">☁️</div>
        <div className="absolute bottom-10 left-12 text-white/40 text-5xl select-none pointer-events-none animate-float-left">🌈</div>
        <div className="absolute top-20 right-1/4 text-pink-500/10 text-6xl select-none pointer-events-none animate-unicorn">🦄</div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-pink-600 uppercase font-extrabold flex items-center justify-center gap-2">
              <span>🌈</span> Whimsical Playground Suite <span>🦄</span>
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-slate-900 flex items-center justify-center gap-3">
              <Cloud className="w-8 h-8 text-pink-500 animate-pulse shrink-0" />
              <span className="text-rainbow-glow">Cloud-Formatted Games & Silo Translators</span>
              <Cloud className="w-8 h-8 text-pink-500 animate-pulse shrink-0" />
            </h2>
            <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
              Play our famous Standup Bingo card built inside a fluffy digital cloud to survive boring meetings, or use our rainbow-wrapped corporate agile translator!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* COLUMN LEFT: AGILE REALITY TRANSLATOR */}
            <div className="lg:col-span-6 bg-white border border-pink-200 p-6 md:p-8 flex flex-col gap-6 shadow-xl rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl" />

              <div className="flex items-center gap-3 border-b border-pink-105 border-pink-100 pb-4">
                <div className="p-2.5 bg-gradient-to-tr from-pink-500 to-yellow-500 rounded-lg text-white font-black text-lg animate-unicorn">
                  🦄
                </div>
                <div className="text-left">
                  <h3 className="font-sans font-black text-lg text-slate-800 flex items-center gap-2">
                    Rainbow Agile Translator 
                  </h3>
                  <p className="font-sans text-xs text-slate-500 font-medium">
                    Input dry corporate buzzwords. Turn them into sparkling magical agile directives!
                  </p>
                </div>
              </div>

              {/* Input Choice Selector Grid */}
              <div className="flex flex-col gap-3 text-left">
                <span className="font-mono text-[10px] text-pink-650 text-pink-600 uppercase font-black tracking-widest block">
                  🌈 SELECT STANDARD STATEMENT TARGETS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TRANSLATION_PAIRS.map((pair, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedTranslationIndex(idx);
                        setCustomTranslatedResult(null); 
                      }}
                      className={`p-3 text-left rounded-lg text-xs leading-normal font-sans tracking-wide transition-all border cursor-pointer h-[80px] line-clamp-2 ${
                        selectedTranslationIndex === idx && !customTranslatedResult
                          ? 'bg-pink-100/50 border-pink-300 text-slate-900 shadow-md font-semibold'
                          : 'bg-white border-pink-100 hover:border-pink-300 text-slate-700 hover:bg-pink-50/50'
                      }`}
                    >
                      🗣️ "{pair.corporate.substring(0, 52)}..."
                    </button>
                  ))}
                </div>
              </div>

              {/* OR CUSTOM INPUT BOX */}
              <form onSubmit={handleCustomTranslate} className="flex flex-col gap-2 text-left pt-2 border-t border-pink-100">
                <span className="font-mono text-[10px] text-slate-500 uppercase font-bold tracking-wider block">
                  OR FEED CUSTOM CORPORATE DEMANDS TO THE UNICORN:
                </span>
                <div className="flex gap-2.5">
                  <input
                    type="text"
                    value={customCorporateText}
                    onChange={(e) => setCustomCorporateText(e.target.value)}
                    placeholder="e.g. 'This needs to be 100% complete by tomorrow night!'"
                    className="flex-1 bg-white border border-pink-200 focus:border-pink-400 rounded-lg px-3.5 py-2 text-xs text-slate-800 outline-none shadow-inner"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-indigo-600 hover:opacity-95 text-white font-sans text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-lg transition-colors cursor-pointer shrink-0 shadow-sm"
                  >
                    Translate 🪄
                  </button>
                </div>
              </form>

              {/* DYNAMIC TRANSLATION RESULT VIEW */}
              <div className="p-4 bg-pink-50/40 border border-pink-200 rounded-xl relative overflow-hidden text-left min-h-[148px] flex flex-col justify-center shadow-inner">
                {isTranslatingAnim ? (
                  <div className="flex flex-col items-center justify-center gap-2 py-4">
                    <RefreshCw className="w-5 h-5 text-pink-500 animate-spin" />
                    <span className="font-mono text-[10px] text-pink-600 uppercase tracking-widest font-black animate-pulse">
                      🦄 Charging Unicorn Translators with Fairy Dust...
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="font-mono text-[10px] uppercase text-pink-600 font-extrabold tracking-widest block mb-1.5 flex items-center gap-1.5 animate-pulse">
                      <span>✨</span> Magical Agile Formula Revealed:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-800 leading-relaxed flex items-start gap-1.5 font-bold mb-3">
                      🦄 {" "}
                      {customTranslatedResult 
                        ? customTranslatedResult.agileText 
                        : TRANSLATION_PAIRS[selectedTranslationIndex].agileText
                      }
                    </p>
                    <span className="font-sans text-[10px] text-slate-500 block border-t border-pink-100 pt-2 italic leading-relaxed">
                      🌈 NOTE: {customTranslatedResult 
                        ? customTranslatedResult.note 
                        : TRANSLATION_PAIRS[selectedTranslationIndex].translationNote
                      }
                    </span>
                  </>
                )}
              </div>

            </div>

            {/* COLUMN RIGHT: DAILY STANDUP MEME BINGO CARD (FUNNY FLUFFY CLOUD FORMAT) */}
            <div className="lg:col-span-6 cloud-shape-container p-6 md:p-8 flex flex-col gap-5 relative shadow-2xl overflow-visible mt-6 lg:mt-0">
              
              {/* Cloud Bubble Overlays to give it a hilarious 3D cartoon cloud shape outline! */}
              <div className="cloud-bubble-left animate-float-left pointer-events-none hidden md:block" />
              <div className="cloud-bubble-right animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '1s' }} />
              <div className="cloud-bubble-bottom-left animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '0.5s' }} />
              <div className="cloud-bubble-bottom-right animate-float-left pointer-events-none hidden md:block" style={{ animationDelay: '1.5s' }} />

              <div className="flex items-center justify-between border-b border-pink-100 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-pink-50 rounded-lg border border-pink-105 border-pink-100">
                    <Cloud className="w-5 h-5 text-pink-500 animate-bounce" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-sans font-black text-lg text-slate-800 flex items-center gap-2">
                      Fuzzy Cloud Bingo ☁️
                    </h3>
                    <p className="font-sans text-xs text-slate-600 font-semibold">
                      Survive corporate calls by checking jargon on a literal magical cloud!
                    </p>
                  </div>
                </div>

                <button
                  onClick={resetBingo}
                  className="font-mono text-[10px] text-pink-600 hover:bg-pink-50 hover:border-pink-400 transition-all uppercase font-bold py-1 px-2 border border-pink-200 rounded bg-white cursor-pointer relative z-20 shadow-sm"
                >
                  🌈 Shuffle
                </button>
              </div>

              {/* BINGO GRID (5X5) */}
              <div className="grid grid-cols-5 gap-2 select-none relative z-10">
                {bingoGrid.map((cell, idx) => {
                  const isCenter = idx === 12;
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleBingoCell(idx)}
                      disabled={isCenter}
                      className={`h-[68px] rounded-lg p-1 text-center font-sans break-words outline-none flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative shadow-xs ${
                        isCenter
                          ? 'bg-pink-100 border border-pink-300 text-pink-700 font-bold text-[9.5px]'
                          : cell.checked
                            ? 'bg-pink-555 bg-pink-500 border border-pink-400 text-white font-extrabold scale-[0.98] text-[9.5px] shadow-sm'
                            : 'bg-white border border-pink-100/80 hover:border-pink-300 text-[9.5px] text-slate-700 font-semibold'
                      }`}
                    >
                      {/* Check icon overlay */}
                      {cell.checked && (
                        <span className="absolute top-1 right-1 text-white">
                          <Check className="w-2.5 h-2.5 font-bold stroke-[3]" />
                        </span>
                      )}
                      <span className="line-clamp-3 overflow-hidden text-center leading-tight">
                        {cell.word}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* BINGO ALERTS & PRIZE UNLOCK */}
              {bingoWin ? (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between gap-4 animate-fade-in text-left shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-emerald-600 shrink-0 animate-bounce" />
                    <div>
                      <span className="font-sans text-xs font-bold text-slate-800 block">
                        Bingo Unlocked ({bingoWinLines} Lines)!
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-emerald-700 block font-bold">
                        Award Code: STANDUP-BINGO-99
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="font-sans text-xs font-black uppercase tracking-wider text-white bg-pink-500 hover:bg-pink-600 py-1.5 px-3 rounded-lg shadow cursor-pointer shadow-md"
                  >
                    Claim Prize
                  </button>
                </div>
              ) : (
                <div className="text-center font-mono text-[10px] text-slate-555 text-slate-505 text-slate-500 uppercase tracking-widest py-1 border-t border-pink-100 mt-1">
                  ⭐ Tip: Squeeze line checks dynamically. Center square is FREE.
                </div>
              )}

              {/* BINGO CERTIFICATE POPUP WINDOW */}
              {showCertificate && (
                <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6 animate-fade-in">
                  <div className="bg-white border border-pink-200 rounded-2xl max-w-md w-full p-6 text-center shadow-2xl relative flex flex-col gap-5">
                    
                    <button 
                      onClick={() => setShowCertificate(false)}
                      className="absolute top-4 right-4 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer border border-pink-100 p-1 rounded-full bg-slate-50 hover:bg-pink-50"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    <div className="mx-auto p-3.5 bg-pink-50 border border-pink-100 text-pink-500 rounded-full w-fit">
                      <Award className="w-8 h-8 text-pink-500 stroke-[1.5]" />
                    </div>

                    <div className="flex flex-col gap-1 text-center">
                      <span className="font-mono text-[10px] tracking-wider text-pink-600 block font-black uppercase">
                        Official Exemption Certificate
                      </span>
                      <h4 className="font-sans font-black text-xl text-slate-850 text-slate-800">
                        Standup Exemption Permit
                      </h4>
                    </div>

                    <p className="font-sans text-xs text-slate-600 leading-relaxed px-2 font-semibold">
                      The holder of this credential has achieved high-fidelity **Agile Standup Bingo** patterns. They are officially certified as a **"Certified Agile Buzzword Native"** and are granted a 1-day pass to skip tedious micro-management status calls.
                    </p>

                    <div className="border border-pink-100 p-3 rounded-lg bg-pink-50/30 font-mono text-[10.5px] text-slate-500 text-left shadow-inner">
                      <div className="flex justify-between">
                        <span>HOLDER STATUS:</span>
                        <span className="text-emerald-700 font-black">VERIFIED EXEMPT</span>
                      </div>
                      <div className="flex justify-between border-t border-pink-100 mt-1.5 pt-1.5">
                        <span>DIGNITARY SIGNATURE:</span>
                        <span className="text-slate-800 font-bold">Marcus Vance (Managing Principal)</span>
                      </div>
                    </div>

                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          alert("Standup Exemption downloaded! Show this to your Scrummaster instantly.");
                          setShowCertificate(false);
                          resetBingo();
                        }}
                        className="py-2.5 px-5 bg-pink-500 hover:bg-pink-600 text-white font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer shadow-md"
                      >
                        Download Exemption PDF
                      </button>
                    </div>

                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* CORE SUCCESS SECRETS - CASE STUDIES (CLOUD & RAINBOW INSPIRED) */}
      <section id="case-studies" className="py-24 px-6 md:px-8 bg-gradient-to-tr from-indigo-50 via-pink-50 to-purple-50 border-b border-pink-100 relative overflow-hidden">
        
        {/* Background Drift icons */}
        <div className="absolute top-12 left-10 text-white/40 text-[90px] select-none pointer-events-none animate-float-left">☁️</div>
        <div className="absolute bottom-16 right-1/4 text-white/40 text-[110px] select-none pointer-events-none animate-float-right">☁️</div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-pink-600 uppercase font-extrabold flex items-center justify-center gap-2">
              <span>🌈</span> Rainbow Delivery Case Studies <span>☁️</span>
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-slate-900">
              Legendary Journeys Over the Cargo Cult Horizon 🦄
            </h2>
            <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
              We replaced boring corporate checklists with custom cloud delivery systems that got high-impact projects sailed safely through the sky!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Case Selector Left Menu */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              {CASE_STUDIES.map((cs, idx) => (
                <button
                  key={cs.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`p-4 rounded-xl text-left border font-sans transition-all duration-300 w-full flex flex-col gap-1.5 cursor-pointer relative ${
                    activeCaseIndex === idx
                      ? 'bg-white border-pink-300 text-indigo-950 shadow-md transform scale-[1.01]'
                      : 'bg-white/40 border-pink-100/70 hover:border-pink-300 text-slate-600 hover:bg-white/90'
                  }`}
                >
                  <span className={`font-mono text-[9px] uppercase font-black tracking-wider ${activeCaseIndex === idx ? 'text-pink-600' : 'text-slate-500'}`}>
                    🦄 {cs.industry} • Year {cs.year} {activeCaseIndex === idx && '✨'}
                  </span>
                  <span className={`font-sans font-black text-sm text-slate-800 line-clamp-2`}>
                    {cs.title}
                  </span>
                </button>
              ))}

              {/* Added Beautiful Rainbow Path Graphics Box */}
              <div className="mt-4 p-4 rounded-2xl bg-white/70 border border-pink-200 overflow-hidden relative group shadow-sm">
                <span className="font-mono text-[9px] text-pink-600 font-extrabold block mb-2 uppercase">🌈 OUR ROADMAP METAPHOR:</span>
                <div className="rounded-xl overflow-hidden aspect-video border border-pink-100">
                  <img 
                    src="/src/assets/images/corporate_rainbow_path_1779727924910.png" 
                    alt="Corporate Rainbow road heading into cloud agility" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="font-sans text-[10px] text-slate-600 mt-2 leading-relaxed font-semibold">
                  Every product squad follows Jaro's magical <strong>cloud rainbow path</strong> to bypass sprint lockups!
                </p>
              </div>

            </div>

            {/* Case Study Detailed View Panel (FUNNY CLOUD FORMAT) */}
            {(() => {
              const c = CASE_STUDIES[activeCaseIndex];
              return (
                <div className="lg:col-span-8 cloud-shape-container p-6 md:p-8 flex flex-col justify-between gap-6 bg-white/80 border border-pink-250 text-left animate-fade-in relative overflow-visible shadow-xl border border-pink-200" key={c.id}>
                  
                  {/* Cloud bubbles outline */}
                  <div className="cloud-bubble-left animate-float-left pointer-events-none hidden md:block" />
                  <div className="cloud-bubble-right animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '0.4s' }} />
                  <div className="cloud-bubble-bottom-left animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '1s' }} />
                  <div className="cloud-bubble-bottom-right animate-float-left pointer-events-none hidden md:block" style={{ animationDelay: '1.6s' }} />

                  <div className="relative z-10 flex flex-col gap-6">
                    {/* Case Header */}
                    <div className="flex flex-col gap-2 border-b border-pink-100 pb-5">
                      <span className="font-mono text-[10px] tracking-widest text-pink-700 uppercase block font-black bg-pink-100/50 w-fit px-3 py-1 rounded-xl border border-pink-300 shadow-inner">
                        ☁️ CLIENT CASE PROFILE: {c.client}
                      </span>
                      <h3 className="font-sans font-black text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-amber-600 to-indigo-600 mt-2">
                        {c.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-700 font-semibold italic mt-1 leading-relaxed">
                        "{c.brief}"
                      </p>
                    </div>

                    {/* Dynamic Metric Grid */}
                    <div className="grid grid-cols-3 gap-4 py-1.5">
                      {c.metrics.map((m, idx) => (
                        <div key={idx} className="bg-pink-50/50 border border-pink-205 border-pink-200 p-3 rounded-xl text-left shadow-xs relative overflow-hidden">
                          <div className="absolute top-0 right-1 text-2xl opacity-10 pointer-events-none">🦄</div>
                          <span className="font-mono text-base sm:text-xl font-black text-pink-600 block">
                            {m.value}
                          </span>
                          <span className="font-sans text-[10px] text-slate-700 uppercase tracking-widest block font-extrabold mt-0.5">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Challenge vs Strategy block */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                      <div className="flex flex-col gap-2.5">
                        <span className="font-mono text-[10px] uppercase text-rose-700 font-black tracking-wider flex items-center gap-1">
                          <span className="text-sm">🛑</span>
                          Acutely Stalled Challenge:
                        </span>
                        <p className="font-sans text-slate-700 font-semibold leading-relaxed bg-rose-50/50 p-3.5 border border-rose-100 rounded-xl shadow-xs">
                          {c.challenge}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2.5">
                        <span className="font-mono text-[10px] uppercase text-indigo-700 font-black tracking-wider flex items-center gap-1">
                          <span className="text-sm">🦄</span>
                          Custom Strategic Pivot:
                        </span>
                        <p className="font-sans text-slate-700 font-semibold leading-relaxed bg-indigo-50/50 p-3.5 border border-indigo-100 rounded-xl shadow-xs">
                          {c.strategy}
                        </p>
                      </div>
                    </div>

                    {/* Outcome block */}
                    <div className="p-4 rounded-xl border border-emerald-250 border-emerald-200 bg-emerald-50 text-xs sm:text-sm flex flex-col gap-1.5 shadow-xs">
                      <span className="font-mono text-[10px] uppercase text-emerald-800 font-black tracking-wider block leading-none">
                        🌈 The Value Outcome Realized:
                      </span>
                      <p className="font-sans text-slate-800 leading-relaxed font-black">
                        {c.outcome}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })()}

          </div>

        </div>
      </section>

      {/* LEADERSHIP DIRECTORY TEAM */}
      <section id="team" className="py-24 px-6 md:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 border-b border-pink-100 relative overflow-hidden">
        
        {/* Decorative cloud decorations */}
        <div className="absolute top-10 left-5 text-pink-200/40 text-[50px] animate-pulse">☁️</div>
        <div className="absolute top-1/2 right-4 text-pink-205 text-pink-200/40 text-[70px] animate-bounce" style={{ animationDuration: '4s' }}>🦄</div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-pink-600 uppercase font-black">
              🦄 Elite Agility Engineers ☁️
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-slate-900">
              Meet Our Rainbow-Dusted Dream Team 🌈
            </h2>
            <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
              We are authors, Scrum masters, and release pipeline architects who blow away daily friction using magical agility templates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {TEAM.map((co) => (
              <div 
                key={co.id}
                className="group bg-white border border-pink-200 hover:border-pink-300 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row relative rounded-3xl overflow-hidden"
              >
                {/* Image panel */}
                <div className="relative w-full md:w-1/2 overflow-hidden bg-pink-50/50 border-b md:border-b-0 md:border-r border-pink-100 aspect-square md:aspect-auto">
                  <img
                    src={co.photo}
                    alt={co.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle experience badge overlay */}
                  <div className="absolute bottom-3 left-3 bg-pink-600/90 border border-pink-300 font-mono text-[9px] text-white px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm">
                    ✨ {co.experience} Sprints of Magic
                  </div>
                </div>

                {/* Info block */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-sans font-black text-lg text-slate-900 group-hover:text-pink-600 transition-colors">
                      {co.name}
                    </h3>
                    <span className="font-sans text-xs text-pink-600 font-semibold min-h-[18px] block">
                      {co.role}
                    </span>
                  </div>

                  <p className="font-sans text-slate-600 text-xs leading-relaxed font-semibold">
                    {co.bio}
                  </p>

                  <div className="mt-auto border-t border-pink-100 pt-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-pink-600 block font-black mb-1.5 animate-pulse">
                      Advisory Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {co.specialties.map((spec, sIdx) => (
                        <span key={sIdx} className="font-sans text-[8.5px] px-2 py-0.5 rounded-full bg-pink-100/50 border border-pink-200 text-slate-700 font-semibold inline-block capitalize shadow-xs">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-pink-100 pt-2 font-mono text-[8.5px] text-slate-500 flex justify-between items-center italic uppercase font-semibold">
                    <span>Credentials:</span>
                    <span className="text-slate-700 font-bold tracking-wide leading-tight select-all">{co.almaMater}</span>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Official Chief Happiness Mascot Card */}
          <div className="mt-16 max-w-2xl mx-auto bg-white/95 border border-pink-200 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-305 group">
            {/* Sparkly corner badges */}
            <div className="absolute top-3 right-3 text-pink-500 text-lg animate-pulse">✨</div>
            <div className="absolute bottom-3 left-3 text-pink-500 text-lg animate-pulse" style={{ animationDelay: '1s' }}>⭐️</div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Mascot Image with border and blanket/star matching background */}
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-pink-200 shadow-lg relative bg-pink-50 flex-shrink-0">
                <img
                  src="/src/assets/images/jaro_plush_unicorn_1779729957540.png"
                  alt="Jaro's Real Life Agile Mascot"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-1.5 left-1.5 bg-pink-600 font-mono text-[8px] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
                  OFFICE MASCOT
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left flex flex-col gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="font-mono text-[9px] text-pink-600 font-extrabold uppercase tracking-widest">
                    ⭐ CHIEF HAPPINESS & SPRINT MORALE OFFICER ⭐
                  </span>
                  <h3 className="font-sans font-black text-xl text-slate-900">
                    Barnaby the Magical Agile Companion
                  </h3>
                  <span className="font-sans text-xs text-indigo-950 font-bold bg-pink-100/60 self-center md:self-start px-2.5 py-1 rounded-full border border-pink-200/50 mt-1">
                    Specialty: Magical Estimation & Sleep-Driven WIP Limits
                  </span>
                </div>
                
                <p className="font-sans text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">
                  Barnaby supports every Jaro Sidor Consulting delivery block by radiating absolute whimsical energy. Between intense sprint retrospectives, Barnaby recharges on a cozy starry pink blanket and validates complex story point estimates with a twinkle of his glittery horn.
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mt-1">
                  <span className="font-sans text-[8.5px] px-2 py-1 rounded-lg bg-pink-50 border border-pink-100 font-extrabold text-slate-700 shadow-3xs">⭐ 500+ SPRINTS RECHARGED</span>
                  <span className="font-sans text-[8.5px] px-2 py-1 rounded-lg bg-pink-50 border border-pink-100 font-extrabold text-slate-700 shadow-3xs">⭐ 100% MORALE RATING</span>
                  <span className="font-sans text-[8.5px] px-2 py-1 rounded-lg bg-pink-50 border border-pink-100 font-extrabold text-slate-700 shadow-3xs">⭐ HORN QUALIFIED SM</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STRATEGY BOOKING ENGINE */}
      <section id="scheduler" className="py-24 px-6 md:px-8 bg-gradient-to-tr from-pink-50 via-purple-50 to-pink-50 border-b border-pink-100 relative overflow-hidden">
        
        {/* Sky accent icons */}
        <div className="absolute top-10 right-10 text-white/40 text-[90px] select-none pointer-events-none animate-float-right">☁️</div>
        <div className="absolute bottom-12 left-10 text-white/40 text-[100px] select-none pointer-events-none animate-float-left">☁️</div>

        <div className="max-w-4xl mx-auto relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-pink-600 uppercase font-extrabold flex items-center justify-center gap-2">
              <span>🦄</span> Magical Booking Portal <span>🌈</span>
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl tracking-tight text-slate-900">
              Secure a Free Backlog Flow Strategy Call ☎️
            </h2>
            <p className="font-sans text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
              No boring corporate sales pitches. Book a secure, 30-minute operational review of your active bottlenecks with a Senior Advisor.
            </p>
          </div>

          {/* Booking card container (FUNNY CLOUD FORMAT WITH RAINBOWS) */}
          <div className="cloud-shape-container shadow-2xl relative overflow-visible">
            
            {/* Cloud Bubble Overlays to give the scheduler booking block a physical cloud outline */}
            <div className="cloud-bubble-left animate-float-left pointer-events-none hidden md:block" />
            <div className="cloud-bubble-right animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '1.2s' }} />
            <div className="cloud-bubble-bottom-left animate-float-right pointer-events-none hidden md:block" style={{ animationDelay: '0.6s' }} />
            <div className="cloud-bubble-bottom-right animate-float-left pointer-events-none hidden md:block" style={{ animationDelay: '2s' }} />

            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-[80px]" />

            {!isBooked ? (
              <form onSubmit={handleBookSession} className="p-6 md:p-10 flex flex-col gap-6 text-left relative z-10 bg-white/80 rounded-2xl border border-pink-200">
                
                {/* Advisor Selector row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider animate-pulse">
                      Select Primary Advisor:
                    </label>
                    <select
                      value={advisorId}
                      onChange={(e) => setAdvisorId(e.target.value)}
                      className="bg-white border border-pink-200 focus:border-pink-400 rounded-lg p-3 text-slate-800 outline-none font-sans text-xs uppercase tracking-wide cursor-pointer font-semibold shadow-xs"
                    >
                      <option value="jaro-sidor">Jaro Sidor (Primary AI Product & Unicorn Coach)</option>
                      <option value="elena-scrum">Dr. Elena Rostova (VP, Cloud Engineering & Rainbow Pathways)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider animate-pulse">
                      Target Audit Focus Area:
                    </label>
                    <select
                      value={focusArea}
                      onChange={(e) => setFocusArea(e.target.value)}
                      className="bg-white border border-pink-200 focus:border-pink-400 rounded-lg p-3 text-slate-800 outline-none font-sans text-xs uppercase tracking-wide cursor-pointer font-semibold shadow-xs"
                    >
                      <option value="Enterprise Scaling & Redundancies">Enterprise Scaling & Redundancy App</option>
                      <option value="Squad Velocity Optimization">Squad Velocity Optimization</option>
                      <option value="Management OKR Alignment">Management OKR Alignment</option>
                      <option value="Backlog Grooming and story splitting">Backlog Slicing Audit</option>
                      <option value="DevOps CI/CD Automation Streamlining">DevOps Deployment Automation</option>
                    </select>
                  </div>
                </div>

                {/* Calendar Date / Time row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider">
                      Choose Available Date:
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-white border border-pink-205 border-pink-200 focus:border-pink-400 rounded-lg p-3 text-slate-800 outline-none uppercase font-mono tracking-widest shadow-xs"
                    />
                  </div>

                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider">
                      Target Advisory Time:
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="bg-white border border-pink-200 focus:border-pink-400 rounded-lg p-3 text-slate-800 outline-none font-sans text-xs font-semibold hover:border-pink-300 shadow-xs"
                    >
                      <option value="09:00 AM">09:00 AM (Central European Standard)</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM</option>
                      <option value="04:00 PM">04:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Name / Email row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider">
                      Full Client Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CEO / Lead Engineer"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="bg-white border border-pink-200 focus:border-pink-400 rounded-lg p-3 text-slate-800 outline-none shadow-xs shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider">
                      Corporate Work Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      className="bg-white border border-pink-200 focus:border-pink-400 rounded-lg p-3 text-slate-800 outline-none shadow-xs shadow-inner"
                    />
                  </div>
                </div>

                {/* Company Name / Title row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider">
                      Company / Organization name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Venture Capital plc / Tech LLC"
                      value={clientInfo.company}
                      onChange={(e) => setClientInfo({...clientInfo, company: e.target.value})}
                      className="bg-white border border-pink-200 focus:border-pink-400 rounded-lg p-3 text-slate-800 outline-none shadow-xs shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider">
                      Your Corporate Role:
                    </label>
                    <input
                      type="text"
                      placeholder="Lead Product Owner / VP Infrastructure"
                      value={clientInfo.role}
                      onChange={(e) => setClientInfo({...clientInfo, role: e.target.value})}
                      className="bg-white border border-pink-200 focus:border-pink-400 rounded-lg p-3 text-slate-800 outline-none shadow-xs shadow-inner"
                    />
                  </div>
                </div>

                {/* Notes box */}
                <div className="flex flex-col gap-2 font-sans text-xs">
                  <label className="font-mono text-[10px] text-pink-600 uppercase font-black tracking-wider">
                    Roadblock description & Background Notes:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly detail what are your top agile bottlenecks (e.g. Standup fatigue, QA lag, Story Point arguments...)"
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    className="bg-white border border-pink-200 focus:border-pink-400 rounded-lg p-3.5 text-slate-800 outline-none resize-none leading-relaxed shadow-xs shadow-inner"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="py-4 bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-600 hover:opacity-95 text-white font-sans font-black uppercase tracking-widest text-xs rounded-xl shadow-xl shadow-pink-500/15 cursor-pointer text-center relative z-10"
                >
                  Generate Strategic Invitation & Secure Booking coordinates 🦄
                </button>

              </form>
            ) : (
              // BOOKED CONFIRMATION CARD SUCCESS SCREEN
              <div className="p-8 md:p-12 text-center flex flex-col items-center gap-6 animate-fade-in relative z-10 animate-unicorn bg-white/95 rounded-2xl border border-pink-200 shadow-xl">
                
                <div className="p-4 bg-pink-50 border-2 border-pink-300 text-pink-600 rounded-full w-fit">
                  <CheckCircle className="w-10 h-10 text-pink-600 stroke-[1.5] animate-scale-up" />
                </div>

                <div className="flex flex-col gap-1.5 max-w-lg">
                  <span className="font-mono text-[10px] tracking-widest text-pink-600 block font-black uppercase">
                    🦄 Maturity transformation brief is registered
                  </span>
                  <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-900">
                    Agile Strategy Booking Verified! 🌈
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-705 text-slate-700 leading-relaxed mt-2 p-4 bg-pink-50/40 border border-pink-200 rounded-xl font-semibold shadow-xs">
                    Congratulations **{clientInfo.name}**, you have locked in your strategy audit regarding **"{focusArea}"** with **{
                      advisorId === 'jaro-sidor' ? 'Jaro Sidor' : 'Dr. Elena Rostova'
                    }** for **{date}** at **{time}**.
                  </p>
                </div>

                <div className="w-full max-w-md border border-pink-205 border-pink-200 p-4.5 rounded-xl bg-pink-50/20 text-left font-mono text-[11px] text-slate-600 flex flex-col gap-1.5 shadow-inner">
                  <div className="flex justify-between">
                    <span>REGISTRY CLIENT:</span>
                    <span className="text-slate-800 font-sans font-extrabold">{clientInfo.name} ({clientInfo.company})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VERIFICATION CODE:</span>
                    <span className="text-pink-600 font-black">JARO-FLOW-{Math.floor(Math.random() * 9000 + 1000)}</span>
                  </div>
                  <div className="flex justify-between border-t border-pink-100 pt-1.5 mt-1.5">
                    <span>COORDINATES SETUP:</span>
                    <span className="text-pink-600 font-black">🌈 SECURE GOOGLE MEET LINK INBOXED</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsBooked(false);
                    setClientInfo({ name: '', email: '', company: '', role: '', notes: '' });
                  }}
                  className="font-mono text-xs text-pink-600 hover:text-pink-800 transition-colors cursor-pointer py-1 block uppercase font-black"
                >
                  Schedule Another Diagnostic Briefing
                </button>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-pink-100 py-12 px-6 md:px-8 text-slate-600 font-sans relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-lg text-white font-bold leading-none aspect-square">
              <span>🦄</span>
            </div>
            <span className="font-sans text-xs tracking-widest text-pink-600 font-black uppercase">
              Jaro Sidor Consulting
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-semibold h-[20px]">
            <span>✨ Rainbow Delivery</span>
            <span>•</span>
            <span>Magical Cloud Agility</span>
            <span>•</span>
            <span>Unicorn Speed Slices</span>
            <span>•</span>
            <span>Continuous Cadence</span>
          </div>

          <p className="text-[10.5px] font-mono text-slate-400 font-bold uppercase tracking-wider">
            © 2026 Jaro Sidor Consulting. All rights reserved. • High Speed Agile Delivery.
          </p>

        </div>
      </footer>

      {/* FLOATING UNICORN & RAINBOW METHODOLOGY BOOSTER */}
      <div className="fixed bottom-6 right-6 z-40 group">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-yellow-500 via-green-400 via-blue-400 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-spin" style={{ animationDuration: '6s' }} />
        <button
          onClick={() => {
            setUnicornPowerCount(prev => prev + 1);
            setMagicRainbowShower(true);
            const quotes = [
              "Agile output multiplied by 400% with fairy-dust!",
              "Double-slicing user stories with a rainbow laser!",
              "Jaro Sidor has summoned an automated DevOps unicorn!",
              "Scrum meetings reduced by 80% using magical wizardry!",
              "Unicorn power overload: 10x developer mindset unlocked!"
            ];
            setSelectedUnicornQuote(quotes[Math.floor(Math.random() * quotes.length)]);
            setTimeout(() => setMagicRainbowShower(false), 3000);
          }}
          className="relative bg-white border border-pink-200 hover:border-pink-500 text-2xl p-3.5 rounded-full hover:scale-110 active:scale-95 transition-all shadow-xl flex items-center justify-center cursor-pointer"
          title="Summon Agile Unicorn"
        >
          <span className="animate-unicorn inline-block">🦄</span>
        </button>
        
        {/* Quote overlay card */}
        <div className="absolute bottom-full right-0 mb-3 w-64 bg-white/95 border border-pink-200 p-3 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-left backdrop-blur-md">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-pink-600 font-extrabold text-xs uppercase tracking-wider font-mono">Magic Agile Helper</span>
            <span className="text-xs">🌈</span>
          </div>
          <p className="font-sans text-xs text-slate-700 leading-relaxed font-semibold">
            {selectedUnicornQuote}
          </p>
          <div className="mt-1.5 pt-1 border-t border-pink-100 flex justify-between items-center text-[10px] font-mono text-slate-500">
            <span>UNICORN ENERGY:</span>
            <span className="text-pink-600 font-bold">{unicornPowerCount * 10}XP</span>
          </div>
        </div>
      </div>

      {/* MAGICAL FULL SCREEN RAINBOW SHOWER & UNICORN DASH */}
      {magicRainbowShower && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden flex items-center justify-center bg-pink-500/10 backdrop-blur-[1px] transition-all">
          <div className="absolute top-1/4 left-0 right-0 flex justify-around select-none">
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🦄</span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌈</span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.4s' }}>☁️</span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.6s' }}>🦄</span>
            <span className="text-6xl animate-bounce" style={{ animationDelay: '0.8s' }}>🌈</span>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,105,180,0.15),transparent_60%)] animate-pulse" />
          <div className="bg-white border select-none pointer-events-auto border-2 border-pink-400 p-6 rounded-2xl max-w-sm text-center shadow-[0_0_50px_rgba(236,72,153,0.15)] relative">
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-5xl">🦄✨</span>
            <h4 className="font-sans font-black text-lg text-pink-605 text-pink-600 uppercase tracking-widest mt-2">
              Jaro's Unicorn Velocity Boost!
            </h4>
            <p className="font-sans text-xs text-slate-700 mt-2 leading-relaxed font-semibold">
              Fairy-dust injected! Automated sprint delivery accelerated by **{(unicornPowerCount + 1) * 100}%**!
            </p>
            <div className="mt-4 flex justify-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 animate-ping" style={{ animationDelay: '0.1s' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" style={{ animationDelay: '0.2s' }} />
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
