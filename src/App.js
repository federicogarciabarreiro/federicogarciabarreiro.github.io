import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import SimpleCarousel from './components/SimpleCarousel';
import VideoCardContainer from './components/VideoCardContainer';

import ScrollProgress from './components/ScrollListener';
import ScrollProgressBar from './components/ScrollProgressBar';

import React, { useState } from 'react';

import { sections, images, videos } from './constants';

import { Fade } from "react-awesome-reveal";
import GameCard from './components/GameCard';

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
      <Fade cascade damping={0.1}>
      <ScrollProgress onScroll={handleScroll} />

        <section id='section-0' />
        <GameCard
    gameTitle={"Sediento"}
    gameEmbed={"./Sediento/game.html"}
    maxWidth={600}
/>

        <section id='section-1' />
        <SimpleCarousel images={images} />
        
        <section id='section-2' />
        <VideoCardContainer videos={videos} />
        </Fade>

      <footer>
           <ScrollProgressBar scrollPercentage={scrollPercentage} />
      </footer>
    </div>
  );
}

export default App;