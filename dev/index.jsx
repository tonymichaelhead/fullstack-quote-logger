import React from "react";
import ReactDOM from "react-dom";
import Form from "./form.jsx";
import List from "./list.jsx";
import App from "./app.jsx";




ReactDOM.render(
    <div>
        <App greetTarget="Tony"/>
    </div>,
    document.querySelector("#container")
);