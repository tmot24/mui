import {Button, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    helloThereStyle: {
        fontStyle: "oblique",
        color: "red",
        fontSize: "120px",
    },
    buttonStyles: {
        color: "gold",
    }
});

export const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.helloThereStyle} variant={"h1"} color={"primary"}>Hello</Typography>
            <Button className={classes.buttonStyles} variant={"contained"} color={"secondary"}>Default</Button>
        </div>
    );
};
