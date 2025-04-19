// src/pages/Portfolio.jsx
import React from 'react';

function Portfolio() {
  const projects = [
    {
      title: "Formulated For",
      description: "Brand positioning, email sequences & homepage copy for a new clean skincare label.",
      image: "https://via.placeholder.com/600x400?text=Formulated+For"
    },
    {
      title: "SecondSkin",
      description: "Facebook ad copy & landing page optimization for a sustainable basics brand.",
      image: "https://via.placeholder.com/600x400?text=SecondSkin"
    },
    {
      title: "BleachBoy Club",
      description: "Creative direction & launch messaging for a Gen-Z streetwear label.",
      image: "https://via.placeholder.com/600x400?text=BleachBoy+Club"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-lora text-4xl mb-8 font-semibold">Selected Work</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-ivory overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={project.image}
              alt={`${project.title} project`} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-lora text-2xl mb-2">{project.title}</h3>
              <p className="text-mocha">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="https://instagram.com/Maison_Adrian" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-coffee text-ivory px-6 py-3 rounded hover:bg-charcoal transition-colors"
        >
          View More Work on Instagram
        </a>
      </div>
    </div>
  );
}

export default Portfolio;