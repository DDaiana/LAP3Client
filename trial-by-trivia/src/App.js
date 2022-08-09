
import './App.css';
import { Profile, Categories, Difficulty, Game, Score } from './pages';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header" title='figure'>
        <Routes>
              <Route path="/" element={<Profile />}> </Route>
              <Route path="/categories" element={<Categories />}> </Route>
              <Route path="/difficulty" element={<Difficulty />}> </Route>
              <Route path="/game" element={<Game />}> </Route> 
              <Route path="/score" element={<Score />}> </Route>  
         </Routes>
      </header>
      
    </div>
  );
}

export default App;
