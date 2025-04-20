// src/App.jsx
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import FAQ from './components/sections/FAQ'
import Insights from './components/sections/Insights'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Projects />
          <Testimonials />
          <Insights />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
