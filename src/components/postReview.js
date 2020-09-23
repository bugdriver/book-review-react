import React, { useState } from 'react';
import requestAPI from '../api/requestAPI';

const PostReview = (props) => {
  const { bookId } = props;

  const [reviewText, setReviewText] = useState('');

  const postReview = () => {
    requestAPI.addReview(bookId, reviewText).then(() => {
      props.updateReview();
      setReviewText('');
    });
  };
  
  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  return (
    <div className="post-review-container">
      <textarea
        value={reviewText}
        className="post-review-textArea"
        onChange={handleChange}
      />
      <div>
        <button className="post-review-btn" onClick={postReview}>
          Post Review
        </button>
      </div>
    </div>
  );
};

export default PostReview;
