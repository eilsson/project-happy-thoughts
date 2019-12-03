import React from 'react'
import './textarea.css'

export const TextArea = (props) => {
  return (
    <label>
      <span className="input-label">{props.label}</span>
      <textarea
        type="text"
        onChange={props.onChange}
        value={props.value}
        className="textarea-field"
        rows="2" />
    </label>
  )
}