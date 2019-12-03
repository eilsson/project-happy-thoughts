import React, { useState, useEffect } from 'react'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(response => response.json())
      .then(json => setThoughts(json))
  }, [])
  return (
    <div>
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
