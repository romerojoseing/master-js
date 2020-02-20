$(document).ready(function(){


    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
          });
    }
    


    // Posts
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                titulo: "Prueba de Titulo 1",
                fecha: "Publicado: " + moment().format("MMMM Do YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet tenetur ipsa a nobis doloribus ab vitae accusamus atque nemo quas neque consequuntur cumque id rerum sequi! Dolore, repellendus ullam?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet tenetur ipsa a nobis doloribus ab vitae accusamus atque nemo quas neque consequuntur cumque id rerum sequi! Dolore, repellendus ullam?"
            },
            {
                titulo: "Prueba de Titulo 2",
                fecha: "Publicado: " + moment().format("MMMM Do YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet tenetur ipsa a nobis doloribus ab vitae accusamus atque nemo quas neque consequuntur cumque id rerum sequi! Dolore, repellendus ullam?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet tenetur ipsa a nobis doloribus ab vitae accusamus atque nemo quas neque consequuntur cumque id rerum sequi! Dolore, repellendus ullam?"
            },
            {
                titulo: "Prueba de Titulo 3",
                fecha: "Publicado: " + moment().format("MMMM Do YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet tenetur ipsa a nobis doloribus ab vitae accusamus atque nemo quas neque consequuntur cumque id rerum sequi! Dolore, repellendus ullam?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet tenetur ipsa a nobis doloribus ab vitae accusamus atque nemo quas neque consequuntur cumque id rerum sequi! Dolore, repellendus ullam?"
            },
            {
                titulo: "Prueba de Titulo 4",
                fecha: "Publicado: " + moment().format("MMMM Do YYYY"),
                contenido: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet tenetur ipsa a nobis doloribus ab vitae accusamus atque nemo quas neque consequuntur cumque id rerum sequi! Dolore, repellendus ullam?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, amet tenetur ipsa a nobis doloribus ab vitae accusamus atque nemo quas neque consequuntur cumque id rerum sequi! Dolore, repellendus ullam?"
            }
        ]

        posts.forEach((elemento, index) => {
            var post = `
            <article class="post">
                <h2>${elemento.titulo}</h2>
                <span class="date">${elemento.fecha}</span>
                <p>${elemento.contenido}</p>
                <a href="#" class="boton">Ver Mas</a>
            </article>
            `;

            $("#posts").append(post);
        });
    }


    // Cambiador de Colores
    var theme = $("#theme");

    $("#green").click(function(){
        theme.attr("href", "css/green.css");
    }); 

    $("#red").click(function(){
        theme.attr("href", "css/red.css");
    }); 

    $("#blue").click(function(){
        theme.attr("href", "css/blue.css");
    }); 


    // Scroll arriba de la web
    $(".subir").click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    
    // Login Falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined"){
        var about_parrafo = $("#about p");

        about_parrafo.html("<br><hr><br><strong>Bienvenido, " + form_name+ "</strong><br>");        
        about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);    
        }, 1000);
    }


    // Validacion de Formulario
    if(window.location.href.indexOf('contact') > -1){

        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es'
          });
    }
    
});