engine.script = {};

engine.script.call = [];

var topo;

engine.script.call[0] = function()
{
	engine.setMap(maptwo);
	engine.viewport.x = -2;
	engine.viewport.y = 1;
	engine.player.spriteIndex = 6;

	engine.draw();

		
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


engine.script.call[2] = function()
{
	alert("No dice Nada");
	
};