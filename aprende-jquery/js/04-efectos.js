$(document).ready(function(){
    
    // Hide y Show
    $("#mostrar").hide();

    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();    
        //$("#caja").fadeIn("normal");
        $("#caja").fadeTo("slow",0.8);
        //$("#caja").show("normal");
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        //$("#caja").fadeOut("normal");
        $("#caja").fadeTo("slow",0.2);
        //$("#caja").hide("normal");
    });

    $("#todo").click(function(){
        // $("#caja").toggle("fast");
        $("#caja").slideToggle("fast");
    });

});