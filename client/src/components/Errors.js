import React from 'react'
import { useSelector } from 'react-redux'
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'




const Errors=()=>{
    const errors = useSelector(state=> state.errorReducer)
  return (
    <>
       {errors.map(el => <Alert status='error'>
     <AlertIcon />{el.msg}</Alert>)}
    </>
  )
}

export default Errors