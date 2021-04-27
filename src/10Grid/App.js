import {Button, Grid, Paper} from "@material-ui/core";


export const App = () => {
    return (
        <Paper square variant={"elevation"} style={{backgroundColor: "grey"}}>
            <Grid container style={{justifyContent: "space-around", alignContent: "center", height: "100vh"}}>
                <Grid item>
                    <Button variant={"contained"}>Home</Button>
                </Grid>
                <Grid item>
                    <Button variant={"contained"}>Log in</Button>
                </Grid>
            </Grid>
        </Paper>
    );
};
