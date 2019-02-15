import React, { Component } from 'react';
import List from './components/List';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      nextURL: '',
      prevURL: '',
      prev: false,
      next: true,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = (URL, cb= ()=>{console.log('no callback')}) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results, nextURL: data.next },cb);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  changePage = direction => {
    if(direction==="next"){
      this.setState( currentState => {
        return {prevURL: currentState.nextURL}
      }, () => {
        this.getCharacters(this.state.nextURL, )
      })
    }
  }

  setPrevNext = () => {

  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <List list={this.state.starwarsChars} changePage={this.changePage} />
      </div>
    );
  }
}

export default App;
