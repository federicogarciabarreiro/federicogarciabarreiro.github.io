{/*Elementos necesarios.*/}
import React, { useState } from 'react';
import ScrollListener from './components/ScrollListener';

{/*Elementos constantes y array de objetos necesarios.*/}
import { _routes, tabs, smallLayers, mediumLayers, largeLayers} from './constants';

{/*Elementos adicionales.*/}
import CustomTitleBar from './components/CustomTitleBar';
import CustomFooterButtons from './components/CustomFooterButtons';
import CustomScrollProgressBar from './components/CustomScrollProgressBar';
import CustomParallax from './components/CustomParallax';
import CustomTab from './components/CustomTab';

{/*Paginas*/}
import Game from './pages/Game';
import Home from './pages/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  {/*Definimos el scrollPercentage*/}
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = (percentage) => {
      setScrollPercentage(percentage);
    };

  return (
    <div className="App">
    
      {/*Inicializamos el componente que lleva el control del porcentaje de scroll*/}
      <ScrollListener 
        onScroll={handleScroll} 
      />

     {/*Encabezado*/}
      <header>
        <CustomTitleBar title={"Federico Garcia Barreiro"}></CustomTitleBar>
      </header>

      {/*Cuerpo de la aplicacion*/}      

     <div className='custom-body'>
     <section id='section-0'>
      <CustomParallax
          scrollPercentage={scrollPercentage}
          largeLayers={largeLayers}
          mediumLayers={mediumLayers}
          smallLayers={smallLayers}
        />
        </section>

      <Router>
        <Routes>

          <Route 
          path={'/'}
          element={<Home/>}
            />

          <Route 
          path={'/game'}
          element={<Game/>}
            />
            
        </Routes>
      </Router>

      {/*<CustomTab 
        tabs={tabs}
      />*/}
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