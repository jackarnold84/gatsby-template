import React from "react"

const FruitPage = (props) => {
  const fruitName = props.params.name;
  return (
    <main>
      <h1>{fruitName} page</h1>
      <p>I hope you enjoy this fruit</p>
    </main>
  )
}

export default FruitPage

export const Head = () => <title>Fruit Page</title>
