import './App.css'
import { useEffect, useState } from 'react'
import Login from './page/Login'
import Dashboard from './page/Dashboard'
import statictable from './page/statictable'
function App() {
 
    const [user, setUser] = useState(null)

  useEffect(() => {
    const savedUser = localStorage.getItem('adminPortalUser')
    if (savedUser) {
      const userObject = JSON.parse(savedUser)
      setUser(userObject)
    }
  }, [])

  function handleLogin(userData) {
    localStorage.setItem('adminPortalUser', JSON.stringify(userData))
    setUser(userData)
  }

  function handleLogout() {
    localStorage.removeItem('adminPortalUser')
    setUser(null)
  }

  if (user) {
    return <Dashboard user={user} onLogout={handleLogout} />
  }

  return <Login onLogin={handleLogin} />
}

export default App
