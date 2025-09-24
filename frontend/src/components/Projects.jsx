import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const Projects = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const response = await api.get("/projects");
      return response.data;
    },
  });

  if (isLoading) return <div className="text-center text-gray-400">Loading...</div>;
  if (error) return <div className="text-red-400">Error: {error?.message || "Something went wrong"}</div>;

  return (
    <section id="projects" className="container mx-auto px-4 py-16 animate-fadeInUp">
      <div className="bg-gray-900 shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Projects
          <span className="block w-25 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.results?.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition flex flex-col"
            >
              {/* Project Images FIRST */}
              {project.images && project.images.length > 0 && (
                <div className="w-full h-40 flex items-center justify-center mb-4">
                  <img
                    src={project.images[0].image}
                    alt={project.images[0].caption || project.title}
                    className="max-h-full max-w-full object-contain rounded-lg hover:scale-105 transition-transform"
                  />
                </div>
              )}

              <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-left flex-grow">{project.description}</p>

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

              {/* If you still want to show ALL images instead of just first */}
              {project.images && project.images.length > 1 && (
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  {project.images.slice(1).map((image) => (
                    <div key={image.id} className="overflow-hidden rounded-lg shadow">
                      <img
                        src={image.image}
                        alt={image.caption || project.title}
                        className="w-full rounded-lg object-contain max-h-60 hover:scale-105 transition-transform"
                      />
                      {image.caption && (
                        <p className="text-gray-400 text-sm mt-1 text-center">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
