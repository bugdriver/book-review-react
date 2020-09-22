import React, { useEffect, useState } from 'react';
import requestAPI from '../api/requestAPI';
import Book from './book';

const Books = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    requestAPI.getBooks().then(setBooks);
  }, []);

  const bookList = books.map((bookDetails) => {
    return <Book {...bookDetails} key={bookDetails.id} />;
  });
  return <div className="book-list-container">{bookList}</div>;
};

export default Books;
