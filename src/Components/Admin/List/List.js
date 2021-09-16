import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteAlertList, deleteList, deleteListItem, fetchList} from "../../../redux/Admin/List/list-actions";
import Loading from "../../Loading/Loading";
import Close from "./close.svg"
import Warning from "./warning.svg"
import {useHistory} from "react-router";

const List = () => {
    const dispatch = useDispatch()
    const menu = useSelector(state => state.menuSelected.menuSelected)
    const listItems  = useSelector(state => state.list.listItem)
    const deleteAlert  = useSelector(state => state.list.deleted)
    const token = localStorage.getItem("vt")
    const history = useHistory()

    const deleteAlertHandler = (e) => {
        console.log(e.target.id)
        dispatch(deleteAlertList(e.target.id))
    }

    const deleteHandler = () => {
        dispatch(deleteListItem())
    }

    useEffect(()=>{
        if(!token || token == 0){
            history.push("/admin/login")
        }
        else{
            dispatch(fetchList(menu))
        }

    },[menu,deleteAlert])

    return(
      <section className="col-lg-11">
          <div className="col-12 mb-5 mt-5 pr-5">
              <h3 className="text-right ">
                  لیست
                  {
                      menu == "fabric"
                          ?
                          " پارچه های کت"
                          :
                          menu == "lining" ?
                              " آستر کت "
                              :
                              menu == "button" ?
                                  " دکمه "
                                  :
                                  null
                  }
              </h3>
              <div className="col-12 px-0 d-flex flex-row-reverse flex-wrap mt-5 ">
                  {
                      listItems ?
                          listItems.map(item =>
                          <div className=" list-items" key={item.id}>
                              <img src={item.image} className="col-12 px-0" alt=""/>
                              <div className="info py-2 px-3">
                                  <h2>{item.name}</h2>
                                  <p className="mb-0"> {item.content}</p>
                                  <span className="d-flex flex-row-reverse align-items-center">
                                      {item.price}
                                        <span className="toman mr-2">تومان</span>
                                  </span>
                              </div>
                              <span id={item.id} className="delete-list-item row" onClick={deleteAlertHandler}>
                                  <img id={item.id}  src={Close} alt="" className="mr-4"/>
                                  <span id={item.id} >
                                  حذف
                                  </span>
                              </span>
                          </div>
                          )
                          :
                          <Loading/>
                  }
              </div>
              {
                  deleteAlert ?
                      <div className="col-lg-5 delete-alert p-2 text-center d-flex flex-row-reverse flex-wrap justify-content-between align-items-center">
                          <div className="col-2 py-4" style={{backgroundColor:"#fff2f2",borderRadius:"10px"}}>
                            <img className="col-12 " src={Warning} alt=""/>
                          </div>
                          <div className="col-7">
                              <h6 className="mt-3 text-right">آیا از حذف این محصول مطمئنید  ؟ </h6>
                              <p className="text-right">
                                  برای ادامه روند حذف کردن پارچه روی گزینه حذف کلیک کنید
                              </p>

                          </div>
                          <div className="col-3 ">
                              <button className="col-12 delete-btn" onClick={deleteHandler}> حذف  </button>
                              <button className="col-12 cancel-delete-btn" onClick={()=>dispatch(deleteAlertList(null))}> انصراف </button>
                          </div>
                      </div>
                      :
                      null
              }
          </div>
      </section>
    )

}

export default List