import React, { useEffect } from 'react';
import Hero from '../components/Hero';

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Hero />

      <main className="h-[50vh] p-8 pt-20">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold">Landing Page Content</h2>
          <p className="mt-2">User sees this after Hero fades out.</p>
        </section>
      </main>
    </div>
  );
}

export default LandingPage;

