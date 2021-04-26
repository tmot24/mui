import {Button, Paper, ThemeProvider, Typography} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        type: "dark",
    }
});

/*const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
    },
}));*/

export const App = () => {
    // const classes = useStyles(theme);

    return (
        <ThemeProvider theme={theme}>
            <Paper>
                <Button color={"primary"} variant={"contained"}>
                    This is a button
                </Button>
                <Typography variant={"h1"}>
                    This is my typography
                </Typography>
            </Paper>
        </ThemeProvider>
    );
};