engine.warzone = {};

var userlife   = 10;
var userpower  = 10;

var enemylife  = 10;
var enemypower = 10;

var userdamage = 1; //Character Life Damage
var userpowerattack = 1; //Character Power Attack

var enemydamage = 1; //Enemy Life Damage
var enemypowerattack = 1; //Enemy Power Attack

var hitornot;
var enemydeads = 0;

var lifecharge;
var diaryparts = 0; 

var atacauser, atacaenemy, aux, abeja, caballo, oso, vaca;
var bufalo;
var ganso, lemur;

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
		  
		  if(userlife < 10)
		  {
		  	/*lifecharge chequea cuanto es lo que falta 
		  	para que la vida llegue a 100 y eso es
		  	lo que healea*/
		
		  	lifecharge = 10 - userlife;
		
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
			 	//atacauser = 6;
				//engine.storyteller(atacauser);


			 	 document.getElementById('estado').innerHTML =("Enemigo atacado");

			 	  enemylife = enemylife - enemydamage;//Se reduce Enemy Life


				//EL ENEMIGO AHORA TIENE X PUNTOS
				  engine.storyteller(6)
				  setTimeout(function()
				{
				   engine.ayuda(enemylife);

			 	  document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");

				},2000);
				  
				  

				
			  userpower = userpower - userpowerattack;//Se reduce userpowerattack
	
			  //AHORA TU TIENES X PUNTOS DE PODER
			 	 
			/*	  setTimeout(function()
				{
					engine.ayuda(userpower);

				},7000);
			*/
			 	  document.getElementById('player').innerHTML =("Vida: "+userlife+" %" + "\n\nEnergia: "+userpower+" %");
			 	}
			 	else
			 		{//PERSONAJE FALLA
			 			fail = 10;
			 			engine.storyteller(fail);
			 		
  				  document.getElementById('estado').innerHTML =("PERSONAJE FALLA\n");
					}
			 }

		break;

		case 0: /*Si EUA es 0, enemy puede atacar y...

			   si aun le queda vida, hace el intento*/
			if(enemylife > 0)
			{
			  if(hitornot == 1)
			  {	
			  	//HAS SIDO ATACADO
			  	//atacaenemy = 11;
				//engine.storyteller(atacaenemy);
			    document.getElementById('estado').innerHTML =("PERSONAJE ATACADO");
  

  				

		 		userlife = userlife - userdamage;
				

				//HAS PERDIDO PUNTOS DE VIDA
				engine.storyteller(12);
 				setTimeout(function()
				{
					engine.ayuda(userlife);
				},2000);
				document.getElementById('player').innerHTML =("Vida: "+userlife+" %" + "\n\nEnergia: "+userpower+" %");

				//ENEMY STATS
				enemypower = enemypower - enemypowerattack;
				/*vaca = 13;
			   setTimeout(function()
				{
					engine.storyteller(vaca);

				},10000);*/
			  	document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");
			  
			  }

			  else

			  	{//ENEMY FALLA
			 			fail = 14;
			 			engine.storyteller(fail);
			 	document.getElementById('estado').innerHTML =("ENEMIGO FALLA");

					}

			}

		break;
	}

	  if(enemylife == 0)
		{   
			//ENEMIGO DESTRUIDO
			bufalo = 15;
		    engine.storyteller(bufalo);

			setTimeout(function()
			{
				engine.storyteller(11);
			},12000);
	 		document.getElementById('estado').innerHTML =("Enemigo destruido");
		    
		    enemydeads++;

	 		switch(enemydeads)
	 		{
	 			case 1:
				    
//NARRACION 2, CAP 1

				
					
		  	 	engine.efects(2);


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

		    enemylife = 10;
		    enemypower = 10;
	        document.getElementById('enemigo1').innerHTML =("Vida: "+enemylife+" %" + "\n\nEnergia: "+enemypower+" %");	
	    }

	  if(userlife == 0)
		{   

			//HAS PERDIDO
		    engine.storyteller(16);

	 		document.getElementById('estado').innerHTML =("Has perdido");
		    setTimeout(engine.start(mapone, -3, -3) ,3000); //Pierde, se va a otro lado...
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