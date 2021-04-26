import {makeStyles} from "@material-ui/styles";
import {Button} from "@material-ui/core";
import classNames from "classnames";


const useStyles = makeStyles(theme => ({
    buttonText: props => {
        return {
            color: props.cool ? "black" : "white",
            [theme.breakpoints.up("sm")]: {
                color: "blue"
            },
        };
    },
    buttonBackground: {
        backgroundColor: "red"
    }
}));

export const MakeStyles = (props) => {
    const classes = useStyles(props);

    return (
        <div>
            <Button fullWidth className={classNames(classes.buttonText, classes.buttonBackground)}>The button</Button>
        </div>
    );
};