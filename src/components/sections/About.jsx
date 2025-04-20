// src/components/sections/About.jsx
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Maisonadrian</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We are a boutique creative studio dedicated to crafting unique and meaningful experiences. 
            Our philosophy centers on minimalist design principles that emphasize clarity and purpose.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">To redefine modern aesthetics through thoughtful design</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">Creating lasting impressions through innovative solutions</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Values</h3>
              <p className="text-gray-600 dark:text-gray-300">Simplicity, authenticity, and attention to detail</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
