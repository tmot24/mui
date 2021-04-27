import {Grid, Paper, Typography} from "@material-ui/core";


export const App = () => {
    return (
        <div>
            <Paper style={{backgroundColor: "green"}}>
                <Grid container spacing={2} style={{justifyContent: "space-between"}}>
                    <Grid item>
                        <Paper>
                            <Typography style={{backgroundColor: "red"}} >Home</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper style={{backgroundColor: "blue"}}>
                            <Typography>Log in</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};
