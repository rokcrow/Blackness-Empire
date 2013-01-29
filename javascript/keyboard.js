engine.keyboard = {};

engine.keyboard.canInput = false;


var topo = 2;
var activar;
var north, south, east, west;
var ataca;
var fondo;
/***** 
NOMBRE: getValue
DESCRIPCIÓN: permite obtener un valor ingresado por teclado
*****/
engine.keyboard.getValue = function(key)
{ 
	switch(key)
	{
		case 'up': 	  	  return 38;
		case 'down':  	  return 40;
		case 'left':  	  return 37;
		case 'right':     return 39;

		case 'atack':     return 32;
		case 'heal':      return 13;

		case 'jugar':      		return 49;
		case 'recuperar':      	return 50;
		case 'instrucciones':   return 51;
		case 'creditos':     	return 52;
		case 'salir':      		return 53;
	}
};
  /***** 
NOMBRE: parse Input
DESCRIPCIÓN: permite captar el valor que se ingresa por teclado
*****/
engine.keyboard.parseInput = function(event)
{
	if(engine.keyboard.canInput === true)
	{	
		switch(event.keyCode)
		{
			case engine.keyboard.getValue('up'):
				engine.player.move('up');
				engine.player.against();
				north = 1;
				engine.storyteller(north);
				break;

			case engine.keyboard.getValue('down'):
				engine.player.move('down');
				engine.player.against();
				south = 2;
				engine.storyteller(south);
			    break;

			case engine.keyboard.getValue('left'):
				engine.player.move('left');
				engine.player.against();
				west = 3;
				engine.storyteller(west);
				break;

			case engine.keyboard.getValue('right'):
				engine.player.move('right');
				engine.player.against();
				east = 4;
				engine.storyteller(east);
				break;

			case engine.keyboard.getValue('atack'):

				engine.player.activate();
				engine.efects(3);
				break;

			case engine.keyboard.getValue('heal'):
				engine.player.heal();
				break;

			case engine.keyboard.getValue('jugar'):
				//alert("jugar");
			    
//INTRODUCCION }**********
			    //engine.repro2.innerHTML = '<audio autoplay> <source src = "test.mp3"> </audio>';
			    activar = 8;

			   engine.storyteller(activar);
			    

				break;

			case engine.keyboard.getValue('recuperar'):
				alert("recuperar");
				break;

			case engine.keyboard.getValue('instrucciones'):
			engine.instrucciones();
				break;

			case engine.keyboard.getValue('creditos'):
				engine.creditos();
				break;

			case engine.keyboard.getValue('salir'):
				alert("ADIOS");
				break;
		} 

		engine.draw();
	}
};



