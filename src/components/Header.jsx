import React from 'react';
import { Play, Download } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-pink-500 via-rose-500 to-orange-400 grid place-items-center shadow-lg shadow-pink-500/20">
            <Play size={18} className="-mr-0.5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">ReelLife</span>
          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-neutral-800 text-neutral-300 border border-neutral-700">Regional OTT</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#languages" className="hover:text-white transition-colors">Languages</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
        <a
          href="#download"
          className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-md bg-white text-black hover:bg-neutral-200 transition-colors"
        >
          <Download size={18} />
          Download App
        </a>
      </div>
    </header>
  );
}
