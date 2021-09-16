import React from "react";

const BuyBtn = () => {
    return(
        <div className="buy-btn">
            <button className="d-flex flex-row-reverse">
                <div className="price">
                    <span className="d-block price-toman text-right">تومان</span>
                    <h6 className="d-block text-right">
                        15,000,000
                    </h6>
                </div>
                <div className="continue">
                    ادامه
                </div>
            </button>
        </div>
    )
}

export default BuyBtn