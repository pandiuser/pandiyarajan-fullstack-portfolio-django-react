import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const Experience = () => {
  const { data: experiences, isLoading, error } = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => {
      const response = await api.get("/experience");
      return response.data;
    },
  });

  if (isLoading) return <div className="text-center text-gray-400">Loading...</div>;
  if (error) return <div className="text-red-400">Error: {error?.message || "Something went wrong"}</div>;

  return (
    <section id="experience" className="container mx-auto px-4 py-16 animate-fadeInUp">
      <div className="bg-gray-900 shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Experience
          <span className="block w-25 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
        </h2>

        <div className="space-y-6">
          {experiences?.results?.map((experience) => (
            <div
              key={experience.id}
              className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Job Title */}
              <h3 className="text-xl font-semibold text-blue-400 flex items-center gap-2">
                <span role="img" aria-label="job">💼</span> {experience.title}
              </h3>

              {/* Company + Location inline */}
              <div className="flex items-center gap-4 text-gray-300 mt-1">
                <span className="flex items-center gap-1">
                  🏢 {experience.company}
                </span>
                {experience.location && (
                  <span className="flex items-center gap-1">
                    📍 {experience.location}
                  </span>
                )}
              </div>

              {/* Years */}
              <p className="flex items-center gap-1 text-gray-400 mt-1 text-sm">
                🗓 {experience.years}
              </p>

              {/* Bullet points */}
              <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                {experience.description
                  ?.split("•")
                  .map((point, idx) =>
                    point.trim() ? <li key={idx}>{point.trim()}</li> : null
                  )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
