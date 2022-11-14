import {combineReducers} from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'
// import userReducer from './userReducer'
import productReducer from './productReducer'




const rootReducer = combineReducers({authReducer,errorReducer,productReducer})

export default rootReducer