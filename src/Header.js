import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { IconButton, Avatar } from "@material-ui/core";
import gmail_logo from "./images/gmail_logo.png";
import { selectUser } from "./features/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "./features/userSlice.js";
import { auth } from "./firebase.js";

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    console.log(user.photo);
    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout());
        });
    };
    return (
        <header className="header">
            <div className="header__left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img src={gmail_logo} alt="gmail logo" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDownIcon />
            </div>
            <div className="header__right">
                <AppsIcon />
                <NotificationsIcon />
                <Avatar src={user?.photo} />
                {user && (
                    <IconButton className="header__logout" onClick={signOut}>
                        <LogoutIcon />
                        <small className="header__logoutText">Logout</small>
                    </IconButton>
                )}
            </div>
        </header>
    );
}

export default Header;
