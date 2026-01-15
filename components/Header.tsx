
import React from 'react';

interface HeaderProps {
  onOpenForm: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenForm }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center space-x-4 sm:space-x-8">
          <a href="/" className="text-xl sm:text-2xl font-black tracking-tighter font-apple-display hover:opacity-70 transition-opacity">
            REELMYSHOP<span className="text-pink-500 italic">.COM</span>
          </a>
          <nav className="hidden lg:flex space-x-8 text-sm font-semibold text-gray-500">
            <a href="#benefits" className="hover:text-black transition-colors">Our Method</a>
            <a href="#pricing" className="hover:text-black transition-colors">Plans</a>
            <a href="#" className="hover:text-black transition-colors">Showcase</a>
          </nav>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4">
          <button
            onClick={onOpenForm}
            className="hidden xs:block text-xs sm:text-sm font-bold px-3 sm:px-4 py-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            Login
          </button>
          <button
            onClick={onOpenForm}
            className="bg-black text-white px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-full hover:bg-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all active:scale-95 whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
