// src/components/layout/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">© 2024 Maisonadrian. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Instagram
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
 
