// src/components/SearchBar.js
import React from 'react';
import '../styles/searchBar.css'; // Add CSS for SearchBar styling

const SearchBar = ({ query, setQuery }) => {
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          placeholder="Search for books"
          className="search-input"
        />
      
      </form>
    </div>
  );
};

export default SearchBar;
