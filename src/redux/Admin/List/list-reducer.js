import {listActionType} from "./listActionType";

const INITIAL_STATE = {
    listItem:null,
    deleted:null
}

const listReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case listActionType.FETCH_LIST:
            return{
                ...state,
                listItem:action.payload
            }
        case listActionType.DELETE_LIST:
            return{
                ...state,
                deleted:action.payload
            }
        default : return state
    }
}

export default listReducer