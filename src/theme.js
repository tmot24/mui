import { createMuiTheme } from '@material-ui/core/styles';
import {green, yellow} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: yellow[500],
        },
    },
});