engine.enemy = {};

var enemylife = 100;
var enemypower = 100;
var atacado = 0;
var CLA = 10; //Character Life Attack
var EPA = 5; //Enemy Power Attack

engine.enemy.stats = function(castor)
{
	if(castor == 1)
	{
	  enemylife = enemylife - CLA;

	  document.getElementById('estado').innerHTML =("ENEMIGO ATACADO\n");

  	  document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");

	  atacado = 1;

	  engine.player.stats(atacado);

	  atacado = 2;

	}

	
	if(atacado == 2 && enemylife > 0)
	{
	  setTimeout(function()
	 	{
	 		enemypower = enemypower - EPA;

			document.getElementById('estado').innerHTML =("FUISTE ATACADO");

			engine.player.stats(atacado);

		},1000);
	}


	if(enemylife == 0)
	{   
 		document.getElementById('estado').innerHTML =("Enemigo destruido");
	    engine.start(mapone, 3, 3); //Envia al personaje a un nuevo mapa
	    enemylife = 100;
	    enemypower = 100;
        document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");	
    }

};