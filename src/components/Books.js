import React from 'react';
import Book from './book';

const Books = (props) => {
  const { bookList } = props;
  if (bookList.length === 0) {
    return (
      <div className="book-list-container">
        <h3>Book not found.</h3>
      </div>
    );
  }
  const books = bookList.map((bookDetails) => {
    return <Book {...bookDetails} key={bookDetails.id} />;
  });
  return <div className="book-list-container">{books}</div>;
};

export default Books;
