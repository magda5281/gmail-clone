import React from "react";
import Gmail_icon from "./images/Gmail-Emblem.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase.js";
import { login } from "./features/userSlice.js";
import { useDispatch } from "react-redux";

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((user) => {
                dispatch(
                    login({
                        displayName: user.displayName,
                        photo: user.photoURL,
                        email: user.email,
                    })
                );
            })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__container">
                <img src={Gmail_icon} alt="gmail icon" />
                <Button variant="contained" color="primary" onClick={signIn}>
                    {" "}
                    Login
                </Button>
            </div>
        </div>
    );
}

export default Login;
