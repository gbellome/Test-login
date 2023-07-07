import { useAuth } from '../../context/userContext/authContext'

const Home = () => {
  const { user } = useAuth()

  console.log(user)
  return <div>Home test</div>
}

export default Home
