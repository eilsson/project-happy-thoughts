import React, { useState, useEffect } from 'react'
import { Card } from './components/layout/Card'
import { Message } from './components/layout/Message'
import { Likes } from './components/layout/Likes'
import { Timestamp } from './components/layout/Timestamp'
import { Form } from './components/form/Form'
import { TextArea } from './components/form/TextArea'
import { Button } from './components/form/Button'

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
        <Button type="submit" text="Send Happy Thought" />
      </Form>
      {thoughts.map(thought => (
        <Card key={thought._id}>
          <Message>
            {thought.message}
          </Message>
          {thought.hearts === 0 && (
            <Likes numberOfLikes={thought.hearts}
              className="likes" />
          )}
          {thought.hearts > 0 && (
            <Likes numberOfLikes={thought.hearts}
              className="likes has-likes" />
          )}
          <Timestamp timestamp={thought.createdAt} />
        </Card>
      ))}
    </div>
  )
}
