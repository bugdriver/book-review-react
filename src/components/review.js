import React, { useState, useContext } from 'react';
import DeleteReview from './deleteReview';
import requestAPI from '../api/requestAPI';
import EditReview from './editReview';
import edit_img from '../images/pencil.svg';
import UserContext from '../context/userContext';

const Review = (props) => {
  const { reviewid, username, reviewtext, reviewdate } = props;
  const [editMode, setEditMode] = useState(false);

  const [{ isLogin, user }] = useContext(UserContext);

  const deleteReview = () => {
    requestAPI.deleteReview(reviewid).then(() => {
      props.updateReview();
    });
  };

  const toggleReviewEditable = () => {
    setEditMode(!editMode);
  };

  const updateReview = (updatedReview) => {
    requestAPI.updateReview(reviewid, updatedReview).then(() => {
      props.updateReview();
      toggleReviewEditable();
    });
  };

  const reviewTextContainer = editMode ? (
    <EditReview
      reviewText={reviewtext}
      updateReview={updateReview}
      cancelEditMode={toggleReviewEditable}
    />
  ) : (
    <div className="review-text">{reviewtext}</div>
  );
  return (
    <div className="review-box">
      <div className="review-header">
        <b>
          <i>{username}</i>
        </b>
        {isLogin && user.login === username && (
          <div className="review-action-btn">
            <DeleteReview onClick={deleteReview} />
            <img
              className="review-edit-btn"
              onClick={toggleReviewEditable}
              src={edit_img}
              alt="Edit review"
            />
          </div>
        )}
      </div>
      {reviewTextContainer}
      <div className="review-time">
        <span>{new Date(reviewdate).toUTCString()}</span>
      </div>
    </div>
  );
};

export default Review;
