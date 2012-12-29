engine.keyboard = {};

engine.keyboard.canInput = false;

engine.keyboard.getValue = function(key)
{
	switch(key)
	{
		case 'up': 	  return 38;
		case 'down':  return 40;
		case 'left':  return 37;
		case 'right': return 39;
		case 'a':     return 65;
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
				engine.efecto(2);
				break;

			case engine.keyboard.getValue('down'):
				engine.player.move('down');
				engine.efecto(2);
			    break;

			case engine.keyboard.getValue('left'):
				engine.player.move('left');
				engine.efecto(2);
				break;

			case engine.keyboard.getValue('right'):
				engine.player.move('right');
				engine.efecto(2);
				break;

			case engine.keyboard.getValue('a'):
				engine.player.activate();
				break;
		}

		engine.draw();
	}
};



