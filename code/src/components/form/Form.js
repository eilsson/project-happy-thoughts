import React from 'react'
import './form.css'

export const Form = (props) => {
  return (
    <form className="thoughts-form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}