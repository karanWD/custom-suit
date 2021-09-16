import React from "react";
import Logo from "../Aside/images/logo.jpg";
import User from "./user.svg"
import {Link, useHistory, useLocation, useParams, useRouteMatch} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logout} from "../../../redux/Login/login-actions";

const Nav = () => {
    const dispatch = useDispatch()
    const params = useLocation()
    const history = useHistory()

    return(
        <nav className="d-flex flex-row-reverse flex-wrap justify-content-start    align-items-center">
            <div className="col-lg-1 px-0  logo  d-flex justify-content-center align-items-center">
                <img src={Logo} alt="" className=""/>
            </div>

             <ul className="d-flex flex-row-reverse col-lg-9 px-5 mb-0 ">
                 <Link to="/admin/list">
                    <li className={params?.pathname.includes("list")?"active-nav":""}>
                        لیست
                    </li>
                 </Link>
                 <Link to="/admin/insert">
                    <li className={params?.pathname.includes("list")?"":"active-nav"}>افزودن</li>
                 </Link>
             </ul>
            <div className="profile col-lg-2 d-flex flex-row-reverse align-items-center justify-content-around">
                <div className="text-center">
                    <span>ادمین </span>
                    <img src={User} className="col-lg-2 px-0 pb-1" alt="" style={{opacity:"0.6"}}/>
                </div>
                <span className="logout" onClick={ async ()=> {
                    await localStorage.removeItem("vt")
                    await dispatch(logout())
                    await history.push("/admin/login")
                }}>خروج</span>
            </div>
        </nav>
    )
}

export default Nav