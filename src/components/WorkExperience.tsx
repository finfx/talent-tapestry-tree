
import { Briefcase, Calendar } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
};

const WorkExperience = () => {
  const experiences: Experience[] = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      location: "San Francisco, CA",
      period: "Jan 2021 - Present",
      description: [
        "Led development of the company's flagship SaaS product, resulting in a 40% increase in user engagement",
        "Implemented responsive design principles, improving mobile conversion rates by 25%",
        "Mentored junior developers and conducted code reviews to ensure high quality standards",
      ],
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    },
    {
      title: "Web Developer",
      company: "Digital Solutions LLC",
      location: "Austin, TX",
      period: "Mar 2018 - Dec 2020",
      description: [
        "Developed and maintained client websites using modern JavaScript frameworks",
        "Collaborated with design team to implement pixel-perfect UI components",
        "Optimized application performance, reducing load times by 30%",
      ],
      technologies: ["JavaScript", "Vue.js", "SCSS", "Node.js"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      location: "Seattle, WA",
      period: "Jun 2016 - Feb 2018",
      description: [
        "Built and maintained REST APIs for mobile applications",
        "Integrated third-party payment systems into e-commerce platforms",
        "Participated in daily standups and sprint planning meetings",
      ],
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            My professional journey and the companies I've collaborated with throughout my career.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-3 hidden md:flex">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                  </div>
                  <div className="text-blue-600 font-medium">
                    {exp.company} • {exp.location}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-700">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  {exp.technologies && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
