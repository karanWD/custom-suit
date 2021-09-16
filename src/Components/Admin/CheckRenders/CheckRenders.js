import React, {useEffect} from "react";
import File from "./file.svg"
import Setting from "./settings.svg"
import Check from "./check.svg"
import {useDispatch, useSelector} from "react-redux";

import Loading from "../../Loading/Loading";
import {
    setAlpha, setColorData,
    setContent,
    setDiffuse,
    setDone,
    setIcon,
    setMetal,
    setName, setNormal,
    setPrice, setRoughness
} from "../../../redux/Admin/upload/upload-actions";
import Input from "../../Input/Input";
import {setCollarTile, setSuitTile} from "../../../redux/Admin/Scale/scale-actions";
import {setEmptyError} from "../../../redux/Errors/errors-actions";
import {fetchRenders} from "../../../redux/Admin/Check/check-actions";


const CheckRenders = () => {
    const dispatch = useDispatch()
    const rendering = useSelector(state => state.scale.rendering)
    const part = useSelector(state => state.menuSelected.menuSelected)
    const renders = useSelector(state => state.check.renders)
    const menuType = useSelector(state => state.menuSelected.menuType)

    const clickHandler = async () => {
        await dispatch(setName(null))
        await dispatch(setPrice(null))
        await dispatch(setContent(null))
        await dispatch(setDiffuse(null))
        await dispatch(setMetal(null))
        await dispatch(setIcon(null))
        await dispatch(setNormal(null))
        await dispatch(setRoughness(null))
        await dispatch(setAlpha(null))
        await dispatch(setColorData("000000"))
        await dispatch(fetchRenders(null))
        await dispatch(setDone(false))
    }

    const backHandler = ()=>{
        dispatch(fetchRenders(null))
    }


    return (
        !rendering && renders
            ?
            <div className="col-lg-11 p-5 inputs d-flex flex-row-reverse justify-content-around flex-wrap">

                <div className="levels d-flex flex-row-reverse justify-content-between align-items-center col-10 col-lg-5
            mx-auto ">
                    <div className="cart-lev d-flex flex-row flex-wrap justify-content-center align-items-center
                col-3 px-0 current-lev" onClick={backHandler} style={{cursor: "pointer"}}>
                        <img src={File} alt="" className="col-4 px-0"/>
                        <span className="mt-2 d-block ">بارگذاری اطلاعات</span>
                    </div>
                    {
                        menuType == "texture" ?
                            <>
                                <div className="line-lev current-line-lev"></div>
                                <div
                                    className="  info-lev d-flex flex-row flex-wrap justify-content-center align-items-center col-3  px-0 current-lev "
                                    onClick={backHandler}
                                >
                                    <img src={Setting} alt="" className="col-4 px-0"/>
                                    <span className="mt-2 col-12 d-block ">مقیاس دهی</span>
                                </div>
                            </>
                        :
                        null
                    }

                    <div className="line-lev current-line-lev"></div>
                    <div
                        className=" pay-lev d-flex flex-row flex-wrap justify-content-center align-items-center col-3  px-0 current-lev">
                        <img src={Check} alt="" className="col-4 px-0"/>
                        <span className="mt-2 col-12 d-block ">چک نهایی</span>
                    </div>
                </div>

                <div
                    className="col-12 mb-5 d-flex flex-row-reverse justify-content-between align-items-center mt-5 pt-5">
                    <h3 className="text-right ">
                        مشاهده رندر های
                        {
                            part == "fabric"
                                ?
                                " پارچه های کت"
                                :
                                part == "lining" ?
                                    "  آستر کت "
                                    :
                                    part == "button" ?
                                        " دکمه "
                                        :
                                        null
                        }
                    </h3>
                    <button className="primary-btn d-flex justify-content-between align-items-center"  onClick={clickHandler}>

                        <svg version="1.1" id="Capa_1" x="0px" y="0px"
                             width="15px" height="15px" viewBox="0 0 444.531 444.531">
                            <g>
                                <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                                l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                                c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                                s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                                L213.13,222.409z"/>
                            </g>
                        </svg>
                        <span className="pl-5">
                        <span style={{
                            fontSize: "9px",
                            color: "white",
                            display: "block",
                            textAlign: "right"
                        }}>  گام نهایی </span>
                         تایید
                   </span>
                    </button>
                </div>

                <div className="col-lg-12 d-flex flex-row-reverse justify-content-between flex-wrap">
                    {
                        renders?.images.map(
                            item =>
                                <div className="renders-container">
                                    <img src={item} alt="" className="col-lg-12 px-0"/>
                                </div>
                        )
                    }
                </div>

            </div>
            :
            <Loading/>
    )
}

export default CheckRenders