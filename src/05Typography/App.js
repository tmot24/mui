import {ThemeProvider, Typography} from "@material-ui/core";
import {createMuiTheme} from "@material-ui/core/styles";
import {green, purple} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
    typography: {
        fontFamily: "Roboto",
        h1: {
            fontSize: "10em",
        }
    }
});

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Typography color={"secondary"} variant={"h1"}>
                Hello world!
            </Typography>
        </ThemeProvider>
    );
};