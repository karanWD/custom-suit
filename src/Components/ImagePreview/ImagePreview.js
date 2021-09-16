import React, {useEffect} from "react";
import {combine} from "../../functions";
import {useDispatch, useSelector} from "react-redux";
import {changeShot, fetchMaterial} from "../../redux/Home/Home-actions";

const ImagePreview = () => {

    const dispatch = useDispatch()
    const innerListToggle = useSelector(state => state.home.innerListToggle)
    const materialSelected = useSelector(state => state.home.materialSelected)

    useEffect(() => {
        if (innerListToggle === "lining") {
            console.log(materialSelected)
            dispatch(changeShot(materialSelected, 4))
        } else {
            dispatch(changeShot(materialSelected, 1))
        }
    }, [innerListToggle])

    if (window.screen.width >= 992) {
        var percent = 60
        return (
            <div className="col-lg-12 px-0 imagePreview d-flex justify-content-center">
                {
                    innerListToggle === "lining"
                        ?
                        <canvas id="myCanvas" width={ window.screen.width - ( percent / 2 * window.screen.width / 100 )}
                                height={window.screen.width - (percent / 2 * window.screen.width / 100)}></canvas>
                        :
                        <canvas id="myCanvas" width={window.screen.width - (percent * window.screen.width / 100)}
                                height={(window.screen.width - (percent * window.screen.width / 100)) * 1.25}></canvas>

                }

            </div>
        )
    } else {
        var percent = 0
        return (
            <div className="col-lg-12 px-0 imagePreview d-flex justify-content-center">
                {
                    innerListToggle === "lining"
                        ?
                        <canvas id="myCanvas" width={2*window.screen.width - (percent * window.screen.width / 100)}
                                height={2*window.screen.width - (percent * window.screen.width / 100)}></canvas>
                        :
                        <canvas id="myCanvas" width={2*window.screen.width - (percent * window.screen.width / 100)}
                                height={2*(window.screen.width - (percent * window.screen.width / 100)) * 1.25}></canvas>

                }

            </div>
        )
    }
}

export default ImagePreview