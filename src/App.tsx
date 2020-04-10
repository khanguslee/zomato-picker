import React from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
}

export default App;
