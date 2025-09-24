import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const Awards = () => {
  const { data: awards, isLoading, error } = useQuery({
    queryKey: ["awards"],
    queryFn: async () => {
      const response = await api.get("/awards");
      return response.data;
    },
  });

  if (isLoading) return <div className="text-center text-gray-400">Loading...</div>;
  if (error) return <div className="text-red-400">Error: {error?.message || "Something went wrong"}</div>;

  return (
    <section id="awards" className="container mx-auto px-4 py-16 animate-fadeInUp">
      <div className="bg-gray-900 shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Awards & Achievements
          <span className="block w-70 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards?.results?.map((award) => (
            <div
              key={award.id}
              className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition flex flex-col items-center"
            >
              {award.image && (
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full max-h-48 object-contain rounded-lg mb-4 hover:scale-105 transition-transform"
                />
              )}
              <h3 className="text-xl font-semibold text-blue-400 mb-2 text-center">
                {award.title}
              </h3>
              <p className="text-gray-300 text-left">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
