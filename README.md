# twauth
[![CI Status](https://github.com/ciffelia/twauth/workflows/CI/badge.svg?branch=master)](https://github.com/ciffelia/twauth/actions?query=workflow%3ACI+branch%3Amaster)
[![MIT License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)  
The simplest way to obtain Twitter API access token & secret.

## Usage

1. Set your app's callback URL to `http://localhost:8080/callback` at [Twitter Developers](https://developer.twitter.com/en/apps).
2. Grab your app's consumer key and secret.
3. Open the shell and run:
    ```sh
    echo "TWITTER_CALLBACK_URL=http://localhost:8080/callback" >> twauth.env
    echo "TWITTER_CONSUMER_KEY=xxx" >> twauth.env
    echo "TWITTER_CONSUMER_SECRET=xxx" >> twauth.env
    docker run -it --rm --env-file=twauth.env --publish=8080:8080 ciffelia/twauth
    ```
4. Open your browser and access http://localhost:8080/.

## Docker Image

Available at [Docker Hub](https://hub.docker.com/repository/docker/ciffelia/twauth)
