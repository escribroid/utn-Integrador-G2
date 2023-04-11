$(window).scroll(function() {

    var position =$(this).scrollTop();

    // Si el usuario baja el scroll muestro el div qeu contiene el enlace botón
    if (position > 200) {
    $(".boton-subir").fadeIn('slow');
    } else {
        $(".boton-subir").fadeOut('slow');
    }
});