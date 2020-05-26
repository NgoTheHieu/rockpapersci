import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from "./components/Box"
import List from "./components/List"
import ChoiceCard from "./components/ChoiceCard"
import Button from "./components/Button"
import getRoundOutcome from "./components/Button" 


function App() {
  const choices = {
    scissors: {
      name: "scissors",
      url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
    },
    paper: {
      name: "paper",
      url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png"
    },
    rock: {
      name: "rock",
      url:
        "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
    }
  };
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [borderColor, setBorderColor] = useState(null);
  const [computerBorderColor,setComputerBorderColor] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);
  
  const DEFAULT_IMG =
  "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png";

  const onPlayerChoose =(playerChoice) =>{
    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = choices[playerChoice];
    const newComputerChoice = choices[compChoice];
    let newGameHistory = [];
    let newComputerColorBorder;
    let newColorBorder;
    let setGamePrompt;
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    
    if (result === "Victory!") {
      
      setPreviousWinner("You");
      newColorBorder ="green"
      newComputerColorBorder ="red"
    } else if (result === "Defeat!") {
      
      newColorBorder ="red"
      newComputerColorBorder = "green"
      setPreviousWinner("Computer");
    } else {
      newComputerColorBorder = "black"
      newColorBorder ="black"
      setPreviousWinner("Tie");
    }
    
    setComputerBorderColor(newComputerColorBorder);
    setBorderColor(newColorBorder);
    setGameHistory(newGameHistory);
    
    newGameHistory.push(result);
    setGamePrompt = (result) 
  }
  const getRoundOutcome = (userChoice)=>{
    const computerChoice = getRandomObject().name;
  let result;

  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};
  
  const [prompt, setGamePrompt] = useState("1, 2, 3, SHOOT!");
  const getRandomObject = ()=>{
    let choiceNames =Object.keys(choices);
    let randomIndex = Math.floor(Math.random() * 3)
    let choiceName = choiceNames[randomIndex]
    return choices[choiceName]
  }
 
  return (
    <div className="App">
      <div className="img">
  <ChoiceCard title="Computer" previousWinner={previousWinner} borderColor={computerBorderColor} imgURL={computerChoice && computerChoice.url} />
  <div class="row center img">
    <Button onClick={()=>onPlayerChoose("rock")} name="Rock" />
    <Button onClick={()=>onPlayerChoose("paper")} name="Paper" />
    <Button onClick={()=>onPlayerChoose("scissors")} name="Scissors" />
  </div>
  <ChoiceCard title="You" borderColor={borderColor} previousWinner={previousWinner} imgURL={playerChoice && playerChoice.url} />
      </div>
      <div className="col-md-4 themed-grid-col">
  <h3>History</h3>
  <ul>
    { gameHistory.join(" ")
    }
  </ul>
</div>
</div>

  );
  }

export default App;
