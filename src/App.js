import React, { useEffect, useState } from 'react';
import './App.css';
import BookList from './components/bookList';
import LoadingSpinner from './components/loadingSpinner';
import SearchBar from './components/searchBar';
import useBooks from './Hooks/fetchBooks';

const App = () => {
  const [query, setQuery] = useState('');  // Start with empty query to trigger default 'fiction'
  const [currentPage, setCurrentPage] = useState(1);
  
  const { books, loading, error, totalItems } = useBooks(query, 20, currentPage);

  const totalPages = Math.ceil(totalItems / 20);  // Calculate total pages based on totalItems

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  useEffect(() => {
   
    if (query === '') {
      setQuery(''); 
    }
  }, [query]);

  return (
    <div className="app">
      <h1>Book Finder</h1>
      <SearchBar query={query} setQuery={setQuery} />
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <BookList books={books} />
          <div className="pagination">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
