
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
              IT Professional - System Administration
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
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Finlay Fray. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Designed & Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Finlay Fray
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
