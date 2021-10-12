import React from "react";
import PriceContainer from "../priceContainer/PriceContainer";

const BuyBtn = () => {
    return(
        <div className="col-3 px-0 col-lg-auto buy-btn">
            <button className="d-lg-flex flex-row-reverse justify-content-around">
                <div className="d-none d-lg-block">
                    <PriceContainer/>
                </div>
                <div className="continue">
                    ادامه
                </div>
            </button>
        </div>
    )
}

export default BuyBtn