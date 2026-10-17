import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const Education = () => {
  const { data: education, isLoading, error } = useQuery({
    queryKey: ["education"],
    queryFn: async () => {
      const response = await api.get("/education");
      return response.data;
    },
  });

  if (isLoading) return <div className="text-center text-gray-400">Loading...</div>;
  if (error) return <div className="text-red-400">Error: {error?.message || "Something went wrong"}</div>;

  return (
    <section id="education" className="container mx-auto px-4 py-16 animate-fadeInUp">
      <div className="bg-gray-900 shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Education
          <span className="block w-25 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
        </h2>

        <div className="space-y-6">
          {education?.results?.map((edu) => (
            <article
              key={edu.id}
              className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Degree + Years */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3 className="text-xl font-bold text-blue-400">🎓 {edu.degree}</h3>
                <span className="text-sm text-gray-400 whitespace-nowrap">🗓 {edu.years}</span>
              </div>

              {/* School */}
              <p className="text-gray-300 text-sm mb-1">
                🏫 <span className="font-medium text-gray-200">{edu.school}</span>
              </p>

              {/* Grade (optional) */}
              {edu.grade && (
                <p className="text-gray-400 text-sm mb-1">
                  📊 Grade: <span className="text-gray-200 font-medium">{edu.grade}</span>
                </p>
              )}

              {/* Description / points */}
              {edu.description && (
                <div className="mt-3">
                  {/* Split description into intro and bullet points */}
                  {(() => {
                    const parts = edu.description.split('•');
                    const intro = parts[0].trim();
                    const bullets = parts.slice(1).map(p => p.trim()).filter(Boolean);
                    return (
                      <>
                        {intro && (
                          <p className="text-gray-400 text-sm italic mb-2 leading-relaxed">{intro}</p>
                        )}
                        {bullets.length > 0 && (
                          <ul className="space-y-2">
                            {bullets.map((pt, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                                <span className="text-blue-400 shrink-0 mt-1">▸</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    );
                  })()}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
