import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchButton,
    fetchFabric,
    fetchInnerList,
    fetchLining,
    fetchMaterial,
    toggleInnerList
} from "../../redux/Home/Home-actions";
import {combine} from "../../functions";
import axios from "axios";

const InnerList = () => {

    const innerListToggle = useSelector(state => state.home.innerListToggle)
    const innerListItems = useSelector(state => state.home.innerListItems)
    const selectedItem = useSelector((state)=>state.home.materialSelected)
    const menu = useSelector(state => state.home.menu)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchInnerList(innerListToggle))
    }, [innerListToggle])

    const selectMaterial = (id,icon) => {

        dispatch(fetchMaterial("setMaterial",innerListToggle, innerListToggle === "lining" ? 4 : 1,id,icon))
    }

    return (
        innerListItems && toggleInnerList ?
            <>
                <div className={innerListToggle ? 'col-lg-3 px-4 py-4 d-block inner-list-item' : "d-none"}
                     style={{height:"100%",position: "absolute", top: "0", right: "0", backgroundColor: "white"}}>
                    <div className="d-flex flex-row-reverse justify-content-between align-items-center">
                        <h2 className="text-right">
                            {
                                menu.filter(item => item.title === innerListToggle)[0].show_name
                            }
                        </h2>
                        <button className="close-inner-list" onClick={() => dispatch(toggleInnerList(null))}>
                            بازگشت
                        </button>
                    </div>

                    <ul className="mt-4" style={{listStyle: "none",paddingLeft:"0"}}>
                        {
                            selectedItem && innerListItems?.map((item) =>
                                <>
                                    <li id={item.id} onClick={()=>selectMaterial(item.id,item.image)}
                                        className={`${selectedItem.filter(selected => selected.mode === innerListToggle)[0].id === item.id ? "active-item" : null} d-flex flex-row-reverse align-items-center`}>

                                        <div className="col-lg-4 px-0">
                                            <img className="w-100" src={item.image} alt="" id={item.id}/>
                                        </div>

                                        <div className="col-lg-8 pl-0 text-right">
                                            <h6>{item.name}</h6>
                                            <p>{item.content}</p>
                                            <div className="d-flex flex-row-reverse justify-content-end align-items-center">
                                                <span>{item.price}</span>
                                                <span className="inner-list-item-toman">تومان</span>
                                            </div>

                                        </div>
                                    </li>
                                </>


                            )
                        }

                    </ul>
                </div>
            </>
            :
            null
    )
}

export default InnerList