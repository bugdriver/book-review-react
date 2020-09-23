import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import requestAPI from '../api/requestAPI';
import Review from './review';
import PostReview from './postReview';

const BookDetail = (props) => {
  const { bookId } = useParams();
  const [bookDetail, setBookDetail] = useState({});
  const [reviews, setReviews] = useState([]);
  const [image, setImage] = useState('');

  const updateReview = () => {
    requestAPI.getReviewOfBook(bookId).then(setReviews);
  };

  useEffect(() => {
    requestAPI.getBook(bookId).then(setBookDetail);
    requestAPI.getReviewOfBook(bookId).then(setReviews);
  }, [bookId]);

  useEffect(() => {
    bookDetail.frontimage &&
      requestAPI.fetchImage(bookDetail.frontimage).then(setImage);
  }, [bookDetail.frontimage]);

  return (
    <div>
      <div className="book-container">
        <img src={image} alt={bookDetail.title}></img>
        <div className="detail">
          <h2>{bookDetail.title}</h2>
          <p>by {bookDetail.writer}</p>
          <p>
            {reviews.length} review{reviews.length > 1 ? 's' : ''}
          </p>
        </div>
      </div>
      <div className="review-container">
        {reviews.map((review) => {
          return (
            <Review
              key={review.reviewid}
              {...review}
              updateReview={updateReview}
            />
          );
        })}
      </div>
      <div>
        <PostReview bookId={bookId} updateReview={updateReview} />
      </div>
    </div>
  );
};

export default BookDetail;
