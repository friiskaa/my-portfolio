'use client'

const Footer = () => {
  return (
    <footer className="bg-violet-700 text-white py-3 mt-12">
      <div className="container mx-auto px-6">
        <p className="text-lg mb-4 md:mb-0 text-center font-semibold">&copy; {new Date().getFullYear()} Friska Apriliana Hidayati. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
