import React from "react"
import "./likebutton.css"

export const LikeButton = (props) => {
  // When the heart button is clicked
  // use the id for the thought and
  // post like to technigo thoughts
  const handleLike = () => {
    fetch(`https://happy-thoughts-emmie.herokuapp.com/${props.id}/like`, {
      method: "Post",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      // onLike comes from App
      props.onLike(props.id)
    })
  }

  return (
    <button
      type="button"
      className={`like-button ${props.hearts > 0 ? "has-likes" : ""}`}
      onClick={handleLike}>
      <span aria-label="Heart" role="img" className="emoji">❤️</span>
    </button>
  )
}