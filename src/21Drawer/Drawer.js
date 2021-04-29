import {Drawer, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox"
import MailIcon from "@material-ui/icons/Mail"
import {useHistory} from "react-router-dom";

const useStyle = makeStyles({
    drawer: {
        width: "200px",
    }
});

export const DrawerComponent = () => {
    const classes = useStyle();
    const history = useHistory();
    const itemsList = [
        {
            text: "Home",
            icon: <InboxIcon/>,
            onClick: () => history.push("/"),
        },
        {
            text: "About",
            icon: <MailIcon/>,
            onClick: () => history.push("/about"),
        },
        {
            text: "Contacts",
            icon: <InboxIcon/>,
            onClick: () => history.push("/contacts"),
        }];

    return (
        <Drawer className={classes.drawer} variant={"permanent"}>
            <List>
                {itemsList.map((itemsList, index) => (
                    <ListItem button key={index} onClick={itemsList.onClick}>
                        {itemsList.icon && <ListItemIcon>{itemsList.icon}</ListItemIcon>}
                        <ListItemText primary={itemsList.text}/>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};