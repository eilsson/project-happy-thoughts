import React from "react"
import "./loading.css"

export const Loading = ({numberOfCards, ...props}) => {
  let cards = [];
  for (let count = 0; count < numberOfCards; count++) {
    cards.push(count);
  }

  return (
    <>
      { cards.map((card) => <div key={card} className="loading-card"></div>)}
    </>
  )
}