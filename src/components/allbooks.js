import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <ul className="books">
        {books.map((book) => (
          <li key={book.item_id}>
            <h3>{book.title}</h3>
            <p>
              Author:
              {' '}
              {book.author}
            </p>
            <button type="button" onClick={() => handleRemove(book.item_id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
