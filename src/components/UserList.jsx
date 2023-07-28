import { useEffect, useState } from "react"

export default function UserList({ endPoint }) {

  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
      const data = await response.json()
      setUsers(data)

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [endPoint])

  return (
    <>
      <ul>
        {endPoint == 'users' ? users.map(user => <li key={user.id}>Nombre: {user.name}</li>)
          : users.map(user => <li key={user.id}>Nombre: {user.body}</li>)}
      </ul>
    </>
  )
}
