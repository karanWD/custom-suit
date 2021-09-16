import React, {useEffect} from "react";
import Upload from "../Upload/Upload";
import {useSelector} from "react-redux";
import Scale from "../Scale/Scale";
import CheckRenders from "../CheckRenders/CheckRenders";
import {useHistory} from "react-router";


const Insert = () => {
    const uploadDone = useSelector(state => state.upload.done)
    const renders = useSelector(state => state.check.renders)
    const token = localStorage.getItem("vt")
    const history = useHistory()

    useEffect(()=>{
        if(!token || token == 0){
            history.push("/admin/login")
        }
    },[])


    if(!uploadDone){
        return <Upload/>
    }
    else if(uploadDone && !renders){
        return  <Scale/>

    }
    else if (renders){
        return <CheckRenders/>
    }
}


export default Insert