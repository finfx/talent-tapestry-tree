
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
      title: "Bar Staff",
      company: "Labyrinth Bar & Nightclub",
      location: "Bath",
      period: "2024 - 2024",
      description: [
        "Maintained POS systems and troubleshooting minor IT issues on-site",
        "Built strong relationships with customers",
        "Developed communication skills, handling objections and providing tailored service to diverse clients",
        "Thrived in a fast-paced, high-pressure environment, balancing multiple priorities and maintaining exceptional service",
        "Ensured compliance with security protocols, safeguarding customer data and handling sensitive transactions"
      ],
      technologies: ["POS Systems", "Customer Service", "Problem Solving", "Security Protocols"],
    },
    {
      title: "IT service desk analyst",
      company: "University of Bath",
      location: "Bath",
      period: "2023 - 2023",
      description: [
        "Worked as a team of 7 on the helpdesk supporting approximately 8,000 staff members and 20,000 students and visitors",
        "Supported 300 University-owned computers on Windows, along with countless personal devices",
        "Handled support requests within defined service level agreements",
        "Worked closely with both 2nd line, 3rd line and the cyber team to escalate problems and identify solutions",
        "Supported ticket-based helpdesk queries and problems including troubleshooting connections, system access, and general technical tasks"
      ],
      technologies: ["Windows", "Help Desk Systems", "Technical Troubleshooting", "IT Support"],
    },
    {
      title: "IT Technician",
      company: "Studio Mix LTD",
      location: "Somerset",
      period: "2022 - 2023",
      description: [
        "Worked solo to install, deploy and troubleshoot technology",
        "Supported projects for installing technology such as rear facing cameras, Raspberry Pi and Car Play in vehicles",
        "Resolved issues timely within defined service level agreements",
        "Worked with external stakeholders and clients including directors",
        "Supported help desk review of queries and problems including internet/video connectivity issues"
      ],
      technologies: ["Raspberry Pi", "Vehicle Technology", "Troubleshooting", "Service Level Agreements"],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            My professional journey and the organizations I've worked with throughout my career.
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
