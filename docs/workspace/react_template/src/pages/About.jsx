// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <article className="max-w-3xl mx-auto">
      <section className="mb-16">
        <h1 className="font-lora text-4xl mb-8 font-semibold">About</h1>
        <div className="space-y-6 font-roboto">
          <h2 className="text-3xl font-lora font-medium">Hi, I'm Adrian – your strategic wordsmith.</h2>
          <p className="text-xl leading-relaxed">
            I help DTC brands connect and convert through sharp, emotionally intelligent copy.
          </p>
          <p className="text-xl leading-relaxed">
            From email flows and landing pages to ad creatives and brand voice strategy – I write words that move people to act.
          </p>
          <p className="text-lg leading-relaxed mt-8">
            With a background in e-commerce and storytelling, I've worked with bold, design-led brands to build loyalty, boost engagement, and ultimately drive sales.
          </p>
        </div>
      </section>
      
      <section id="services" className="mb-16">
        <h2 className="font-lora text-3xl mb-6 font-semibold">What I Offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-2 border-coffee pl-6 py-2">
            <h3 className="font-lora text-xl mb-2">Website Copy</h3>
            <p className="font-roboto text-gray-700">Homepages, Landing Pages, Product Pages</p>
          </div>
          <div className="border-l-2 border-coffee pl-6 py-2">
            <h3 className="font-lora text-xl mb-2">Email Marketing</h3>
            <p className="font-roboto text-gray-700">Welcome Series, Flows, Launch Sequences</p>
          </div>
          <div className="border-l-2 border-coffee pl-6 py-2">
            <h3 className="font-lora text-xl mb-2">Product Descriptions</h3>
            <p className="font-roboto text-gray-700">eCommerce, marketplaces</p>
          </div>
          <div className="border-l-2 border-coffee pl-6 py-2">
            <h3 className="font-lora text-xl mb-2">Social Media Copy</h3>
            <p className="font-roboto text-gray-700">Captions, Ad Creatives, Organic Posts</p>
          </div>
          <div className="border-l-2 border-coffee pl-6 py-2">
            <h3 className="font-lora text-xl mb-2">Brand Voice Guidelines</h3>
            <p className="font-roboto text-gray-700">Tone of voice development and documentation</p>
          </div>
          <div className="border-l-2 border-coffee pl-6 py-2">
            <h3 className="font-lora text-xl mb-2">Copy Audits & Strategy</h3>
            <p className="font-roboto text-gray-700">Consulting and optimization of existing copy</p>
          </div>
        </div>
      </section>
      
      <section className="mb-16">
        <h2 className="font-lora text-3xl mb-8 font-semibold">Client Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-roboto italic text-gray-700 mb-6">
              "Adrian's work on our email campaigns transformed our customer engagement. His copy not only captures our brand voice perfectly but has directly contributed to a 32% increase in open rates."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-gray-600 text-sm">Marketing Director, Formulated For</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-roboto italic text-gray-700 mb-6">
              "Working with Adrian was a game-changer for our product descriptions. His ability to highlight benefits while maintaining our brand's distinctive voice led to a significant improvement in conversion rates."
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-medium">Michael Chen</p>
                <p className="text-gray-600 text-sm">Founder, SecondSkin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="my-16 text-center">
        <a 
          href="mailto:adrian@maisonadrian.com" 
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium text-lg transition-colors duration-200"
        >
          Let's work together
        </a>
      </div>
    </article>
  );
}

export default About;