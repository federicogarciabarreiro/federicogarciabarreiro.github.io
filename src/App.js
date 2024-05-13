import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from './components/NavigationBar';
import SimpleCarousel from './components/SimpleCarousel';
import GameIFrame from './components/GameIFrame';
import VideoCardContainer from './components/VideoCardContainer';

import ScrollProgress from './components/ScrollListener';
import ScrollProgressBar from './components/ScrollProgressBar';

import React, { useState } from 'react';

import { sections, images, videos } from './constants';

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
        <GameIFrame
          title={"Sediento"}
          embed={"./Sediento/game.html"}
          maxWidth={600} />

        <section id='section-1' />
        <SimpleCarousel images={images} />

        <section id='section-2' />
        <VideoCardContainer videos={videos} />

      <footer>
           <ScrollProgressBar scrollPercentage={scrollPercentage} />
      </footer>
    </div>
  );
}

export default App;