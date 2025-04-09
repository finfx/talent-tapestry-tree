
import { Briefcase, Calendar, Mail, User } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  reference?: {
    name: string;
    position: string;
    email: string;
  };
};

const WorkExperience = () => {
  const experiences: Experience[] = [
    {
      title: "Bar Staff",
      company: "Labyrinth Bar & Nightclub",
      companyUrl: "https://www.labyrinthbath.com/",
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
      reference: {
        name: "John Mason",
        position: "Site Director",
        email: "John@labyrinthbath.com"
      }
    },
    {
      title: "IT service desk analyst",
      company: "University of Bath",
      companyUrl: "https://www.bath.ac.uk/professional-services/digital-data-and-technology/",
      location: "Bath",
      period: "2023 - 2023",
      description: [
        "Worked as a team of 7 on the helpdesk supporting approximately 8,000 staff members and 20,000 students and visitors",
        "Supported 300 University-owned computers on Windows 10, along with countless personal devices such as computers, phones, TVs, etc.",
        "Handled support requests within defined service level agreements using TopDesk",
        "Worked closely with both 2nd line, 3rd line and the cyber team to escalate problems and identify solutions",
        "Supported help desk queries and problems including troubleshooting connections, finding errored routers and modems"
      ],
      technologies: ["Windows", "Help Desk Systems", "Technical Troubleshooting", "IT Support"],
    },
    {
      title: "IT Technician",
      company: "Studio Mix LTD",
      companyUrl: "https://studiomix.co.uk/",
      location: "Somerset",
      period: "2022 - 2022",
      description: [
        "Worked solo to install, deploy and troubleshoot technology",
        "Supported 1 project of installing technology such as a rear facing camera, Raspberry Pi and Car Play in a vehicle",
        "Resolved issues timely within defined service level agreements",
        "Explained technical knowledge to non-technical people, such as the director",
        "Supported low level networking queries and problems such as troubleshooting connections to and from the vehicle"
      ],
      technologies: ["Raspberry Pi", "Vehicle Technology", "Troubleshooting", "Service Level Agreements"],
      reference: {
        name: "Katy Maxwell",
        position: "Founder and Director",
        email: "Hello@studiomix.co.uk"
      }
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
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {exp.company}
                    </a> • {exp.location}
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
                  
                  {exp.reference && (
                    <div className="mt-5 pt-4 border-t border-gray-200">
                      <div className="flex flex-col space-y-1">
                        <h4 className="text-gray-900 font-medium">Reference:</h4>
                        <div className="flex items-center gap-2 text-gray-700">
                          <User className="h-4 w-4 text-blue-600" />
                          <span>{exp.reference.name}, {exp.reference.position}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Mail className="h-4 w-4 text-blue-600" />
                          <a href={`mailto:${exp.reference.email}`} className="text-blue-600 hover:underline">
                            {exp.reference.email}
                          </a>
                        </div>
                      </div>
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

