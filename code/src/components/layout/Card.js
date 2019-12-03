import React from 'react'
import './card.css'

export const Card = (props) => {
  return (
    <article className="card">
      {props.children}
    </article>
  )
}