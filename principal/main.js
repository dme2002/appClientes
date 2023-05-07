




function mostrarUbicacionActual() {
       /** @type {HTMLElement}*/
       var posElt;
       /** @type {HTMLElement} */
       var posLinkElt;

    let mapaImagen=document.getElementById('mapa');
    let contenidoMapa=document.getElementById('contenido-mapa');
    let botonMostrar=document.getElementById('boton-confirmar');
    let botonPagar=document.getElementById('boton-pagar');
    let contenedorLink=document.getElementById('contenedor-link');
   
   

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        var link = document.getElementById("myLink");
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log("Latitud: " + latitude + ", Longitud: " + longitude);

        document.getElementById('Pos').innerHTML=`${latitude}, ${longitude}`;
        document.getElementById('PosLink').innerHTML='Mostrar tu posición en un mapa';
       
        

        link.setAttribute("href", `https://maps.google.com/?q=${latitude},${longitude}`);
        link.setAttribute("target", "_blank");


        });
    } else {
        console.log("La localización no es soportada por este navegador.");
    }
    

    mapaImagen.setAttribute("style", "display:none;");
    contenidoMapa.setAttribute("style", "display:none;");
    botonMostrar.setAttribute("style", "display:none;");
    botonPagar.setAttribute("style", "display:block;");
    contenedorLink.setAttribute("style", "display:block;");
    
    


}





function mostrarPaginaBienvenida() {
   // document.getElementById('seccion-Bienvenida').style.display="block";
    document.getElementById('seccion-landingPage').style.display="none";
   // document.getElementById('seccion-inicioSesion').style.display="none";
   // document.getElementById('seccion-registro').style.display="none";

window.location.href = "http://127.0.0.1:5500/Bienvenida/index.html";
}

function mostrarPaginaInicioSesion() {
   // document.getElementById('seccion-inicioSesion').style.display="block";
   // document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
    window.location.href = "http://127.0.0.1:5500/iniciar%20Seccion/inicio-sesion.html";
}

function mostrarPaginaRegistro() {

   // document.getElementById('seccion-registro').style.display="block";
    //document.getElementById('seccion-inicioSesion').style.display="none";
    //document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
    window.location.href = "http://127.0.0.1:5500/registro/registro.html";
}






