import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import requestAPI from '../api/requestAPI';

const Book = (props) => {
  const { id, frontimage, title } = props;
  const [image, setImage] = useState('');

  useEffect(() => {
    requestAPI.fetchImage(frontimage).then(setImage);
  }, [frontimage]);

  return (
    <div className="book-card">
      <Link to={`/book/${id}`}>
        <img src={image} alt="Avatar" className="book-card-img" />
      </Link>
      <div className="book-detail">
        <h4>
          <b>{title}</b>
        </h4>
      </div>
    </div>
  );
};

export default Book;
