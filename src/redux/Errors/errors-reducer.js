import {errorsActionType} from "./errorsActionType";

const INITIAL_STATE = {
    upload:null,
    empty:null,
    login:null
}

const errorsReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case errorsActionType.UPLOAD_ERROR :
            return{
                ...state,
                upload: action.payload
            }
        case errorsActionType.EMPTY_ERROR :
            return{
                ...state,
                empty:  action.payload
            }
        case errorsActionType.LOGIN_ERROR :
            return{
                ...state,
                login:  action.payload
            }
        default : return state
    }
}

export default errorsReducer