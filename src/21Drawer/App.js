import {Switch, Route} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";
import {Contacts} from "./Contacts";
import {DrawerComponent} from "./Drawer";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
    container: {
        display: "flex",
    }
});

export const App = () => {
    const classes = useStyle();

    return (
        <div className={classes.container}>
            <DrawerComponent/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/contacts"} component={Contacts}/>
            </Switch>
        </div>
    );
};