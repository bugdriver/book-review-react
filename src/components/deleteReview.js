import React, { useState } from 'react';
import delete_img from '../images/delete.svg';
import ComfirmationPopup from './confirmationPopup';

const DeleteReview = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {isVisible && (
        <ComfirmationPopup onDelete={props.onClick} onCancel={handleClick} />
      )}
      <img
        className="review-delete-btn"
        onClick={handleClick}
        src={delete_img}
        alt="Delete review"
      />
    </div>
  );
};

export default DeleteReview;
