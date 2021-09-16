import {BasicUrl} from "../../basicUrl";
import axios from "axios";

export const fetchMenu = () => (dispatch,getState) => {
    axios.get(`${BasicUrl}/admin/fetch/admin/menu`)
        .then(
            res => dispatch({
                type:"FETCH_MENU",
                payload:res.data
            })
        )
}