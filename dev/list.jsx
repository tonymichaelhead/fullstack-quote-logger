import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";


class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //quotes: this.props.quotes
            quotes: [{name: 'tony', quote: 'hey!!'}, {name: 'Doyle', quote: 'sup g'}]
        }
        // this.getQuotes = this.getQuotes.bind(this);
    }

    //create function to get messages when list is rendered
    // getQuotes() {
    //     axios.get('/quotes')
    //         .then(response => {
    //             console.log('Successfully fetched!!', response);
    //             this.setState({ quotes: response.data });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    // //onComponentDidMount( send get request and render data to list)
    // componentDidMount() {
    //     this.getQuotes();
    // }

    render(){
        return (
            <div>
                <ul>{this.props.quotes.map((quote, index) => <li key={index}>{quote.name} : {quote.quote}</li>)}</ul>
            </div>
        )
    }
 }

 export default List;