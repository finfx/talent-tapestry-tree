
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              My Profile
            </h3>
            <p className="text-gray-600 mb-4">
              Detail-orientated IT professional with hands-on experience in PC/network diagnostic system installation and troubleshooting. Experienced in building, maintaining, and repairing servers, PCs, laptops, and workstations, ensuring optimal IT performance and security compliance.
            </p>
            <p className="text-gray-600 mb-6">
              Adept at collaborating across teams and providing excellent customer support. Known for a methodical approach to problem solving, strong clear-facing communication, and ability to manage IT related projects efficiently. Passionate about providing high-quality IT solutions and fostering positive relationships.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold text-gray-800">Name:</h4>
                <p className="text-gray-600">Finlay Fray</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Email:</h4>
                <p className="text-gray-600">FinlayFray70@gmail.com</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Location:</h4>
                <p className="text-gray-600">Bay road Flat 5, Somerset</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-800">Availability:</h4>
                <p className="text-gray-600">Open to Opportunities</p>
              </div>
            </div>
            
            <Button asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-30"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600"
                  alt="IT Professional working on computer"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
