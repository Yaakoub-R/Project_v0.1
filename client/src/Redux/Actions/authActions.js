import { CURRENT, FAIL, GET_ONE_PROFILE, GET_PROFILES, LOGIN, LOGOUT, REGISTER } from "../ActionsType/authTypes"
import axios from 'axios'
import { alertError } from "./errorActions"

export const register =(newUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/Authentication/SignUp',newUser)
        dispatch({
            type : REGISTER,
            payload : res.data
        })
        navigate('/Profile')
    } catch (error) {
        console.log(error.response.data)
        dispatch({
            type : FAIL,
            payload : error.response.data
        });

        error.response.data.errors.forEach(el=> dispatch(alertError(el.msg)))
    }

}

export const login=(user,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/Authentication/SignIn', user)
        dispatch({
            type : LOGIN,
            payload : res.data
        })
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data 
        })
        
    }

}

export const current=()=>async(dispatch)=>{
    const config = {
        headers : {
            Authorization : localStorage.getItem('token')
        }
    }
    try {
        const res = await axios.get('/api/Authentication/User',config)
        dispatch({
            type : CURRENT,
            payload : res.data
        })
        
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const logout=()=>{
    return({
        type : LOGOUT
    })
}




export const getProfiles=()=>async(dispatch)=>{
    try {
       const res  = await axios.get('/api/UsersList/getProfiles') 

       dispatch({
        type : GET_PROFILES,
        payload : res.data.profiles
       })
    } catch (error) {
        console.log(error)
    }
}


export const getOneProfile=(id)=>async(dispatch)=>{
    try {
        const res = await axios.get(`/api/UsersList/getOneProfile/${id}`)
        dispatch({
            type : GET_ONE_PROFILE,
            payload : res.data.profile
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile=(id,upProfile,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/UsersList/updateProfile/${id}`,upProfile)
        dispatch(current())
        navigate('/Profile')
    } catch (error) {
        console.log(error)
    }
}

export const deleteProfile=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/UsersList/deleteProfile/${id}`)
        dispatch(logout())
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

/////////////////
export const updateUser=(id,upProfile,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/UsersList/updateProfile/${id}`,upProfile)
        dispatch(getProfiles())
        // navigate('/Profile')
    } catch (error) {
        console.log(error)
    }
}

export const deleteUser=(id,navigate)=>async(dispatch)=>{
    try {
        await axios.delete(`/api/UsersList/deleteProfile/${id}`)
        dispatch(getProfiles())
        // navigate('/')
    } catch (error) {
        console.log(error)
    }
}