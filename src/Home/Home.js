import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import ImagePreview from "../Components/ImagePreview/ImagePreview";
import MaterialList from "../Components/MaterualList/MaterialList";
import {fetchMenu} from "../redux/Home/Home-actions";
import InnerList from "../Components/InnerList/InnerList";
import BackViewBtn from "../Components/BackViewBtn/BackViewBtn";
import "./home.css"


const Home = () => {
    const innerListToggle = useSelector((state) => state.home.innerListToggle)
    const dispatch = useDispatch()

    const [state,setState] = useState()

    useEffect(() => {
        dispatch(fetchMenu())
    }, [])

    return (
        <div className="d-flex flex-row flex-wrap main">
            <ImagePreview/>
            <MaterialList/>
            {innerListToggle ? <InnerList/> : null}
            <BackViewBtn/>
        </div>
    )
}

export default Home