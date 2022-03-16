import './Login.css'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import login from '../../datas/login.json'
import { useNavigate } from "react-router-dom"
import { useRef } from 'react'

const Login = () => {
  const email = useRef(null)
  const password = useRef(null)
  const navigate = useNavigate()

  const handleClick = e => {
    if (email.current.value === login.username && password.current.value === login.password) {
      navigate('/home')
    }
  }

  return (
    <div className="login">
      <Jumbotron text="Connexion" />

      <div className="login__form w-50">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input ref={email} type="email" className="form-control" id="email" />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password" className="form-label">Password</label>
          <input ref={password} type="password" className="form-control" id="password" />
        </div>
        <input type="button" value="Se connecter" className='btn btn-primary mt-4' onClick={handleClick}/>
      </div>
    </div>
  )
}

export default Login
