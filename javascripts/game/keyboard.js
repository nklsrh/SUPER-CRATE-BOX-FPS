var W = false, A = false, S = false, D = false, F = false, P = false, N = false; B = false;
var SHIFT = false, ESCAPE = false, SPACE = false, ENTER = false;
var UP = false, DOWN = false, LEFT = false, RIGHT = false;

function setupKeyboard(){
}
	//
function gameQueryKeyboard(){
	if(jQuery.gameQuery.keyTracker[87]){ //	W
		W = true;
	}
	else
	{
		W = false;
	}

	if(jQuery.gameQuery.keyTracker[83]){ //	S
		S = true;
	}
	else
	{
		S = false;
	}

	if(jQuery.gameQuery.keyTracker[65]){ // A
		A = true;
	}
	else
	{
		A = false;
	}

	if(jQuery.gameQuery.keyTracker[68]){ // D
		D = true;
	}
	else
	{
		D = false;
	}
	
	if(jQuery.gameQuery.keyTracker[66]){ // B
		B = true;
	}
	else
	{
		B = false;
	}
	
	if(jQuery.gameQuery.keyTracker[27]){ // ESCAPE
		ESCAPE = true;
	}
	else
	{
		ESCAPE = false;
	}
	
	if(jQuery.gameQuery.keyTracker[27]){ // N
		N = true;
	}
	else
	{
		N = false;
	}
	
	if(jQuery.gameQuery.keyTracker[70]){ // F
		F = true;
	}
	else
	{
		F = false;
	}
	
	if(jQuery.gameQuery.keyTracker[80]){ // P
		P = true;
	}
	else
	{
		P = false;
	}

	if(jQuery.gameQuery.keyTracker[16]){ // SHIFT
		SHIFT = true;
	}
	else
	{
		SHIFT = false;
	}
	
	if(jQuery.gameQuery.keyTracker[38]){ // UP
		UP = true;
	}
	else
	{
		UP = false;
	}
	
	if(jQuery.gameQuery.keyTracker[40]){ // DOWN
		DOWN = true;
	}
	else
	{
		DOWN = false;
	}
	
	if(jQuery.gameQuery.keyTracker[37]){ // LEFT
		LEFT = true;
	}
	else
	{
		LEFT = false;
	}
	
	if(jQuery.gameQuery.keyTracker[39]){ // RIGHT
		RIGHT = true;
	}
	else
	{
		RIGHT = false;
	}
	
	if(jQuery.gameQuery.keyTracker[32]){ // SPACE
		SPACE = true;
	}
	else
	{
		SPACE = false;
	}
	
	if(jQuery.gameQuery.keyTracker[13]){ // ENTER
		ENTER = true;
	}
	else
	{
		ENTER = false;
	}
}

function clearAllKeys(){
W = false; A = false; S = false; D = false; F = false; P = false; N = false; B = false;
SHIFT = false; ESCAPE = false; SPACE = false; ENTER = false;
UP = false; DOWN = false; LEFT = false; RIGHT = false;
}


