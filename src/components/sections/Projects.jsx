// src/components/sections/Projects.jsx
const Projects = () => {
  const projects = [
    {
      title: "Brand Evolution",
      category: "Branding",
      image: "https://via.placeholder.com/400x300",
      description: "Complete brand transformation for a luxury lifestyle company"
    },
    {
      title: "Digital Experience",
      category: "Web Design",
      image: "https://via.placeholder.com/400x300",
      description: "Immersive website design for an art gallery"
    },
    {
      title: "Visual Identity",
      category: "Design",
      image: "https://via.placeholder.com/400x300",
      description: "Comprehensive visual system for a boutique hotel"
    }
  ]

  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A selection of our finest work
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-sm">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-sm text-gray-500 dark:text-gray-400">{project.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
