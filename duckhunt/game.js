var img = new Image();
img.src = 'assets/duckhunt.png';
img.onload = function() {

	draw();

}

function draw() {

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

	ctx.drawImage(img,
				0, 715, 900, 185, 0, 600, 800, 165);

}