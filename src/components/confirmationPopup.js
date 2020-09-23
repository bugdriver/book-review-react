import React from 'react';

const ComfirmationPopup = (props) => {
  const { onDelete, onCancel } = props;
  return (
    <div className="modal">
      <div className="popup-box">
        <div className="popup-heading">Do you want to delete review ?</div>
        <div className="popup-btn">
          <button className="danger-btn" onClick={onDelete}>
            Delete
          </button>
          <button className="cancel-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComfirmationPopup;
