
//-------this is a mess and I am sorry






const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    currentPlayer: [],
  }
  //must be able to add names to players
  //have starting order random
  //change turns
  //can not place marker where marker exists
  //check if last play was winning or draw, return proper value.
    //check if 3 same values in a row
    //check if 3 same values in a column
    //check if 3 same values in diaganal directions
//reset button






//every turn it needs to checkWinner if there is no winner move on to drawFunction to draw player choice



function playerTurn (){
  for (let i = 0; i < gameState.players; i++){//loop through players
    let current = gameState.players[i];
    currentPlayer.push(current[i])//since its adding to the end of currentPlayer it probably also needs a function to remove for the next turn. maybe .unslice
  }
}

function checkWinner(){
  let newArr = []
for(let i = 0; i < gameState.board.length; i++){ //loops through the 3 arrays
  let row = gameState.board[i];
    for(let k = 0; k < row.length; k++){//loops through the values inside the array
      let square = row[k];
      newArr.push(square)//adds to new array so we can check for winners
}
}//check if values are all the same in newArr and who owns said values
/* if newArr equals any possible win game is over and owner of cards wins
Possible wins are
rows
[0,1,2] or
[3,4,5] or
[6,7,8]
columns or
[0,3,6] or
[1,4,7] or
[2,5,8]
diaganal or
[0,4,8] or
[2,4,6]*/
}
let submit = document.getElementById("enterButton");
let playBox = document.getElementsByClassName("box");
playBox.addEventListener('click', drawFunction());//event listener that is supposed to display an X or O depeding on whose turn it is
submit.addEventListener('click', addPlayer)
function drawFunction(){
  if(gameState.players[0]){
    playBox.innerHTML = <p> "X" </p>
  }
  if(gameState.players[1]){
    playBox.innerHTML = <p> "O" </p>
  }
  //if playBox contains an x value, value can not be changed
  //if playBox contains a y value, value can not be changed

  
}


function addPlayer(){
//adds text written in input field to gameState.players
}