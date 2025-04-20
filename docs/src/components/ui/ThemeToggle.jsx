// src/components/ui/ThemeToggle.jsx
import { useTheme } from '../../hooks/useTheme'

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
    >
      {darkMode ? '🌞' : '🌙'}
    </button>
  )
}

export default ThemeToggle
