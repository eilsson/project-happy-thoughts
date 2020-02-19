import React from "react"
import "./card.css"
import { Thought } from "./Thought"
import { Timestamp } from "./Timestamp"
import { Likes } from "./Likes"

export const Card = (props) => {
  return (
    <article className="card">
      <Thought happyThought={props.happyThought} />
      <Likes
        id={props.id}
        onLike={props.onLike}
        hearts={props.hearts} />
      <Timestamp timestamp={props.timestamp} />
    </article>
  )
}