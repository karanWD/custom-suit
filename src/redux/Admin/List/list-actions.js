import axios from "axios";
import {BasicUrl} from "../../../basicUrl";
import {listActionType} from "./listActionType";


export const fetchList = (data) => (dispatch, getState) => {
    axios.get(`${BasicUrl}/user/${data}/list/fetch`,
        {
            params: {
                index: 3
            }
        }
    )
        .then(
            res => dispatch({
                type: listActionType.FETCH_LIST,
                payload: res.data
            })
        )
}

export const deleteListItem = () => (dispatch,getState) => {

        axios.delete(`${BasicUrl}/admin/${getState().menuSelected.menuSelected}/delete/${getState().list.deleted}`)
            .then(
                res => {
                    if( res.data.Success == 1 ){
                        dispatch(deleteAlertList(null))

                    }
                }
            )
}

export const deleteAlertList = (data) => ({
    type:listActionType.DELETE_LIST,
    payload:data
})