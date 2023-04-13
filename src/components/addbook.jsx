import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookAsync } from '../redux/books/booksSlice';
import BooksList from './allbooks';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = uuidv4();
    if (title && author && id) {
      await dispatch(addBookAsync({ id, title, author }));
      setTitle('');
      setAuthor('');
    }
    e.target.reset();
    window.location.reload();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
      <BooksList />
    </>
  );
};

export default AddBookForm;
