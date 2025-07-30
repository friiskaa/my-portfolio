"use client";

import Image from "next/image";
import { FaReact, FaBootstrap, FaHtml5, FaCss3, FaLinkedin, FaInstagram, FaArrowAltCircleDown } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill, RiJavascriptFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import { motion } from "framer-motion";
import { parent, child, fadeItem, container } from "../animation";
import TypeWriter from "./components/Typewriter";
import HeroSection from "./components/HeroSection";
import Blog from "./components/Blog";

export default function Home() {
  return ( 
    <>
    {/* HERO SECTION START */}
    <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between mt-12 px-6 md:px-20 py-8 md:py-4 bg-white dark:bg-gray-900">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          Hi, I&apos;m <span className="text-violet-700">Friska</span>
        </h1>
        <TypeWriter />

        <motion.p 
        animate={{ y: "0%", opacity:1 }}
        initial={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
          I&apos;m passionate about front-end web development and enjoy creating responsive, modern websites using tools like React, Next.js, and Tailwind CSS. I&apos;m always learning and exploring new technologies to improve my skills.
        </motion.p>

        <a href="/resume/CV-Friska.pdf" download
          className="inline-flex bg-violet-700 rounded-full px-6 py-3 text-white font-semibold
                    hover:bg-violet-300 hover:text-slate-700 transition ">
          <FaArrowAltCircleDown className="mr-2 my-auto h-6 w-6" />
          <span>Download CV</span>
        </a>
      </div>

      <div className="relative w-full md:w-1/2 mb-2 md:mb-0 flex justify-center items-center">
        <div className="p-1 mx-auto rounded-3xl border-dashed border-2 border-violet-400 dark:border-violet-500 bg-white dark:bg-gray-800 shadow-xl">
          <HeroSection />
        </div>
      </div>
    </section>
    {/* HERO SECTION END */}

    {/* ABOUT SECTION START */}
    <section id="about" className="pt-1 mt-0 mb-0 bg-violet-700">
      <div className="w-full px-6">
        <div className="grid grid-rows-2 px-6">
          <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once:true, amount: 0.3 }}
          className="w-full">
            <motion.h3 variants={fadeItem}
            className="text-2xl font-semibold text-white text-center sm:text-justify uppercase tracking-wider mt-8">
              About Me
            </motion.h3>
            <motion.p variants={fadeItem} className="text-base font-medium text-white text-center sm:text-justify tracking-normal sm:tracking-wider mt-7">
              Hi, I&apos;m Friska a software engineering student with a strong interest in front-end web development. I&apos;m passionate about creating clean, responsive, and interactive user interfaces that deliver great user experiences.
            </motion.p>
            <motion.p variants={fadeItem} className="text-base font-medium text-white text-center sm:text-justify tracking-normal sm:tracking-wider mt-2">
              I enjoy working with modern technologies like React, Next.js, and Tailwind CSS, and I’m always looking for ways to improve my skills through hands-on projects and continuous learning.
            </motion.p>
            <motion.p variants={fadeItem} className="text-base font-medium text-white text-center sm:text-justify tracking-normal sm:tracking-wider mt-2">
              Currently, I&apos;m focused on deepening my understanding of front-end frameworks and staying updated with the latest trends in web technologies.
            </motion.p>
          </motion.div>

          <div className="w-full text-white">
            <h3 className="text-2xl font-semibold uppercase tracking-wider mt-1">Technologies I Work With</h3>
            <motion.ul 
            variants={parent} 
            initial="hidden" 
            animate="show"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 pb-8 gap-6 max-w-full">
              <motion.li variants={child} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex group items-center flex-wrap min-w-0 max-w-full box-border border-2 rounded-lg border-solid border-white 
                hover:shadow-lg transition ease-in-out delay-150
                hover:translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 hover:text-slate-800 p-5">
                <FaReact className="text-white w-16 h-16 sm:w-12 sm:h-12 group-hover:text-[#61DAFB] 
                  transition ease-in-out delay-150 duration-300"/>
                <div>
                  <h1 className="font-bold pl-2 sm:pl-4 text-sm sm:text-base">React JS</h1>
                  <p className="font-medium pl-2 sm:pl-4 text-xs sm:text-sm">JavaScript Library</p>
                </div>
              </motion.li>

              <motion.li variants={child} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex group items-center flex-wrap min-w-0 max-w-full box-border border-2 rounded-lg border-solid border-white 
                hover:shadow-lg transition ease-in-out delay-150
                hover:translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 hover:text-slate-800 p-5">
                <SiNextdotjs className="text-white w-16 h-16 sm:w-12 sm:h-12 group-hover:text-black 
                  transition ease-in-out delay-150 duration-300"/>
                <div>
                  <h1 className="font-bold pl-2 sm:pl-4 text-sm sm:text-base">Next JS</h1>
                  <p className="font-medium pl-2 sm:pl-4 text-xs sm:text-sm">React Framework</p>
                </div>
              </motion.li>

              <motion.li variants={child} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex group items-center flex-wrap min-w-0 max-w-full box-border border-2 rounded-lg border-solid border-white 
                hover:shadow-lg transition ease-in-out delay-150
                hover:translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 hover:text-slate-800 p-5">
                <RiTailwindCssFill className="text-white w-16 h-16 sm:w-12 sm:h-12 group-hover:text-[#38BDF8]
                  transition ease-in-out delay-150 duration-300"/>
                <div>
                  <h1 className="font-bold pl-2 sm:pl-4 text-sm sm:text-base">Tailwind CSS</h1>
                  <p className="font-medium pl-2 sm:pl-4 text-xs sm:text-sm">CSS Framework</p>
                </div>
              </motion.li>

              <motion.li variants={child} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex group items-center flex-wrap min-w-0 max-w-full box-border border-2 rounded-lg border-solid border-white 
                hover:shadow-lg transition ease-in-out delay-150
                hover:translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 hover:text-slate-800 p-5">
                <FaBootstrap className="text-white w-16 h-16 sm:w-12 sm:h-12 group-hover:text-[#7952B3]
                  transition ease-in-out delay-150 duration-300"/>
                <div>
                  <h1 className="font-bold pl-2 sm:pl-4 text-sm sm:text-base">Bootstarp</h1>
                  <p className="font-medium pl-2 sm:pl-4 text-xs sm:text-sm">CSS Framework</p>
                </div>
              </motion.li>

              <motion.li variants={child} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex group items-center flex-wrap min-w-0 max-w-full box-border border-2 rounded-lg border-solid border-white 
                hover:shadow-lg transition ease-in-out delay-150
                hover:translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 hover:text-slate-800 p-5">
                <RiJavascriptFill className="text-white w-16 h-16 sm:w-12 sm:h-12 group-hover:text-[#F7DF1E]
                  transition ease-in-out delay-150 duration-300"/>
                <div>
                  <h1 className="font-bold pl-2 sm:pl-4 text-sm sm:text-base">JavaScript</h1>
                  <p className="font-medium pl-2 sm:pl-4 text-xs sm:text-sm">Programming Language</p>
                </div>
              </motion.li>

              <motion.li variants={child} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex group items-center flex-wrap min-w-0 max-w-full box-border border-2 rounded-lg border-solid border-white 
                hover:shadow-lg transition ease-in-out delay-150
                hover:translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 hover:text-slate-800 p-5">
                <FaHtml5 className="text-white w-16 h-16 sm:w-12 sm:h-12 group-hover:text-[#E44D26]
                  transition ease-in-out delay-150 duration-300"/>
                <div>
                  <h1 className="font-bold pl-2 sm:pl-4 text-sm sm:text-base">HTML</h1>
                  <p className="font-medium pl-2 sm:pl-4 text-xs sm:text-sm">Markup Language</p>
                </div>
              </motion.li>

              <motion.li variants={child} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex group items-center flex-wrap min-w-0 max-w-full box-border border-2 rounded-lg border-solid border-white 
                hover:shadow-lg transition ease-in-out delay-150
                hover:translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 hover:text-slate-800 p-5">
                <FaCss3 className="text-white w-16 h-16 sm:w-12 sm:h-12 group-hover:text-[#264DE4]
                  transition ease-in-out delay-150 duration-300"/>
                <div>
                  <h1 className="font-bold pl-2 sm:pl-4 text-sm sm:text-base">CSS</h1>
                  <p className="font-medium pl-2 sm:pl-4 text-xs sm:text-sm">Styling Language</p>
                </div>
              </motion.li>

              <motion.li variants={child} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="flex group items-center flex-wrap min-w-0 max-w-full box-border border-2 rounded-lg border-solid border-white 
                hover:shadow-lg transition ease-in-out delay-150
                hover:translate-y-1 hover:scale-110 hover:bg-slate-200 duration-300 hover:text-slate-800 p-5">
                <BiLogoVisualStudio className="text-white w-16 h-16 sm:w-12 sm:h-12 group-hover:text-[#007ACC]
                  transition ease-in-out delay-150 duration-300"/>
                <div>
                  <h1 className="font-bold pl-2 sm:pl-4 text-sm sm:text-base">Visual Studio Code</h1>
                  <p className="font-medium pl-2 sm:pl-4 text-xs sm:text-sm">Code Editor</p>
                </div>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
    {/* ABOUT SECTION END */}

    {/* PROJECT SECTION START */}
    <section id="projects" className="pt-16 pb-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-slate-800 dark:text-white text-center">
          My Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div className="group overflow-hidden shadow-xl rounded-lg bg-slate-200 dark:bg-slate-800 hover:shadow-2xl transition duration-300">
            <Image
              className="w-full h-64 object-cover rounded-t-lg"
              src="/image-projects/job-fair.png"
              alt="Job Fair System"
              width={500}
              height={500}
            />
            <div className="p-5">
              <h1 className="font-bold text-xl text-slate-800 dark:text-white mb-2">
                Job Fair Information System
              </h1>
              <p className="text-sm text-justify text-slate-700 dark:text-slate-300 mb-4">
                A web platform designed to streamline the job fair process at Poliwangi by connecting companies with job seekers more efficiently. I worked as the front-end developer and UI designer — from creating the user interface to building a responsive and user-friendly experience.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Laravel", "Bootstrap", "MySQL"].map((tech, idx) => (
                  <span key={idx} className="bg-violet-100 text-violet-700 dark:bg-violet-700 dark:text-white text-xs font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://ta.poliwangi.ac.id/~ti22017/"
                target="_blank"
                className="inline-block bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-violet-500 transition"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="group overflow-hidden shadow-xl rounded-lg bg-slate-200 dark:bg-slate-800 hover:shadow-2xl transition duration-300">
            <Image
              className="w-full h-64 object-cover rounded-t-lg"
              src="/image-projects/sila.png"
              alt="SiLa Project"
              width={500}
              height={500}
            />
            <div className="p-5">
              <h1 className="font-bold text-xl text-slate-800 dark:text-white mb-2">
                SiLa: Sign Language Application
              </h1>
              <p className="text-sm text-justify text-slate-700 dark:text-slate-300 mb-4">
                A real-time web app that translates sign language into text, currently supporting letter-by-letter translation. I focused on the front-end side, building a clean and accessible interface while integrating gesture detection for smooth user interaction.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Bootstrap", "TensorFlow", "Keras", "MediaPipe"].map((tech, idx) => (
                  <span key={idx} className="bg-violet-100 text-violet-700 dark:bg-violet-700 dark:text-white text-xs font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="https://sila-signlanguage.vercel.app/"
                target="_blank"
                className="inline-block bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-violet-500 transition"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* PROJECT SECTION END */}

    {/* BLOG SECTION START */}
    <Blog />
    {/* BLOG SECTION END */}

    {/* CONTACT SECTION START */}
    <section id="contact" className="bg-white dark:bg-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold uppercase tracking-wider mt-8">Contact Me</h3>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
            <span className="text-violet-700 font-semibold">Let&apos;s Get In Touch!</span> <br />
            If you have a project, idea, or just want to say hi, feel free to contact me.
            I&apos;m always open to new opportunities and collaborations.
          </p>
            <div className="flex pt-4 gap-2 text-2xl">
            <a href="https://www.linkedin.com/in/friskahdyt/"  target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#0077B5] transition ease-in-out delay-150 duration-300" />
            </a>
            <a href="https://www.instagram.com/_friiskaaa/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#E1306C] transition ease-in-out delay-150 duration-300" />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <form action="https://formsubmit.co/friskahdyt08@gmail.com" method="POST" className="flex flex-col gap-6">
            <div>
              <label className="block mb-1  text-justify font-semibold text-gray-700 dark:text-white">Name</label>
              <input
                type="text" name="fullname"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-white">Email</label>
              <input
                type="email" name="email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-white">Message</label>
              <textarea
                name="message" rows={4}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-fit bg-violet-700 hover:bg-violet-600 text-white font-semibold px-6 py-2 rounded-full shadow transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
    {/* CONTACT SECTION END */}
    </>
  );
}
