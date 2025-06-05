import React from "react";

function About() {
  return (
    <section className="w-full px-6 md:px-20 py-16 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        <h3 className="text-md text-center md:text-left text-lime-400 font-semibold tracking-wide uppercase">
          About Vertex
        </h3>
        <h2 className="text-2xl text-center md:text-left sm:text-3xl font-bold leading-snug">
          Empowering students through creativity, <br />
          collaboration, and community.
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          In a world where learning goes beyond classrooms, Vertex stands as a dynamic student-led club from the ECE Department at COEP. It is a space where nontraditional meets
          operational — bringing students together through collaboration, cultural vibrance, and social impact.
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          Driven by curiosity and passion, Vertex encourages students to think beyond limits and connect — shaping an enriched college experience rooted in teamwork, exploration,
          and growth.
        </p>
      </div>
    </section>
  );
}

export default About;
