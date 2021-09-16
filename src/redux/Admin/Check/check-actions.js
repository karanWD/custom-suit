import axios from "axios";
import {BasicUrl} from "../../../basicUrl";
import {scaleActionType} from "../Scale/scaleActionType";
import {setRendering} from "../Scale/scale-actions";
import {checkActionType} from "./checkActionType";

export const fetchRenders = (data) => async (dispatch,getState) => {
    if(data){
    await dispatch(setRendering())
    axios({
        method: "post",
        url: `${BasicUrl}/admin/${getState().menuSelected.menuSelected}/render`,
        data: {
            // "suitTile": getState().scale.suitTile,
            // "collarTile": getState().scale.collarTile,
            "tile":getState().scale.tile,
            "fdirname":getState().upload.name,
            "color":getState().upload.color
        },
    })
        .then(
            res =>{
                dispatch(setRendering())
                return dispatch({
                    type:checkActionType.FETCH_RENDERS,
                    payload:res.data
                })
            }
        )
    }
    else{
        dispatch({
            type:checkActionType.FETCH_RENDERS,
            payload: null
        })
    }
}

