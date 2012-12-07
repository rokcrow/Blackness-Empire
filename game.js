

//Aplicacion que permite mover una imagen con el teclado.

$(document).on('ready', function(){
	var altoventana = $(window).height();
	var anchoventana = $(window).width();
	var posicionobjeto = $("img").position();

//alert("Top:" + parseInt(posicionobjeto.top) + " || Left:" + parseInt(posicionobjeto.left));


	$(document).keydown(function(event)//detecta que una tecla se presiono
	{
	    
	 if (event.keyCode == 37) //presionas ASCII 37 (IZQ) y asi...
	    {
   		  if (posicionobjeto.left<200) 
  	   	 	{  //Hace que la posicion de la imagen sea estatica y no se mueva.
  	   	 		$('img').css("position:static;");
  	   	 	}
  	   	  else
         	{
   		 		$('#imagen1').animate({left:'-=100px'},200);
   			 	posicionobjeto = $("img").position();
  	   	 		$("span").text("Top:" + parseInt(posicionobjeto.top) + " || Left:" + parseInt(posicionobjeto.left));
  	     	}
   		} 
  	 else if (event.keyCode == 39) //DERECHA
  	   { 
  	   	 if (posicionobjeto.left>600) 
  	   	 {
  	   	 	$('img').css("position:static;");
  	   	 }
  	   	 else
  	   	 {
  	   	 	$('#imagen1').animate({left:'+=100px'},200);
       	    posicionobjeto = $("img").position();
  	        $("span").text("Top:" + parseInt(posicionobjeto.top) + " || Left:" + parseInt(posicionobjeto.left));
  	     }
  	   }
  	 else if (event.keyCode == 38) //arriba
  	   {
       	 if (posicionobjeto.top<200) 
  	   	 {
  	   	 	$('img').css("position:static;");
  	   	 }
       	 else	
       	 {	
       	 	$('#imagen1').animate({top:'-=100px'},200);
       	 	posicionobjeto = $("img").position();
  	   	 	$("span").text("Top:" + parseInt(posicionobjeto.top) + " || Left:" + parseInt(posicionobjeto.left));
  	     }
  	   }
  	 else if (event.keyCode == 40) //abajo
  	   {
       	 if (posicionobjeto.top>300) 
  	   	 {
  	   	 	$('img').css("position:static;");
  	   	 } 
   		 else
   		 {
   			$('#imagen1').animate({top:'+=100px'},200);
       	 	posicionobjeto = $("img").position();
  	   	 	$("span").text("Top:" + parseInt(posicionobjeto.top) + " || Left:" + parseInt(posicionobjeto.left));
   		 }
  	   }	

  	 
	});
});


  