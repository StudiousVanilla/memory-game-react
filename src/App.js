import './App.css';
import BestScore from './components/BestScore';
import CurrentScore from './components/CurrentScore';
import Game from './components/Game';
import HeaderComp from './components/HeaderComp';
import ScoreContextProvider from './contexts/ScoreContext';

function App() {
  return (
    <div className="App">
      <HeaderComp/>
      <div className="game-container">
          <ScoreContextProvider>
            <CurrentScore/>
            <Game/>
            <BestScore/>
          </ScoreContextProvider>
      </div>
    </div>
  );
}

export default App;
