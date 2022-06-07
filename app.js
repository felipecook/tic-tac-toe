// The Factory Function that holds information on the player
const player = name => {
  const getName = () => name;
  return {getName};
}

//The Module that holds the gameboard
const gameBoard = (() => {
  const gameBoardArray = ['','','','','','','','',''];
  return {gameBoardArray};
})();

//This will control the display of the gameboard
const displayController = (() => {
  
})();