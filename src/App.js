{/*Elementos necesarios.*/ }
import React, { useState } from 'react';
import ScrollListener from './components/ScrollListener';

{/*Elementos constantes y array de objetos necesarios.*/ }
import { pages, parallaxImages} from './constants';

{/*Elementos adicionales.*/ }
import CustomFooterButtons from './components/CustomFooterButtons';
import CustomScrollProgressBar from './components/CustomScrollProgressBar';

import { Routes, Route } from 'react-router-dom';

import CustomTitleBar from "./components/CustomTitleBar";
import Parallax from "./components/Parallax";

import './App.css';

function App() {

  {/*Definimos el scrollPercentage*/ }
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = (percentage) => {
    setScrollPercentage(percentage);
  };

  return (
    <div className="App">
      <ScrollListener
        onScroll={handleScroll}
      />

      <header>
        <CustomTitleBar title={"Federico Garcia Barreiro"}></CustomTitleBar>
      </header>

      <div className='custom-body'>

      <Parallax 
        parallaxImages={parallaxImages}
        scrollPercentage={scrollPercentage}
      />

      <Routes>
        {pages.map(page => (
          <Route
            key={page.key}
            path={page.path}
            element={page.element}
          />
        ))}
      </Routes>
      </div>

      {/*Pie de pagina*/}
      <footer>
        <CustomFooterButtons
          scrollPercentage={scrollPercentage}
        />

        <CustomScrollProgressBar
          scrollPercentage={scrollPercentage}
        />
      </footer>

    </div>
  );
}

export default App;