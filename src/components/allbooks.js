import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { fetchBooksAsync, removeBookAsync } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';

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
        {books && books.map((book) => (
          <div key={book.id} className="books_container">
            <div className="booksname">
              <div className="books_detail">
                <p className="books_detail2">Action</p>
                <p className="books_detail1">
                  <strong>{book.title}</strong>
                </p>
                <p className="books_detail1 books_detail3">
                  {book.author}
                </p>
              </div>
              <div className="remove">
                <p>Comments</p>
                <div className="line" />
                <button type="button" onClick={() => handleRemove(book.id)}>
                  Remove
                </button>
                <div className="line" />
                <p>Edit</p>
              </div>
            </div>
            <div className="progress">
              <div className="progress_container">
                <CircularProgressbar className="progressoval" value={Math.floor(Math.random() * (99 - 0)) + 0} />
              </div>
              <div className="percent1">
                <p className="percent">
                  {Math.floor(Math.random() * (99 - 0)) + 0}
                  %
                </p>
                <p className="completed">Completed</p>
              </div>
            </div>
            <div className="line2" />
            <div className="chapters">
              <p className="chapter">CURRENT CHAPTER</p>
              <p className="lessonnumber">
                Chapter
                {' '}
                {Math.floor(Math.random() * (99 - 0)) + 0}
                {' '}
              </p>
              <button className="updatebtn" type="button">UPDATE PROGRESS</button>
            </div>
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
