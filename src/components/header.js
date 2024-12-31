
import React, { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'react';

function Header() {
  // Memoize navLinks to prevent unnecessary re-renders
  const navLinks = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ], []);

  const [activeSection, setActiveSection] = useState('home');
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const linkRefs = useRef([]);
  const navRef = useRef(null);

  // Scroll handler to determine the active section based on the largest visible area
  useEffect(() => {
    const sections = document.querySelectorAll('section');

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let maxVisibleArea = 0;
          let currentActive = activeSection;

          sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
            const visibleArea = Math.max(visibleHeight, 0) * Math.max(visibleWidth, 0);

            if (visibleArea > maxVisibleArea) {
              maxVisibleArea = visibleArea;
              currentActive = section.id;
            }
          });

          if (currentActive !== activeSection) {
            setActiveSection(currentActive);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // Update the underline position and width based on the active section
  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeIndex = navLinks.findIndex(link => link.id === activeSection);
      if (activeIndex !== -1 && linkRefs.current[activeIndex] && navRef.current) {
        const navElement = navRef.current;
        const activeLink = linkRefs.current[activeIndex];

        const left = activeLink.offsetLeft;
        const width = activeLink.offsetWidth;

        setIndicatorStyle({ left, width });
        console.log(`Active Section: ${activeSection}, Left: ${left}, Width: ${width}`);
      }
    };

    updateIndicator();

    // Also update on window resize
    window.addEventListener('resize', updateIndicator);

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeSection, navLinks]);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-16">
      <nav className="relative flex justify-center items-center h-full" ref={navRef}>
        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            ref={(el) => (linkRefs.current[index] = el)}
            className={`
              px-4
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
            h-[2px] 
            bg-black 
            transition-all 
            duration-300 
            ease-in-out
          "
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
        />
      </nav>
    </header>
  );
}

export default Header;









