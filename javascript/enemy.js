engine.enemy = {};

var enemylife = 100;
var enemypower = 100;
var atacado = 0;

engine.enemy.stats = function(castor)
{
	if(castor == 1)
	{
	  enemylife = enemylife - 10;

	  document.getElementById('estado').innerHTML =("ENEMIGO ATACADO\n");

  	  document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");

	  atacado = 1;

	  engine.player.stats(atacado);

	  atacado = 2;

	}

	
	if(atacado == 2 && enemylife >= 0)
	{
	  setTimeout(function()
	 	{
	 		enemypower = enemypower - 5;

			document.getElementById('estado').innerHTML =("FUISTE ATACADO");

			engine.player.stats(atacado);

		},1000);
	}

	
	if(enemylife <= 0)
	{
		document.getElementById('estado').innerHTML =("Enemigo destruido");
		castor = 0;

	}

};