import {scaleActionType} from "./scaleActionType";
import axios from "axios";
import {BasicUrl} from "../../../basicUrl";


export const fetchDefaultScale =  () => async (dispatch, getState) => {
    await dispatch(setRendering())
    axios({
        method: "post",
        url: `${BasicUrl}/admin/${getState().menuSelected.menuSelected}/preview`,
        data: {
            // "suitTile": getState().scale.suitTile,
            // "collarTile": getState().scale.collarTile,
            "fdirname":getState().upload.name,
            "tile":getState().scale.tile
        },
    })
        .then(
            res =>{
               dispatch(setRendering())
               return dispatch({
                   type:scaleActionType.SET_DEFAULT_TILE,
                   payload:res.data
               })
            }
        )
}

export const setSuitTile = (data) => ({
    type:scaleActionType.SET_SUIT_TILE,
    payload:data
})

export const setCollarTile = (data) => ({
    type:scaleActionType.SET_COLLAR_TILE,
    payload:data
})

export const setTile = (data) => (dispatch,getState) => {
    dispatch({
        type:scaleActionType.SET_TILE,
        payload:data
    })
}

export const setRendering = () => ({
    type:scaleActionType.RENDERING,
    payload:''
})

export const fetchInputs =  () => async (dispatch, getState) => {
    await dispatch(setRendering())
    axios({
        method: "get",
        url: `${BasicUrl}/admin/${getState().menuSelected.menuSelected}/tiles`,
    })
        .then(
            res =>{
                dispatch(setRendering())
                return dispatch({
                    type:scaleActionType.FETCH_INPUTS,
                    payload:res.data
                })
            }
        )
}