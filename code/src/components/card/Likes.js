import React from "react"
import "./likes.css"
import { LikeButton } from "./LikeButton"

export const Likes = (props) => {
  return (
    <p className="likes" >
      <LikeButton
        id={props.id}
        onLike={props.onLike}
        hearts={props.hearts} />
      <span className="number-of-likes">x {props.hearts}</span>
    </p >
  )
}