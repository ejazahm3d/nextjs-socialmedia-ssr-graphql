import React from "react";
import Search from "antd/lib/input/Search";

const SearchBar = () => {
  return (
    <>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        size="large"
      />
    </>
  );
};

export default SearchBar;
