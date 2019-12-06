import React from "react"
import "./card.css"
import { Thought } from "./Thought"
import { Timestamp } from "./Timestamp"
import { Likes } from "./Likes"

export const Card = (props) => {
  return (
    <article className="card">
      {props.children}
      <Thought happyThought={props.happyThought} />
      <Likes
        id={props.id}
        addLike={props.addLike}
        hearts={props.hearts} />
      <Timestamp timestamp={props.timestamp} />
    </article>
  )
}