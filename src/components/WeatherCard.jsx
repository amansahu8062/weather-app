function WeatherCard({ data }) {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-4 md:p-6 text-white shadow-xl">

      {/* City and Country */}
      <div className="text-center mb-4">
        <h2 className="text-2xl md:text-3xl font-bold">{data.name}, {data.sys.country}</h2>
        <p className="text-white text-opacity-80 capitalize mt-1">
          {data.weather[0].description}
        </p>
      </div>

      {/* Temperature */}
      <div className="text-center mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="mx-auto"
        />
        <p className="text-5xl md:text-6xl font-bold">
          {Math.round(data.main.temp)}°C
        </p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 text-center">
        <div className="bg-white bg-opacity-20 rounded-xl p-2 md:p-3">
          <p className="text-xs md:text-sm opacity-80">Feels Like</p>
          <p className="font-bold text-sm md:text-lg">{Math.round(data.main.feels_like)}°C</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-xl p-2 md:p-3">
          <p className="text-xs md:text-sm opacity-80">Humidity</p>
          <p className="font-bold text-sm md:text-lg">{data.main.humidity}%</p>
        </div>
        <div className="bg-white bg-opacity-20 rounded-xl p-2 md:p-3">
          <p className="text-xs md:text-sm opacity-80">Wind</p>
          <p className="font-bold text-sm md:text-lg">{data.wind.speed} m/s</p>
        </div>
      </div>

    </div>
  )
}

export default WeatherCard