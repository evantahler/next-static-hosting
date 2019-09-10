import React, { useState, useEffect } from 'react'
import GitHub from 'github-api'

const project = { org: 'evantahler', name: 'next-static-hosting' }

function GithubStars () {
  const github = new GitHub()
  const [stars, setStars] = useState(0)

  async function fetchStars () {
    const repository = github.getRepo(project.org, project.name)
    const repositoryDetails = await repository.getDetails()
    setStars(repositoryDetails.data.stargazers_count)
  }

  useEffect(() => fetchStars(), [])

  return <span id='stargazers'>{stars}</span>
}

export default GithubStars
