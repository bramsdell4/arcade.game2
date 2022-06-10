const gameState = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
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




function checkWinner(){
for(let i = 0; i < gameState.board.length; i++){ //loops through the 3 arrays
  let row = gameState.board[i];
    for(let k = 0; k < row.length; k++){//loops through the values inside the array
      let square = row[k];
      return square;
}
}
/*Possible wins are
rows
[0,1,2] or
[3,4,5] or
[6,7,8]
columns
[0,3,6] or
[1,4,7] or
[2,5,8]
diaganal
[0,4,8] or
[2,4,6]*/
}

let playBox = document.getElementsByClassName("box");
playBox.addEventLisener('click', drawFunction()){
  
}


