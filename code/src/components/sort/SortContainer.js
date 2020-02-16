import React from "react"
import "./sortContainer.css"

export const SortContainer = (props) => {
  return (
    <div className="sort-container">
      <p>
        <span className="sorting-title">Sort by:</span>
        {props.children}
      </p>
    </div>
  )
}