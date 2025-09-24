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
              <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-200">🎓 School:</span> {edu.school}
              </p>
              {edu.grade && (
                <p className="text-gray-300">
                  <span className="font-semibold text-gray-200">📊 Grade:</span> {edu.grade}
                </p>
              )}
              <p className="text-gray-300">
                <span className="font-semibold text-gray-200">⏳ Years:</span>{" "}
                <time>{edu.years}</time>
              </p>

              {edu.description && (
                <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                  {edu.description
                    ?.split(/(?<=\.)\s+/)
                    .map((point, idx) =>
                      point.trim() ? <li key={idx}>{point}</li> : null
                    )}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
