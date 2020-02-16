import React, { useState, useEffect } from "react"
import { Form } from "./components/form/Form"
import { Card } from "./components/card/Card"
import { SortContainer } from './components/sort/SortContainer'
import { SortButton } from './components/sort/SortButton'



export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [thoughtFilter, setThoughtFilter] = useState("")

  const sortOptions = ["new", "old", "popular"]

  // Get data from API
  useEffect(() => {
    let url = thoughtFilter ?
      `https://happy-thoughts-emmie.herokuapp.com/?sort=${thoughtFilter}` :
      "https://happy-thoughts-emmie.herokuapp.com"
    fetch(url)
      .then(response => response.json())
      .then(json => setThoughts(json))
  }, [newThought, thoughtFilter])

  // Send post request to api
  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch("https://happy-thoughts-emmie.herokuapp.com/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: newThought })
    })
      .then((response) => response.json())
      .then(() => setNewThought(newThought))
      .then(() => setNewThought(""))
  }

  // Map through the array of thoughts
  // for each thought check if the id is the same as the liked thought's
  // when it is, add one heart to that thought.
  const onLike = (likedThoughtId) => {

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
      <SortContainer>
        {sortOptions.map(sortOption => (
          <SortButton
            key={sortOption}
            text={sortOption}
            className={`${thoughtFilter === sortOption ? "sort-button active" : "sort-button"}`}
            onClick={() => setThoughtFilter(sortOption)}
          />
        ))}
      </SortContainer>
      {
        thoughts.map(thought => (
          <Card
            key={thought._id}
            onLike={onLike}
            happyThought={thought.message}
            hearts={thought.hearts}
            id={thought._id}
            timestamp={thought.createdAt} />
        ))
      }
    </main >
  )
}
