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
          Professional Experience
          <span className="block w-70 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
        </h2>

        <div className="space-y-6">
          {experiences?.results?.map((experience) => {
            // Split description into intro line(s) and bullet points
            const parts = experience.description?.split('•') ?? [];
            const intro = parts[0]?.trim();
            const bullets = parts.slice(1).map(b => b.trim()).filter(Boolean);

            return (
              <div
                key={experience.id}
                className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition"
              >
                {/* Header row: title + years */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                    💼 {experience.title}
                  </h3>
                  <span className="text-sm text-gray-400 flex items-center gap-1 whitespace-nowrap">
                    🗓 {experience.years}
                  </span>
                </div>

                {/* Company + Location */}
                <div className="flex flex-wrap items-center gap-4 text-gray-300 text-sm mb-3">
                  <span className="flex items-center gap-1 font-medium">🏢 {experience.company}</span>
                  {experience.location && (
                    <span className="flex items-center gap-1">📍 {experience.location}</span>
                  )}
                </div>

                {/* Intro / company description (non-bullet line) */}
                {intro && (
                  <p className="text-gray-400 text-sm italic mb-3 leading-relaxed">{intro}</p>
                )}

                {/* Bullet points */}
                {bullets.length > 0 && (
                  <ul className="space-y-2">
                    {bullets.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                        <span className="text-blue-400 mt-1 shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience
