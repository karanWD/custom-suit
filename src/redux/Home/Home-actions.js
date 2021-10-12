import {HomeActionType} from "./HomeActionType";
import axios from "axios";
import {combine} from "../../functions";
import {BasicUrl} from "../../basicUrl";

export const fetchMenu = () => (dispatch, getState) => {
    axios.get(`${BasicUrl}/user/fetch/menu`)
        .then(
            async res => {
                await dispatch({
                    type: HomeActionType.FETCH_MENU,
                    payload: res.data
                })
                await dispatch(fetchMaterial("default",getState().home.innerListToggle,1,null,null))
            }
        )
}

export const fetchInnerList = (data) => (dispatch, getState) => {
    console.log(data)
    axios.get(`${BasicUrl}/user/${data}/list/fetch`)
        .then(
            res => dispatch({
                type: HomeActionType.FETCH_INNER_LIST,
                payload: res.data
            })
        )
}

export const toggleInnerList = (data) => ({
    type: HomeActionType.TOGGLE_INNER_LIST,
    payload: data
})

export const fetchFabric = (data) => async (dispatch, getState) => {
    await dispatch({
        type: HomeActionType.FETCH_FABRIC,
        payload: data
    })
    await dispatch(fetchMaterial(getState().home.fabric, getState().home.lining, getState().home.button))
}

export const fetchLining = (data) => async (dispatch, getState) => {
    await dispatch({
        type: HomeActionType.FETCH_LINING,
        payload: data
    })
    await dispatch(fetchMaterial(getState().home.fabric, getState().home.lining, getState().home.button))
}

export const fetchButton = (data) => async (dispatch, getState) => {
    await dispatch({
        type: HomeActionType.FETCH_BUTTON,
        payload: data
    })
    await dispatch(fetchMaterial(getState().home.fabric, getState().home.lining, getState().home.button))
}

export const fetchMaterial = (type,menu, shot, value,icon) => (dispatch, getState) => {
    let selectedItems = []

    if( type === "default"){
        for (let item of getState().home.menu) {
            let data = {};

            data["mode"] = item.title

            data["id"] = item.default.id

            data["icon"] = item.default.icon

            selectedItems.push(data)
        }
    }
    else{
        for (let item of getState().home.menu) {
            let data = {};

            data["mode"] = item.title

            data["id"] =
                value !== null && item.title === menu
                    ? value
                    :getState().home.materialSelected.filter(material => material.mode === item.title )[0].id

            data["icon"] =
                icon !== null && item.title === menu
                    ? icon
                    :getState().home.materialSelected.filter(material => material.mode === item.title )[0].icon

            selectedItems.push(data)
        }
    }

    if (selectedItems.length>0){

        axios({
            method: 'post',
            url: `${BasicUrl}/user/fetch/render/m/1/${shot}/`,
            headers: {},
            data: {
                renderItem: selectedItems
            }
        })
            .then(
                async res => {
                    await combine(0, 0, res.data[0], res.data[1], res.data[2],getState().home.innerListToggle)
                    await dispatch({
                        type: HomeActionType.FETCH_MATERIAL,
                        payload: res.data
                    })
                    await dispatch({
                        type: HomeActionType.MATERIAL_SELECTED,
                        payload:selectedItems
                    })
                }
            )
    }
}

export const changeShot = (data,shot) => (dispatch,getState) => {
    axios({
        method: 'post',
        url: `${BasicUrl}/user/fetch/render/m/1/${shot}/`,
        headers: {},
        data: {
            renderItem: data
        }
    })
        .then(
            async res => {
                await combine(0, 0, res.data[0], res.data[1], res.data[2],getState().home.innerListToggle)
                await dispatch({
                    type: HomeActionType.CHANGE_SHOT,
                    payload: res.data
                })
            }
        )
}

