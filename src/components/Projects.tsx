
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured online store with product listings, cart functionality, and secure checkout.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A productivity application to help users organize tasks, set deadlines, and track progress.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "An interactive weather application displaying forecasts and historical data with data visualization.",
      image:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Social Media Platform",
      description:
        "A responsive social networking site with user profiles, posts, and real-time messaging.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Here are some of the projects I've worked on. Each project was an opportunity to learn and grow as a developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
