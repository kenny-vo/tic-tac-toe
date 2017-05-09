
var moveCount = 0;
var player = 'player 1';
var playerOneArray = [];
var playerTwoArray = [];
var winningCombos = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];
var won = false;

$(document).ready(function() {

  console.log('Sanity Check. You are Sane.');
// alternate players
  $('.col-xs-4').click(function(){
    if ( $(this).hasClass('playerOne') || $(this).hasClass('playerTwo')){
      $('#info').text("Nope. Taken.");
    } else if  (moveCount % 2 == 0) {
        $(this).addClass('playerOne');
        playerOneArray.push($(this).attr('id'));
        $('#info').text("Player O. Your move.");
        player = 'player 2';
        moveCount++;
      } else {
        $(this).addClass('playerTwo');
        playerTwoArray.push($(this).attr('id'));
        $('#info').text("Player X. Your move.");
        player = 'player 1';
        moveCount++;
      }
      check();
  });

  //    function checkWinTwo() {
  //   //   var winningCombos = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];
    //   if ( moveCount > 4) {
    //     playerOneArray.sort();
    //     playerTwoArray.sort();
  // win.forEach(function(checkCombo){
  //       if winningNumber > 0;
  //         // win
  //       }
  //     }
  //     function  (){
  //       win.indexOf(playerOneArray[0]) *
  //       playerOneArray.indexOf(playerOneArray[1]) *
  //       playerOneArray.indexOf(playerOneArray[2]) *
  //       playerOneArray.indexOf(playerOneArray[4]) *
  //       playerOneArray.indexOf(playerOneArray[5])
  //     }
  // }
  // function checkWinThree() {
  //   var winningCombos = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];
  //   if ( moveCount > 4) {
  //     playerOneArray.sort();
  //     playerTwoArray.sort();
  //     for (i=0; i < winningCombos.length; i++) {
  //       for (var j=0; j < playerOneArray.length; j++) {
  //         console.log(i);
  //         if (playerOneArray[j] === winningCombos[i][0]){
  //             console.log(playerOneArray[j] === winningCombos[i][0])
            // if (playerOneArray[j] === win[i][1]) {
            //   if (playerOneArray[j] === win[i][2]){
                // $('#info').text("Player 1 is the winner!!");
            //   }
  //           // }
  //         }
  //       }
  //     }
  //   }
  // }

  // function threeInARow(elem, index, arr){
  //   for (var i = 0; i < playerOneArray.length; i++) {
  //     if (playerOneArray[i] === winningCombos[i]
  //   }
  // }
  //
  // function checkWinFour () {
  //   var winningCombos = [['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']];
  //   winningCombos.forEach(function(threeInARow){
  //       if (true) {
  //         $('#info').text("Player 1 is the winner!!");
  //       }
  //   }
  // }




  function includesAll() {
    for (var i = 0; i< arguments.length; i++) {
      if (!this.includes(arguments[i])) {return false; }
    }
    return true
  };

    check = function() {
    winningCombos.forEach(function(el, i, arr){
      if (includesAll.apply(playerOneArray, el)) {
        $('#info').text("Player 1 is the winner!!");
        won = true;
      } else if (includesAll.apply(playerTwoArray, el)){
          $('#info').text("Player 2 is the winner!!");
          won = true;
      }
    })
    if (playerOneArray.length === 5 && playerTwoArray.length === 4 && !won) {
      $('#info').text("It's a draw. Fight to the death.");
    }
  };

  // reset
  $('.reset').click(function() {
    $('.col-xs-4').removeClass("playerOne playerTwo win");
    $('#info').text("Player X. Your move.");
    moveCount = 0;
    playerOneArray.length = 0;
    playerTwoArray.length = 0;
    var won = false;
  });

});
