window.onload = function() {
    var board = document.querySelector('.board');
    board.addEventListener(`click`, addX);
};
var centinel = true;
function addX(event) {
    if (centinel) {
        event.target.textContent = 'X';
    }else{
        event.target.textContent = 'O';
    }
    centinel =! centinel;
};
function myFunction() {
    location.reload();
}

