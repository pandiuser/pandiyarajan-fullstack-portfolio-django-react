import React from 'react'
import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 py-8 mt-16 animate-fadeIn">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/pandiuser"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
          >
            <Github size={18}/> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/pandiyarajans/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
          >
            <Linkedin size={18}/> LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {currentYear} Pandiyarajan S. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
