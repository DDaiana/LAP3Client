import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz } from "../../actions";
import { PlayerCount } from '../../components/PlayerCount';
import { useNavigate} from 'react-router-dom';

export default function Home() {

  const dispatch = useDispatch();

  const number = useSelector((state) => state.mainReducer.number);
  const category = useSelector((state) => state.mainReducer.category);
  let difficulty = useSelector((state) => state.mainReducer.difficulty);
  let [isLoaded, setIsLoaded] = useState(false)
  let [results, setResults] = useState([])
  // let playerCount = useSelector((state) => state.playerCount);

  let navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  }


  useEffect(() => {
    async function fetchData() {
      const results = await fetchQuiz(category, difficulty, number)
      setResults(results)
      setIsLoaded(true)
      return results
    }
    fetchData();
  }, []);

  return (
    <div>
      <PlayerCount />
      <div>
        < button onClick={() => routeChange('/leaderboard')}> Leaderboard</button >
      </div >
    </div>
  )
}
