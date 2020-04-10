import React, { FunctionComponent, useState } from "react";

import { Input } from "semantic-ui-react";

import "./SearchBar.css";

const SearchBar: FunctionComponent = () => {
  const [search, setSearch] = useState("");

  const handleInput = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <div className="SearchBarContainer">
      <Input
        icon="search"
        placeholder="Search..."
        fluid
        value={search}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
};

export default SearchBar;
