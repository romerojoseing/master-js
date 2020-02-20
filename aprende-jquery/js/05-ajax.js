$(document).ready(function(){

    // Load
    //$("#datos").load("https://reqres.in/");


    // Get y Post
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        response.data.forEach((element, index) => {
            $("#datos").append("<p>"+element.first_name+"</p>");
        });
    });

    $("#formulario").submit(function(e){
        e.preventDefault();

        var usuario = {
            name: $('input[name ="name"]').val(),
            web: $('input[name="web"]').val()
        };
        /*
        $.post($(this).attr("action"), usuario, function(response){
            console.log(response);
        }).done(function(){
            alert("Usuario agregado");
        });
        */
        $.ajax({
            type: 'POST',
            url: $(this).attr("action"),
            data: usuario,
            beforeSend: function(){
                console.log("Enciando usuario...");
            },
            success: function(response){
                console.log(response);
                alert("Usuario agregado");
            },
            error: function(){
                console.log("Ocurrio Error");
            },
            timeout: 2000
        });


        return false;
    });

});