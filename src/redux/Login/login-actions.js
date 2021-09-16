import axios from "axios";
import {BasicUrl} from "../../basicUrl";
import {loginActionType} from "./loginActionType";
import {useHistory} from "react-router";
import {setLoginError} from "../Errors/errors-actions";

export const login = () => (dispatch, getState) => {

    axios({
        method: 'post',
        url: `${BasicUrl}/auth/login`,
        data: {
            email: getState().login.email,
            password: getState().login.password
        }
    })
        .then(
            async res => {
                if(res.data.success == 0){
                    await dispatch(setLoginError(true))
                }
                await dispatch({
                    type: loginActionType.LOGIN,
                    payload: res.data.success == 1 ? res.data.token : res.data.success
                })
            }
        )
}

export const setEmail = (data) => ({
    type: loginActionType.SET_EMAIL,
    payload: data
})

export const setPass = (data) => ({
    type: loginActionType.SET_PASS,
    payload: data
})

export const logout = () => ({
    type:loginActionType.LOGOUT,
    payload:null
})