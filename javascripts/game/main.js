//COPYRIGHT 2012 NIKHIL SURESH
var gameCanvas, ctx;

function main(){

	game = new Game();
	game.Setup();
	
	setInterval(game.Update, 960/FPS);
	game.Draw();
}

var FPS = 60;
