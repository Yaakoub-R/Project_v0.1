import {  Card } from "react-bootstrap"
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux"
// import { Link } from "react-router-dom"
import { deleteProfile, updateProfile } from "../Redux/Actions/authActions"
import {Stack,Button,useDisclosure, FormControl, Input, FormLabel} from '@chakra-ui/react';
import {  useSelector } from 'react-redux';
import { Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { WarningTwoIcon} from '@chakra-ui/icons';
import { MdBuild } from "react-icons/md";


const UserCardA=({profile})=>{

  const user = useSelector(state=> state.authReducer.user)
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [name,setName]= useState(profile.name)
  const [lastName,setLastName]= useState(profile.lastName)
  const [email,setEmail]= useState(profile.email)

  useEffect(()=>{
    setName(profile.name)
    setLastName(profile.lastName)
    setEmail(profile.email)
  },[profile])

  const navigate = useNavigate()
  const handleEdit=(e)=>{
    e.preventDefault()
    dispatch(updateProfile(profile._id,{name,lastName,email},navigate))}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{profile.name} {profile.lastName}</Card.Title>
        <Card.Text>
           <h5>Last Name : {profile.lastName}</h5>
           <h5>Email : {profile.email}</h5>
        </Card.Text>
        <Stack direction='row' spacing={4}>
        {/* <Button as={Link} to={`/EditProfileA/${profile._id}`}>Edit</Button> */}
        <Button  onClick={onOpen} leftIcon={<MdBuild />} colorScheme='teal' variant='solid'>
   Edit Profile
  </Button>
        {/* <Button onClick={()=> dispatch(deleteProfile(profile._id))}>Delete</Button> */}
        <Button  onClick={(e)=>{dispatch(deleteProfile(profile._id,navigate))}} rightIcon={<WarningTwoIcon />} colorScheme='teal' variant='outline'>
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

            <FormControl mt={4} value={lastName} onChange={(e)=> setLastName(e.target.value)} >
              <FormLabel>Last name</FormLabel>
              <Input defaultValue={lastName} placeholder='Last name'/>
            </FormControl>

            <FormControl value={email} onChange={(e)=> setEmail(e.target.value)}>
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
      </Card.Body>
    </Card>
  )
}

export default UserCardA