import './Login.css'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import login from '../../datas/login.json'
import { useNavigate } from "react-router-dom"
import { useState } from 'react'

const Login = () => {
  // Hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  // Events
  const handleChangeEmail = e => { setEmail(e.target.value) }
  const handleChangePassword = e => { setPassword(e.target.value) }

  const handleClick = e => {
    if (email === login.username && password === login.password) {
      navigate('/home')
      localStorage.setItem('auth', true)
    } else {
      setError(true)
      localStorage.setItem('auth', false)
    }
  }

  return (
    <div className="login">
      <Jumbotron text="Connexion" />

      <div className="login__form w-50">
        <div className={error ? 'alert alert-danger' : 'd-none'}>
          Email ou mot de passe incorrect
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input value={email} type="email" className="form-control" id="email" onChange={handleChangeEmail} />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input value={password} type="password" className="form-control" id="password" onChange={handleChangePassword} />
        </div>
        <input type="button" value="Se connecter" className='btn btn-primary mt-4' onClick={handleClick} />
      </div>
    </div>
  )
}

export default Login
