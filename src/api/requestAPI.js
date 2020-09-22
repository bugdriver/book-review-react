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
        if (res.status === 401) {
          reject(res.json());
          return;
        }
        resolve(res.json());
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const getBooks = () => {
  return new Promise((resolve, reject) => {
    fetch('/api/getBooks').then((res) => {
      if (res.status === 401) {
        reject(res.json());
        return;
      }
      resolve(res.json());
    });
  });
};

const logout = () => postReq('/api/logout');

export default { getUser, getBooks, logout };
