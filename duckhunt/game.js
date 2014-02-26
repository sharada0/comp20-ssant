var img = new Image();
img.src = 'assets/duckhunt.png';
img.onload = "draw()";

function draw() {

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

	//Plain brown dirt road
	ctx.fillStyle="#C96A1B";
	ctx.fillRect(0,550,800,50);

	//Tree
	ctx.drawImage(img,
				0, 270, 105, 130, 0, 50, 270, 420);

	//Topsoil with grass
	ctx.drawImage(img,
				0, 715, 900, 185, 0, 310, 800, 250);

	//Dog
	ctx.drawImage(img,
				0, 0, 60, 50, 150, 380, 180, 160);


}
