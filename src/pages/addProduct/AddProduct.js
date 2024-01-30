import React, { useState } from 'react'
import ProductForm from '../../components/productForm/ProductForm'
import { useSelector } from 'react-redux'
import { createProduct, selectIsLoading } from '../../redux/features/product/productSlice'
import { Navigate } from 'react-router-dom'


//initialize states - form input
const initialState = {
    name: "",
    catagory: "",
    quantity: "",
    price: "",
}

const AddProduct = () => {

    //creating usestate for reuired value
    const [product, setProduct] = useState(initialState)
    const [productImage, setProductImage] = useState("")
    const [imagePreview, setImagePreview] = useState(null)
    const [description, setDescription] = useState("")

    const isLoading = useSelector(selectIsLoading)  //this is from product slice
r
    const {name, catagory, price, quantity } = product //destructure input value

    //handle form input value
    const handleInputChange = (e) => {
        const {name, value } = e.target
        setProduct({...product, [name]: value})  
    }

    //handle image - to get image, to preview image
    const handleImageChange = () => { 
        setProductImage(e.target.files[0])
        setImagePreview(url.createObjectURL(e.target.files[0]))  //createObjectURL will give temp access to preview the file 
    }
    
    //sku contains - letter from 'catagory' and numbers
    const generateSKU = (catagory) => {
        const letter = catagory.slice(0, 3).toUpperCase()
        const number = Date.now;
        const sku = letter + "-" + number
        return sku
    }

    //creating form data and  productslice call to createProduct functionality
    const saveProduct = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("name", name)
        formData.append("sku", generateSKU(catagory))
        formData.append("catagory", catagory)
        formData.append("quantity", quantity)
        formData.append("price", price)
        formData.append("descripion", description)
        formData.append("image", productImage)

        console.log(...formData)
        await dispatch(createProduct(formData))

        Navigate("/dashboard")

   }

  return (
      <div>
          <h1 className='container'>Add New Product</h1>      
          <ProductForm
            product = {product}
            productImage={productImage}
            imagePreview={imagePreview}
            description={description}
            setDescription={setDescription}
            handleInputChange={ handleInputChange} 
            handleImageChange={ handleImageChange} 
            saveProduct={ saveProduct} 
          />
    </div>
  )
}

export default AddProduct