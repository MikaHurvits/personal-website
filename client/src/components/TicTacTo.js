// TicTacToe.js
import React, { useState, useEffect } from "react";
import "./TicTacTo.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = (index) => {
    if (board[index] || winner || !isXNext) {
      return; // Do nothing if the cell is already filled, the game is won, or it's not the player's turn
    }
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsXNext(false);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const computerMove = () => {
    const emptyIndices = board.reduce((indices, cell, i) => {
      if (!cell) indices.push(i);
      return indices;
    }, []);
    if (emptyIndices.length === 0) return; // No moves left

    const randomIndex = emptyIndices[0]; // Pick the first available spot for simplicity
    const newBoard = [...board];
    newBoard[randomIndex] = "O";
    setBoard(newBoard);
    setIsXNext(true);
  };

  useEffect(() => {
    const gameWinner = calculateWinner(board);
    if (gameWinner) {
      setWinner(gameWinner);
      setShowPopup(true);
    } else if (!isXNext) {
      const timer = setTimeout(() => computerMove(), 1000); // Delay for a better user experience
      return () => clearTimeout(timer);
    }
  }, [isXNext, board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setShowPopup(false);
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`cell ${cell ? "filled" : ""}`}
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <h2>{winner ? `Winner: ${winner}` : "It's a draw!"}</h2>
            <button className="reset-button" onClick={resetGame}>
              Reset Game
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
