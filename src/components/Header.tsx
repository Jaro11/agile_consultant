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
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/65 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="p-2 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-lg group-hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20">
            <Layers className="w-5 h-5 text-slate-100 stroke-[2.2]" />
          </div>
          <div>
            <span className="font-sans font-extrabold tracking-widest text-slate-100 uppercase text-md block leading-tight">
              Apex Agile
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-sky-400 uppercase block">
              Advisory Group
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-sans text-xs font-semibold uppercase tracking-wider transition-colors duration-200 hover:text-sky-400 relative py-1 cursor-pointer ${
                activeSection === item.id ? 'text-sky-400' : 'text-slate-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('scheduler')}
            className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest bg-blue-600 hover:bg-blue-500 text-slate-50 px-5.5 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95 cursor-pointer border border-blue-400/25"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-100" />
            Book Advisory Briefing
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 absolute top-full left-0 right-0 py-6 px-6 shadow-2xl animate-fade-in backdrop-blur-xl">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-sans text-left text-sm font-bold uppercase tracking-wider py-2.5 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-sky-400 border-l-2 border-sky-400 pl-3' 
                    : 'text-slate-400 hover:text-slate-100 pl-3 border-l border-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('scheduler')}
              className="mt-4 flex items-center justify-center gap-2 font-sans font-bold uppercase tracking-widest bg-blue-600 text-slate-50 py-3.5 rounded-lg text-xs w-full cursor-pointer border border-blue-400/20"
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
