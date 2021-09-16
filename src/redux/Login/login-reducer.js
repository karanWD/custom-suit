import {loginActionType} from "./loginActionType";
import {useHistory} from "react-router";
import {logout} from "./login-actions";


const INITIAL_STATE = {
    login:null,
    email:null,
    password:null
}

const loginReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case loginActionType.LOGIN :
            return{
                ...state,
                login:action.payload
            }
        case loginActionType.SET_EMAIL :
            return{
                ...state,
                email:action.payload
            }
        case loginActionType.SET_PASS :
            return{
                ...state,
                password:action.payload
            }
        case loginActionType.LOGOUT :
            return {
                ...state,
                login:null
            }
        default : return state
    }
}

export default loginReducer