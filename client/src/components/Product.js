import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton, Button, useDisclosure, FormControl, FormLabel, Input} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import { WarningTwoIcon} from '@chakra-ui/icons';
import { MdBuild } from "react-icons/md";
import {Box,Center,useColorModeValue,Heading,Text,Stack,Image} from '@chakra-ui/react';
import { deleteProduct, getOneProduct, updateProduct,} from '../Redux/Actions/productActions';

const Product=({productO})=>{
  // const {id} = useParams()

  const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getOneProduct(id))
  // },[])
  // const product = useSelector(state=> state.productReducer.product)
  
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const user = useSelector(state=> state.authReducer.user)
    const [name,setName]= useState(productO.name)
    const [description,setDescription]= useState(productO.description)
    const [price,setPrice]= useState(productO.price)
  
    // useEffect(()=>{
    //   setName(product.name)
    //   setDescription(product.description)
    //   setPrice(product.price)
    // },[product])
    
    const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
    const navigate = useNavigate()
  
    const handleEdit=(e)=>{
      console.log('kk')
      e.preventDefault()
      dispatch(updateProduct(productO._id,{name,description,price},navigate))}
  return (
  
      <div>
           <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={productO.imageA}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {productO.name}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={200}>
            {productO.description}
          </Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
              {productO.price}
            </Text>
            {/* <Text textDecoration={'line-through'} color={'gray.600'}>
              $199
            </Text> */}
          </Stack>
        </Stack>
      </Box>
      <Stack direction='row' spacing={4}>
      {
        user?.role == "admin" &&
        <><Button  onClick={onOpen} leftIcon={<MdBuild />} colorScheme='teal' variant='solid'>
   Edit Product
  </Button>   
    <Button  onClick={(e)=>{dispatch(deleteProduct(productO._id,navigate))}} rightIcon={<WarningTwoIcon />} colorScheme='teal' variant='outline'>
      Delete Product
    </Button></>}
    </Stack>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl value={name}  >
                <FormLabel>Product Name</FormLabel>
                <Input value={name} placeholder='Product Name' onChange={(e)=> setName(e.target.value)}/>
              </FormControl>
  
              <FormControl mt={4} value={description}  >
                <FormLabel>Product Description</FormLabel>
                <Input value={description} placeholder='Product Description' onChange={(e)=> setDescription(e.target.value)}/>
              </FormControl>
  
              <FormControl value={price} >
                <FormLabel>Product Price</FormLabel>
                <Input value={price}  placeholder='Product Price' onChange={(e)=> setPrice(e.target.value)}/>
              </FormControl>
  
  
            </ModalBody>
  
            <ModalFooter>
            
              <Button colorScheme='blue' mr={3}  onClick={(e)=>{handleEdit(e);onClose()}}>
                Save
              </Button>
  
           
              <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
    </div>
  )
}

export default Product