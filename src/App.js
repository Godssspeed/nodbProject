import React, { Component } from "react";
// import axios from "axios";
import Main from "./Components/Main";
// import logo from "./logo.svg";
import "./reset.css";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
