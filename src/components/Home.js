import React, { useEffect, useState } from 'react';
import useBooks from '../Hooks/fetchBooks';
import '../styles/main.css';
import BookList from './bookList';
import LoadingSpinner from './loadingSpinner';
import SearchBar from './searchBar';



const Home = () => {
    const [query, setQuery] = useState('');  // Start with empty query to trigger default 'fiction'
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Set items per page to 6
    

    const { books, loading, error, totalItems } = useBooks(query, itemsPerPage, currentPage);
    
    const totalPages = Math.ceil(totalItems / itemsPerPage);  // Calculate total pages based on itemsPerPage
    
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
        <>

<div class="container">

  <div class="grid-item"><h5>Deciding what to read next?</h5>
  You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations.</div>
  <div class="grid-item"><h5>What are your friends reading?</h5>
   Chances are your friends are discussing their favorite (and least favorite) books on Goodreads.

</div>
  <div class="grid-item"></div>
  <div class="row-2">
    <div class="grid-item"> 
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <BookList books={books} />
            
          </>
        )}</div>
    <div class="grid-item"><img src="https://i.ibb.co/FX9sG58/rgerg.jpg" alt="rgerg" border="0"/></div>
  </div>

  <div class="grid-item"> Search and browse books<br></br><SearchBar query={query} setQuery={setQuery} /></div>
  <div class="row-3">
    <div class="grid-item"><img src="https://i.ibb.co/wgqt0Jk/Screenshot-2025-01-01-172033.jpg" alt="Screenshot-2025-01-01-172033" border="0"/></div>
    
  </div>

 
</div>
    


      </>
    );
};

export default Home;
