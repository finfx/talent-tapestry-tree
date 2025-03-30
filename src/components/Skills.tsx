
import { Award, Code, Database, Globe, Server, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side applications",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      skills: ["Node.js", "Express", "Python", "Java", "RESTful APIs"]
    },
    {
      title: "Database Management",
      description: "Designing and optimizing database systems",
      icon: <Database className="w-8 h-8 text-blue-600" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"]
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences",
      icon: <Code className="w-8 h-8 text-blue-600" />,
      skills: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping"]
    },
    {
      title: "Project Management",
      description: "Leading projects from concept to completion",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      skills: ["Agile", "Scrum", "Jira", "Trello", "Git/GitHub"]
    },
    {
      title: "Other Skills",
      description: "Additional technical competencies",
      icon: <Award className="w-8 h-8 text-blue-600" />,
      skills: ["DevOps", "AWS", "Docker", "Testing", "CI/CD"]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Here are some of the technologies and skills I've worked with
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
