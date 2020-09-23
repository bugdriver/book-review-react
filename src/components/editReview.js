import React, { useState } from 'react';

const EditReview = (props) => {
  const [reviewText, setReviewText] = useState(props.reviewText);

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  return (
    <div className="update-review-container">
      <textarea
        value={reviewText}
        className="post-review-textArea"
        onChange={handleChange}
      />
      <div>
        <button
          className="update-review-btn"
          onClick={() => props.updateReview(reviewText)}
        >
          Update Review
        </button>
        <button className="cancel-review-btn" onClick={props.cancelEditMode}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditReview;
