import {MuiThemeProvider, Paper, Typography} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        // type: "dark",
    }
})

export const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Paper elevation={0} square>
                <Typography>Typography</Typography>
            </Paper>
        </MuiThemeProvider>
    )
}