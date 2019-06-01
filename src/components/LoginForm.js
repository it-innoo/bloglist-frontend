import React from 'react'
import Notification from './Notification'

const LoginForm = ({
  message,
  username,
  password,
  onUsernameChange,
  onPasswordChange,
  onSubmit,
}) => {
  return (
    <div>
      <h2>log into application</h2>
      <Notification
        message={message}
        className='error'
      />

      <form onSubmit={onSubmit}>
        <div>
          käyttäjätunnus
          <input
            type="text"
            placeholder={username}
            onChange={onUsernameChange}
          />
        </div>
        <div>
          salasana
          <input
            type="password"
            placeholder={password}
            onChange={onPasswordChange}
          />
        </div>
        <button type="submit">kirjaudu</button>
      </form>
    </div>
  )
}

export default LoginForm
