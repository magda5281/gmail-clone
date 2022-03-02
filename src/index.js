import React from "react";
import ReactDOM from "react-dom";
import "./scss/index.scss";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import env from "react-dotenv";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);


serviceWorker.unregister();
