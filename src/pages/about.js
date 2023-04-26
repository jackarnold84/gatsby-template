import React from "react"
import { Link } from "gatsby"

const AboutPage = () => {
  const numbers = [1, 2, 3, 4]
  return (
    <main>
      <h1>About Page</h1>
      <p>This is my about page</p>
      <Link to="/">
        <h3>Return Home</h3>
      </Link>
      {
        numbers.map(x => (
          <p>{x}</p>
        ))
      }
    </main>
  )
}

export default AboutPage

export const Head = () => <title>About Page</title>
