var status1 = $('#status');
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

var winningCombinations = [["1","2","3"],["4","5","6"],["7","8","9"], 
                            ["1","4","7"],["2","5","8"],["3","6","9"],
                            ["1","5","9"],["3","5","7"]];

var state = {
    playerOne: "X",
    playerTwo: "O",
    currentTurn: "X",
    board: ["error", "", "", "", "", "", "","","",""],
    status: "Player One's Turn"
};

var render = function() {
    for(var i = 1; i <= 9; i++) {
        console.log(i, state.board[i]);
        squares[i].html(state.board[i]);
    }
    status1.html(state.status);
};


square.click(function() {
    if($(this).find('p').html().length === 0) {
        var id = $(this).find('p').attr('id')[6];
        console.log(state.currentTurn);
        state.board[id] = state.currentTurn;
        // state.currentTurn = (state.currentTurn == state.playerOne)?state.playerTwo:state.playerOne;
        state.status = (state.status === "Player One's Turn")?"Player Two's Turn":"Player One's Turn";
        render();
        var didWin = checkWinner();
        state.currentTurn = (state.currentTurn == state.playerOne)?state.playerTwo:state.playerOne;
        if(didWin) {
            resetBoard();
        }
    }
});

var resetBoard = function() {
    
}

var checkWinner = function() {
    for(var i = 0; i < winningCombinations.length; i++) {
        var a = Number(winningCombinations[i][0]);
        var b = Number(winningCombinations[i][1]);
        var c = Number(winningCombinations[i][2]);
        if(state.board[a] === "X" || state.board[b] === "O"){
            if(state.board[a] === state.board[b] && state.board[b] === state.board[c]) {
                alert("Winner :)! Congrats " + state.currentTurn + "\nThe game will now reset!");
                return 5;
            }
        }
    }
}




render();


