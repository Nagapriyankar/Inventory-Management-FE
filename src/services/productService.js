/* this file contains all http request sends to backend */

import axios from "axios"

export const BE_URL = "http://localhost:5000"


//create new product
//no need to add try catch block instead using createAsyncThunk
export const createProduct = async (formData) => {
    const res = await axios.post(`${BE_URL}/api/products/addproduct`, formData)
    return res.data
}

const productService = {
    createProduct
}
//createProduct can accessed thro product serv
export default productService