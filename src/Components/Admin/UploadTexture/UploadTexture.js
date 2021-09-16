import React, {useEffect, useState} from "react";
import Input from "../../Input/Input";
import File from "./file.svg"
import Setting from "./settings.svg"
import Check from "./check.svg"
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {
    fetchDir, setAlpha,
    setContent,
    setDiffuse, setDone,
    setIcon,
    setMetal,
    setName, setNormal,
    setPrice, setRoughness
} from "../../../redux/Admin/upload/upload-actions";

import {BasicUrl} from "../../../basicUrl";
import {setEmptyError, setUploadError} from "../../../redux/Errors/errors-actions";
import Alert from "../../Alert/Alert";
import {useParams} from "react-router";

const UploadTexture = () => {
    const dispatch = useDispatch()
    const menu = useSelector(state => state.menuSelected.menuSelected)
    const dirs = useSelector(state => state?.upload?.dirs)

    const name = useSelector(state => state?.upload?.name)
    const content = useSelector(state => state?.upload?.content)
    const price = useSelector(state => state?.upload?.price)
    const diffuse = useSelector(state => state?.upload?.diffuse)
    const normal = useSelector(state => state?.upload?.normal)
    const roughness = useSelector(state => state?.upload?.roughness)
    const alpha = useSelector(state => state?.upload?.alpha)
    const metal = useSelector(state => state?.upload?.metal)
    const icon = useSelector(state => state?.upload?.icon)

    const uploadError = useSelector(state => state?.error?.upload)
    const emptyError = useSelector(state => state?.error.empty)

    const {type} = useParams()

    useEffect(() => {
        dispatch(fetchDir())
        // dispatch(setName(null))
        // dispatch(setPrice(null))
        // dispatch(setContent(null))
        // dispatch(setDiffuse(null))
        // dispatch(setMetal(null))
        // dispatch(setIcon(null))
        // dispatch(setNormal(null))
        // dispatch(setRoughness(null))
        // dispatch(setAlpha(null))
    }, [menu])

    const checkDir = (e) => {
        const dirsName = dirs?.map(item => item.dirname)
        let res = dirsName?.includes(e.target.value)
        res ? dispatch(setUploadError("name")) : dispatch(setUploadError(null))
    }

    const uploadData = async () => {

        const dirsName = dirs?.map(item => item.dirname)
        let res = dirsName?.includes(document.querySelector("#name").value)
        res ? await dispatch(setUploadError("name")) : await dispatch(setUploadError(null))

        if (emptyError !== null) {
            document.querySelector(".alert-container").classList.add("open-alert")
        }
        if (name && uploadError == null) {
            // if (price) {
                // if (content) {
                    if (diffuse) {
                        // if (normal) {
                            // if (alpha) {
                                // if (roughness) {
                                    // if (metal) {
                                        if (icon) {
                                            var formData = new FormData()
                                            formData.append("name", name)
                                            formData.append("price", price)
                                            formData.append("content", content)
                                            formData.append("DiffuseMap", diffuse)
                                            formData.append("AlphaMap", alpha)
                                            formData.append("RoughnessMap", roughness)
                                            formData.append("Icon", icon)
                                            formData.append("MetalMap", metal)
                                            formData.append("NormalMap", normal)
                                            axios({
                                                method: "post",
                                                url: `${BasicUrl}/admin/${menu}/upload`,
                                                data: formData,
                                            })
                                                .then(
                                                    res => {
                                                        if (res?.data?.message.includes("Successfully")) {
                                                            return dispatch(setDone(true))
                                                        }
                                                    }
                                                )
                                        } else {
                                            dispatch(setEmptyError("icon"))
                                        }
                                    // } else {
                                    //     dispatch(setEmptyError("metal"))
                                    // }
                                // } else {
                                //     dispatch(setEmptyError("roughness"))
                                // }
                            // } else {
                            //     dispatch(setEmptyError("alpha"))
                            // }
                        // } else {
                        //     dispatch(setEmptyError("normal"))
                        // }
                    } else {
                        dispatch(setEmptyError("diffuse"))
                    }
                // } else {
                //     dispatch(setEmptyError("content"))
                // }
            // } else {
            //     dispatch(setEmptyError("price"))
            // }
        } else {
            dispatch(setEmptyError("name"))
        }
    }

    return (
            <div className="col-lg-11 p-5 inputs d-flex flex-row-reverse justify-content-around flex-wrap">

                <div className="levels d-flex flex-row-reverse justify-content-between align-items-center col-10 col-lg-5
            mx-auto ">
                    <div className="cart-lev d-flex flex-row flex-wrap justify-content-center align-items-center
                col-3 px-0 current-lev" style={{cursor: "pointer"}}>
                        <img src={File} alt="" className="col-4 px-0"/>
                        <span className="mt-2 d-block ">بارگذاری اطلاعات</span>
                    </div>
                    <div className="line-lev" ></div>
                    <div
                        className="  info-lev d-flex flex-row flex-wrap justify-content-center align-items-center col-3  px-0">
                        <img src={Setting} alt="" className="col-4 px-0"/>
                        <span className="mt-2 col-12 d-block ">تنظیمات</span>
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
                    <button onClick={uploadData} className="primary-btn d-flex justify-content-between align-items-center">

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
                         <span style={{fontSize: "9px", color: "white", display: "block", textAlign: "right"}}>  گام بعدی </span>
                         مقیاس دهی
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
                               placeholder="نام به انگلیسی مانند fabrics "
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
                    {/*<div className="col-lg-6 mt-1">*/}
                    {/*    <Input changeHandler={(e) => {*/}
                    {/*        dispatch(setMetal(e.target.files[0]))*/}
                    {/*        dispatch(setEmptyError(null))*/}
                    {/*    }}*/}
                    {/*           data={metal}*/}
                    {/*           type="file" label="Metal map"*/}
                    {/*           id="metal"/>*/}
                    {/*</div>*/}

                </div>

                <div className="col-lg-6 d-flex flex-row-reverse justify-content-start flex-wrap ">
                    <h5 className="col-12 text-right">بارگذاری متریال</h5>
                    <div className="col-lg-6">
                        <Input changeHandler={(e) => {
                            dispatch(setDiffuse(e.target.files[0]))
                            dispatch(setEmptyError(null))
                        }
                        }
                               data={diffuse}
                               type="file"
                               label="Diffuse map" id="diffuse" placeholder=""/>
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

                    {/*<div className="col-lg-6">*/}
                    {/*    <Input changeHandler={(e) => {*/}
                    {/*        dispatch(setNormal(e.target.files[0]))*/}
                    {/*        dispatch(setEmptyError(null))*/}
                    {/*    }}*/}
                    {/*           data={normal}*/}
                    {/*           type="file" label="Normal map"*/}
                    {/*           id="normal" placeholder=""/>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-6 mt-1">*/}
                    {/*    <Input changeHandler={(e) => {*/}
                    {/*        dispatch(setAlpha(e.target.files[0]))*/}
                    {/*        dispatch(setEmptyError(null))*/}
                    {/*    }}*/}
                    {/*           data={alpha}*/}
                    {/*           type="file" label="Alpha map"*/}
                    {/*           id="alpha"/>*/}
                    {/*</div>*/}
                    {/*<div className="col-lg-6 mt-1">*/}
                    {/*    <Input changeHandler={(e) => {*/}
                    {/*        dispatch(setRoughness(e.target.files[0]))*/}
                    {/*        dispatch(setEmptyError(null))*/}
                    {/*    }}*/}
                    {/*           data={roughness}*/}
                    {/*           type="file"*/}
                    {/*           label="Roughness map" id="roughness"/>*/}
                    {/*</div>*/}
                </div>

                <div className={`alert-container ${emptyError !== null ? "open-alert" : ``}`}>
                    <Alert type="error" text="تمامی فیلد ها الزامی است لطفا تمامی فیلد ها را پر کنید "/>
                </div>

            </div>
    )

}



export default UploadTexture