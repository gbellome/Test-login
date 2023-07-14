import { useAuth } from '../../context/authContext'

const Home = () => {
  const { user, logOut } = useAuth()

  console.log(user)

  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.error(error.message)
    }
  }

  return (
    <>
      <div>Hola {user.email}</div>
      <button onClick={handleLogOut}>salir</button>
    </>
  )
}

export default Home
