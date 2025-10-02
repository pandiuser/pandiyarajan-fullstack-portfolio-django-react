import React from "react"
import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

// Import static images
import project1Img from "../assets/projects/portfolio.png"
import project2Img from "../assets/projects/student.png"
import project3Img from "../assets/projects/ticket_creation.png"

const Projects = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get("/projects")
      return response.data
    },
  })

  if (isLoading)
    return <div className="text-center text-gray-400">Loading...</div>
  if (error)
    return (
      <div className="text-red-400">
        Error: {error?.message || "Something went wrong"}
      </div>
    )

  // Map API projects to include static images
  // const staticImages = [project1Img, project2Img]
  const staticImages = [project1Img, project2Img, project3Img]

  const projectsWithImages = projects?.results?.map((project, index) => ({
    ...project,
    staticImage: staticImages[index % staticImages.length], // cycle images if more projects
  }))

  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-16 animate-fadeInUp"
    >
      <div className="bg-gray-900 shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Projects
          <span className="block w-25 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsWithImages?.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition flex flex-col"
            >
              {/* Static project image */}
              <div className="w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={project.staticImage}
                  alt={project.title}
                  className="max-h-full max-w-full object-contain rounded-lg hover:scale-105 transition-transform"
                />
              </div>

              <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 text-left flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                  >
                    View Project
                  </a>
                )}
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-600 transition"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
