import { useEffect, useState } from 'react'
import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { fetchUser } from './services/user'
import { useUser } from './context/UserContext'

function App() {
  // inital value should match the data type of end value
  // const [user, setUser] = useState({}) -- code before contextAPI
  const{ setUser } = useUser();

  useEffect(() => {
    fetchUser()
      .then((fetchedUser) => {
        setUser(fetchedUser)
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`)
      })
  }, [setUser])

  return (
    // <Layout user={user}>
    //   <Home user={user} />
    // </Layout> 
    // the 3 above lines are code before contextAPI

    <Layout>
      <Home />
    </Layout>
  )
}

export default App
