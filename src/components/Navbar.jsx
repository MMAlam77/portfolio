import { useState, useEffect } from 'react';
import { FaBars, FaMoon, FaSun, FaTimes, FaArrowUp, FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaCode, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import ProfileImg from '../assets/doc.png';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const nextMode = !prev;
      if (nextMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return nextMode;
    });
  };

  const handleNavLinkClick = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : '';
  }, [sidebarOpen]);

  // Animation Variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
        delay: index * 0.1,
      },
    }),
  };

  useEffect(() => {
    const phrases = ['MERN Stack Developer', 'React Specialist', 'UI/UX Designer'];
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const typeLoop = setInterval(() => {
      const current = phrases[phraseIndex];

      if (!deleting && charIndex < current.length) {
        setTypedText(current.slice(0, charIndex + 1));
        charIndex += 1;
      } else if (deleting && charIndex > 0) {
        setTypedText(current.slice(0, charIndex - 1));
        charIndex -= 1;
      } else {
        deleting = !deleting;
        if (!deleting) {
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
    }, 90);

    return () => clearInterval(typeLoop);
  }, []);

  const links = [
    { name: 'home', icon: FaHome },
    { name: 'about', icon: FaUser },
    { name: 'experience', icon: FaBriefcase },
    { name: 'projects', icon: FaProjectDiagram },
    { name: 'skills', icon: FaCode },
    { name: 'contact', icon: FaEnvelope },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between px-4 shadow-sm bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-700 backdrop-blur lg:hidden">
        <div className="text-base font-semibold text-slate-900 dark:text-white">
          Mudassir
        </div>

        <button
          onClick={toggleDarkMode}
          className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-500 dark:bg-cyan-500 dark:hover:bg-cyan-400"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>

        <button
          onClick={() => setSidebarOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </header>

      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`fixed inset-0 bg-slate-950/40 transition-opacity ${sidebarOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setSidebarOpen(false)}
        />
        <aside
          className={`fixed left-0 top-0 z-50 h-full w-[calc(100%-2rem)] max-w-sm overflow-y-auto rounded-r-3xl bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.4)] transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="mb-6">
            <button
              onClick={() => setSidebarOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/20 bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-white">Menu</h2>
              <p className="text-xs text-slate-200">Tap a section to close</p>
            </div>
          </div>

          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="h-20 w-20 overflow-hidden rounded-full border border-blue-300 shadow-md">
              <img src={ProfileImg} alt="Mudassir Abdullah" className="h-full w-full object-cover" />
            </div>
            <h1 className="text-xl font-semibold text-white">Mudassir</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Front-end Developer</p>
          </div>

          <nav className="flex flex-col gap-2">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={link.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ScrollLink
                    to={link.name}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="active"
                    onClick={handleNavLinkClick}
                    className="group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-300/20 hover:text-white"
                  >
                    <IconComponent className="text-base text-white transition group-hover:text-white" />
                    <span className="capitalize">{link.name}</span>
                  </ScrollLink>
                </motion.div>
              );
            })}
          </nav>

          <div className="mt-10 border-t border-white/20 pt-6 space-y-3">
            <button
              onClick={() => {
                toggleDarkMode();
                setSidebarOpen(false);
              }}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/20"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
              <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
            </button>
            <p className="text-center text-xs text-slate-200">© 2024 Mudassir</p>
          </div>
        </aside>
      </div>

      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 flex-col justify-between rounded-r-[2rem] bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 dark:bg-gradient-to-b dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.35)] lg:flex border-r border-blue-300 dark:border-slate-700/70">
        <div>
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-3 h-16 w-16 overflow-hidden rounded-full border-2 border-blue-400 dark:border-cyan-400 shadow-md">
              <img src={ProfileImg} alt="Mudassir Abdullah" className="h-full w-full object-cover" />
            </div>
            <h1 className="text-xl font-semibold text-white dark:text-white">Mudassir</h1>
            <p className="mt-0.5 min-h-4 text-xs font-medium tracking-wide text-white dark:text-slate-200">
              {typedText}
              <span className="ml-0.5 animate-pulse">|</span>
            </p>
          </div>

          <div className="mb-5 h-px bg-gradient-to-r from-slate-300 via-blue-400 dark:via-cyan-400 to-slate-300"></div>

          <nav className="flex flex-col gap-1.5">
            {links.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={link.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ScrollLink
                    to={link.name}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    activeClass="active"
                    className="group cursor-pointer flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium capitalize text-white dark:text-slate-200 transition duration-300 hover:bg-blue-300 dark:hover:bg-cyan-500/15 hover:text-white dark:hover:text-white"
                  >
                    <IconComponent className="text-sm text-white dark:text-slate-300 transition group-hover:scale-110 group-hover:text-white dark:group-hover:text-cyan-300" />
                    <span>{link.name}</span>
                  </ScrollLink>
                </motion.div>
              );
            })}
          </nav>
        </div>

        <div className="space-y-3 border-t border-slate-200 dark:border-slate-700 pt-4">
          <button
            onClick={toggleDarkMode}
            className="flex cursor-pointer w-full items-center justify-center gap-2 rounded-lg bg-blue-600 dark:bg-cyan-500 px-3 py-2 text-sm font-medium text-white transition duration-300 hover:bg-blue-500 dark:hover:bg-cyan-400"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
            <span>{darkMode ? 'Light' : 'Dark'} Mode</span>
          </button>
          <p className="text-center text-[11px] text-white-100 dark:text-white-300">© 2024 Mudassir</p>
        </div>
      </aside>

      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
          className="fixed bottom-6 right-8 z-50 rounded-full bg-slate-900 p-3 text-cyan-300 shadow-lg transition hover:bg-slate-800"
        >
          <FaArrowUp />
        </motion.button>
      )}

      <style>{`
        .active {
          background: rgba(34, 211, 238, 0.16);
          color: #ffffff;
          font-weight: 600;
          border-left: 3px solid #22d3ee;
          padding-left: calc(0.75rem - 3px);
          box-shadow: inset 0 0 0 1px rgba(34, 211, 238, 0.15);
        }
      `}</style>
    </>
  );
}
