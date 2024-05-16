{/*Elementos necesarios.*/}
import { useState } from 'react';
import ScrollListener from './components/ScrollListener';

{/*Elementos constantes y array de objetos necesarios.*/}
import { sections, images, videos, largeLayers, mediumLayers, smallLayers } from './constants';

{/*Elementos adicionales.*/}
import CustomParallax from './components/CustomParallax';
import CustomNavBar from './components/CustomNavBar';
import CustomTitleBar from './components/CustomTitleBar';
import CustomSection from './components/CustomSection';
import CustomCarousel from './components/CustomCarousel';
import CustomGameCard from './components/CustomGameCard';
import CustomVideoCardContainer from './components/CustomVideoCardContainer';
import CustomFooterButtons from './components/CustomFooterButtons';
import CustomScrollProgressBar from './components/CustomScrollProgressBar';


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
      {/* <CustomNavBar 
        title={"Federico Garcia Barreiro"}
        sections={sections} 
        scrollPercentage={scrollPercentage}
        />*/}

        <CustomTitleBar title={"Federico Garcia Barreiro"}></CustomTitleBar>
      </header>

    {/*Cuerpo de la aplicacion*/}

      <section id='section-0'/>
      <CustomParallax
        scrollPercentage={scrollPercentage}
        largeLayers={largeLayers}
        mediumLayers={mediumLayers}
        smallLayers={smallLayers}
      />
      
      <section id='section-1'/>
      <CustomVideoCardContainer 
        videos={videos}
      />
      
      <section id='section-2'/> 
      <CustomSection children={
        <CustomGameCard
          gameTitle={"Sediento"}
          gameEmbed={"./Sediento/game.html"}
          buttonText={"Clicka!"}
          maxWidth={600}
        />
      } />

      <section id='section-3' />
      <CustomCarousel 
        images={images}
      />

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