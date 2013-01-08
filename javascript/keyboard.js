engine.keyboard = {};

engine.keyboard.canInput = false;


var topo = 2;

engine.keyboard.getValue = function(key)
{
	switch(key)
	{
		case 'up': 	  	  return 38;
		case 'down':  	  return 40;
		case 'left':  	  return 37;
		case 'right':     return 39;
		case 'space':     return 32;
	}
};
  
engine.keyboard.parseInput = function(event)
{
	if(engine.keyboard.canInput === true)
	{	
		switch(event.keyCode)
		{
			case engine.keyboard.getValue('up'):
				engine.player.move('up');
				engine.efecto(topo);
				break;

			case engine.keyboard.getValue('down'):
				engine.player.move('down');
				engine.efecto(topo);
			    break;

			case engine.keyboard.getValue('left'):
				engine.player.move('left');
				engine.efecto(topo);
				break;

			case engine.keyboard.getValue('right'):
				engine.player.move('right');
				engine.efecto(topo);
				break;

			case engine.keyboard.getValue('space'):
				engine.player.activate();
				break;
		} 

		engine.draw();
	}
};



