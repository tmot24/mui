import {Hidden, withWidth, Typography} from "@material-ui/core";

const BreakpointUp = ({width}) => {

    return (
        <>
            <Typography variant={"h1"}>Current width: {width}</Typography>
            <Hidden xsUp>
                <Typography variant={"h2"}>hidden xsUp</Typography>
            </Hidden>
            <Hidden smUp>
                <Typography variant={"h2"}>hidden smUp</Typography>
            </Hidden>
            <Hidden mdUp>
                <Typography variant={"h2"}>hidden mdUp</Typography>
            </Hidden>
            <Hidden lgUp>
                <Typography variant={"h2"}>hidden lgUp</Typography>
            </Hidden>
            <Hidden xlUp>
                <Typography variant={"h2"}>hidden xlUp</Typography>
            </Hidden>
            <Hidden lgDown>
                <Typography variant={"h2"}>hidden xlDown</Typography>
            </Hidden>
        </>
    );
};

export const App = withWidth()(BreakpointUp);
