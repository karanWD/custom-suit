import {HomeActionType} from "./HomeActionType";

const INITIAL_STATE = {
    menu:null,
    innerListToggle:null,
    innerListItems:null,
    materialSelected:null,
    material:null,
    finalPrice:0
}

const homeReducer = (state=INITIAL_STATE,action) => {
    switch (action.type) {
        case HomeActionType.FETCH_MENU :
            return {
                ...state,
                menu: action.payload
            }
        case HomeActionType.FETCH_DEFAULT :
            return {
                ...state,
                default: action.payload
            }
        case HomeActionType.TOGGLE_INNER_LIST:
            return {
                ...state,
                innerListToggle: action.payload
            }
        case HomeActionType.FETCH_INNER_LIST:
            return {
                ...state,
                innerListItems: action.payload
            }
        case HomeActionType.FETCH_MATERIAL:
            return {
                ...state,
                material: action.payload
            }
        case HomeActionType.CHANGE_SHOT:
            return {
                ...state,
                material: action.payload
            }
        case HomeActionType.MATERIAL_SELECTED:
            return {
                ...state,
                materialSelected: action.payload
            }
        case HomeActionType.FINAL_PRICE :
            return {
                ...state,
                finalPrice:action.payload
            }
        default : return state
    }
}

export default homeReducer