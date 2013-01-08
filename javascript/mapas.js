 
var tucan;


tucan = 20;   


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
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1, item:2}, 
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
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}, 
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
    {ground:1, item:2}, 
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
    {ground:1, item:2}, 
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
    {ground:1, onenter:2}, 
    {ground:1, onenter:2}, 
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
    {ground:5, item:7, onactivate:1},//enemy
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
   [    //MONOCEROTIS
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
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
        {ground:5, onenter:3}, 
        {ground:5, onenter:3}, 
        {ground:5, onenter:3}, 
        {ground:5, onenter:3}, 
        {ground:5, onenter:3}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
        {ground:5, onenter:3}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
        {ground:5, onenter:3}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
        {ground:5, onenter:3}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
        {ground:5, onenter:3}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1, item:2}
   ],
   [
    {ground:1, item:2}, 
    {ground:1}, 
    {ground:1}, 
    {ground:1}, 
        {ground:5, onenter:3}, 
        {ground:5, onenter:3}, 
        {ground:5, onenter:3}, 
        {ground:5, onenter:3}, 
        {ground:5, onenter:3}, 
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
   ]
];

//Iglesia
var mapfour =
[
   [
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},   
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:1, onenter:4}, 
    {ground:1, onenter:4},
    {ground:1, onenter:4},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:1, onenter:4}, 
    {ground:1, onenter:4},
    {ground:1, onenter:4},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},  
    {ground:5, item:2}
   ]
];

//Sotano
var mapfive =
[
   [
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},   
    {ground:5, item:2},
    {ground:5, item:2},
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
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5},
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5},
    {ground:5}, 
    {ground:5},
    {ground:5}, 
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2}, 
    {ground:1, onenter:5}, //envia a zona de combate
    {ground:1, onenter:5}, //envia a zona de combate
    {ground:1, onenter:5}, //envia a zona de combate
    {ground:3, onenter:6}, //envia a zona de combate
    {ground:3, onenter:6},//envia a zona de combate
    {ground:3, onenter:6},//envia a zona de combate
    {ground:6, onenter:7}, //envia a zona de combate
    {ground:6, onenter:7},//envia a zona de combate
    {ground:6, onenter:7}, //envia a zona de combate
    {ground:5, item:2}
   ],
   [
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},
    {ground:5, item:2},  
    {ground:5, item:2}
   ]
];


	  window.addEventListener('load', function()
      {//Posicion Inicial del personaje en Mapaone
       engine.start(mapone, -3, -3);   
      }, false);

	window.addEventListener('keydown', engine.keyboard.parseInput, false);
//-3-3



