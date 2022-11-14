import { useState } from 'react'
import { useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import { addProduct } from '../Redux/Actions/productActions'
const AddProduct=()=>{
    
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  const [description,setDescription] = useState('')
  const [imageA,setImageA] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleAdd=(a)=>{

    a.preventDefault()   
    dispatch(addProduct({name,description,price,imageA},navigate))

  }
  return (
    <Form encType="multipart/form-data"   method='post'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control onChange={(e)=> setName(e.target.value)} type="string" placeholder="Game Name" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Price</Form.Label>
      <Form.Control onChange={(e)=> setPrice(e.target.value)} type="string" placeholder="Game Price" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Description</Form.Label>
      <Form.Control onChange={(e)=> setDescription(e.target.value)} type="string" placeholder="Game Description" />      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Image</Form.Label>
      <Form.Control onChange={(e)=> setImageA(e.target.files[0])} type="file" placeholder="Game Description" />      
    </Form.Group>

   
    <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
      Submit
    </Button>
  </Form>
  )
}

export default AddProduct