import React from 'react'
import './text.css'

export const Text = (props) => {
  return (
    <p className="textmessage">
      {props.children}
    </p>
  )
}