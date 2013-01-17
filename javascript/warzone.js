engine.warzone = {};

var userlife   = 100;
var userpower  = 100;

var enemylife  = 100;
var enemypower = 100;

var userdamage = 2; //Character Life Damage
var userpowerattack = 3; //Character Power Attack

var enemydamage = 10; //Enemy Life Damage
var enemypowerattack = 5; //Enemy Power Attack

var hitornot;
var enemydeads = 0;

var lifecharge;
var diaryparts = 0; 

var ataca, aux, abeja;


/***** 
NOMBRE: stats
DESCRIPCIÓN: permite manejar la batalla entre un enemigo y el usuario.
*****/
engine.warzone.stats = function(EUA, heal)
{
	/*Se genera un numero random entre 0 y 1.
	Si es 0, falla el ataque. Si es 1, ataca.*/

	hitornot = Math.floor(Math.random()*2);
	
	switch(heal)
	{//si heal es 1, significa que el personaje pidio healearse
		case 1:
		  
		  if(userlife < 100)
		  {
		  	/*lifecharge chequea cuanto es lo que falta 
		  	para que la vida llegue a 100 y eso es
		  	lo que healea*/
		
		  	lifecharge = 100 - userlife;
		
		  	userlife = userlife + lifecharge;
	    
	    	document.getElementById('player').innerHTML =("Vida: "+userlife+" %" + "\n\nEnergia: "+userpower+" %");
		  }
		  
		  else
	    	document.getElementById('player').innerHTML =("Vida: "+userlife+" %" + "\n\nEnergia: "+userpower+" %");

	    break;
	}

	switch(EUA)
	{  	
		case 1:

			 if(userlife > 0)
			 {
			 	if(hitornot == 1)
			 	{
			 		//HAS ATACADO
			 	ataca = 6;

				engine.storyteller(ataca);

			 	  enemylife = enemylife - enemydamage;//Se reduce Enemy Life


				
				  aux = 7;
				  //EL ENEMIGO AHORA TIENE
				  setTimeout(function()
				{
					engine.storyteller(aux);
				},10000);
				  
				  
				  document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");

				  userpower = userpower - userpowerattack;//Se reduce userpowerattack
			 	
			 	  document.getElementById('player').innerHTML =("Vida: "+userlife+" %" + "\n\nEnergia: "+userpower+" %");
			 	}
			 	else
  				  document.getElementById('estado').innerHTML =("PERSONAJE FALLA\n");

			 }

		break;

		case 0: /*Si EUA es 0, enemy puede atacar y...

			   si aun le queda vida, hace el intento*/
			if(enemylife > 0)
			{
			  if(hitornot == 1)
			  {	
			    document.getElementById('estado').innerHTML =("PERSONAJE ATACADO");
  
		 		userlife = userlife - userdamage;
				
				document.getElementById('player').innerHTML =("Vida: "+userlife+" %" + "\n\nEnergia: "+userpower+" %");

				enemypower = enemypower - enemypowerattack;
			  	
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
		    
		    enemydeads++;

	 		switch(enemydeads)
	 		{
	 			case 1:
				    setTimeout(function(){engine.start(mapone, 3, 3);}, 3000); //Envia al personaje a un nuevo mapa
				break;

				case 2:
				    setTimeout(function(){engine.start(mapthree, 2, -1);}, 3000); //Envia al personaje a un nuevo mapa
				break;

				case 3:
				    setTimeout(function(){engine.start(mapsix, 1, 2);}, 3000); //Envia al personaje a un nuevo mapa
				break;

				case 4:
				    setTimeout(function(){engine.start(mapsix, 1, 4);}, 3000);
				break;

					case 5:
					    setTimeout(function(){engine.start(mapfive, -1, 3);}, 3000);
					    diaryparts++;
					break;

					case 6:
						setTimeout(function(){engine.start(mapfive, 0, 4);}, 3000);
					    diaryparts++;
					break;
						
					case 7:
						setTimeout(function(){engine.start(mapfive, 1, 4);}, 3000);
					    diaryparts++;
					    
					    engine.warzone.diary(diaryparts);
					break;
					
					case 8:
						setTimeout(function(){engine.start(mapeight, 0, 6);}, 3000);
					break;
			}

		    enemylife = 100;
		    enemypower = 100;
	        document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");	
	    }

	  if(userlife == 0)
		{   
	 		document.getElementById('estado').innerHTML =("Has perdido");
		    setTimeout(engine.start(mapone, 19, 10) ,3000); //Pierde, se va a otro lado...
	    }
};

/***** 
NOMBRE: diary
DESCRIPCIÓN: Se ejecuta para verificar si todas las partes del diario que busca el usuario han sido encontradas.
*****/
engine.warzone.diary = function(diaryparts)
{
	var key;

	if (diaryparts == 3) 
	{
		key = 1;//sin relevancia

		setTimeout(function(){engine.start(mapthree, 2, 4);}, 3000);

   		document.getElementById('storyteller').innerHTML = ("Antares lee el diario.... blah blah");	
	}
};