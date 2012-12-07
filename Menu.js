$(document).on('ready', function(){
	$(document).keydown(function(event){

		if (event.keyCode == 49) 
			{
				window.open('game.html','_self');
			}
	});
});