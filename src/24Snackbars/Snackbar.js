import Snackbar from '@material-ui/core/Snackbar';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {setSnackbar} from "./redux/ducks/snackbarReducer";
import {Alert} from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2)
        }
    }
}));

export const CustomizedSnackbars = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen);
    const snackbarType = useSelector(state => state.snackbar.snackbarType);
    const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setSnackbar(false, snackbarType, snackbarMessage));
    };

    return (
        <div className={classes.root}>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <Alert
                    elevation={6}
                    variant={"filled"}
                    onClose={handleClose}
                    color={snackbarType}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </div>
    );
};
