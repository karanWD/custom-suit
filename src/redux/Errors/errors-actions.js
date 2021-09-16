import {errorsActionType} from "./errorsActionType";

export const setUploadError = (data)=>({
    type:errorsActionType.UPLOAD_ERROR,
    payload:data
})

export const setEmptyError = (data)=>({
    type:errorsActionType.EMPTY_ERROR,
    payload:data
})

export const setLoginError = (data)=>({
    type:errorsActionType.LOGIN_ERROR,
    payload:data
})