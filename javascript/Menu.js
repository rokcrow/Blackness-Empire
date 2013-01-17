var engine = {};
var opcion =1;

engine.menu = document.getElementById('menu');

engine.menu.innerHTML = '<audio autoplay> <source src ="Sounds/bienvenida/bienvenida.mp3"></audio>';

engine.menu.innerHTML = '<audio autoplay> <source src = "Sounds/Menu/opcion1.mp3"> </audio>';

switch(opcion)
{
	case 1: alert("hola");
	break;
}
