import './styles/App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Index from './components/index';
function App() {
  return( 
    <BrowserRouter>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<Index/>}/>
        </Routes>
        <Routes>
          <Route path='/categories' element={<ItemListContainer/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
