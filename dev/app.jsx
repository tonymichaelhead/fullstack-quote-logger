import React from "react";
import ReactDOM from "react-dom";
import Form from "./form.jsx";
import List from "./list.jsx";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quotes: [{name: 'Tonz', quote: 'First message ay'}]
        }

        this.getQuotes = this.getQuotes.bind(this);
    }

    getQuotes() {
        console.log('getQuotes is firing')
        axios.get('/quotes')
            .then(response => {
                console.log('Successfully fetched!!', response);
                this.setState({ quotes: response.data });
            })
            .catch(error => {
                console.log(error);
            })
    }

    //onComponentDidMount( send get request and render data to list)
    componentDidMount() {
        this.getQuotes();
    }

    render() {
        return (
            <div>
                <p>Hello, {this.props.greetTarget}!</p>
                <Form getQuotes={this.getQuotes}/>
                <List quotes={this.state.quotes}/>
            </div>
        );
    }
};

export default App;