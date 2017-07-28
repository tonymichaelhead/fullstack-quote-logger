import React from "react";
import ReactDOM from "react-dom";
import Form from "./form.jsx";
import List from "./list.jsx";

var App = React.createClass({
    render: function() {
        return (
            <div>
                <p>Hello, {this.props.greetTarget}!</p>
                <Form />
                <List />
            </div>
        );
    }
});

export default App;