import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaBook } from "react-icons/fa";
import projectsData from "../Projects/projectsData";
import Navbar from "../../Components/Navbar/Navbar";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-center mt-20 text-red-500">Project not found!</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-8 relative">
      <button
        onClick={() => navigate("/projects")}
        className="absolute top-6 right-6 text-gray-700 hover:text-red-500 text-2xl z-10"
        title="Close"
      >
        <FaTimes />
      </button>

      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-xl shadow-xl p-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-h-[400px] object-contain rounded-lg bg-gray-200"
        />

        <h2 className="text-2xl font-bold mt-6 text-gray-800">{project.title}</h2>
        <p className="mt-4 text-gray-600">{project.description}</p>

        <div className="mt-6">
          <h4 className="text-lg font-semibold text-gray-700">Tech Stack:</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="text-xs bg-gray-200 px-3 py-2 rounded-full text-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white font-medium px-4 py-2 rounded-full hover:bg-amber-500 transition flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white font-medium px-4 py-2 rounded-full hover:bg-amber-500 transition flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          )}
          {project.readme && (
            <a
              href={project.readme}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white font-medium px-4 py-1 rounded-full hover:bg-amber-500 transition flex items-center gap-2"
            >
              <FaBook /> ReadMe
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
