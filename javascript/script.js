engine.script = {};

engine.script.call = [];

var topo = 0;
var comadreja = 0;
var catedral = 0;
var multitud = 0; 
var mercado = 0; 
var salvadhara;


engine.script.call[0] = function()//CAMPO DE BATALLA
{
	if (comadreja < 1) 
	{
		engine.setMap(maptwo);
		engine.viewport.x = -2;
		engine.viewport.y = -3;
		engine.player.spriteIndex = 6;

		engine.draw(); 

		//LLAMA AL SONIDO DE FONDO	
		caiman = 1;
		engine.fondo(caiman);
	}
	
	comadreja = 1;
	/*Comadreja se usa para que cuando el personaje termine
	de luchar contra los enemigos del desierto, al
    pasar nuevamente por la zona donde se encuentran
    los enemigos, no se active. */
};


//EVENTO QUE SE DISPARA AL ENFRENTAR A UN ENEMY
var EUA; //Enemy Under Attack
engine.script.call[1] = function()
{
    EUA = Math.floor(Math.random()*2);
 
	engine.warzone.stats(EUA);	
 
};

engine.script.call[2] = function()//MONOCEROTIS
{
	engine.setMap(mapthree);
	engine.viewport.x = 5;
	engine.viewport.y = -4;
	engine.player.spriteIndex = 6;

	engine.draw();
};

engine.script.call[3] = function()//CATEDRAL
{
	if(topo < 1)
	{
		engine.setMap(mapfour);
		engine.viewport.x = 0;
		engine.viewport.y = 4;
		engine.player.spriteIndex = 6;

		engine.draw();

	
		setTimeout(
			function()
		    {  
		 	  engine.start(mapthree, 2, -1)
		 	}, 10000);	

		catedral = 1;
    }

	topo = 1;//Si topo es 1, indica que todavia no se ha
	//rescatado a Adhara. Al convertirse en 0, indica que
	//ya se rescato y puede entrar a la catral.


};

engine.script.call[4] = function()//SOTANO
{
	engine.setMap(mapfive);
	engine.viewport.x = -3;
	engine.viewport.y = -3;
	engine.player.spriteIndex = 6;

	engine.draw();
};

engine.script.call[5] = function()//CARTEL
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

engine.script.call[6] = function() //STORYTELLER
{
	document.getElementById('storyteller').innerHTML =("Canopus es un hereje al cual el Imperio Vampírico de Bredius anda buscando, generalmente se le puede ver rondando el mercado de la ciudad a altas horas de la noche, pero eso la caballería imperial no lo sabe.");
	
	setTimeout(
		function()
	{
		engine.start(mapthree, 0, 1);
	}, 12000);
};

engine.script.call[7] = function()//MERCADO
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

engine.script.call[8] = function()//MULTITUD
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


engine.script.call[9] = function()//CANOPUS
{
	if(market > 0)
	{
		engine.start(maptwo, -2, -3);

		salvadhara = 1;
	}

	market = 0;
};

//salvadhara = 1;
engine.script.call[10] = function()//SOLDADOS
{
	if(salvadhara > 0)
	{
		engine.start(maptwo, -2, -3);
	salvadhara = 0;
	}

	
};


engine.script.call[11] = function()
{
	if (salvadhara < 1) 
	{
   		document.getElementById('storyteller').innerHTML = ("Acabas de salvar a la chica y ella te agradece diciendo: @ADHARA: Gracias por haberme salvado. Tantas personas y sólo tú acudiste a mi llamado. Soy Adhara, mucho gusto. @ANTARES: Soy Antares, y por cierto, no fue nada.");	

		setTimeout(
		function()
		{
			engine.start(mapthree, -2, 7);
		},12000);

	  mercado = 0;
	}
};
