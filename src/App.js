import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/main.css';

import BookList from './components/bookList';
import LoadingSpinner from './components/loadingSpinner';
import SearchBar from './components/searchBar';
import useBooks from './Hooks/fetchBooks';
import Header from './components/header';
import Home from './components/Home';
import Footer from './components/footer';


const App = () => {

  return (
    <>

      <Header/>
     <Home/>
     <Footer/>
    </>
  );
};

export default App;
