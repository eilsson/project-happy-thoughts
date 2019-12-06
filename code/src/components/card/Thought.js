import React from "react"
import "./thought.css"

export const Thought = (props) => {
  return (
    <h2 className="thought">
      {props.happyThought}
    </h2>
  )
}