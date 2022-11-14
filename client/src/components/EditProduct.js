
import { useEffect, useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import {  getOneProduct, updateProduct,} from '../Redux/Actions/productActions';


const EditProduct=()=> {
  const {id} = useParams()

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getOneProduct(id))
  },[])

  const product = useSelector(state=> state.productReducer.product)

  const [name,setName]= useState(product.name)
  const [description,setDescription]= useState(product.description)
  const [price,setPrice]= useState(product.price)
  // const [imageA,setImageA] = useState('')

  useEffect(()=>{
    setName(product.name)
    setDescription(product.description)
    setPrice(product.price)
  },[product])

  const navigate = useNavigate()

  const handleEdit=(a)=>{
    a.preventDefault()
    dispatch(updateProduct(product.id,{name,description,price,imageA},navigate))

  }
  return (
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Enter Product Name" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Description</Form.Label>
      <Form.Control value={description} onChange={(e)=> setDescription(e.target.value)} type="number" placeholder="Enter Product Description" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>price</Form.Label>
      <Form.Control value={price} onChange={(e)=> setPrice(e.target.value)} type="email" placeholder="Enter Product Price" />      
    </Form.Group>

    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Image</Form.Label>
      <Form.Control value={imageA} onChange={(e)=> setImageA(e.target.files[0])} type="file" placeholder="Game Description" />      
    </Form.Group> */}

    <Button variant="primary" type="submit" onClick={(e)=>handleEdit(e)}>
    Submit Changes
    </Button>
  </Form>
  
  )
 }

export default EditProduct 