
$(document).ready(initialize);

function initialize(){
	const board = new Board();
	board.createBoxes(5,5);
}

function Board(num1,num2) {
	
	this.createBoxes = function(num1, num2) {
		const board = $('<div>').addClass('board');
		const box = $('<div>').addClass('box');
		$('body').append(board);
		console.log($(board))
		for(let i = 0; i < num1; i++){
			for(let j = 0; j < num2; j++){
				$('.board').append(box);
			}
		}

	}
}
