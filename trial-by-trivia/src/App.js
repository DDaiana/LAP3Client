
import './App.css';
import { Profile, Categories, Difficulty, Game, Score } from './pages';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Profile />  */}

        <Routes>
            {/* add the Layout as a parent for the rest of the elements - ensure that the layout uses outlet in order to display the child's content*/}
                      
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
