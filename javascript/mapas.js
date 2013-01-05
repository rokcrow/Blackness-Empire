 
var tucan;


tucan = 0;   


var mapone =
[
   [    //DESIERTO
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}
   ],
   
   [ 
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, //item:4, onenter:0}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, onenter:0}, 
    {ground:1, onenter:0}, 
    {ground:1, item:2}, 
    {ground:1, item:2}
   ]
];
//Zona de Combate
var maptwo =
[
   [
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},   
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5, item:7, onactivate:2},//enemy
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},  
    {ground:5, item:2}
   ]
];

var mapthree =
[
   [    //DESIERTO
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}
   ],
   
   [ 
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, //item:4, onenter:0}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, onenter:tucan}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, onenter:0}, 
    {ground:1, onenter:0}, 
    {ground:1, item:2}, 
    {ground:1, item:2}
   ]
];

	  window.addEventListener('load', function()
      {//Posicion Inicial del personaje en Mapaone
       engine.start(mapone, -3, -3);   
      }, false);

	window.addEventListener('keydown', engine.keyboard.parseInput, false);




