import './styles/App.css';
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import GamesCategory from './components/gamesCategory.js';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return( 
    <BrowserRouter>
      <NavBar/>
      <main>
      
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/games' element={<GamesCategory/>}/>
          <Route path='/games/:consoleId' element={<ItemListContainer/>}/>
          <Route path='/game/:gameId' element={<ItemDetailContainer/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
