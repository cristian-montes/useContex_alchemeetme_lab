import { useEffect, useState } from 'react'
import Profile from '../../components/Profile/Profile'
import { useUser } from '../../context/UserContext'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useUser();

  useEffect(() => {
    if (user.name) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [user])

  if (loading) return <h1>Loading...</h1>
  return <Profile/>
}

export default Home



// Code before contextAPI
// const Home = ({ user }) => {
//   const [loading, setLoading] = useState(true);


//   useEffect(() => {
//     if (user.name) {
//       setLoading(false)
//     } else {
//       setLoading(true)
//     }
//   }, [user])

//   if (loading) return <h1>Loading...</h1>
//   return <Profile user={user} />
// }

