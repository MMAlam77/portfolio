import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileImg from "../assets/doc.png";
import { FaCode, FaLightbulb, FaBrain } from "react-icons/fa";

export default function AboutPage() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const imageAnimation = useAnimation();
  const contentAnimation = useAnimation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (inView) {
      imageAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
      contentAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    }
  }, [inView, imageAnimation, contentAnimation]);

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <div
      id="about"
      ref={ref}
      className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 py-12 gap-12 overflow-x-hidden transition-colors duration-300 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={imageAnimation}
        className="w-1/2 max-w-xs sm:max-w-md lg:max-w-lg"
        data-aos="zoom-in"
      >
        <div className="aspect-[3/4] bg-white dark:bg-gray-800 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-lg overflow-hidden transition-transform hover:scale-105">
          <img
            src={ProfileImg}
            alt="About"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={contentAnimation}
        className="flex-1 max-w-3xl space-y-6 text-center lg:text-left"
        data-aos="fade-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-600 animate-pulse">
          Passionate About{" "}
          <span className="text-blue-800 dark:text-blue-400">Creating</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Hey there! I’m a second-year ICS student at Army Public College
          System with a burning passion for web development. My journey in
          coding started with curiosity and has evolved into a deep love for
          creating beautiful, functional websites.
        </p>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I work with technologies like{" "}
          <span className="text-blue-500 font-semibold">React</span>,{" "}
          <span className="text-blue-500 font-semibold">Node.js</span>,{" "}
          <span className="text-blue-500 font-semibold">MongoDB</span>, and{" "}
          <span className="text-blue-500 font-semibold">Tailwind CSS</span> to
          create seamless and fast web experiences.
        </p>

        {/* Focus & Tech Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
          <div data-aos="fade-right">
            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              Current Focus
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
              <li>• Computer Science</li>
              <li>• Mathematics</li>
              <li>• Web Development</li>
            </ul>
          </div>

          <div data-aos="fade-left">
            <h4 className="text-lg sm:text-xl font-semibold mb-2">
              Tech Stack
            </h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-base sm:text-lg">
              <li>• React.js</li>
              <li>• JavaScript</li>
              <li>• Tailwind CSS</li>
            </ul>
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center mt-8">
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-[10rem] text-center transition-all cursor-pointer"
            data-aos="fade-up"
          >
            <FaCode className="text-blue-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">Coding Enthusiast</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Creating elegant solutions through code
            </p>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-[10rem] text-center transition-all cursor-pointer"
            data-aos="fade-up"
          >
            <FaBrain className="text-blue-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">Problem Solver</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Love tackling challenges and finding solutions
            </p>
          </motion.div>

          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-[10rem] text-center transition-all cursor-pointer col-span-2 sm:col-span-1"
            data-aos="fade-up"
          >
            <FaLightbulb className="text-blue-500 text-3xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">Creative Mind</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Bringing ideas to life with modern designs
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
