// src/pages/LandingPage.js

import React, { useEffect } from 'react';
import Header from '../components/Header';

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen scroll-smooth">
      {/* Fixed Header */}
      <Header />

      {/* Placeholder Sections */}
      <main className="">
        <section id="home" className="h-screen flex items-center justify-center bg-red-100">
          <h1 className="text-4xl font-bold">Home Section (Placeholder)</h1>
        </section>

        <section id="about" className="h-screen flex items-center justify-center bg-blue-100">
          <h2 className="text-4xl font-bold">Yap (About) Section (Placeholder)</h2>
        </section>

        <section id="skills" className="h-screen flex items-center justify-center bg-green-100">
          <h2 className="text-4xl font-bold">Skills Section (Placeholder)</h2>
        </section>

        <section id="projects" className="h-screen flex items-center justify-center bg-yellow-100">
          <h2 className="text-4xl font-bold">Projects Section (Placeholder)</h2>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-purple-100">
          <h2 className="text-4xl font-bold text-white">Contact Section (Placeholder)</h2>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;




