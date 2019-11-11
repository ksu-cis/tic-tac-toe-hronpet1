// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";

function setTurn(){
	var turnElement = document.getElementById("turn");
	turnElement.innerText = `It is player ${turn}'s turn'`;
}

function setWinner(winner){
	var turnElement = document.getElementById("turn");
	turnElement.innerText = `Player ${winner} wins!`;
	var cells = document.getElementsByClassName("square");
	for(var i = 0; i < cells.length; i++){
		cells[i].removeEventListener("click", onClick);
}
}

function checkForWin() {
	var cells = document.getElementsByClassName("square");
	for (var i = 0; i < 9 ; i += 3){
		if(cells[i].innerText === cells[1+i].innerText && cells[1+i].innerText === cells[2+i].innerText){
			setWinner(cells[0+i]);	
			return true;
		}
	}
	for(var i = 0; i < 3 ; i++){
		if(cells[i].innerText === cells[3+i].innerText && cells[3+i].innerText === cells[6+i].innerText){
			setWinner(cells[i]);	
			return true;
		}
	}
	if(cells[0].innerText == cells[4].innerText && cells[4].innerText == cells[8].innerText )
		setWinner(cells[0])
	if(cells[2].innerText == cells[4].innerText && cells[4].innerText == cells[6].innerText )
		setWinner(cells[0])

	return false;
}

function onClick(event){
	event.preventDefault();
	if(!event.target.innerText){
		event.target.innerText = turn;
		if(turn === "x"){
			turn = "o";
		}
		else {
			turn = "x"
		}
		if(!checkForWin()) 
			setTurn();
		setTurn();
	}
}

var cells = document.getElementsByClassName("square");
for(var i = 0; i < cells.length; i++){
	cells[i].addEventListener("click", onClick);
}

setTurn();