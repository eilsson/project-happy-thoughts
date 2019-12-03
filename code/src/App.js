import React, { useState, useEffect } from 'react'

export const App = () => {
  useEffect(() => {
    fetch('https://technigo-thoughts.herokuapp.com/')
      .then(response => response.json())
      .then(json => console.log(json))
  })
  return (
    <div>
      This will be a Happy thoughts app.
    </div>
  )
}
