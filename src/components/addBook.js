import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddBook = (props) => {
  const [title, setTitle] = useState('');
  const [writer, setWriter] = useState('');
  const [description, setDescription] = useState('');
  const [bookImage, setBookImage] = useState(null);
  const history = useHistory();

  const handleChange = (value, setValue) => {
    setValue(value);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('writer', writer);
    formData.append('description', description);
    formData.append('bookimage', bookImage);
    fetch('/api/addBook', { method: 'post', body: formData }).then((res) => {
      console.log('added');
      history.push('/');
    });
  };

  return (
    <div class="add-book-container">
      <form id="contact" action="" method="post">
        <h3>Add Book</h3>
        <fieldset>
          <input
            placeholder="Book Title"
            type="text"
            value={title}
            onChange={(e) => handleChange(e.target.value, setTitle)}
          />
        </fieldset>
        <fieldset>
          <input
            placeholder="Book Writer"
            type="text"
            value={writer}
            onChange={(e) => handleChange(e.target.value, setWriter)}
            tabindex="2"
            required
          />
        </fieldset>

        <fieldset>
          <textarea
            placeholder="Book Description"
            value={description}
            onChange={(e) => handleChange(e.target.value, setDescription)}
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <label>Book Cover : </label>
          <input
            placeholder="Book cover"
            type="file"
            onChange={(e) => handleChange(e.target.files[0], setBookImage)}
            tabindex="4"
            required
          />
        </fieldset>
        <fieldset>
          <button name="button" onClick={handleSubmit} type="button">
            Add Book
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddBook;
