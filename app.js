
//The Module that holds the gameboard
const gameBoard = (() => {
  const gameBoardArray = ['','','','','','','','',''];
  return {gameBoardArray};
})();

// The Factory Function that holds information on the player
const player = name => {
  const getName = () => name;
  return {getName};
}

//This will control the display of the gameboard
const displayController = (() => {

  //Select the webPageBody
  const webPageBody = document.querySelector('body');

  //Select the gameBoardArray from gameBoard module
  const gameBoardSlots = gameBoard.gameBoardArray;

  //Create the Title elements
  const titleDiv = document.createElement('div');
  titleDiv.classList.add('container');
  titleDiv.id = 'title__container';
  const gameTitle = document.createElement('h1');
  gameTitle.innerHTML = 'TicTacToe'
  titleDiv.appendChild(gameTitle);

  //CREATE THE GAME ELEMENTS
  const gameStartDiv = document.createElement('div');
  gameStartDiv.classList.add('container');

  const gameDiv = document.createElement('div');
  gameDiv.classList.add('container');
  gameDiv.id = 'game__container';

  //Start game button
  const startGameButton = document.createElement('button');
  startGameButton.id = 'startGameButton';
  startGameButton.innerHTML = 'START';
  gameStartDiv.appendChild(startGameButton);
  
  //Game Holder
  for (let index = 0; index < gameBoardSlots.length; index++) {
    let gameBoardElement = gameBoardSlots[index];
    console.log(gameBoardElement);
    let tttButton = document.createElement('button');
    tttButton.id = `tttButton${index}`;
    tttButton.classList = 'tttButtons'
    tttButton.innerHTML = gameBoardElement;
    gameDiv.appendChild(tttButton);
  }



  //Attach the title and game body to the webPageBody
  webPageBody.appendChild(titleDiv);
  webPageBody.appendChild(gameStartDiv);
  webPageBody.appendChild(gameDiv);

  return {webPageBody, startGameButton};
})();


// This will start the game
const gameController = (() => {
  startGameButton = displayController.startGameButton;
  startGameButton.addEventListener('click', startGame)

  const gameWon = false;

  tttButtons = document.querySelectorAll('.tttButtons');
  
  function startGame() {
    do {
      tttButtons.addEventListener('click', displayXO);
    } while (!gameWon);

  };

})();




