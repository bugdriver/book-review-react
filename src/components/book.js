import React from 'react';

const Book = (props) => {
  const { frontimage, title } = props;
  const serverHost = process.env.REACT_APP_SERVER_HOST || '';
  return (
    <div className="book-card">
      <img
        src={`${serverHost}${frontimage}`}
        alt="Avatar"
        className="book-card-img"
      />
      <div className="book-detail">
        <h4>
          <b>{title}</b>
        </h4>
      </div>
    </div>
  );
};

export default Book;
