import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import ProfileImg from "../assets/doc.png";

export default function Home() {
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full max-w-full flex-col lg:flex-row min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4 sm:px-8 pt-4 pb-8 sm:pt-6 sm:pb-8 transition-colors duration-300 relative overflow-x-hidden">
      {/* Left Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex min-w-0 flex-col justify-start sm:justify-center flex-1 space-y-6 pt-2 sm:pt-0"
      >
        <h2 className="text-lg sm:text-xl text-blue-600 mt-0 mb-0 animate-pulse">
          Welcome to my portfolio
        </h2>

        <h1 className="mt-0 max-w-full break-words text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I’m <br />
          <span className="inline-block mb-0 border-b-4 border-blue-500 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-clip-text text-transparent">
            Mudassir Abdullah
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "React Specialist",
            2000,
            "UI/UX Designer",
            2000,
            "Shopify Expert",
            2000,
            "Meta Ads Manager",
            2000,
            "3D Websites Developer",
            2000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="text-xl sm:text-2xl mt-0 font-bold text-gray-700 dark:text-white"
        />

        <p className="max-w-xl text-gray-600 dark:text-gray-300">
          Crafting beautiful, functional, and user-friendly digital experiences
          using modern technologies and best practices.
        </p>

        {/* Skills Badges */}
        <div className="flex max-w-full flex-wrap gap-3">
          {["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind.css","Shopify Expert","Meta Ads Manager"].map(
            (skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-800 shadow rounded-full hover:scale-105 transform transition"
              >
                {skill}
              </span>
            )
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 flex-wrap">
          {/* Projects Button */}
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="relative group cursor-pointer px-6 py-3 overflow-hidden rounded border border-blue-500 bg-blue-500 text-white font-medium z-10"
          >
            <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-200 ease-linear group-hover:scale-x-100 z-0"></span>
            <span className="relative z-10 group-hover:text-blue-500">
              View Projects
            </span>
          </ScrollLink>

          {/* Contact Button */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="relative group cursor-pointer px-6 py-3 overflow-hidden rounded border border-blue-500 text-blue-500 font-medium z-10"
          >
            <span className="absolute inset-0 bg-blue-500 scale-x-0 origin-left transition-transform duration-200 ease-linear group-hover:scale-x-100 z-0"></span>
            <span className="relative z-10 group-hover:text-white">
              Contact Me
            </span>
          </ScrollLink>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden sm:flex justify-center items-center flex-1 mt-10 lg:mt-0"
      >
        <img
          src={ProfileImg}
          alt="Profile"
          className="w-1/2 mt-12 max-w-xs sm:max-w-sm object-cover rounded-full shadow-lg hover:scale-105 transition"
        />
      </motion.div>

      {/* Jumping Arrow */}
      <motion.div
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer text-3xl"
        animate={{ y: [0, -15, 0], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        whileHover={{ scale: 1.2 }}
      >
        <FaArrowDown />
      </motion.div>
    </div>
  );
}
