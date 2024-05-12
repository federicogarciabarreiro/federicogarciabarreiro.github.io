import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './NavigationBar';
import SimpleCarousel from './SimpleCarousel';
import ScrollProgressBar from './ScrollProgressBar';
import CollapsedText from './CollapsedText';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useRef } from 'react';

import GameIFrame from './GameIFrame';
import VideoCard from './VideoCard';

import CustomButton from "./CustomButton";

function App() {
  const ref = useRef();

  return (
    <div className="App">
      <header>
        <NavigationBar refProp={ref} />
      </header>

      <body>
        <Parallax pages={5} ref={ref}>
          <ParallaxLayer offset={0} speed={0.5}>
            <h2>Welcome to my website</h2>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1} factor={1}>
            <GameIFrame
              title={"Sediento"}
              embed={"./Sediento/game.html"}
              h={800}
              w={600} />
            <SimpleCarousel />
            <CollapsedText />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={1} factor={1}>
            <div className="container">
              <div className="row">

                <VideoCard
                  url=".\Videos\Sparkle.mp4"
                  title="Título del video"
                  description="Descripción del video"
                  buttonComponent={<CustomButton buttonLabel={"Ver más"} buttonUrl={"/ruta-al-video"}/>}
                />
               
               <VideoCard
                  url=".\Videos\Sparkle.mp4"
                  title="Título del video"
                  description="Descripción del video"
                />
                
                <VideoCard
                  url=".\Videos\Sparkle.mp4"
                  title="Título del video"
                  description="Descripción del video"
                  buttonComponent={<CustomButton buttonLabel={"Ver más"} buttonUrl={"/ruta-al-video"}/>}
                />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={1} factor={1}>
            <SimpleCarousel />
            <CollapsedText />
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={1} factor={1}>
            <SimpleCarousel />
            <CollapsedText />
          </ParallaxLayer>

          <ParallaxLayer offset={5} speed={1} factor={1}>
            <SimpleCarousel />
            <CollapsedText />
          </ParallaxLayer>
        </Parallax>
      </body>

      <footer>
        <ScrollProgressBar />
      </footer>
    </div>
  );
}

export default App;