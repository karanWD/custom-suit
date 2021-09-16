import {checkActionType} from "./checkActionType";

const INITIAL_STATE = {
    renders:null
}

const checkReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case checkActionType.FETCH_RENDERS :
            return {
                ...state,
                renders:action.payload
            }
        default : return state
    }
}

export default checkReducer