import React from 'react'
import Notification from './Notification'

const LoginForm = props => {
  return (
    <div>
      <h2>log into application</h2>
      <Notification
        message={props.message}
        className='error'
      />

    <form onSubmit={props.onSubmit}>
    <div>
          käyttäjätunnus
          <input
            type="text"
            placeholder={props.username}
            onChange={props.onUsernameChange}
          />
        </div>
        <div>
          salasana
            <input
            type="password"
            placeholder={props.password}
            onChange={props.onPasswordChange}
          />
        </div>
        <button type="submit">kirjaudu</button>
    </form>
    </div>
  )
}

export default LoginForm
