import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Header from '../components/Header';

function LandingPage() {
  useEffect(() => {
    // Scroll to the top on first mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Hero />

      <Header />

      <main>
        <div
          id="home"
          className="h-screen flex items-center justify-center bg-red-100"
        >
          <h2 className="text-2xl font-semibold">Home Section (Placeholder)</h2>
        </div>

        <div
          id="yap"
          className="h-screen flex items-center justify-center bg-blue-100"
        >
          <h2 className="text-2xl font-semibold">Yap Section (Placeholder)</h2>
        </div>

        <div
          id="skills"
          className="h-screen flex items-center justify-center bg-green-100"
        >
          <h2 className="text-2xl font-semibold">Skills Section (Placeholder)</h2>
        </div>

        <div
          id="projects"
          className="h-screen flex items-center justify-center bg-yellow-100"
        >
          <h2 className="text-2xl font-semibold">Projects Section (Placeholder)</h2>
        </div>

        <div
          id="contact"
          className="h-screen flex items-center justify-center bg-purple-100"
        >
          <h2 className="text-2xl font-semibold">Contact Section (Placeholder)</h2>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;


