
//The Module that holds the gameboard
const gameBoard = (() => {
  const gameBoardArray = ['x','x','o','o','x','x','x','o','o'];
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
  const gameDiv = document.createElement('div');
  gameDiv.classList.add('container');
  gameDiv.id = 'game__container';
  
  //Game Holder
  for (let index = 0; index < gameBoardSlots.length; index++) {
    let gameBoardElement = gameBoardSlots[index];
    console.log(gameBoardElement);
    let tttButton = document.createElement('button');
    tttButton.id = `tttButton${index}`;
    tttButton.innerHTML = gameBoardElement;
    gameDiv.appendChild(tttButton);
  }



  //Attach the title and game body to the webPageBody
  webPageBody.appendChild(titleDiv);
  webPageBody.appendChild(gameDiv);

  return {webPageBody};
})();


// This will start the game
const gameController = (() => {

})();



