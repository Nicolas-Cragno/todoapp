import React, { Component } from "react";
import NewAction from "./components/new-actions";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NewAction />
      </React.Fragment>
    );
  }
}

export default App;
