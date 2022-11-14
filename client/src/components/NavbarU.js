import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../Redux/Actions/authActions';


const NavbarU=()=> {
  const token = localStorage.getItem('token')
  const user = useSelector(state=> state.authReducer.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>Abstergo Entertainment</Navbar.Brand>
          <Nav className="me-auto">
          {
            (token && user) ?
            <>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Profile'>Profile</Nav.Link>
            <Nav.Link as={Link} to='/Products'>Products</Nav.Link>
            {
              user.role == "admin" &&
              <>
              <Nav.Link as={Link} to='/ProfilesList'>Profiles</Nav.Link>           
              <Nav.Link as={Link} to='/AddProduct'>Add Products</Nav.Link>
             </>
            }
            
            
            <Nav.Link onClick={()=>{dispatch(logout());navigate('/')}}>Logout</Nav.Link>
            </>   
            :
            <>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/Login'>Login</Nav.Link>
            </>
          }
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarU