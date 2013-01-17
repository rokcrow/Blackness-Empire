engine.script = {};

engine.script.call = [];

var EUA; //Enemy Under Attack
var topo = 0;
var comadreja = 0;
var catedral = 0;
var multitud = 0; 
var mercado = 0; 
var salvadhara; 
var heal = 0;
var church = 0;
var monocerotis = 0;
var ardilla;

var cofre1, cofre2 = 1, cofre3;

/***** 
NOMBRE: call[0]
DESCRIPCIÓN: función que llama al mapa del campo de batalla cuando se realiza una pelea.
*****/
engine.script.call[0] = function()
{
	if (comadreja < 1) 
	{
		engine.setMap(maptwo);
		engine.viewport.x = -2;
		engine.viewport.y = -3;
		engine.player.spriteIndex = 6;

		engine.draw(); 

		//ENEMIGO SALVAJE HA APARECIDO	
		caiman = 5;
		engine.storyteller(caiman);
		/*if(caiman == 5)
		{   //VOZ DE ENEMY
			ardilla = 6;
			engine.storyteller(ardilla);

			if(ardilla == 6)
			{	//STAT DEL ENEMY
				gato = 7;
		    	engine.storyteller(ardilla);

			}
		}*/
		

	}
	
	comadreja = 1;
	/*Comadreja se usa para que cuando el personaje termine
	de luchar contra los enemigos del desierto, al
    pasar nuevamente por la zona donde se encuentran
    los enemigos, no se active. */
};


/***** 
NOMBRE: call[1]
DESCRIPCIÓN: evento que se dispara a enfrentar a algún enemigo
*****/

engine.script.call[1] = function()
{
    EUA = Math.floor(Math.random()*2);
    heal = 0;
	engine.warzone.stats(EUA, heal);	
 
};

/***** 
NOMBRE: call[2]
DESCRIPCIÓN: evento que se permite ingresar a la ciudad de Monocerotis.
*****/

engine.script.call[2] = function()
{
	if(monocerotis < 1)
	{
		engine.setMap(mapthree);
		engine.viewport.x = 5;
		engine.viewport.y = -4;
		engine.player.spriteIndex = 6;

		engine.draw();
	}

	if(monocerotis > 0)
	{//SI MONOCEROTIS ES 1, PUEDE ENTRAR A LA CIUDAD DESDE FORNAX
		engine.setMap(mapthree);
		engine.viewport.x = 6;
		engine.viewport.y = 6;
		engine.player.spriteIndex = 6;

		engine.draw();	
	}
};


/***** 
NOMBRE: call[3]
DESCRIPCIÓN: evento que se permite ingresar a la iglesia catedral.
*****/
engine.script.call[3] = function()
{
	if(topo < 1)
	{
		engine.setMap(mapfour);
		engine.viewport.x = 0;
		engine.viewport.y = 4;
		engine.player.spriteIndex = 6;

		engine.draw();

		if(church < 1)
		{
			setTimeout(
			function()
		    {  
		 	  engine.start(mapthree, 2, -1)
		 	}, 10000);
		catedral = 1;
		}		
    }

	topo = 1;//Si topo es 1, indica que todavia no se ha
	//rescatado a Adhara. Al convertirse en 0, indica que
	//ya se rescato y puede entrar a la catedral.


};

/***** 
NOMBRE: call[4]
DESCRIPCIÓN: evento que se permite ingresar al sótano de la iglesia.
*****/
engine.script.call[4] = function()
{
	engine.setMap(mapfive);
	engine.viewport.x = -3;
	engine.viewport.y = -3;
	engine.player.spriteIndex = 6;

	engine.draw();
};

/***** 
NOMBRE: call[5]
DESCRIPCIÓN: evento que se permite leer el cartel del muro.
*****/
engine.script.call[5] = function()
{
	//Si catedral es 1, indica que se entro a la
	//catedral a pasar el dia. Puede leer el cartel.
	if (catedral > 0) 
	{
   		document.getElementById('storyteller').innerHTML = ("CANOPUS [BUSCADO POR HEREJIA] - 50K Polares en Recompesa");	
		setTimeout(
		function()
		{
			engine.start(maptwo, -2, -3);
		},10000);

	 	multitud = 1;
	}
    catedral = 0;
};


/***** 
NOMBRE: call[6]
DESCRIPCIÓN: evento que se permite al usuario hablar con el NPC.
*****/
engine.script.call[6] = function() 
{
	document.getElementById('storyteller').innerHTML =("Canopus es un hereje al cual el Imperio Vampírico de Bredius anda buscando, generalmente se le puede ver rondando el mercado de la ciudad a altas horas de la noche, pero eso la caballería imperial no lo sabe.");
	
	setTimeout(
		function()
	{
		engine.start(mapthree, 0, 1);
	}, 12000);
};

/***** 
NOMBRE: call[7]
DESCRIPCIÓN: evento que se permite ingresar al mercado.
*****/
engine.script.call[7] = function()
{
	if(mercado > 0)
	{
	   engine.setMap(mapsix);
	   engine.viewport.x = 0;
	   engine.viewport.y = 4; 
	   engine.player.spriteIndex = 6;

	   engine.draw();

	   market = 1;
	}
};

/***** 
NOMBRE: call[8]
DESCRIPCIÓN: evento que se permite ingresar a la multitud.
*****/
engine.script.call[8] = function()
{
   if(multitud > 0)
   {
	   engine.setMap(mapseven);
	   engine.viewport.x = 0;
	   engine.viewport.y = 4; 
	   engine.player.spriteIndex = 6;

	   engine.draw();   

	   mercado = 1;
	}
   multitud = 0;
};

/***ENEMIGOS EN EL MERCADO*/ 

	//salvadhara = 1;

/***** 
NOMBRE: call[10]
DESCRIPCIÓN: evento que se permite luchar contra los soldados en el mercado.
*****/
	engine.script.call[10] = function()
	{
		if(salvadhara > 0)
		{
			engine.start(maptwo, -2, -3);
		salvadhara = 0;
		}

		
	};
/***** 
NOMBRE: call[9]
DESCRIPCIÓN: evento que se permite luchar contra Canopus en el mercado.
*****/
	engine.script.call[9] = function()
	{
		if(market > 0)
		{
			engine.start(maptwo, -2, -3);

			salvadhara = 1;
		}

		market = 0;
	};




	//salvadhara = 0;

/***** 
NOMBRE: call[11]
DESCRIPCIÓN: evento que se permite hablar con Adhara.
*****/
	engine.script.call[11] = function()
	{
		if (salvadhara < 1) 
		{
	   		document.getElementById('storyteller').innerHTML = "Hola soy Adhara....blah blah blah...";
			setTimeout(
			function()
			{
				engine.start(mapthree, -2, 7);
			},12000);

		  mercado = 0;
		  church = 1;
		  topo = 0;
		}
	};

/***** 
NOMBRE: call[12]
DESCRIPCIÓN: evento que se permite curar al usuario.
*****/
	engine.script.call[12] = function()
	{
		heal = 1;
	    EUA = 20;
		engine.warzone.stats(EUA, heal);	

	};

/***COFRES CON DIARIO
cofre1, cofre2 y cofre3 actuan como llaves.
cuando se mata a un mounstro, se abre la siguiente 
puerta y se cierra en la que se estaba.***/

/***** 
NOMBRE: call[13]
DESCRIPCIÓN: evento que se permite luchar contra el enemigo del cofre1.
*****/
	engine.script.call[13] = function()//cofre 1
	{
		if (cofre2 > 0) 
		{
			engine.start(maptwo, -2, -3);
	    
	   		cofre1 = 1;
	   		cofre2 = 0;
		}
		
	};
/***** 
NOMBRE: call[14]
DESCRIPCIÓN: evento que se permite luchar contra el enemigo del cofre2.
*****/
	engine.script.call[14] = function()//cofre 2
	{
		if (cofre1 > 0) 
		{
		  	engine.start(maptwo, -2, -3);

		  	cofre3 = 1;
		  	cofre1 = 0;
		}
		
	};
/***** 
NOMBRE: call[15]
DESCRIPCIÓN: evento que se permite luchar contra el enemigo del cofre3.
*****/
	engine.script.call[15] = function()//cofre 3
	{
			
		if (cofre3 > 0) 
		{
		  	engine.start(maptwo, -2, -3);

		  	cofre3 = 1;
		}	
	};


/***** 
NOMBRE: call[16]
DESCRIPCIÓN: evento que se permite hablar con Canopu, ahora en entre la multitud.
*****/
engine.script.call[16] = function() 
{
	
	if(cofre3 > 0)
	{
		document.getElementById('storyteller').innerHTML =("Ven conmigo Canopus te necesito para una mision... blah blah blah...");
		
		setTimeout(
			function()
		{
			engine.start(mapthree, 0, 1);
		}, 12000);

		canopustalk = 1;
	}

};

/***** 
NOMBRE: call[17]
DESCRIPCIÓN: evento que se permite ingresar al Templo de Fornax.
*****/
engine.script.call[17] = function()//TEMPLO DE FORNAX
{
	if(canopustalk > 0)
	{
		engine.setMap(mapeight);
		engine.viewport.x = 2;
		engine.viewport.y = -3;
		engine.player.spriteIndex = 6;

		engine.draw();
	}
		
};

/***** 
NOMBRE: call[18]
DESCRIPCIÓN: evento que se permite luchar contra el enemigo del Templo de Fornax.
*****/
	engine.script.call[18] = function()//ENEMIGO EN FORNAX
	{
		engine.start(maptwo, -2, -3);

		monocerotis = 1;
	};
