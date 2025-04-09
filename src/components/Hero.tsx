
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-r from-white to-blue-50"
    >
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-lg font-medium text-blue-600">
              Welcome to my portfolio
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Finlay Fray</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">
                in IT support, administration and troubleshooting
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Specialized in system administration and troubleshooting with a methodical approach to problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#experience">
                  View My Experience <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30"></div>
              <div className="relative bg-white rounded-full p-2">
                <img
                  src="/lovable-uploads/2368a914-5afb-4a05-a1a0-bc146eeef1e4.png"
                  alt="Finlay Fray profile"
                  className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
