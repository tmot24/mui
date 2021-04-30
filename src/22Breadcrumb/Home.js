import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";


export const Home = () => {
    const history = useHistory();

    return (
        <div>
            <Button onClick={() => history.push("/about")}>about</Button>
            <Button onClick={() => history.push("/jobs")}>jobs</Button>
        </div>
    )
}