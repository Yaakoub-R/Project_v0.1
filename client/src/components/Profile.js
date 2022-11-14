import React, { useEffect } from 'react';
import {Heading,Avatar,Box,Center,Image,Flex,Stack,Button,useColorModeValue, useDisclosure, FormControl, Input, FormLabel} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { current, deleteProfile, updateProfile } from '../Redux/Actions/authActions';
import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { WarningTwoIcon} from '@chakra-ui/icons';
import { MdBuild } from "react-icons/md";



const Profile=()=> {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(current())
  },[])

  const user = useSelector(state=> state.authReducer.user)

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  // const {id} = useParams()
  // useEffect(()=>{
  //   dispatch(getOneProfile(id))
  // },[])

  // const profile = useSelector(state=> state.userReducer.profile)

  const [name,setName]= useState(user.name)
  const [lastName,setLastName]= useState(user.lastName)
  const [email,setEmail]= useState(user.email)

  useEffect(()=>{
    setName(user.name)
    setLastName(user.lastName)
    setEmail(user.email)
  },[user])

  const navigate = useNavigate()

  const handleEdit=(e)=>{
    e.preventDefault()
    dispatch(updateProfile(user._id,{name,lastName,email},navigate))}

  return (
    <div>
        <Center py={6}>
      <Box
        maxW={'310px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
            {user.name} {user.lastName}
            </Heading>
          </Stack>
            <Stack direction='row' spacing={4}>
  <Button  onClick={onOpen} leftIcon={<MdBuild />} colorScheme='teal' variant='solid'>
   Edit Profile
  </Button>
  <Button  onClick={(e)=>{dispatch(deleteProfile(user._id,navigate))}} rightIcon={<WarningTwoIcon />} colorScheme='teal' variant='outline'>
    Delete Profile
  </Button>
</Stack>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl value={name} onChange={(e)=> setName(e.target.value)} >
              <FormLabel>First name</FormLabel>
              <Input defaultValue={name} placeholder='First name'/>
            </FormControl>

            <FormControl mt={4} value={lastName} onChange={(e)=> setName(e.target.value)} >
              <FormLabel>Last name</FormLabel>
              <Input defaultValue={lastName} placeholder='Last name'/>
            </FormControl>

            <FormControl value={email} onChange={(e)=> setName(e.target.value)}>
              <FormLabel>Email</FormLabel>
              <Input defaultValue={email}  placeholder='Email'/>
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
        </Box>
      </Box>
    </Center>
    </div>
  )
}

export default Profile