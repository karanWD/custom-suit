const INITIAL_STATE = {
    menuSelected : "fabric",
    menuType:"texture"
}

const menuSelectedReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case  "menuSelectedType" :
            return{
                ...state,
                menuSelected: action.payload[0],
                menuType: action.payload[1],

            }
        default : return state
    }
}

export default menuSelectedReducer