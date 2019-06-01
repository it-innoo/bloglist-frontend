import React, { useState, useEffect } from 'react'
import Blogit from './components/Blogit'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import Togglable from './components/Togglable'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
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

    } catch (error) {
      setMessage('käyttäjätunnus tai salasana virheellinen')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    window.localStorage.clear()
    setMessage(`${user.name} logged out`)
    setTimeout(() => {
      setMessage(null)
    }, 5000)
    setUser(null)
  }

  const loginForm = () => {
    return (
      <Togglable buttonLabel="login">
        <LoginForm
          message={message}
          username={username}
          password={password}
          onUsernameChange={handleUsernameChange}
          onPasswordChange={handlePasswordChange}
          onSubmit={handleLogin}
        />
      </Togglable>
    )
  }

  const blogit = () => {
    return (
      <Blogit
      />
    )
  }

  return (
    <div>
      <h1>Blogs</h1>
      {user === null ?
        loginForm() :
        <div>
          <p>{user.name} logged in</p>
          <button onClick={handleLogout}>logout</button>
        </div>
      }
      { blogit() }
    </div>
  )
}

export default App