# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Frontend - backend connectivity
Using Redux to achieve FE and BE connectivity
    fetch data from BE , store it in redux and use in FE

## Initialize states for auth - user details - authslice
   1. initialize state that is going to use for authnticaton
   2. create reducer actions 
        * when user login , set login to true 
        * set user name to avoid multiple req to BE, to use in various parts of FE
        * save user details - object
    3. export the actions
        cannot exports individual state by actions
    4. export states individually
    5. set up environment to fetch data from BE as far as authentication, registration is concr.
        * npm i react-toastify axios
        * create authservice file

## authservice 
    this file contains all http request sends to backend

    1. Register : setup axios call to backend to register user
        axios call to backend with userdata
        parameters sent in axios call -
             url - endpoint
             dataSenttoApiReq - user details from FE
             cred - allow this req to get a form of credentials from api end points (cookies)
                    cookies from BE URL is saved in FE browser using this prop
        import axios in root folder to handle axios call

## Register.jsx

    handleInputChange
    handleformsubmit
        validation
        save input datails to userData variable
        call registerUser authservice with userData as parameter
        post - to register new user

    3 main actions after registration is successful
        dispatch set_login = true
        dispatch set_name = name from data saved to database
        navigate to login page


    


