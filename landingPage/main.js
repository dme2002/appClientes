

document.getElementById('formulario-login').addEventListener('submit',validarlogin);
document.getElementById('formulario-registro').addEventListener('submit',validarRegistro);


function validarlogin(e) {
    e.preventDefault();
    
    let correo   =document.getElementById('correo').value;
    let contraseña =document.getElementById('contraseña').value;
    let expRegularText=/^ d+$/;
    let expRegularPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    let expCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let acceso=false;


    if (correo==null || correo.length==0 || expCorreo.test(correo.value)) {
    alert('Correo invalido');
    document.getElementById('correo').style.boxShadow='0 0 5px red';
        console.log('error');
        acceso= false;
    
        
    } else if (contraseña==null || contraseña.length<8 || expRegularPassword.test(contraseña.value)) {
        alert('Contraseña invalida');
        document.getElementById('contraseña').style.boxShadow='0 0 5px red';
            console.log('error');
            acceso= false;
        

    } else if(acceso=true){
        mostrarPaginaMenu();

    }

}


function validarRegistro(e) {
    e.preventDefault();

    let nombre     =document.getElementById('nombre-registro').value;
    let apellido   =document.getElementById('apellido-registro').value;
    let correo     =document.getElementById('correo-registro').value;
    let contraseña =document.getElementById('contraseña-registro').value;


    let expRegularText=/^ d+$/;
    let expRegularPassword= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
    let expCorreo =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let acceso=false;

    if (nombre==null || nombre.length==0 || expRegularText.test(nombre.value)) {
        alert('Nombre invalido');
        document.getElementById('nombre-registro').style.boxShadow='0 0 5px red';
            console.log('error');
            acceso= false;
    }

    else if (apellido==null || apellido.length==0 || expRegularText.test(apellido.value)) {
        alert('apellido invalido');
        document.getElementById('apellido-registro').style.boxShadow='0 0 5px red';
            console.log('error');
            acceso= false;
        
            
        }

    else if (correo==null || correo.length==0 || expCorreo.test(correo.value)) {
    alert('Correo invalido');
    document.getElementById('correo-registro').style.boxShadow='0 0 5px red';
        console.log('error');
        acceso= false;
    
        
    } else if (contraseña==null || contraseña.length<8 || expRegularPassword.test(contraseña.value)) {
        alert('Contraseña invalida');
        document.getElementById('contraseña-registro').style.boxShadow='0 0 5px red';
            console.log('error');
            acceso= false;


    } else if(acceso=true){
        mostrarPaginaMenu();

    }

}

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
    
    //agregando coordenadas al mapa

    





}





function mostrarPaginaBienvenida() {
    document.getElementById('seccion-Bienvenida').style.display="block";
    document.getElementById('seccion-landingPage').style.display="none";
    document.getElementById('seccion-inicioSesion').style.display="none";
    document.getElementById('seccion-registro').style.display="none";
}

function mostrarPaginaInicioSesion() {
    document.getElementById('seccion-inicioSesion').style.display="block";
    document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
}

function mostrarPaginaRegistro() {

    document.getElementById('seccion-registro').style.display="block";
    document.getElementById('seccion-inicioSesion').style.display="none";
    document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
}

function mostrarPaginaMenu() {

    document.getElementById('seccion-menu').style.display="block";
    document.getElementById('seccion-registro').style.display="none";
    document.getElementById('seccion-inicioSesion').style.display="none";
    document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
    document.getElementById('seccion-ubicacion').style.display="none";
}

function mostrarPaginaCarrito() {

    document.getElementById('seccion-carrito').style.display="block";
    document.getElementById('seccion-menu').style.display="none";
    document.getElementById('seccion-registro').style.display="none";
    document.getElementById('seccion-inicioSesion').style.display="none";
    document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
}

function mostrarPaginaUbicacion() {

    document.getElementById('seccion-ubicacion').style.display="block";
    document.getElementById('seccion-tarjeta').style.display="none";
    document.getElementById('seccion-carrito').style.display="none";
    document.getElementById('seccion-menu').style.display="none";
    document.getElementById('seccion-registro').style.display="none";
    document.getElementById('seccion-inicioSesion').style.display="none";
    document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
}

function mostrarPaginaTarjeta() {

    document.getElementById('seccion-tarjeta').style.display="block";
    document.getElementById('seccion-ubicacion').style.display="none";
    document.getElementById('seccion-carrito').style.display="none";
    document.getElementById('seccion-menu').style.display="none";
    document.getElementById('seccion-registro').style.display="none";
    document.getElementById('seccion-inicioSesion').style.display="none";
    document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
}

function mostrarPaginaFinalizar() {

    
    document.getElementById('seccion-finalizar').style.display="block";
    document.body.style.background='#0C79FA';
    document.getElementById('seccion-tarjeta').style.display="none";
    document.getElementById('seccion-ubicacion').style.display="none";
    document.getElementById('seccion-carrito').style.display="none";
    document.getElementById('seccion-menu').style.display="none";
    document.getElementById('seccion-registro').style.display="none";
    document.getElementById('seccion-inicioSesion').style.display="none";
    document.getElementById('seccion-Bienvenida').style.display="none";
    document.getElementById('seccion-landingPage').style.display="none";
}

