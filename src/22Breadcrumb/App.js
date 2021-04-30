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
                <Route exact from={"/"} component={Home}/>
                <Route exact from={"/about"} component={About}/>
                <Route exact from={"/jobs"} component={Jobs}/>
                <Route exact from={"/jobs/engineer"} component={Engineer}/>
                <Route exact from={"/jobs/marketer"} component={Marketer}/>
                <Route exact from={"/jobs/designer"} component={Designer}/>
            </Switch>
        </>
    )
}
