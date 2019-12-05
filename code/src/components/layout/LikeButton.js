import React from 'react'
import './likebutton.css'

export const LikeButton = (props) => {
  // When the heart button is clicked
  // use the id for the thought and
  // post like to technigo thoughts
  const handleLikeClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
      method: "Post",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => {
      // when the like has been posted invoke the addLike function
      // with the id as an argument
      props.addLike(props.id)
    })
  }

  return (
    <button
      type="button"
      className={`like-button ${props.hearts > 0 ? "has-likes" : ""}`}
      onClick={handleLikeClick}>
      <span aria-label="Heart" role="img" className="emoji">❤️</span>
    </button>
  )
}