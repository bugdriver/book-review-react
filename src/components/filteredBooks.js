import React, { useState, useEffect } from 'react';
import requestAPI from '../api/requestAPI';
import SearchBar from './searchBar';
import Books from './books';

const FilteredBooks = (props) => {
  const [bookList, setBookList] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    requestAPI.getBooks().then(setBookList);
  }, []);

  const handleSearchTextChange = (value) => {
    setSearchText(value);
  };

  const filterBooks = (title) => {
    return bookList.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  };

  return (
    <div>
      <SearchBar
        onChange={handleSearchTextChange}
        className="book-search-bar"
      />
      <Books bookList={filterBooks(searchText)} />
    </div>
  );
};

export default FilteredBooks;
