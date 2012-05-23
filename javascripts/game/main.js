//COPYRIGHT 2012 NIKHIL SURESH
var gameCanvas, ctx;

function main(){
        gameCanvas = document.getElementById("gameCanvas");
        ctx = gameCanvas.getContext("webgl");

	game = new Game();
	game.Setup();
	
	setInterval(game.Update, 960/FPS);
	game.Draw();
}

var FPS = 60;
