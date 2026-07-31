import { useState } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ErrorMessage from './components/ErrorMessage'

const API_KEY = 'f89fee41e82fb0ad843a9e327830dff0'

function App() {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [history, setHistory] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const handleSearch = async (city) => {
    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      const data = await response.json()

      if(data.cod === '404') {
        setError('City not found! Please try again.')
      } else {
        setWeather(data)
        setHistory((prev) => {
          const filtered = prev.filter((c) => c.toLowerCase() !== city.toLowerCase())
          return [city, ...filtered].slice(0, 5)
        })
      }

    } catch(err) {
      setError('Something went wrong. Please try again.')
    }

    setLoading(false)
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${
      darkMode
        ? 'bg-gradient-to-br from-gray-900 to-gray-700'
        : 'bg-gradient-to-br from-blue-400 to-indigo-900'
    }`}>
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
           🌤️ Weather App
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-xl hover:bg-opacity-30 transition-all"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <SearchBar onSearch={handleSearch} />

        {/* Search History */}
        {history.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {history.map((city) => (
              <button
                key={city}
                onClick={() => handleSearch(city)}
                className="bg-white bg-opacity-20 text-white px-4 py-1 rounded-full text-sm hover:bg-opacity-30 transition-all"
              >
                🕐 {city}
              </button>
            ))}
          </div>
        )}

        {loading && (
          <div className="text-white text-center text-xl">
            Loading... ⏳
          </div>
        )}

        {error && <ErrorMessage message={error} />}

        {weather && <WeatherCard data={weather} />}

      </div>
    </div>
  )
}

export default App