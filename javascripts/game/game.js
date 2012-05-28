function Game(){
  this.Setup = function(){
    SetupThree();
    game.StartNewGame();		
  }
  this.Update = function(){
    game.UpdateGame();
  }
  this.Draw = function(){	
    game.DrawGame();
    requestAnimationFrame(game.Draw);		
  }

  this.StartNewGame = function(){
    setupMouse();
    setupKeyboard();
  }
  this.UpdateGame = function(){

  }
  this.DrawGame = function(){
  }
}
