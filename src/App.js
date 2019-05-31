import React, { useState, useEffect } from 'react'
import Blogit from './components/Blogit'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm';

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedInUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  }, [])

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService
        .login({ username, password })

      window.localStorage.setItem(
        'loggedInUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
      console.log('Logged in with user ', user)

    } catch (error) {
      console.log('käyttäjätunnus tai salasana virheellinen')
    }
  }

  const handleLogout = (event) => {
    window.localStorage.clear()
    setUser(null)
    console.log(`${user.name} logged out`)
  }

  const loginForm = () => {
    return (
      <LoginForm
        username={username}
        password={password}
        onUsernameChange={handleUsernameChange}
        onPasswordChange={handlePasswordChange}
        onSubmit={handleLogin}
      />
    )
    
  }

  const blogit = () => {
    return (
      <Blogit
        user={user}
        logoutHandler={handleLogout}
      />
    )
  }

  return (
    <div>
      {user === null ?
        loginForm() :
        blogit()
      }
    </div>
  )
}

export default App