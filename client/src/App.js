import React from 'react';
import Cards from './components/ComponentDidMount';
import axios from 'axios';
import DarkMode from './components/DarkMode';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then( res => {
        console.log('Response: ', res.data);
        this.setState({people: res.data})
      })
      .catch(err => console.log('error: ', err))
  }

  handleChanges = e => {
    this.setState({
      person: e.target.value
    })
    console.log('state: ', e.target.value)
  }

  render() {
    return(
      <div>
        <DarkMode />
        { this.state.people.map( data => (
          <Cards people={data} />
        )) }
      </div>
    )
  }
}

export default App;
