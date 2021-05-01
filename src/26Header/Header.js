import React, {useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {useHistory} from "react-router-dom";
import {Button, useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        [theme.breakpoints.down("xs")]: {
            flexGrow: 1,
        },
    },
    headerOption: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly"
    },
}));

const menuItems = [
    {
        menuTitle: "Home",
        pageUrl: "/",
    },
    {
        menuTitle: "About",
        pageUrl: "/about",
    },
    {
        menuTitle: "Contacts",
        pageUrl: "/contacts",
    },
];

export const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const history = useHistory();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClick = (pageUrl) => {
        history.push(pageUrl);
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Photos
                    </Typography>
                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItem onClick={() => handleMenuClick("/")}>Home</MenuItem>
                                <MenuItem onClick={() => handleMenuClick("/about")}>About</MenuItem>
                                <MenuItem onClick={() => handleMenuClick("/contacts")}>Contacts</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <div className={classes.headerOption}>
                            {
                                menuItems.map(item => (
                                    <Button onClick={() => handleMenuClick(item.pageUrl)}
                                            variant={"contained"}>{item.menuTitle}</Button>
                                ))
                            }
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};
