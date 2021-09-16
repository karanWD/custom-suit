import { combineReducers } from "redux";
import homeReducer from "./Home/Home-reducer";
import menuSelectedReducer from "./Admin/menuSelected/menuSelected-reducer";
import uploadReducer from "./Admin/upload/upload-reducer";
import scaleReducer from "./Admin/Scale/scale-reducer";
import errorsReducer from "./Errors/errors-reducer";
import checkReducer from "./Admin/Check/check-reducer";
import listReducer from "./Admin/List/list-reducer";
import loginReducer from "./Login/login-reducer";
import menuReducer from "./menu/menu-reducer";
import renderingReducer from "./Admin/Rendering/rendering-reducer";

export default combineReducers({
    home:homeReducer,
    menuSelected:menuSelectedReducer,
    upload : uploadReducer,
    scale:scaleReducer,
    error:errorsReducer,
    check:checkReducer,
    list:listReducer,
    login:loginReducer,
    menu:menuReducer,
    rendering:renderingReducer
})