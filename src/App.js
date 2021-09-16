import React, {Suspense, lazy} from "react"
import {BrowserRouter as Router} from "react-router-dom";
import {Switch, Route} from "react-router"
import logo from './logo.svg';


import Loading from "./Components/Loading/Loading";
import Insert from "./Components/Admin/Insert/Insert";
import Login from "./Login/Login";

const Home = lazy(() => {
    return Promise.all([
        import("./Home/Home"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})

const Admin = lazy(() => {
    return Promise.all([
        import("./Admin/admin"),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
        .then(([moduleExports]) => moduleExports);
})

function App() {
  return (
      <Suspense fallback={<Loading/>}>
        <div className="container-fluid px-0">
          <Router basename="/">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin/login" component={Login} />
                <Route  path="/admin" component={Admin} />
              </Switch>
          </Router>
        </div>
      </Suspense>
  );
}

export default App;
