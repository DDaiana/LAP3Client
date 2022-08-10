
import './App.css';
import { Home, Profile, Usernames, Categories, Difficulty, Game, Score, Leaderboard } from './pages';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header" title='figure'>
        <Routes>
              <Route path="/" element={<Home />}> </Route>
              <Route path="/usernames" element={<Usernames />}> </Route>
              <Route path="/categories" element={<Categories />}> </Route>
              <Route path="/difficulty" element={<Difficulty />}> </Route>
              <Route path="/game" element={<Game />}> </Route> 
              <Route path="/score" element={<Score />}> </Route>               
              <Route path="/leaderboard" element={<Leaderboard />}> </Route>               
              <Route path="/score" element={<Score />}> </Route>  
         </Routes>
      </header>
      
    </div>
  );
}

export default App;
