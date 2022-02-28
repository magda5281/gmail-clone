import React from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail.js";
import EmailList from "./EmailList";
import SendEmail from "./SendEmail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpened } from "./features/mailSlice";

function App() {
    const sendMessageIsOpened = useSelector(selectSendMessageIsOpened);

    return (
        <Router>
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
        </Router>
    );
}

export default App;
