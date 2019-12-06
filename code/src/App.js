import React, { useState, useEffect } from "react"
import { Form } from "./components/form/Form"
import { Card } from "./components/card/Card"



export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")


  // Get data from API
  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(response => response.json())
      .then(json => setThoughts(json))
  }, [])

  // Send post request to api
  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then((response) => response.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
      })
    setNewThought("")
  }

  // Map thorough the array of thoughts
  // when the id of the thought is the same as the liked thought's
  // add one heart to that thought
  const addLike = (likedThoughtId) => {

    const updatedThoughts = thoughts.map((thought) => {
      if (thought._id === likedThoughtId) {
        thought.hearts += 1
      }
      return thought
    })
    setThoughts(updatedThoughts)
  }

  return (
    <main>
      <Form
        onSubmit={handleFormSubmit}
        onChange={(event) => setNewThought(event.target.value)}
        value={newThought} />
      {thoughts.map(thought => (
        <Card
          key={thought._id}
          addLike={addLike}
          happyThought={thought.message}
          hearts={thought.hearts}
          id={thought._id}
          timestamp={thought.createdAt} />
      ))}
    </main>
  )
}
