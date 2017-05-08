// wait for the DOM to finish loading
$(document).ready(function() {

  console.log('Sanity Check. You are Sane.');
  var moveCount = 0;
  var player = 'player 1';

// alternate players
  $('.col-xs-4').click(function(){
    if ( $(this).hasClass('playerOne') || $(this).hasClass('playerTwo')){
      alert("Nope. Taken.");
    } else if  (moveCount % 2 == 0) {
        $(this).addClass('playerOne');
        player = 'player 2';
      } else {
        $(this).addClass('playerTwo');
        player = 'player 1';
      }
      checkWin();
      moveCount++;
  });

  // win conditions
  function checkWin (){
    if ( $('#1').hasClass('playerOne') &&  $('#2').hasClass('playerOne') && $('#3').hasClass('playerOne') ){
      $('#1').addClass('win') && $('#2').addClass('win') && $('#3').addClass('win');
      alert('Player 1 is the winner!!');
    } else if ( $('#4').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#6').hasClass('playerOne') ){
        $('#4').addClass('win') && $('#5').addClass('win') && $('#6').addClass('win');
        alert('Player 1 is the winner!!');
    } else if ( $('#7').hasClass('playerOne') &&  $('#8').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        $('#7').addClass('win') && $('#8').addClass('win') && $('#9').addClass('win');
        alert('Player 1 is the winner!!');
    } else if ( $('#1').hasClass('playerOne') &&  $('#4').hasClass('playerOne') && $('#7').hasClass('playerOne') ){
        $('#1').addClass('win') && $('#4').addClass('win') && $('#7').addClass('win');
        alert('Player 1 is the winner!!');
    } else if ( $('#2').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#8').hasClass('playerOne') ){
        $('#2').addClass('win') && $('#5').addClass('win') && $('#8').addClass('win');
        alert('Player 1 is the winner!!');
    } else if ( $('#3').hasClass('playerOne') &&  $('#6').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        $('#3').addClass('win') && $('#6').addClass('win') && $('#9').addClass('win');
        alert('Player 1 is the winner!!');
    } else if ( $('#1').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        $('#1').addClass('win') && $('#5').addClass('win') && $('#9').addClass('win');
        alert('Player 1 is the winner!!');
    } else if ( $('#3').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#7').hasClass('playerOne') ){
        $('#3').addClass('win') && $('#5').addClass('win') && $('#7').addClass('win');
        alert('Player 1 is the winner!!');
    } else if ( $('#4').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#6').hasClass('playerTwo') ){
        $('#4').addClass('win') && $('#5').addClass('win') && $('#6').addClass('win');
        alert('Player 2 is the winner!!');
    } else if ( $('#7').hasClass('playerTwo') &&  $('#8').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        $('#7').addClass('win') && $('#8').addClass('win') && $('#9').addClass('win');
        alert('Player 2 is the winner!!');
    } else if ( $('#1').hasClass('playerTwo') &&  $('#4').hasClass('playerTwo') && $('#7').hasClass('playerTwo') ){
        $('#1').addClass('win') && $('#4').addClass('win') && $('#7').addClass('win');
        alert('Player 2 is the winner!!');
    } else if ( $('#2').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#8').hasClass('playerTwo') ){
        $('#2').addClass('win') && $('#5').addClass('win') && $('#8').addClass('win');
        alert('Player 2 is the winner!!');
    } else if ( $('#3').hasClass('playerTwo') &&  $('#6').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        $('#3').addClass('win') && $('#6').addClass('win') && $('#9').addClass('win');
        alert('Player 2 is the winner!!');
    } else if ( $('#1').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        $('#1').addClass('win') && $('#5').addClass('win') && $('#9').addClass('win');
        alert('Player 2 is the winner!!');
    } else if ( $('#3').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#7').hasClass('playerTwo') ){
        $('#3').addClass('win') && $('#5').addClass('win') && $('#7').addClass('win');
        alert('Player 2 is the winner!!');
    } else if (moveCount === 8) {
        alert("It's a draw!");
    }
  };

  // reset
  $('.reset').click(function() {
    $('.col-xs-4').removeClass("playerOne playerTwo win");
    moveCount = 0;
  });

});
