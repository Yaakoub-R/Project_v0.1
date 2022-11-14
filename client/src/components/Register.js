import React from 'react'
import { useState } from 'react'
import {Input,InputGroup,InputRightElement,InputLeftElement} from "@chakra-ui/input"
import {Stack,Button} from '@chakra-ui/react'
import { AtSignIcon} from '@chakra-ui/icons'
import Col from 'react-bootstrap/Col';    
import Form from 'react-bootstrap/Form';                               
import { useDispatch } from 'react-redux'
import { register } from '../Redux/Actions/authActions';
import { useNavigate } from 'react-router-dom'




const Register=()=> {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const [name,setName]= useState('')
    const [lastName,setLastName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister=(e)=>{
      e.preventDefault()
      dispatch(register({name,email,password,lastName,role:"client"},navigate))
    }


    return (
        <div id='Register'>
        <Col md={{ span:6, offset: 3}}>

<Stack spacing={4}>
<InputGroup>
    <InputLeftElement
      pointerEvents='none'
      color='gray.300'
      fontSize='1.2em'
      children='.'
    />
    <Input onChange={(e)=>setName(e.target.value)}  placeholder='Name' />
    <Input onChange={(e)=>setLastName(e.target.value)}  placeholder='Last Name' />
    {/* <InputRightElement children={<CheckIcon color='green.500' />} /> */}
  </InputGroup>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<AtSignIcon color='gray.300' />}
    />
    <Input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Email' />

    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
  </InputGroup>

</Stack>
      <InputGroup size='md'>
      <Input
        onChange={(e)=>setPassword(e.target.value)} 
        pr='4.5rem'
        type={show ? 'text' : 'password'} 
        placeholder='Enter Password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>

    <Button colorScheme='blackAlpha' className='Submit' onClick={(e)=>handleRegister(e)}> Submit </Button>

    </Col>
        </div>
      )
      
}
export default Register