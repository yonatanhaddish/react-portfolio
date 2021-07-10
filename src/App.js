// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import SingleCategory from './components/SingleCategory';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';

function App() {
  const [categories]= useState([
    { name: "About me", description: "about me" },
    { name: "Portfolio", description: "my portfolio"},
    { name: "Contact", description: "contact me"},
    { name: "Resume", description: "my resume"}
  ]);
  const [currentCategory, setCurrentCategory]= useState(categories[0]);
  const [aboutSelected, setAboutSelected]= useState(true);
  return (
    <div>
      <Nav categories= {categories}
          currentCategory= {currentCategory}
          setCurrentCategory= {setCurrentCategory}
          aboutSelected= {aboutSelected}
          setAboutSelected= {setAboutSelected}
      ></Nav>
      <main>
        
        <SingleCategory currentCategory= {currentCategory}
                        aboutSelected= {aboutSelected}
                        setAboutSelected= {setAboutSelected}>
        </SingleCategory>
      </main>
    </div>
  );
}

export default App;
