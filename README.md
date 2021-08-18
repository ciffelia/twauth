# twauth

[![CI Status](https://github.com/ciffelia/twauth/workflows/CI/badge.svg?branch=master)](https://github.com/ciffelia/twauth/actions?query=workflow%3ACI+branch%3Amaster)
[![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)  
The simplest way to obtain Twitter API access token & secret.

## Usage

1. Open your app at [Twitter Developers](https://developer.twitter.com/en/apps).
2. Add http://localhost:8080/callback to callback URLs.
3. Create `twauth.env` configuration file:
   ```sh
   TWITTER_CALLBACK_URL=http://localhost:8080/callback
   TWITTER_CONSUMER_KEY=xxx
   TWITTER_CONSUMER_SECRET=xxx
   ```
4. Open your terminal and run:
   ```sh
   docker run -it --rm --env-file=twauth.env --publish=8080:8080 ghcr.io/ciffelia/twauth
   ```
5. Open your browser and access http://localhost:8080/.
