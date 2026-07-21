function ErrorMessage({ message }) {
  return (
    <div className="bg-red-400 bg-opacity-30 text-white text-center py-4 px-6 rounded-xl">
      <p className="text-xl mb-1">❌ {message}</p>
      <p className="text-sm opacity-80">Try checking the spelling or use English city name</p>
    </div>
  )
}

export default ErrorMessage