import { useEffect, useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(rollDice(10));

  function rollDice(rollNum) {
    let newDice = [];
    for (let count = 0; count < rollNum; count++) {
      newDice.push(Math.ceil(Math.random() * 6));
    }
    return newDice;
  }

  function rollAgain() {
    setDice(rollDice(10));
  }

  const diceElements = dice.map((num, index) => (
    <Die key={index} value={num} />
  ));

  return (
    <main className="App">
      <section className="dice-container">{diceElements}</section>
      <button className="dice--button" onClick={rollAgain}>
        <p className="dice--button-text">Roll</p>
      </button>
    </main>
  );
}

export default App;
