import React, {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import ImagePreview from "../Components/ImagePreview/ImagePreview";
import MaterialList from "../Components/MaterualList/MaterialList";
import {fetchMenu} from "../redux/Home/Home-actions";
import InnerList from "../Components/InnerList/InnerList";
import BackViewBtn from "../Components/BackViewBtn/BackViewBtn";
import "./home.css"
import TodoList from "../Components/TodoList/TodoList";


const Home = () => {

    const innerListToggle = useSelector((state) => state.home.innerListToggle)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMenu())
    }, [])

    return (
        <div className="d-flex flex-row">
            <ImagePreview/>
            <MaterialList/>
            {innerListToggle ? <InnerList/> : null}
            <BackViewBtn/>
            {/*<TodoList/>*/}
        </div>
    )
}

export default Home