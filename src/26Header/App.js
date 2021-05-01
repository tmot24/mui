import {Switch, Route} from "react-router-dom";
import {Home} from "./Home";
import {About} from "./About";
import {Contacts} from "./Contacts";
import {makeStyles} from "@material-ui/core/styles";
import {Header} from "./Header";

const useStyle = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
    }
});

export const App = () => {
    const classes = useStyle();

    return (
        <div className={classes.container}>
            <Header/>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/about"} component={About}/>
                <Route exact path={"/contacts"} component={Contacts}/>
            </Switch>
        </div>
    );
};