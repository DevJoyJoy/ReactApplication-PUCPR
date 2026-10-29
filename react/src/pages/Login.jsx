import { useState } from 'react'
import LoginInput from '../components/LoginInput'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (email === 'eduardo@pucpr.br' && password === 'password123') {
      setMessage('Login successful!')
    } else {
      setMessage('Incorrect email or password.')
    }
  }

  return (
    <main className="login">
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <h1>Log in</h1>
        <LoginInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <LoginInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Log in</button>
        <p className="login-message" role="status">{message}</p>
      </form>
    </main>
  )
}

export default Login
