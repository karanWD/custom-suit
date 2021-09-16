import React,{useEffect} from "react";
import Input from "../Components/Input/Input";
import "./Login.scss"
import Logo from "./logo.svg"
import {useDispatch, useSelector} from "react-redux";
import {login, setEmail, setPass} from "../redux/Login/login-actions";
import {useHistory} from "react-router";
import {setEmptyError, setLoginError} from "../redux/Errors/errors-actions";
import Alert from "../Components/Alert/Alert";



const Login = () => {
    const dispatch = useDispatch()

    const email = useSelector(state => state?.login?.email)
    const pass = useSelector(state => state?.login?.password)
    const token = useSelector(state => state?.login?.login)
    const emptyError = useSelector(state => state?.error?.empty)
    const loginError = useSelector(state => state?.error?.login)
    const history = useHistory()

    const loginHandler = async ()=> {
        if(pass&&email){
             dispatch(login())
        }
        else {
            dispatch(setEmptyError("login"))
        }
    }

     useEffect(async ()=>{
         if( token && token !== 0 ) {
             await localStorage.setItem("vt",token);
             await history.push("/admin/insert")
         }
     },[token])

    return (
        <section className="login">
            <div class=" px-0 pt-lg-5 ">
                <div class="d-none d-lg-flex justify-content-center align-items-center  ">
                    <div class="col-md-8 d-flex flex-row-reverse flex-wrap px-0 login-container">
                        <div class="col-lg-6 px-0 py-5 text-right">

                            <div class="col-md-12 px-5 pt-2">
                                <h3 class="text-end ">
                                    ورود به حساب
                                </h3>
                                <p class="text-end mb-5">
                                    برای ورود لطفا ایمیل و رمز عبور خود را وارد کنید
                                </p>
                                <Input changeHandler={(e)=>{

                                    dispatch(setEmail(e.target.value))
                                    dispatch(setEmptyError(null))
                                    dispatch(setLoginError(null))
                                }} id="email" type="text" label="ایمیل" placeholder="info@gmail.com"/>

                                <Input changeHandler={(e)=>{
                                    dispatch(setPass(e.target.value))
                                    dispatch(setEmptyError(null))
                                    dispatch(setLoginError(null))
                                }} id="pass" type="password" label="رمز عبور" placeholder="******"/>

                            </div>

                            <div class="pb-5 px-5">
                                <div className="col-md-12">
                                    <span className="a-error"></span>
                                </div>
                                <div className=" mt-3 mx-auto d-block">
                                    <button className="col-lg-6 primary-btn" onClick={loginHandler}>
                                        ورود
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 px-0 login-left py-5 d-flex flex-wrap align-items-center justify-content-center">
                            <img src={Logo} alt=""/>
                            <div className="col-6 mt-5 text-white">
                                <h1>نام برنـــد</h1>
                            </div>
                            <div className="d-flex flex-column">
                                <h2 className="text-right text-white ">
                                    شخصی دوزی
                                    <br/>
                                    شخصی سازی پوشاک خود
                                </h2>
                                <div class="d-block text-right mt-4">
                                    <a href="/" className="home-page">
                                        صفحه اصلی
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-lg-none">
                    <div class="d-flex justify-content-center align-items-center px-4">
                        <img src="/assets/images/profile-back.png" alt="banimode" class="profile-back-img"/>
                        <div class="col-6">
                            <img src="/assets/images/white-logo.svg" alt=""/>
                        </div>
                    </div>
                    <div>
                        <div class=" pt-5">
                            <div class="col-md-12 px-5">
                                <h3 class="text-end  a-h3 ">ورود</h3>
                                <p class="text-end  a-paragraph ">برای ورود و یا ثبت ‌نام شماره موبایل خود
                                    را
                                    وارد
                                    نمایید تا کد تایید برای شما پیامک
                                    شود
                                </p>
                                <input id="auto-focus" class="text-end col-12 mt-4  mx-auto a-input"
                                       type="text"
                                       placeholder="شماره همراه"

                                />
                            </div>
                        </div>
                        <div class="px-5">
                            <div class="col-md-12">
                                <span class="a-error"></span>
                            </div>
                            <div class="text-left mt-3 mx-auto d-block">
                                <a class="a-btn">
                                                <span>
                                                    ارسال کد
                                                </span>
                                    <i class="left-arrow">›</i>
                                </a>
                            </div>
                        </div>
                        <div class="px-5 mt-3">
                            <a href="/" class="home-page">
                                <img src="/assets/images/home.svg" alt=""/>
                                صفحه اصلی
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className={`alert-container ${emptyError !== null ? "open-alert" : ``}`}>
                <Alert type="loginError" text="لطفا ایمیل و رمز عبور خود را وارد کنید "/>
            </div>
            <div className={`alert-container ${loginError !== null ? "open-alert" : ``}`}>
                <Alert type="loginError" text="ایمیل یا رمز عبور وارد شده صحیح نمی باشد "/>
            </div>
        </section>
    )
}

export default Login