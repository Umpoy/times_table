
$(document).ready(initialize);

function initialize(){
	const board = new Board();
	board.createBoxes(5,5);
}

function Board(num1,num2) {
	
	this.createBoxes = function(num1, num2) {
		// const div = $('<div>');
		const timesBoard = $('<div>').addClass('board');
		const box = $('<div>').addClass('box');
		$('body').append(timesBoard);
		let count = 0;
		for(let i = 0; i < num1; i++){
			for(let j = 0; j < num2; j++){
				count++
				box.html(count)
				$('.board').append(box);
				
			}
		}
		console.log(count);
	}
}
