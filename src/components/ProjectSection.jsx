import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "HABITTO",
    description:
      "A Habit Tracking Web Application to help users build and maintain good habits through tracking and analytics.",
    imageUrl: "/habitto.png",
    tag: ["React", "Node", "Express", "PostgreSQL"],
    demoUrl: "https://habitto.onrender.com",
    githubUrl: "https://github.com/Zishan976/Habit-Tracker-Website",
  },
  {
    id: 2,
    title: "Multi-Vendor E-commerce Platform",
    description:
      "A full-stack multi-vendor e-commerce platform enabling multiple vendors to register, manage products, process orders, and handle payments with an integrated admin dashboard for platform oversight.",
    imageUrl: "/e-commerce.png",
    tag: ["React", "Node", "PostgreSQL", "Express"],
    demoUrl: "https://multi-vendor-e-commerce-platform-4vxy.onrender.com",
    githubUrl: "https://github.com/Zishan976/Multi-vendor-e-commerce-platform",
  },
  {
    id: 3,
    title: "Zflix",
    description:
      "MovieFlix is a React-based movie browsing application with dynamic routing, featuring movie listings, detailed information pages, and a responsive design.",
    imageUrl: "/zflix.png",
    tag: ["React", "Node", "PostgreSQL", "Express"],
    demoUrl: "https://zflix.onrender.com/",
    githubUrl: "https://github.com/Zishan976/Zflix",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="container py-24 px-4 ">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Here are some of my recent projects. Each projects are carefully
          crafted with attention to details, performance and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="bg-card rounded-lg shadow-xs overflow-hidden card-hover "
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-primary/20 border text-xs font-medium px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://github.com/Zishan976"
            target="_blank"
            className="cosmic-button flex items-center mx-auto w-fit gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
