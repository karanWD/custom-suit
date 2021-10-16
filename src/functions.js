import {useSelector} from "react-redux";

export function combine(i,j,suit,lining,button,type) {
    // console.log(suit,lining,button)
    var suits = suit;
    var lines = lining;
    var buttons =button;
    var sindex = 0;
    var lindex = 0;
    var percent = window.screen.width > 992 ? 70 : 0

    if (i != -1) {
        sindex = i;
    }
    if (j != -1) {
        lindex = j;
    }
    var c = document.getElementById("myCanvas");
    const context = c.getContext('2d');

    context.clearRect(0, 0, c.width, c.height);
    var ctx = c.getContext("2d");

    var imageObj1 = new Image();
    var imageObj2 = new Image();
    var imageObj3 = new Image();

    imageObj1.src = suits;
    imageObj1.crossOrigin="anonymous"

    imageObj1.onload = function () {
        imageObj2.src = lines;
        imageObj2.crossOrigin="anonymous"
        imageObj2.onload = function () {
            imageObj3.src = buttons;
            imageObj3.crossOrigin="anonymous"
            imageObj3.onload = function () {
                if (window.screen.width >= 992) {
                    // if(type === "lining"){
                    //     ctx.drawImage(imageObj1, 0, 0, window.screen.width - (percent/2*window.screen.width/100), window.screen.width - (percent/2*window.screen.width/100));
                    //     ctx.drawImage(imageObj2, 0, 0, window.screen.width - (percent/2*window.screen.width/100), window.screen.width - (percent/2*window.screen.width/100));
                    //     ctx.drawImage(imageObj3, 0, 0, window.screen.width - (percent/2*window.screen.width/100), window.screen.width - (percent/2*window.screen.width/100));
                    // } else{
                    ctx.drawImage(imageObj1, 0, 0,  window.screen.width - ( percent * window.screen.width / 100 ) , ( window.screen.width - ( percent *  window.screen.width / 100)) * 1.33 );
                    ctx.drawImage(imageObj2, 0, 0,  window.screen.width - ( percent * window.screen.width / 100 ) , ( window.screen.width - ( percent *  window.screen.width / 100)) * 1.33 );
                    ctx.drawImage(imageObj3, 0, 0,  window.screen.width - ( percent * window.screen.width / 100 ) , ( window.screen.width - ( percent *  window.screen.width / 100)) * 1.33 );
                    // }
                }
                else{
                    ctx.drawImage(imageObj1, 0, 0, window.screen.width, window.screen.width * 1.33);
                    ctx.drawImage(imageObj2, 0, 0, window.screen.width, window.screen.width * 1.33);
                    ctx.drawImage(imageObj3, 0, 0, window.screen.width, window.screen.width * 1.33);
                }
                var img = c.toDataURL("image/png");
                var imgTag = document.createElement("img")
                imgTag.setAttribute("src",img)
                imgTag.setAttribute("class","col-12")
                c.appendChild(imgTag)
            }

            // document.write('<img src="' + img + '" width="1920" height="1080"/>');
        }
    };
}
export const useToken = (length)=>{
    const rand=()=>Math.random(0).toString(36).substr(2);
    const token = (rand()+rand()+rand()+rand()).substr(0,length);
    return token
}

export const useFinalPrice =  (data) => {
     const items =  useSelector(state => state.home[data])
     if(items){
        let total =
            items.reduce((total, item) => total + parseInt(item.price), 0)
        return total
     }
}