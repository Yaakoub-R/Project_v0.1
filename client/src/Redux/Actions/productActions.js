import axios from 'axios'
import { GET_ONE_PRODUCT, GET_PRODUCTS } from '../ActionsType/productTypes'




export const getProducts=()=>async(dispatch)=>{
    try {
       const res  = await axios.get('/api/Products/getProducts') 

       dispatch({
        type : GET_PRODUCTS,
        payload : res.data.products
       })
    } catch (error) {
        console.log(error)
    }
}

export const addProduct=(newProduct,navigate)=>async(dispatch)=>{

   
  
    const formdata = new FormData()
    formdata.append('name',newProduct.name)
    formdata.append('description',newProduct.description)
    formdata.append('price',newProduct.price)
    formdata.append('imageA',newProduct.imageA)
    
   
    try {
        await axios.post('/api/Products/addProduct',formdata)
        dispatch(getProducts())
        navigate('/Products')
    } catch (error) {
        console.log(error)
    }
}

export const getOneProduct=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/Products/getOneProduct/${id}`)
        dispatch({
            type : GET_ONE_PRODUCT,
            payload : res.data.product
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateProduct=(id,upProduct,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/Products/updateProduct/${id}`,upProduct)
        dispatch(getProducts())
        // navigate('/ProductsHome')
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/Products/deleteProduct/${id}`)
        dispatch(getProducts())  
    } catch (error) {
        console.log(error)
    }
}