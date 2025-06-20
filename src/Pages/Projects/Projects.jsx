import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import projectsData from "./projectsData";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-8">
      <Navbar />
      <main className="max-w-4xl mx-auto mt-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800">Projects</h3>
        <p className="mt-4 text-gray-600 mb-6">
          Here's a list of my selected GitHub repositories with the tech stack.
        </p>
      </main>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-10 px-4 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
          >
            <Link to={`/projects/${project.slug}`}>
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover cursor-pointer"
              />
            </Link>

            <div className="p-4 text-left">
              <h4 className="text-lg font-bold text-gray-800 line-clamp-1">
                {project.title}
              </h4>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 px-2 py-1 rounded-full text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                to={`/projects/${project.slug}`}
                className="inline-block mt-4 text-amber-600 text-sm hover:underline"
              >
                Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Coming Soon Footer */}
      <div className="text-center mt-12  text-gray-500 text-lg">
        🚀 Working on more awesome stuff — updating soon!...
      </div>
    </div>
  );
};

export default Projects;
