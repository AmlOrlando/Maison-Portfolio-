// src/components/layout/Header.jsx
import ThemeToggle from '../ui/ThemeToggle'

const Header = () => {
  return (
    <header className="fixed w-full bg-white dark:bg-gray-900 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Maisonadrian
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</a>
          <a href="#services" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Services</a>
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header
 
