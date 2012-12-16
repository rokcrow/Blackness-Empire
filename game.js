var canvas;
var ctx;
var dx = 10;
var dy = 10;
var x = 150;
var y = 100;
var r = 20;
var ancho = 300;
var alto = 300;


//Registrar los eventos que ocurran en la ventana, en este caso 'keydown'
window.addEventListener('keydown', doKeyDown);
init();//Llamamos a la funcion que inicializa todooo...


function init() 
{//Se toma el nombre del tag canvas para poder trabajar con el...
  //Ademas que se define que trabajaremos en 2D.
  canvas = document.getElementById('micanvas');
  ctx = canvas.getContext("2d");
  console.log(ctx);
  return setInterval(draw, 10);//Permite dibujar cada 10milisegundos
}

function draw()
{//Se hace un barrido en blanco en todo el canvas para hacer un clear...
  ctx.clearRect(0, 0, ancho, alto);
  ctx.beginPath();
  ctx.fillStyle = "purple";
  ctx.strokeStyle = "white";
  ctx.rect(0,0,ancho,alto);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  circle(x,y,r);//Se llama a la funcion que dibuja el circulo..
}

function circle(x,y,r)
{
  
  ctx.beginPath(); //Esto asegura que ninguna otra figura se interponga...
  ctx.fillStyle = "white";//Se colorea de azul
  ctx.arc(x, y, r, 0, Math.PI*2);//Se dibuja el circulo
  ctx.fill();//Y se rellena
}

function doKeyDown(evt)
{
  switch(evt.keyCode)
  {
    case 38: //Si se presiona tecla hacia arriba
            if (y-r > 0)//Si la posicion-radio es menor a 0, no se mueve. 
            {
              y -= dy; 
            }
       break;

    case 40:
            if (y+r < alto) 
            {
              y += dy;
            }
       break;

    case 37:
            if (x-r > 0) 
            {
              x -= dx;
            }
       break;

    case 39:
            if (x+r < ancho) 
            {
              x += dx;
            }
       break;
  }
}

