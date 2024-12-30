import React, { useState, useEffect } from 'react';

function Hero() {
  const [fade, setFade] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setFade(true);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleTransitionEnd() {
    if (fade) {
      setHidden(true);
    }
  }

  if (hidden) return null;

  return (
    <div
      className={`
        absolute top-0 left-0
        w-full h-screen
        z-50
        flex items-center justify-center
        bg-white
        transition-all duration-700
        ${fade ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-0'}
      `}
      onTransitionEnd={handleTransitionEnd}
    >
      <h1
        className="
          font-[Livvic] text-7xl italic font-medium
          bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300
          bg-[length:200%_200%]
          animate-[pearlGradient_8s_ease-in-out_infinite]
          text-transparent bg-clip-text
        "
      >
        hello
      </h1>
    </div>
  );
}

export default Hero;

