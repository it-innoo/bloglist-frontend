import React from 'react'

const LoginForm = props => {
  return (
    <div>
      <h2>log into application</h2>
     
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
