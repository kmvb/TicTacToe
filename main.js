
function startGame() {

    for (var i = 1; i<=9; i++){
        clearBox(i);
    }
    document.turn = 'X';
    document.winner = null;
    setMessage(document.turn + ' gets to start')
}

function setMessage(msg){
    document.getElementById('message').innerText = msg;
}
function nextMove(square){
    if(document.winner != null){
        setMessage(document.turn + ' already won.')
    } else if(square.innerText === ''){
    square.innerText = document.turn;
    switchTurn();    
    } else {
        setMessage('Pick another square')
    }

}

function switchTurn() {
    if(checkForWinner(document.turn)){
        setMessage('Congrats ' + document.turn + ' you won');
        document.winner = document.turn;
    } else if (document.turn === 'X') {
        document.turn = 'O'
         setMessage("It's " + document.turn + "'s turn");
    } else {
        document.turn = 'X'
         setMessage("It's " + document.turn + "'s turn");
    }
   
}
function checkForWinner(move){
    var result = false;
    if(checkBox(1,2,3, move) ||
       checkBox(4,5,6, move) ||
       checkBox(7,8,9, move) ||
       checkBox(1,4,6, move) ||
       checkBox(2,5,8, move) ||
       checkBox(3,6,9, move) ||
       checkBox(1,5,9, move) ||
       checkBox(3,5,7, move)){
           result = true
       }
       return result;
}
function checkBox(a, b, c, move){
    var result = false;
    if(getBox(a) === move && getBox(b) === move && getBox(c) === move){
        result = true;
    }
    return result;
}
function getBox(number){
    return document.getElementById('s' + number).innerText;
}

function clearBox(number){
    document.getElementById('s' + number).innerText = '';
}
