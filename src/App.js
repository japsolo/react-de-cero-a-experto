// Assets
import './assets/css/App.css';
import laImagenDelLogo from './assets/images/logo.svg';
import Leia from './assets/images/leia.jpg';
import Spiderman from './assets/images/spiderman.jpg';
import WalterWhite from './assets/images/walter-white.jpg';

// Components
import Header from './components/Header';
import Title from './components/Title';
import User from './components/User';
import UsersList from './components/UsersList';

// Data
import db from './data/usersDB.json';

let jane = {
  name: "Jane Doe",
  email: "jdoe@gmail.com",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid asperiores nisi tempora, inventore minima ipsa, maxime distinctio exercitationem unde omnis odit hic earum expedita commodi optio, repellendus veritatis debitis eius."
}

function App() {
  return (
    <div className="App">
      <Header />

      <UsersList listado={db} />

      <Title fecha="20 de julio" pais="Filipinas" />
      
      <Title fecha="19 de julio" pais="Argentina">
        <del className="text-danger">A ver si esto se ve</del>
        <br />
        <strong>Otra más</strong>
        <br />
        <em>uno más</em>
      </Title>
      
      <User {...jane} />

      <br />
      <br />
      
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
