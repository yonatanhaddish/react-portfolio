// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import SingleCategory from './components/SingleCategory';

function App() {
  const [categories]= useState([
    { name: "About me", description: "about me" },
    { name: "Portfolio", description: "my portfolio"},
    { name: "Contact", description: "contact me"},
    { name: "Resume", description: "my resume"}
  ]);
  const [currentCategory, setCurrentCategory]= useState(categories[0]);
  return (
    <div>
      <Nav categories= {categories}
          currentCategory= {currentCategory}
          setCurrentCategory= {setCurrentCategory}
      ></Nav>
      <main>
        <SingleCategory currentCategory= {currentCategory}></SingleCategory>
      </main>
    </div>
  );
}

export default App;
