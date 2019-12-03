import React, { useState, useEffect } from 'react'
import { Card } from './components/layout/Card'
import { Text } from './components/layout/Text'
import { Likes } from './components/layout/Likes'
import { Timestamp } from './components/layout/Timestamp'
import { Form } from './components/form/Form'
import { TextArea } from './components/form/TextArea'

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
    setNewThought("")
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <TextArea
          label="What is making you happy right now?"
          onChange={(event) => setNewThought(event.target.value)}
          value={newThought} />
        <button type="submit">Send Happy Thought</button>
      </Form>
      {thoughts.map(thought => (
        <Card key={thought._id}>
          <Text>
            {thought.message}
          </Text>
          <Likes numberOfLikes={thought.hearts} />
          <Timestamp timestamp={thought.createdAt} />
        </Card>
      ))}
    </div>
  )
}
