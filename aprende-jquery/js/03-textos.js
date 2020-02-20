$(document).ready(function(){

    reloadLinks();

    $("#add_boton").click(function(){
        $("#menu").append('<li><a href="' + $("#add_link").val() + '"></a></li>');
        reloadLinks();
    });

    function reloadLinks(){
        $("a").each(function(){
            var enlace = $(this).attr("href");
            $(this).text(enlace);
        });
    }

});