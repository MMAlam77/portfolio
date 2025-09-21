import { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileImg from '../assets/doc.png';
import { FaUserGraduate, FaLaptopCode, FaBook } from 'react-icons/fa';

export default function ExperiencePage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 py-6 transition-colors duration-300 scroll-mt-24">
      {/* Heading */}
      <h2 data-aos="fade-down" className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-2">
        Experience & Education
      </h2>
      <p data-aos="fade-up" className="text-center text-gray-600 dark:text-gray-300 mb-8">
        My academic journey and development experience
      </p>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 w-full max-w-7xl">
        {/* Profile Image */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-1/2 max-w-xs sm:max-w-sm bg-white dark:bg-gray-800 shadow-2xl rounded-lg overflow-hidden text-center lg:order-2"
          data-aos="zoom-in"
        >
          <div className="aspect-[3/4]">
            <img src={ProfileImg} alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-1">Mudassir Abdullah</h3>
            <p className="text-blue-600 mb-4">Student Developer</p>
            <div className="flex justify-around text-gray-700 dark:text-gray-300 text-sm">
              <div>
                <p className="text-xl font-bold">2+</p>
                <p>Years Coding</p>
              </div>
              <div>
                <p className="text-xl font-bold">2</p>
                <p>Projects</p>
              </div>
              <div>
                <p className="text-xl font-bold">5+</p>
                <p>Tech Stack</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:order-1">
          {/* Card 1 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4 mb-2">
              <FaUserGraduate className="text-blue-500 text-2xl" />
              <h4 className="text-xl font-semibold">ICS Student</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              Army Public College System <span className="text-blue-600">(2022 - Present)</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Currently pursuing ICS with a focus on Computer Science and Mathematics.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4 mb-2">
              <FaLaptopCode className="text-blue-500 text-2xl" />
              <h4 className="text-xl font-semibold">Web Developer</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              Personal Projects <span className="text-blue-600">(2021 - Present)</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Building web applications using React and modern technologies.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-4 mb-2">
              <FaBook className="text-blue-500 text-2xl" />
              <h4 className="text-xl font-semibold">Self-Taught Developer</h4>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-1">
              Online Learning <span className="text-blue-600">(2021 - Present)</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Continuously learning through online platforms and building web development skills.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
