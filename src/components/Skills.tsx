
import { Award, Code, Database, Globe, Server, Shield, Wrench, HardDrive, Network, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Problem-Solving & Resilience",
      description: "Methodical approach to IT problem diagnosis and resolution",
      icon: <Wrench className="w-8 h-8 text-blue-600" />,
      skills: ["Diagnostic Troubleshooting", "System Recovery", "Critical Thinking", "Root Cause Analysis", "Incident Response"]
    },
    {
      title: "Relationship Building & Client Management",
      description: "Developing strong client relationships and providing tailored IT support",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      skills: ["Customer Support", "Client Communication", "Service Management", "Relationship Building", "Conflict Resolution"]
    },
    {
      title: "System Administration",
      description: "Managing and maintaining IT systems and infrastructure",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      skills: ["Windows 10", "Server Management", "Active Directory", "User Management", "System Optimization"]
    },
    {
      title: "Network Troubleshooting",
      description: "Diagnosing and resolving network-related issues",
      icon: <Network className="w-8 h-8 text-blue-600" />,
      skills: ["TCP/IP", "Firewalls", "Network Diagnostics", "Connectivity Issues", "Router Configuration"]
    },
    {
      title: "Cybersecurity & Endpoint Protection",
      description: "Ensuring system security and data protection",
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      skills: ["Security Protocols", "Data Protection", "Compliance", "Threat Detection", "Risk Assessment"]
    },
    {
      title: "Hardware & Software Management",
      description: "Installation, configuration and maintenance of IT equipment",
      icon: <HardDrive className="w-8 h-8 text-blue-600" />,
      skills: ["PC Building", "Hardware Repair", "Software Installation", "System Updates", "Peripherals Setup"]
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
                  <span
                    key={skillIndex}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
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
