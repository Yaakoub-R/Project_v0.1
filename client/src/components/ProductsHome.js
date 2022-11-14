import React from 'react'
import { useEffect } from "react"
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { getProducts} from "../Redux/Actions/productActions"
import Product from './Product'


const ProductHome=()=>{
     const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(getProducts())
    // },[])

    const products = useSelector(state => state.productReducer.products)

    useEffect(()=>{
        dispatch(getProducts())
    },[])
    return(
        <div className="PList">
            {
                products && products.map(product => <Product key={product._id} productO={product}/>)
            }

            {/* <Button as={Link} to='/AddProduct'>Add Product</Button> */}
        </div>
  )
}

 export default ProductHome
