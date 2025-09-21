import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white flex flex-col items-center justify-center p-6 overflow-hidden lg:overflow-y-auto">
      {/* Heading */}
      <h1
        data-aos="fade-down"
        className="text-4xl font-bold text-center mb-2 text-blue-600 dark:text-blue-400"
      >
        Get In Touch
      </h1>
      <p
        data-aos="fade-up"
        className="text-center text-gray-600 dark:text-gray-300 mb-8"
      >
        Have a project in mind or want to collaborate? Feel free to reach out!
      </p>

      <div className="grid lg:grid-cols-2 gap-10 max-w-5xl w-full">
        {/* Contact Info */}
        <div data-aos="fade-right" className="space-y-4">
          {/* Email */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex items-center gap-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <FiMail size={24} className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>forcoding7867@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md flex items-center gap-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <FiPhone size={24} className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+92-324-177-0100</p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-gray-800 mb-4 p-4 rounded-xl shadow-md flex items-center gap-4 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer">
            <FiMapPin size={24} className="text-blue-500" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>Abbottabad, Pakistan</p>
            </div>
          </div>

          <hr className="border-gray-400 dark:border-gray-600 mt-5 mb-4" />

          {/* Socials */}
          <div data-aos="fade-up">
            <h3 className="font-semibold mb-2">Follow Me</h3>
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: <FaGithub />, link: "https://github.com" },
                { icon: <FaLinkedin />, link: "https://www.linkedin.com" },
                { icon: <FaXTwitter />, link: "https://twitter.com" },
                { icon: <FaYoutube />, link: "https://www.youtube.com" },
                { icon: <FaInstagram />, link: "https://www.instagram.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-md text-black dark:text-white hover:bg-blue-800 hover:text-white dark:hover:bg-blue-600 transform hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          data-aos="fade-left"
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
        >
          <div className="group">
            <label className="block font-medium mb-1">Your Name</label>
            <input
              type="text"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="group">
            <label className="block font-medium mb-1">Your Email</label>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="john@example.com"
              required
            />
          </div>
          <div className="group">
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-6 rounded-md hover:bg-blue-900 transform hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
