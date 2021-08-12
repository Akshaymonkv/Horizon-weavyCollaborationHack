import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// import * as serviceWorker from "./serviceWorker";
// import registerServiceWorker from 'react-service-worker';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

// serviceWorker.unregister();