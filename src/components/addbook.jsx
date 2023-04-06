import React, { useState } from 'react';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { id: Date.now(), title, author };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
      <ul className="books">
        {books.map((book) => (
          <li key={book.id}>
            {book.title}
            {' '}
            by
            {' '}
            {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddBookForm;
