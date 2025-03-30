
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Finlay Fray</h2>
            <p className="text-gray-400 mt-2">
              IT Professional
            </p>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-6 md:mb-0">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-blue-400 transition-colors">
              Education
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              Contact
            </a>
          </nav>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 flex flex-col md:flex-row gap-2 md:gap-6">
            <a href="tel:07704413988" className="hover:text-blue-400 transition-colors flex items-center">
              07704413988
            </a>
            <a href="mailto:finlayfray70@gmail.com" className="hover:text-blue-400 transition-colors flex items-center">
              finlayfray70@gmail.com
            </a>
            <span className="flex items-center">
              Bath and North East
            </span>
          </div>
          <p className="text-gray-400 text-sm flex items-center">
            © {currentYear} Finlay Fray. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
