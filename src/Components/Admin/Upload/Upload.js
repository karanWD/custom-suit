import React from "react";
import {useDispatch, useSelector} from "react-redux";

import UploadTexture from "../UploadTexture/UploadTexture";
import UploadColor from "../UploadColor/UploadColor";

const Upload = () => {
    const menuType = useSelector(state => state.menuSelected.menuType)
    return (
        menuType === "color" ?
            <UploadColor/>
            :
            <UploadTexture/>
    )

}



export default Upload