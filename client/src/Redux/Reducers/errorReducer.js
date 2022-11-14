import { ALERT_ERROR, CLEAR_ERROR } from "../ActionsType/errorTypes"

const initialState = []


const errorReducer=(state = initialState,action)=>{
    switch (action.type) {
        case ALERT_ERROR : return [...state,action.payload]
        case CLEAR_ERROR : return state.filter(el => el.id !== action.payload)
        default: return state 
    }
}

export default errorReducer