import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

const cardValues = [
  "1",
  "2",
  "3",
  "4",
  "D",
  "C",
  "B",
  "A",
  "1",
  "2",
  "3",
  "4",
  "D",
  "C",
  "B",
  "A",
];

function App() {
const{cards,score,moves, handleCardClick ,initializeGame, isGameComplete}= useGameLogic(cardValues)
  return (
    <div className="app">
      <GameHeader score={score} moves={moves} onReset={initializeGame} />
      {isGameComplete && <WinMessage moves={moves}/>}
      <div className="cards-grid">
        {cards.map((card) => (
          <Card card={card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}
export default App;
