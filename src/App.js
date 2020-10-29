import './App.css';
import BestScore from './components/BestScore';
import CurrentScore from './components/CurrentScore';
import Game from './components/Game';
import HeaderComp from './components/HeaderComp';
import ScoreScreen from './components/ScoreScreen';
import ScoreContextProvider from './contexts/ScoreContext';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <ScoreContextProvider>
      <ScoreScreen/>
      <div className="game-container">
            <CurrentScore/>
            <Game/>
            <BestScore/>
      </div>
      </ScoreContextProvider>
    </div>
  );
}

export default App;
