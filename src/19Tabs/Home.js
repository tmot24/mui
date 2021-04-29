import {useState} from "react";
import {AppBar, Tab, Tabs} from "@material-ui/core";
import {About} from "./About";
import {Contact} from "./Contact";
import {useParams, useHistory} from "react-router-dom";

const indexToTabName = {
    0: "about",
    1: "contact",
};
const tabNameToIndex = {
    "about": 0,
    "contact": 1,
};

export const Home = () => {
    const pageName = useParams().page;
    const history = useHistory();
    const [selectedTab, setSelectedTab] = useState(tabNameToIndex[pageName]);

    const handleChange = (event, newValue) => {
        history.push(`/home/${indexToTabName[newValue]}`)
        setSelectedTab(newValue);
    };

    return (
        <div>
            <AppBar position={"static"}>
                <Tabs value={selectedTab} onChange={handleChange}>
                    <Tab label="About"/>
                    <Tab label="Contact"/>
                </Tabs>
            </AppBar>
            {selectedTab === 0 && <About/>}
            {selectedTab === 1 && <Contact/>}
        </div>
    );
};