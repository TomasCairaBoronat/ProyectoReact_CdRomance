import './styles/App.css';
import NavBar from './components/NavBar.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Index from './components/index';
import GamesCategory from './components/gamesCategory.js';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return( 
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/games' element={<GamesCategory/>}/>
          <Route path='/game/:gameId' element={<ItemDetailContainer/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
