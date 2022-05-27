import './styles/App.css';
import NavBar from './components/nav-bar.js';

function App() {
  return <>
    <NavBar/>
    <div className="App">
      <header className="App-header">
        <h1>Cd Romance</h1>
        <p>
          The best place for your retro gaming needs!
        </p>
      </header>
    </div>
    </>;
}

export default App;
