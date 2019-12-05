import React from 'react'
import './likes.css'

export const Likes = (props) => {
  return (
    <p className={props.className} >
      <span aria-label="Heart" role="img" className="emoji">❤️</span>
      <span className="numbers-of-likes">x {props.numberOfLikes}</span>
    </p >
  )
}