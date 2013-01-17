engine.player = {};

engine.player.sprite = [];

engine.player.spriteIndex = 6;

engine.player.leftLeg = false;

//var yourlife = 100;
//var yourpower = 100;
//var playerexp = 0; 

/***** 
NOMBRE: player.store 
DESCRIPCIÓN: permite almacenar imagenes del personaje
*****/
engine.player.store = function(index, imgSrc)
{
	var sprite = [new Image(), false];

	sprite[0].src = imgSrc;
	sprite[0].onload = function()
	{
		sprite[1] = true;
	}
 
	engine.player.sprite[index] = sprite;
};

/***** 
NOMBRE: player.retrieve
DESCRIPCIÓN: permite devolver la imagen del personaje que se está utilizando
*****/
engine.player.retrieve = function(index)
{
	return engine.player.sprite[index][0];
};

 /***** 
NOMBRE: player.allLoaded
DESCRIPCIÓN: permite corroborar si están todas las imágenes cargadas.
*****/
engine.player.allLoaded = function()
{
	var i;

	for(i=0; i<12; i++)
	{
		if(engine.player.sprite[i][1] === false)
		{
			return false;
		}
	}

	return true;
};


/***** 
NOMBRE: player.calcLoc
DESCRIPCIÓN: permite definir la posición de la cámara en el mapa.
*****/
engine.player.calcLoc = function()
{
	var character = 
	{
		width:  Math.ceil(engine.player.sprite[0][0].width),
		height: Math.ceil(engine.player.sprite[0][0].height)
	};

	var screen = 
	{
		width:  engine.screen.width,
		height: engine.screen.height
	};

	var x = (screen.width  / 2) - (character.width / 2);
	var y = (screen.height / 2) + 8 - (character.height);

	return {left: x, top: y};
};

/***** 
NOMBRE: player.draw
DESCRIPCIÓN: permite dibujar al personaje
*****/
engine.player.draw = function()
{
	var loc = engine.player.calcLoc();

	engine.handle.drawImage(engine.player.sprite[engine.player.spriteIndex][0], loc.left, loc.top);
};

/***** 
NOMBRE: player.move
DESCRIPCIÓN: permite mover al personaje.
*****/
engine.player.move = function(direction)
{
	var index, x, y;

	index = x = y = 0;

	engine.keyboard.canInput = false;


	switch(direction)
	{
		case 'up':    	 index = 0;  y =  1; break;
		case 'right':    index = 3;  x = -1; break;
		case 'left':     index = 9;  x =  1; break;
		case 'down':     index = 6;  y = -1; break;
	}

	var toX = engine.viewport.x + (engine.screen.tilesX / 2 - 0.5) - x;
	var toY = engine.viewport.y + (engine.screen.tilesY / 2 - 0.5) - y;

	

	if(engine.currentMap[toY] &&
	   engine.currentMap[toY][toX] &&
	   engine.currentMap[toY][toX].item &&
	   (engine.currentMap[toY][toX].item == 2 ||
	   engine.currentMap[toY][toX].item == 7 ||
	   engine.currentMap[toY][toX].item == 6))
	{
		engine.keyboard.canInput = true;
	}
	else
	{
		engine.viewport.playerOffsetX = x * 5;
		engine.viewport.playerOffsetY = y * 5;

		setTimeout(engine.player.animate, 100);
		setTimeout(engine.player.reset, 200);
	}

	engine.player.spriteIndex = index;
	engine.draw();

};

/***** 
NOMBRE: player.animate 
DESCRIPCIÓN: permite animar al personaje si se quisiera activar el modo gráfico
*****/
engine.player.animate = function()
{
	var x, y

	x = y = 0;

	switch(engine.player.spriteIndex)
	{
		case 0:   y =  11; break;
		case 3:   x = -11; break;
		case 6:   y = -11; break;
		case 9:   x =  11; break;
	}

	engine.player.spriteIndex += (engine.player.leftLeg === true) ? 1 : 2;

	engine.player.leftLeg = !engine.player.leftLeg;

	engine.viewport.playerOffsetX = x;
	engine.viewport.playerOffsetY = y;

	engine.draw();
};

/***** 
NOMBRE: player.reset
DESCRIPCIÓN: permite reiniciar el personaje una y otra vez para cargar las imagenes correctass.
*****/
engine.player.reset = function()
{
	var index, x, y;

	x = engine.viewport.x;
	y = engine.viewport.y;
	index = 0;

	switch(engine.player.spriteIndex)
	{
		case 1:
		case 2:  y--;  index = 0;  break;

		case 4:
		case 5:  x++;  index = 3;  break;

		case 7:
		case 8:  y++;  index = 6;  break;

		case 10:
		case 11:  x--;  index = 9;  break;
	}

	engine.viewport.x = x;
	engine.viewport.y = y;

	engine.keyboard.canInput = true;

	engine.viewport.playerOffsetX = 0;
	engine.viewport.playerOffsetY = 0;

	engine.player.spriteIndex = index;

	engine.draw();


	var tilesX = x + (engine.screen.tilesX / 2 - 0.5);
	var tilesY = y + (engine.screen.tilesY / 2 - 0.5);

	if(engine.currentMap[tilesY] &&
	   engine.currentMap[tilesY][tilesX] &&
	   engine.currentMap[tilesY][tilesX].onenter != undefined)
	{
		engine.script.call[engine.currentMap[tilesY][tilesX].onenter]();
	}
};

/***** 
NOMBRE:player.activate 
DESCRIPCIÓN: permite iniciar activar situaciones disparadas por los eventos.
*****/
engine.player.activate = function()
{
	var x = engine.viewport.x + (engine.screen.tilesX / 2 - 0.5);
	var y = engine.viewport.y + (engine.screen.tilesY / 2 - 0.5);

	switch(engine.player.spriteIndex)
	{
		case 0: y--; break;
		case 3: x++; break;
		case 6: y++; break;
		case 9: x--; break;
	}	
	

	if(engine.currentMap[y] &&
	   engine.currentMap[y][x] &&
	   engine.currentMap[y][x].onactivate != undefined)
	{
		engine.script.call[engine.currentMap[y][x].onactivate]();
	}
};

/***** 
NOMBRE: player.heal
DESCRIPCIÓN: permite curar al personaje.
*****/
engine.player.heal = function()
{
	var x = engine.viewport.x + (engine.screen.tilesX / 2 - 0.5);
	var y = engine.viewport.y + (engine.screen.tilesY / 2 - 0.5);

	switch(engine.player.spriteIndex)
	{
		case 0: y--; break;
		case 3: x++; break;
		case 6: y++; break;
		case 9: x--; break;
	}	
	

	if(engine.currentMap[y] &&
	   engine.currentMap[y][x] &&
	   engine.currentMap[y][x].onheal != undefined)
	{
		engine.script.call[engine.currentMap[y][x].onheal]();
	}
};

