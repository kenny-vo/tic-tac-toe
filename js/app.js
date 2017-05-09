
var moveCount = 0;
var player = 'Player X';
$('#info').text("Player X. Your move.");

$(document).ready(function() {

  console.log('Sanity Check. You are Sane.');
// alternate players on click
  $('.col-xs-4').click(function(){
    // blocks occupied squares
    if ( $(this).hasClass('playerOne') || $(this).hasClass('playerTwo')){
      $('#info').text("Nope. Taken.");
    } else if  (moveCount % 2 == 0) {
        $(this).addClass('playerOne');
        $('#info').text("Player O. Your move.");
        player = 'Player O';
        moveCount++;
      } else {
        $(this).addClass('playerTwo');
        $('#info').text("Player X. Your move.");
        player = 'Player X';
        moveCount++;
      }
      // check winners
      checkWin();
  });

  // win conditions
  function checkWin (){
    if ( $('#1').hasClass('playerOne') &&  $('#2').hasClass('playerOne') && $('#3').hasClass('playerOne') ){
      $('#1').addClass('win') && $('#2').addClass('win') && $('#3').addClass('win');
      $('#info').text("Player X is the winner!!");
    } else if ( $('#4').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#6').hasClass('playerOne') ){
        $('#4').addClass('win') && $('#5').addClass('win') && $('#6').addClass('win');
        $('#info').text("Player X is the winner!!");
    } else if ( $('#7').hasClass('playerOne') &&  $('#8').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        $('#7').addClass('win') && $('#8').addClass('win') && $('#9').addClass('win');
        $('#info').text("Player X is the winner!!");
    } else if ( $('#1').hasClass('playerOne') &&  $('#4').hasClass('playerOne') && $('#7').hasClass('playerOne') ){
        $('#1').addClass('win') && $('#4').addClass('win') && $('#7').addClass('win');
        $('#info').text("Player X is the winner!!");
    } else if ( $('#2').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#8').hasClass('playerOne') ){
        $('#2').addClass('win') && $('#5').addClass('win') && $('#8').addClass('win');
        $('#info').text("Player X is the winner!!");
    } else if ( $('#3').hasClass('playerOne') &&  $('#6').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        $('#3').addClass('win') && $('#6').addClass('win') && $('#9').addClass('win');
        $('#info').text("Player X is the winner!!");
    } else if ( $('#1').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#9').hasClass('playerOne') ){
        $('#1').addClass('win') && $('#5').addClass('win') && $('#9').addClass('win');
        $('#info').text("Player X is the winner!!");
    } else if ( $('#3').hasClass('playerOne') &&  $('#5').hasClass('playerOne') && $('#7').hasClass('playerOne') ){
        $('#3').addClass('win') && $('#5').addClass('win') && $('#7').addClass('win');
        $('#info').text("Player X is the winner!!");
    } else if ( $('#4').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#6').hasClass('playerTwo') ){
        $('#4').addClass('win') && $('#5').addClass('win') && $('#6').addClass('win');
        $('#info').text("Player O is the winner!!");
    } else if ( $('#7').hasClass('playerTwo') &&  $('#8').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        $('#7').addClass('win') && $('#8').addClass('win') && $('#9').addClass('win');
        $('#info').text("Player O is the winner!!");
    } else if ( $('#1').hasClass('playerTwo') &&  $('#4').hasClass('playerTwo') && $('#7').hasClass('playerTwo') ){
        $('#1').addClass('win') && $('#4').addClass('win') && $('#7').addClass('win');
        $('#info').text("Player O is the winner!!");
    } else if ( $('#2').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#8').hasClass('playerTwo') ){
        $('#2').addClass('win') && $('#5').addClass('win') && $('#8').addClass('win');
        $('#info').text("Player O is the winner!!");
    } else if ( $('#3').hasClass('playerTwo') &&  $('#6').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        $('#3').addClass('win') && $('#6').addClass('win') && $('#9').addClass('win');
        $('#info').text("Player O is the winner!!");
    } else if ( $('#1').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#9').hasClass('playerTwo') ){
        $('#1').addClass('win') && $('#5').addClass('win') && $('#9').addClass('win');
        $('#info').text("Player O is the winner!!");
    } else if ( $('#3').hasClass('playerTwo') &&  $('#5').hasClass('playerTwo') && $('#7').hasClass('playerTwo') ){
        $('#3').addClass('win') && $('#5').addClass('win') && $('#7').addClass('win');
        $('#info').text("Player O is the winner!!");
      // draw
    } else if (moveCount === 9) {
        $('#info').text("It's a draw. Fight to the death.");
    }
  };

  // reset button
  $('.reset').click(function() {
    $('.col-xs-4').removeClass("playerOne playerTwo win");
    player = "Player X"
    $('#info').text("Player X. Your move.");
    moveCount = 0;
  });

});
