import React, {Component} from 'react';
import '../App.css';
import axios from 'axios';
import App from '../App';

class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                console.log(res.data);
                this.setState({person: this.props.people})
            })
            .catch(error => console.log('error: ', error))
    }

    render() {
        return(
            <div>
                <p>Name: {this.state.person.name}</p>
                <p>Country: {this.state.person.country}</p>
                <p>Searches: {this.state.person.searches}</p>
            </div>
        )
    }
}

export default Cards;