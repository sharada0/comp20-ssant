var img = new Image();
img.src = 'assets/duckhunt.png';
img.onload = "draw()";

function draw() {

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

	// Blue sky
	ctx.fillStyle="#87CEEB";
	ctx.fillRect(0,0,600,800);

	// Plain brown dirt road
	ctx.fillStyle="#C96A1B";
	ctx.fillRect(0,550,800,50);

	// Tree
	ctx.drawImage(img,
				0, 270, 105, 130, 0, 50, 270, 420);

	// Topsoil with grass
	ctx.drawImage(img,
				0, 715, 900, 185, 0, 310, 800, 250);

	// Dog
	ctx.drawImage(img,
				0, 0, 60, 50, 150, 380, 180, 160);

	// Birds (5)
	ctx.drawImage(img,
				210, 155, 33, 33, 250, 70, 80, 80);
	ctx.drawImage(img,
				42, 155, 33, 33, 350, 170, 80, 80);
	ctx.drawImage(img,
				300, 120, 33, 33, 500, 100, 80, 80);
	ctx.drawImage(img,
				210, 117, 36, 33, 680, 40, 80, 80);
	ctx.drawImage(img,
				82, 200, 33, 33, 610, 230, 80, 80);

}
