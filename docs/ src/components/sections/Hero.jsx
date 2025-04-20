// src/components/sections/Hero.jsx
const Hero = () => {
  return (
    <section className="pt-32 pb-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Maisonadrian
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Creating timeless designs that speak to the soul
          </p>
          <a
            href="#contact"
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
