import { createMuiTheme } from '@material-ui/core/styles';
import {blue, red} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: red[500],
        },
    },
});