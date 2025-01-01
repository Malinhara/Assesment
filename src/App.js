import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/Home';
import './styles/main.css';


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
