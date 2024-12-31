// src/components/BookCard.js
import React from 'react';
import '../styles/bookCard.css';

const BookCard = ({ book }) => {
  const { title, authors, description, imageLinks } = book.volumeInfo;

  return (
    <div className="book-card">
      <img
        src={imageLinks?.thumbnail || 'https://via.placeholder.com/200x300'}
        alt={title}
        className="book-image"
      />
      <div className="book-info">
        <h2 className="book-title">{title}</h2>
        <p className="book-authors">{authors ? authors.join(', ') : 'Unknown Author'}</p>
        <p className="book-description">
          {description ? description.substring(0, 150) + '...' : 'No description available'}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
