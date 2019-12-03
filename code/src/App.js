import React, { useState, useEffect } from 'react'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")


  // Get data from API
  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(response => response.json())
      .then(json => setThoughts(json))
  }, [])

  const handleFormSubmit = (event) => {
    event.preventDefault()

    // Send post request to api
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      .then((response) => response.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
      })
  }

  return (
    <div>
      <div><p>{newThought}</p></div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <span>What is making you happy right now?</span>
          <input
            type="text"
            onChange={(event) => setNewThought(event.target.value)}
            value={newThought} />
        </label>
        <button type="submit">Send Happy Thought</button>
      </form>
      {thoughts.map(thought => (
        <div key={thought._id}>
          <p>{thought.message} {thought.id}</p>
          <p>{thought.hearts}</p>
          <p>{thought.createdAt}</p>
        </div>
      ))}
    </div>
  )
}
