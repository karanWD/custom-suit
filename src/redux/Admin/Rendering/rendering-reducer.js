const INITIAL_STATE = {
    rendering:false
}

const renderingReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case "RENDERING" :
            return{
                ...state,
                rendering:action.payload
            }
        default : return state
    }
}

export default renderingReducer