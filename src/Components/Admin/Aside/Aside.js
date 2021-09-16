import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {selectMenu} from "../../../redux/Admin/menuSelected/menuSelected-actions";
import {
    setAlpha, setClearData, setColorData, setColorPreview,
    setContent,
    setDiffuse, setDone,
    setIcon,
    setMetal,
    setName,
    setNormal,
    setPrice, setRoughness
} from "../../../redux/Admin/upload/upload-actions";
import {Link} from "react-router-dom";
import {fetchMenu} from "../../../redux/menu/menu-actions";


const Aside = () => {
    const dispatch = useDispatch()
    const menuItems = useSelector(state => state.menu.items)


    const [menuData,setmenu] = useState(
        [
            {name:"پارچه کت",image:"fabric"},
            {name:"آستر کت",image:"lining"},
            {name:"دکمه کت ",image:"button"},
            {name:"یقه کت",image:"1"},
            {name:"پارچه شلوار",image:"2"},
            {name:"دکمه شلوار",image:"3"}
            ]
    )
    const menuSelected = useSelector(state => state.menuSelected.menuSelected)

    useEffect(()=>{
        dispatch(fetchMenu())
    },[])

    const clickHandler = async (e) => {
           await dispatch(selectMenu([e.target.id,e.target.name]))
           await dispatch(setDone(false))
           await dispatch(setColorData("#000000"))
           await dispatch(setIcon(null))
           await dispatch(setColorPreview(true))
    }

    return(
        <aside className="col-lg-1 px-0 ">
            <div className="menu ">
                <ul className="text-right">
                    {
                        menuItems?.map(item =>
                                <li id={item.value} name={item.type} className={menuSelected == item.value ? "active-menu" : ""} onClick={clickHandler}>
                                    <img id={item.value} name={item.type}  src={item.icon} alt="" className="col-lg-4 px-0 "/>
                                    <span id={item.value} name={item.type} className="mt-2 d-block"  >
                                        {item.show_name}
                                    </span>
                                </li>
                        )
                    }

                </ul>
            </div>
        </aside>
    )
}

export default Aside