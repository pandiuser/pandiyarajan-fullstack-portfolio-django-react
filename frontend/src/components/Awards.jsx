import React from "react"
import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

// Import your static award images (order: MVP, Spot, COE — matches DB ordinal)
import award1Img from "../assets/awards/MVP.jpeg"
import award2Img from "../assets/awards/SPOT.jpeg"
import award3Img from "../assets/awards/COE.jpg"

const Awards = () => {
  const { data: awards, isLoading, error } = useQuery({
    queryKey: ["awards"],
    queryFn: async () => {
      const response = await api.get("/awards")
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

  // Assign static images (cycle if more than 3 awards)
  const staticImages = [award1Img, award2Img, award3Img]

  const awardsWithImages = awards?.results?.map((award, index) => ({
    ...award,
    staticImage: staticImages[index % staticImages.length],
  }))

  return (
    <section
      id="awards"
      className="container mx-auto px-4 py-16 animate-fadeInUp"
    >
      <div className="bg-gray-900 shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-100">
          Awards &amp; Achievements
          <span className="block w-70 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awardsWithImages?.map((award) => (
            <div
              key={award.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-56 bg-gray-700 flex items-center justify-center overflow-hidden">
                <img
                  src={award.staticImage}
                  alt={award.title}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 p-2"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-blue-400 mb-3 text-center leading-snug">
                  {award.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center flex-1">
                  {award.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
