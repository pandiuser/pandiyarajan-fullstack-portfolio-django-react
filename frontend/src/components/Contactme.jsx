import React from 'react';
import { Mail, Phone, Linkedin, FileText } from 'lucide-react';

const Contactme = () => {
  return (
    <section id="contact" className="container mx-auto px-4 py-16 animate-fadeInUp">
      <div className="bg-gray-900 shadow-xl rounded-2xl p-10 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-100">
          Contact Me
          <span className="block w-24 h-1 bg-blue-500 rounded mx-auto mt-2"></span>
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8">
          Feel free to reach out to me through any of these channels
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Email */}
          <div className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-gray-100">
              <Mail size={18}/> Email
            </h3>
            <a
              href="mailto:pandiyarajans372@gmail.com"
              className="text-blue-400 hover:underline"
            >
              pandiyarajans372@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-gray-100">
              <Phone size={18}/> Phone
            </h3>
            <a href="tel:+916382320439" className="text-blue-400 hover:underline">
              +91 6382320439
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-gray-100">
              <Linkedin size={18}/> LinkedIn
            </h3>
            <a
              href="https://www.linkedin.com/in/pandiyarajans/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              pandiyarajan linkedin
            </a>
          </div>

          {/* Resume */}
          <div className="bg-gray-800 shadow rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="font-semibold mb-2 flex items-center justify-center gap-2 text-gray-100">
              <FileText size={18}/> Resume
            </h3>
            <a
              href="/Pandiyarajan.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactme;
