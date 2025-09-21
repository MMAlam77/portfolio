import { useState, useEffect } from "react";
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
        window.open("https://prescripto-fawn-gamma.vercel.app/", "_blank");
      }
      setLoading((prev) => ({ ...prev, [project]: false }));
    }, 800);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white flex flex-col items-center p-8 gap-12 scroll-mt-24 transition-colors duration-300">
      {/* Heading */}
      <h2
        data-aos="fade-down"
        className="text-4xl font-bold text-center text-blue-600 mb-2"
      >
        Featured Projects
      </h2>

      <p
        data-aos="fade-up"
        className="text-center text-gray-600 dark:text-gray-300 mb-8"
      >
        Showcasing my best work in web development and design
      </p>

      {/* Projects Section */}
      <div className="flex flex-col gap-16 w-full max-w-7xl">
        {/* Project 1 */}
        <div
          data-aos="fade-right"
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          <img
            src={ProjectImg1}
            alt="E-Commerce Store"
            className="w-full lg:w-1/2 h-[300px] object-cover rounded-xl shadow-2xl"
          />

          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              E-Commerce Store
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              A fully functional e-commerce platform built using React, Node.js,
              MongoDB, and Tailwind CSS. Features seamless user experience,
              modern design, product management, and secure checkout.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "Node.js", "MongoDB", "Tailwind CSS", "Express"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Modern Product Display</li>
              <li>Responsive Design</li>
              <li>User Authentication</li>
              <li>Shopping Cart & Checkout</li>
              <li>Dynamic Product Management</li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-nowrap gap-3 mt-4">
              <button
                onClick={() => handleDemoClick("project1")}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg font-semibold text-sm sm:text-lg hover:bg-blue-500 hover:text-white active:scale-95 transition transform hover:translate-y-1 hover:shadow-lg shadow-gray-400 dark:shadow-gray-700 whitespace-nowrap"
              >
                <FaExternalLinkAlt className="text-base sm:text-xl" />
                {loading.project1 ? "Loading..." : "Live Demo"}
              </button>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg font-semibold text-sm sm:text-lg hover:bg-blue-500 hover:text-white active:scale-95 transition transform hover:translate-y-1 hover:shadow-lg shadow-gray-400 dark:shadow-gray-700 whitespace-nowrap"
              >
                <FaGithub className="text-base sm:text-xl" /> View Code
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div
          data-aos="fade-left"
          className="flex flex-col lg:flex-row-reverse items-center gap-12"
        >
          <img
            src={ProjectImg2}
            alt="Doctor Appointment"
            className="w-full lg:w-1/2 h-[300px] object-cover rounded-xl shadow-2xl"
          />

          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Doctor Appointment App
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              A responsive appointment booking app where patients can schedule
              consultations with doctors in real time. Built with React and
              Tailwind CSS for a clean interface and smooth UX.
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {["React", "Tailwind", "Node.js"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
              <li>Doctor Profiles & Scheduling</li>
              <li>Responsive Design</li>
              <li>Appointment Management</li>
              <li>User-Friendly Interface</li>
            </ul>

            {/* Buttons */}
            <div className="flex flex-nowrap gap-3 mt-4">
              <button
                onClick={() => handleDemoClick("project2")}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg font-semibold text-sm sm:text-lg hover:bg-blue-500 hover:text-white active:scale-95 transition transform hover:translate-y-1 hover:shadow-lg shadow-gray-400 dark:shadow-gray-700 whitespace-nowrap"
              >
                <FaExternalLinkAlt className="text-base sm:text-xl" />
                {loading.project2 ? "Loading..." : "Live Demo"}
              </button>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg font-semibold text-sm sm:text-lg hover:bg-blue-500 hover:text-white active:scale-95 transition transform hover:translate-y-1 hover:shadow-lg shadow-gray-400 dark:shadow-gray-700 whitespace-nowrap"
              >
                <FaGithub className="text-base sm:text-xl" /> View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
