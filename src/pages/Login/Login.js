import './Login.css'
import Jumbotron from '../../components/Jumbotron/Jumbotron'

const Login = () => <div className="login">
  <Jumbotron text="Connexion" />

  <div className="login__form w-50">
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" />
      </div>
      <input type="button" value="Se connecter" className='btn btn-primary mt-4' />
    </div>
</div>

export default Login
