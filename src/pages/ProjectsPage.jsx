import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectImg1 from "../assets/project1.png";
import ProjectImg2 from "../assets/project2.png";
import "aos/dist/aos.css";
import AOS from "aos";

export default function ProjectsPage() {
  const [loading, setLoading] = useState({ project1: false, project2: false });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleDemoClick = (project) => {
    setLoading((prev) => ({ ...prev, [project]: true }));

    setTimeout(() => {
      if (project === "project1") {
        window.open("https://ecom-omega-eosin.vercel.app/", "_blank");
      } else if (project === "project2") {
        window.open("https://mb-plays.vercel.app/", "_blank");
      }
      setLoading((prev) => ({ ...prev, [project]: false }));
    }, 800);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white flex flex-col items-center p-6 gap-8 scroll-mt-24 transition-colors duration-300">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-blue-600 mb-1"
      >
        Featured Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-2xl"
      >
        Showcasing my best work in web development and design
      </motion.p>

      {/* Projects Section */}
      <div className="flex flex-col gap-10 w-full max-w-7xl">
        {/* Project 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-6"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={ProjectImg1}
            alt="E-Commerce Store"
            className="w-full lg:w-1/2 h-[200px] object-cover rounded-lg shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3 w-full lg:w-1/2"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              E-Commerce Store
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              A fully functional e-commerce platform built using React, Node.js,
              MongoDB, and Tailwind CSS. Features seamless user experience,
              modern design, product management, and secure checkout.
            </p>

            <div className="flex flex-wrap gap-2 mt-1">
              {["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"].map(
                (tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                )
              )}
            </div>

            <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Modern Product Display</li>
              <li>Responsive Design</li>
              <li>User Authentication</li>
              <li>Shopping Cart & Checkout</li>
              <li>Dynamic Product Management</li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-wrap gap-2 mt-3">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDemoClick("project1")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 shadow-md transition"
              >
                <FaExternalLinkAlt className="text-sm" />
                {loading.project1 ? "Loading..." : "Live Demo"}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 dark:bg-gray-700 text-white rounded-lg font-semibold text-sm hover:bg-gray-800 shadow-md transition"
              >
                <FaGithub className="text-sm" /> View Code
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        {/* ================= PROJECT 2 ================= */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row-reverse items-center gap-6"
        >

          <motion.img
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            src={ProjectImg2}
            alt="MB Plays"
            className="w-full lg:w-1/2 h-[200px] object-cover rounded-lg shadow-lg"
          />

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-3 w-full lg:w-1/2"
          >

            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white">
              Watch All Turkish Series with MB Plays
            </h3>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
              A responsive Turkish series website where users can watch
              Turkish series with Urdu subtitles. Built using React,
              Tailwind CSS and Node.js for a smooth user experience.
            </p>

            <div className="flex flex-wrap gap-2 mt-1">

              {["React", "Tailwind CSS", "Node.js"].map((tech) => (

                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-2.5 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </motion.span>

              ))}

            </div>

            <ul className="list-disc pl-4 text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>Audience-Friendly Playing Animations</li>
              <li>Responsive Design</li>
              <li>All Turkish Series Available</li>
              <li>User-Friendly Interface</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-3">

              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDemoClick("project2")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 shadow-md"
              >
                <FaExternalLinkAlt />
                {loading.project2 ? "Loading..." : "Live Demo"}
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg font-semibold text-sm hover:bg-gray-800 shadow-md"
              >
                <FaGithub />
                View Code
              </motion.a>

            </div>

          </motion.div>

        </motion.div>

      </div>

    </div>
  );
}
        