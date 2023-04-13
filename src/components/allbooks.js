import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAsync, removeBookAsync } from '../redux/books/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const { books, status, error } = useSelector((state) => state.books);

  const handleRemove = async (bookId) => {
    await dispatch(removeBookAsync(bookId));
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooksAsync());
    }
  }, [status, dispatch]);

  let content;

  if (status === 'loading') {
    content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
    content = (
      <div>
        {books.map((book) => (
          <div key={book.id}>
            <p>
              <strong>Title: </strong>
              {book.title}
            </p>
            <p>
              <strong>Author: </strong>
              {book.author}
            </p>
            <button type="button" onClick={() => handleRemove(book.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    );
  } else if (status === 'failed') {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};
export default BooksList;
