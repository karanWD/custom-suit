import React from "react"
import "./Alert.scss"
import Succeed from "./check-mark.svg"
import Fail from "./warning.svg"
import Close from "./close.svg"

const Alert = ({type, text}) => {

    const closeAlert = ()=>{
        document.querySelector(".open-alert").classList.remove("open-alert")
    }
    return (
        <div className="my-alert">
            <div
                className={`d-flex flex-row-reverse justify-content-between ${type === "success" ? "success-alert" : "error-alert"}`}>
                <div className="col-12 d-flex flex-row-reverse justify-content-between align-items-center flex-wrap py-3 pr-4">
                    <span></span>
                    <div>
                        <div className="d-flex flex-row col-12 px-0 justify-content-end align-items-center">
                            <h6  className="text-white mb-0">
                                {
                                    type == "loginError" ?
                                       " خطا در ورود"
                                    :
                                   " خطا در بارگذاری"
                                }
                            </h6>
                            <img className="alertImage"  src={type === "success" ? Succeed : Fail} alt=""/>
                        </div>
                        <div style={{fontSize: "12px", marginTop: "5px"}}>
                            {text}
                        </div>
                    </div>
                    <div className="col-2 px-0 close-alert" onClick={closeAlert}>
                        <img className="col-lg-6 "
                             src={Close} alt=""
                             style={{opacity:0.9,borderRadius:"5px",padding:"10px"}}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Alert