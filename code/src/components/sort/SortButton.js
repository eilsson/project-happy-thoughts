import React from "react"
import "./sortButton.css"

export const SortButton = (props) => {
  return (
    <button type="button" className={props.className} onClick={props.onClick} aria-label={props.ariaLabel}>
      {props.text}
    </button>
  )
}