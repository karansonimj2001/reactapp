import './App.css'
import Login from './page/Login'

function App() {
  function handleLogin(email, password, remember) {
    const userData = {
      email,
      password,
      role: 'SUPER ADMIN',
      remember,
      savedAt: new Date().toISOString(),
    }
    localStorage.setItem('adminPortalUser', JSON.stringify(userData))
  }

  return <Login onLogin={handleLogin} />
}

export default App
