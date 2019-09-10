import React from 'react'
import Page from './../components/templates/page'
import GithubStars from './../components/github-stars'

const title = 'Next Static Hosting'
const purple = 'rgb(123,42,124)'
const style = {
  width: '100%',
  height: '100%',
  backgroundColor: purple,
  padding: 20,
  boxShadow: `0px 0px 40px 40px ${purple}`,
  textAlign: 'center',
  color: 'white'
}

function IndexPage () {
  return (
    <Page title={title}>
      <div style={style}>
        <h1>Next Static Hosting</h1>
        <h2>This repository has <GithubStars /> GitHub ✨</h2>
        <p><a style={{ color: 'white' }} href='https://github.com/evantahler/next-static-hosting' target='_new'>github.com/evantahler/next-static-hosting</a></p>
      </div>
    </Page>
  )
}

export default IndexPage
