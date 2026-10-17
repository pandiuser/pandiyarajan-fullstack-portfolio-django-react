import React from "react"
import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

// Import static images
import project1Img from "../assets/projects/portfolio.png"
import project2Img from "../assets/projects/ticket_creation.png"
import project3Img from "../assets/projects/student.png"

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
              className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Project image */}
              <div className="w-full h-48 bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src={project.staticImage}
                  alt={project.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 p-2"
                />
              </div>

              {/* Card content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-blue-400 mb-3 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex justify-center gap-3 mt-auto">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition text-sm font-medium"
                    >
                      View Project
                    </a>
                  )}
                  {project.github_url && (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-600 transition text-sm font-medium"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
