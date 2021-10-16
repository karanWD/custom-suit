import React, {useEffect, useState} from "react"
import {finalPrice, useFinalPrice} from "../../functions";

const PriceContainer = () =>{
    const [price,setPrice] = useState(0)
    let finalPrice = useFinalPrice("materialSelected")

    useEffect(()=>{
       setPrice(finalPrice)
    },[finalPrice])


    return(
        <div className="price">
            <span className="d-block price-toman text-right">تومان</span>
            <h6 className="d-block text-right">
                {price}
            </h6>
        </div>
    )
}

export default PriceContainer