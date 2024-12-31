import React from 'react';
import '../styles/bookList.css';
import BookCard from './bookCard';

const BookList = ({ books }) => {
  if (!Array.isArray(books)) {
    return <p>No books found.</p>;
  }

  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book) => <BookCard key={book.id} book={book} />)
      )}
    </div>
  );
};

export default BookList;
