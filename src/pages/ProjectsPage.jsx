import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectImg1 from "../assets/project1.png";
import ProjectImg2 from "../assets/project2.png";
import MahRozImage from "../assets/mah-roz-beauty-salon.png";
import AyanMobileImage from "../assets/ayan-mobile.png";

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A modern shopping platform with product browsing, user authentication, cart management, and checkout flows.",
    image: ProjectImg1,
    demoUrl: "https://ecom-omega-eosin.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    title: "MB Plays",
    description:
      "A responsive entertainment platform for discovering and watching Turkish series with Urdu subtitles.",
    image: ProjectImg2,
    demoUrl: "https://mb-plays.vercel.app/",
    technologies: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Mah Roz Beauty Salon",
    description:
      "An elegant beauty-salon website that highlights bridal services, salon expertise, testimonials, and an AI beauty advisor.",
    image: MahRozImage,
    demoUrl: "https://beauty-saloon-peach.vercel.app/",
    technologies: ["React", "Responsive Design", "AI Advisor"],
  },
  {
    title: "Ayan Mobile",
    description:
      "A polished mobile-store experience for browsing premium used phones, accessories, product listings, and customer services.",
    image: AyanMobileImage,
    demoUrl: "https://ayan-mobiles.vercel.app/",
    technologies: ["React", "E-Commerce", "Responsive Design"],
  },
];

const githubUrl = "https://github.com/MMAlam77/portfolio";

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full scroll-mt-24 overflow-x-hidden bg-gray-200 px-4 py-10 text-gray-900 transition-colors duration-300 dark:bg-gray-900 dark:text-white sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-2 text-center text-3xl font-bold text-blue-600 sm:text-4xl"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto mb-8 max-w-2xl text-center text-sm text-gray-600 dark:text-gray-300 sm:text-base"
        >
          A selection of web experiences built with modern, responsive design.
        </motion.p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              tabIndex={0}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/70 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100 group-focus-within:opacity-100 group-active:opacity-100">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
