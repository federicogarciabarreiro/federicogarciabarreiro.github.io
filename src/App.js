import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './NavigationBar';
import SimpleCarousel from './SimpleCarousel';
import ScrollProgressBar from './ScrollProgressBar';

import { useRef } from 'react';

import GameIFrame from './GameIFrame';
import VideoCard from './VideoCard';

import CustomButton from "./CustomButton";

function App() {
  const ref = useRef();

  return (
    <div className="App">
      <header>
        <NavigationBar/>
      </header>

      <body>
        <section id='section-0'/>
        <GameIFrame
            title={"Sediento"}
            embed={"./Sediento/game.html"}
            maxWidth={600} />

        <section id='section-1'/>
        <SimpleCarousel 
    img0="./pics/first-slide.jpg" t1="Primera imagen" d1=""
    img1="./pics/second-slide.jpg" t2="Segunda imagen" d2=""
    img2="./pics/third-slide.jpg" t3="Tercera imagen" d3=""
/>


        <section id='section-2'/>
          <div className="container">
            <div className="row">
              <VideoCard
                url=".\Videos\Sparkle.mp4"
                title="Título del video"
                description="Descripción del video"
                buttonComponent={<CustomButton buttonLabel={"Ver más"} buttonUrl={"/ruta-al-video"} />}
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
                buttonComponent={<CustomButton buttonLabel={"Ver más"} buttonUrl={"/ruta-al-video"} />}
              />
            </div>
          </div>
      </body>

      <footer>
        <ScrollProgressBar />
      </footer>
    </div>
  );
}

export default App;