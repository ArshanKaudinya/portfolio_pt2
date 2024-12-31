import React, { useState, useEffect, useRef } from 'react';

function Header() {
  // Define your nav items with matching section IDs
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Yap' },    
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const linkRefs = useRef([]);

  useEffect(() => {
    const sections = document.querySelectorAll('section'); 
    const options = {
      // This rootMargin makes the observer activate roughly
      // when the section is near mid-screen. Tweak as desired.
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach(sec => observer.observe(sec));

    return () => {
      sections.forEach(sec => observer.unobserve(sec));
    };
  }, []);

  useEffect(() => {
    const activeIndex = navLinks.findIndex(link => link.id === activeSection);
    if (activeIndex !== -1 && linkRefs.current[activeIndex]) {
      const element = linkRefs.current[activeIndex];
      const { offsetLeft, offsetWidth } = element;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeSection, navLinks]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-0">
      <nav className="relative flex justify-center space-x-8">
        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            ref={(el) => (linkRefs.current[index] = el)}
            className={`
              py-4 
              transition-colors 
              ${activeSection === link.id ? 'text-black' : 'text-gray-500 hover:text-black'}
            `}
          >
            {link.label}
          </a>
        ))}
        {/* The single underline indicator */}
        <span
          className="
            absolute 
            bottom-0 
            left-0 
            h-[2px] 
            bg-black 
            transition-all 
            duration-300 
            ease-in-out
          "
          style={{
            transform: `translateX(${indicatorStyle.left}px)`,
            width: indicatorStyle.width,
          }}
        />
      </nav>
    </header>
  );
}

export default Header;


