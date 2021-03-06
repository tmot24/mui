import {Button} from "@material-ui/core";
import {useHistory} from "react-router-dom";


export const Jobs = () => {
    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push("/jobs/engineer")}>engineer</Button>
            <Button onClick={() => history.push("/jobs/marketer")}>marketer</Button>
            <Button onClick={() => history.push("/jobs/designer")}>designer</Button>
        </div>
    )
}