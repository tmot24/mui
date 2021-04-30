import {Route, Switch} from "react-router-dom";
import {Designer} from "./Designer";
import {Marketer} from "./Marketer";
import {Engineer} from "./Engineer";
import {Jobs} from "./Jobs";
import {About} from "./About";
import {Home} from "./Home";
import {BreadcrumbsContainer} from "./BreadcrumbsContainer";


export const App = () => {
    return (
        <>
            <BreadcrumbsContainer/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/jobs"} component={Jobs}/>
                <Route exact path={"/jobs/engineer"} component={Engineer}/>
                <Route exact path={"/jobs/marketer"} component={Marketer}/>
                <Route exact path={"/jobs/designer"} component={Designer}/>
            </Switch>
        </>
    );
};
