import React from 'react'
import { useState } from 'react'

export default function Contador({ value }) {
  const [counter, setCounter] = useState(value)

  const handleClickSumar = () => {
    setCounter(counter + 1)
  }
  const handleClickRestar = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Contador: </h1>
      <p>value: {counter}</p>
      <button onClick={handleClickSumar}>Sumar</button>
      <button onClick={handleClickRestar}>Restar</button>
    </>
  )
}
