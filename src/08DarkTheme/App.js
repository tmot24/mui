import {Button, Grid, Paper, Switch, Typography} from "@material-ui/core";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core";
import {useState} from "react";



export const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const darkTheme = createMuiTheme({
        palette: {
            type: "dark",
        }
    })

    const lightTheme = createMuiTheme({})

    return (
        <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper style={{height: "100vh"}} square>
                <Grid container direction={"column"}>
                    <Typography variant={"h1"} align={"center"}>
                        This is my app
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                    />
                    <Button variant={"contained"} color={"primary"}>
                        Primary
                    </Button>
                    <Button variant={"contained"} color={"secondary"}>
                        Secondary
                    </Button>
                </Grid>
            </Paper>
        </MuiThemeProvider>

    );
};


