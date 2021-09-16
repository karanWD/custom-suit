import axios from "axios";
import {uploadActionType} from "./uploadActionType";
import {setRendering} from "../Scale/scale-actions";
import {BasicUrl} from "../../../basicUrl";
import {rendering} from "../Rendering/rendering-actions";

//fetch directory names
export const fetchDir = () => (dispatch, getState) => {

    axios.get(`http://192.168.10.120:8080/api/admin/fetch/${getState().menuSelected.menuSelected}/dirs`)
        .then(
            res => dispatch({
                type: uploadActionType.FETCH_DIRS,
                payload: res.data
            })
        )
}

//set files for upload
export const setName = (data) => ({
    type: uploadActionType.SET_NAME,
    payload: data
})
export const setPrice = (data) => ({
    type: uploadActionType.SET_PRICE,
    payload: data
})
export const setContent = (data) => ({
    type: uploadActionType.SET_CONTENT,
    payload: data
})
export const setDiffuse = (data) => ({
    type: uploadActionType.SET_DIFFUSE,
    payload: data
})
export const setNormal = (data) => ({
    type: uploadActionType.SET_NORMAL,
    payload: data
})
export const setAlpha = (data) => ({
    type: uploadActionType.SET_ALPHA,
    payload: data
})
export const setRoughness = (data) => ({
    type: uploadActionType.SET_ROUGHNESS,
    payload: data
})
export const setMetal = (data) => ({
    type: uploadActionType.SET_METAL,
    payload: data
})
export const setIcon = (data) => ({
    type: uploadActionType.SET_ICON,
    payload: data
})

export const setDone =(data)=>({
    type:uploadActionType.SET_DONE,
    payload:data
})

export const setClearData  = data => ({
    type:uploadActionType.CLEAR_DATA,
    payload:data
})

export const setColorData  = data => ({
    type:uploadActionType.SET_COLOR,
    payload:data
})

export const setColorPreview =  (clear,color) =>  (dispatch,getState) => {
    if(clear){
        dispatch({
            type:uploadActionType.SET_COLOR_PREVIEW,
            payload:null
        })
    }
    else{
     dispatch(rendering(true))
     axios.post(`${BasicUrl}/admin/${getState().menuSelected.menuSelected}/set/color`,{
        color:color
    })
        .then(
            async res =>{
                console.log(res)
                await dispatch({
                    type:uploadActionType.SET_COLOR_PREVIEW,
                    payload:res.data
                })
                await dispatch(rendering(false))
            }
        )
    }
}


