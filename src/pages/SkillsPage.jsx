import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import skillsData from '../data/skillsData';

export default function SkillsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { ref, inView } = useInView({ threshold: 0.3 });

  const sections = skillsData;

  const [fillPercents, setFillPercents] = useState(sections.map(section => section.skills.map(() => 0)));

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setFillPercents(prev =>
          prev.map((section, secIndex) =>
            section.map((value, skillIndex) =>
              value < sections[secIndex].skills[skillIndex].level
                ? value + 1
                : sections[secIndex].skills[skillIndex].level
            )
          )
        );
      }, 15);
      return () => clearInterval(interval);
    }
  }, [inView, sections]);

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-8 gap-12 mt-24 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-4" data-aos="fade-down">
        Technical Skills
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-8" data-aos="fade-down">
        My expertise in modern web development technologies
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {sections.map((section, secIndex) => (
          <motion.div
            key={secIndex}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-aos="zoom-in"
          >
            <h4 className={`text-2xl font-semibold mb-4 text-center ${section.color}`}>
              {section.title}
            </h4>
            {section.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {fillPercents[secIndex][skillIndex]}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                  <div
                    className={`${skill.color} h-3 rounded-full transition-all duration-500`}
                    style={{ width: `${fillPercents[secIndex][skillIndex]}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-500 dark:text-gray-400" data-aos="fade-up">
        Always learning and exploring new technologies to stay at the forefront of web development.
      </p>
    </div>
  );
}
