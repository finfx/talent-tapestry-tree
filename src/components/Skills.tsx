
import { Award, Code, Database, Globe, Server, Shield, Wrench, HardDrive, Network, Users } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type SkillItem = {
  name: string;
  description: string;
  link?: string;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: JSX.Element;
  skills: SkillItem[];
};

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Problem-Solving & Resilience",
      description: "Methodical approach to IT problem diagnosis and resolution",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      skills: [
        {
          name: "Diagnostic Troubleshooting", 
          description: "Systematic approach to identifying and resolving technical issues through root cause analysis and methodical testing procedures."
        },
        {
          name: "System Recovery", 
          description: "Expertise in recovering compromised systems, implementing backup solutions, and ensuring business continuity after incidents."
        },
        {
          name: "Critical Thinking", 
          description: "Ability to analyze complex technical problems, evaluate multiple solutions, and implement the most efficient resolution."
        },
        {
          name: "Root Cause Analysis", 
          description: "Identifying underlying issues beyond surface-level symptoms to prevent recurring problems and implement permanent fixes."
        },
        {
          name: "Incident Response", 
          description: "Structured approach to handling IT incidents with defined procedures to minimize impact and restore normal operations."
        }
      ]
    },
    {
      title: "Relationship Building & Client Management",
      description: "Developing strong client relationships and providing tailored IT support",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      skills: [
        {
          name: "Customer Support", 
          description: "Providing technical assistance, resolving user issues, and ensuring client satisfaction through effective communication."
        },
        {
          name: "Client Communication", 
          description: "Translating complex technical concepts into clear, understandable language for non-technical stakeholders."
        },
        {
          name: "Service Management", 
          description: "Implementing ITIL best practices to deliver reliable, high-quality IT services aligned with business needs."
        },
        {
          name: "Relationship Building", 
          description: "Establishing trust and credibility with clients through consistent, reliable service and proactive support."
        },
        {
          name: "Conflict Resolution", 
          description: "Addressing client concerns and managing expectations effectively while maintaining positive professional relationships."
        }
      ]
    },
    {
      title: "System Administration",
      description: "Managing and maintaining IT systems across multiple platforms",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      skills: [
        {
          name: "Windows", 
          description: "Configuration, deployment, and management of Windows operating systems and services in professional environments."
        },
        {
          name: "Linux", 
          description: "Working knowledge of Linux distributions, command-line operations, and server management principles."
        },
        {
          name: "MacOS", 
          description: "Supporting Apple hardware and software in business settings, including integration with mixed environments."
        },
        {
          name: "Active Directory", 
          description: "Managing user accounts, group policies, and domain resources within Microsoft's directory service."
        },
        {
          name: "User Management", 
          description: "Creating and maintaining user accounts, permissions, and access controls across IT systems."
        }
      ]
    },
    {
      title: "Network Troubleshooting",
      description: "Diagnosing and resolving network-related issues",
      icon: <Network className="w-8 h-8 text-blue-600" />,
      skills: [
        {
          name: "TCP/IP", 
          description: "Understanding of the fundamental protocols that enable network communication and internet connectivity."
        },
        {
          name: "Firewalls", 
          description: "Configuring and managing network security devices to control traffic and protect against threats."
        },
        {
          name: "Network Diagnostics", 
          description: "Using tools like ping, traceroute, and packet analyzers to identify and resolve connectivity issues."
        },
        {
          name: "Connectivity Issues", 
          description: "Troubleshooting and resolving problems affecting network access and performance across various devices."
        },
        {
          name: "Router Configuration", 
          description: "Setting up and optimizing network devices to ensure reliable connectivity and appropriate traffic management."
        }
      ]
    },
    {
      title: "Cybersecurity & Endpoint Protection",
      description: "Ensuring system security and data protection",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      skills: [
        {
          name: "Security Protocols", 
          description: "Network protocols are implemented using multiple layers with varying purposes. While multiple frameworks have been developed to model this ecosystem, the most widely used is the Open Systems Interconnection (OSI) model.",
          link: "https://en.wikipedia.org/wiki/OSI_model"
        },
        {
          name: "Data Protection", 
          description: "Implementing measures to safeguard sensitive information through encryption, access controls, and backup solutions."
        },
        {
          name: "Compliance", 
          description: "Ensuring IT systems adhere to relevant regulations and industry standards for security and data handling."
        },
        {
          name: "Threat Detection", 
          description: "Identifying potential security risks and vulnerabilities before they can be exploited."
        },
        {
          name: "Risk Assessment", 
          description: "Evaluating potential security threats and implementing appropriate countermeasures based on risk level."
        }
      ]
    },
    {
      title: "Cloud Technologies",
      description: "Experience with cloud platforms and services",
      icon: <HardDrive className="w-8 h-8 text-blue-600" />,
      skills: [
        {
          name: "AWS", 
          description: "Working knowledge of Amazon Web Services infrastructure, services, and best practices for cloud deployment."
        },
        {
          name: "Azure", 
          description: "Experience with Microsoft's cloud computing platform, including virtual machines, storage, and identity services."
        },
        {
          name: "Office 365", 
          description: "Supporting and managing cloud-based productivity tools and services for business environments."
        },
        {
          name: "Cloud Migration", 
          description: "Planning and executing the transition of on-premises infrastructure and applications to cloud platforms."
        }
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Here are some of the key skills and expertise I've developed throughout my career
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-800 ml-3">
                  {category.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <TooltipProvider key={skillIndex}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span
                          className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full cursor-help"
                        >
                          {skill.name}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">
                        {skill.link ? (
                          <div>
                            <p>{skill.description}</p>
                            <a 
                              href={skill.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:underline block mt-1 text-xs"
                            >
                              Learn more
                            </a>
                          </div>
                        ) : (
                          <p>{skill.description}</p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
