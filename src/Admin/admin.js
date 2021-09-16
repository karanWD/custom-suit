import React from "react";
import Aside from "../Components/Admin/Aside/Aside";
import Main from "../Components/Admin/Main/Main";
import "./admin.css"
import Nav from "../Components/Admin/Nav/Nav";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Insert from "../Components/Admin/Insert/Insert";
import List from "../Components/Admin/List/List";

const Admin = () => {
    return (
        <>
            <Nav/>
            <section className="d-flex flex-row-reverse flex-wrap">
                <Aside/>
                <Switch>
                    <Route exact path="/admin/list" component={List} />
                    <Route exact path="/admin/insert/" component={Insert} />
                    <Route  path="" component={Insert} />
                </Switch>
            </section>
        </>
    )
}

export default Admin