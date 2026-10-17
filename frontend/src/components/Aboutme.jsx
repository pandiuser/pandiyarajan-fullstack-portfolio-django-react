import React from 'react'
import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

import pythonLogo from "../assets/tech/Python.jpg"
import djangoLogo from '../assets/tech/Django.png'
import fastapiLogo from '../assets/tech/FastAPI.png'
import jsLogo from '../assets/tech/JavaScript.png'
import reactLogo from '../assets/tech/React.png'
import postgresLogo from '../assets/tech/PostgreSQL.png'
import mongodbLogo from '../assets/tech/MongoDB.png'
import htmlLogo from '../assets/tech/HTML.png'
import cssLogo from '../assets/tech/CSS.png'
import gitlabLogo from '../assets/tech/GitLab.png'
import dockerLogo from '../assets/tech/Docker.png'
import kuberneterLogo from '../assets/tech/Kubernetes.png'
import awsLogo from '../assets/tech/AWS.png'
import linuxLogo from '../assets/tech/Linux.png'

const Aboutme = () => {
    const { data: aboutme, isLoading, error } = useQuery({
        queryKey: ["aboutme"],
        queryFn: async () => {
            const response = await api.get("/aboutme");
            return response.data;
        },
    });

    if (isLoading) return <div>loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Guard: no data yet
    const firstResult = aboutme?.results?.[0];

    // ✅ Split into paragraphs on double newlines (only if data exists)
    const paragraphs = firstResult
        ? firstResult.description
            .split(/\n\n+/)
            .map(para => para.trim())
            .filter(para => para.length > 0)
        : [];

    // ✅ Technology stack (local images)
    const techStack = [
        { name: "Python", logo: pythonLogo },
        { name: "FastAPI", logo: fastapiLogo },
        { name: "Django", logo: djangoLogo },
        { name: "JavaScript", logo: jsLogo },
        { name: "React", logo: reactLogo },
        { name: "PostgreSQL", logo: postgresLogo },
        { name: "MongoDB", logo: mongodbLogo },
        { name: "HTML", logo: htmlLogo },
        { name: "CSS", logo: cssLogo },
        { name: "GitLab", logo: gitlabLogo },
        { name: "Docker", logo: dockerLogo },
        { name: "AWS", logo: awsLogo },
        { name: "Linux", logo: linuxLogo },
        { name: "Kubernetes", logo: kuberneterLogo },
    ];

    return (
        <div>
            <section
                id="aboutme"
                className="container mx-auto px-4 py-16 animate-fadeInUp"
            >
                <div className="bg-gray-900 shadow-xl rounded-2xl p-10 text-left">
                    
                    {/* About Me Section */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-gray-100 inline-block relative">
                            About Me
                            <span className="block w-25 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
                        </h2>
                    </div>

                    <div className="text-lg text-gray-100 leading-relaxed space-y-4 mb-12">
                        {paragraphs.length > 0 ? (
                            paragraphs.map((para, index) => (
                                <p key={index}>{para}.</p>
                            ))
                        ) : (
                            <p className="text-gray-400 italic">No about me content yet. Add it via the Django admin.</p>
                        )}
                    </div>

                    {/* Technologies Section */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl font-bold text-gray-100 inline-block relative">
                            Technologies I Work With
                            <span className="block w-70 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
                        {techStack.map((tech, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className="w-16 h-16 object-contain hover:scale-110 transition-transform duration-300"
                                />
                                <p className="mt-2 text-gray-200">{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aboutme
