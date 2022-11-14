
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import Errors from './components/Errors';
import Home from './components/Home';
import Login from './components/Login';
import NavbarU from './components/NavbarU';
import PrivateRoute from './components/PrivateRoute';
import ProductHome from './components/ProductsHome';
import Profile from './components/Profile';
import ProfilesListA from './components/ProfilesListA';
import Register from './components/Register';
import { current } from './Redux/Actions/authActions';


function App() {

  const dispatch=useDispatch()
  const user = useSelector(state=>state.authReducer.user)
  useEffect(()=>{
    dispatch(current())
  },[user])
  return (
    <div>
    <NavbarU/>
    <Errors/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Profile' element={<PrivateRoute> <Profile/> </PrivateRoute>}/>
      <Route path='/ProfilesList' element={<ProfilesListA/>}/>
      <Route path='/Products' element={<ProductHome/>}/>
      <Route path='/AddProduct' element={<AddProduct/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      

    </Routes>
    </div>
  );
}

export default App;
