import {uploadActionType} from "./uploadActionType";

const INITIAL_STATE = {
    dirs:null,
    name:null,
    price:null,
    content:null,
    diffuse:null,
    normal:null,
    alpha:null,
    metal:null,
    icon:null,
    roughness:null,
    done:false,
    clearData:false,
    color:"#000000",
    colorPreview:null
 }

const uploadReducer = (state = INITIAL_STATE,action) => {
    switch (action.type) {
        case uploadActionType.FETCH_DIRS :
            return {
                ...state,
                dirs : action.payload
            }
        case uploadActionType.SET_NAME :
            return {
                ...state,
                name:action.payload
            }
        case uploadActionType.SET_CONTENT :
            return {
                ...state,
                content:action.payload
            }
        case uploadActionType.SET_PRICE :
            return {
                ...state,
                price:action.payload
            }
        case uploadActionType.SET_NORMAL :
            return {
                ...state,
                normal:action.payload
            }
        case uploadActionType.SET_ALPHA :
            return {
                ...state,
                alpha:action.payload
            }
        case uploadActionType.SET_DIFFUSE :
            return {
                ...state,
                diffuse:action.payload
            }
        case uploadActionType.SET_ROUGHNESS :
            return {
                ...state,
                roughness:action.payload
            }
        case uploadActionType.SET_ICON :
            return {
                ...state,
                icon:action.payload
            }
        case uploadActionType.SET_METAL :
            return {
                ...state,
                metal:action.payload
            }
        case uploadActionType.SET_DONE :
            return {
                ...state,
                done:action.payload
            }
        case uploadActionType.CLEAR_DATA :
            return {
                ...state,
                clearData:action.payload
            }
        case uploadActionType.SET_COLOR :
            return {
                ...state,
                color:action.payload
            }
        case uploadActionType.SET_COLOR_PREVIEW :
            return {
                ...state,
                colorPreview:action.payload
            }
        default : return state
    }
}

export default uploadReducer