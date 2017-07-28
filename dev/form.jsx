import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import List from "./list.jsx"

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            quote: ''
        } 
        this.changeHandlerName = this.changeHandlerName.bind(this);
        this.changeHandlerQuote = this.changeHandlerQuote.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeHandlerName(event) {
        event.preventDefault();
        this.setState( { name: event.target.value }, () => {
            console.log('this is name state', this.state.name)
        } )
    }

    changeHandlerQuote(event) {
        event.preventDefault();
        this.setState( {quote: event.target.value }, () => {
            console.log('this is quote state', this.state.quote)
            //after setting state, trigger get reqest from list component
            //list component will fetch messages and render them 
            //list component should also fetch messages upon initialization
            //axios.get('/', {})
            
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        axios.post('/quotes', {
            name: this.state.name,
            quote: this.state.quote
        })
        .then(response => {
            console.log('the axios post response is ', response)
            this.props.getQuotes();
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.changeHandlerName} type="text" placeholder="name" name="name"></input>
                    <input onChange={this.changeHandlerQuote} type="text" placeholder="quote" name="quote"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;