import React from 'react'
import PropTypes from 'prop-types'
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

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm
