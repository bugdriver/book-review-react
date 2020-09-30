import React from 'react';

const SearchBar = (props) => {
  return (
    <div className={props.className}>
      <input
        type="text"
        value={props.value}
        placeholder="Search Books.."
        onChange={(e) => props.onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
