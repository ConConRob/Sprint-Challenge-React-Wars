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
      next: false,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = (URL, cb= ()=>{}) => {// default cb is no callback
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results  },this.setPrevNext);
        if(data.next){
          this.setState({nextURL: data.next},this.setPrevNext);
        }else{
          this.setState({nextURL: ''}, this.setPrevNext);
        }
        if(data.previous){
          this.setState({prevURL: data.previous},this.setPrevNext);
        }else{
          this.setState({prevURL: ''}, this.setPrevNext);
        }
      })
      .catch(err => {
        throw new Error(err);
      });
      cb();
  };

  changePage = direction => {
    if(direction==="next"){
        this.getCharacters(this.state.nextURL)
    }
    if(direction==="prev"){
        this.getCharacters(this.state.prevURL)
    }
  }

  setPrevNext = () => {
    if(this.state.nextURL !== ''){
      this.setState({next: true})
    }else {
      this.setState({next: false})
    }
    if(this.state.prevURL !== ''){
      this.setState({prev: true})
    }else {
      this.setState({prev: false})
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <List list={this.state.starwarsChars} changePage={this.changePage} prevNext={{prev:this.state.prev, next:this.state.next}} />
      </div>
    );
  }
}

export default App;
