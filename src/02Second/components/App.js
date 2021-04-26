import {Grid} from "@material-ui/core";
import {MakeStyles} from "../../03Third/component/makeStyles";

export const App = () => {

    return (
        <Grid container direction={"column"}>
            <Grid item container xs={12}>
                {/*<Header/>*/}
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <MakeStyles cool={true}/>
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>
        </Grid>
    );
};
