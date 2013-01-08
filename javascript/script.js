engine.script = {};

engine.script.call = [];

var topo, comadreja;

comadreja = 0;
topo = 0;

engine.script.call[0] = function()//CAMPO DE BATALLA
{
	if (comadreja < 1) 
	{
		engine.setMap(maptwo);
		engine.viewport.x = -2;
		engine.viewport.y = -3;
		engine.player.spriteIndex = 6;

		engine.draw(); 

		//LLAMA AL SONIDO DE FONDO	
		caiman = 1;
		engine.fondo(caiman);
	}
	
	comadreja = 1;
	/*Comadreja se usa para que cuando el personaje termine
	de luchar contra los enemigos del desierto, al
    pasar nuevamente por la zona donde se encuentran
    los enemigos, no se active. */
};


//EVENTO QUE SE DISPARA AL ENFRENTAR A UN ENEMY
var EUA; //Enemy Under Attack
engine.script.call[1] = function()
{
    EUA = Math.floor(Math.random()*2);
 
	engine.warzone.stats(EUA);	
 
};

engine.script.call[2] = function()//MONOCEROTIS
{
	engine.setMap(mapthree);
	engine.viewport.x = 5;
	engine.viewport.y = -4;
	engine.player.spriteIndex = 6;

	engine.draw();

};

engine.script.call[3] = function()//CATEDRAL
{
	if(topo < 1)
	{
		engine.setMap(mapfour);
		engine.viewport.x = 0;
		engine.viewport.y = 4;
		engine.player.spriteIndex = 6;

		engine.draw();

	
		setTimeout(function(){engine.start(mapthree, 2, -1)}, 5000);
	}

	topo = 1;//Si topo es 1, indica que todavia no se ha
	//rescatado a Adhara. Al convertirse en 0, indica que
	//ya se rescato y puede entrar a la catral.


};

engine.script.call[4] = function()//SOTANO
{
	engine.setMap(mapfive);
	engine.viewport.x = -3;
	engine.viewport.y = -3;
	engine.player.spriteIndex = 6;

	engine.draw();
};
