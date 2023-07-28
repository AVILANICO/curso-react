import React from 'react'
import { useState } from 'react'
import AddTask from './AddTask'

export default function ListadoApp() {

  const Items = ({ nombre, visto }) => {
    return (
      <li>
        {nombre}
        {visto ? '✅' : '⛔'}
      </li>
    )
  }

  let listadoSecciones = [
    { id: 1, nombre: 'Instalaciones necesarios', visto: true },
    { id: 2, nombre: 'Uso de Vite', visto: true },
    { id: 3, nombre: 'Componentes', visto: true },
    { id: 4, nombre: 'Variables en JSX', visto: true },
    { id: 5, nombre: 'Props', visto: true },
    { id: 6, nombre: 'Eventos', visto: true },
    { id: 7, nombre: 'UseState', visto: true },
    { id: 8, nombre: 'Redux', visto: false },
    { id: 9, nombre: 'CustomHooks', visto: false }
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones)

  const onAddTask = (value) => {
    let valor = value.trim()
    if (valor < 1) return
    const nuevaTarea = {
      id: arreglo.length + 1,
      nombre: valor,
      visto: false
    }
    setArreglo([...arreglo, nuevaTarea])
  }

  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <AddTask agregarTarea={onAddTask}></AddTask>
      <ol>
        {arreglo.map(e => <Items key={e.id} nombre={e.nombre} visto={e.visto}></Items>)}
      </ol>

    </>
  )
}

