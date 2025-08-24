import Redis from 'ioredis'

const url = process.env.REDIS_URL
if (!url) throw new Error('REDIS_URL not set')

let client: Redis
if (!globalThis['__redis']) {
  client = new Redis(url)
  globalThis['__redis'] = client
} else {
  client = globalThis['__redis']
}

export default client
