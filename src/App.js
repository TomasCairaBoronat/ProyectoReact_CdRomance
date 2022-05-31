import './styles/App.css';
import NavBar from './components/nav-bar.js';
import ItemListContainer from './components/ItemListContainer.js'
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
    <main>
      <h2 className='container-fluid'><u>Our latest games</u></h2>
      <ItemListContainer greeting="Soon you'll see the best games we have to offer :)"/>
    </main>
    </>;
}

export default App;
