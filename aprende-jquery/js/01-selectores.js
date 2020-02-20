// Selectores en jQuery -- El $ hace referencia a jQuery

$(document).ready(function(){

    console.log("jQuery Cargado");

    // Selector de ID
    $("#rojo").css("background","red")      // (Parametro Clave, Parametro Valor)
              .css("color","white");
    
    $("#amarillo").css("background","yellow")
                  .css("color","white");
    $("#verde").css("background","green")     
               .css("color","white");


    // Selector de Clase
    var mi_clase = $(".zebra").css("padding","5px");

    $(".sin_borde").click(function(){
        console.log("Click");
        $(this).addClass("zebra");
    });
   

    // Selector de Etiqueta
    var parrafos = $("p").css("cursor","pointer");

    parrafos.click(function(){
        var that = $(this);

        if(!$(that).hasClass("grande")){
            $(that).addClass("grande");
        }else{
            $(that).removeClass("grande");
        }
    });


    // Selector de Atrubito
    $('[title="google"]').css("background","#ccc");
    $('[title="facebook"]').css("background","blue");


    // Otros
    // $("p,a").addClass("margen-superior");

    var buscar = $("#caja").find(".resaltado");
    var buscare = $("#caja .resultado").eq(0).parent().find('[title="facebook"]');
    console.log(buscar);
    console.log(buscare);
});