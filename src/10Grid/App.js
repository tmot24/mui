import {Grid, Paper} from "@material-ui/core";
import {CardComponent} from "./Card";


export const App = () => {
    return (
        <Paper square variant={"elevation"} style={{backgroundColor: "grey"}}>
            <Grid container
                  style={{justifyContent: "center", alignContent: "center", height: "100vh"}}>
                <Grid item style={{margin: "16px"}}>
                    <CardComponent/>
                </Grid>
                <Grid item style={{margin: "16px"}}>
                    <CardComponent/>
                </Grid>
                <Grid item style={{margin: "16px"}}>
                    <CardComponent/>
                </Grid>
                <Grid item style={{margin: "16px"}}>
                    <CardComponent/>
                </Grid>

            </Grid>
        </Paper>
    );
};
