import React from 'react'
import './message.css'

export const Message = (props) => {
  return (
    <h2 className="message">
      {props.children}
    </h2>
  )
}