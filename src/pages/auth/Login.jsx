import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { RiLoginBoxFill } from "react-icons/ri";
import './style.css'



function Login() {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <form>
          <div className="--flex-center">
            <RiLoginBoxFill size={35} color='#999'/>
          </div>
          <h3 className='text-center cred'>Login</h3>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">Email</label>
            <input
              type="email"
              placeholder='Enter name@domain.com...'
              className="form-control"
            /*value="{userName}"
            onChange={(e) => {
              setUserName(e.target.value)
            }} */
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Password" className="form-label">Password</label>
            <input
              type="password"
              placeholder='Enter password...'
              className="form-control"
            /*value={password}
             onChange={(e) => {
              setPassword(e.target.value)
            }} */
            />
          </div>

          <div className='d-grid mb-3'>
            <button className='btn btn-primary'>Login</button>
          </div>

          <p className='text-end mb-3'>
            <Link to="/forgot" className='ms-2'>Forget Password?</Link>
          </p>
          <div className='d-flex --flex-between'>
            <p className='text-end mb-3'><Link to="/" className='ms-2'>Home</Link></p>
            <p className='text-end mb-3'>
              Don't have an account?  <Link to="/register" className='ms-2'>Register</Link>
            </p>
          </div>

          

        </form>
      </div>
    </div>

  )
}

export default Login