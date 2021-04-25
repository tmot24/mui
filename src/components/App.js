import {Grid} from "@material-ui/core";
import {Header} from "./header/Header";
import {Content} from "./content/Content";

export const App = () => {

    return (
        <Grid container direction={"column"}>
            <Grid item container xs={12}>
                <Header/>
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <Content/>
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>
        </Grid>
    );
};
