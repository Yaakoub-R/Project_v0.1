import React from 'react'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProfiles } from "../Redux/Actions/authActions"
import UserCardB from './ProfileCardB'


const ProfilesListA=()=>{
     const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProfiles())
    },[])

    const profiles = useSelector(state => state.authReducer.profiles)
    return(
        <div className="PList">
            {
               profiles.map(profile=> <UserCardB key={profile._id} profile={profile}/>)
            }
        </div>
  )
}

 export default ProfilesListA

