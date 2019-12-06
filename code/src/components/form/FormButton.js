import React from "react"
import "./formbutton.css"

export const FormButton = (props) => {
  return (
    <button
      type="submit"
      className="form-button"
      value={props.value}
      disabled={props.value.length < 5 || props.value.length > 140 ? "disabled" : ""}>
      <span className="button-text">
        Send happy thought
      </span>
    </button>
  )
}