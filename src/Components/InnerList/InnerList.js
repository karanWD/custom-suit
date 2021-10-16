import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchInnerList,
    fetchMaterial,
    toggleInnerList
} from "../../redux/Home/Home-actions";
import PriceContainer from "../priceContainer/PriceContainer";

const InnerList = () => {

    const innerListToggle = useSelector(state => state.home.innerListToggle)
    const innerListItems = useSelector(state => state.home.innerListItems)
    const selectedItem = useSelector((state)=>state.home.materialSelected)
    const menu = useSelector(state => state.home.menu)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchInnerList(innerListToggle))
    }, [innerListToggle])

    const selectMaterial = (id,icon,price) => {
        dispatch(fetchMaterial("setMaterial",innerListToggle, innerListToggle === "lining" ? 4 : 1,id,icon,price))
    }

    return (
        innerListItems && toggleInnerList ?
            <>
                <div className={`innerListItemsContainer ${innerListToggle ? 'col-lg-3 px-lg-4 py-lg-4 d-flex d-lg-block inner-list-item' : "d-none"}`}>
                    <div className="d-none d-lg-flex flex-row-reverse justify-content-between align-items-center">
                        <h2 className="text-right">
                            {
                                menu.filter(item => item.title === innerListToggle)[0].show_name
                            }
                        </h2>
                        <button className="close-inner-list" onClick={() => dispatch(toggleInnerList(null))}>
                            بازگشت
                        </button>
                    </div>
                    <ul className="col-9 col-lg-auto m-0 mt-lg-4 d-flex d-lg-block" style={{listStyle: "none",paddingLeft:"0"}}>
                        {
                            selectedItem && innerListItems?.map((item) =>
                                <>
                                    <li id={item.id} onClick={()=>selectMaterial(item.id,item.image,item.price)}
                                        className={`${selectedItem.filter(selected => selected.mode === innerListToggle)[0].id === item.id ? "active-item" : null} col-4 col-lg-12  d-flex flex-row-reverse align-items-center`}>

                                        <div className="col-lg-4 px-0">
                                            <img className="w-100" src={item.image} alt="" id={item.id}/>
                                        </div>

                                        <div className="d-none d-lg-block col-9 col-lg-8 pl-0 text-right">
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
                    {
                        window.screen.width <= 992 ?
                            <button className="close-inner-list col-3 d-flex flex-row-reverse justify-content-around align-items-center"
                                    onClick={() => dispatch(toggleInnerList(null))}
                            >
                                    بازگشت
                            </button>
                            :
                            null
                    }
                </div>
            </>
            :
            null
    )
}

export default InnerList