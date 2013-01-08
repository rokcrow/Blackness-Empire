engine.warzone = {};

var yourlife   = 100;
var yourpower  = 100;

var enemylife  = 100;
var enemypower = 100;

var CLD = 2; //Character Life Damage
var CPA = 3; //Character Power Attack

var ELD = 10; //Enemy Life Damage
var EPA = 5; //Enemy Power Attack

var hitornot;

engine.warzone.stats = function(EUA)
{
	//Se genera un numero random entre 0 y 1.
	//Si es 0, falla el ataque. Si es 1, ataca.
	hitornot = Math.floor(Math.random()*2);
	
	switch(EUA)
	{  	
		case 1:

			 if(yourlife > 0)
			 {
			 	if(hitornot == 1)
			 	{
  				  document.getElementById('estado').innerHTML =("ENEMIGO ATACADO\n");

			 	  enemylife = enemylife - ELD;//Se reduce Enemy Life

			  	  document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");

				  yourpower = yourpower - CPA;//Se reduce CPA
			 	
			 	  document.getElementById('player').innerHTML =("Vida: "+yourlife+" %" + "\n\nEnergia: "+yourpower+" %");
			 	}
			 	else
  				  document.getElementById('estado').innerHTML =("PERSONAJE FALLA\n");

			 }

		break;

		case 0: //Si EUA es 0, enemy puede atacar y...

			//si aun le queda vida, hace el intento
			if(enemylife > 0)
			{
			  if(hitornot == 1)
			  {	
			    document.getElementById('estado').innerHTML =("PERSONAJE ATACADO");
  
		 		yourlife = yourlife - CLD;
				
				document.getElementById('player').innerHTML =("Vida: "+yourlife+" %" + "\n\nEnergia: "+yourpower+" %");

				enemypower = enemypower - EPA;
			  	
			  	document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");
			  }

			  else
			  	document.getElementById('estado').innerHTML =("ENEMIGO FALLA");

			}

		break;
	}

	  if(enemylife == 0)
		{   
	 		document.getElementById('estado').innerHTML =("Enemigo destruido");
		    setTimeout(engine.start(mapone, 3, 3) ,3000); //Envia al personaje a un nuevo mapa
		    enemylife = 100;
		    enemypower = 100;
	        document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");	
	    }

	  if(yourlife == 0)
		{   
	 		document.getElementById('estado').innerHTML =("Has perdido");
		    setTimeout(engine.start(mapone, 19, 10) ,3000); //Pierde, se va a otro lado...
	    }
};