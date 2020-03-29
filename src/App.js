import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./elements/Footer";
import Header from "./elements/Header";
import Content from "./elements/Site-content";

function App() {
  return (
    <div className="App">
     <Header/>
    <Content/>
    <Footer/>
    </div>
  );
}

export default App;
