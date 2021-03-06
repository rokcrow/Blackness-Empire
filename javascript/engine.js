
var engine = {};
var opcion;

engine.repro1 = document.getElementById('repro1'); // musica
engine.repro2 = document.getElementById('repro2'); // hablar
engine.repro3 = document.getElementById('repro3'); // efectos
engine.repro4 = document.getElementById('repro4'); // auxiliar
engine.canvas = document.getElementById('canvas');
engine.handle = engine.canvas.getContext('2d');

//AQUI SE REPRODUCEN TODOS LOS SONIDOS....



/***** 
NOMBRE: Menu 
DESCRIPCIÓN: permite reproducir los sonidos del menu
*****/

engine.menu = function()
{
//MUSICA DE FONDO
engine.soundsback(2);

//BIENVENIDA
engine.repro2.innerHTML = '<audio autoplay> <source src ="audio/narraciones/bienvenida.mp3"></audio>';

//MENU
setTimeout(
function()
{
	opcion = 2;
	engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/menu/opcion1.mp3"> </audio>';
    
	if(opcion == 2)
	{
		setTimeout(
		function()
		{
			opcion = 3
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/menu/opcion2recuperar.mp3"> </audio>';

			if(opcion == 3)
			{
				setTimeout(
				function()
				{
					opcion = 4
					engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/menu/opcion3instrucciones.mp3"> </audio>';
				
						if(opcion == 4)
						{
							setTimeout(
							function()
							{
								opcion = 5
								engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/menu/opcion4creditos.mp3"> </audio>';
							

									if(opcion == 5)
									{
										setTimeout(
										function()
										{ opcion =5;
	 									engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/menu/opcion5salir.mp3"> </audio>';
										},3000);
									}

							},3000);
						}
				},4000);
			}
		},3000);
	}

},3000);


};

/***** 
NOMBRE: soundback 
DESCRIPCIÓN: permite reproducir musica de fondo
*****/
engine.soundsback = function(topo)
{ 
	switch(topo) 
	{
		case 1: 	
			engine.repro1.innerHTML = '<audio autoplay loop> <source src ="audio/musica/musicpelea.mp3"></audio>';
			break;
		case 2:
			engine.repro1.innerHTML = '<audio autoplay loop> <source src ="audio/musica/musicintro.mp3"></audio>';
			break;				
	}	
};
/***** 
NOMBRE: storyteller
DESCRIPCIÓN: permite reproducir narraciones
*****/
engine.storyteller = function(caiman)
{
	switch(caiman)
	{
		//DIRECCIONES
			case 1:
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/efectos/caminarena.mp3"> </audio>';
			break;//NORTE

			case 2:
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/efectos/caminarena.mp3"> </audio>';
			break;//SUR

			case 3:
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/efectos/caminarena.mp3"> </audio>';
			break;//OESTE

			case 4:
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/efectos/caminarena.mp3"> </audio>';
			break;//ESTE

//APARECE ENEMIGO
		case 5:
		
			
//ENEMIGO SALVAJE HA APARECIDO...> 
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/enemigosalvajeaparecido.mp3"> </audio>';
				

			//ENEMY HABLA
			setTimeout(function()
			{
				engine.ayuda(11);
			
				//COMBATE INICIADO
				setTimeout(function()
				{
					engine.ayuda(12);
				},4000);

			},4000);

		break;

//ZONA DE GUERRA
			case 6: 
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/enemigotiene.mp3"> </audio>';
			break;//EL ENEMIGO TIENE

			case 7://X PUNTOS DE VIDA
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/puntosdevida.mp3"> </audio>';
		    break;

		case 8://INTRODUCCION
		engine.repro2.innerHTML = '<audio autoplay > <source src = "audio/narraciones/capitulo1/intro.mp3"> </audio>';
		
		//NARRACION 1 CAP1
		 setTimeout(function()
		 {
			engine.repro2.innerHTML = '<audio autoplay > <source src = "audio/narraciones/capitulo1/narracion1.mp3"> </audio>';
					
			
			
		},180000);

		 setTimeout(function()
		 {
		 	engine.efects(2);
		 },180000);


		break;
		
//ZONA DE GUERRA
			case 9:  //AHORA TU TIENES X PUNTOS DE PODER
			engine.repro2.innerHTML = '<audio autoplay> <source src = "test2.mp3"> </audio>';
			break;

			case 10:  //PLAYER FALLA
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/falladoungolpe.mp3"> </audio>';
			break;

			case 11:  	
			//ENEMY HABLA
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/nopuedeser.mp3"> </audio>';
				
			setTimeout(function()
			{//ENEMIGO A PERDIDO
				
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/enemigoaperdido.mp3"> </audio>';

				setTimeout(function()
				{//COMBATE FINALIZADO

				engine.storyteller(17);
				},4000);

				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/combatefinalizado.mp3"> </audio>';

			},4000);

			break;

			case 12:  //TIENES TANTOS PUNTOS DE VIDA
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/ahoratienes.mp3"> </audio>';
					 
			  setTimeout(function()
			{
				engine.repro2.innerHTML = '<audio autoplay> <source src = "test.mp3"> </audio>';
			},10000);

				break;

			case 13: //ENEMY STATS
			engine.repro2.innerHTML = '<audio autoplay> <source src = "test.mp3"> </audio>';
			break;

			case 14:  //ENEMY FALLA
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/enemigoafallado.mp3"> </audio>';
			break;

			

			case 15:  //ENEMIGO DESTRUIDO
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/enemigoasidoderrotado.mp3"> </audio>';
			break;

			

			case 16:  //HAS PERDIDO
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/hasperdido.mp3"> </audio>';
			
			 setTimeout(function()
			{
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/gameover.mp3"> </audio>';
				engine.menu();
			},4000);

			 

			break;

		case 17:  //NARRACION 2, CAP1
		engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/capitulo1/narracion2.mp3"> </audio>';
		break;
	}
};


/***** 
NOMBRE: efects
DESCRIPCIÓN: permite reproducir efectos de sonido
*****/
engine.efects = function(caiman)
{
	switch(caiman)
	{
		case 1://CUANDO SE ACERCA A LA IGLESIA SE EMITE ESTO
		engine.repro3.innerHTML = '<audio autoplay > <source src = "test2.mp3"> </audio>';
		break;

		case 2://viento excepcion
		engine.repro1.innerHTML = '<audio autoplay loop> <source src = "audio/efectos/vientosopla.mp3"> </audio>';
		break;

		case 3://CHOQUE ESPADAS
		engine.repro3.innerHTML = '<audio autoplay> <source src = "audio/efectos/espadachoca.mp3"> </audio>';
		break;

		case 4://CHOQUE rocas
		engine.repro3.innerHTML = '<audio autoplay> <source src = "audio/efectos/golpe.mp3"> </audio>';
		break;
	}
};


engine.ayuda = function(help)
{
	switch(help)
	{
		//NUMERACION
			case 1:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/un.mp3"> </audio>';
				
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);
			break;

			case 2:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/2.mp3"> </audio>';
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);
			break;

			case 3:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/3.mp3"> </audio>';
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);
			break;

			case 4:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/4.mp3"> </audio>';
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);			
				break;

			case 5:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/5.mp3"> </audio>';
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);
			break;

			case 6:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/6.mp3"> </audio>';
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);
			break;

			case 7:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/7.mp3"> </audio>';
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);
			break;

			case 8:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/8.mp3"> </audio>';
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);
			break;

			case 9:
				engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/numeros/9.mp3"> </audio>';
				setTimeout(function()
				{
					engine.storyteller(7);
				},2000);
			break;



		case 11:
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/hablaenemigo.mp3"> </audio>';

		break;

		case 12:
			engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/combate/combateiniciado.mp3"> </audio>';

		break;
	}
}


engine.instrucciones = function ()
{
	//MENU
	engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/instrucciones1.mp3"> </audio>';


};

engine.creditos = function ()
{
	//MENU
	engine.repro2.innerHTML = '<audio autoplay> <source src = "audio/narraciones/creditos.mp3"> </audio>';


};
//HASTA AQUI...

/***** 
NOMBRE: draw 
DESCRIPCIÓN: permite dibujar en el canvas
*****/

engine.draw = function()
{
	if (engine.tile.allLoaded() === false) 
	{
		setTimeout(engine.draw, 100);
	}

	else 
	{
		engine.map.draw();
		engine.player.draw();
	}
};

/***** 
NOMBRE: currentMap 
DESCRIPCIÓN: permite definir el mapa que se utiliza
*****/
engine.currentMap = null;

engine.setMap = function(mapData)
{
	engine.currentMap = mapData;
};


/***** 
NOMBRE: start
DESCRIPCIÓN: permite iniciar el motor de trabajo del juego
*****/
engine.start = function(mapData, x, y, tucan)
{
	
	engine.viewport.x = x;
	engine.viewport.y = y;

	engine.tile.store(0, 'imagenes/tile_black.png');
	engine.tile.store(1, 'imagenes/tile_black.png');
	engine.tile.store(2, 'imagenes/tile_black.png');
	engine.tile.store(3, 'imagenes/tile_black.png');
	engine.tile.store(4, 'imagenes/tile_black.png');
	engine.tile.store(5, 'imagenes/tile_black.png');
	engine.tile.store(6, 'imagenes/tile_black.png');	
	engine.tile.store(7, 'imagenes/tile_black.png');

 
	engine.setMap(mapData);

	engine.player.store(0, 'imagenes/tile_black.png');
	engine.player.store(1, 'imagenes/tile_black.png');
	engine.player.store(2, 'imagenes/tile_black.png');


	engine.player.store(3, 'imagenes/tile_black.png');
	engine.player.store(4, 'imagenes/tile_black.png');
	engine.player.store(5, 'imagenes/tile_black.png');


	engine.player.store(6, 'imagenes/tile_black.png');
	engine.player.store(7, 'imagenes/tile_black.png');
	engine.player.store(8, 'imagenes/tile_black.png');


	engine.player.store(9,  'imagenes/tile_black.png');
	engine.player.store(10, 'imagenes/tile_black.png');
	engine.player.store(11, 'imagenes/tile_black.png');

	

	if(opcion == 5)
	{
			engine.draw();

	}

	//engine.efecto(1);

	engine.keyboard.canInput = true;

};
/*
engine.tile.store(0, 'imagenes/tile_black.png');
	engine.tile.store(1, 'imagenes/tile_grass.png');
	engine.tile.store(2, 'imagenes/tile_rock.png');
	engine.tile.store(3, 'imagenes/ladderdown.png');
	engine.tile.store(4, 'imagenes/ladderup.png');
	engine.tile.store(5, 'imagenes/cave.png');
	engine.tile.store(6, 'imagenes/sign.png');	
	engine.tile.store(7, 'imagenes/enemy.png');

 
	engine.setMap(mapData);

	engine.player.store(0, 'imagenes/scientist_n0.png');
	engine.player.store(1, 'imagenes/scientist_n1.png');
	engine.player.store(2, 'imagenes/scientist_n2.png');


	engine.player.store(3, 'imagenes/scientist_e0.png');
	engine.player.store(4, 'imagenes/scientist_e1.png');
	engine.player.store(5, 'imagenes/scientist_e2.png');


	engine.player.store(6, 'imagenes/scientist_s0.png');
	engine.player.store(7, 'imagenes/scientist_s1.png');
	engine.player.store(8, 'imagenes/scientist_s2.png');


	engine.player.store(9,  'imagenes/scientist_w0.png');
	engine.player.store(10, 'imagenes/scientist_w1.png');
	engine.player.store(11, 'imagenes/scientist_w2.png');

	//////////////

	engine.tile.store(0, 'imagenes/tile_black.png');
	engine.tile.store(1, 'imagenes/tile_black.png');
	engine.tile.store(2, 'imagenes/tile_black.png');
	engine.tile.store(3, 'imagenes/tile_black.png');
	engine.tile.store(4, 'imagenes/tile_black.png');
	engine.tile.store(5, 'imagenes/tile_black.png');
	engine.tile.store(6, 'imagenes/tile_black.png');	
	engine.tile.store(7, 'imagenes/tile_black.png');

 
	engine.setMap(mapData);

	engine.player.store(0, 'imagenes/tile_black.png');
	engine.player.store(1, 'imagenes/tile_black.png');
	engine.player.store(2, 'imagenes/tile_black.png');


	engine.player.store(3, 'imagenes/tile_black.png');
	engine.player.store(4, 'imagenes/tile_black.png');
	engine.player.store(5, 'imagenes/tile_black.png');


	engine.player.store(6, 'imagenes/tile_black.png');
	engine.player.store(7, 'imagenes/tile_black.png');
	engine.player.store(8, 'imagenes/tile_black.png');


	engine.player.store(9,  'imagenes/tile_black.png');
	engine.player.store(10, 'imagenes/tile_black.png');
	engine.player.store(11, 'imagenes/tile_black.png');
*/