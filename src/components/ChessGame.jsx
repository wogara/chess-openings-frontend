import React, { useState } from 'react';
import { Chessboard } from 'react-chessboard';
//const Chess = require('chess.js').Chess;
import {Chess} from "chess.js";

export default function ChessGame() {
  console.log('rendered');
  const [game, setGame] = useState(new Chess());
  const [isGameOver, setIsGameOver] = useState(false);

  function makeAMove(move) {
    const gameCopy = { ...game };
    console.log('gameCopy');
    console.log(gameCopy);
    const result = gameCopy.move(move);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0){
      console.log('game over');
      setIsGameOver(true); // exit if the game is over
    }
      
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    makeAMove(possibleMoves[randomIndex]);
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });

    // illegal move
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return (
    <div style={{ width: "600px", height: "600px", border: "1px solid black" }}>
      <Chessboard 
        position={game.fen()} 
        onPieceDrop={onDrop} 
        //areArrowsAllowed={true}
        //customArrows={[['a3','d6']]}
      />
      {isGameOver && <h1>Game Over</h1>} {/* Conditionally render the game over message */}
    </div>
    
  )
}

