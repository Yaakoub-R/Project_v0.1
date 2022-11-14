import React from 'react'
import {Input,InputGroup,InputRightElement,InputLeftElement} from "@chakra-ui/input"
import {Stack,Button,Text} from '@chakra-ui/react'
import { AtSignIcon} from '@chakra-ui/icons'
import Col from 'react-bootstrap/Col';    
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { login } from '../Redux/Actions/authActions'
 

const Login=()=> {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogin=(e)=>{
    e.preventDefault()
    dispatch(login({email,password},navigate))
  }

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <div id='Register'>
        <Col md={{ span:6, offset: 3}}>

<Stack spacing={4}>

  <InputGroup>
    <InputLeftElement
      pointerEvents='none'
      children={<AtSignIcon color='gray.300' />}
    />
    <Input onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter Email' />
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
    <br/>
    <Text>
      New to here?{' '}
     <Link  style={{color:'Plum'}} to='/Register'>
      Create an account.
     </Link>
    </Text>
    <Button colorScheme='blackAlpha' className='Submit' onClick={(e)=> handleLogin(e)} > Login </Button>

    </Col>
        </div>
      )
      
}

export default Login