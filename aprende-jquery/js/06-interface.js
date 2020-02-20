// jQuery UI

$(document).ready(function(){
    var elemento = $(".elemento");
    var lista = $(".lista_selec");


    // Dragable - Mover un elemento por la pagina
    elemento.draggable();

    // Resizable - Redimensionar elemento
    elemento.resizable();

    // Selectable - Seleccionar elementos de una lista
    //lista.selectable();

    // Sortable - Ordenar lista
    lista.sortable();

    // Dropable - efecto de soltar y arrastrar
    $("#elemento_movido").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("Has soltado algo dentro del area");
        }
    });

    // Efectos
    $("#mostrar").click(function(){
        $(".caja-efectos").toggle("fade");
        
    });

    // Tooltip
    $(document).tooltip();

    // Dialog
    $("#lanzame").click(function(){
        $(".popup").dialog();
    });

    // Datepicker
    $("#calendario").datepicker();

    // Tabs
    $("#pestana").tabs();
    
});