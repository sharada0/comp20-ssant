var img = new Image();
img.src = 'assets/duckhunt.png';
img.onload = "draw()";

function draw() {

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

	ctx.drawImage(img,
				0, 715, 900, 185, 0, 450, 800, 150);

}