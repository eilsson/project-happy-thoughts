import React from 'react'
import moment from 'moment'
import './timestamp.css'

export const Timestamp = (props) => {
  return (
    <p className="timestamp">
      {moment(props.timestamp).fromNow()}
    </p>
  )
}