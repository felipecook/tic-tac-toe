
//This will control the display of the gameboard
const displayController = (() => {

  //Select the webPageBody
  const webPageBody = document.querySelector('body');

  //Create the Title elements
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('container');
  titleDiv.id = 'title__container';
  const gameTitle = document.createElement('h1');
  gameTitle.innerHTML = 'TicTacToe'
  titleDiv.appendChild(gameTitle);

  //Create the Game elements
  const gameDiv = document.createElement('div');
  gameDiv.classList.add('container');
  gameDiv.id = 'game__container';
  console.log(gameBoard.gameBoardArray);


  //Attach the title and game body to the webPageBody
  webPageBody.appendChild(titleDiv);
  webPageBody.appendChild(gameDiv);

  return {webPageBody};
})();


// This will start the game
const gameController = (() => {

})();

// The Factory Function that holds information on the player
const player = name => {
  const getName = () => name;
  return {getName};
}

//The Module that holds the gameboard
const gameBoard = (() => {
  const gameBoardArray = ['x','x','o','o','x','x','x','o','o'];
  return {gameBoardArray};
})();