import React, { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail.js";
import EmailList from "./EmailList";
import SendEmail from "./SendEmail";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpened } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase.js";
import { login, logout } from "./features/userSlice.js";

function App() {
    const sendMessageIsOpened = useSelector(selectSendMessageIsOpened);
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(
                    login({
                        displayName: user.displayName,
                        photo: user.photoURL,
                        email: user.email,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, []);
    return (
        <Router>
            {!user ? (
                <Login />
            ) : (
                <div className="app">
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Routes>
                            <Route path="/mail" element={<Mail />} />
                            <Route path="/" element={<EmailList />} />
                        </Routes>
                    </div>
                    {sendMessageIsOpened && <SendEmail />}
                </div>
            )}
        </Router>
    );
}

export default App;
