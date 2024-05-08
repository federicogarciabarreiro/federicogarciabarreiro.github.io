import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavigationBar from './NavigationBar';
import SimpleCarousel from './SimpleCarousel';
import ScrollProgressBar from './ScrollProgressBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />

      
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}

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
      <ScrollProgressBar/>
    </div>
  );
}

export default App;
