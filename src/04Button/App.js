import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        color: "red",
        border: "none",
    }
}));

export const App = () => {
    const classes = useStyles();

    return (
        <Button
            className={classes.root}
            variant={"outlined"}
            color={"primary"}
            size={"small"}
        >
            Primary</Button>
    );
};