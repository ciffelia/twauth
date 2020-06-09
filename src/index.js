const Koa = require('koa')
const Router = require('@koa/router')
const Twitter = require('twitter-lite')

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET
})

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  const oauthResult = await client.getRequestToken(process.env.TWITTER_CALLBACK_URL)
  ctx.redirect(`https://api.twitter.com/oauth/authenticate?oauth_token=${oauthResult.oauth_token}`)

  await next()
})

router.get('/callback', async (ctx, next) => {
  const oauthResult = await client.getAccessToken({
    oauth_token: ctx.request.query.oauth_token,
    oauth_verifier: ctx.request.query.oauth_verifier
  })

  ctx.body = ''
  ctx.body += `User ID: ${oauthResult.user_id}\n`
  ctx.body += `Screen name: ${oauthResult.screen_name}\n`
  ctx.body += `Access Token: ${oauthResult.oauth_token}\n`
  ctx.body += `Access Token Secret: ${oauthResult.oauth_token_secret}`

  await next()
})

const port = process.env.PORT || 8080
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`)
  })
