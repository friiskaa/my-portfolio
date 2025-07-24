'use client'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white py-3 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex pt-4 pb-2 gap-4 text-2xl justify-center">
            <a href="mailto:friskahdyt08@gmail.com" className='w-10 h-10 p-2 bg-violet-600 rounded-full hover:bg-white duration-300' target="_blank" rel="noopener noreferrer">
              <MdEmail className="hover:text-[#4285F4] transition ease-in-out" />
            </a>
            <a href="https://www.linkedin.com/in/friskahdyt/" className='w-10 h-10 p-2 bg-violet-600 rounded-full hover:bg-white duration-300' target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#0077B5] transition ease-in-out" />
            </a>
            <a href="https://www.instagram.com/_friiskaaa/" className='w-10 h-10 p-2 bg-violet-600 rounded-full hover:bg-white duration-300' target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#E1306C] transition ease-in-out" />
            </a>
            <a href="https://github.com/friiskaa" className='w-10 h-10 p-2 bg-violet-600 rounded-full hover:bg-white duration-300' target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#181717] transition ease-in-out" />
            </a>
          </div>
        <p className="text-sm mb-4 md:mb-0 text-center font-semibold">&copy; {new Date().getFullYear()} Friska Apriliana Hidayati. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
