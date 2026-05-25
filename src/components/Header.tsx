import React, { useState, useEffect } from 'react';
import { Layers, Menu, X, Calendar, Sparkles } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { label: 'Solutions', id: 'services' },
    { label: 'AI Speed Builder', id: 'ai-speed-builder' },
    { label: 'Agility Assessor', id: 'assessor' },
    { label: 'Meme Corner', id: 'agile-memes' },
    { label: 'Translator & Bingo', id: 'interactive-fun' },
    { label: 'Success Cases', id: 'case-studies' },
    { label: 'The Consultants', id: 'team' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-pink-100 py-3 shadow-[0_8px_32px_rgba(236,72,153,0.06)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="p-2 bg-gradient-to-tr from-pink-500 via-yellow-405 to-sky-450 rounded-lg group-hover:scale-110 transition-all duration-300 shadow-lg shadow-pink-500/25">
            <span className="text-lg leading-none select-none">🦄</span>
          </div>
          <div>
            <span className="font-sans font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-indigo-600 uppercase text-sm md:text-md block leading-tight">
              Jaro Sidor Consulting
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-pink-500 font-bold uppercase block">
              Fairy Dust Agility
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-sans text-xs font-bold uppercase tracking-wider transition-colors duration-200 hover:text-pink-600 relative py-1 cursor-pointer ${
                activeSection === item.id ? 'text-pink-600' : 'text-slate-700'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-pink-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('scheduler')}
            className="flex items-center gap-2 font-sans text-xs font-black uppercase tracking-widest bg-gradient-to-r from-pink-500 via-yellow-405 to-indigo-600 hover:opacity-95 text-white px-5.5 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 active:scale-95 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            Book Advisory Briefing ☎️
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-pink-600 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 border-b border-pink-100 absolute top-full left-0 right-0 py-6 px-6 shadow-2xl animate-fade-in backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-left text-sm font-extrabold uppercase tracking-wider py-2.5 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-pink-600 border-l-2 border-pink-500 pl-3' 
                    : 'text-slate-650 hover:text-pink-600 pl-3 border-l border-pink-10'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('scheduler')}
              className="mt-4 flex items-center justify-center gap-2 font-sans font-black uppercase tracking-widest bg-gradient-to-r from-pink-500 via-yellow-405 to-indigo-600 text-white py-3.5 rounded-xl text-xs w-full cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Advisory Briefing
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
