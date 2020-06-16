import Koa from 'koa'
import Router from '@koa/router'
import Twitter from 'twitter-lite'
import * as config from './config'

const client = new Twitter({
  consumer_key: config.consumerKey,
  consumer_secret: config.consumerSecret
})

const app = new Koa()
const router = new Router()

router.get('/', async (ctx, next) => {
  const oauthResult = await client.getRequestToken(config.callbackUrl)

  if (oauthResult.oauth_callback_confirmed === 'true') {
    ctx.redirect(`https://api.twitter.com/oauth/authenticate?oauth_token=${oauthResult.oauth_token}`)
  } else {
    throw new Error('oauth_callback_confirmed is not "true".')
  }

  await next()
})

router.get('/callback', async (ctx, next) => {
  const oauthResult = await client.getAccessToken({
    oauth_token: ctx.request.query.oauth_token,
    oauth_verifier: ctx.request.query.oauth_verifier
  })

  /* eslint-disable @typescript-eslint/restrict-plus-operands */
  ctx.body = ''
  ctx.body += `User ID: ${oauthResult.user_id}\n`
  ctx.body += `Screen name: ${oauthResult.screen_name}\n`
  ctx.body += `Access Token: ${oauthResult.oauth_token}\n`
  ctx.body += `Access Token Secret: ${oauthResult.oauth_token_secret}`
  /* eslint-enable @typescript-eslint/restrict-plus-operands */

  await next()
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.port, () => {
    console.log(`Server listening at http://localhost:${config.port}/`)
  })
