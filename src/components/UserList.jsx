import UseFetchData from "../hooks/UseFetchData"

export default function UserList({ endPoint }) {
  const { data, isLoading } = UseFetchData(endPoint)
  return (
    <>
      <ul>
        {isLoading ? <p>Cargando...</p> : endPoint == 'users' ? data.map(user => <li key={user.id}>Nombre: {user.name}</li>)
          : data.map(user => <li key={user.id}>Nombre: {user.body}</li>)}
      </ul>
    </>
  )
}