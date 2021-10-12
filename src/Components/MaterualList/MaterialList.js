import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleInnerList} from "../../redux/Home/Home-actions";
import PrimaryBtn from "../BuyBtn/PrimaryBtn";
import PriceContainer from "../priceContainer/PriceContainer";

const MaterialList = ()=>{

    const menu = useSelector((state)=>state.home.menu)
    const selectedItem = useSelector((state)=>state.home.materialSelected)
    const dispatch = useDispatch()

    const showInnerList = (event) => {
            dispatch(toggleInnerList(event.target.id))
    }

    return(
        <div className="material-list d-flex d-lg-block ">
            <ul className="col-9 col-lg-9 px-0 d-flex flex-row-reverse justify-content-end">
                {
                    selectedItem && menu?.map((item) =>
                        <>
                            <li className="menu-item px-0 mt-2" id={item.title} onClick={showInnerList}>
                                <img className="col-12 px-0" src={selectedItem.filter(selected => selected.mode === item.title)[0].icon} alt=""/>
                                <p> {item.show_name} </p>
                            </li>
                        </>
                    )
                }
            </ul>
            <PrimaryBtn/>
            {window.screen.width <= 992 ? <PriceContainer/> : null}
        </div>
    )
}

export default MaterialList