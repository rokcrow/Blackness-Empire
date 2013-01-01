engine.script = {};

engine.script.call = [];

var topo;

engine.script.call[0] = function()//CAMPO DE BATALLA
{
	engine.setMap(maptwo);
	engine.viewport.x = -2;
	engine.viewport.y = -3;
	engine.player.spriteIndex = 6;

	engine.draw();

	//LLAMA AL SONIDO DE FONDO	
	caiman = 1;
	engine.fondo(caiman);
};

engine.script.call[1] = function()
{
	engine.setMap(mapone);
	engine.viewport.x = -2;
	engine.viewport.y = 5;
	engine.player.spriteIndex = 6;

	engine.draw();


};



//EVENTO QUE SE DISPARA AL ENFRENTAR A UN ENEMY
var castor 
engine.script.call[2] = function()
{
    castor = 1;
 
	engine.enemy.stats(castor);	
 
};
