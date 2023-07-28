import React from 'react'
import { useState } from 'react'

export default function AddTask({ agregarTarea }) {
  const [inputValue, setinputValue] = useState('')

  const onInputChange = (event) => {
    setinputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    agregarTarea(inputValue)
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder='Ingresa nueva tarea' value={inputValue} onChange={onInputChange} />
    </form>
  )
}
