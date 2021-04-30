import {Breadcrumbs, Link, Typography} from "@material-ui/core";
import {useHistory, useLocation} from "react-router-dom";

export const BreadcrumbsContainer = () => {
    const history = useHistory();
    const location = useLocation();

    const arrPath = location.pathname.split("/").filter(x => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {arrPath.length > 0
                ? <Link onClick={() => history.push("/")} component={"button"}>Home</Link>
                : <Typography>Home</Typography>}
            {
                arrPath.map((name, index) => {
                        const isLast = index === arrPath.length - 1;
                        return isLast
                            ? <Typography key={index}>{name}</Typography>
                            : <Link key={index} onClick={() => history.push(`${arrPath}`)} component={"button"}>{name}</Link>;
                    }
                )
            }
        </Breadcrumbs>
    );
};