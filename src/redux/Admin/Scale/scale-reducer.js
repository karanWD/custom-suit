import {scaleActionType} from "./scaleActionType";


const INITIAL_STATE = {
    // suitTile:"20",
    // collarTile:"20",
    defaultTile:null,
    rendering:false,
    // inputs:null,
    tile:"10"
}

const scaleReducer = ( state = INITIAL_STATE , action) => {
    switch (action.type) {
        case scaleActionType.SET_DEFAULT_TILE :
            return {
                ...state,
                defaultTile: action.payload
            }

        case scaleActionType.SET_SUIT_TILE :
            return {
                ...state,
                suitTile: action.payload
            }

        case scaleActionType.SET_COLLAR_TILE :
            return {
                ...state,
                collarTile: action.payload
            }

        case scaleActionType.SET_TILE :
            return {
                ...state,
                [action.payload[0]]:action.payload[1]
            }
        case scaleActionType.RENDERING :
            return {
                ...state,
                rendering: !state.rendering
            }

        case scaleActionType.FETCH_INPUTS :
            return {
                ...state,
                inputs: action.payload
            }

        default : return state
    }
}


export default scaleReducer