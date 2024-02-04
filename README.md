# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-------------------------------------------------------------------------
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

### authservice 
    this file contains all http request sends to backend

    1. Register : setup axios call to backend to register user
        axios call to backend with userdata
        parameters sent in axios call -
             url - endpoint
             dataSenttoApiReq - user details from FE
             cred - allow this req to get a form of credentials from api end points (cookies)
                    cookies from BE URL is saved in FE browser using this prop
        import axios in root folder to handle axios call
                            
### Register.jsx

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

-------------------------------------------------------------------------
## Loader Spinner setup

    add loader in index.html
    create loader component with
        with full screen loader and spinner img
    user this in auth pages and while fetching backend data

  -----------------------------------------------------------------------

### login setup (similar to register)
    
    1. setup axios call to backend to login user
    2. authservice:
         add new arrow func to login user 
         make axios call to backend /api/users/login
    3. login.jsx : 
        initialize state
        initialize usestate , dispatch and navigate
        handle input change
        handle form submit  
            validaion
            create user data
            login user by calling login authservice
            dispatch set_login = true
            dispatch set_email = email from data saved to database
            navigate to login page            
    4.  add loader in retun statement

--------------------------------------------------------------------------

### logout setup 

    1. create logout service in authservice
    2. handle logout click in header
    3. dispatch set_login = false
    4. dispath set_name = ""
    5. navigate to home page
------------------------------------------------------------------------

### Forgot password setup 

    1. create logout service in authservice
    2. handle forget pwd in forget component
   
-------------------------------------------------------------------------

### Reset password setup 
    
    1. create reset pwd service in authservice
    2. handle reset pwd page
    3. on success, navigate to login page
-------------------------------------------------------------------------

### creating hidelink component - with using auth service
    this will handle the home page menu items
    login - Dashboard visible
    logout - Register, Login Visible
    selectIsLoggedIn declared in authSlice is used to check login status
    This is set true while user login 
        1. create two functions - showonlogin , showonlogout
        2.import this in home page and enclose it for each menu link
    This will be refreshed on page refresh, to avoid this, do below
-------------------------------------------------------------------------

### to check login status and load menu item  accordingly to handle above issue

    1. create auth service to ccheck login status
    2. this will return true or false from backend
    3. app.jsx
        * every time when window loads, check login status, save it in redux using useEffect
        * import dispatch, useEffect
        * useeffect -> call getLoginStatus auth  
        * SET_LOGIN from authslice is dispatch to 'res'
-------------------------------------------------------------------------

### navigate to home page on cookie expire - implementation

src folder - customHook > useRedirectLoggedOutUser.js
    1. using useEffect to run once
    2. use dispatch
    3. useNavigate to navigate to homw page
    4. getLoginStatus from auth service
    4. set_login from auth ---------------------------------------------------------------------

## Products Handle
    let us setup redux to handle product data and various actions like add, delete, update, view product

#### create productSlice.js
    import createSlice, createasyncthunk redux toolkit
    initialize state
    create reducer inside produtslice
    export productslice action and reducer
    
#### store.js
    import configureStore
    create a store and add reducers inside 

#### create productService.js
All http req to BE written here
    write  axios call to BE
    Export the function

-----------------------------------------------------------------
## createProduct service:
productService:
    create AAF 
    axios call to BE URL, with formData 
productSlice:
    create AAF using createAsyncThunk
    execute productService.createProduct inside try catch

3states an Http req can take:
pending : made an req, donot get either res / error
success : desired req / res
error   : made req / not desired res

to capture thesse states, use extra reducers

#### addproduct - pages
    1. initialize states with input parameter
    2. create useState for product, image, descripption, imagePreview
    3. take isLoading state from productSlice using useSSelctor
    4. destructure values from input product
    5. handleInputChange
    6. handleImageChange
    7. generate sku(catagory)
    8. save the input details to formData
    9. call productSlice.createProduct(formData)
    10. navigate to dashboard

--------------------------------------------------------


 <div className='product-list'>
    <hr />
    < div className="table" >
      <div className="--flex-between --flex-dir-column">
        <span>
          <h3>Inventory Items</h3>
        </span>
        <span>
          <h3>Search Products</h3>
        </span>
      </div>
      {isLoading && <SpinnerImg />}
      <div className="table">
        {!isLoading && products.length == 0 ? (
          <p>-- No product found, please add a product...</p>
        ) : (
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Name</th>
                  <th>Catagory</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Value</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product, index)  => {
                    const {_id, name, catagory, price, quantity} = product
                    return (
                      <tr key={_id}>
                        <td>{index+1}</td>
                        <td>{shortenText(name, 16)}</td>
                        <td>{catagory}</td>
                        <td>{price}</td>
                        <td>{$}{price * quantity}</td>
                        
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
        )}
      </div>
    </div> 
  </div>




    









