import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home'
import Login from './pages/auth/Login'
import Forgot from './pages/auth/Forgot'
import Reset from './pages/auth/Reset'
import Register from './pages/auth/Register'
import Sidebar from './components/sidebar/Sidebar'
import Layout from './components/layout/Layout'
import Dashboard from './pages/dashboard/Dashboard'
import axios from "axios"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { SET_LOGIN } from './redux/features/auth/authSlice'
import { getLoginStatus } from './services/authService'



/* when make req using axios, it make sure we able to save credential */
axios.defaults.withCredentials = true

function App() {

  const dispatch = useDispatch()   //dispatch in app is used to store details -logged in or not

  //useEffect will run once
  useEffect(() => { 
    async function loginStatus() {
      const status = await getLoginStatus()
      dispatch(SET_LOGIN(status))
    }
    loginStatus()
  },[dispatch])

  return (

    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetpwd/:resetToken" element={<Reset />} />
        <Route path="/register" element={<Register />} />

        <Route path='/dashboard' element={
          <Sidebar>
            <Layout>
              <Dashboard />
            </Layout>
          </Sidebar>
        } />
      </Routes>


    </BrowserRouter>
  )
}

export default App
