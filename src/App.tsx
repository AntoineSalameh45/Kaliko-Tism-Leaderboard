import './App.css'
import Leaderboard from './components/Leaderboard'
import leaderboardData from "../data/TismScores.json";
import TopThree from './components/TopThree';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

function App() {
  const topThree = leaderboardData
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  return (
    <>
      <div>
        <TopThree topThree={topThree} />
      </div>
      <h1>
        <AutoAwesomeIcon/> 
        Tism
        <AutoAwesomeIcon/>
        &nbsp;
        Leaderboard
      </h1>
      <div className='bg-white-400'>
        <Leaderboard />
      </div>
      <div>
        <h3>
          Wanna give it a try? Here's the 
          &nbsp;
          <AutoAwesomeIcon/> 
          &nbsp;
          <a href='https://embrace-autism.com/raads-r/'>test link</a>
          &nbsp;
          <AutoAwesomeIcon/> 
        </h3>
      </div>  
    </>
  )
}

export default App
