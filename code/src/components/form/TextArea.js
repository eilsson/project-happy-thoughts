import React from "react"
import "./textarea.css"

export const TextArea = (props) => {
  return (
    <label>
      <span className="input-label">What is making you happy right now?</span>
      <textarea
        type="text"
        onChange={props.onChange}
        value={props.value}
        rows="2" />
      <span className={`remaining-character-limit ${props.value.length > 140 ? "exceeded-character-limit" : ""}`}>{140 - props.value.length}</span>
    </label>
  )
}