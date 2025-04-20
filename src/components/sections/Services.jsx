// src/components/sections/Services.jsx
const Services = () => {
  const services = [
    {
      title: "Brand Strategy",
      description: "Developing comprehensive brand identities that resonate with your target audience",
      icon: "💡"
    },
    {
      title: "Web Design",
      description: "Creating beautiful, functional websites that deliver exceptional user experiences",
      icon: "🎨"
    },
    {
      title: "Content Creation",
      description: "Producing engaging content that tells your brand's story",
      icon: "✍️"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your online presence",
      icon: "📱"
    }
  ]

  return (
    <section id="services" className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Comprehensive solutions for your creative needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
