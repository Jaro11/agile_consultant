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
  Coins
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
  const [selectedServiceId, setSelectedServiceId] = useState('enterprise-scaling');

  // Case Study active switcher
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // Booking states
  const [advisorId, setAdvisorId] = useState('marcus-agile');
  const [date, setDate] = useState('2026-05-28');
  const [time, setTime] = useState('10:00 AM');
  const [focusArea, setFocusArea] = useState('Enterprise Scaling & Redundancies');
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
      const sections = ['home', 'services', 'assessor', 'agile-memes', 'interactive-fun', 'case-studies', 'team', 'scheduler'];
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
        recommendation: "Focus on micro-optimizations and leading value stream audits. You are ready to join Marcus Vance on strategic keynotes."
      };
    } else if (score >= 14) {
      return {
        badge: "Velocity Catalyst (Evolving Sprint Squads)",
        theme: "text-sky-400 bg-sky-950/80 border-sky-500",
        desc: "Solid foundation. Your standard scrum loops are stable, but you suffer from dependency delays and slow quarterly planning integration.",
        recommendation: "Begin implementing strict WIP limits, continuous integration checks, and switch to rolling quarterly roadmaps."
      };
    } else if (score >= 10) {
      return {
        badge: "Water-Scrum-Fall (Cargo-Cult Novice)",
        theme: "text-amber-400 bg-amber-950/80 border-amber-500",
        desc: "You are doing Agile on paper only. Daily standups take place, but deployment pipelines are rigid blocks, and requirements are hard-scoped annually.",
        recommendation: "Transition QA immediately into individual sprints, slice user stories to smaller independent values, and stop converting relative points to hourly promises."
      };
    } else {
      return {
        badge: "Command-and-Control Chaos (Waterfall Silos)",
        theme: "text-rose-400 bg-rose-950/80 border-rose-500",
        desc: "Critical state. Long status calls, fear of code failure, manual server releases, and massive overhead pipelines.",
        recommendation: "Stop immediately. Schedule an urgent Agile Transformation mapping session below with Marcus Vance before sprint friction stalls your entire delivery pipeline."
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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-[1200px] right-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-[400px] left-10 w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[100px] -z-10" />

      {/* Sticky Header component */}
      <Header activeSection={activeSection} />

      {/* HERO SECTION */}
      <section id="home" className="pt-32 md:pt-40 pb-20 px-6 md:px-8 border-b border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/60 px-3.5 py-1.5 rounded-full w-fit">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="font-mono text-xs tracking-wider text-sky-300 font-semibold uppercase">
                Pragmatic Agility • Not Cargo Cults
              </span>
            </div>

            {/* Display Header */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1]">
              Revolutionize <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">Enterprise Flow.</span>
              <br />Double Velocity.
            </h1>

            {/* Paragraph Subhead */}
            <p className="font-sans text-slate-350 text-base sm:text-lg leading-relaxed max-w-2xl">
              We are <strong className="text-white">Apex Agile Advisory</strong>. We partner with legacy technology hubs, fast-growth startups, and PMO departments to dismantle standup fatigue, align multi-team dependencies, and scale continuous delivery pipelines.
            </p>

            {/* Dynamic visual statistics grids */}
            <div className="grid grid-cols-3 gap-4 py-3 border-y border-slate-900/40 my-2">
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/40 text-left">
                <span className="font-mono text-xl sm:text-2xl font-bold text-sky-400 block">+320%</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Avg Velocity
                </span>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/40 text-left">
                <span className="font-mono text-xl sm:text-2xl font-bold text-blue-400 block">8 Min</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Deploy Lead Time
                </span>
              </div>
              <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-800/40 text-left">
                <span className="font-mono text-xl sm:text-2xl font-bold text-indigo-400 block">-72%</span>
                <span className="font-sans text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                  WIP Blockages
                </span>
              </div>
            </div>

            {/* CTA Interaction */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#scheduler"
                className="flex items-center justify-center gap-2 font-sans font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 border border-blue-400/20 text-white shadow-xl shadow-blue-500/10 px-6 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Book Backlog Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#assessor"
                className="flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-wider bg-slate-900 hover:bg-slate-850 border border-slate-800 text-slate-200 px-6 py-4 rounded-xl transition-all duration-300"
              >
                Assess Your Agility
                <Info className="w-4 h-4 text-sky-450" />
              </a>
            </div>

          </div>

          {/* Hero Right Visual Column - Embedded asset overlay */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full relative max-w-md lg:max-w-none">
              
              {/* Floating aesthetic neon borders */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-2xl blur-md opacity-25" />
              
              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-5 overflow-hidden shadow-2xl flex flex-col gap-4">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-slate-900 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                    Continuous Delivery Matrix
                  </span>
                </div>

                {/* Hero Asset image overlay with elegant text bubble */}
                <div className="relative aspect-video rounded-xl overflow-hidden group">
                  <img
                    src="/src/assets/images/consulting_hero_1779724739500.png"
                    alt="Sleek corporate boardroom matching deep azure dusk color"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-4">
                    <p className="font-sans text-xs text-slate-200 leading-normal font-medium bg-slate-950/80 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-800">
                      🏢 <strong className="text-white">Apex Agile Advisory</strong> is hosted globally and verified for high-impact enterprise agile migrations.
                    </p>
                  </div>
                </div>

                {/* Fun Live Ticker */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-slate-400">Active Coach Deployment:</span>
                    <span className="text-emerald-400 flex items-center gap-1.5 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                      Live & Ready
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800/40 font-sans text-xs flex items-start gap-2 text-slate-350">
                    <Flame className="w-4 h-4 text-amber-500 shrink-0" />
                    <div>
                      <strong className="text-slate-100">Specialist Focus:</strong> Continuous backlog streamlining, automated epic alignment, and leadership behavior transformation.
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Absolute Card overlap */}
              <div className="absolute -bottom-6 -right-4 bg-slate-900 border border-blue-500/20 shadow-2xl rounded-xl p-3.5 flex items-center gap-3 hidden sm:flex max-w-[200px] hover:border-blue-500/50 transition-colors animate-bounce duration-500" style={{ animationDuration: '3.5s' }}>
                <div className="p-2 bg-blue-950 rounded-lg text-sky-400">
                  <Zap className="w-5 h-5 fill-sky-400/20" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-slate-100 block">Jira Bottlenecks</span>
                  <span className="font-sans text-[10px] text-emerald-400 font-semibold uppercase block">0 Pending</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* AGILE SOLUTIONS SECTION */}
      <section id="services" className="py-24 px-6 md:px-8 bg-slate-950/60 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold">
              Advisory Solutions Matrix
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              Pragmatic Services to Accelerate Value
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              We replace academic hand-waving and empty buzzwords with structured delivery systems, pipeline automated limits, and leadership culture transformations.
            </p>
          </div>

          {/* Interactive Layout Builder */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
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
                        ? 'bg-gradient-to-r from-blue-950/70 to-slate-900 border-blue-500/50 shadow-lg shadow-blue-500/5' 
                        : 'bg-transparent border-slate-900 hover:border-slate-800 hover:bg-slate-900/30'
                    }`}
                  >
                    {/* Active vertical glow */}
                    {isActive && (
                      <span className="absolute left-0 top-1/4 bottom-1/4 w-[3.5px] bg-blue-505 bg-gradient-to-b from-blue-500 to-sky-305 rounded-full" />
                    )}
                    
                    <div className={`p-2.5 rounded-lg shrink-0 transition-colors ${
                      isActive ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900 text-slate-400'
                    }`}>
                      {getIcon(serv.icon)}
                    </div>
                    
                    <div>
                      <span className="font-semibold text-xs text-sky-400 uppercase tracking-widest block mb-0.5">
                        {serv.category}
                      </span>
                      <span className="font-bold text-sm text-slate-100 block group-hover:text-white transition-colors">
                        {serv.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right detailed showcase pane */}
            <div className="lg:col-span-8 bg-slate-900/60 border border-slate-850 rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden min-h-[460px] animate-fade-in" key={selectedServiceId}>
              
              {/* Absolute decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl" />

              {/* Service details */}
              {(() => {
                const s = SERVICES.find(serv => serv.id === selectedServiceId) || SERVICES[0];
                return (
                  <>
                    <div className="flex flex-col gap-2">
                      <span className="font-sans font-extrabold text-2xl text-white">
                        {s.title}
                      </span>
                      <span className="font-mono text-xs tracking-wider text-sky-400 uppercase font-semibold">
                        Core Focus: {s.category}
                      </span>
                    </div>

                    <p className="font-sans text-slate-300 text-sm leading-relaxed border-b border-slate-800 pb-5">
                      {s.detailedDescription}
                    </p>

                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-3">
                        Strategic Deliverables:
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {s.deliverables.map((del, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300 bg-slate-950/50 p-3 rounded-lg border border-slate-900">
                            <Check className="w-4 h-4 text-sky-400 shrink-0 mt-0.5 stroke-[2.5]" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 p-4 bg-blue-950/60 border border-blue-900/40 rounded-xl flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-sky-400" />
                        <div>
                          <span className="font-mono text-[10px] uppercase text-slate-400 block font-semibold leading-tight">
                            Key Performance Benchmark
                          </span>
                          <span className="font-sans text-sm font-bold text-slate-200">
                            {s.metrics}
                          </span>
                        </div>
                      </div>
                      <a 
                        href="#scheduler" 
                        onClick={() => setFocusArea(s.title)}
                        className="flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 py-2.5 px-4 rounded-lg transition-colors shrink-0"
                      >
                        Request This Audit
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </div>
                  </>
                );
              })()}

            </div>

          </div>

        </div>
      </section>

      {/* DYNAMIC QUIZ SECTION */}
      <section id="assessor" className="py-24 px-6 md:px-8 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-5xl mx-auto">
          
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold">
              Interactive Diagnostic Engine
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              Sprinting or Stalled? Assess Your Agility
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              Take our 2-minute reality assessment to score your team. We identify command-silos and standup anomalies instantly.
            </p>
          </div>

          {/* Interactive Quiz container card */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
            
            {/* Ambient decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-[80px]" />

            {/* QUIZ ACTIVE CASE */}
            {quizScore === null ? (
              <div className="flex flex-col gap-6">
                
                {/* Visual Progress bar */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>PROGRESS: QUESTION {currentQuestionIndex + 1} OF {QUIZ_QUESTIONS.length}</span>
                    <span className="text-sky-400">{Math.round(((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100)}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-[1px] border border-slate-800">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="py-2">
                  <span className="font-mono text-xs font-bold text-sky-400 uppercase block mb-1">
                    Scenario Checklist
                  </span>
                  <h3 className="font-sans font-extrabold text-lg sm:text-2xl text-slate-100">
                    {QUIZ_QUESTIONS[currentQuestionIndex].question}
                  </h3>
                </div>

                {/* Options answers */}
                <div className="flex flex-col gap-3.5">
                  {QUIZ_QUESTIONS[currentQuestionIndex].options.map((opt, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleAnswerSelect(opt.points, oIdx)}
                      className="group p-4 bg-slate-950/60 border border-slate-900 hover:border-blue-500/50 hover:bg-slate-900/40 text-left font-sans text-sm font-medium transition-all duration-300 rounded-xl cursor-pointer flex items-start gap-3 w-full"
                    >
                      <div className="w-5.5 h-5.5 rounded-full border border-slate-700 group-hover:border-sky-400 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5 transition-colors group-hover:bg-blue-950">
                        {String.fromCharCode(65 + oIdx)}
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors">
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
                <div className="p-6 rounded-xl border flex flex-col md:flex-row items-center justify-between gap-6 bg-slate-950/80 border-slate-800">
                  <div className="flex flex-col gap-2 text-left">
                    <span className="font-mono text-[10px] uppercase text-slate-400 tracking-wider block font-semibold leading-tight">
                      Diagnostic Agility Outcome Status
                    </span>
                    <span className="font-sans font-extrabold text-xl sm:text-3xl text-white block">
                      Agility Score: {quizScore} / 20
                    </span>
                    <div className={`px-3 py-1.5 mt-2 rounded-lg font-mono text-xs font-bold tracking-wider inline-block w-fit border uppercase ${getRankData(quizScore).theme}`}>
                      🏆 Rank: {getRankData(quizScore).badge}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
                    <button
                      onClick={prefillWithQuizResult}
                      className="flex items-center justify-center gap-2 font-sans text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-lg transition-colors cursor-pointer w-full"
                    >
                      Pre-fill Advisor Session
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={restartQuiz}
                      className="flex items-center justify-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white transition-colors py-2 cursor-pointer w-full text-center"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Restart Assessment
                    </button>
                  </div>
                </div>

                {/* Diagnostics details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-900/60 flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase text-sky-400 font-bold block">
                      The Root Issues Identified:
                    </span>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed">
                      {getRankData(quizScore).desc}
                    </p>
                  </div>
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-900/60 flex flex-col gap-2">
                    <span className="font-mono text-[10px] uppercase text-emerald-400 font-bold block">
                      Advisor Recommendation:
                    </span>
                    <p className="font-sans text-sm text-slate-300 leading-relaxed">
                      {getRankData(quizScore).recommendation}
                    </p>
                  </div>
                </div>

                {/* Score break-down mapping */}
                <div className="border-t border-slate-800 pt-6">
                  <button 
                    onClick={() => setShowQuizDetails(!showQuizDetails)}
                    className="flex items-center justify-between font-sans text-xs text-slate-400 hover:text-white transition-colors font-bold uppercase w-full py-2 cursor-pointer"
                  >
                    <span>{showQuizDetails ? "Hide" : "Show"} Detailed Question Breakdown & Advice</span>
                    <span className="text-sky-400 font-mono text-xs">{showQuizDetails ? "[-]" : "[+]"}</span>
                  </button>

                  {showQuizDetails && (
                    <div className="flex flex-col gap-5 mt-4 text-left animate-fade-in">
                      {QUIZ_QUESTIONS.map((q, idx) => {
                        const answeredOptIdx = quizAnswers[idx] ?? 0;
                        const opt = q.options[answeredOptIdx];
                        return (
                          <div key={q.id} className="p-4 bg-slate-950 border border-slate-900 rounded-lg flex flex-col gap-2">
                            <span className="font-sans text-xs font-bold text-slate-100">
                              Question {q.id}: {q.question}
                            </span>
                            <div className="text-xs font-sans text-slate-400 leading-relaxed pl-3 border-l-2 border-slate-800">
                              <span className="text-slate-200 font-medium font-mono">You Answered: </span>
                              "{opt.text}" <span className="text-sky-400 font-mono font-bold">({opt.points} pts)</span>
                            </div>
                            <div className="text-xs font-sans text-sky-300/90 leading-normal pl-3">
                              <span className="font-semibold text-[10px] font-mono uppercase text-sky-400">Coach Advice:</span> {opt.explanation}
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
      <section id="agile-memes" className="py-24 px-6 md:px-8 bg-slate-950/60 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold">
              The Meme Vault & Insights
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              The daily struggle of "We Do Agile™"
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              Dismantling delivery friction requires examining reality. We analyze real engineering paradoxes with professional diagnosis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Meme Column Selector (Left) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="font-mono text-[10px] tracking-wider text-slate-400 uppercase font-bold block mb-1">
                SELECT SCENARIO PROFILE:
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
                      ? 'bg-slate-905 border-blue-500/50 hover:border-blue-500/80 shadow-md shadow-blue-500/5'
                      : 'bg-transparent border-slate-900 hover:border-slate-850 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-sans font-bold text-sm text-slate-100 block">
                      {meme.title}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                      meme.severity === 'Maximum Facepalm' 
                        ? 'bg-rose-950/80 border-rose-500/40 text-rose-300' 
                        : meme.severity === 'Spicy'
                          ? 'bg-amber-950/80 border-amber-500/40 text-amber-300'
                          : 'bg-blue-950/80 border-blue-500/40 text-blue-300'
                    }`}>
                      {meme.severity}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-slate-400 line-clamp-1">
                    {meme.setup}
                  </p>
                </button>
              ))}
            </div>

            {/* Comic Panel Showcase (Right) */}
            {(() => {
              const meme = AGILE_MEMES[selectedMemeIndex];
              return (
                <div className="lg:col-span-7 bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
                  
                  {/* Comic/Panel Header info */}
                  <div className="bg-slate-950 px-6 py-4.5 border-b border-slate-850 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      <span className="font-sans font-bold text-xs uppercase tracking-widest text-slate-200">
                        Visualizing Agile Paradox #{selectedMemeIndex + 1}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-sky-400 font-semibold uppercase">
                      Severity Rating: {meme.severity}
                    </span>
                  </div>

                  {/* Comic Panel Workspace Body */}
                  <div className="p-6 md:p-8 flex flex-col gap-6 bg-slate-900/50">
                    
                    {/* Setup dialog frame */}
                    <div className="flex flex-col gap-2 text-left relative">
                      <div className="absolute top-2 left-4 font-mono text-[9px] text-sky-400 uppercase font-bold tracking-widest bg-slate-900 px-1 rounded">
                        1. Scene Setup
                      </div>
                      <div className="p-5 pt-7 rounded-xl bg-slate-950 border border-slate-900 font-sans text-sm text-slate-200 leading-relaxed shadow-inner">
                        💬 <span className="italic">"{meme.setup}"</span>
                      </div>
                    </div>

                    {/* Punchline dialog frame with comical bubble styling */}
                    <div className="flex flex-col gap-2 text-left relative">
                      <div className="absolute top-2 left-4 font-mono text-[9px] text-indigo-400 uppercase font-bold tracking-widest bg-slate-900 px-1 rounded">
                        2. Punchline Reality Paradox
                      </div>
                      <div className="p-5 pt-7 rounded-xl bg-slate-950 border border-indigo-900/40 font-mono text-xs text-white leading-relaxed shimmer-gradient relative overflow-hidden">
                        <span className="font-bold text-amber-400 block mb-1">🚨 CRITICAL FAILURE DETECTED:</span>
                        "{meme.punchline}"
                        
                        {/* Shimmer background line decoration */}
                        <div className="absolute right-0 bottom-0 w-12 h-12 bg-indigo-505/5 blur-xl pointer-events-none" />
                      </div>
                    </div>

                    {/* Action reveal diagnostic section */}
                    {!revealedReality ? (
                      <button
                        onClick={() => setRevealedReality(true)}
                        className="py-4.5 bg-gradient-to-r from-blue-700 to-sky-500 hover:from-blue-600 hover:to-sky-400 text-white font-sans font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-lg shadow-blue-500/10 cursor-pointer flex items-center justify-center gap-2.5"
                      >
                        <RefreshCw className="w-4 h-4 text-blue-105 animate-spin" style={{ animationDuration: '4s' }} />
                        Unveil Agile Consultant's Diagnosis
                      </button>
                    ) : (
                      // REVEALED COACH REALITY INSIGHT
                      <div className="p-5 rounded-xl bg-blue-950/60 border border-blue-900/40 text-left animate-fade-in flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-sky-400 shrink-0" />
                          <span className="font-mono text-xs font-bold text-sky-305 uppercase tracking-wider block">
                            {meme.realityLabel}
                          </span>
                        </div>
                        <p className="font-sans text-xs text-slate-250 leading-relaxed border-l-2 border-sky-550 pl-3">
                          {meme.realityText}
                        </p>
                        
                        <div className="mt-2.5 pt-2.5 border-t border-blue-900/20 text-[10px] font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                          <span>Diagnosis complete • Resolved via agile restructuring</span>
                          <button 
                            onClick={() => setRevealedReality(false)}
                            className="text-xs text-sky-400 hover:text-white transition-colors cursor-pointer capitalize font-sans font-medium lowercase italic"
                          >
                            Hide Diagnosis
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
      <section id="interactive-fun" className="py-24 px-6 md:px-8 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold">
              The Pragmatic Sandbox Suite
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              Silo Translators & Standup Games
            </h2>
            <p className="font-sans text-slate-450 text-sm sm:text-base leading-relaxed">
              Play our famous Standup Bingo card to survive boring calls, or use the reality corporate translator to find objective delivery truth instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* COLUMN LEFT: AGILE REALITY TRANSLATOR */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-850 rounded-2xl p-6 md:p-8 flex flex-col gap-6 relative shadow-2xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/5 rounded-full blur-2xl" />

              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-2.5 bg-blue-950 rounded-lg text-sky-450">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-sans font-extrabold text-lg text-white">
                    Corporate Agile Translator
                  </h3>
                  <p className="font-sans text-xs text-slate-400">
                    Input standard corporate demands. Map them directly to agile execution.
                  </p>
                </div>
              </div>

              {/* Input Choice Selector Grid */}
              <div className="flex flex-col gap-3 text-left">
                <span className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  CHOOSE COMMON OFFICE STATEMENTS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {TRANSLATION_PAIRS.map((pair, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedTranslationIndex(idx);
                        setCustomTranslatedResult(null); // overwrite custom text state
                      }}
                      className={`p-3 text-left rounded-lg text-xs leading-normal font-sans tracking-wide transition-all border cursor-pointer h-[80px] line-clamp-2 ${
                        selectedTranslationIndex === idx && !customTranslatedResult
                          ? 'bg-blue-950/85 border-blue-500/50 hover:border-blue-500/80'
                          : 'bg-slate-950 border-slate-900 hover:border-slate-800 hover:bg-slate-900'
                      }`}
                    >
                      🗣️ "{pair.corporate.substring(0, 52)}..."
                    </button>
                  ))}
                </div>
              </div>

              {/* OR CUSTOM INPUT BOX */}
              <form onSubmit={handleCustomTranslate} className="flex flex-col gap-2 text-left pt-2 border-t border-slate-800">
                <span className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider block">
                  OR CUSTOM Buzzword TRANSCRIPTION:
                </span>
                <div className="flex gap-2.5">
                  <input
                    type="text"
                    value={customCorporateText}
                    onChange={(e) => setCustomCorporateText(e.target.value)}
                    placeholder="e.g. 'Can we do this fast, without testing?'"
                    className="flex-1 bg-slate-950 border border-slate-800 focus:border-blue-500/50 rounded-lg px-3.5 py-2 text-xs text-slate-100 outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 text-slate-50 font-sans text-xs font-bold uppercase tracking-wider py-2 px-4 rounded-lg transition-colors cursor-pointer shrink-0"
                  >
                    Translate
                  </button>
                </div>
              </form>

              {/* DYNAMIC TRANSLATION RESULT VIEW */}
              <div className="p-4 bg-slate-950 border border-slate-850 rounded-xl relative overflow-hidden text-left min-h-[148px] flex flex-col justify-center">
                {isTranslatingAnim ? (
                  <div className="flex flex-col items-center justify-center gap-2 py-4">
                    <RefreshCw className="w-5 h-5 text-sky-400 animate-spin" />
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                      Formulating Agile Response Metrics...
                    </span>
                  </div>
                ) : (
                  <>
                    <span className="font-mono text-[10px] uppercase text-sky-400 font-extrabold tracking-widest block mb-2">
                      Translated Agile Methodology:
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-205 leading-relaxed flex items-start gap-1.5 font-medium mb-3">
                      💡 {" "}
                      {customTranslatedResult 
                        ? customTranslatedResult.agileText 
                        : TRANSLATION_PAIRS[selectedTranslationIndex].agileText
                      }
                    </p>
                    <span className="font-sans text-[10px] text-slate-400 block border-t border-slate-905 pt-2 italic leading-relaxed">
                      {customTranslatedResult 
                        ? customTranslatedResult.note 
                        : TRANSLATION_PAIRS[selectedTranslationIndex].translationNote
                      }
                    </span>
                  </>
                )}
              </div>

            </div>

            {/* COLUMN RIGHT: DAILY STANDUP MEME BINGO CARD */}
            <div className="lg:col-span-6 bg-slate-900 border border-slate-850 rounded-2xl p-6 md:p-8 flex flex-col gap-5 relative shadow-2xl">
              <div className="absolute top-0 left-0 w-24 h-24 bg-sky-655/5 rounded-full blur-2xl" />

              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-950 rounded-lg text-sky-450">
                    <Smile className="w-5 h-5 text-sky-450" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-sans font-extrabold text-lg text-white">
                      Survival Standup Bingo
                    </h3>
                    <p className="font-sans text-xs text-slate-400">
                      Survive monotonous calls! Click corporate jargon items to win.
                    </p>
                  </div>
                </div>

                <button
                  onClick={resetBingo}
                  className="font-mono text-[10px] text-slate-400 hover:text-white transition-colors uppercase font-bold py-1 px-2 border border-slate-800 rounded bg-slate-950 cursor-pointer"
                >
                  Shuffle
                </button>
              </div>

              {/* BINGO GRID (5X5) */}
              <div className="grid grid-cols-5 gap-2 select-none">
                {bingoGrid.map((cell, idx) => {
                  const isCenter = idx === 12;
                  return (
                    <button
                      key={idx}
                      onClick={() => toggleBingoCell(idx)}
                      disabled={isCenter}
                      className={`h-[68px] rounded-lg p-1 text-center font-sans break-words outline-none flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative ${
                        isCenter
                          ? 'bg-blue-950/70 border border-blue-500/40 text-blue-300 font-bold text-[9px]'
                          : cell.checked
                            ? 'bg-blue-600 border border-blue-400 text-slate-50 font-bold scale-[0.98] text-[9px]'
                            : 'bg-slate-950 border border-slate-900 hover:border-slate-800 text-[9.5px] text-slate-350'
                      }`}
                    >
                      {/* Check icon overlay */}
                      {cell.checked && (
                        <span className="absolute top-1 right-1 text-blue-200">
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
                <div className="p-3 bg-blue-950 border border-blue-500/40 rounded-xl flex items-center justify-between gap-4 animate-fade-in text-left">
                  <div className="flex items-center gap-2.5">
                    <Award className="w-5 h-5 text-sky-305 shrink-0 animate-bounce" />
                    <div>
                      <span className="font-sans text-xs font-bold text-slate-200 block">
                        Bingo Unlocked ({bingoWinLines} Lines)!
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-wider text-sky-400 block font-semibold">
                        Award Code: STANDUP-BINGO-99
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowCertificate(true)}
                    className="font-sans text-xs font-bold uppercase tracking-wider text-slate-955 bg-gradient-to-tr from-sky-400 to-blue-300 py-1.5 px-3 rounded-lg shadow cursor-pointer text-slate-950 text-slate-950"
                  >
                    Claim Prize
                  </button>
                </div>
              ) : (
                <div className="text-center font-mono text-[10px] text-slate-500 uppercase tracking-widest py-1 border-t border-slate-900/60 mt-1">
                  ⭐ Tip: Squeeze line checks dynamically. Center square is FREE.
                </div>
              )}

              {/* BINGO CERTIFICATE POPUP WINDOW */}
              {showCertificate && (
                <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
                  <div className="bg-slate-900 border border-slate-805 rounded-2xl max-w-md w-full p-6 text-center shadow-2xl relative flex flex-col gap-5">
                    
                    <button 
                      onClick={() => setShowCertificate(false)}
                      className="absolute top-4 right-4 text-slate-450 hover:text-white transition-colors cursor-pointer"
                    >
                      <X className="w-5 h-5" />
                    </button>

                    <div className="mx-auto p-3.5 bg-blue-950 border border-blue-500/20 text-sky-450 rounded-full w-fit">
                      <Award className="w-8 h-8 text-sky-400 stroke-[1.5]" />
                    </div>

                    <div className="flex flex-col gap-1 text-center">
                      <span className="font-mono text-[10px] tracking-wider text-sky-400 block font-bold uppercase">
                        Official Exemption Certificate
                      </span>
                      <h4 className="font-sans font-extrabold text-xl text-white">
                        Standup Exemption Permit
                      </h4>
                    </div>

                    <p className="font-sans text-xs text-slate-350 leading-relaxed px-2">
                      The holder of this credential has achieved high-fidelity **Agile Standup Bingo** patterns. They are officially certified as a **"Certified Agile Buzzword Native"** and are granted a 1-day pass to skip tedious micro-management status calls.
                    </p>

                    <div className="border border-slate-800 p-3 rounded-lg bg-slate-950 font-mono text-[10.5px] text-slate-400 text-left">
                      <div className="flex justify-between">
                        <span>HOLDER STATUS:</span>
                        <span className="text-sky-400 font-bold">VERIFIED EXEMPT</span>
                      </div>
                      <div className="flex justify-between border-t border-slate-900 mt-1.5 pt-1.5">
                        <span>DIGNITARY SIGNATURE:</span>
                        <span className="text-white">Marcus Vance (Managing Principal)</span>
                      </div>
                    </div>

                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          alert("Standup Exemption downloaded! Show this to your Scrummaster instantly.");
                          setShowCertificate(false);
                          resetBingo();
                        }}
                        className="py-2.5 px-5 bg-blue-600 hover:bg-blue-500 text-slate-50 font-sans text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
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

      {/* CORE SUCCESS SECRETS - CASE STUDIES */}
      <section id="case-studies" className="py-24 px-6 md:px-8 bg-slate-950/60 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold">
              Performance Case Records
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              Proven Transformations from the Cleanroom
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              Read exact strategies we deployed to eliminate waste, clear deep pipeline backlogs, and double product speed metrics safely.
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
                      ? 'bg-slate-900 border-blue-500/50 hover:border-blue-500 text-white'
                      : 'bg-transparent border-slate-900 hover:border-slate-800'
                  }`}
                >
                  <span className="font-mono text-[10px] uppercase text-sky-400 font-bold tracking-wider">
                    {cs.industry} • Year {cs.year}
                  </span>
                  <span className="font-bold text-sm text-slate-100 group-hover:text-white line-clamp-2">
                    {cs.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Case Study Detailed View Panel */}
            {(() => {
              const c = CASE_STUDIES[activeCaseIndex];
              return (
                <div className="lg:col-span-8 bg-slate-900 border border-slate-805 rounded-2xl p-6 md:p-8 flex flex-col gap-6 text-left animate-fade-in" key={c.id}>
                  
                  {/* Case Header */}
                  <div className="flex flex-col gap-2 border-b border-slate-805 pb-5">
                    <span className="font-mono text-[10px] tracking-widest text-sky-400 uppercase block font-semibold bg-blue-950/30 w-fit px-2 py-1 rounded border border-blue-900/40">
                      Client Case Profile: {c.client}
                    </span>
                    <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-100 mt-2">
                      {c.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-slate-350 italic mt-1 leading-relaxed">
                      "{c.brief}"
                    </p>
                  </div>

                  {/* Dynamic Metric Grid */}
                  <div className="grid grid-cols-3 gap-4 py-1.5">
                    {c.metrics.map((m, idx) => (
                      <div key={idx} className="bg-slate-950 border border-slate-905 p-3 rounded-lg text-left">
                        <span className="font-mono text-base sm:text-xl font-bold text-sky-400 block">
                          {m.value}
                        </span>
                        <span className="font-sans text-[10px] text-slate-400 uppercase tracking-wider block font-medium mt-0.5">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Challenge vs Strategy block */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                    <div className="flex flex-col gap-2.5">
                      <span className="font-mono text-[10px] uppercase text-slate-405 font-bold tracking-wider text-rose-455 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block shrink-0" />
                        Acutely Stalled Challenge:
                      </span>
                      <p className="font-sans text-slate-300 leading-relaxed bg-slate-950/40 p-3 border border-slate-905 rounded-lg">
                        {c.challenge}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                      <span className="font-mono text-[10px] uppercase text-slate-405 font-bold tracking-wider text-sky-455 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block shrink-0" />
                        Custom Strategic Pivot:
                      </span>
                      <p className="font-sans text-slate-300 leading-relaxed bg-slate-950/40 p-3 border border-slate-905 rounded-lg">
                        {c.strategy}
                      </p>
                    </div>
                  </div>

                  {/* Outcome block */}
                  <div className="bg-slate-955 p-4 rounded-xl border border-blue-500/20 bg-blue-950/40 text-xs sm:text-sm flex flex-col gap-1.5">
                    <span className="font-mono text-[10px] uppercase text-sky-305 font-extrabold tracking-wider block">
                      The Value Outcome Realized:
                    </span>
                    <p className="font-sans text-slate-250 leading-relaxed font-medium">
                      {c.outcome}
                    </p>
                  </div>

                </div>
              );
            })()}

          </div>

        </div>
      </section>

      {/* LEADERSHIP DIRECTORY TEAM */}
      <section id="team" className="py-24 px-6 md:px-8 bg-slate-950 border-b border-slate-900 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold">
              The Flow Craftsmen
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              Meet Our Senior Advisory Directors
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              We are authors, Scrum masters, and release pipeline architects with years unblocking high-friction corporate processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {TEAM.map((co) => (
              <div 
                key={co.id}
                className="group bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col"
              >
                {/* Image panel */}
                <div className="relative aspect-square overflow-hidden bg-slate-950 border-b border-slate-850">
                  <img
                    src={co.photo}
                    alt={co.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Subtle experience badge overlay */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur border border-slate-700 font-mono text-[9px] text-sky-400 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                    {co.experience} Years Active
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 flex flex-col gap-3 flex-1">
                  
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-sans font-bold text-md text-slate-105 select-all text-white">
                      {co.name}
                    </h3>
                    <span className="font-sans text-xs text-sky-400 font-semibold min-h-[36px] block">
                      {co.role}
                    </span>
                  </div>

                  <p className="font-sans text-slate-350 text-xs leading-normal select-all">
                    {co.bio}
                  </p>

                  <div className="mt-auto border-t border-slate-905 pt-3">
                    <span className="font-mono text-[9.5px] uppercase tracking-wider text-slate-450 block font-bold mb-1.5">
                      Advisory Specialties:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {co.specialties.map((spec, sIdx) => (
                        <span key={sIdx} className="font-sans text-[9px] px-2 py-0.5 rounded bg-slate-950/70 border border-slate-805 text-slate-300 inline-block capitalize">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-slate-905 pt-2 font-mono text-[8px] text-slate-500 flex justify-between select-all italic uppercase">
                    <span>Alma Mater:</span>
                    <span className="text-slate-400 font-sans tracking-wide leading-tight">{co.almaMater}</span>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* STRATEGY BOOKING ENGINE */}
      <section id="scheduler" className="py-24 px-6 md:px-8 bg-slate-950/60 relative">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[0.2em] text-sky-400 uppercase font-semibold">
              The Advisor War Room
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl tracking-tight text-white">
              Secure a Free Backlog Flow Strategy Call
            </h2>
            <p className="font-sans text-slate-400 text-sm sm:text-base leading-relaxed">
              No pressure, no hard sales pitch. Book a secure, 30-minute operational review of your active delivery roadblocks with a Senior Principal Advisor today.
            </p>
          </div>

          {/* Booking card container */}
          <div className="bg-slate-900 border border-slate-850 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full blur-[80px]" />

            {!isBooked ? (
              <form onSubmit={handleBookSession} className="p-6 md:p-10 flex flex-col gap-6 text-left">
                
                {/* Advisor Selector row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Select Primary Advisor:
                    </label>
                    <select
                      value={advisorId}
                      onChange={(e) => setAdvisorId(e.target.value)}
                      className="bg-slate-950 border border-slate-800 focus:border-blue-500/50 rounded-lg p-3 text-slate-100 outline-none font-sans text-xs uppercase tracking-wide cursor-pointer font-semibold"
                    >
                      <option value="marcus-agile">Marcus Vance (Enterprise & Scaling)</option>
                      <option value="elena-scrum">Dr. Elena Rostova (DevOps & Engineering Speed)</option>
                      <option value="sarah-culture">Sarah Jenkins (Leadership Culture Shift)</option>
                      <option value="david-backlog">David Thorne (User Story Slicing)</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Target Audit Focus Area:
                    </label>
                    <select
                      value={focusArea}
                      onChange={(e) => setFocusArea(e.target.value)}
                      className="bg-slate-950 border border-slate-800 focus:border-blue-500/50 rounded-lg p-3 text-slate-105 outline-none font-sans text-xs uppercase tracking-wide cursor-pointer font-semibold"
                    >
                      <option value="Enterprise Scaling & Redundancies">Enterprise Scaling & Redundancy</option>
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
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Choose Available Date:
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="bg-slate-950 border border-slate-800 focus:border-blue-500/50 rounded-lg p-3 text-slate-100 outline-none uppercase font-mono tracking-widest"
                    />
                  </div>

                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Target Advisory Time:
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="bg-slate-950 border border-slate-800 focus:border-blue-500/50 rounded-lg p-3 text-slate-100 outline-none font-sans text-xs font-semibold"
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
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Full Client Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CEO / Lead Engineer"
                      value={clientInfo.name}
                      onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                      className="bg-slate-950 border border-slate-805 focus:border-blue-500/50 rounded-lg p-3 text-slate-100 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Corporate Work Email:
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={clientInfo.email}
                      onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                      className="bg-slate-950 border border-slate-805 focus:border-blue-500/50 rounded-lg p-3 text-slate-100 outline-none"
                    />
                  </div>
                </div>

                {/* Company Name / Title row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2">
                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Company / Organization name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Venture Capital plc / Tech LLC"
                      value={clientInfo.company}
                      onChange={(e) => setClientInfo({...clientInfo, company: e.target.value})}
                      className="bg-slate-950 border border-slate-805 focus:border-blue-500/50 rounded-lg p-3 text-slate-110 outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2 font-sans text-xs">
                    <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                      Your Corporate Role:
                    </label>
                    <input
                      type="text"
                      placeholder="Lead Product Owner / VP Infrastructure"
                      value={clientInfo.role}
                      onChange={(e) => setClientInfo({...clientInfo, role: e.target.value})}
                      className="bg-slate-950 border border-slate-805 focus:border-blue-500/50 rounded-lg p-3 text-slate-110 outline-none"
                    />
                  </div>
                </div>

                {/* Notes box */}
                <div className="flex flex-col gap-2 font-sans text-xs">
                  <label className="font-mono text-[10px] text-slate-400 uppercase font-bold tracking-wider">
                    Roadblock description & Background Notes:
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly detail what are your top agile bottlenecks (e.g. Standup fatigue, QA lag, Story Point arguments...)"
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    className="bg-slate-950 border border-slate-805 focus:border-blue-500/50 rounded-lg p-3.5 text-slate-100 outline-none resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="py-4 bg-gradient-to-r from-blue-700 to-sky-505 bg-blue-600 hover:bg-blue-500 border border-blue-400/20 text-white font-sans font-bold uppercase tracking-widest text-xs rounded-xl shadow-xl shadow-blue-505/10 cursor-pointer text-center"
                >
                  Generate Strategic Invitation & Secure Booking coordinates
                </button>

              </form>
            ) : (
              // BOOKED CONFIRMATION CARD SUCCESS SCREEN
              <div className="p-8 md:p-12 text-center flex flex-col items-center gap-6 animate-fade-in">
                
                <div className="p-4 bg-blue-950/80 border border-blue-500/25 text-sky-400 rounded-full w-fit">
                  <CheckCircle className="w-10 h-10 text-sky-400 stroke-[1.5] animate-scale-up" />
                </div>

                <div className="flex flex-col gap-1.5 max-w-lg">
                  <span className="font-mono text-[10px] tracking-widest text-sky-450 block font-bold uppercase">
                    Maturity transformation brief is registered
                  </span>
                  <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white">
                    Agile Strategy Booking Verified!
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-350 leading-relaxed mt-2">
                    Congratulations **{clientInfo.name}**, you have locked in your strategy audit regarding **"{focusArea}"** with **{
                      advisorId === 'marcus-agile' ? 'Marcus Vance' :
                      advisorId === 'elena-scrum' ? 'Dr. Elena Rostova' :
                      advisorId === 'sarah-culture' ? 'Sarah Jenkins' : 'David Thorne'
                    }** for **{date}** at **{time}**.
                  </p>
                </div>

                <div className="w-full max-w-md border border-slate-800 p-4.5 rounded-xl bg-slate-950 text-left font-mono text-[11px] text-slate-400 flex flex-col gap-1.5">
                  <div className="flex justify-between">
                    <span>REGISTRY CLIENT:</span>
                    <span className="text-white font-sans font-semibold">{clientInfo.name} ({clientInfo.company})</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VERIFICATION CODE:</span>
                    <span className="text-sky-400">APEX-FLOW-{Math.floor(Math.random() * 9000 + 1000)}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-900 pt-1.5 mt-1.5">
                    <span>COORDINATES SETUP:</span>
                    <span className="text-emerald-400 font-bold">SECURE GOOGLE MEET LINK INBOXED</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsBooked(false);
                    setClientInfo({ name: '', email: '', company: '', role: '', notes: '' });
                  }}
                  className="font-mono text-xs text-sky-400 hover:text-white transition-colors cursor-pointer py-1 block"
                >
                  Schedule Another Diagnostic Briefing
                </button>

              </div>
            )}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6 md:px-8 text-slate-405 font-sans relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-blue-950 rounded-lg text-sky-455">
              <Layers className="w-4 h-4 text-sky-400" />
            </div>
            <span className="font-mono text-xs tracking-widest text-slate-300 font-bold uppercase">
              Apex Agile Advisory Group
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <span>Continuous Cadence</span>
            <span>•</span>
            <span>Client Centered</span>
            <span>•</span>
            <span>Psychological Safety First</span>
            <span>•</span>
            <span>Pragmatic Release Trains</span>
          </div>

          <p className="text-[10.5px] font-mono text-slate-600 uppercase tracking-wider">
            © 2026 Apex Agile Advisory. All rights reserved. • High Throughput Delivery certified.
          </p>

        </div>
      </footer>

    </div>
  );
}
