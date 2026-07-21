import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('')

  const handleSearch = () => {
    if(city.trim() === '') return
    onSearch(city)
    setCity('')
  }

  return (
    <div className="flex gap-2 mb-8">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        placeholder="Enter city name..."
        className="flex-1 px-4 py-3 rounded-xl text-gray-800 text-lg outline-none shadow-lg"
      />
      <button
        onClick={handleSearch}
        className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-indigo-50 transition-colors"
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar