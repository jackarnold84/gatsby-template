import React from "react"
import { Link } from "gatsby"
import '../styles/global.css'
import '../styles/icons.css'

const veggieFontStyle = {
  color: '#37b635',
  fontSize: '24px',
}

const AboutPage = () => {
  const numbers = [1, 2, 3, 4]
  return (
    <main>
      <h1>About Page</h1>
      <p className="veggie">This is my about page</p>
      <p>
        <i className="bi-cloud" />
      </p>
      <p style={veggieFontStyle}>Celery</p>
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
