import React, {useEffect, useState} from "react";
import Input from "../../Input/Input";
import File from "./file.svg"
import Setting from "./settings.svg"
import Check from "./check.svg"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {
    fetchDir, setAlpha, setClearData, setColorData, setColorPreview,
    setContent,
    setDiffuse, setDone,
    setIcon,
    setMetal,
    setName, setNormal,
    setPrice, setRoughness
} from "../../../redux/Admin/upload/upload-actions";

import {setEmptyError, setUploadError} from "../../../redux/Errors/errors-actions";
import Alert from "../../Alert/Alert";

import Loading from "../../Loading/Loading";
import {BasicUrl} from "../../../basicUrl";
import {fetchRenders} from "../../../redux/Admin/Check/check-actions";


const UploadColor = () => {
    const dispatch = useDispatch()
    const menu = useSelector(state => state.menuSelected.menuSelected)
    const name = useSelector(state => state?.upload?.name)
    const content = useSelector(state => state?.upload?.content)
    const price = useSelector(state => state?.upload?.price)
    const icon = useSelector(state => state?.upload?.icon)
    const emptyError = useSelector(state => state?.error.empty)
    const color = useSelector(state => state.upload.color)
    const dirs = useSelector(state => state?.upload?.dirs)
    const preview = useSelector(state => state.upload.colorPreview)
    const rendering = useSelector(state => state.rendering.rendering)
    const uploadError = useSelector(state => state?.error?.upload)

    useEffect(() => {
        dispatch(fetchDir())
    }, [menu])

    const checkDir = (e) => {
        const dirsName = dirs?.map(item => item.dirname)
        let res = dirsName?.includes(e.target.value)
        res ? dispatch(setUploadError("name")) : dispatch(setUploadError(null))
    }


    const uploadColor = async () => {

        const dirsName = dirs?.map(item => item.dirname)
        let res = dirsName?.includes(document.querySelector("#name").value)
        res ? await dispatch(setUploadError("name")) : await dispatch(setUploadError(null))

        if (emptyError !== null) {
            document.querySelector(".alert-container").classList.add("open-alert")
        }

        if (name && uploadError == null) {
            if (price) {
                if (content) {
                    if (icon) {
                        var formData = new FormData()
                        formData.append("name", name)
                        formData.append("price", price)
                        formData.append("content", content)
                        formData.append("Icon", icon)
                        formData.append("color", color)

                        axios({
                            method: "post",
                            url: `${BasicUrl}/admin/${menu}/upload`,
                            data: formData,
                        })
                            .then(
                               async res => {
                                    if (res?.data?.message.includes("Successfully")) {
                                         await dispatch(fetchRenders("color"))
                                         await dispatch(setDone(true))
                                    }
                                }
                            )
                    } else {
                        dispatch(setEmptyError("icon"))
                    }
                }else {
                    dispatch(setEmptyError("content"))
                }
            } else {
                dispatch(setEmptyError("price"))
            }
        } else {
            dispatch(setEmptyError("name"))
        }

    }

return (
    !rendering ?
        <div className="col-lg-11 p-5 inputs d-flex flex-row-reverse justify-content-around flex-wrap">

            <div className="levels d-flex flex-row-reverse justify-content-between align-items-center col-10 col-lg-5
            mx-auto ">
                <div className="cart-lev d-flex flex-row flex-wrap justify-content-center align-items-center
                col-3 px-0 current-lev" style={{cursor: "pointer"}}>
                    <img src={File} alt="" className="col-4 px-0"/>
                    <span className="mt-2 d-block ">بارگذاری اطلاعات</span>
                </div>
                <div className="line-lev"></div>

                <div
                    className=" pay-lev d-flex flex-row flex-wrap justify-content-center align-items-center col-3  px-0">
                    <img src={Check} alt="" className="col-4 px-0"/>
                    <span className="mt-2 col-12 d-block ">چک نهایی</span>
                </div>
            </div>

            <div className="col-12 mb-5 d-flex flex-row-reverse justify-content-between align-items-center mt-5 pt-5">
                <h3 className="text-right ">
                    افزودن به
                    {
                        menu == "fabric"
                            ?
                            " پارچه های کت"
                            :
                            menu == "lining" ?
                                " آستر کت "
                                :
                                menu == "button" ?
                                    " دکمه "
                                    :
                                    null
                    }
                </h3>
                <button className="primary-btn d-flex justify-content-between align-items-center"
                        onClick={uploadColor}>

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
                         <span style={{fontSize: "9px", color: "white", display: "block", textAlign: "right"}}>  گام نهایی </span>
                         تایید نهایی
                   </span>
                </button>
            </div>

            <div className="col-lg-6 d-flex flex-row-reverse justify-content-between flex-wrap">
                <h5 className="col-12 text-right">مشخصات پارچه</h5>
                <div className="col-lg-6 ">
                    <Input changeHandler={(e) => {
                        dispatch(setName(e.target.value))
                        dispatch(setEmptyError(null))
                        dispatch(setUploadError(null))
                    }
                    }
                           blurHandler={checkDir} type="text" label="نام" id="name"
                           placeholder="نام به انگلیسی مانند dark-pattern "
                           value={name}
                    />
                </div>
                <div className="col-lg-6 ">
                    <Input changeHandler={(e) => {
                        dispatch(setPrice(e.target.value))
                        dispatch(setEmptyError(null))
                    }
                    }
                           type="text" label="قیمت" id="price" placeholder="قیمت به تومان مانند 150،000 "
                           value={price}/>
                </div>
                <div className="col-lg-12">
                    <Input
                        changeHandler={(e) => {
                            dispatch(setContent(e.target.value))
                            dispatch(setEmptyError(null))
                        }}
                        type="text" label="توضیحات" value={content}
                        id="content" placeholder="توضیحات مانند جنس و مشخصات هر کدام"/>
                </div>
                <div className="col-lg-6 mt-1">
                    <Input changeHandler={(e) => {
                        dispatch(setIcon(e.target.files[0]))
                        dispatch(setEmptyError(null))
                    }
                    }
                           data={icon}
                           type="file" label="Icon " id="icon"/>
                </div>
                <div className="col-lg-6">
                    <Input changeHandler={(e) => {
                        dispatch(setColorData(e.target.value))
                        dispatch(setEmptyError(null))
                    }
                    }
                           data={color}
                           type="color"
                           label="رنگ" id="color" placeholder=""/>

                    <button className="change-tile-btn col-12 py-3"
                            onClick={() => dispatch(setColorPreview(false,color))}>
                        پیش نمایش
                    </button>
                </div>

            </div>

            <div className="col-lg-6 ">
                <h5 className="col-12 text-right">پیش نمایش</h5>
                <div className="col-lg-12 mt-4" style={{height: "85%"}}>
                    <div className="preview-color col-12 h-100">
                        <img src={`${preview && preview.preview}?${Date.now()}`} className="col-12 px-0" alt=""/>
                    </div>
                </div>
            </div>

            <div className={`alert-container ${emptyError !== null ? "open-alert" : ``}`}>
                <Alert type="error" text="تمامی فیلد ها الزامی است لطفا تمامی فیلد ها را پر کنید "/>
            </div>

        </div>
        :
        <Loading/>
)

}


export default UploadColor