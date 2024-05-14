import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import SimpleCarousel from './components/SimpleCarousel';
import VideoCardContainer from './components/VideoCardContainer';

import ScrollProgress from './components/ScrollListener';
import ScrollProgressBar from './components/ScrollProgressBar';

import React, { useState } from 'react';

import { sections, images, videos, largeLayers, mediumLayers, smallLayers } from './constants';

import GameCard from './components/GameCard';

import CustomSection from './components/CustomSection';
import CustomParallax from './components/CustomParallax';

function App() {

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = (percentage) => {
    setScrollPercentage(percentage);
  };

  return (
    <div className="App">

      <header>
        <NavigationBar sections={sections} />
      </header>
      <ScrollProgress onScroll={handleScroll} />

      <section id='section-0' />
      <CustomParallax
        scrollPercentage={scrollPercentage}
        largeLayers={largeLayers}
        mediumLayers={mediumLayers}
        smallLayers={smallLayers}
      />


      <section id='section-1' />
      <CustomSection children={
        <GameCard
          gameTitle={"Sediento"}
          gameEmbed={"./Sediento/game.html"}
          maxWidth={600}
        />
      } />

      <section id='section-2' />
      <SimpleCarousel images={images} />

      <section id='section-3' />
      <VideoCardContainer videos={videos} />

      <section id='section-4' />



      <footer>
        <ScrollProgressBar scrollPercentage={scrollPercentage} />
      </footer>
    </div>
  );
}

export default App;