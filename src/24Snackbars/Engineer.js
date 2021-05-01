import {useDispatch} from "react-redux";
import {setSnackbar} from "./redux/ducks/snackbarReducer";
import {Button, Typography} from "@material-ui/core";


export const Engineer = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Typography>
                    Engineer
            </Typography>
            <Button variant={"contained"} color={"primary"}
                    onClick={() => dispatch(setSnackbar(true, "success", "Engineer"))}
            >apply</Button>
        </>
    );
};