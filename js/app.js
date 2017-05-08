// wait for the DOM to finish loading
$(document).ready(function() {

  console.log('Sanity Check. You are Sane.');
  var totalMoves = 0
  var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

  //Switching players
  var currentPlayer = "playerOne";
  var firstPlayer = "playerOne";
  var secondPlayer = "playerTwo";

  function switchPlayer() {
    if (currentPlayer === "playerOne"){
      currentPlayer = secondPlayer;
    } else {
      currentPlayer = firstPlayer;
    }
  }
  // click function
  $('.col-xs-4').click(function() {
    console.log(currentPlayer);
    //box is claimed
    if ( $(this).hasClass('playerOne') || $(this).hasClass('playerTwo')){
      alert("Nope");
    } else {
      // update box and totalMoves var
      $(this).addClass(currentPlayer);
      switchPlayer();
      totalMoves++;
    }

    console.log(totalMoves);
    if (totalMoves > 9) {
      alert("Game!");
    }

  });

  // reset
  $('.reset').click(function() {
    $('.col-xs-4').removeClass("playerOne");
    $('.col-xs-4').removeClass("playerTwo");
    totalMoves = 0;
  });


});


// function checkWin (){
//   var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//   if ( $('#1').hasClass('playerOne') &&  $('#2').hasClass('playerOne') && $('#3').hasClass('playerOne') ){
//       alert( ' won!');
//     }
//   }
// };

// function checkWin (player){
//   var win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
//   for (i=0; i<win.length; i++);
//     if (playerOneArray[0] == win[0]){
//       if (playerOneArray[1]) == win[1]){
//         if (playerOneArray[2])== win[2]){
//           alert('winner!');
//         }
//       }
//     } else {
//       break;
//     }
// };
