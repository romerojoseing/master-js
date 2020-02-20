$(document).ready(function(){

	// MouseOver y MouseOut
	var caja = $("#caja");

	// Mouse Over
	/*
	caja.mouseover(function(){
		$(this).css("background","red");
	});

	// Mouse Out
	caja.mouseout(function(){
		$(this).css("background","green");
	});
	*/

	function cambiaRojo(){
		$(this).css("background","red");
	}

	function cambiaVerde(){
		$(this).css("background","green");
	}


	// Hover
	caja.hover(cambiaRojo, cambiaVerde);

	
	// Click, Doble Click
	caja.click(function(){
		$(this).css("background","blue")
			   .css("color","white");
	});		

	caja.dblclick(function(){
		$(this).css("background","pink")
			   .css("color","red");
	});		


	// Blur y Focus
	var nombre = $("#nombre");
	var datos = $("#datos");

	nombre.focus(function(){
		$(this).css("border","2px solid blue");
	});

	nombre.blur(function(){
		$(this).css("border","1px solid #ccc");
		
		$(datos).text($(this).val()).show();
	});


	// Mousedown Mouseup
	datos.mousedown(function(){
		$(this).css("border-color", "grey")
	});

	datos.mouseup(function(){
		$(this).css("border-color", "black")
	});


	// Mousemove
	$(document).mousemove(function(){
		
		$('body').css("cursor", "none");
		
		$("#sigueme").css("left",event.clientX)
					 .css("top",event.clientY);
	});


});