import { useState, useEffect } from 'react'
import axios from 'axios'

type Trend = {
  source: string
  topic: string
}

export default function Home() {
  const [trends, setTrends] = useState<Trend[]>([])

  const fetchTrends = async () => {
    const res = await axios.get('/api/trends')
    setTrends(res.data)
  }

//   useEffect(() => {
//     const script = document.createElement('script')
//     script.src = 'https://cdn.alatreeventures.com/raffle-widget.js'
//     script.async = true
//     document.body.appendChild(script)
//   }, [])

  useEffect(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.alatreeventures.com/raffle-widget.js'
  script.async = true
  document.body.appendChild(script)

  // ✅ Log as mock if it fails
  script.onerror = () => {
    console.warn('🧩 Raffle widget script failed to load – using mock mode.')
  }
}, [])


  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Bloggies Trend Scraper</h1>
      <button
        onClick={fetchTrends}
        className="px-6 py-2 bg-blue-600 text-white rounded mb-6 hover:bg-blue-700"
      >
        Fetch Trends
      </button>


        {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">
  Test Tailwind
</button> */}


      <ul className="space-y-2">
        {trends.map((trend, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <strong>{trend.source}:</strong> {trend.topic}
          </li>
        ))}
      </ul>
    </main>
  )
}
