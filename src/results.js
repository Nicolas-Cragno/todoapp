import React, { Component } from "react";
import SearchResults from "./Component/search-results.js";
import SearchBar from "./Component/search-bar.js";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class Results extends Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
        <SearchResults />
      </React.Fragment>
    );
  }
}

export default Results;
