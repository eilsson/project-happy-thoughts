import React from "react"
import "./form.css"

export const Form = (props) => {
  return (
    <form className="thoughts-form" onSubmit={props.onSubmit}>
      <label>
        <span className="input-label">What is making you happy right now? </span>
        <textarea
          type="text"
          onChange={props.onChange}
          value={props.value}
          rows="2" />
        <span className="remaining-character-limit">{140 - props.value.length}</span>
      </label>
      <button type="submit" className="form-button">
        <span className="button-text">
          Send happy thought
        </span>
      </button>
    </form>
  )
}