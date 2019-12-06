import React from "react"
import "./form.css"
import { TextArea } from "./TextArea"
import { FormButton } from "./FormButton"

export const Form = (props) => {
  return (
    <form className="thoughts-form" onSubmit={props.onSubmit}>
      <TextArea
        onChange={props.onChange}
        value={props.value} />
      <FormButton />
    </form>
  )
}