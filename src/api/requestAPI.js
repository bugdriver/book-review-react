const postReq = (url, data) => {
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

const getUser = () => {
  return new Promise((resolve, reject) => {
    fetch('/api/getUser')
      .then((res) => {
        const jsonResponse = res.json();
        if (res.status === 403) {
          reject(jsonResponse);
          return;
        }
        resolve(jsonResponse);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getBooks = () => {
  return new Promise((resolve, reject) => {
    fetch('/api/getBooks').then((res) => {
      resolve(res.json());
    });
  });
};

const getBook = (bookId) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/getBook?bookId=${bookId}`)
      .then((res) => {
        resolve(res.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getReviewOfBook = (bookId) => {
  return new Promise((resolve, reject) => {
    fetch(`/api/getReviewOfBook?bookId=${bookId}`).then((res) => {
      resolve(res.json());
    });
  });
};

const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });
};

const fetchImage = (imageUrl) => {
  return fetch(imageUrl)
    .then((res) => res.blob())
    .then((blob) => convertBlobToBase64(blob));
};

const addReview = (bookId, reviewText) =>
  postReq('/api/addReview', { bookId, reviewText });

const deleteReview = (reviewId) => postReq('/api/deleteReview', { reviewId });
const updateReview = (reviewId, reviewText) =>
  postReq('/api/updateReview', { reviewId, reviewText });

const logout = () => postReq('/api/logout');

export default {
  getUser,
  getBooks,
  getBook,
  logout,
  getReviewOfBook,
  fetchImage,
  deleteReview,
  addReview,
  updateReview
};
