import React from "react";
import ReactDOM from "react-dom";
import Form from "./form.jsx";
import List from "./list.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <p>Hello, {this.props.greetTarget}!</p>
                <Form />
                <List />
            </div>
        );
    }
};

export default App;