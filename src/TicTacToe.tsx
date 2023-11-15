import { Fragment, useEffect, useState } from "react";

import Board from "./Board";
import Result from "./Result";
import Reset from "./Reset";

const WINNING_COMBOS = [
  { combo: [0, 1, 2], mode: "row-1" },
  { combo: [3, 4, 5], mode: "row-2" },
  { combo: [6, 7, 8], mode: "row-3" },
  { combo: [0, 3, 6], mode: "col-1" },
  { combo: [1, 4, 7], mode: "col-2" },
  { combo: [2, 5, 8], mode: "col-3" },
  { combo: [0, 4, 8], mode: "dia-1" },
  { combo: [2, 4, 6], mode: "dia-2" },
];

const getWinner = (tiles: (string | null)[]) => {
  for (const { combo, mode } of WINNING_COMBOS) {
    const [first, second, third] = combo;
    if (
      tiles[first] !== null &&
      tiles[first] === tiles[second] &&
      tiles[first] === tiles[third]
    ) {
      return { winner: tiles[first] as string, winning_mode: mode };
    }
  }
  if (tiles.some((tile) => tile === null)) {
    return { winner: "", winning_mode: "" };
  }
  return { winner: "draw", winning_mode: "" };
};

export default function TicTacToe() {
  const [playerTurn, setPlayerTurn] = useState("X");
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [gameStatus, setGameStatus] = useState({
    winner: "",
    over: false,
  });
  const [strikeClass, setStrikeClass] = useState('');

  const handleReset = () => {
    setGameStatus({
        winner: "",
        over: false,
    });
    setPlayerTurn("X");
    setTiles(Array(9).fill(null));
    setStrikeClass('');
  }

  const onTileClick = (index: number) => {
    if (tiles[index] !== null) return;
    if (gameStatus.over) return;

    const prevTiles = [...tiles];
    prevTiles[index] = playerTurn;
    setTiles(prevTiles);
    setPlayerTurn(playerTurn === "X" ? "O" : "X");
  };

  useEffect(() => {
    if (!gameStatus.over) {
      const status = getWinner(tiles);
      if (status.winner) {
        setGameStatus({
          winner: status.winner,
          over: true,
        });
        setStrikeClass(status.winning_mode);
      }
    }
  }, [tiles, gameStatus]);

  return (
    <Fragment>
      <h1>Tic Tac Toe</h1>
      {gameStatus.over && <Result winner={gameStatus.winner} />}
      <Board strikeClass={strikeClass} tiles={tiles} onTileClick={onTileClick}/>
      { gameStatus.over && <Reset onReset = {handleReset}/> }
    </Fragment>
  );
}
