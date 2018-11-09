
$(document).ready(initialize);

function initialize(){
	const board = new Board();
	board.createBoxes();
}

const Board = (name) => {
	this.name = name;
	this.createBoxes = function() {
		console.log('hello');
	}
}
