
var engine = {};

engine.repro1 = document.getElementById('repro1');
engine.repro2 = document.getElementById('repro2');
engine.canvas = document.getElementById('canvas');
engine.handle = engine.canvas.getContext('2d');

//AQUI SE REPRODUCEN TODOS LOS SONIDOS....
engine.efecto = function(topo)
{ 
	switch(topo) 
	{
		case 1: 	
		 	//engine.repro1.innerHTML = '<audio autoplay controls> <source src = "Sounds/Narracion1.mp3"> </audio>';
			break;
		case 2:
			//engine.repro2.innerHTML = '<audio autoplay controls> <source src = "Sounds/CaminarArena.mp3"> </audio>';
			break;				
	}	
};

engine.fondo = function(caiman)
{
	switch(caiman)
	{
		case 1:
		//engine.repro1.innerHTML = '<audio autoplay controls> <source src = "Sounds/music2.mp3"> </audio>';
		break;
	}
};


//HASTA AQUI...


engine.animalia = function(topo)
{
	if(engine.player.spriteIndex == 6)
	{
		alert(topo);
	}
	
};

engine.draw = function()
{
	if (engine.tile.allLoaded() === false) 
	{
		setTimeout(engine.draw, 100);
	}

	else 
	{
		engine.map.draw();
		engine.player.draw();
	}
};


engine.currentMap = null;

engine.setMap = function(mapData)
{
	engine.currentMap = mapData;
};



engine.start = function(mapData, x, y, tucan)
{
	
	engine.viewport.x = x;
	engine.viewport.y = y;

	engine.tile.store(0, 'imagenes/tile_black.png');
	engine.tile.store(1, 'imagenes/tile_grass.png');
	engine.tile.store(2, 'imagenes/tile_rock.png');
	engine.tile.store(3, 'imagenes/ladderdown.png');
	engine.tile.store(4, 'imagenes/ladderup.png');
	engine.tile.store(5, 'imagenes/cave.png');
	engine.tile.store(6, 'imagenes/sign.png');	
	engine.tile.store(7, 'imagenes/enemy.png');

 
	engine.setMap(mapData);

	engine.player.store(0, 'imagenes/scientist_n0.png');
	engine.player.store(1, 'imagenes/scientist_n1.png');
	engine.player.store(2, 'imagenes/scientist_n2.png');


	engine.player.store(3, 'imagenes/scientist_e0.png');
	engine.player.store(4, 'imagenes/scientist_e1.png');
	engine.player.store(5, 'imagenes/scientist_e2.png');


	engine.player.store(6, 'imagenes/scientist_s0.png');
	engine.player.store(7, 'imagenes/scientist_s1.png');
	engine.player.store(8, 'imagenes/scientist_s2.png');


	engine.player.store(9,  'imagenes/scientist_w0.png');
	engine.player.store(10, 'imagenes/scientist_w1.png');
	engine.player.store(11, 'imagenes/scientist_w2.png');

	engine.draw();

	engine.efecto(1);

	engine.keyboard.canInput = true;

};
