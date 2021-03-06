# Next Static Hosting

![image of website](https://github.com/evantahler/next-static-hosting/blob/master/public/images/site.png?raw=true)

[![Greenkeeper badge](https://badges.greenkeeper.io/evantahler/next-static-hosting.svg)](https://greenkeeper.io/)

[![Build Status](https://circleci.com/gh/evantahler/next-static-hosting.png)](https://circleci.com/gh/evantahler/next-static-hosting)

## Presentation

This project is for a presentation I gave at Seattle.JS on September 12, 2019. You can [see the slides here](https://speakerdeck.com/evantahler/using-next-dot-js-to-build-static-dynamic-websites-dot-dot-dot-and-never-pay-for-font-end-hosting-again)

## Attribution

This is a [React Project](https://facebook.github.io/react/) utilizing [next.js](https://github.com/zeit/next.js/).
Ths computer image was from Unsplash.com and Tianyi Ma (https://unsplash.com/photos/WiONHd_zYI4)

## Install

- `npm install`

## Running in Development

- `npm run dev`

## Building for Production

(see `./bin/deploy`)
The master branch of this repository is automatically built and pushed to the `gh-pages` branch of this project by Circle.CI on a successful test run. We statically host this project on www.evantahler.com via github pages.

## Linting

We use [standard.js](https://standardjs.com) to manage our lint rules. We run `standard` as part of our test suite, and your contributions must pass. Standard is _very_ opinionated and inflexible such that we cannot inject our own opinions. There are no eslint/jshint files to manage in this project.

## CSS

- we use normalize.css to clear away all browser-added CSS
- all components provide thier own CSS inline, including the `page` layout
