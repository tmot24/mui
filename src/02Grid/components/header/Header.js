import {AppBar, Toolbar, Typography} from "@material-ui/core";
import AcUnitIcon from '@material-ui/icons/AcUnit';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1,
    }
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Typography className={classes.typographyStyles}>Яковлев Григорий</Typography>
                <AcUnitIcon/>
            </Toolbar>
        </AppBar>
    );
};