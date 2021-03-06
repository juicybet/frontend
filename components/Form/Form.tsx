import React, { useState } from "react"
import {
  StyledButton,
  StyledError,
  StyledFieldset,
  StyledForm,
  FormWrapper,
  StyledInput,
  StyledTextArea,
} from "./Form.style"

const initialState = {
  name: "",
  email: "",
  message: "",
  gender: "",
}

export interface Istate {
  name: string
  email: string
  message: string
  gender: string
  [propName: string]: string | number | undefined
}

export const Form = () => {
  const [data, setData] = useState<Istate>(initialState)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log("submitted!")
    console.log(data)
    for (let key in data) {
      if (data[key] === "") {
        setError(`${key} cannot be blank `)
        return
      }
    }
    setError("")
    console.log("Succeeded!!!")
    setData(initialState)
  }

  const handleInput: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const inputName = e.currentTarget.name
    const value = e.currentTarget.value
    setData((prev) => ({ ...prev, [inputName]: value }))
  }

  const ErrorDiv = () => {
    return (
      <StyledError>
        <p>{error}</p>
      </StyledError>
    )
  }

  return (
    <>
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h2>Testing Form</h2>
          <label htmlFor="name">Name</label>
          <StyledInput id="name" type="text" name="name" value={data.name} onChange={handleInput} />
          <label htmlFor="email">Email</label>
          <StyledInput id="email" type="email" name="email" value={data.email} onChange={handleInput} />
          <StyledFieldset>
            <legend>Gender</legend>
            <label>
              <input type="radio" value="male" name="gender" checked={data.gender === "male"} onChange={handleInput} />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                name="gender"
                checked={data.gender === "female"}
                onChange={handleInput}
              />
              Female
            </label>
          </StyledFieldset>
          <label htmlFor="message">Message</label>
          <StyledTextArea name="message" id="message" value={data.message} onChange={handleInput} />
          {error && <ErrorDiv />}
          <StyledButton type="submit">submit</StyledButton>
        </StyledForm>
      </FormWrapper>
    </>
  )
}
