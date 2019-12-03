import React from 'react'
import './timestamp.css'

export const Timestamp = (props) => {
  // Converting timestring to milliseconds
  const postTime = Date.parse(props.timestamp)
  const currentTime = Date.now()

  const calculateElapsedTime = (current, previous) => {
    const elapsedTime = current - previous
    const msPerMinute = 60 * 1000
    const msPerHour = msPerMinute * 60
    const msPerDay = msPerHour * 24
    const msPerMonth = msPerDay * 30
    const msPerYear = msPerDay * 365

    if (elapsedTime < msPerMinute) {
      return `${Math.round(elapsedTime / 1000)} seconds ago`
    } else if (elapsedTime < msPerHour) {
      return `${Math.round(elapsedTime / msPerMinute)} minutes ago`
    } else if (elapsedTime < msPerDay) {
      return `${Math.round(elapsedTime / msPerHour)} hours ago`
    } else if (elapsedTime < msPerMonth) {
      return `${Math.round(elapsedTime / msPerDay)} days ago`
    } else if (elapsedTime < msPerYear) {
      return `${Math.round(elapsedTime / msPerMonth)} months ago`
    }
  }

  const timeSincePost = calculateElapsedTime(currentTime, postTime)

  return (
    <p className="timestamp">
      {timeSincePost}
    </p>
  )
}