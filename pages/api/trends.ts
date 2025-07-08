import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Trend = {
  source: string
  topic: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const trends: Trend[] = [
    { source: 'Twitter', topic: '#UEFA2025' },
    { source: 'Twitter', topic: '#Budget2025' },
    { source: 'Reddit', topic: 'r/AskReddit: Strangest Habit' },
    { source: 'Reddit', topic: 'r/worldnews: Mars Mission' },
    { source: 'Google', topic: 'Wimbledon Final 2025' },
    { source: 'Google', topic: 'New AI Launch' },
    { source: 'Reddit', topic: 'r/technology: Foldable Phones' },
    { source: 'Google', topic: 'PM Speech Highlights' },
    { source: 'Twitter', topic: '#ClimateChangeAction' },
    { source: 'Google', topic: 'India vs Australia Series' },
  ]

  // ✅ Ecosystem Credit Hook
  try {
    await axios.post('https://alatreeventures.com/api/award-credit', {
      user: "user_001",
      credits: 1,
      reason: "trend-scrape"
    })
  } catch (err) {
    console.error('Credit API error:', err)
  }

  res.status(200).json(trends)
}
