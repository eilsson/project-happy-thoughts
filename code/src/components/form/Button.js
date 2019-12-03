import React from 'react'
import './button.css'

export const Button = (props) => {
  return (
    <button type={props.type}><span className="button-text">{props.text}</span></button>
  )
}