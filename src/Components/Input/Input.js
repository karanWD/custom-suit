import React from "react";
import File from "./file.svg"
import {useSelector} from "react-redux";
import Check from "../Admin/UploadColor/check.svg"

const Input = ({data, type, label, id, placeholder, blurHandler, changeHandler, value}) => {
    const uploadError = useSelector(state => state?.error?.upload)
    const emptyError = useSelector(state => state?.error?.empty)

    return (
        <div className={`input-container mt-3 ${uploadError == id || emptyError == id ? "error" : ""}`}>
            <label htmlFor={id}>
                {uploadError == id && id == "name" ? "نام تکراری است" : label}
                {
                    type == "color" ?
                        <div className="upload-color" style={{backgroundColor:data}}>
                            <div className="upload-color-code">
                                {data}
                            </div>
                        </div>
                        :
                        null
                }
                {
                    type == "file" ?
                        !data ?
                            <div className="upload-file">
                                <img src={File} className="col-lg-4 mx-auto d-block" alt="" style={{opacity: "0.5"}}/>
                                <span className="mt-3 d-block px-4">
                                    برای آپلود عکس کلیک کنید و فایل مد نظر را انتخاب کنید
                                </span>
                                <div className="upload-file-btn">
                                    بارگذاری فایل
                                </div>
                            </div>
                            :
                            <div className="upload-file">
                                <img src={Check} className="col-lg-4 mx-auto d-block" alt="" style={{opacity: "0.8"}}/>
                                <span className="mt-3 d-block px-4">
                                    {data?.name}
                                </span>
                                <div className="upload-file-btn">
                                    بارگذاری مجدد
                                </div>
                            </div>
                        :
                        null
                }
            </label>
            <input
                onBlur={id == "name" ? blurHandler : null}
                onChange={changeHandler}
                className={`col-lg-11 mx-auto  mb-2 ${type == "file" ? "file-input" : type == "color" ? "color-input" : ""}`}
                id={id}
                placeholder={placeholder}
                type={type}
                value={value}
            />
        </div>
    )
}

export default Input