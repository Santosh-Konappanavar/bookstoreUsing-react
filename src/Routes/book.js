import React from 'react';
import AddBookForm from '../components/addbook';
import BooksList from '../components/allbooks';

export default function Book() {
  return (
    <div className="addbook">
      <BooksList />
      <hr className="hr" />
      <h4>ADD NEW BOOK</h4>
      <AddBookForm />
    </div>
  );
}
