import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    // do something interesting here
    console.log("handleClick");
  }

  render() {
    return (
      <button className={styles.myButton} onClick={this.handleClick}>Click Me</button>
    );
  }
}

export default App;

const wrapper = document.getElementById('root');
wrapper ? ReactDOM.render(<App />, wrapper) : false;