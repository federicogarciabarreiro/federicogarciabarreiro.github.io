import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './NavigationBar';
import SimpleCarousel from './SimpleCarousel';
import ScrollProgressBar from './ScrollProgressBar';

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar/>
      </header>

      <body>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
        <SimpleCarousel/>
      </body>

      <footer>
        <ScrollProgressBar />
      </footer>

    </div>
  );
}

export default App;
