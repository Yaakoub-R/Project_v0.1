import { CURRENT, FAIL, GET_ONE_PROFILE, GET_PROFILES, LOGIN, LOGOUT, REGISTER } from "../ActionsType/authTypes"

const initialState = {
    user : {},
    errors : [],
    profiles : [],
    profile : {}

}

const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case REGISTER : 
        localStorage.setItem('token',action.payload.token)
        return {...state, user : action.payload.newUser}

        case FAIL : 
        return {...state,errors : action.payload.errors, user : null}

        case LOGIN :
            localStorage.setItem('token',action.payload.token)
            return {...state, user : action.payload.found}
        
        case CURRENT : return {...state,user : action.payload}
        
        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state, user : null, errors : null}
            
        case GET_PROFILES: return {...state,profiles :action.payload}

        case GET_ONE_PROFILE : return {...state,profile : action.payload}

        default: return state
    }
}

export default authReducer