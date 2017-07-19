var square = $('.square');
var square1 = $('#square1');
var square2 = $('#square2');
var square3 = $('#square3');
var square4 = $('#square4');
var square5 = $('#square5');
var square6 = $('#square6');
var square7 = $('#square7');
var square8 = $('#square8');
var square9 = $('#square9');

var squares = [null, square1, square2, square3, square4, square5
, square6, square7, square8, square9];

var state = {
    playerOne: "X",
    playerTwo: "O",
    currentTurn: "X",
    board: ["error", "", "", "", "", "", "","","",""]
};

var render = function() {
    for(var i = 1; i <= 9; i++) {
        console.log(i, state.board[i]);
        squares[i].html(state.board[i]);
    }
};

square.click(function() {
    if($(this).find('p').html().length === 0) {
        var id = $(this).find('p').attr('id')[6];
        console.log(state.currentTurn);
        state.board[id] = state.currentTurn;
        state.currentTurn = (state.currentTurn == state.playerOne)?state.playerTwo:state.playerOne;
        render();
    }
});



render();


