export const port = process.env.PORT ?? 8080

if (process.env.TWITTER_CALLBACK_URL == null) {
  throw new Error('TWITTER_CALLBACK_URL is not set.')
}
export const callbackUrl = process.env.TWITTER_CALLBACK_URL

if (process.env.TWITTER_CONSUMER_KEY == null) {
  throw new Error('TWITTER_CONSUMER_KEY is not set.')
}
export const consumerKey = process.env.TWITTER_CONSUMER_KEY

if (process.env.TWITTER_CONSUMER_SECRET == null) {
  throw new Error('TWITTER_CONSUMER_SECRET is not set.')
}
export const consumerSecret = process.env.TWITTER_CONSUMER_SECRET
