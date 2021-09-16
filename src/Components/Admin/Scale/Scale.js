import React, {useEffect} from "react";
import Input from "../../Input/Input";
import File from "./file.svg"
import Setting from "./settings.svg"
import Check from "./check.svg"
import {useDispatch, useSelector} from "react-redux";

import {
    fetchDefaultScale,
    fetchInputs,
    setCollarTile,
    setSuitTile,
    setTile
} from "../../../redux/Admin/Scale/scale-actions";
import Loading from "../../Loading/Loading";
import {
    setAlpha,
    setContent,
    setDiffuse,
    setDone,
    setIcon,
    setMetal,
    setName, setNormal,
    setPrice, setRoughness
} from "../../../redux/Admin/upload/upload-actions";
import {setEmptyError} from "../../../redux/Errors/errors-actions";
import Alert from "../../Alert/Alert";
import {fetchRenders} from "../../../redux/Admin/Check/check-actions";

const Scale = () => {
    const dispatch = useDispatch()
    const part = useSelector(state => state.menuSelected.menuSelected)
    const defaultTile = useSelector(state => state.scale.defaultTile)
    // const suitTile = useSelector(state => state.scale.suitTile)
    // const collarTile = useSelector(state => state.scale.collarTile)
    const scales = useSelector(state => state.scale)
    const dirname = useSelector(state => state.upload.name)
    const rendering = useSelector(state => state.scale.rendering)
    const emptyError = useSelector(state => state?.error.empty)
    const inputs = useSelector(state => state?.scale.inputs)
    const tile = useSelector(state => state?.scale.tile)


    useEffect(() => {
        // dispatch(fetchDefaultScale())
        dispatch(fetchInputs())
    }, [])

    const changeTile = () => {
        if (emptyError !== null) {
            document.querySelector(".alert-container").classList.add("open-alert")
        }

        if (tile && dirname) {
            // if (collarTile > 0) {
                dispatch(fetchDefaultScale())
            // }
            // else {
            //     dispatch(setEmptyError("collarTile"))
            // }

        }
        else {
            dispatch(setEmptyError("tile"))
        }
    }
    const backHandler = async () => {
        await dispatch(setName(null))
        await dispatch(setPrice(null))
        await dispatch(setContent(null))
        await dispatch(setDiffuse(null))
        await dispatch(setMetal(null))
        await dispatch(setIcon(null))
        await dispatch(setNormal(null))
        await dispatch(setRoughness(null))
        await dispatch(setAlpha(null))
        await dispatch(setDone(false))
    }
    const clickhandler = () => {
        dispatch(fetchRenders("fetch"))
    }

    return (
        !rendering
            ?
            <div className="col-lg-11 p-5 inputs d-flex flex-row-reverse justify-content-around flex-wrap">

                <div className="levels d-flex flex-row-reverse justify-content-between align-items-center col-10 col-lg-5
            mx-auto ">
                    <div className="cart-lev d-flex flex-row flex-wrap justify-content-center align-items-center
                col-3 px-0 current-lev" onClick={backHandler} style={{cursor: "pointer"}}>
                        <img src={File} alt="" className="col-4 px-0"/>
                        <span className="mt-2 d-block ">بارگذاری اطلاعات</span>
                    </div>
                    <div className="line-lev current-line-lev"></div>
                    <div
                        className="  info-lev d-flex flex-row flex-wrap justify-content-center align-items-center col-3  px-0 current-lev ">
                        <img src={Setting} alt="" className="col-4 px-0"/>
                        <span className="mt-2 col-12 d-block ">مقیاس دهی</span>
                    </div>
                    <div className="line-lev"></div>
                    <div
                        className=" pay-lev d-flex flex-row flex-wrap justify-content-center align-items-center col-3  px-0">
                        <img src={Check} alt="" className="col-4 px-0"/>
                        <span className="mt-2 col-12 d-block ">چک نهایی</span>
                    </div>
                </div>

                <div
                    className="col-12 mb-5 d-flex flex-row-reverse justify-content-between align-items-center mt-5 pt-5">
                    <h3 className="text-right ">
                        افزودن به
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
                    <button className="primary-btn d-flex justify-content-between align-items-center" onClick={clickhandler}>

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
                        }}>  گام بعدی </span>
                         تایید نهایی
                   </span>
                    </button>
                </div>

                <div className="col-lg-12 d-flex flex-row-reverse justify-content-between flex-wrap">
                    <h5 className="col-12 text-right">مقیاس دهی </h5>
                    <p className="col-12 text-right " style={{color: "#777", fontSize: "14px"}}>بازه مقادیر مقیاس دهی
                        بایستی میان عدد 1 تا 80 باشد ، کمتر یا بیشتر از این بازه قابل قبول نیست</p>
                    <div className="col-lg-3 mt-2 d-flex flex-row-reverse  flex-wrap" style={{height: "fit-content"}}>
                        {
                            inputs?.map(item =>{
                                return(
                                    <div className="col-lg-12">

                                        <Input value={scales[item.scale_key]} changeHandler={(e) => {

                                            dispatch(setTile([item.scale_key,e.target.value]) )
                                            dispatch(setEmptyError(null))
                                        }}
                                               type="text"
                                               label={`   مقیاس ${item.scale_name}  `}
                                               id={item.scale_key}
                                               placeholder={` مقیاس ${item.scale_name} به عدد `}/>
                                    </div>
                                )
                            }

                            )

                        }
                        <button className="change-tile-btn col-11" onClick={changeTile}>
                            اعمال تغییر
                        </button>
                    </div>
                    <div className="col-lg-12 d-flex flex-wrap  mt-4 scale-image-container">
                        {console.log(defaultTile?.images)}
                        {
                            defaultTile?.images?.map(item =>
                                <div className="">
                                    <img className="col-12 px-0" src={`${item}?${Date.now()}`} alt=""/>
                                </div>
                            )
                        }


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

export default Scale