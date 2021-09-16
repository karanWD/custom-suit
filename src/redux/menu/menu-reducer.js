const INITIAL_STATE = {
    items:null
}

const menuReducer = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case "FETCH_MENU" :
            return{
                ...state,
                items : action.payload
            }
        default : return state
    }
}

export default menuReducer