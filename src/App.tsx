import React from "react";

import Header from "./components/Header";
import { Input } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Input icon="search" placeholder="Search..." />
      </div>
    </div>
  );
}

export default App;
