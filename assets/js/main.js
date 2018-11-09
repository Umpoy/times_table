
$(document).ready(initialize);

function initialize(){
	const board = new Board();
	board.createBoxes();
}

function Board() {
	this.createBoxes = function() {
		console.log('hello');
	}
}
