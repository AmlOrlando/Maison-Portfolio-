// src/pages/Services.jsx
import React from 'react';

function Services() {
  const services = [
    {
      title: "Website Copy",
      description: "Homepages, Landing Pages, Product Pages that convert visitors into customers."
    },
    {
      title: "Email Marketing",
      description: "Welcome Series, Flows, Launch Sequences that nurture leads and drive sales."
    },
    {
      title: "Product Descriptions",
      description: "Compelling eCommerce and marketplace copy that highlights benefits and creates desire."
    },
    {
      title: "Social Media Copy",
      description: "Engaging captions, ad creatives, and organic posts that build community and drive action."
    },
    {
      title: "Brand Voice Guidelines",
      description: "Developing a consistent, distinctive tone that sets your brand apart in a crowded market."
    },
    {
      title: "Copy Audits & Strategy",
      description: "In-depth analysis and optimization recommendations for your existing content."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="font-lora text-4xl mb-8 font-semibold">Services</h1>
      <p className="text-lg mb-12 font-roboto leading-relaxed">
        Writing is not just about putting words on paper; it is about creating meaning, context, and connection. The right words bridge the gap between your brand's vision and your audience's needs. Each piece of copy is crafted with precision—stripped of excess and focused entirely on emotional and intellectual impact.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border-l-2 border-gray-800 pl-6 py-2">
            <h2 className="font-lora text-2xl mb-2">{service.title}</h2>
            <p className="font-roboto text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="my-16 text-center">
        <a 
          href="mailto:adrian@maisonadrian.com" 
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors duration-200"
        >
          Let's work together
        </a>
      </div>
    </div>
  );
}

export default Services;