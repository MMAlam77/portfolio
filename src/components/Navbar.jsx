import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaMoon, FaSun, FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const links = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const mobileNavVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 shadow-lg z-50">
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600">Mudassir</h1>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 text-lg">
          {links.map((link, index) => (
            <motion.div
              key={link}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <ScrollLink
                to={link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                className="cursor-pointer capitalize text-gray-700 dark:text-white transition duration-300"
              >
                {link}
              </ScrollLink>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
            </motion.div>
          ))}
        </nav>

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="text-2xl text-blue-500 hover:text-blue-700 transition mr-4"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {/* Mobile Hamburger */}
        <button className="text-3xl text-blue-500 lg:hidden" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg flex flex-col p-6 z-50"
          >
            <button className="text-3xl text-blue-500 mb-8 self-end" onClick={() => setMenuOpen(false)}>
              <FaTimes />
            </button>

            <nav className="flex flex-col gap-6 text-lg">
              {links.map((link, index) => (
                <motion.div
                  key={link}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={mobileNavVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ScrollLink
                    to={link}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-70}
                    onClick={() => setMenuOpen(false)}
                    activeClass="active"
                    className="cursor-pointer capitalize text-gray-700 dark:text-white transition duration-300 hover:text-blue-500"
                  >
                    {link}
                  </ScrollLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}
          className="fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 transition z-50"
        >
          <FaArrowUp />
        </motion.button>
      )}

      {/* Active link underline styling */}
      <style>{`
        .active {
          color: #3B82F6; /* blue-500 */
          font-weight: 600;
        }
        .active::after {
          content: '';
          display: block;
          width: 100%;
          height: 2px;
          background-color: #3B82F6;
          margin-top: 4px;
          transition: width 0.3s;
        }
      `}</style>
    </header>
  );
}
