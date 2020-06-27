import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const MARRIAGE_TIP_API = '<api endpoint here>';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      result: null
    };

    this.setMarriageTip = this.setMarriageTip.bind(this);
  }

  setMarriageTip(result) {
    this.setState({ result });
  }

  componentDidMount() {
    fetch(MARRIAGE_TIP_API)
      .then(response => response.json())
      .then(result => this.setMarriageTip(result))
      .catch(error => error);
    //this.setMarriageTip({tip:'Christ died for us. Spouses give their lives daily for each other, and parents for their children. Your sacrifices are worthwhile!'});
  }

  render() {
    const { result } = this.state;

    if (!result) { return null; }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Marriage Tip of the Day</h1>
        </header>
        <p className="App-intro">
          {result.tip}
        </p>
      </div>
    );
  }
}

export default App;
