import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { MdPassword } from "react-icons/md";
import './style.css'

function Reset() {
  return (
    <div className='login template d-flex justify-content-center align-items-center 100-w vh-100 bg-primary'>
      <div className='form-container p-5 rounded bg-white'>
        <form>
          <div className="--flex-center">
            <MdPassword size={35} color='#999' />
          </div>
          <h3 className='text-center cred'>Reset Password</h3>
          <div className="mb-3">
            <input
              type="email"
              placeholder="New Password"
              className="form-control"
            /*value="{userName}"
            onChange={(e) => {
              setUserName(e.target.value)
            }} */
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              placeholder='Confirm new password'
              className="form-control"
            /*value="{userName}"
            onChange={(e) => {
              setUserName(e.target.value)
            }} */
            />
          </div>
          <div className='d-grid mb-3'>
            <button className='btn btn-primary'>Reset Password</button>
          </div>

          <div className='d-flex --flex-between'>
            <p className='text-end mb-3'><Link to="/" className='ms-2'>- Home</Link></p>
            <p className='text-end mb-3'><Link to="/login" className='ms-2'>- Login</Link>
            </p>
          </div>



        </form>
      </div>
    </div>
  )
}

export default Reset