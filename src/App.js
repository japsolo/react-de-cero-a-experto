import laImagenDelLogo from './logo.svg';
import './App.css';
import Title from './Title';

import Leia from './assets/images/leia.jpg';
import Spiderman from './assets/images/spiderman.jpg';
import WalterWhite from './assets/images/walter-white.jpg';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Title />
      <Title />
      <header className="App-header">
        <img src={laImagenDelLogo} className="App-logo" alt="logo" />
        <img src='/images/yoda.jpg' alt="Yoda" />
        <img src={Leia} alt="" />
        <img src={Spiderman} alt="" />
        <img src={WalterWhite} alt="" />
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
        <a className="App-link" href="https://youtube.com">Ir a YouTube</a>
      </header>
    </div>
  );
}

export default App;
