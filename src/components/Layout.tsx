import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'О нас', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'Кейсы', path: '/cases' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#121212] text-[#E2DFD8]">
      <header className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 py-6 md:px-12 md:py-8 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="text-2xl tracking-[0.2em] font-serif uppercase relative z-50">
          SÉLECTION
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 text-sm tracking-widest uppercase relative z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-white transition-colors duration-300 ${
                location.pathname === link.path ? 'opacity-100' : 'opacity-60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden relative z-50 text-[#E2DFD8]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#121212] flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-3xl font-serif tracking-widest uppercase ${
                  location.pathname === link.path ? 'opacity-100' : 'opacity-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="border-t border-[#E2DFD8]/10 py-12 px-6 md:px-12 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-serif tracking-[0.2em] mb-2">SÉLECTION</h3>
            <p className="text-sm opacity-50 font-sans tracking-wide">Бутик-агентство камерных событий</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm uppercase tracking-widest opacity-70">
            <a href="mailto:irina@selection-agency.ru" className="hover:opacity-100 transition-opacity">irina@selection-agency.ru</a>
            <a href="tel:+79152485802" className="hover:opacity-100 transition-opacity">+7 915 248 5802</a>
            <a href="https://t.me/ira_troyanova" className="hover:opacity-100 transition-opacity">Telegram</a>
          </div>
        </div>
        <div className="text-center text-xs opacity-30 mt-12 tracking-wider">
          &copy; {new Date().getFullYear()} SÉLECTION. ВСЕ ПРАВА ЗАЩИЩЕНЫ.
        </div>
      </footer>
    </div>
  );
}