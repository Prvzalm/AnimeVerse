import fetch from 'node-fetch'
import redis from './redis'

const OPENAI_KEY = process.env.OPENAI_API_KEY
if (!OPENAI_KEY) throw new Error('OPENAI_API_KEY not set')

export async function getAIRecommendations(userId: string, input: Record<string, any>) {
  const cacheKey = `ai:rec:${userId}:${JSON.stringify(input)}`
  const cached = await redis.get(cacheKey)
  if (cached) return JSON.parse(cached)

  const prompt = `You are AnimeVerse assistant. Recommend 10 anime titles with short reasons tailored to user preferences: ${JSON.stringify(
    input
  )}`

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: prompt }],
      max_tokens: 800,
      temperature: 0.9
    })
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`OpenAI error: ${text}`)
  }
  const data = await res.json()
  const result = {
    raw: data,
    text: data.choices?.[0]?.message?.content ?? ''
  }
  await redis.set(cacheKey, JSON.stringify(result), 'EX', 60 * 60) // 1 hour
  return result
}
