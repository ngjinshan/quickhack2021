import Home from "./components/home";
import { Redirect, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navigation from './Components/TempNavigation/index'

function Routes() {
  return (
    <div>
       <Switch>
           <Route path="/" exact component={Home}></Route>
           <Redirect to="/404"></Redirect>
       </Switch>
    </div>
  );
}

export default Routes;
