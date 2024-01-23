/* this file contains all http request sends to backend */

import axios from "axios"
import { toast } from "react-toastify"

export const BE_URL = "http://localhost:5000"

/* register user - axios call to backend with userdata */
export const registerUser = async (userData) => {
    try { 
        const response = await axios
            .post(`${BE_URL}/api/users/register`, userData, { withCredentials: true })  // parameters sent in axios call - url,dataSenttoApiReq, cookie
    
        if (response.statusText === "OK") {
            toast.success('User Registered Successfully')
        }
        return response.data
    }
    catch (error) {
        /* since error may received in dif forms */
        const message = (
            error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        toast.error(message)
    }
}

