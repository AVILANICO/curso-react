import { useState } from "react"
import UserList from "./UserList"

export default function UsersApp() {
  const [endPoint, setEndPoint] = useState('users')
  const handleFetch = () => {
    setEndPoint('comments')
  }
  return (
    <>
      <h1>Lista de usuarios:</h1>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handleFetch}>aqui llamamos a la api</button>
    </>
  )
}
