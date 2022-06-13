import './styles/App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer';
function App() {
  return( 
    <>
      <NavBar/>
      <div className="header">
        <header className="App-header">
          <h1>Cd Romance</h1>
          <p>
            The best place for your retro gaming needs!
          </p>
        </header>
      </div>
      <hr/>
      <main>
        <h2 className='container-fluid'><u>Our latest games</u></h2>
        <ItemListContainer/>
        <hr/>
        <ItemDetailContainer/>
      </main>
    </>
  );
};

export default App;
