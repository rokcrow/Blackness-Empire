engine.keyboard = {};

engine.keyboard.canInput = false;


var topo = 2;
var activar;
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
				break;

			case engine.keyboard.getValue('down'):
				engine.player.move('down');
			    break;

			case engine.keyboard.getValue('left'):
				engine.player.move('left');
				break;

			case engine.keyboard.getValue('right'):
				engine.player.move('right');
				break;

			case engine.keyboard.getValue('atack'):

				engine.player.activate();
				break;

			case engine.keyboard.getValue('heal'):
				engine.player.heal();
				break;

			case engine.keyboard.getValue('jugar'):
				//alert("jugar");
			    
//INTRODUCCION }**********
			    engine.repro1.innerHTML = '<audio autoplay controls> <source src = "test.mp3"> </audio>';
			    activar = 1;

			    setTimeout(
			    	function()
			    	{  
			    	   if (activar == 1) 
			    	   {

	//NARRACION CAP. 1 ************
			 			   engine.repro1.innerHTML = '<audio autoplay> <source src = "Sounds/Narracion1.mp3"> </audio>';
			    	   }
			    	},10000);
			    

				break;

			case engine.keyboard.getValue('recuperar'):
				alert("recuperar");
				break;

			case engine.keyboard.getValue('instrucciones'):
				alert("instrucciones");
				break;

			case engine.keyboard.getValue('creditos'):
				alert("creditos");
				break;

			case engine.keyboard.getValue('salir'):
				alert("salir");
				break;
		} 

		engine.draw();
	}
};



