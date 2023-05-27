import React from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';


const LoginPage = () => {

    const navigate = useNavigate();

  return (
    <div>

<h1>LOGIN</h1>
        <form  >
          <div className="mb-3">
            <label className="form-label">Correo Electronico</label>
            <input type="email" className="form-control" name='correo'  />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name='password'  />
          </div>
          <button type="submit" className="btn btn-primary ">Iniciar Sesión</button>
        </form>
      
    </div>
  )
}

export default LoginPage
