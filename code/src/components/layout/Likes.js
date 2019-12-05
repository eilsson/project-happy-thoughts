import React from 'react'
import './likes.css'

export const Likes = (props) => {
  return (
    <p className={props.className} >
      {props.children}
      <span className="numbers-of-likes">x {props.numberOfLikes}</span>
    </p >
  )
}