// src/components/sections/Testimonials.jsx
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Working with Maisonadrian was a game-changing experience for our brand.",
      author: "Sarah Johnson",
      role: "Creative Director",
      company: "Design Co."
    },
    {
      quote: "Their attention to detail and creative vision exceeded our expectations.",
      author: "Michael Chen",
      role: "CEO",
      company: "Tech Innovators"
    },
    {
      quote: "The team's professionalism and expertise made all the difference.",
      author: "Emma Williams",
      role: "Marketing Manager",
      company: "Luxury Brands"
    }
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            What our clients say about us
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
