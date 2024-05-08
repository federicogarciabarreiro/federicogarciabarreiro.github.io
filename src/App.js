import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './NavigationBar';
import SimpleCarousel from './SimpleCarousel';
import ScrollProgressBar from './ScrollProgressBar';
import CollapsedText from './CollapsedText'; 

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>

      <body>

        {/*<Parallax pages={4} />*/}
      
        <section id="section-0">
          <SimpleCarousel />
          <CollapsedText />
        </section>
        <section id="section-1">
          <SimpleCarousel />
          <CollapsedText />
        </section>
        <section id="section-2">
          <SimpleCarousel />
          <CollapsedText />
        </section>
        <section id="section-3">
          <SimpleCarousel />
          <CollapsedText />
        </section>
        <section id="section-4">
          <SimpleCarousel />
          <CollapsedText />
        </section>
      </body>

      <footer>
        <ScrollProgressBar />
      </footer>
    </div>
  );
}


export default App;
