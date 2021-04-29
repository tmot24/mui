import {Switch, Route, Redirect} from "react-router-dom";
import {Home} from "./Home";

export const App = () => {
    return (
        <Switch>
            <Redirect exact from={"/home"} to={"/home/about"}/>
            <Route exact path={"/home/:page?"} component={Home}/>
        </Switch>
    );
}