import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef(null);

  const links = [
    { name: 'About Me', id: 'aboutme' },
    { name: 'Experience', id: 'experience' },
    { name: 'Education', id: 'education' },
    { name: 'Projects', id: 'projects' },
    { name: 'Awards', id: 'awards' },
    { name: 'Contact Me', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = navRef.current?.offsetHeight || 64;
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      links.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          const offset = navRef.current?.offsetHeight || 64;
          if (top <= offset + 10 && top + section.offsetHeight > offset) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed w-full bg-gray-900 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <button
          onClick={scrollToTop}
          className="text-xl font-bold text-gray-100 hover:text-blue-400"
        >
          Pandiyarajan S
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition ${
                activeSection === link.id
                  ? 'text-blue-400 font-bold'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-300 hover:text-blue-400 focus:outline-none text-2xl"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 shadow-lg overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-left transition ${
                activeSection === link.id
                  ? 'text-blue-400 font-bold'
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
