import {useDispatch} from "react-redux";
import {setSnackbar} from "./redux/ducks/snackbarReducer";
import {Button, Typography} from "@material-ui/core";

export const Marketer = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Typography>
                Marketer
            </Typography>
            <Button variant={"contained"} color={"primary"}
                    onClick={() => dispatch(setSnackbar(true, "error", "Marketer"))}
            >apply</Button>
        </>
    );
}