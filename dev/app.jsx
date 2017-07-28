import React from "react";
import ReactDOM from "react-dom";
import Form from "./form.jsx";
import List from "./list.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: [{name: 'Tonz', quote: 'First message ay'}]
        }

        this.setItems = this.setItems.bind(this);
    }
    
    setItems(item) {
       this.state.quotes.push(item);
       this.setState({ quotes: this.state.quotes }) 
    }

    render() {
        return (
            <div>
                <p>Hello, {this.props.greetTarget}!</p>
                <Form />
                <List quotes={this.state.quotes}/>
            </div>
        );
    }
};

export default App;