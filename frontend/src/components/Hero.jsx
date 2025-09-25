import React from 'react'
import { Github, Linkedin } from "lucide-react"   // ✅ Import icons
import profilePic from "../assets/Profile.jpg"    // ✅ Local image

const Hero = () => {
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="pt-24">
            <div className="container mx-auto px-4 animate-fadeInUp">
                <div className="bg-gray-900 shadow-xl rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10">
                    
                    {/* Text Section */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-5xl font-bold text-gray-100 mb-4">Hi, I'm Pandiyarajan S</h1>
                        <p className="text-xl text-gray-100 mb-2">Welcome to my portfolio</p>
                        <p className="text-gray-100 mb-6">
                            Software Engineer driven by a passion for creating scalable, efficient systems using Python and React, and exploring new technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                            <button
                                onClick={scrollToContact}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
                            >
                                Contact Me
                            </button>
                            <a
                                href="/Pandiyarajan.pdf"   // ✅ file inside public/
                                download
                                className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow hover:bg-gray-300 transition"
                            >
                                Download CV
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 justify-center md:justify-start">
                            <a
                                href="https://github.com/pandiuser"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-100 hover:text-blue-400 transition"
                            >
                                <Github size={24} /> GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/pandiyarajans/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-100 hover:text-blue-400 transition"
                            >
                                <Linkedin size={24} /> LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <img
                            src={profilePic}
                            alt="Pandiyarajan S"
                            className="rounded-2xl w-80 h-80 object-cover shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
